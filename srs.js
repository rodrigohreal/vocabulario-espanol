/* ═══════════════════════════════════════════════════════════
   SRS — Spaced Repetition System
   ────────────────────────────────────────────────────────────
   Tracks per-exercise mastery so wrong answers resurface for
   review. SM-2 inspired:
     • new exercise           → recorded on first encounter
     • correct (streak grows) → due interval grows ~ ease × streak²
     • wrong (streak resets)  → ease drops, due in 5 minutes
     • mastered exercises     → eventually evicted to fit
                                Telegram CloudStorage's 4 KB/value

   Storage shape (`srs` key, single JSON blob):
     {
       "<exId>": { e: <ease>, d: <dueMs>, s: <streak>, l: <lessonId> },
       ...
     }
   exId is a short fnv32-base36 hash of the exercise JSON, so
   identical exercises across lessons (e.g. shared "Repaso"
   items) collapse to one record.
   ════════════════════════════════════════════════════════ */

const SRS = (() => {
  const KEY            = 'srs';
  const MIN_EASE       = 1.3;
  const MAX_EASE       = 2.8;
  const EASE_BUMP_OK   = 0.05;
  const EASE_BUMP_BAD  = 0.20;
  const RELEARN_MS     = 5 * 60 * 1000;            // 5 minutes
  const DAY_MS         = 24 * 60 * 60 * 1000;
  const MAX_RECORDS    = 200;                       // cap to fit 4 KB CloudStorage
  const REVIEW_BATCH   = 12;

  let records = Object.create(null);  // in-memory cache, mirror of Storage

  // ── fnv32a-base36 hash (no crypto required, no collisions in practice) ──
  function _hash(obj) {
    const s = _canonicalize(obj);
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return h.toString(36);
  }

  // Deterministic JSON: sort keys so logically-equal objects hash to the same exId.
  function _canonicalize(v) {
    if (v === null || typeof v !== 'object') return JSON.stringify(v);
    if (Array.isArray(v)) return '[' + v.map(_canonicalize).join(',') + ']';
    const keys = Object.keys(v).sort();
    return '{' + keys.map(k => JSON.stringify(k) + ':' + _canonicalize(v[k])).join(',') + '}';
  }

  function exId(exercise) {
    return _hash(exercise);
  }

  // ── lifecycle ─────────────────────────────────────────────
  function init() {
    records = Storage.getJSON(KEY, null) || Object.create(null);
  }

  function _persist() {
    // Evict oldest mastered items if we're over budget.
    const ids = Object.keys(records);
    if (ids.length > MAX_RECORDS) {
      ids.sort((a, b) => records[a].d - records[b].d); // sort by due ascending
      // Drop from the far-future end (the most mastered).
      const drop = ids.length - MAX_RECORDS;
      for (let i = 0; i < drop; i++) delete records[ids[ids.length - 1 - i]];
    }
    Storage.setJSON(KEY, records);
  }

  // ── scoring ────────────────────────────────────────────────
  function record(exercise, correct, lessonId) {
    const id = exId(exercise);
    const now = Date.now();
    const r = records[id] || { e: 2.0, d: now, s: 0, l: lessonId || null };
    if (lessonId) r.l = lessonId;

    if (correct) {
      r.s += 1;
      r.e = Math.min(MAX_EASE, r.e + EASE_BUMP_OK);
      // Interval: streak 1 → 1d, streak 2 → 3d, streak 3+ → s² × ease days.
      const days = r.s <= 1 ? 1 : r.s === 2 ? 3 : (r.s * r.s) * r.e;
      r.d = now + days * DAY_MS;
    } else {
      r.s = 0;
      r.e = Math.max(MIN_EASE, r.e - EASE_BUMP_BAD);
      r.d = now + RELEARN_MS;
    }

    records[id] = r;
    _persist();
  }

  // ── queries ───────────────────────────────────────────────
  function dueCount(now = Date.now()) {
    let n = 0;
    for (const id in records) if (records[id].d <= now) n++;
    return n;
  }

  function totalTracked() {
    return Object.keys(records).length;
  }

  /**
   * Return up to `limit` exIds sorted by due (oldest overdue first).
   * Each entry: { exId, lessonId }.
   */
  function pickDue(limit = REVIEW_BATCH, now = Date.now()) {
    const due = [];
    for (const id in records) {
      const r = records[id];
      if (r.d <= now) due.push({ exId: id, lessonId: r.l, due: r.d });
    }
    due.sort((a, b) => a.due - b.due);
    return due.slice(0, limit).map(d => ({ exId: d.exId, lessonId: d.lessonId }));
  }

  /**
   * Resolve a set of pickDue() entries to real exercise objects by loading
   * the relevant unit JSONs. Returns the list of full exercises in the same
   * order. Requires the manifest to already be loaded.
   */
  async function resolveExercises(entries) {
    if (!entries.length) return [];
    // Group by lessonId so we don't fetch the same unit twice.
    const byLesson = new Map();
    for (const e of entries) {
      if (!e.lessonId) continue;
      if (!byLesson.has(e.lessonId)) byLesson.set(e.lessonId, []);
      byLesson.get(e.lessonId).push(e.exId);
    }

    const lessons = await Promise.all(
      [...byLesson.keys()].map(lid => getLesson(lid))
    );

    // Build a hash → exercise map across all loaded lessons.
    const lookup = Object.create(null);
    for (const l of lessons) {
      if (!l) continue;
      for (const ex of l.exercises) lookup[exId(ex)] = ex;
    }

    return entries.map(e => lookup[e.exId]).filter(Boolean);
  }

  return {
    init, record, exId,
    dueCount, totalTracked, pickDue, resolveExercises,
  };
})();

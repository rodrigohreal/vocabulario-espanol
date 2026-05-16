/* ═══════════════════════════════════════════════════════════
   STORAGE — Cross-device persistence via Telegram CloudStorage
   ────────────────────────────────────────────────────────────
   Hydrates an in-memory cache once on login, so all existing
   call sites can stay synchronous. Writes update the cache
   immediately and flush to CloudStorage (or localStorage in
   dev mode) in the background.

   Keys used by the app:
     • vocab_progress  — JSON array of completed image-exercise filenames
     • lesson_progress — JSON object  (lessonId → { completed, ... })
     • pet_state       — JSON object  (axolote data)

   In dev mode (no CloudStorage), keys are namespaced in
   localStorage as `cs_<userKey>_<key>` to keep multi-user
   browser testing isolated.
   ════════════════════════════════════════════════════════ */

const Storage = (() => {
  const cache = new Map();
  let _userKey = null;
  let _useCloud = false;

  function _tg() { return window.Telegram?.WebApp; }
  function _cs() { return _tg()?.CloudStorage; }

  function cloudAvailable() {
    const tg = _tg();
    const cs = _cs();
    if (!tg || !cs) return false;
    // CloudStorage was added in Bot API 6.9.
    try { return typeof tg.isVersionAtLeast === 'function' && tg.isVersionAtLeast('6.9'); }
    catch { return false; }
  }

  function lsKey(key) {
    return 'cs_' + (_userKey || 'anon') + '_' + key;
  }

  function csGet(key) {
    return new Promise((resolve) => {
      try {
        _cs().getItem(key, (err, val) => {
          if (err) { console.warn('CloudStorage.getItem failed', key, err); resolve(null); }
          else resolve(val ?? null);
        });
      } catch (e) { console.warn('CloudStorage.getItem threw', e); resolve(null); }
    });
  }

  function csSet(key, value) {
    return new Promise((resolve) => {
      try {
        _cs().setItem(key, value, (err, ok) => {
          if (err || !ok) console.warn('CloudStorage.setItem failed', key, err);
          resolve();
        });
      } catch (e) { console.warn('CloudStorage.setItem threw', e); resolve(); }
    });
  }

  function csRemove(key) {
    return new Promise((resolve) => {
      try { _cs().removeItem(key, () => resolve()); }
      catch { resolve(); }
    });
  }

  /**
   * Load all known keys into the in-memory cache.
   * Must be awaited before any synchronous getJSON/getRaw call.
   *
   * @param {string} userKey - identifies the user for the localStorage fallback
   *                          namespace. Ignored when CloudStorage is available
   *                          (CloudStorage is already scoped per Telegram user).
   * @param {string[]} keys - keys to preload.
   */
  async function init(userKey, keys) {
    _userKey = userKey;
    _useCloud = cloudAvailable();
    cache.clear();

    if (_useCloud) {
      // Parallel reads for fast cold start.
      await Promise.all(keys.map(async (k) => {
        const v = await csGet(k);
        cache.set(k, v);
      }));
    } else {
      for (const k of keys) {
        cache.set(k, localStorage.getItem(lsKey(k)));
      }
    }
  }

  function getRaw(key) {
    return cache.has(key) ? cache.get(key) : null;
  }

  function setRaw(key, value) {
    cache.set(key, value);
    // Fire-and-forget background write so call sites stay sync.
    if (_useCloud) csSet(key, value);
    else localStorage.setItem(lsKey(key), value);
  }

  function remove(key) {
    cache.delete(key);
    if (_useCloud) csRemove(key);
    else localStorage.removeItem(lsKey(key));
  }

  function getJSON(key, defaultVal) {
    const raw = getRaw(key);
    if (raw == null) return defaultVal;
    try { return JSON.parse(raw); } catch { return defaultVal; }
  }

  function setJSON(key, val) {
    setRaw(key, JSON.stringify(val));
  }

  function backend() { return _useCloud ? 'cloud' : 'local'; }

  return { init, getRaw, setRaw, remove, getJSON, setJSON, cloudAvailable, backend };
})();

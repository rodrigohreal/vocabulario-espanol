/* ═══════════════════════════════════════════════════════════
   TTS — Spanish text-to-speech
   ────────────────────────────────────────────────────────────
   Plays a pre-generated MP3 from `audio/` when one exists for
   the requested text (high-quality Google Cloud TTS, rendered
   once by tools/generate_audio.py), and falls back to the
   browser's Web Speech API when no MP3 is available.

   The MP3 lookup table lives in `audio/manifest.json`:
     { "<normalized text>": "<filename>.mp3", ... }
   Keys are lowercased, NFC-normalized, whitespace-collapsed.
   The Python generator and this file MUST agree on that
   normalization.

   Audio can be globally muted via `TTS.setEnabled(false)`; the
   preference persists in localStorage as `audio_enabled`.
   ════════════════════════════════════════════════════════ */

const TTS = (() => {
  const AUDIO_PREF_KEY = 'audio_enabled';
  // Bump the ?v= when the manifest's contents change so browsers / GitHub
  // Pages don't serve a stale cached copy missing newly-added entries.
  const MANIFEST_URL   = 'audio/manifest.json?v=2';
  const AUDIO_DIR      = 'audio/';

  let _voice = null;            // chosen Web Speech voice (fallback path)
  let _manifest = null;          // { normalizedText: filename }
  let _manifestReady = false;    // true once the fetch resolves (succeed or fail)
  let _audioCache = new Map();   // filename -> HTMLAudioElement
  let _currentAudio = null;      // currently-playing element, so we can stop it
  let _pendingPreload = [];      // strings queued before manifest was ready

  // ── Capability checks ─────────────────────────────────────
  function _supported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  // ── Persisted mute toggle ─────────────────────────────────
  function isEnabled() {
    return localStorage.getItem(AUDIO_PREF_KEY) !== 'false';
  }

  function setEnabled(on) {
    localStorage.setItem(AUDIO_PREF_KEY, on ? 'true' : 'false');
    if (!on) _stopAll();
  }

  function _stopAll() {
    if (_currentAudio) {
      try { _currentAudio.pause(); _currentAudio.currentTime = 0; } catch {}
      _currentAudio = null;
    }
    if (_supported()) {
      try { speechSynthesis.cancel(); } catch {}
    }
  }

  // ── Normalization — MUST match tools/generate_audio.py ────
  function _normalize(text) {
    if (text == null) return '';
    return String(text)
      .normalize('NFC')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');
  }

  // ── Manifest loader (lazy, fire-and-forget on first use) ──
  function _loadManifest() {
    if (_manifestReady || _manifest !== null) return;
    _manifest = {}; // treat as empty until fetch resolves
    // Default fetch cache mode → browser sends a conditional GET, so the
    // manifest refreshes whenever the server's copy changes.
    fetch(MANIFEST_URL)
      .then(r => r.ok ? r.json() : null)
      .then(json => {
        if (json && typeof json === 'object') _manifest = json;
      })
      .catch(() => { /* offline / no file → silent fallback */ })
      .finally(() => {
        _manifestReady = true;
        // Drain any preload requests that came in before manifest was ready.
        if (_pendingPreload.length) {
          const queued = _pendingPreload;
          _pendingPreload = [];
          preload(queued);
        }
      });
  }

  // ── Voice picker (fallback Web Speech path) ───────────────
  // Keywords marking high-quality / neural voices across platforms:
  //   iOS / macOS: "Mónica (Enhanced)", "Paulina (Premium)"
  //   Edge:        "Microsoft … Online (Natural) - Spanish (Spain)"
  //   Chrome:      "Google español"
  const _QUALITY_RX = /(premium|enhanced|neural|natural|online|wavenet|studio)/i;

  function _scoreVoice(v) {
    const name = (v.name || '').toLowerCase();
    const lang = (v.lang || '').toLowerCase();
    if (!lang.startsWith('es')) return -1;

    let s = 0;
    if (lang === 'es-es')             s += 10;
    else if (lang === 'es-mx')        s += 8;
    else if (lang.startsWith('es-'))  s += 6;
    else                              s += 4;

    if (_QUALITY_RX.test(name))                   s += 30;
    if (name.includes('google'))                  s += 20;
    if (name.includes('microsoft'))               s += 12;
    if (v.localService === false)                 s += 8;
    if (name.includes('espeak'))                  s -= 40;
    if (name.includes('compact'))                 s -= 10;

    return s;
  }

  function _pickVoice() {
    if (!_supported()) return;
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return;
    const spanish = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('es'));
    if (!spanish.length) { _voice = null; return; }
    spanish.sort((a, b) => _scoreVoice(b) - _scoreVoice(a));
    _voice = spanish[0];
  }

  // Voices load asynchronously on some browsers (notably Chrome).
  if (_supported()) {
    _pickVoice();
    if (!_voice && typeof speechSynthesis.addEventListener === 'function') {
      speechSynthesis.addEventListener('voiceschanged', _pickVoice);
    } else if (!_voice) {
      speechSynthesis.onvoiceschanged = _pickVoice;
    }
  }

  // Kick off manifest fetch as soon as the module loads.
  _loadManifest();

  // ── Playback paths ────────────────────────────────────────
  function _playMp3(filename, opts, fallbackText) {
    let el = _audioCache.get(filename);
    if (!el) {
      el = new Audio(AUDIO_DIR + filename);
      el.preload = 'auto';
      _audioCache.set(filename, el);
    }
    _stopAll();
    _currentAudio = el;
    try {
      el.playbackRate = opts.rate ?? 1;
      el.currentTime = 0;
      const p = el.play();
      if (p && typeof p.catch === 'function') {
        // If the MP3 can't load (404, decode error, etc.) fall back to
        // Web Speech so the user still hears _something_ rather than silence.
        p.catch(() => {
          _audioCache.delete(filename);
          if (fallbackText) _speakWebSpeech(fallbackText, opts);
        });
      }
    } catch (e) {
      console.warn('TTS.play (mp3) failed', e);
      if (fallbackText) _speakWebSpeech(fallbackText, opts);
    }
  }

  function _speakWebSpeech(text, opts) {
    if (!_supported()) return;
    try {
      const u = new SpeechSynthesisUtterance(String(text));
      if (_voice) u.voice = _voice;
      u.lang  = opts.lang  || (_voice && _voice.lang) || 'es-ES';
      u.rate  = opts.rate  ?? 0.9;
      u.pitch = opts.pitch ?? 1;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    } catch (e) {
      console.warn('TTS.speak (web speech) failed', e);
    }
  }

  /**
   * Speak the given Spanish text aloud.
   * Prefers a pre-rendered MP3 when one exists; otherwise falls back to
   * the browser's Web Speech API. Silent if audio is globally disabled.
   *
   * @param {string} text
   * @param {{ rate?: number, pitch?: number, lang?: string }} [opts]
   */
  function speak(text, opts = {}) {
    if (!text || !isEnabled()) return;

    const key = _normalize(text);
    const filename = _manifest && _manifest[key];
    if (filename) {
      _playMp3(filename, opts, text);
      return;
    }
    _speakWebSpeech(text, opts);
  }

  /**
   * Warm the HTTP cache for `text` so a subsequent speak() plays
   * without the first-fetch delay. Cheap to call repeatedly — once
   * the Audio element is cached we don't re-fetch.
   *
   * Accepts a single string or an array of strings; nullish / non-
   * Spanish entries are ignored silently.
   */
  function preload(textOrList) {
    if (!isEnabled()) return;
    const list = Array.isArray(textOrList) ? textOrList : [textOrList];
    // If the manifest hasn't loaded yet, queue and bail — _loadManifest()
    // will replay these once it resolves.
    if (!_manifestReady) {
      for (const t of list) if (t) _pendingPreload.push(t);
      return;
    }
    for (const text of list) {
      if (!text) continue;
      const key = _normalize(text);
      if (!key) continue;
      const filename = _manifest && _manifest[key];
      if (!filename) continue;            // Web-Speech fallback can't be preloaded
      if (_audioCache.has(filename)) continue;
      const el = new Audio(AUDIO_DIR + filename);
      el.preload = 'auto';
      _audioCache.set(filename, el);
      try { el.load(); } catch {}         // kicks off the network fetch
    }
  }

  function hasVoice() { return !!_voice; }

  // Useful for debugging from the console.
  function _debug() {
    return {
      manifestReady: _manifestReady,
      manifestSize: _manifest ? Object.keys(_manifest).length : 0,
      voice: _voice && { name: _voice.name, lang: _voice.lang, local: _voice.localService },
    };
  }

  return { speak, preload, isEnabled, setEnabled, hasVoice, _debug };
})();

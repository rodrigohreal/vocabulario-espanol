/* ═══════════════════════════════════════════════════════════
   TTS — Spanish text-to-speech via the Web Speech API
   ────────────────────────────────────────────────────────────
   Zero-dependency, browser-native. Picks the first es-ES voice
   (falling back to any es-*), caches it, and exposes a single
   `speak(text)` helper.

   Audio can be globally muted via `TTS.setEnabled(false)`; the
   preference persists in localStorage as `audio_enabled` (a
   device-scoped setting, not synced — environment noise / device
   audio support vary per device).
   ════════════════════════════════════════════════════════ */

const TTS = (() => {
  const AUDIO_PREF_KEY = 'audio_enabled';
  let _voice = null;

  function _supported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  function isEnabled() {
    // Default ON; only the explicit string 'false' disables.
    return localStorage.getItem(AUDIO_PREF_KEY) !== 'false';
  }

  function setEnabled(on) {
    localStorage.setItem(AUDIO_PREF_KEY, on ? 'true' : 'false');
    if (!on && _supported()) {
      try { speechSynthesis.cancel(); } catch {}
    }
  }

  // Keywords that mark high-quality / neural voices across platforms.
  // iOS/macOS:  "Mónica (Enhanced)", "Paulina (Premium)"
  // Edge:       "Microsoft ... Online (Natural) - Spanish (Spain)"
  // Chrome:     "Google español"
  const _QUALITY_RX = /(premium|enhanced|neural|natural|online|wavenet|studio)/i;

  function _scoreVoice(v) {
    const name = (v.name || '').toLowerCase();
    const lang = (v.lang || '').toLowerCase();
    if (!lang.startsWith('es')) return -1;

    let s = 0;
    // Locale preference: es-ES first, then es-MX, then any es-*
    if (lang === 'es-es') s += 10;
    else if (lang === 'es-mx') s += 8;
    else if (lang.startsWith('es-')) s += 6;
    else s += 4;

    // Big boost for explicitly natural/neural voices.
    if (_QUALITY_RX.test(name)) s += 30;

    // Google + Microsoft cloud voices are dramatically better than eSpeak.
    if (name.includes('google')) s += 20;
    if (name.includes('microsoft')) s += 12;

    // Cloud-rendered voices on Chrome/Edge mark themselves as non-local.
    if (v.localService === false) s += 8;

    // Penalize the obvious robotic defaults.
    if (name.includes('espeak')) s -= 40;
    if (name.includes('compact')) s -= 10; // iOS "compact" voices = low-quality

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
      // Older fallback
      speechSynthesis.onvoiceschanged = _pickVoice;
    }
  }

  /**
   * Speak the given Spanish text aloud.
   * Silently no-ops if audio is disabled, the API is missing,
   * or no Spanish voice was found.
   *
   * @param {string} text
   * @param {{ rate?: number, pitch?: number, lang?: string }} [opts]
   */
  function speak(text, opts = {}) {
    if (!text || !isEnabled() || !_supported()) return;
    try {
      const u = new SpeechSynthesisUtterance(String(text));
      if (_voice) u.voice = _voice;
      u.lang  = opts.lang  || (_voice && _voice.lang) || 'es-ES';
      u.rate  = opts.rate  ?? 0.9;
      u.pitch = opts.pitch ?? 1;
      speechSynthesis.cancel(); // avoid overlapping utterances
      speechSynthesis.speak(u);
    } catch (e) {
      console.warn('TTS.speak failed', e);
    }
  }

  function hasVoice() { return !!_voice; }

  return { speak, isEnabled, setEnabled, hasVoice };
})();

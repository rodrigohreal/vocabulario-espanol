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

  function _pickVoice() {
    if (!_supported()) return;
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return;
    _voice = voices.find(v => v.lang === 'es-ES')
          || voices.find(v => v.lang === 'es-MX')
          || voices.find(v => v.lang && v.lang.startsWith('es-'))
          || voices.find(v => v.lang && v.lang.toLowerCase().startsWith('es'))
          || null;
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

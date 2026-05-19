# Audio assets

This folder holds **pre-rendered MP3s of every Spanish prompt the app speaks**, plus a `manifest.json` mapping text → filename. The trainer (`tts.js`) checks the manifest first; if it finds an entry it plays the MP3, otherwise it falls back to the browser's built-in Web Speech API.

The MP3s are generated **once** by `tools/generate_audio.py` using Microsoft's free neural voices (via the [`edge-tts`](https://github.com/rany2/edge-tts) Python library — no API key, no signup, no credit card). After that, audio is free, offline-capable, and instant.

---

## How to generate the audio

### 1. Install the dependency

```powershell
pip install edge-tts
```

That's it. No accounts, no auth, no keys.

### 2. Run the script

From the repo root:

```powershell
python tools\generate_audio.py
```

It will:

- Walk `data/lessons/unit-*.json` and collect every string the app speaks.
- Normalize them (lowercase + collapse whitespace) and dedupe.
- Render each string to `audio/<12-char-hash>.mp3` (skipping ones that already exist).
- Update `audio/manifest.json`.

Expect ~3,000 short clips for the full vocabulary. With 6 concurrent requests (the default) it finishes in a few minutes.

A dry-run that just reports the strings without making any network calls:

```powershell
$env:DRY_RUN = "1"
python tools\generate_audio.py
```

### 3. Commit the result

```powershell
git add audio/
git commit -m "Pre-rendered Spanish TTS audio"
git push
```

The next page load fetches `audio/manifest.json` automatically and `TTS.speak()` starts playing the MP3s.

---

## Picking a different voice

Edit the constants at the top of `tools/generate_audio.py`:

```python
VOICE = "es-ES-ElviraNeural"   # female, Spain (default)
RATE  = "-5%"                  # slower than natural; "+0%" for natural
PITCH = "+0Hz"
```

Other Spanish voices that sound great:

| Voice                  | Accent  | Gender |
|------------------------|---------|--------|
| `es-ES-ElviraNeural`   | Spain   | Female |
| `es-ES-AlvaroNeural`   | Spain   | Male   |
| `es-MX-DaliaNeural`    | Mexico  | Female |
| `es-MX-JorgeNeural`    | Mexico  | Male   |
| `es-AR-ElenaNeural`    | Argentina | Female |
| `es-AR-TomasNeural`    | Argentina | Male |

Full list:
```powershell
edge-tts --list-voices | findstr es-
```

After changing the voice, delete the old MP3s (keep this README) and re-run:

```powershell
Remove-Item audio\*.mp3
python tools\generate_audio.py
```

---

## Why edge-tts and not Google Cloud / ElevenLabs?

- **Google Cloud TTS** — high quality, but requires creating a Cloud project, enabling APIs, generating a service-account key, and dealing with billing setup. Free tier is generous, but the friction is real.
- **ElevenLabs** — top-tier voices, but the free tier is only 10K chars/month (we need ~33K).
- **edge-tts** — exposes the same neural voices Microsoft Edge uses for "Read Aloud". Free, anonymous, very good quality. Only drawback: it's an unofficial library against an internal endpoint, so it could theoretically break someday. If that happens, swap in a different TTS service — `tts.js` doesn't care where the MP3s come from.

---

## How the browser uses these files

- `tts.js` fetches `audio/manifest.json` on page load (cached aggressively).
- When `TTS.speak("buenos días")` is called, it normalizes the text and looks up `"buenos días"` in the manifest.
  - **Hit** → plays `audio/<hash>.mp3` via an `HTMLAudioElement`.
  - **Miss** → falls back to the device's Web Speech API.
- Disabling audio via the topbar 🔊 toggle stops both paths.

If the user is offline *before* the page loads (no `manifest.json` cached yet), playback silently degrades to Web Speech. Once the manifest is in the browser's HTTP cache, audio works offline.

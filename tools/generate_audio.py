"""
generate_audio.py — Pre-render every Spanish prompt used by the trainer into
MP3 files via Microsoft Edge's neural voices (via the free `edge-tts`
library — no API key, no signup), then write a manifest the web app uses
to look them up at runtime.

Usage
-----
    # 1. Install the one dependency
    pip install edge-tts

    # 2. Run from the repo root
    python tools/generate_audio.py

The script:
  * Scans data/lessons/unit-*.json and pulls every string the runtime will
    pass to TTS.speak() (lesson names, pick options, translate answers,
    fill targets/options, typed answers).
  * De-duplicates by a normalized key (lowercased, whitespace-collapsed).
  * Skips any MP3 that already exists, so re-running is cheap.
  * Writes audio/manifest.json mapping normalized-text -> filename.

Voice
-----
Default is `es-ES-ElviraNeural` (Spain Spanish, female, neural). Other good
picks:
  * es-ES-AlvaroNeural   — male, Spain
  * es-MX-DaliaNeural    — female, Mexico
  * es-MX-JorgeNeural    — male, Mexico
  * es-AR-ElenaNeural    — female, Argentina
Run `edge-tts --list-voices` to see all of them.
"""

from __future__ import annotations

import asyncio
import hashlib
import json
import os
import sys
import unicodedata
from pathlib import Path

# ── Config ─────────────────────────────────────────────────────────────────
REPO_ROOT     = Path(__file__).resolve().parent.parent
LESSONS_DIR   = REPO_ROOT / "data" / "lessons"
AUDIO_DIR     = REPO_ROOT / "audio"
MANIFEST_PATH = AUDIO_DIR / "manifest.json"

VOICE         = "es-MX-DaliaNeural"    # Mexican Spanish, female. See file header for alternatives.
RATE          = "-5%"                  # slightly slower for learners ("+0%" = natural)
PITCH         = "+0Hz"                 # leave at +0Hz for the default tone

FILE_EXT      = ".mp3"

# Concurrency cap so we don't slam the endpoint. 5–10 is plenty.
MAX_CONCURRENT = 6

# Dry run — set DRY_RUN=1 to extract texts without calling the API.
DRY_RUN = os.environ.get("DRY_RUN") == "1"


# ── Text normalization (must match the JS side) ────────────────────────────
def normalize(text: str) -> str:
    """Lowercase, NFC, collapse whitespace, strip. Used as manifest key."""
    if text is None:
        return ""
    t = unicodedata.normalize("NFC", str(text)).strip().lower()
    return " ".join(t.split())


def hash_key(normalized: str) -> str:
    """Short stable content hash → filename."""
    return hashlib.sha1(normalized.encode("utf-8")).hexdigest()[:12]


# ── Lesson-data walker ─────────────────────────────────────────────────────
def _is_spanish(text: str) -> bool:
    """Skip strings that contain Cyrillic characters — they're Russian
    prompts that occasionally leak into Spanish-shaped fields, and the
    es-MX voice can't render them."""
    return not any("Ѐ" <= ch <= "ӿ" for ch in text)


def collect_spanish_strings() -> set[str]:
    """Walk every unit JSON and return the set of strings the runtime speaks."""
    texts: set[str] = set()

    def add(s: str | None) -> None:
        if s and _is_spanish(s):
            texts.add(s)

    if not LESSONS_DIR.is_dir():
        sys.exit(f"Lessons directory not found: {LESSONS_DIR}")

    unit_files = sorted(LESSONS_DIR.glob("unit-*.json"))
    if not unit_files:
        sys.exit(f"No unit-*.json files found under {LESSONS_DIR}")

    for unit_file in unit_files:
        with unit_file.open(encoding="utf-8") as f:
            unit = json.load(f)
        for lesson in unit.get("lessons", []):
            add(lesson.get("name"))

            for ex in lesson.get("exercises", []):
                t = ex.get("t")
                if t == "pick":
                    for opt in ex.get("opts", []):
                        add(opt.get("txt"))

                elif t == "translate":
                    answer = ex.get("answer")
                    if answer:
                        add(" ".join(answer))
                    for alt in ex.get("answers", []) or []:
                        add(" ".join(alt))

                elif t == "fill":
                    for opt in ex.get("opts", []) or []:
                        add(opt)
                    add(ex.get("target"))

                elif t == "typed":
                    add(ex.get("answer"))

    return texts


# ── Manifest I/O ───────────────────────────────────────────────────────────
def load_manifest() -> dict[str, str]:
    if MANIFEST_PATH.exists():
        with MANIFEST_PATH.open(encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_manifest(manifest: dict[str, str]) -> None:
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    ordered = dict(sorted(manifest.items()))
    with MANIFEST_PATH.open("w", encoding="utf-8") as f:
        json.dump(ordered, f, ensure_ascii=False, indent=2)
        f.write("\n")


# ── edge-tts synthesis ─────────────────────────────────────────────────────
async def synthesize_one(text: str, out_path: Path) -> None:
    import edge_tts
    communicate = edge_tts.Communicate(text=text, voice=VOICE, rate=RATE, pitch=PITCH)
    await communicate.save(str(out_path))


async def synthesize_all(jobs: list[tuple[str, str, Path]]) -> tuple[int, int]:
    """Run synthesis jobs with a concurrency cap. Returns (succeeded, failed)."""
    sem = asyncio.Semaphore(MAX_CONCURRENT)
    succeeded = 0
    failed = 0

    async def run(idx: int, key: str, original: str, out_path: Path) -> None:
        nonlocal succeeded, failed
        async with sem:
            try:
                await synthesize_one(original, out_path)
                succeeded += 1
                print(f"[{idx}/{len(jobs)}] {key!r} -> {out_path.name}")
            except Exception as e:
                failed += 1
                print(f"  FAILED for {key!r}: {e}", file=sys.stderr)

    await asyncio.gather(*[
        run(i, key, original, out_path)
        for i, (key, original, out_path) in enumerate(jobs, 1)
    ])
    return succeeded, failed


# ── Main ───────────────────────────────────────────────────────────────────
def main() -> int:
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    raw_texts = collect_spanish_strings()
    key_to_original: dict[str, str] = {}
    for raw in sorted(raw_texts):
        key = normalize(raw)
        if not key:
            continue
        key_to_original.setdefault(key, raw)

    print(f"Found {len(raw_texts)} raw strings, {len(key_to_original)} after normalization.")
    total_chars = sum(len(s) for s in key_to_original.values())
    print(f"Total characters to synthesize (if all new): {total_chars:,}")

    if DRY_RUN:
        print("DRY_RUN=1 — skipping API calls. Sample of extracted strings:")
        for k in list(key_to_original)[:20]:
            print(f"  - {k!r}")
        return 0

    try:
        import edge_tts  # noqa: F401
    except ImportError:
        sys.exit(
            "Missing dependency. Install with:\n"
            "    pip install edge-tts"
        )

    manifest = load_manifest()
    jobs: list[tuple[str, str, Path]] = []
    skip_count = 0

    for key, original in sorted(key_to_original.items()):
        filename = hash_key(key) + FILE_EXT
        out_path = AUDIO_DIR / filename
        manifest[key] = filename  # refresh mapping unconditionally

        if out_path.exists() and out_path.stat().st_size > 0:
            skip_count += 1
            continue
        jobs.append((key, original, out_path))

    print(f"To synthesize: {len(jobs)}  Already cached: {skip_count}")

    if not jobs:
        save_manifest(manifest)
        print("Nothing to do. Manifest refreshed.")
        return 0

    succeeded, failed = asyncio.run(synthesize_all(jobs))
    save_manifest(manifest)

    print()
    print(f"Done. New: {succeeded}  Skipped (already exist): {skip_count}  Failed: {failed}")
    print(f"Manifest written to {MANIFEST_PATH.relative_to(REPO_ROOT)}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())

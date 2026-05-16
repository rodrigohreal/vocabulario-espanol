"""
One-shot helper: replace the inline LESSONS array in app.js with a
lazy-loader stub. Reuses the bracket-aware search from extract_lessons.py.

Run AFTER extract_lessons.py succeeds. The script:
  1. Verifies data/lessons/manifest.json exists (refuses to run otherwise).
  2. Locates the `const LESSONS = [...]` literal in app.js.
  3. Replaces it with the loader infrastructure (MANIFEST + loadManifest +
     loadUnit + getLesson).
  4. Writes app.js back, preserving everything else.

It also leaves the existing section-header comment intact, so the file
remains pleasant to navigate.
"""

from __future__ import annotations
import re
from pathlib import Path

APP_JS   = Path(__file__).resolve().parent.parent / 'app.js'
MANIFEST = Path(__file__).resolve().parent.parent / 'data' / 'lessons' / 'manifest.json'

LOADER_BLOCK = '''// LESSONS used to be a giant inline array. It now lives in
// data/lessons/manifest.json (metadata only) + data/lessons/unit-NN.json
// (5 lessons each, with full exercises). MANIFEST is the metadata cache
// rendered by the lessons-path UI; full lesson bodies are fetched lazily
// when the user actually starts a lesson.
let MANIFEST = [];
const LESSON_CACHE       = Object.create(null);
const UNIT_LOAD_PROMISES = Object.create(null);

async function loadManifest() {
  if (MANIFEST.length) return MANIFEST;
  const res = await fetch('data/lessons/manifest.json?_=' + Date.now(), { cache: 'no-store' });
  if (!res.ok) throw new Error('manifest fetch failed: ' + res.status);
  MANIFEST = await res.json();
  return MANIFEST;
}

function loadUnit(unitNum) {
  if (UNIT_LOAD_PROMISES[unitNum]) return UNIT_LOAD_PROMISES[unitNum];
  UNIT_LOAD_PROMISES[unitNum] = (async () => {
    const padded = String(unitNum).padStart(2, '0');
    const res = await fetch('data/lessons/unit-' + padded + '.json?_=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('unit-' + padded + ' fetch failed: ' + res.status);
    const data = await res.json();
    for (const lesson of data.lessons) LESSON_CACHE[lesson.id] = lesson;
  })();
  return UNIT_LOAD_PROMISES[unitNum];
}

async function getLesson(id) {
  if (LESSON_CACHE[id]) return LESSON_CACHE[id];
  const meta = MANIFEST.find(m => m.id === id);
  if (!meta) return null;
  await loadUnit(meta.unit);
  return LESSON_CACHE[id];
}
'''


def find_lessons_block(src: str) -> tuple[int, int]:
    """Return (start, end) char offsets of `const LESSONS = [...];` inclusive."""
    m = re.search(r'^const\s+LESSONS\s*=\s*\[', src, re.MULTILINE)
    if not m:
        raise SystemExit('Could not find `const LESSONS = [` in app.js')
    start = m.start()
    open_bracket = m.end() - 1
    depth = 0
    i = open_bracket
    n = len(src)
    while i < n:
        c = src[i]
        if c == '/' and i + 1 < n and src[i + 1] == '/':
            i = src.find('\n', i)
            if i == -1: break
            continue
        if c == '/' and i + 1 < n and src[i + 1] == '*':
            i = src.find('*/', i + 2)
            if i == -1: raise SystemExit('unterminated block comment')
            i += 2; continue
        if c in ("'", '"'):
            q = c; i += 1
            while i < n:
                if src[i] == '\\': i += 2; continue
                if src[i] == q: i += 1; break
                i += 1
            continue
        if c == '[': depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                end = i + 1
                # Include the trailing `;` if present.
                if end < n and src[end] == ';':
                    end += 1
                return start, end
        i += 1
    raise SystemExit('Unbalanced brackets searching for end of LESSONS')


def main():
    if not MANIFEST.exists():
        raise SystemExit('data/lessons/manifest.json not found — run extract_lessons.py first.')

    src = APP_JS.read_text(encoding='utf-8')
    start, end = find_lessons_block(src)
    old_len = end - start
    new_src = src[:start] + LOADER_BLOCK + src[end:]
    APP_JS.write_text(new_src, encoding='utf-8')
    print(f'Replaced LESSONS block ({old_len:,} chars) with loader stub ({len(LOADER_BLOCK):,} chars).')
    print(f'app.js: {len(src):,} -> {len(new_src):,} chars  '
          f'({(len(src) - len(new_src)) / 1024:.1f} KB freed)')


if __name__ == '__main__':
    main()

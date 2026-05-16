"""
Extract the inline LESSONS array from app.js into per-unit JSON files.

Output:
  data/lessons/manifest.json
      [{ id, name, emoji, desc, hearts?, unit }, ...]
  data/lessons/unit-01.json ... unit-NN.json
      { "lessons": [ { id, name, emoji, desc, hearts?, exercises: [...] }, ... ] }

The script parses the JS object-literal subset used by LESSONS:
  - object/array literals
  - single- and double-quoted strings (with backslash escapes)
  - unquoted identifier keys (turned into quoted JSON keys)
  - numbers, null, true, false
  - // line comments
  - trailing commas

It DOES NOT support template literals, spread, computed keys, or functions —
none of which appear inside LESSONS.

Usage:
  python tools/extract_lessons.py
"""

from __future__ import annotations
import json
import os
import re
import sys
from pathlib import Path

APP_JS = Path(__file__).resolve().parent.parent / 'app.js'
OUT_DIR = Path(__file__).resolve().parent.parent / 'data' / 'lessons'
UNIT_SIZE = 5

# ─── Tokenizer / parser for the JS subset used by LESSONS ────────────────

class ParseError(Exception):
    pass

class JSParser:
    def __init__(self, src: str):
        self.s = src
        self.i = 0
        self.n = len(src)

    def err(self, msg: str):
        # Show context to help debug if the source ever drifts.
        ctx = self.s[max(0, self.i - 60): self.i + 60]
        raise ParseError(f"{msg} at offset {self.i}: ...{ctx!r}...")

    def skip_ws(self):
        while self.i < self.n:
            c = self.s[self.i]
            if c.isspace():
                self.i += 1
            elif c == '/' and self.i + 1 < self.n and self.s[self.i + 1] == '/':
                # Line comment — skip to newline.
                while self.i < self.n and self.s[self.i] != '\n':
                    self.i += 1
            elif c == '/' and self.i + 1 < self.n and self.s[self.i + 1] == '*':
                # Block comment.
                end = self.s.find('*/', self.i + 2)
                if end == -1:
                    self.err('unterminated block comment')
                self.i = end + 2
            else:
                break

    def peek(self) -> str:
        return self.s[self.i] if self.i < self.n else ''

    def eat(self, ch: str):
        self.skip_ws()
        if self.peek() != ch:
            self.err(f'expected {ch!r}')
        self.i += 1

    def parse_value(self):
        self.skip_ws()
        c = self.peek()
        if c == '[':
            return self.parse_array()
        if c == '{':
            return self.parse_object()
        if c == "'" or c == '"':
            return self.parse_string()
        # Identifier-like: null/true/false/number
        m = re.match(r'-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?', self.s[self.i:])
        if m:
            self.i += m.end()
            txt = m.group(0)
            return int(txt) if re.fullmatch(r'-?\d+', txt) else float(txt)
        m = re.match(r'[A-Za-z_$][A-Za-z0-9_$]*', self.s[self.i:])
        if m:
            ident = m.group(0)
            self.i += m.end()
            if ident == 'null':  return None
            if ident == 'true':  return True
            if ident == 'false': return False
            self.err(f'unexpected identifier {ident!r}')
        self.err('expected value')

    def parse_array(self):
        self.eat('[')
        out = []
        self.skip_ws()
        if self.peek() == ']':
            self.i += 1
            return out
        while True:
            self.skip_ws()
            if self.peek() == ']':           # trailing comma
                self.i += 1
                return out
            out.append(self.parse_value())
            self.skip_ws()
            if self.peek() == ',':
                self.i += 1
                continue
            if self.peek() == ']':
                self.i += 1
                return out
            self.err('expected , or ]')

    def parse_object(self):
        self.eat('{')
        out = {}
        self.skip_ws()
        if self.peek() == '}':
            self.i += 1
            return out
        while True:
            self.skip_ws()
            if self.peek() == '}':           # trailing comma
                self.i += 1
                return out
            key = self.parse_key()
            self.skip_ws()
            self.eat(':')
            val = self.parse_value()
            out[key] = val
            self.skip_ws()
            if self.peek() == ',':
                self.i += 1
                continue
            if self.peek() == '}':
                self.i += 1
                return out
            self.err('expected , or }')

    def parse_key(self) -> str:
        self.skip_ws()
        c = self.peek()
        if c == "'" or c == '"':
            return self.parse_string()
        m = re.match(r'[A-Za-z_$][A-Za-z0-9_$]*', self.s[self.i:])
        if not m:
            self.err('expected key')
        self.i += m.end()
        return m.group(0)

    def parse_string(self) -> str:
        quote = self.peek()
        if quote not in ("'", '"'):
            self.err('expected quote')
        self.i += 1
        out: list[str] = []
        while self.i < self.n:
            c = self.s[self.i]
            if c == '\\':
                if self.i + 1 >= self.n:
                    self.err('unterminated escape')
                nxt = self.s[self.i + 1]
                # Standard JS escapes
                esc = {
                    'n': '\n', 't': '\t', 'r': '\r',
                    "'": "'", '"': '"', '\\': '\\',
                    'b': '\b', 'f': '\f', '0': '\0', '/': '/',
                }
                if nxt in esc:
                    out.append(esc[nxt]); self.i += 2; continue
                if nxt == 'u' and self.i + 5 < self.n:
                    out.append(chr(int(self.s[self.i + 2: self.i + 6], 16)))
                    self.i += 6; continue
                if nxt == 'x' and self.i + 3 < self.n:
                    out.append(chr(int(self.s[self.i + 2: self.i + 4], 16)))
                    self.i += 4; continue
                # Unknown escape: keep the char verbatim
                out.append(nxt); self.i += 2; continue
            if c == quote:
                self.i += 1
                return ''.join(out)
            out.append(c)
            self.i += 1
        self.err('unterminated string')


# ─── Driver ──────────────────────────────────────────────────────────────

def find_lessons_block(src: str) -> str:
    """Return the JS source of the LESSONS array literal, including [...]."""
    m = re.search(r'^const\s+LESSONS\s*=\s*\[', src, re.MULTILINE)
    if not m:
        raise SystemExit('Could not find `const LESSONS = [` in app.js')
    # Walk forward from the `[` and find the matching `]`. Must be aware of
    # strings and comments so brackets inside them don't fool us.
    start = m.end() - 1  # position of `[`
    depth = 0
    i = start
    n = len(src)
    while i < n:
        c = src[i]
        if c == '/' and i + 1 < n and src[i + 1] == '/':
            i = src.find('\n', i)
            if i == -1: break
            continue
        if c == '/' and i + 1 < n and src[i + 1] == '*':
            i = src.find('*/', i + 2)
            if i == -1: raise SystemExit('unterminated block comment in LESSONS')
            i += 2; continue
        if c in ("'", '"'):
            # Skip the whole string
            quote = c
            i += 1
            while i < n:
                if src[i] == '\\':
                    i += 2; continue
                if src[i] == quote:
                    i += 1; break
                i += 1
            continue
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                return src[start:i + 1]
        i += 1
    raise SystemExit('Unbalanced brackets searching for end of LESSONS')


def main():
    src = APP_JS.read_text(encoding='utf-8')
    block = find_lessons_block(src)
    print(f'Found LESSONS block: {len(block):,} chars')

    lessons = JSParser(block).parse_value()
    if not isinstance(lessons, list):
        raise SystemExit('LESSONS did not parse as a list')
    print(f'Parsed {len(lessons)} lessons')

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    # Build manifest + group by unit
    manifest = []
    units: dict[int, list] = {}
    for idx, lesson in enumerate(lessons):
        unit = idx // UNIT_SIZE + 1
        meta = {
            'id':    lesson['id'],
            'name':  lesson['name'],
            'emoji': lesson['emoji'],
            'desc':  lesson['desc'],
            'unit':  unit,
        }
        if 'hearts' in lesson:
            meta['hearts'] = lesson['hearts']
        manifest.append(meta)
        units.setdefault(unit, []).append(lesson)

    # Write per-unit files
    for unit, items in sorted(units.items()):
        path = OUT_DIR / f'unit-{unit:02d}.json'
        path.write_text(
            json.dumps({'unit': unit, 'lessons': items}, ensure_ascii=False, indent=2),
            encoding='utf-8',
        )
        print(f'wrote {path.relative_to(APP_JS.parent)}  ({len(items)} lessons)')

    # Write manifest
    (OUT_DIR / 'manifest.json').write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding='utf-8',
    )
    print(f'wrote data/lessons/manifest.json  ({len(manifest)} entries)')

    # Round-trip sanity check: re-load and confirm every lesson re-serializes
    # to the same JSON as in the per-unit file.
    failures = 0
    for unit, items in sorted(units.items()):
        loaded = json.loads((OUT_DIR / f'unit-{unit:02d}.json').read_text(encoding='utf-8'))
        for orig, got in zip(items, loaded['lessons']):
            if json.dumps(orig, ensure_ascii=False, sort_keys=True) != \
               json.dumps(got, ensure_ascii=False, sort_keys=True):
                print(f'  ROUND-TRIP MISMATCH: {orig["id"]}', file=sys.stderr)
                failures += 1
    if failures:
        raise SystemExit(f'{failures} lesson(s) failed round-trip')
    print('round-trip check OK')


if __name__ == '__main__':
    main()

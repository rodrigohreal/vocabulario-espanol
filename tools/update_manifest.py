"""
Rebuild data/lessons/manifest.json from the per-unit JSON files on disk.

Idempotent: scans data/lessons/unit-*.json (sorted), emits manifest entries
in unit order with the `unit` field set automatically. Strips `exercises`
from the manifest copy (manifest is metadata-only).

Run after authoring or editing any unit-NN.json file.
"""

from __future__ import annotations
import json
import re
from pathlib import Path

LESSONS_DIR = Path(__file__).resolve().parent.parent / 'data' / 'lessons'

META_FIELDS = ('id', 'name', 'emoji', 'desc', 'hearts')


def main():
    unit_files = sorted(LESSONS_DIR.glob('unit-*.json'))
    if not unit_files:
        raise SystemExit('No unit files found in data/lessons/')

    manifest = []
    for path in unit_files:
        m = re.match(r'unit-(\d+)\.json', path.name)
        if not m:
            print(f'  skipping malformed name: {path.name}')
            continue
        unit_num = int(m.group(1))
        data = json.loads(path.read_text(encoding='utf-8'))
        lessons = data.get('lessons', [])
        if not isinstance(lessons, list):
            raise SystemExit(f'{path.name}: "lessons" must be a list')

        for lesson in lessons:
            entry = {k: lesson[k] for k in META_FIELDS if k in lesson}
            entry['unit'] = unit_num
            manifest.append(entry)

        print(f'  {path.name}: {len(lessons)} lessons (unit {unit_num})')

    out = LESSONS_DIR / 'manifest.json'
    out.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'\nwrote {out.relative_to(LESSONS_DIR.parent.parent)} — {len(manifest)} entries total')


if __name__ == '__main__':
    main()

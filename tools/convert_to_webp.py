"""One-shot conversion: PNG -> WebP at same dimensions, update JSON refs.

Keeps the original PNGs in place. Re-running is idempotent.
"""
import json
import os
from pathlib import Path
from PIL import Image

REPO = Path(__file__).resolve().parent.parent
PNG_DIR = REPO / "originals"
WEBP_DIR = REPO / "images"
JSON_DIR = REPO / "data"
QUALITY = 85

def main():
    WEBP_DIR.mkdir(exist_ok=True)
    pngs = sorted([p for p in PNG_DIR.iterdir() if p.suffix.lower() == ".png"])
    total_png = 0
    total_webp = 0
    converted = 0
    skipped = 0

    for png in pngs:
        webp = WEBP_DIR / (png.stem + ".webp")
        png_size = png.stat().st_size
        total_png += png_size

        if webp.exists():
            total_webp += webp.stat().st_size
            skipped += 1
            continue

        with Image.open(png) as im:
            # preserve alpha if present
            save_kwargs = {"quality": QUALITY, "method": 6}
            if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
                im = im.convert("RGBA")
            else:
                im = im.convert("RGB")
            im.save(webp, "WEBP", **save_kwargs)

        webp_size = webp.stat().st_size
        total_webp += webp_size
        converted += 1
        pct = 100 * (1 - webp_size / png_size)
        print(f"  {png.name:40s} {png_size/1024:7.0f} KB -> {webp_size/1024:7.0f} KB  ({pct:5.1f}% smaller)")

    print()
    print(f"Converted {converted}, skipped (already existed) {skipped}")
    if total_png:
        print(f"Total PNG:  {total_png/1024/1024:6.2f} MB")
        print(f"Total WebP: {total_webp/1024/1024:6.2f} MB")
        print(f"Savings:    {100 * (1 - total_webp/total_png):5.1f}%")

    # Update JSON references
    print()
    print("Updating JSON references...")
    updated_jsons = 0
    for jpath in sorted(JSON_DIR.glob("*.json")):
        try:
            data = json.loads(jpath.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            continue
        if not isinstance(data, dict) or "image_file" not in data:
            continue
        img = data["image_file"]
        if isinstance(img, str) and img.lower().endswith(".png"):
            new_img = img[:-4] + ".webp"
            if (WEBP_DIR / new_img).exists():
                data["image_file"] = new_img
                jpath.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
                updated_jsons += 1
                print(f"  {jpath.name}: {img} -> {new_img}")
    print(f"Updated {updated_jsons} JSON files.")

if __name__ == "__main__":
    main()

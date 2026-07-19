#!/usr/bin/env python3
"""Extract inline icons/glyphs from a rulebook PDF.

Usage:
    py tools/extract_icons.py <input.pdf> <crops.json> <output_dir>

Requires PyMuPDF + Pillow. (Don't build crops with fitz.Pixmap copy tricks —
PyMuPDF's pixmap-copy constructor corrupts output; Pillow is the reliable path.)

crops.json is a list of crop specs (see tools/crops/*.json for examples):
    [
      {"page": 17, "rect": [30, 50, 78, 98], "name": "bread",
       "dpi": 300, "tol": 26, "minspeck": 200},
      ...
    ]
- page      1-based page number
- rect      [x0, y0, x1, y1] in PDF points (549x549 for a square rulebook page;
            find coordinates by zoom-rendering candidate regions)
- dpi       render resolution (300 for art, 450-600 for tiny vector glyphs)
- tol       per-channel tolerance for keying the paper background transparent
            (26 for painted art, ~40 for solid-color vector glyphs)
- minspeck  connected components smaller than this many pixels are removed
            (kills paper-texture speckles; raise it if stray art bits survive)

The paper color is sampled from "paper_sample": {"page": N, "at": [x, y]} in the
JSON root object form: {"paper_sample": {...}, "crops": [...]}. A bare list is
also accepted; then the paper color defaults from the first crop's page corner
region average — prefer specifying paper_sample explicitly.
"""
import json
import os
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF not installed. Run: py -m pip install PyMuPDF")
try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow not installed. Run: py -m pip install Pillow")


def despeckle(img, min_px):
    """Zero the alpha of connected opaque components smaller than min_px."""
    w, h = img.width, img.height
    px = img.load()
    seen = [[False] * h for _ in range(w)]
    for sx in range(w):
        for sy in range(h):
            if seen[sx][sy] or px[sx, sy][3] == 0:
                continue
            comp, stack = [], [(sx, sy)]
            seen[sx][sy] = True
            while stack:
                x, y = stack.pop()
                comp.append((x, y))
                for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                    if 0 <= nx < w and 0 <= ny < h and not seen[nx][ny] and px[nx, ny][3] > 0:
                        seen[nx][ny] = True
                        stack.append((nx, ny))
            if len(comp) < min_px:
                for x, y in comp:
                    r, g, b, _ = px[x, y]
                    px[x, y] = (r, g, b, 0)


def main():
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    pdf_path, crops_path, outdir = sys.argv[1:4]
    doc = fitz.open(pdf_path)
    os.makedirs(outdir, exist_ok=True)

    with open(crops_path, encoding="utf-8") as f:
        spec = json.load(f)
    crops = spec if isinstance(spec, list) else spec["crops"]
    if isinstance(spec, dict) and "paper_sample" in spec:
        ps = spec["paper_sample"]
        pp = doc[ps["page"] - 1].get_pixmap(
            clip=fitz.Rect(ps["at"][0], ps["at"][1], ps["at"][0] + 2, ps["at"][1] + 2), dpi=72)
        paper = pp.pixel(1, 1)[:3]
    else:
        pr = doc[crops[0]["page"] - 1].rect
        pp = doc[crops[0]["page"] - 1].get_pixmap(
            clip=fitz.Rect(pr.width / 2 - 1, 4, pr.width / 2 + 1, 6), dpi=72)
        paper = pp.pixel(1, 1)[:3]
    print(f"paper color: {paper}")

    for c in crops:
        dpi = c.get("dpi", 300)
        tol = c.get("tol", 26)
        minspeck = c.get("minspeck", 200)
        pix = doc[c["page"] - 1].get_pixmap(clip=fitz.Rect(*c["rect"]), dpi=dpi)
        img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples).convert("RGBA")
        px = img.load()
        for y in range(img.height):
            for x in range(img.width):
                r, g, b, a = px[x, y]
                if (abs(r - paper[0]) <= tol and abs(g - paper[1]) <= tol
                        and abs(b - paper[2]) <= tol):
                    px[x, y] = (r, g, b, 0)
        despeckle(img, minspeck)
        bbox = img.getchannel("A").getbbox()
        if not bbox:
            print(f"  !! {c['name']}: nothing left after keying, skipped")
            continue
        pad = 2
        bbox = (max(0, bbox[0] - pad), max(0, bbox[1] - pad),
                min(img.width, bbox[2] + pad), min(img.height, bbox[3] + pad))
        out = os.path.join(outdir, c["name"] + ".png")
        img.crop(bbox).save(out)
        print(f"  {c['name']}.png {bbox[2] - bbox[0]}x{bbox[3] - bbox[1]}")
    print("done")


if __name__ == "__main__":
    main()

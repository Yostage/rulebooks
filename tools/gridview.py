#!/usr/bin/env python3
"""Render a PDF region with a point-coordinate grid overlay, for picking crop rects.

Usage:
  py tools/gridview.py <pdf> <page> <out.png> [--clip x0 y0 x1 y1] [--dpi 300] [--step 10]

Coordinates are in PDF points (same space as tools/crops/*.json rects).
Grid lines every --step points; labels every 5*step along the edges.
"""
import sys
import fitz
from PIL import Image, ImageDraw


def main():
    args = sys.argv[1:]
    if len(args) < 3:
        print(__doc__)
        sys.exit(1)
    pdf, pageno, out = args[0], int(args[1]), args[2]
    clip = None
    dpi = 300
    step = 10
    i = 3
    while i < len(args):
        if args[i] == "--clip":
            clip = fitz.Rect(*(float(v) for v in args[i + 1:i + 5]))
            i += 5
        elif args[i] == "--dpi":
            dpi = int(args[i + 1]); i += 2
        elif args[i] == "--step":
            step = int(args[i + 1]); i += 2
        else:
            print("unknown arg", args[i]); sys.exit(1)

    doc = fitz.open(pdf)
    page = doc[pageno - 1]
    if clip is None:
        clip = page.rect
    zoom = dpi / 72.0
    pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), clip=clip)
    img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    d = ImageDraw.Draw(img)

    def px(pt_x, pt_y):
        return ((pt_x - clip.x0) * zoom, (pt_y - clip.y0) * zoom)

    x = int(clip.x0 // step) * step
    while x <= clip.x1:
        if x >= clip.x0:
            (xx, _) = px(x, 0)
            major = (x % (5 * step)) == 0
            d.line([(xx, 0), (xx, img.height)], fill=(255, 0, 255) if major else (0, 200, 255), width=2 if major else 1)
            if major:
                d.text((xx + 3, 3), str(int(x)), fill=(255, 0, 255))
        x += step
    y = int(clip.y0 // step) * step
    while y <= clip.y1:
        if y >= clip.y0:
            (_, yy) = px(0, y)
            major = (y % (5 * step)) == 0
            d.line([(0, yy), (img.width, yy)], fill=(255, 0, 255) if major else (0, 200, 255), width=2 if major else 1)
            if major:
                d.text((3, yy + 3), str(int(y)), fill=(255, 0, 255))
        y += step

    img.save(out)
    print(f"page {pageno} clip={tuple(round(v,1) for v in clip)} @ {dpi}dpi -> {out} ({img.width}x{img.height})")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Render every page of a PDF to PNG. The "naive" image pass for a rulebook.

Usage:
    python tools/render_pages.py <input.pdf> <output_dir> [--dpi 150]

Requires PyMuPDF (`pip install PyMuPDF`). Bundles its own renderer, so no
poppler/ghostscript needed. Output files are named page-001.png, page-002.png, …
"""
import argparse
import os
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF not installed. Run: python -m pip install PyMuPDF")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("outdir")
    ap.add_argument("--dpi", type=int, default=150)
    args = ap.parse_args()

    outdir = os.path.abspath(args.outdir)
    os.makedirs(outdir, exist_ok=True)
    doc = fitz.open(args.pdf)
    print(f"{doc.page_count} pages @ {args.dpi} dpi -> {outdir}")
    for pno in range(doc.page_count):
        pix = doc[pno].get_pixmap(dpi=args.dpi)
        out = os.path.join(outdir, f"page-{pno + 1:03d}.png")
        pix.save(out)
        print(f"  page-{pno + 1:03d}.png  {pix.width}x{pix.height}")


if __name__ == "__main__":
    main()

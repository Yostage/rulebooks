#!/usr/bin/env python3
"""Extract per-page text from a PDF. The first pass of a rulebook ingestion.

Usage:
    python tools/extract_text.py <input.pdf> [output.txt] [--mode text|blocks]

Requires PyMuPDF (`pip install PyMuPDF`).

Modes:
    text    plain text in reading order (default)
    blocks  text grouped by layout block with coordinates, useful when the
            plain-text order is scrambled by multi-column layouts

Each page is delimited by a "=== page N ===" marker so page references in the
output can be traced back to the source PDF. If the file looks like a Git LFS
pointer instead of a real PDF, says so and exits (fix: git lfs checkout <file>).
"""
import argparse
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF not installed. Run: python -m pip install PyMuPDF")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("out", nargs="?", help="output file (default: stdout)")
    ap.add_argument("--mode", choices=["text", "blocks"], default="text")
    args = ap.parse_args()

    with open(args.pdf, "rb") as f:
        head = f.read(8)
    if not head.startswith(b"%PDF"):
        sys.exit(
            f"{args.pdf} is not a PDF (starts with {head!r}). "
            "If it lives in source/, it's probably an un-smudged Git LFS pointer: "
            f"run `git lfs checkout {args.pdf}`."
        )

    doc = fitz.open(args.pdf)
    parts = []
    for pno in range(doc.page_count):
        page = doc[pno]
        parts.append(f"\n=== page {pno + 1} ===\n")
        if args.mode == "text":
            parts.append(page.get_text("text"))
        else:
            for x0, y0, x1, y1, text, *_ in page.get_text("blocks"):
                parts.append(f"[{x0:.0f},{y0:.0f} - {x1:.0f},{y1:.0f}]\n{text}\n")
    out_text = "".join(parts)

    if args.out:
        with open(args.out, "w", encoding="utf-8") as f:
            f.write(out_text)
        print(f"{doc.page_count} pages -> {args.out} ({len(out_text)} chars)")
    else:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        print(out_text)


if __name__ == "__main__":
    main()

# CLAUDE.md — working notes for this repo

Mobile-friendly, multi-game board-game rules site. Static, **no build step**, deployed to GitHub Pages. See `README.md` for the user-facing overview, project layout, and "adding a game". This file is the non-obvious stuff.

## Architecture constraints (don't "modernize" these)
- **No build, no framework, no ES modules.** Plain HTML/CSS/JS loaded via classic `<script>` tags so it works on `file://` and GitHub Pages alike. Games register onto a global: `window.Rulebooks.register({...})` (see `assets/js/games/registry.js`).
- **Hash routing** (`#/`, `#/<game>`, `#/<game>/<section>`). All routes share `index.html`; that's why one `<meta robots>` covers every "page".
- To add a game: create `assets/js/games/<id>.js` and add a `<script>` tag in `index.html`. Renderer + block types live in `assets/js/app.js` (`blockRenderers`).

## Content model gotcha: text vs HTML fields
- Most content fields render via `innerHTML` + `glyphify()` (paragraphs, list items, `dl`, `note`/`example`/`faq`, **`h` headings, and steps `title`** — these last two were unified intentionally).
- **Section `title`/`summary` render via `textContent`** (they appear in the TOC/breadcrumbs/`<h1>`).
- **Ampersands:** convention is a **literal `&`** everywhere (it's safe in `innerHTML` because every one is followed by a space — never an ambiguous `&entity;`). Do NOT write `&amp;`. If you ever need `&` glued to a letter ("R&D"), use `&amp;` there only.

## Glyphs (icons extracted from the source PDFs)
- Live in `assets/img/<game>/`. Extracted with **PyMuPDF** (`pip install PyMuPDF`; bundles its own renderer, no poppler needed). Approach: render the page, find the icon's image-fragment bounding box (`page.get_image_info()`), crop the clip-rect at high DPI (`get_pixmap(clip=..., matrix/dpi=..., alpha=True)`). For vector icons or tightly-packed ones, crop by region / pixel-detect color bounds. `tools/render_pages.py` renders whole pages (the "naive" pass).
- **Contra** glyphs sit on light tiles; **Dead Cells** glyphs are self-contained on dark chips (that's the source art — fine on the light icon cards).
- Inline glyph tokens: write `:name:` in any HTML field; resolved per game via `game.glyphs` (name→file) + `game.imgBase`. Only known names are replaced, so stray `:foo:` is safe.

## Source PDFs + Git LFS
- Source rulebooks/FAQs go in `source/` and are tracked by **Git LFS** (`*.pdf` in `.gitattributes`).
- **Smudge trap:** after clone / `lfs migrate`, the working copy may be a ~132-byte pointer, not the real PDF (PyMuPDF then errors "no objects found"). Fix: `git lfs checkout source/<file>.pdf` (or `git lfs pull`). Check with `head -c8 file.pdf` → should be `%PDF`.

## Theming
- Per-game: `accent` (hex) + optional `theme` object of CSS-var overrides (`--accent-ink`, etc.). A subtle accent wash is applied to body/sidebar via `color-mix` in `styles.css`, so changing `accent` changes the whole feel. Contra = green, Dead Cells = cyan.

## Deploy + verify loop
- Site repo: **`yostage/rulebooks`** (public — required for free Pages), branch `main`, Pages from root. URL: `https://yostage.github.io/rulebooks/`.
- Workflow: edit → `node -c <file>` syntax check → validate content model in Node (stub `global.window=global`, require the game files) → commit → push → poll build: `gh api repos/Yostage/rulebooks/pages/builds/latest --jq .status` until `built` → verify with `curl`.
- **Commit/push only when asked** generally, but this session's norm has been to ship each change; confirm if unsure.

## Tooling quirks (Windows)
- The **PowerShell tool wedges** sometimes (returns exit 1 for everything, even trivial commands). Workaround: drive PowerShell from the **Bash tool** via `powershell.exe -NoProfile -Command "..."`.
- **Screenshots:** `~/.claude/skills/screenshot/scripts/Save-Screenshot.ps1`. `-PrimaryMonitor` is more reliable than `-ProcessName chrome -BringToFront` (focus often grabs the wrong Chrome window). Start a local server with `python -m http.server 8765` and open `http://localhost:8765/#/...`.
- `gh api` paths: in Git Bash, drop the leading slash or set `MSYS_NO_PATHCONV=1` (else the path gets rewritten to a filesystem path).

## Don't-index / anti-scrape posture (keep it)
The site reproduces copyrighted rulebook text for reference. In place:
- `<meta name="robots" content="noindex,...">` in `index.html` + `404.html`.
- Blanket `Disallow: /` **root** robots.txt in the separate **`yostage/yostage.github.io`** repo (project-path robots.txt isn't honored by crawlers — only the domain root is). Don't remove these.

## Editorial principles
- Rules text is **adapted/summarized** from the publishers' rulebooks (Contra © Konami / Blacklist Games; Dead Cells © Le Scorpion Masqué / Motion Twin). Keep it faithful.
- When an FAQ/clarification reveals the **base text is misleading, fix the base text** and drop the redundant note. When it's just extra trivia, leave it as a `note` or in the FAQ. The FAQ section stays a complete Q&A reference regardless.

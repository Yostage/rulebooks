# Rulebooks

A mobile-friendly, multi-game board game rules reference. Static site — no build step, no dependencies — designed to deploy to GitHub Pages.

The top-level page is a **game picker**; each game opens a clean, browsable rules reference with a chapter/section table of contents, jump-to-rule search, per-section pages, and prev/next navigation.

## Games

- **Contra: The Board Game** — full rules reference (source: Contra Rulebook v2, Blacklist Games / Konami).

## Running locally

It's plain HTML/CSS/JS using global scripts (no ES modules), so you can just open `index.html` in a browser. To mirror production exactly, serve it over HTTP:

```bash
# any static server works, e.g.
python -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
index.html              app shell (topbar, sidebar, content)
404.html                friendly fallback
assets/
  css/styles.css        mobile-first, themeable styles
  js/
    app.js              hash router + block renderer
    games/
      registry.js       window.Rulebooks registry
      contra.js         Contra rules content (data only)
source/
  contra_rulebook.pdf   original source PDF
```

## Adding a game

Create `assets/js/games/<id>.js` that calls `Rulebooks.register({ ... })` with the
content model (see `contra.js` for the full shape), then add a `<script>` tag for it
in `index.html`. The game picker and navigation update automatically.

A game is:

```js
Rulebooks.register({
  id: "mygame",
  title: "Short Name",
  fullTitle: "Full Title",
  tagline: "...",
  accent: "#7cb342",          // theme color
  cover: "▚",                  // glyph for cover tiles
  meta: [{ label, value }],
  blurb: "...",
  chapters: [
    { id, title, sections: [
      { id, title, summary, blocks: [ /* see block types below */ ] }
    ]}
  ]
});
```

### Block types

`p`, `h`, `ul`, `ol`, `dl`, `steps`, `note` (variants: `golden`/`tip`/`warn`/`note`),
`example`, `faq`, `story`, `divider`. See `assets/js/app.js` (`blockRenderers`) for each
block's expected fields.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site is served from `https://<user>.github.io/<repo>/`.

`.nojekyll` is included so Pages serves files as-is.

## Content note

Rules text is summarized/adapted from the publisher's rulebook for reference and
playability. Contra © Konami Digital Entertainment; game by Blacklist Games.

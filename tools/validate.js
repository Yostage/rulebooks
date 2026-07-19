#!/usr/bin/env node
/* Content-model validator for all registered games. No dependencies.
 *
 * Usage: node tools/validate.js
 *
 * Loads registry.js + every game file exactly the way the browser would
 * (global `window` stub), then checks structure, block types, glyph tokens,
 * image paths, and the repo's ampersand convention (literal `&` followed by
 * a space; `&amp;` only when glued to a letter, e.g. "R&amp;D").
 * Exits non-zero on errors; warnings don't fail the run.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const GAMES_DIR = path.join(ROOT, "assets", "js", "games");

global.window = global;
require(path.join(GAMES_DIR, "registry.js"));
const gameFiles = fs
  .readdirSync(GAMES_DIR)
  .filter((f) => f.endsWith(".js") && f !== "registry.js");
for (const f of gameFiles) require(path.join(GAMES_DIR, f));

const errors = [];
const warnings = [];

/* Block types + required fields; mirrors blockRenderers in assets/js/app.js. */
const BLOCK_SPECS = {
  p: { fields: ["html"] },
  h: { fields: ["text"] },
  divider: { fields: [] },
  ul: { fields: ["items"], items: "string" },
  ol: { fields: ["items"], items: "string" },
  dl: { fields: ["items"], items: ["term", "def"] },
  icons: { fields: ["items"], items: ["img"] },
  steps: { fields: ["items"], items: ["n", "title", "html"] },
  note: { fields: ["text"] },
  example: { fields: ["text"] },
  faq: { fields: ["items"], items: ["q", "a"] },
  story: { fields: ["part", "stage", "enemy", "setup", "rules", "win", "lose"] },
};
const NOTE_VARIANTS = ["note", "golden", "tip", "warn"];
const GLYPH_TOKEN = /:([a-z][a-z0-9-]*):/g;

function checkAmps(where, html) {
  let m;
  const re = /&(\S{0,6})/g;
  while ((m = re.exec(html))) {
    const after = m[1];
    if (after.startsWith("amp;")) {
      // `&amp;` is only for the glued case ("R&amp;D") — never before a space.
      if (/^amp;\s*$/.test(after) || after === "amp;") continue; // end of string edge
      if (after[4] === " ") errors.push(`${where}: "&amp; " — write a literal "& " instead`);
    } else if (/^[a-z]+;/i.test(after) || /^#\d+;/.test(after)) {
      errors.push(`${where}: HTML entity "&${after}" — use literal characters instead`);
    } else if (after && !after.startsWith(" ") && after !== "") {
      errors.push(`${where}: ambiguous "&${after.slice(0, 3)}…" — glued & must be written &amp;`);
    }
  }
}

function checkHtmlField(game, where, html) {
  if (typeof html !== "string") return;
  checkAmps(where, html);
  let m;
  GLYPH_TOKEN.lastIndex = 0;
  while ((m = GLYPH_TOKEN.exec(html))) {
    if (!game.glyphs || !game.glyphs[m[1]])
      warnings.push(`${where}: glyph token :${m[1]}: has no entry in game.glyphs (renders literally)`);
  }
  const imgs = html.match(/<img\b/gi);
  if (imgs) warnings.push(`${where}: raw <img> in content — prefer :glyph: tokens or an icons block`);
}

function checkTextField(where, text) {
  if (typeof text !== "string") return;
  if (/[<>]/.test(text)) errors.push(`${where}: renders via textContent but contains "<" or ">" (HTML won't work here)`);
  GLYPH_TOKEN.lastIndex = 0;
  if (GLYPH_TOKEN.test(text)) errors.push(`${where}: renders via textContent but contains a :glyph: token`);
}

function fileExists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

const R = global.Rulebooks;
if (!R || !R.games.length) {
  console.error("No games registered — registry or game files failed to load.");
  process.exit(1);
}

const seenGameIds = new Set();
for (const game of R.games) {
  const gid = game.id || "<no id>";
  const G = `[${gid}]`;
  for (const req of ["id", "title", "fullTitle", "chapters"])
    if (!game[req]) errors.push(`${G} missing required field "${req}"`);
  if (seenGameIds.has(gid)) errors.push(`${G} duplicate game id`);
  seenGameIds.add(gid);
  if (game.imgBase && !game.imgBase.endsWith("/"))
    errors.push(`${G} imgBase should end with "/"`);
  for (const [name, file] of Object.entries(game.glyphs || {})) {
    if (!fileExists((game.imgBase || "") + file))
      errors.push(`${G} glyph "${name}" -> missing file ${(game.imgBase || "") + file}`);
  }
  checkTextField(`${G} blurb`, game.blurb);
  checkTextField(`${G} tagline`, game.tagline);

  const seenSectionIds = new Set();
  for (const ch of game.chapters || []) {
    if (!ch.id || !ch.title || !Array.isArray(ch.sections)) {
      errors.push(`${G} chapter "${ch.id || ch.title || "?"}" missing id/title/sections`);
      continue;
    }
    for (const s of ch.sections) {
      const S = `${G} ${ch.id}/${s.id || "?"}`;
      if (!s.id || !s.title) errors.push(`${S}: section missing id/title`);
      if (seenSectionIds.has(s.id)) errors.push(`${S}: duplicate section id "${s.id}"`);
      seenSectionIds.add(s.id);
      checkTextField(`${S} title`, s.title);
      checkTextField(`${S} summary`, s.summary);

      (s.blocks || []).forEach((b, bi) => {
        const B = `${S} block[${bi}]`;
        const spec = BLOCK_SPECS[b.t];
        if (!spec) {
          errors.push(`${B}: unknown block type "${b.t}"`);
          return;
        }
        for (const f of spec.fields)
          if (b[f] == null) errors.push(`${B} (${b.t}): missing field "${f}"`);
        if (b.t === "note" && b.variant && !NOTE_VARIANTS.includes(b.variant))
          errors.push(`${B}: unknown note variant "${b.variant}"`);
        // HTML-rendered fields (mirror app.js: which fields go through innerHTML)
        const HTML_FIELDS = {
          p: ["html"], h: ["text"], note: ["title", "text"], example: ["text"],
          story: ["prologue", "win", "lose"],
        }[b.t] || [];
        for (const f of HTML_FIELDS) checkHtmlField(game, `${B}.${f}`, b[f]);
        if (b.t === "example") checkTextField(`${B}.title`, b.title); // example title -> textContent
        if (Array.isArray(b.items)) {
          const itemSpec = spec.items;
          b.items.forEach((it, ii) => {
            const I = `${B}.items[${ii}]`;
            if (itemSpec === "string") {
              if (typeof it !== "string") errors.push(`${I}: expected string`);
              else checkHtmlField(game, I, it);
            } else if (Array.isArray(itemSpec)) {
              for (const f of itemSpec) if (it[f] == null) errors.push(`${I}: missing "${f}"`);
              for (const f of ["term", "def", "title", "html", "q", "a"]) checkHtmlField(game, `${I}.${f}`, it[f]);
              if (it.img && !fileExists((game.imgBase || "") + it.img))
                errors.push(`${I}: missing image file ${(game.imgBase || "") + it.img}`);
            }
          });
        }
      });
    }
  }
  const sectionCount = (game.chapters || []).reduce((n, c) => n + (c.sections || []).length, 0);
  console.log(`[${gid}] ${game.chapters.length} chapters, ${sectionCount} sections — OK so far`);
}

// Every game file must be wired into index.html with a <script> tag.
const indexHtml = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
for (const f of gameFiles)
  if (!indexHtml.includes("assets/js/games/" + f))
    errors.push(`index.html: missing <script> tag for assets/js/games/${f}`);

for (const w of warnings) console.log("WARN  " + w);
for (const e of errors) console.log("ERROR " + e);
console.log(`\n${R.games.length} games, ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);

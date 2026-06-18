/* Rulebooks app: hash router + renderer. No build step, no dependencies. */
(function () {
  "use strict";

  var R = window.Rulebooks;
  var el = {
    topbar: document.getElementById("topbar"),
    menuBtn: document.getElementById("menuBtn"),
    searchBtn: document.getElementById("searchBtn"),
    brandTitle: document.getElementById("brandTitle"),
    sidebar: document.getElementById("sidebar"),
    scrim: document.getElementById("scrim"),
    toc: document.getElementById("toc"),
    content: document.getElementById("content"),
    navSearch: document.getElementById("navSearch"),
    main: document.getElementById("main"),
  };

  /* ---------- helpers ---------- */

  function h(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function flatSections(game) {
    var out = [];
    game.chapters.forEach(function (ch) {
      ch.sections.forEach(function (s) {
        out.push({ chapter: ch, section: s });
      });
    });
    return out;
  }

  function setTheme(accent) {
    document.documentElement.style.setProperty("--accent", accent || "#7cb342");
  }

  /* ---------- block renderers ---------- */

  var blockRenderers = {
    p: function (b) { return h("p", { class: "blk-p", html: b.html }); },
    h: function (b) { return h("h3", { class: "blk-h", text: b.text }); },
    divider: function () { return h("hr", { class: "blk-divider" }); },
    ul: function (b) {
      return h("ul", { class: "blk-list" }, b.items.map(function (i) {
        return h("li", { html: i });
      }));
    },
    ol: function (b) {
      return h("ol", { class: "blk-list blk-list--ordered" }, b.items.map(function (i) {
        return h("li", { html: i });
      }));
    },
    dl: function (b) {
      var wrap = h("div", { class: "blk-dl" });
      b.items.forEach(function (i) {
        wrap.appendChild(h("div", { class: "blk-dl__row" }, [
          h("div", { class: "blk-dl__term", html: i.term }),
          h("div", { class: "blk-dl__def", html: i.def }),
        ]));
      });
      return wrap;
    },
    steps: function (b) {
      var wrap = h("ol", { class: "blk-steps" });
      b.items.forEach(function (i) {
        wrap.appendChild(h("li", { class: "blk-steps__item" }, [
          h("span", { class: "blk-steps__num", text: i.n }),
          h("div", { class: "blk-steps__body" }, [
            h("div", { class: "blk-steps__title", text: i.title }),
            h("div", { class: "blk-steps__text", html: i.html }),
          ]),
        ]));
      });
      return wrap;
    },
    note: function (b) {
      var variant = b.variant || "note";
      return h("div", { class: "callout callout--" + variant }, [
        b.title ? h("div", { class: "callout__title", html: b.title }) : null,
        h("div", { class: "callout__body", html: b.text }),
      ]);
    },
    example: function (b) {
      return h("div", { class: "callout callout--example" }, [
        h("div", { class: "callout__title", text: b.title || "Example" }),
        h("div", { class: "callout__body", html: b.text }),
      ]);
    },
    faq: function (b) {
      var wrap = h("div", { class: "blk-faq" });
      b.items.forEach(function (i) {
        var item = h("details", { class: "blk-faq__item" }, [
          h("summary", { class: "blk-faq__q", html: i.q }),
          h("div", { class: "blk-faq__a", html: i.a }),
        ]);
        wrap.appendChild(item);
      });
      return wrap;
    },
    story: function (b) {
      var rows = [];
      function tag(label, val) {
        return h("div", { class: "story__tag" }, [
          h("span", { class: "story__tag-label", text: label }),
          h("span", { class: "story__tag-val", text: val }),
        ]);
      }
      var card = h("div", { class: "story" }, [
        h("div", { class: "story__head" }, [
          h("span", { class: "story__part", text: b.part }),
          h("div", { class: "story__tags" }, [tag("Stage", b.stage), tag("Enemy", b.enemy)]),
        ]),
        b.prologue ? h("p", { class: "story__prologue", html: b.prologue }) : null,
        h("div", { class: "story__meta" }, [
          h("div", { class: "story__metarow" }, [h("strong", { text: "Special Setup: " }), document.createTextNode(b.setup)]),
          h("div", { class: "story__metarow" }, [h("strong", { text: "Special Rules: " }), document.createTextNode(b.rules)]),
        ]),
        h("div", { class: "story__outcomes" }, [
          h("div", { class: "story__outcome story__outcome--win" }, [
            h("div", { class: "story__outcome-label", text: "If the commandos win" }),
            h("div", { class: "story__outcome-text", html: b.win }),
          ]),
          h("div", { class: "story__outcome story__outcome--lose" }, [
            h("div", { class: "story__outcome-label", text: "If the commandos lose" }),
            h("div", { class: "story__outcome-text", html: b.lose }),
          ]),
        ]),
      ]);
      return card;
    },
  };

  function renderBlocks(blocks) {
    var frag = document.createDocumentFragment();
    blocks.forEach(function (b) {
      var fn = blockRenderers[b.t];
      if (fn) frag.appendChild(fn(b));
    });
    return frag;
  }

  /* ---------- views ---------- */

  function showHome() {
    setTheme("#7cb342");
    el.brandTitle.textContent = "Rulebooks";
    el.menuBtn.hidden = true;
    el.searchBtn.hidden = true;
    document.body.classList.remove("has-sidebar");
    closeDrawer();

    var grid = h("div", { class: "gamegrid" });
    R.games.forEach(function (g) {
      grid.appendChild(
        h("a", { class: "gamecard", href: "#/" + g.id, style: "--card-accent:" + (g.accent || "#7cb342") }, [
          h("div", { class: "gamecard__cover", text: g.cover || "▚" }),
          h("div", { class: "gamecard__body" }, [
            h("div", { class: "gamecard__title", text: g.fullTitle || g.title }),
            h("div", { class: "gamecard__tagline", text: g.tagline || "" }),
            h("div", { class: "gamecard__meta" }, (g.meta || []).map(function (m) {
              return h("span", { class: "gamecard__chip", text: m.value });
            })),
          ]),
          h("span", { class: "gamecard__go", text: "Read rules →" }),
        ])
      );
    });

    el.content.innerHTML = "";
    el.content.appendChild(
      h("section", { class: "home" }, [
        h("div", { class: "home__hero" }, [
          h("h1", { class: "home__title", text: "Board Game Rules" }),
          h("p", { class: "home__sub", text: "Pick a game to browse a clean, mobile-friendly rules reference." }),
        ]),
        grid,
      ])
    );
    el.main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function buildToc(game, activeSectionId) {
    el.toc.innerHTML = "";
    game.chapters.forEach(function (ch) {
      var group = h("div", { class: "toc__group" });
      group.appendChild(h("div", { class: "toc__chapter", text: ch.title }));
      ch.sections.forEach(function (s) {
        var link = h("a", {
          class: "toc__link" + (s.id === activeSectionId ? " is-active" : ""),
          href: "#/" + game.id + "/" + s.id,
          "data-search": (s.title + " " + (s.summary || "")).toLowerCase(),
        }, [document.createTextNode(s.title)]);
        group.appendChild(link);
      });
      el.toc.appendChild(group);
    });
  }

  function showGame(game, sectionId) {
    if (!game) return showHome();
    setTheme(game.accent);
    el.brandTitle.textContent = game.title;
    el.menuBtn.hidden = false;
    el.searchBtn.hidden = false;
    document.body.classList.add("has-sidebar");

    var flat = flatSections(game);
    var idx = -1;
    if (sectionId) {
      for (var i = 0; i < flat.length; i++) {
        if (flat[i].section.id === sectionId) { idx = i; break; }
      }
    }

    buildToc(game, idx >= 0 ? flat[idx].section.id : null);

    el.content.innerHTML = "";

    if (idx < 0) {
      // game landing page
      el.content.appendChild(renderGameLanding(game, flat));
    } else {
      el.content.appendChild(renderSection(game, flat, idx));
    }

    el.main.scrollTop = 0;
    window.scrollTo(0, 0);
    closeDrawer();
    applySearchFilter();
  }

  function renderGameLanding(game, flat) {
    var wrap = h("section", { class: "landing" });
    wrap.appendChild(h("div", { class: "landing__hero" }, [
      h("div", { class: "landing__cover", text: game.cover || "▚" }),
      h("div", {}, [
        h("h1", { class: "landing__title", text: game.fullTitle || game.title }),
        h("p", { class: "landing__tagline", text: game.tagline || "" }),
        h("div", { class: "landing__meta" }, (game.meta || []).map(function (m) {
          return h("span", { class: "landing__chip" }, [
            h("span", { class: "landing__chip-label", text: m.label }),
            h("span", { class: "landing__chip-val", text: m.value }),
          ]);
        })),
      ]),
    ]));
    if (game.blurb) wrap.appendChild(h("p", { class: "landing__blurb", text: game.blurb }));

    wrap.appendChild(h("h2", { class: "landing__contents-title", text: "Contents" }));
    game.chapters.forEach(function (ch) {
      var grp = h("div", { class: "landing__chapter" });
      grp.appendChild(h("div", { class: "landing__chapter-title", text: ch.title }));
      var list = h("div", { class: "landing__sections" });
      ch.sections.forEach(function (s) {
        list.appendChild(h("a", { class: "landing__sec", href: "#/" + game.id + "/" + s.id }, [
          h("span", { class: "landing__sec-title", text: s.title }),
          s.summary ? h("span", { class: "landing__sec-sum", text: s.summary }) : null,
        ]));
      });
      grp.appendChild(list);
      wrap.appendChild(grp);
    });
    return wrap;
  }

  function renderSection(game, flat, idx) {
    var entry = flat[idx];
    var s = entry.section;
    var wrap = h("article", { class: "section" });

    wrap.appendChild(h("div", { class: "section__crumb" }, [
      h("a", { class: "section__crumb-link", href: "#/" + game.id, text: game.title }),
      h("span", { class: "section__crumb-sep", text: "›" }),
      h("span", { class: "section__crumb-ch", text: entry.chapter.title }),
    ]));
    wrap.appendChild(h("h1", { class: "section__title", text: s.title }));
    if (s.summary) wrap.appendChild(h("p", { class: "section__summary", text: s.summary }));

    var body = h("div", { class: "section__body" });
    body.appendChild(renderBlocks(s.blocks || []));
    wrap.appendChild(body);

    // prev / next
    var nav = h("div", { class: "pager" });
    if (idx > 0) {
      var p = flat[idx - 1].section;
      nav.appendChild(h("a", { class: "pager__btn pager__btn--prev", href: "#/" + game.id + "/" + p.id }, [
        h("span", { class: "pager__dir", text: "← Previous" }),
        h("span", { class: "pager__name", text: p.title }),
      ]));
    } else {
      nav.appendChild(h("span", {}));
    }
    if (idx < flat.length - 1) {
      var n = flat[idx + 1].section;
      nav.appendChild(h("a", { class: "pager__btn pager__btn--next", href: "#/" + game.id + "/" + n.id }, [
        h("span", { class: "pager__dir", text: "Next →" }),
        h("span", { class: "pager__name", text: n.title }),
      ]));
    }
    wrap.appendChild(nav);
    return wrap;
  }

  /* ---------- search / filter ---------- */

  function applySearchFilter() {
    var q = (el.navSearch.value || "").trim().toLowerCase();
    var links = el.toc.querySelectorAll(".toc__link");
    var groups = el.toc.querySelectorAll(".toc__group");
    links.forEach(function (a) {
      var match = !q || (a.getAttribute("data-search") || "").indexOf(q) !== -1;
      a.style.display = match ? "" : "none";
    });
    groups.forEach(function (g) {
      var visible = g.querySelectorAll('.toc__link:not([style*="display: none"])').length;
      g.style.display = visible ? "" : "none";
    });
  }

  /* ---------- drawer ---------- */

  function openDrawer() {
    document.body.classList.add("drawer-open");
    el.scrim.hidden = false;
    el.menuBtn.setAttribute("aria-expanded", "true");
  }
  function closeDrawer() {
    document.body.classList.remove("drawer-open");
    el.scrim.hidden = true;
    el.menuBtn.setAttribute("aria-expanded", "false");
  }
  function toggleDrawer() {
    if (document.body.classList.contains("drawer-open")) closeDrawer();
    else openDrawer();
  }

  /* ---------- router ---------- */

  function parseHash() {
    var raw = (location.hash || "#/").replace(/^#\/?/, "");
    var parts = raw.split("/").filter(Boolean);
    return { gameId: parts[0] || null, sectionId: parts[1] || null };
  }

  function route() {
    var r = parseHash();
    if (!r.gameId) return showHome();
    var game = R.get(r.gameId);
    if (!game) return showHome();
    showGame(game, r.sectionId);
  }

  /* ---------- events ---------- */

  el.menuBtn.addEventListener("click", toggleDrawer);
  el.scrim.addEventListener("click", closeDrawer);
  el.searchBtn.addEventListener("click", function () {
    openDrawer();
    setTimeout(function () { el.navSearch.focus(); }, 80);
  });
  el.navSearch.addEventListener("input", applySearchFilter);
  el.toc.addEventListener("click", function (e) {
    if (e.target.closest(".toc__link")) closeDrawer();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
  // In case the script loads after DOMContentLoaded:
  if (document.readyState !== "loading") route();
})();

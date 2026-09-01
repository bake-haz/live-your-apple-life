/*
 * Live Your Apple Life — tiny site helper.
 * Renders the home intent grid and the footer from window.LIFE_INTENTS.
 * Path-aware via window.SITE_BASE ("" on the homepage, "../" in subfolders).
 * No frameworks, no network calls, no animation. Degrades to <noscript> fallback.
 */
(function () {
  var intents = window.LIFE_INTENTS || [];
  var BASE = window.SITE_BASE || "";
  function el(id) { return document.getElementById(id); }

  // Home grid
  var grid = el("intent-grid");
  if (grid && intents.length) {
    grid.innerHTML = intents.map(function (i) {
      return (
        '<a class="card" href="' + BASE + "intents/" + i.slug + '.html">' +
        "<h3>" + i.title + "</h3>" +
        "<p>" + i.tagline + "</p></a>"
      );
    }).join("");
  }

  // Footer links (present on every page)
  var fl = el("site-footer-links");
  if (fl && intents.length) {
    fl.innerHTML = intents.map(function (i) {
      return '<a href="' + BASE + "intents/" + i.slug + '.html">' + i.title + "</a>";
    }).join("") + '<a href="' + BASE + 'ask-us.html">Ask Us</a>';
  }

  // Legal / about links — inserted before the footer note on every page.
  var footerWrap = document.querySelector(".footer .wrap");
  var noteEl = document.querySelector(".footer .footer-note");
  if (footerWrap && noteEl) {
    var legal = document.createElement("nav");
    legal.className = "footer-legal";
    legal.setAttribute("aria-label", "About and legal");
    legal.innerHTML =
      '<a href="' + BASE + 'about.html">About</a>' +
      '<a href="' + BASE + 'privacy.html">Privacy</a>' +
      '<a href="' + BASE + 'terms.html">Terms</a>';
    footerWrap.insertBefore(legal, noteEl);
  }
})();

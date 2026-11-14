(function () {
  function injectClass9Card() {
    var root = document.getElementById('root');
    if (!root) return;

    var hash = window.location.hash || '';
    var text = root.innerText || '';
    var isClass9 =
      hash.indexOf('class-9') !== -1 ||
      hash.indexOf('/9') !== -1 ||
      /Class\s*9\b/i.test(text);

    var existing = document.getElementById('ep-class9-math50-card');
    if (!isClass9) {
      if (existing) existing.remove();
      return;
    }
    if (existing) return;

    var headings = root.querySelectorAll('h1, h2, h3');
    var anchor = null;
    for (var i = 0; i < headings.length; i++) {
      if (/Class\s*9\b/i.test(headings[i].textContent || '')) {
        anchor =
          headings[i].closest('section, header, div.max-w-7xl, div.container') ||
          headings[i].parentElement;
        break;
      }
    }
    if (!anchor) return;

    var box = document.createElement('div');
    box.id = 'ep-class9-math50-card';
    box.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4';
    box.innerHTML =
      '<div class="rounded-2xl border border-blue-200 dark:border-blue-800/60 bg-gradient-to-r from-blue-50 via-indigo-50 to-emerald-50 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">' +
        '<div>' +
          '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white mb-1.5">' +
            'BSEB Class 9th Math • Special HOTS Set' +
          '</span>' +
          '<h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">' +
            'कक्षा 9वीं गणित — 50 कठिन सब्जेक्टिव प्रश्न एवं हल (अध्याय 1–6 व 12–14)' +
          '</h3>' +
          '<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">' +
            'बहुपद के विशेष गुणनखंड सूत्रों, चरण-दर-चरण हल (Solutions) एवं PDF प्रिंट विकल्प के साथ।' +
          '</p>' +
        '</div>' +
        '<a href="./class-9-math-subjective-50.html" class="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow transition">' +
          '50 प्रश्न व हल खोलें &rarr;' +
        '</a>' +
      '</div>';

    anchor.insertAdjacentElement('afterend', box);
  }

  var obs = new MutationObserver(injectClass9Card);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      var r = document.getElementById('root');
      if (r) obs.observe(r, { childList: true, subtree: true });
      injectClass9Card();
    });
  } else {
    var r = document.getElementById('root');
    if (r) obs.observe(r, { childList: true, subtree: true });
    injectClass9Card();
  }
  window.addEventListener('hashchange', function () {
    setTimeout(injectClass9Card, 120);
  });
})();

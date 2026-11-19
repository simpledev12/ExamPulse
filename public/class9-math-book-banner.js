// Live Class 9th Math 205-Page Hindi PDF Book Banner & Inline PDF Reader for ExamPulse
(function () {
  const BANNER_ID = "ep-class9-math-book-banner";
  const PDF_PREVIEW = "https://drive.google.com/file/d/1oN6MwReVrY8pJ_OYGJm95878H-U1Dt_b/preview";
  const PDF_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1oN6MwReVrY8pJ_OYGJm95878H-U1Dt_b";
  const WEB_BOOK_URL = "./class-9-math-book-hindi.html";

  function shouldShowBanner(mainEl) {
    if (!mainEl) return false;
    const text = mainEl.innerText || "";
    return (
      text.includes("Mathematics (गणित — BSEB)") ||
      text.includes("MAT-09-BSEB") ||
      text.includes("संपूर्ण 205-पेज PDF पुस्तक") ||
      (text.includes("Class 9") && text.includes("अध्याय 1:"))
    );
  }

  function createBanner() {
    const wrap = document.createElement("div");
    wrap.id = BANNER_ID;
    wrap.className = "mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8";
    wrap.innerHTML = `
      <div class="rounded-2xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 p-5 text-white shadow-lg dark:border-indigo-700">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span class="inline-block rounded-full bg-amber-500/20 px-3 py-0.5 text-xs font-bold text-amber-300 border border-amber-400/30">
              NEW • 205 PAGES • हिंदी संस्करण (BSEB / SCERT Bihar)
            </span>
            <h2 class="mt-2 text-lg sm:text-xl font-extrabold tracking-tight text-white">
              बिहार बोर्ड कक्षा 9 गणित — संपूर्ण नोट्स एवं सूत्र PDF पुस्तक (सभी 15 अध्याय)
            </h2>
            <p class="mt-1 text-xs sm:text-sm text-indigo-100">
              सभी 15 अध्यायों के नोट्स, महा-सूत्र संग्रह, प्रमेय-उपपत्ति, 150+ हल उदाहरण, 225+ MCQs और 100-अंक मॉडल पेपर।
            </p>
          </div>
          <div class="flex flex-wrap gap-2 shrink-0">
            <button type="button" id="ep-toggle-pdf-preview"
              class="rounded-xl bg-amber-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow hover:bg-amber-400 transition">
              यहीं 205-पेज PDF पढ़ें
            </button>
            <a href="${PDF_DOWNLOAD}" target="_blank" rel="noopener noreferrer"
              class="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow hover:bg-emerald-500 transition">
              PDF डाउनलोड करें (1.14 MB)
            </a>
            <a href="${WEB_BOOK_URL}"
              class="rounded-xl bg-white/15 px-4 py-2.5 text-xs sm:text-sm font-bold text-white border border-white/25 hover:bg-white/25 transition">
              वेब बुक खोलें
            </a>
          </div>
        </div>
        <div id="ep-inline-pdf-box" class="hidden mt-4 overflow-hidden rounded-xl border border-indigo-400/30 bg-slate-950">
          <iframe src="" data-src="${PDF_PREVIEW}" class="h-[580px] w-full border-0" allow="autoplay" title="BSEB Class 9 Math Hindi Book 205 Pages"></iframe>
        </div>
      </div>
    `;
    const btn = wrap.querySelector("#ep-toggle-pdf-preview");
    const box = wrap.querySelector("#ep-inline-pdf-box");
    const iframe = box.querySelector("iframe");
    btn.addEventListener("click", () => {
      const hidden = box.classList.toggle("hidden");
      if (!hidden && !iframe.getAttribute("src")) {
        iframe.setAttribute("src", iframe.getAttribute("data-src"));
      }
      btn.textContent = hidden ? "यहीं 205-पेज PDF पढ़ें" : "PDF प्रीव्यू बंद करें";
    });
    return wrap;
  }

  function syncBanner() {
    const mainEl = document.getElementById("app-main") || document.getElementById("root");
    if (!mainEl) return;
    const existing = document.getElementById(BANNER_ID);
    if (shouldShowBanner(mainEl)) {
      if (!existing) {
        mainEl.prepend(createBanner());
      }
    } else if (existing) {
      existing.remove();
    }
  }

  function init() {
    const mainEl = document.getElementById("app-main") || document.getElementById("root");
    if (!mainEl) {
      setTimeout(init, 250);
      return;
    }
    const observer = new MutationObserver(() => syncBanner());
    observer.observe(mainEl, { childList: true, subtree: true });
    syncBanner();
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/**
 * SEKIN VA YUMSHOQ SCROLL — sayt bo'ylab yagona harakat uslubi.
 *
 * NIMA UCHUN: avval hamma joyda brauzerning o'z `behavior: "smooth"`
 * usuli ishlatilardi. Uning davomiyligini boshqarib bo'lmaydi (Chrome'da
 * ~300ms, keskin to'xtaydi) va brauzerdan brauzerga farq qiladi. Endi
 * harakat `requestAnimationFrame` bilan chiziladi: davomiylik va tezlanish
 * egri chizig'i biz tomondan belgilanadi — natija sekin va yoqimli.
 *
 * Ikki qism bor:
 *   1. DASTURIY scroll (havolalar, tugmalar, sahifa almashinuvi) —
 *      `scrollToY` / `scrollToElement` / `initSmoothAnchors`;
 *   2. G'ILDIRAK scrolli — `initSmoothWheel`: sahifa g'ildirak burashi
 *      bilan darhol emas, inersiya bilan ("og'ir") siljiydi.
 *
 * Ikkalasi bir vaqtda ishlab ketmasligi uchun dasturiy scroll
 * boshlanganda `smoothscroll:start` hodisasi yuboriladi va inersiya
 * damperi to'xtaydi.
 */

// Havola/tugma bosilganda scroll davomiyligi. 950ms juda uzoq edi —
// foydalanuvchi bosgandan keyin sahifa "sudralib" borardi.
const DEFAULT_DURATION = 620;
// Sahifa tepasidagi yopishqoq navbar balandligi (SiteLayout: 68px) + nafas
const DEFAULT_OFFSET = 88;

/** Harakatni tabiiy qiladigan egri chiziq: sekin boshlanadi, sekin tugaydi */
function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

/** Foydalanuvchi harakatni kamaytirishni so'raganmi (tizim sozlamasi) */
function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

let activeAnimation = null;

/** Davom etayotgan harakatni to'xtatadi (foydalanuvchi o'zi scroll qilsa) */
function cancelActive() {
  if (activeAnimation !== null) {
    cancelAnimationFrame(activeAnimation);
    activeAnimation = null;
  }
}

/**
 * Berilgan nuqtaga sekin scroll qiladi.
 * @param {number} to        — maqsad (px, sahifa tepasidan)
 * @param {object} [opts]
 * @param {number} [opts.duration]
 */
export function scrollToY(to, { duration = DEFAULT_DURATION } = {}) {
  if (typeof window === "undefined") return;

  const start = window.scrollY;
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const target = Math.max(0, Math.min(to, maxScroll));
  const distance = target - start;

  cancelActive();
  // Inersiyali damper ishlab turgan bo'lsa to'xtasin — ikkalasi bir vaqtda
  // scroll qilsa harakat "tortishib" qoladi (initSmoothWheel tinglaydi).
  window.dispatchEvent(new Event("smoothscroll:start"));

  // Juda qisqa masofa yoki harakat kamaytirilgan bo'lsa — darhol
  if (Math.abs(distance) < 4 || prefersReducedMotion()) {
    window.scrollTo(0, target);
    return;
  }

  // Masofaga qarab davomiylikni moslaymiz: qisqa yo'l uchun 950ms
  // juda uzun tuyuladi, juda uzun yo'l uchun esa qisqa.
  const scaled = Math.min(
    duration * 1.35,
    Math.max(420, duration * Math.min(1, Math.abs(distance) / 1200 + 0.45)),
  );

  const startTime = performance.now();

  // Foydalanuvchi o'zi scroll qilsa — animatsiyani to'xtatamiz,
  // aks holda "tortishuv" hissi paydo bo'ladi.
  const stopOnUserScroll = () => cancelActive();
  window.addEventListener("wheel", stopOnUserScroll, { passive: true, once: true });
  window.addEventListener("touchstart", stopOnUserScroll, { passive: true, once: true });

  function frame(now) {
    const progress = Math.min(1, (now - startTime) / scaled);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) {
      activeAnimation = requestAnimationFrame(frame);
    } else {
      activeAnimation = null;
      window.removeEventListener("wheel", stopOnUserScroll);
      window.removeEventListener("touchstart", stopOnUserScroll);
    }
  }

  activeAnimation = requestAnimationFrame(frame);
}

/** Sahifa boshiga sekin qaytaradi */
export function scrollToTop(opts) {
  scrollToY(0, opts);
}

/**
 * Elementga sekin scroll qiladi (yopishqoq navbar hisobga olinadi).
 * @param {Element|string} target — element yoki uning id'si
 */
export function scrollToElement(target, { offset = DEFAULT_OFFSET, ...opts } = {}) {
  const el =
    typeof target === "string"
      ? document.getElementById(target.replace(/^#/, ""))
      : target;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  scrollToY(top, opts);
}

/**
 * Sayt bo'ylab "#" havolalarini yumshoq scrollga ulaydi.
 * Bir marta (App yuklanganda) chaqiriladi. Delegatsiya orqali ishlaydi,
 * shuning uchun keyin qo'shilgan havolalar ham avtomatik qamrab olinadi.
 *
 * @returns {() => void} tozalash funksiyasi
 */
export function initSmoothAnchors() {
  if (typeof document === "undefined") return () => {};

  function onClick(e) {
    // Faqat oddiy chap tugma bosilishi (Ctrl/Cmd bilan — yangi oyna)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey)
      return;

    const link = e.target.closest?.('a[href^="#"]');
    if (!link) return;

    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    const el = document.getElementById(hash.slice(1));
    if (!el) return;

    e.preventDefault();
    scrollToElement(el);
    // Manzil satrida hash saqlanadi (havolani ulashish uchun),
    // lekin sakrash bo'lmaydi.
    if (window.history?.replaceState) {
      window.history.replaceState(null, "", hash);
    }
  }

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}

/* ═══════════════════════════════════════════════════════════════
   INERSIYALI (og'ir) SCROLL — g'ildirak/trackpad uchun
   ═══════════════════════════════════════════════════════════════
   Sahifa g'ildirak burashi bilan darhol emas, "og'irlik" bilan —
   maqsad tomon asta yaqinlashib siljiydi. Har kadrda joriy holat
   maqsadga LERP ulushi qadar yaqinlashadi, shuning uchun harakat
   oxirida sekinlashib to'xtaydi.

   NIMALAR CHETLAB O'TILADI (aks holda sayt buzilardi):
     • ichki scrollli bloklar — dars sahifasidagi yopishqoq panel,
       chat oynasi va h.k. (sichqoncha ular ustida bo'lsa, native
       scroll ishlaydi);
     • sensorli qurilmalar — mobil/planshetda tizimning o'z
       inersiyasi bor, unga aralashish faqat yomonlashtiradi;
     • modal ochiq bo'lgan holat (body scrolli qulflangan);
     • "harakatni kamaytirish" tizim sozlamasi. */

// Qanchalik "og'ir": kichikroq qiymat — sekinroq va uzoqroq siljish.
// 0.082 juda og'ir edi — 300px lik burash ~1.3 soniya davom etib, sayt
// "sekin ishlayapti" degan taassurot berardi. 0.16 — silliqlik saqlanadi,
// lekin javob berish deyarli darhol (~0.45s).
const WHEEL_LERP = 0.16;
// G'ildirak burashining masofaga ta'siri (1 — tabiiy masofa)
const WHEEL_MULTIPLIER = 1;

/** Sichqoncha ostida o'z scrolli bor blok bormi? */
function findScrollableAncestor(node, deltaY) {
  let el = node;
  while (el && el !== document.body && el !== document.documentElement) {
    if (el.nodeType === 1) {
      const oy = getComputedStyle(el).overflowY;
      if (
        (oy === "auto" || oy === "scroll") &&
        el.scrollHeight > el.clientHeight + 1
      ) {
        const atTop = el.scrollTop <= 0;
        const atBottom =
          el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        // Shu yo'nalishda hali scroll qiladigan joyi bo'lsa — unga tegmaymiz
        if (!((deltaY < 0 && atTop) || (deltaY > 0 && atBottom))) return el;
      }
    }
    el = el.parentElement;
  }
  return null;
}

/**
 * Sichqoncha ostida GORIZONTAL scrollli blok bormi (masalan darslar
 * sahifasidagi modul filtri — bir qatorda 14 ta tugma)?
 *
 * ⚠️ NIMA UCHUN ALOHIDA FUNKSIYA KERAK BO'LDI: `findScrollableAncestor`
 * faqat VERTIKAL scrollni biladi, shuning uchun gorizontal tasmada
 * u har doim `null` qaytarardi va g'ildirak hodisasi pastdagi
 * `e.preventDefault()` ga tushardi. Natijada filtr tasmasi UMUMAN
 * scroll bo'lmasdi: trackpad'dagi yon harakat bloklanardi, oddiy
 * sichqonchada esa gorizontal scroll uchun boshqa yo'l yo'q edi.
 *
 * `delta` — shu yo'nalishda hali siljiydigan joy borligini tekshirish
 * uchun. Joy tugagan bo'lsa `null` qaytadi va sahifa odatdagidek
 * vertikal scroll bo'ladi (aks holda tasma chetiga yetganda sahifa
 * qotib qolardi).
 */
function findHorizontalScrollable(node, delta) {
  let el = node;
  while (el && el !== document.body && el !== document.documentElement) {
    if (el.nodeType === 1) {
      const ox = getComputedStyle(el).overflowX;
      if (
        (ox === "auto" || ox === "scroll") &&
        el.scrollWidth > el.clientWidth + 1
      ) {
        const atStart = el.scrollLeft <= 0;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        if (!((delta < 0 && atStart) || (delta > 0 && atEnd))) return el;
      }
    }
    el = el.parentElement;
  }
  return null;
}

/**
 * Inersiyali scrollni yoqadi.
 * @returns {() => void} tozalash funksiyasi
 */
export function initSmoothWheel({
  lerp = WHEEL_LERP,
  multiplier = WHEEL_MULTIPLIER,
} = {}) {
  if (typeof window === "undefined") return () => {};

  // Sensorli qurilma yoki harakat kamaytirilgan bo'lsa — tegmaymiz
  const coarsePointer = window.matchMedia?.("(pointer: coarse)").matches;
  if (coarsePointer || prefersReducedMotion()) return () => {};

  let target = window.scrollY;
  let raf = null;
  let running = false;

  const maxScroll = () =>
    Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  let lastTime = 0;

  function frame(now) {
    const current = window.scrollY;
    const dt = lastTime ? Math.min(48, now - lastTime) : 16.7;
    lastTime = now;

    // Kadr chastotasidan mustaqil yaqinlashish (60 va 120 Hz da bir xil his)
    const factor = 1 - Math.pow(1 - lerp, dt / 16.67);
    const next = current + (target - current) * factor;

    if (Math.abs(target - current) < 0.4) {
      window.scrollTo(0, target);
      running = false;
      raf = null;
      lastTime = 0;
      return;
    }

    window.scrollTo(0, next);
    raf = requestAnimationFrame(frame);
  }

  function start() {
    // MUHIM: shart `running` emas, `raf` bo'yicha tekshiriladi. Aks holda
    // kadr biror sababga ko'ra tushib qolsa (tashqaridan
    // cancelAnimationFrame, tab uzoq vaqt fonda turgani va h.k.)
    // `running` true bo'lib qotib qolardi va damper g'ildirakka umuman
    // javob bermay qo'yardi.
    if (raf !== null) return;
    running = true;
    lastTime = 0;
    raf = requestAnimationFrame(frame);
  }

  function onWheel(e) {
    // Boshqa maqsadli tugmalar bilan (zoom va h.k.) — aralashmaymiz
    if (e.ctrlKey || e.metaKey || e.defaultPrevented) return;
    // Modal ochiq bo'lsa (body qulflangan) — aralashmaymiz
    if (getComputedStyle(document.body).overflow === "hidden") return;

    // `data-scroll-lock` bloklari (masalan dars sahifasidagi yopishqoq
    // panel) SAHIFANI umuman qimirlatmaydi: ular ustida g'ildirak
    // burilganda faqat o'sha blokning o'zi scroll bo'ladi. Blokda
    // scroll qiladigan joy qolmasa ham sahifa siljimaydi — aks holda
    // "o'ng tomonni scroll qilsam chap tomon ketyapti" hissi paydo
    // bo'ladi.
    const locked = e.target.closest?.("[data-scroll-lock]");
    if (locked) {
      const canScroll = locked.scrollHeight > locked.clientHeight + 1;
      if (!canScroll) e.preventDefault();
      return; // scroll bo'lsa — native o'zi bajaradi (CSS overscroll-behavior chaining'ni to'xtatadi)
    }

    // ── GORIZONTAL harakat (trackpad'da yon surish) ──
    // Bunday hodisaga UMUMAN aralashmaymiz: damper faqat vertikal
    // scroll bilan ishlaydi, lekin oldin bu yerda ham
    // `e.preventDefault()` chaqirilib, gorizontal tasmalar (darslar
    // filtri) qimirlamay qolardi.
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

    // Boshqa ichki scrollli bloklar ustida bo'lsak — native scroll ishlasin
    if (findScrollableAncestor(e.target, e.deltaY)) return;

    // deltaMode: 0 — piksel, 1 — qator, 2 — sahifa
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
    const delta = e.deltaY * unit * multiplier;

    // ── Faqat GORIZONTAL scrollli tasma ustida ──
    // Oddiy sichqonchada `deltaX` umuman bo'lmaydi, ya'ni yuqoridagi
    // shart ishlamaydi va foydalanuvchida tasmani surish uchun hech
    // qanday yo'l qolmaydi. Shu sabab vertikal burash shu yerda
    // gorizontal siljishga aylantiriladi (fayl menejerlari va
    // brauzer tab tasmalarida qabul qilingan xatti-harakat).
    const strip = findHorizontalScrollable(e.target, delta);
    if (strip) {
      e.preventDefault();
      strip.scrollLeft += delta;
      return;
    }

    e.preventDefault();
    // Animatsiya ketmayotgan bo'lsa — maqsadni haqiqiy holatdan boshlaymiz
    if (!running) target = window.scrollY;
    target = Math.max(0, Math.min(target + delta, maxScroll()));
    start();
  }

  // Dasturiy scroll (havolalar/tugmalar) ishga tushsa — inersiya to'xtasin
  function syncFromProgrammatic() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = null;
    target = window.scrollY;
  }

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("smoothscroll:start", syncFromProgrammatic);
  // Klaviatura, qidiruv, o'lcham o'zgarishi — maqsadni qayta moslash
  window.addEventListener("keydown", syncFromProgrammatic);
  window.addEventListener("resize", syncFromProgrammatic);

  return () => {
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("smoothscroll:start", syncFromProgrammatic);
    window.removeEventListener("keydown", syncFromProgrammatic);
    window.removeEventListener("resize", syncFromProgrammatic);
    if (raf) cancelAnimationFrame(raf);
  };
}

/**
 * <head> ni boshqaruvchi kichik yordamchilar.
 *
 * `Seo.jsx` dan ajratilgan sabab: unga hreflang, `og:image` o'lchamlari va
 * bir nechta JSON-LD qo'shilgach fayl 200 qatordan oshib ketardi
 * (CLAUDE.md qoidasi). Bu yerda faqat DOM bilan ishlash, u yerda —
 * qaysi qiymat yozilishi haqidagi qaror.
 */

import { SITE_URL, HREFLANG, DEFAULT_LOCALE } from "./siteMeta";

/** <meta> ni topadi yoki yaratadi va qiymatini yozadi. */
export function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (content == null || content === "") {
    // Bo'sh qiymatli teg qidiruv tizimiga bo'sh tavsif ko'rsatadi —
    // uni butunlay olib tashlash to'g'riroq. (Seo.jsx har doim standart
    // qiymat beradi, shuning uchun bu holat kamdan-kam yuzaga keladi.)
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]:not([hreflang])`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * hreflang — bir sahifaning turli tildagi variantlarini bog'laydi.
 *
 * ⚠️ MUHIM: sayt bitta manzilda ikki tilda ishlaydi (til `localStorage`
 * da saqlanadi, URL da EMAS), shuning uchun `?lang=` parametri bilan
 * ALOHIDA manzil ko'rsatiladi — aks holda Google ikkala variantni ham
 * bitta sahifa deb biladi va faqat bittasini indekslaydi.
 */
export function setAlternates(pathname) {
  // ⚠️ BARCHA hreflang havolalari o'chiriladi, faqat o'zimiz qo'shganlari
  // emas: `index.html` da ham statik hreflang bor (JavaScript ishlamaydigan
  // botlar uchun). Faqat `data-seo-hreflang` bo'yicha tozalansa, sahifada
  // IKKI to'plam hreflang qolardi — bu qidiruv tizimlari uchun ziddiyatli
  // signal (brauzerda o'lchandi: 3 o'rniga 6 ta havola).
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((el) => el.remove());

  const base = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const entries = Object.entries(HREFLANG).map(([lang, code]) => [
    code,
    lang === DEFAULT_LOCALE ? base : `${base}?lang=${lang}`,
  ]);
  entries.push(["x-default", base]);

  entries.forEach(([code, href]) => {
    const el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", code);
    el.setAttribute("href", href);
    el.dataset.seoHreflang = "true";
    document.head.appendChild(el);
  });
}

/**
 * Sahifaga xos JSON-LD bloklarini yozadi va oldingilarini tozalaydi.
 * `index.html` dagi asosiy (statik) blokka TEGILMAYDI — u `data-seo-page`
 * atributiga ega emas.
 */
export function setJsonLd(blocks) {
  document.head
    .querySelectorAll('script[data-seo-page="true"]')
    .forEach((el) => el.remove());

  // `index.html` dagi zaxira FAQPage/HowTo bloki — u FAQAT JavaScript
  // ishlamaydigan botlar uchun. Sahifa o'z sxemasini bergan zahoti u
  // olib tashlanadi: aks holda bir sahifada IKKI FAQPage qolardi va
  // ruscha rejimda ulardan biri o'zbekcha bo'lib chiqardi.
  const hasOwn = (Array.isArray(blocks) ? blocks : [blocks]).some(Boolean);
  if (hasOwn) {
    document.head
      .querySelectorAll('script[data-seo-fallback="true"]')
      .forEach((el) => el.remove());
  }

  (Array.isArray(blocks) ? blocks : [blocks]).filter(Boolean).forEach((b) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoPage = "true";
    script.textContent = JSON.stringify(b);
    document.head.appendChild(script);
  });
}

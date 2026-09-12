"use strict";
/**
 * Ochiq sahifalarning umumiy HTML qobig'i: <head> meta teglari,
 * yuqori panel, non ushlagich va pastki qism.
 *
 * ⚠️ Hech qanday shablon dvigateli (ejs, pug) qo'shilmadi — loyihaga
 * yangi bog'liqlik kiritmaslik uchun. Sahifalar oddiy satrlardan
 * yig'iladi, barcha o'zgaruvchan qiymat `esc()` dan o'tadi.
 */
const { CSS } = require("./styles");
const {
  SITE_URL,
  SITE_NAME,
  LOGO,
  OG_IMAGE,
  HREFLANG,
  OG_LOCALE,
  T,
  path: P,
} = require("./meta");
const { siteEntities, ORG_ID, SITE_ID } = require("./entity");

/** HTML'ga qo'yiladigan HAR QANDAY o'zgaruvchan matn shu yerdan o'tadi. */
function esc(v) {
  return String(v == null ? "" : v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** JSON-LD ichida `</script>` yozib qo'yish imkonini yopadi. */
function jsonLd(data) {
  if (!data) return "";
  const safe = JSON.stringify(data).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${safe}</script>`;
}

function crumbs(trail, lang) {
  const parts = trail.map((c, i) =>
    i === trail.length - 1 || !c.href
      ? `<span aria-current="page">${esc(c.name)}</span>`
      : `<a href="${esc(c.href)}">${esc(c.name)}</a>`,
  );
  return `<nav class="crumbs" aria-label="${lang === "ru" ? "Навигация" : "Yo'l"}">${parts.join(
    "<span>›</span>",
  )}</nav>`;
}

/**
 * To'liq sahifa.
 * @param {object} o
 * @param {string} o.lang        "uz" | "ru"
 * @param {string} o.title       <title> va og:title
 * @param {string} o.description meta description
 * @param {string} o.canonical   sayt ildizidan boshlanadigan yo'l ("/qonun/MK")
 * @param {string} o.body        <main> ichidagi HTML
 * @param {object|array} o.schema JSON-LD (ixtiyoriy)
 * @param {string} o.mdPath  shu sahifaning Markdown nusxasi (ixtiyoriy)
 * @param {string} o.ogType  og:type (standart "article")
 */
function page({
  lang,
  title,
  description,
  canonical,
  body,
  schema,
  mdPath,
  ogType = "article",
}) {
  const t = T[lang] || T.uz;
  const url = `${SITE_URL}${canonical}`;
  const altLangUrl = (l) => (l === "uz" ? url : `${url}?lang=${l}`);
  const alts = Object.entries(HREFLANG)
    .map(
      ([l, code]) =>
        `<link rel="alternate" hreflang="${code}" href="${esc(altLangUrl(l))}">`,
    )
    .join("\n    ");

  /* ⚠️ Sayt entity grafi (Organization + WebSite) HAR BIR ochiq sahifaga
     qo'shiladi — sahifaning o'z sxemasidan OLDIN. Botlar `/qonun/...`
     sahifalarini bosh sahifadan mustaqil ravishda o'qiydi, ya'ni bu
     tugunlarsiz ular kontentni hech qanday manbaga bog'lay olmasdi. */
  /* Sahifaning O'ZI ham grafga ulanadi: kim nashr qilgan (`publisher`) va
     qaysi saytga tegishli (`isPartOf`). Busiz sahifadagi `Legislation`
     yoki `QAPage` tuguni "egasiz" qolardi — GEO da bu iqtibos olish
     ehtimolini pasaytiradi. */
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${altLangUrl(lang)}#webpage`,
    url: altLangUrl(lang),
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
  };

  const blocks = [...siteEntities(lang), webPage, ...(Array.isArray(schema) ? schema : [schema])]
    .filter(Boolean)
    .map(jsonLd)
    .join("\n    ");

  return `<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)} — ${SITE_NAME}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="${esc(altLangUrl(lang))}">
    ${alts}
    <link rel="alternate" hreflang="x-default" href="${esc(url)}">
    ${mdPath ? `<link rel="alternate" type="text/markdown" href="${esc(SITE_URL + mdPath)}" title="${esc(t.markdown)}">` : ""}
    <link rel="alternate" type="text/plain" href="${SITE_URL}/llms.txt" title="llms.txt">
    <meta property="og:type" content="${esc(ogType)}">
    <meta property="og:site_name" content="${SITE_NAME}">
    <meta property="og:locale" content="${OG_LOCALE[lang] || OG_LOCALE.uz}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="${esc(altLangUrl(lang))}">
    <meta property="og:image" content="${OG_IMAGE[lang] || OG_IMAGE.uz}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${OG_IMAGE[lang] || OG_IMAGE.uz}">
    <meta name="theme-color" content="#0b1322">
    <link rel="icon" href="${LOGO}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <style>${CSS}</style>
    ${blocks}
  </head>
  <body>
    <header class="nav">
      <div class="wrap">
        <a class="brand" href="${SITE_URL}/">
          <img src="${LOGO}" alt="${SITE_NAME}" width="32" height="32">
          ${SITE_NAME}
        </a>
        <span class="nav-sp"></span>
        <a class="navlink" href="${P.laws()}">${esc(t.laws)}</a>
        <a class="navlink" href="${P.qaIndex()}">${esc(t.qa)}</a>
        <a class="navlink" href="${esc(altLangUrl(lang === "uz" ? "ru" : "uz"))}" rel="alternate">${esc(t.lang)}</a>
        <a class="cta" href="${SITE_URL}/#pricing">${esc(t.ctaBtn)}</a>
      </div>
    </header>
    ${body}
    <footer>
      <div class="wrap">
        <a href="${SITE_URL}/">${esc(t.home)}</a>
        <a href="${P.laws()}">${esc(t.laws)}</a>
        <a href="${P.qaIndex()}">${esc(t.qa)}</a>
        <a href="${P.method()}">${esc(t.method)}</a>
        <a href="${SITE_URL}/terms">${lang === "ru" ? "Условия" : "Shartlar"}</a>
        <a href="${SITE_URL}/privacy">${lang === "ru" ? "Конфиденциальность" : "Maxfiylik"}</a>
        <div style="margin-top:12px;opacity:.7">© ${new Date().getFullYear()} ${SITE_NAME}</div>
      </div>
    </footer>
  </body>
</html>`;
}

module.exports = { page, esc, crumbs, jsonLd };

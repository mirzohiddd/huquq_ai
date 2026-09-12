"use strict";
/**
 * /metodologiya — E-E-A-T sahifasi (Metodologiya va tahririy siyosat).
 *
 * ⚠️ SERVER TOMONDA chiziladi (React'da EMAS) — aynan shu sahifani
 * qidiruv va AI botlari o'qishi kerak, ular esa JavaScript'ni ishga
 * tushirmaydi. Sahifa `Organization.publishingPrinciples` orqali entity
 * grafiga bog'langan: ya'ni bot "bu tashkilotning tahririy siyosati
 * mana shu manzilda" degan aniq signal oladi.
 *
 * Sahifadagi raqamlar (kodekslar va moddalar soni) BAZADAN olinadi —
 * qattiq yozilsa, yangi kodeks qo'shilganda eskirib qolardi.
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, SITE_NAME, T, path } = require("./meta");
const { ORG_ID } = require("./entity");
const { METHOD } = require("./methodText");
const { breadcrumb } = require("./listPages");

/** "20 ta kodeks, 7 104 modda" — jonli raqamlar. */
function statsLine(lang, laws, articleCount) {
  const n = laws.length;
  const arts = new Intl.NumberFormat(lang === "ru" ? "ru-RU" : "uz-UZ").format(
    articleCount,
  );
  return lang === "ru"
    ? `Сейчас в базе: ${n} документов, ${arts} статей. Источник — lex.uz.`
    : `Hozir bazada: ${n} ta hujjat, ${arts} ta modda. Manba — lex.uz.`;
}

function methodPage({ lang, laws, articleCount }) {
  const t = T[lang] || T.uz;
  const m = METHOD[lang] || METHOD.uz;

  const sections = m.sections
    .map(
      (s) =>
        `<section class="card">
          <h2>${esc(s.h)}</h2>
          ${s.p.map((x) => `<p>${esc(x)}</p>`).join("")}
        </section>`,
    )
    .join("");

  const body = `<section class="hero"><div class="wrap">
      ${crumbs(
        [
          { name: t.home, href: `${SITE_URL}/` },
          { name: t.method },
        ],
        lang,
      )}
      <span class="eyebrow">${esc(SITE_NAME)}</span>
      <h1>${esc(t.methodTitle)}</h1>
      <p class="lede">${esc(m.intro)}</p>
      <div class="meta">
        <span class="chip">${esc(statsLine(lang, laws, articleCount))}</span>
      </div>
    </div></section>
    <main><div class="wrap">
      ${sections}
      <div class="ctaBox">
        <h2>${esc(t.qaTitle)}</h2>
        <p>${esc(t.qaDesc)}</p>
        <a href="${esc(path.qaIndex())}">${esc(t.qaAll)}</a>
      </div>
    </div></main>`;

  return page({
    lang,
    title: t.methodTitle,
    description: t.methodDesc,
    canonical: path.method(),
    mdPath: `${path.method()}.md`,
    ogType: "website",
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${SITE_URL}${path.method()}#about`,
        name: t.methodTitle,
        description: t.methodDesc,
        inLanguage: lang,
        // Sahifa AYNAN shu tashkilot haqida — grafdagi tugunga ishora.
        mainEntity: { "@id": ORG_ID },
        about: { "@id": ORG_ID },
        // AEO: ovozli yordamchilar sahifaning qaysi qismini o'qishi.
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".lede", "h2"],
        },
      },
      breadcrumb([
        { name: t.home, url: `${SITE_URL}/` },
        { name: t.method, url: `${SITE_URL}${path.method()}` },
      ]),
    ],
  });
}

module.exports = { methodPage };

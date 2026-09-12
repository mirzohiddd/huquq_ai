"use strict";
/**
 * SAVOL-JAVOB RO'YXATI — /savollar (bitta savol: `qaAnswerPage.js`)
 *
 * ⚠️ BU BO'LIM AEO (Answer Engine Optimization) UCHUN QURILGAN.
 * Modda sahifasi ("MK 106-modda") raqam bo'yicha qidiruvga javob
 * beradi; bu sahifalar esa odam va AI tizimi HAQIQATDA yozadigan
 * savolga ("mehnat shartnomasi yozma bo'lishi shartmi?") javob beradi.
 * `QAPage` sxemasi tufayli javob mashinalari uchun tayyor, manbasi
 * ko'rsatilgan javob bo'ladi.
 *
 * ⚠️ Qonun matni SAHIFAGA yozilmagan — `qaData.attachQuotes` orqali
 * bazadan jonli keladi.
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, T, path } = require("./meta");
const { ORG_ID } = require("./entity");
const { breadcrumb } = require("./listPages");
const { AREAS, pick } = require("../qaContent");

const areaName = (a, lang) => (lang === "ru" ? a.ru : a.uz);

/** Bitta savol havolasi (ro'yxatlarda ishlatiladi). */
const qaLink = (q, lang) =>
  `<li><a href="${esc(path.qa(q.slug))}">${esc(pick(q.q, lang))}</a></li>`;

/* ── /savollar — barcha savollar, soha bo'yicha guruhlangan ── */
function qaIndexPage({ lang, groups }) {
  const t = T[lang] || T.uz;

  const nav = `<nav class="areaNav">${groups
    .map(
      (g) =>
        `<a href="#${esc(g.area.key)}">${esc(areaName(g.area, lang))} · ${g.items.length}</a>`,
    )
    .join("")}</nav>`;

  const blocks = groups
    .map(
      (g) => `<section class="card" id="${esc(g.area.key)}">
        <h2>${esc(areaName(g.area, lang))}</h2>
        <p class="sub"><a href="${esc(path.code(g.area.law))}">${esc(t.allArticles)} — ${esc(g.area.law)}</a></p>
        <ul class="qaList">${g.items.map((q) => qaLink(q, lang)).join("")}</ul>
      </section>`,
    )
    .join("");

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: t.home, href: `${SITE_URL}/` }, { name: t.qa }], lang)}
      <span class="eyebrow">${esc(t.qa)}</span>
      <h1>${esc(t.qaTitle)}</h1>
      <p class="lede">${esc(t.qaDesc)}</p>
      <div class="meta">
        <span class="chip">${total} ${esc(t.qa)}</span>
        <a class="chip" href="${esc(path.laws())}">${esc(t.laws)}</a>
        <a class="chip" href="${esc(path.method())}">${esc(t.method)}</a>
      </div>
    </div></section>
    <main><div class="wrap">${nav}${blocks}</div></main>`;

  return page({
    lang,
    title: t.qaTitle,
    description: t.qaDesc,
    canonical: path.qaIndex(),
    mdPath: `${path.qaIndex()}.md`,
    ogType: "website",
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}${path.qaIndex()}#collection`,
        name: t.qaTitle,
        description: t.qaDesc,
        inLanguage: lang,
        publisher: { "@id": ORG_ID },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: total,
          itemListElement: groups.flatMap((g) =>
            g.items.map((q, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: pick(q.q, lang),
              url: `${SITE_URL}${path.qa(q.slug)}`,
            })),
          ),
        },
      },
      breadcrumb([
        { name: t.home, url: `${SITE_URL}/` },
        { name: t.qa, url: `${SITE_URL}${path.qaIndex()}` },
      ]),
    ],
  });
}

/** Savol topilmaganda — 404, lekin ro'yxatga qaytish havolasi bilan. */
function qaNotFoundPage({ lang }) {
  const t = T[lang] || T.uz;
  const body = `<section class="hero"><div class="wrap">
      <h1>${esc(t.qaNotFound)}</h1><p>${esc(t.qaNotFoundText)}</p>
      <div class="meta"><a class="chip" href="${esc(path.qaIndex())}">${esc(t.qaAll)}</a></div>
    </div></section><main><div class="wrap"></div></main>`;
  return page({
    lang,
    title: t.qaNotFound,
    description: t.qaNotFoundText,
    canonical: path.qaIndex(),
    body,
  });
}

module.exports = { qaIndexPage, qaNotFoundPage, qaLink, areaName };

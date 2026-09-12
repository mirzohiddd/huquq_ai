"use strict";
/**
 * BITTA SAVOL SAHIFASI — /savol/:slug
 *
 * ⚠️ BU SAHIFA AEO (Answer Engine Optimization) O'ZAGI. Modda sahifasi
 * ("MK 106-modda") raqam bo'yicha qidiruvga javob beradi; bu sahifa esa
 * odam va AI tizimi HAQIQATDA yozadigan savolga ("mehnat shartnomasi
 * yozma bo'lishi shartmi?") javob beradi. `QAPage` sxemasi tufayli
 * javob mashinalari uchun tayyor, manbasi ko'rsatilgan javob bo'ladi.
 *
 * ⚠️ Qonun matni SAHIFAGA yozilmagan — `qaData.attachQuotes` orqali
 * bazadan jonli keladi va lex.uz yangilanganda o'z-o'zidan yangilanadi.
 *
 * Alohida faylga ajratilgan: `qaPages.js` bilan birga 200 qatordan
 * oshib ketardi (CLAUDE.md qoidasi).
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, T, path } = require("./meta");
const { ORG_ID } = require("./entity");
const { breadcrumb } = require("./listPages");
const { AREAS, pick } = require("../qaContent");
const { qaLink, areaName } = require("./qaPages");

/* ── /savol/:slug — bitta savol ── */
function qaPage({ lang, item, quotes, related }) {
  const t = T[lang] || T.uz;
  const area = AREAS.find((a) => a.key === item.area);
  const question = pick(item.q, lang);
  const short = pick(item.short, lang);
  const paras = pick(item.body, lang);

  // AEO: javob matni sxemaga TO'LIQ tushadi (qisqa javob + tushuntirish),
  // lekin qonun iqtibosi kirmaydi — u sahifada ko'rinadigan, manbasi
  // ko'rsatilgan alohida blok.
  const answerText = [short, ...paras].join("\n\n");

  const quoteHtml = quotes.length
    ? `<section class="card"><h2>${esc(t.qaBasis)}</h2>
        ${quotes
          .map(
            (q) => `<div class="lawQuote">
              <a href="${esc(path.article(q.code, q.article))}">${esc(q.code)} ${esc(
                t.articleN(q.article),
              )}${q.title ? ` — ${esc(q.title)}` : ""}</a>
              <blockquote>${esc(q.text)}</blockquote>
            </div>`,
          )
          .join("")}</section>`
    : "";

  const relatedHtml = related.length
    ? `<section class="card"><h2>${esc(t.qaRelated)}</h2>
        <ul class="qaList">${related.map((q) => qaLink(q, lang)).join("")}</ul></section>`
    : "";

  const body = `<section class="hero"><div class="wrap">
      ${crumbs(
        [
          { name: t.home, href: `${SITE_URL}/` },
          { name: t.qa, href: path.qaIndex() },
          { name: areaName(area, lang), href: `${path.qaIndex()}#${area.key}` },
          { name: question },
        ],
        lang,
      )}
      <span class="eyebrow">${esc(areaName(area, lang))}</span>
      <h1>${esc(question)}</h1>
    </div></section>
    <main><div class="wrap">
      <div class="answerBox">
        <span class="lbl">${esc(t.qaAnswer)}</span>
        <p>${esc(short)}</p>
      </div>
      <article class="card">${paras.map((p) => `<p>${esc(p)}</p>`).join("")}</article>
      ${quoteHtml}
      ${relatedHtml}
      <div class="ctaBox">
        <h2>${esc(t.ctaTitle)}</h2>
        <p>${esc(t.ctaText)}</p>
        <a href="${SITE_URL}/">${esc(t.ctaBtn)}</a>
      </div>
      <p class="note">${esc(t.disclaimer)}</p>
    </div></main>`;

  return page({
    lang,
    title: question,
    description: short.slice(0, 300),
    canonical: path.qa(item.slug),
    mdPath: `${path.qa(item.slug)}.md`,
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        "@id": `${SITE_URL}${path.qa(item.slug)}#qa`,
        inLanguage: lang,
        publisher: { "@id": ORG_ID },
        mainEntity: {
          "@type": "Question",
          name: question,
          text: question,
          answerCount: 1,
          acceptedAnswer: {
            "@type": "Answer",
            text: answerText,
            url: `${SITE_URL}${path.qa(item.slug)}`,
            // Javob QAYSI qonunga tayanishi — GEO uchun ishonch signali.
            citation: quotes.map((q) => ({
              "@type": "Legislation",
              name: `${q.code} ${t.articleN(q.article)}`,
              url: `${SITE_URL}${path.article(q.code, q.article)}`,
            })),
          },
        },
        // AEO: ovozli yordamchi savol va qisqa javobni o'qiydi.
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".answerBox p"],
        },
      },
      breadcrumb([
        { name: t.home, url: `${SITE_URL}/` },
        { name: t.qa, url: `${SITE_URL}${path.qaIndex()}` },
        { name: question, url: `${SITE_URL}${path.qa(item.slug)}` },
      ]),
    ],
  });
}

module.exports = { qaPage };

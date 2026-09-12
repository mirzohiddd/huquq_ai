"use strict";
/**
 * Bitta modda sahifasi — /qonun/:code/:article
 *
 * Bu sahifa butun tizimning SEO/AEO o'zagi: qidiruvda odam odatda
 * "mehnat kodeksi 109-modda" yoki "ta'til necha kun" deb qidiradi va
 * aynan shu sahifa javob berishi kerak.
 *
 * ⚠️ MATN BAZADAN JONLI OLINADI (`LegalChunk`) — bu yerda hech qanday
 * qonun matni, modda raqami yoki muddat QATTIQ yozilmagan. lex.uz'dan
 * qonun yangilanganda sahifa ham o'z-o'zidan yangilanadi.
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, T, path } = require("./meta");
const { breadcrumb, nameOf } = require("./listPages");

/** Modda matnini xatboshilarga ajratadi (manbada qator uzilishi bilan keladi). */
function paragraphs(text) {
  return String(text || "")
    .split(/\n{1,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${esc(p)}</p>`)
    .join("");
}

function articlePage({ lang, law, article, prev, next, siblings }) {
  const t = T[lang] || T.uz;
  const ru = lang === "ru";
  const lawTitle = nameOf(law, lang);
  const artTitle = (ru && article.titleRu) || article.title || "";
  const body = (ru && article.textRu) || article.text || "";
  const chapter = (ru && article.chapterRu) || article.chapter || "";
  const section = (ru && article.sectionRu) || article.section || "";

  const h1 = artTitle
    ? `${t.articleN(article.articleNumber)}. ${artTitle}`
    : `${lawTitle} — ${t.articleN(article.articleNumber)}`;

  // Tavsif — moddaning O'Z matnidan (qidiruv natijasida ko'rinadi).
  const desc = `${lawTitle}, ${t.articleN(article.articleNumber)}${
    artTitle ? ` — ${artTitle}` : ""
  }. ${body.replace(/\s+/g, " ").slice(0, 150)}`.slice(0, 300);

  const pager = [
    prev
      ? `<a href="${esc(path.article(law.code, prev.articleNumber))}">
          <small>← ${esc(t.prev)}</small>
          <b>${esc(t.articleN(prev.articleNumber))}${
            (ru && prev.titleRu) || prev.title
              ? `. ${esc((ru && prev.titleRu) || prev.title)}`
              : ""
          }</b></a>`
      : "",
    next
      ? `<a href="${esc(path.article(law.code, next.articleNumber))}" style="text-align:right">
          <small>${esc(t.next)} →</small>
          <b>${esc(t.articleN(next.articleNumber))}${
            (ru && next.titleRu) || next.title
              ? `. ${esc((ru && next.titleRu) || next.title)}`
              : ""
          }</b></a>`
      : "",
  ].join("");

  const related = siblings?.length
    ? `<div class="card"><h2>${esc(t.nearby)}</h2>
        <ul class="arts">${siblings
          .map(
            (a) =>
              `<li><a href="${esc(path.article(law.code, a.articleNumber))}"><b>${esc(
                t.articleN(a.articleNumber),
              )}</b>${esc((ru && a.titleRu) || a.title || "")}</a></li>`,
          )
          .join("")}</ul></div>`
    : "";

  const html = `<section class="hero"><div class="wrap">
      ${crumbs(
        [
          { name: t.home, href: `${SITE_URL}/` },
          { name: t.laws, href: path.laws() },
          { name: lawTitle, href: path.code(law.code) },
          { name: t.articleN(article.articleNumber) },
        ],
        lang,
      )}
      <span class="eyebrow">${esc(law.code)} · ${esc(t.articleN(article.articleNumber))}</span>
      <h1>${esc(h1)}</h1>
      <div class="meta">
        <a class="chip" href="${esc(path.code(law.code))}">${esc(lawTitle)}</a>
        ${section ? `<span class="chip">${esc(section)}</span>` : ""}
        ${chapter ? `<span class="chip">${esc(chapter)}</span>` : ""}
        ${law.url ? `<a class="chip" href="${esc(law.url)}" target="_blank" rel="noopener">${esc(t.source)}</a>` : ""}
      </div>
    </div></section>
    <main><div class="wrap">
      <article class="card">
        <div class="artText">${paragraphs(body)}</div>
      </article>
      <nav class="pager">${pager}</nav>
      ${related}
      <div class="ctaBox">
        <h2>${esc(t.ctaTitle)}</h2>
        <p>${esc(t.ctaText)}</p>
        <a href="${SITE_URL}/">${esc(t.ctaBtn)}</a>
      </div>
      <p class="note">${esc(t.disclaimer)}</p>
    </div></main>`;

  return page({
    lang,
    title: h1,
    description: desc,
    canonical: path.article(law.code, article.articleNumber),
    // LLM uchun toza matn nusxasi (`routes/publicSeoMd.js`).
    mdPath: `${path.article(law.code, article.articleNumber)}.md`,
    body: html,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Legislation",
        name: h1,
        legislationIdentifier: `${law.code} ${article.articleNumber}`,
        legislationJurisdiction: "UZ",
        inLanguage: lang,
        url: `${SITE_URL}${path.article(law.code, article.articleNumber)}`,
        isPartOf: {
          "@type": "Legislation",
          name: lawTitle,
          url: `${SITE_URL}${path.code(law.code)}`,
        },
        isBasedOn: article.sourceUrl || law.url || undefined,
        text: body.slice(0, 5000),
        dateModified: article.updatedAt
          ? new Date(article.updatedAt).toISOString().slice(0, 10)
          : undefined,
      },
      breadcrumb([
        { name: t.home, url: `${SITE_URL}/` },
        { name: t.laws, url: `${SITE_URL}${path.laws()}` },
        { name: lawTitle, url: `${SITE_URL}${path.code(law.code)}` },
        {
          name: t.articleN(article.articleNumber),
          url: `${SITE_URL}${path.article(law.code, article.articleNumber)}`,
        },
      ]),
    ],
  });
}

/** Modda topilmaganda — 404, lekin foydali (kodeksga qaytish havolasi bilan). */
function notFoundPage({ lang, code }) {
  const t = T[lang] || T.uz;
  const body = `<section class="hero"><div class="wrap">
      <h1>${esc(t.notFound)}</h1><p>${esc(t.notFoundText)}</p>
      <div class="meta">
        <a class="chip" href="${esc(code ? path.code(code) : path.laws())}">${esc(t.allArticles)}</a>
        <a class="chip" href="${esc(path.laws())}">${esc(t.laws)}</a>
      </div>
    </div></section><main><div class="wrap"></div></main>`;
  return page({
    lang,
    title: t.notFound,
    description: t.notFoundText,
    canonical: path.laws(),
    body,
  });
}

module.exports = { articlePage, notFoundPage };

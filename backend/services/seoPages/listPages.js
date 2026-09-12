"use strict";
/**
 * Ochiq sahifalar: (1) barcha kodekslar ro'yxati, (2) bitta kodeksning
 * modda ro'yxati.
 *
 * ⚠️ Modda ro'yxati SAHIFALANMAYDI — kodeksning barcha moddalari bir
 * sahifada. Sabab SEO: har bir moddaga ichki havola bo'lishi kerak, aks
 * holda qidiruv roboti chuqurdagi sahifalarni topa olmaydi. Ro'yxatda
 * faqat raqam va sarlavha bo'lgani uchun 810 moddali kodeks ham ~60 KB
 * (matn moddaning O'Z sahifasida).
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, T, path } = require("./meta");

const nameOf = (law, lang) =>
  (lang === "ru" && law.nameRu) || law.name || law.code;

/** Kodekslar ro'yxati — /qonunlar */
function lawsIndexPage({ lang, laws }) {
  const t = T[lang] || T.uz;
  const cards = laws
    .map(
      (l) => `<a class="lawCard" href="${esc(path.code(l.code))}">
        <span class="code">${esc(l.code)}</span>
        <h3>${esc(nameOf(l, lang))}</h3>
        <span>${l.articleCount} ${esc(t.articles)}</span>
      </a>`,
    )
    .join("\n");

  const total = laws.reduce((n, l) => n + (l.articleCount || 0), 0);

  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: t.home, href: `${SITE_URL}/` }, { name: t.laws }], lang)}
      <h1>${esc(t.lawsTitle)}</h1>
      <p>${esc(t.lawsDesc)}</p>
      <div class="meta">
        <span class="chip">${laws.length} ${lang === "ru" ? "документов" : "hujjat"}</span>
        <span class="chip">${total} ${esc(t.articles)}</span>
      </div>
    </div></section>
    <main><div class="wrap">
      <div class="grid">${cards}</div>
      <p class="note">${esc(t.disclaimer)}</p>
    </div></main>`;

  return page({
    lang,
    title: t.lawsTitle,
    description: t.lawsDesc,
    canonical: path.laws(),
    mdPath: `${path.laws()}.md`,
    ogType: "website",
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: t.lawsTitle,
        description: t.lawsDesc,
        url: `${SITE_URL}${path.laws()}`,
        inLanguage: lang,
        hasPart: laws.map((l) => ({
          "@type": "Legislation",
          name: nameOf(l, lang),
          legislationIdentifier: l.code,
          url: `${SITE_URL}${path.code(l.code)}`,
        })),
      },
      breadcrumb([{ name: t.home, url: `${SITE_URL}/` }, { name: t.laws, url: `${SITE_URL}${path.laws()}` }]),
    ],
  });
}

/** Bitta kodeks — /qonun/:code */
function lawCodePage({ lang, law, articles }) {
  const t = T[lang] || T.uz;
  const title = nameOf(law, lang);

  // Moddalar bob bo'yicha guruhlanadi — uzun ro'yxatni o'qish oson
  // bo'lishi va qidiruv roboti tuzilmani ko'rishi uchun.
  const groups = [];
  for (const a of articles) {
    const ch = (lang === "ru" && a.chapterRu) || a.chapter || "";
    const last = groups[groups.length - 1];
    if (last && last.chapter === ch) last.items.push(a);
    else groups.push({ chapter: ch, items: [a] });
  }

  const list = groups
    .map(
      (g) => `<div class="chapter">
        ${g.chapter ? `<h3>${esc(g.chapter)}</h3>` : ""}
        <ul class="arts">${g.items
          .map(
            (a) =>
              `<li><a href="${esc(path.article(law.code, a.articleNumber))}"><b>${esc(
                t.articleN(a.articleNumber),
              )}</b>${esc((lang === "ru" && a.titleRu) || a.title || "")}</a></li>`,
          )
          .join("")}</ul>
      </div>`,
    )
    .join("\n");

  const desc =
    lang === "ru"
      ? `${title} — полный текст, ${articles.length} статей. Источник: lex.uz.`
      : `${title} — to'liq matn, ${articles.length} ta modda. Manba: lex.uz.`;

  const body = `<section class="hero"><div class="wrap">
      ${crumbs(
        [
          { name: t.home, href: `${SITE_URL}/` },
          { name: t.laws, href: path.laws() },
          { name: title },
        ],
        lang,
      )}
      <span class="eyebrow">${esc(law.code)}</span>
      <h1>${esc(title)}</h1>
      <p>${esc(desc)}</p>
      <div class="meta">
        <span class="chip">${articles.length} ${esc(t.articles)}</span>
        ${law.url ? `<a class="chip" href="${esc(law.url)}" target="_blank" rel="noopener">${esc(t.source)}</a>` : ""}
      </div>
    </div></section>
    <main><div class="wrap">
      <div class="card"><h2>${esc(t.allArticles)}</h2>${list}</div>
      <p class="note">${esc(t.disclaimer)}</p>
    </div></main>`;

  return page({
    lang,
    title,
    description: desc,
    canonical: path.code(law.code),
    mdPath: `${path.code(law.code)}.md`,
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Legislation",
        name: title,
        legislationIdentifier: law.code,
        legislationJurisdiction: "UZ",
        inLanguage: lang,
        url: `${SITE_URL}${path.code(law.code)}`,
        isBasedOn: law.url || undefined,
      },
      breadcrumb([
        { name: t.home, url: `${SITE_URL}/` },
        { name: t.laws, url: `${SITE_URL}${path.laws()}` },
        { name: title, url: `${SITE_URL}${path.code(law.code)}` },
      ]),
    ],
  });
}

function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

module.exports = { lawsIndexPage, lawCodePage, breadcrumb, nameOf };

"use strict";
/**
 * OCHIQ PREZIDENT HUJJATLARI — HTML sahifalar (2026-10-03).
 *   /hujjatlar            — ro'yxat (tur, yil, sahifa filtrlari)
 *   /hujjat/:docId        — hujjat matni (LexUZ rasmiy matni)
 *
 * Odamlar "PF-206 farmon", "pq-346 qaror matni" kabi qidiradi — shu
 * so'rovlarga javob beradigan ~5 600 sahifa. Matn faqat o'zbekcha
 * (LexUZ /uz/docs), shuning uchun hreflang berilmaydi (`altLangs: false`).
 * Matni hali yuklanmagan hujjat `noindex` — bo'sh sahifa indekslanmasin.
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, T, path } = require("./meta");
const { breadcrumb } = require("./listPages");
const { PAGE_SIZE } = require("./actData");

const t = T.uz;
const FORM_PLURAL = { decree: "Farmonlar", resolution: "Qarorlar", order: "Farmoyishlar" };
const FORM_SLUG = { decree: "farmon", resolution: "qaror", order: "farmoyish" };
const FORM_POSS = { decree: "farmonlari", resolution: "qarorlari", order: "farmoyishlari" };
const isoDate = (d) => {
  const m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(d || "");
  return m ? `${m[3]}-${m[2]}-${m[1]}` : undefined;
};
const cut = (s, n) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);

function blockHtml(b) {
  const x = esc(b.t);
  if (b.k === "h") return `<h3>${x}</h3>`;
  if (b.k === "c") return `<p class="chg">${x}</p>`;
  if (b.k === "s") return `<p class="sign">${x}</p>`;
  if (b.k === "r") return `<p class="req">${x}</p>`;
  if (b.k === "a") return `<p class="annex">${x}</p>`;
  return `<p>${x}</p>`;
}

function actPage({ act, text, related }) {
  const docUrl = `https://lex.uz/uz/docs/${act.docId}`;
  const label = [act.number && `${act.number}-son`, act.formLabel].filter(Boolean).join(" ");
  const hasText = Boolean(text?.hasText && text.blocks?.length);
  const firstPara = hasText ? (text.blocks.find((b) => b.k === "p")?.t || "") : "";
  const meta = text?.meta || {};
  const active = act.status === "active" || /amalda|действ/i.test(meta.status || "");
  const desc = cut(`${label}${act.date ? `, ${act.date}` : ""}: ${act.title}. ${firstPara}`.replace(/\s+/g, " ").trim(), 300);

  const info = [
    ["Hujjat turi", act.formLabel],
    ["Raqami", act.number],
    ["Qabul qilingan sana", meta.adoptedAt || act.date],
    ["Kuchga kirgan sana", meta.effectiveAt || text?.effectiveAt],
    ["Holati", active ? "Amalda" : meta.status || ""],
    ["Rasmiy nashr", meta.sourceNumber ? `${String(meta.source || "").replace("НБДЗ", "QMMB")} ${meta.sourceNumber}`.trim() : ""],
  ].filter(([, v]) => v);

  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: t.home, href: `${SITE_URL}/` }, { name: t.acts, href: path.acts() }, { name: label || act.title }], "uz")}
      <span class="eyebrow">${esc(label)}${act.date ? ` · ${esc(act.date)}` : ""}</span>
      <h1>${esc(act.title)}</h1>
      <div class="meta">
        ${active ? `<span class="chip">✓ Amalda</span>` : ""}
        <a class="chip" href="${esc(docUrl)}" target="_blank" rel="noopener">${esc(t.source)}</a>
        <a class="chip" href="https://lex.uz/uz/pdfs/${esc(act.docId)}" target="_blank" rel="noopener">PDF</a>
      </div>
    </div></section>
    <main><div class="wrap">
      <div class="card"><h2>Rekvizitlar</h2>
        <ul class="arts">${info.map(([k, v]) => `<li><span style="display:block;padding:6px 12px"><b>${esc(k)}:</b>${esc(v)}</span></li>`).join("")}</ul>
      </div>
      <article class="card"><div class="artText actText">${
        hasText
          ? text.blocks.map(blockHtml).join("")
          : `<p>Hujjatning to'liq matni hozircha yuklanmadi. Uni rasmiy manbada o'qishingiz mumkin: <a href="${esc(docUrl)}" target="_blank" rel="noopener">lex.uz</a>.</p>`
      }</div></article>
      ${related.length ? `<div class="card"><h2>Shu turdagi boshqa hujjatlar</h2><ul class="arts">${related
        .map((r) => `<li><a href="${esc(path.act(r.docId))}"><b>${esc(r.number || r.date)}</b>${esc(cut(r.title, 110))}</a></li>`)
        .join("")}</ul></div>` : ""}
      <div class="ctaBox">
        <h2>Bu hujjat sizga qanday ta'sir qiladi?</h2>
        <p>HuquqTech hujjat va qonun moddalariga tayanib, savolingizga oddiy tilda javob beradi.</p>
        <a href="${SITE_URL}/">${esc(t.ctaBtn)}</a>
      </div>
      <p class="note">${esc(t.disclaimer)}</p>
    </div></main>`;

  return page({
    lang: "uz",
    title: cut(`${label}: ${act.title}`, 120),
    description: desc,
    canonical: path.act(act.docId),
    body,
    altLangs: false,
    noindex: !hasText,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Legislation",
        name: act.title,
        legislationIdentifier: act.number || undefined,
        legislationType: act.formLabel,
        legislationDate: isoDate(act.date),
        legislationJurisdiction: "UZ",
        legislationPassedBy: { "@type": "GovernmentOrganization", name: "O'zbekiston Respublikasi Prezidenti" },
        legislationLegalForce: active ? "https://schema.org/InForce" : undefined,
        inLanguage: "uz",
        url: `${SITE_URL}${path.act(act.docId)}`,
        isBasedOn: docUrl,
        text: hasText ? text.blocks.filter((b) => b.k === "p").map((b) => b.t).join("\n").slice(0, 5000) : undefined,
      },
      breadcrumb([
        { name: t.home, url: `${SITE_URL}/` },
        { name: t.acts, url: `${SITE_URL}${path.acts()}` },
        { name: label || act.title, url: `${SITE_URL}${path.act(act.docId)}` },
      ]),
    ],
  });
}

function qs(o) {
  const p = Object.entries(o).filter(([, v]) => v);
  return p.length ? `?${p.map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&")}` : "";
}

function actsIndexPage(d) {
  const tur = FORM_SLUG[d.form] || "";
  const link = (o) => path.acts(qs({ tur, yil: d.year || "", ...o }));
  // "2025-yil O'zbekiston Prezidenti qarorlari" — odam aynan shunday qidiradi
  const title = `${d.year ? `${d.year}-yil ` : ""}O'zbekiston Prezidenti ${
    d.form ? FORM_POSS[d.form] : "farmonlari, qarorlari va farmoyishlari"
  }`;
  const heading = title;
  const desc = cut(`${title}. Jami ${d.total} ta hujjat — raqami, sanasi va to'liq rasmiy matni (manba: lex.uz). Eng yangilari birinchi.`, 300);

  const formChips = [["", "Hammasi", d.all], ...Object.entries(FORM_SLUG).map(([f, s]) => [s, FORM_PLURAL[f], d.counts[f]])]
    .map(([s, name, n]) => `<a href="${esc(path.acts(qs({ tur: s, yil: d.year || "" })))}"${s === tur ? ' aria-current="page" style="border-color:var(--gold)"' : ""}>${esc(name)} (${n})</a>`)
    .join("");
  const yearChips = d.years.slice(0, 12)
    .map((y) => `<a href="${esc(link({ yil: y === d.year ? "" : y }))}"${y === d.year ? ' style="border-color:var(--gold)"' : ""}>${y}</a>`)
    .join("");
  const items = d.items
    .map((a) => `<li><a href="${esc(path.act(a.docId))}"><b style="color:var(--gold)">${esc([a.number, a.date].filter(Boolean).join(" · "))}</b><br>${esc(a.title)}</a></li>`)
    .join("");
  const pages = [];
  for (let p = Math.max(1, d.page - 3); p <= Math.min(d.pages, d.page + 3); p++) {
    pages.push(p === d.page ? `<span>${p}</span>` : `<a href="${esc(link({ sahifa: p > 1 ? p : "" }))}">${p}</a>`);
  }
  if (d.page < d.pages) pages.push(`<a href="${esc(link({ sahifa: d.page + 1 }))}" rel="next">Keyingi →</a>`);

  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: t.home, href: `${SITE_URL}/` }, { name: t.acts }], "uz")}
      <h1>${esc(heading)}</h1>
      <p>O'zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlari — raqami, sanasi va to'liq rasmiy matni. Manba: lex.uz, muntazam yangilanadi.</p>
      <div class="meta"><span class="chip">${d.total} ta hujjat</span><a class="chip" href="${esc(path.laws())}">${esc(t.lawsTitle)}</a></div>
    </div></section>
    <main><div class="wrap">
      <nav class="areaNav">${formChips}</nav>
      <nav class="areaNav">${yearChips}</nav>
      <ul class="qaList">${items}</ul>
      <nav class="pages">${pages.join("")}</nav>
      <p class="note">${esc(t.disclaimer)}</p>
    </div></main>`;

  return page({
    lang: "uz",
    title: d.page > 1 ? `${title} — ${d.page}-sahifa` : title,
    description: desc,
    canonical: link({ sahifa: d.page > 1 ? d.page : "" }),
    body,
    altLangs: false,
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description: desc,
      inLanguage: "uz",
      numberOfItems: d.total,
      hasPart: d.items.slice(0, PAGE_SIZE).map((a) => ({ "@type": "Legislation", name: a.title, url: `${SITE_URL}${path.act(a.docId)}` })),
    },
  });
}

/** Hujjat topilmadi — 404 (qidiruvda chiqmaydi, lekin foydali havola bor) */
function actNotFoundPage() {
  const body = `<section class="hero"><div class="wrap">
      <h1>Hujjat topilmadi</h1><p>Bu manzilda hujjat yo'q. Ro'yxatdan qidirib ko'ring.</p>
      <div class="meta"><a class="chip" href="${esc(path.acts())}">${esc(t.acts)}</a>
      <a class="chip" href="${esc(path.laws())}">${esc(t.laws)}</a></div>
    </div></section><main><div class="wrap"></div></main>`;
  return page({ lang: "uz", title: "Hujjat topilmadi", description: "Hujjat topilmadi", canonical: path.acts(), body, altLangs: false, noindex: true });
}

module.exports = { actPage, actsIndexPage, actNotFoundPage, FORM_SLUG };

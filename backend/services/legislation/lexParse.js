"use strict";
/**
 * QONUNCHILIK HUJJATLARI — lex.uz SAHIFALARINI TAHLIL QILISH.
 *
 * ⚠️ `scripts/ingestLaws.js` dagi `parseArticles()` ga TEGILMAYDI — u 21 ta
 * hujjat uchun to'g'ri ishlab turibdi. Bu fayl MUSTAQIL va faqat modda
 * matnidan TASHQARIDAGI rasmiy ma'lumotni oladi:
 *
 *   1) TUZILMA — qism → bo'lim → bob → paragraf (`TEXT_HEADER_DEFAULT`)
 *      va har bir modda qaysi tugunga tegishli (`CLAUSE_DEFAULT`);
 *   2) MODDA O'ZGARISHLARI — lex.uz har bir o'zgargan qism ostiga rasmiy
 *      izoh qo'yadi (`CHANGES_ORIGINS`): qaysi hujjat, qachon, nima qildi;
 *   3) REKVIZITLAR — "Yuridik analiz kartochkasi" (`/actinfo/card1/<id>`):
 *      hujjat turi, qabul qilgan organ, sana, raqam, holat, kuchga kirish;
 *   4) TAHRIRLAR — hujjatning barcha tahrir sanalari (`ONDATE`).
 *
 * Hech narsa taxmin qilinmaydi: maydon manbada bo'lmasa bo'sh qoladi.
 */
const cheerio = require("cheerio");

const clean = (s = "") => String(s).replace(/\s+/g, " ").trim();

/* <sup> — qo'shimcha modda raqami ("276<sup>13</sup>" = "276-13"). */
function ownText($, el) {
  const $t = $(el).find("> div[name]").first();
  $t.find("sup").each((_, sup) => $(sup).replaceWith("-" + $(sup).text()));
  return clean($t.text());
}

const ART_RE = /^(\d+(?:-\d+)*)-modda\b|^Статья\s+(\d+(?:-\d+)*)\b/i;

/* Sarlavha turi. Daraja raqami daraxt qurishda ishlatiladi. */
function headerKind(t) {
  if (/§/.test(t)) return { kind: "paragraph", level: 4 };
  /* ⚠️ JS'da `\b` kirill harflarini tanimaydi — chegara qo'lda. */
  if (/(^|[\s.-])(bob|боб)([\s.]|$)|^глава\s/i.test(t)) return { kind: "chapter", level: 3 };
  if (/BO[’'ʻʼ‘]?LIM|БЎЛИМ|РАЗДЕЛ/i.test(t)) return { kind: "section", level: 2 };
  if (/(^|\s)(QISM|ҚИСМ)$|ЧАСТЬ$/i.test(t)) return { kind: "part", level: 1 };
  return null;
}

/* "(4-moddaning ikkinchi qismi ... 2024-yil 20-sentabrdagi OʻRQ-963-sonli
   Qonuni tahririda — ..., 21.09.2024-y., ...)" → { text, doc, date, url } */
function parseChange($, el) {
  const $d = $(el).find("> div[name]").first();
  const text = clean($d.text());
  if (!text) return null;
  const a = $d.find("a[href]").first();
  const href = a.attr("href") || "";
  const doc = (text.match(/[A-ZА-ЯЎҚҒҲʻ‘’']{1,5}-\d+(?:-\d+)?/u) || [])[0] || "";
  const date = (href.match(/ONDATE=(\d{2}\.\d{2}\.\d{4})/) || [])[1] || "";
  const url = href ? `https://lex.uz${href.split("#")[0].replace(/\s.*$/, "")}` : "";
  return { text, doc, date, url };
}

/**
 * Hujjat sahifasi → { title, nodes, changes, editions }.
 * `nodes` — tartiblangan tekis ro'yxat: { id, kind, level, title, articles[] }.
 * Moddalar eng yaqin (oxirgi) sarlavhaga biriktiriladi.
 */
function parseDocument(html) {
  const $ = cheerio.load(html);
  const nodes = [];
  const changes = {};
  let current = null; // joriy tugun
  let article = null; // joriy modda raqami

  $(".lx_elem, .CHANGES_ORIGINS").each((_, el) => {
    const $el = $(el);
    if ($el.hasClass("CHANGES_ORIGINS")) {
      const ch = article && parseChange($, el);
      if (ch) (changes[article] = changes[article] || []).push(ch);
      return;
    }
    if ($el.hasClass("TEXT_HEADER_DEFAULT")) {
      const t = ownText($, el);
      const k = t && headerKind(t);
      if (!k) return;
      current = { id: `n${nodes.length}`, ...k, title: t, articles: [] };
      nodes.push(current);
      return;
    }
    if ($el.hasClass("CLAUSE_DEFAULT")) {
      const m = ownText($, el).match(ART_RE);
      if (!m) return;
      article = m[1] || m[2];
      if (!current) {
        current = { id: "n0", kind: "root", level: 1, title: "", articles: [] };
        nodes.push(current);
      }
      if (!current.articles.includes(article)) current.articles.push(article);
    }
  });

  const editions = [];
  $(".lx_date_link, .lx_date_selected").each((_, el) => {
    const d = clean($(el).text()).slice(0, 10);
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(d) && !editions.includes(d)) editions.push(d);
  });

  return {
    title: $(".ACT_TITLE").length ? ownText($, $(".ACT_TITLE").first()) : "",
    nodes: nodes.filter((n) => n.articles.length || n.kind !== "root"),
    changes,
    editions,
  };
}

/* ── Yuridik analiz kartochkasi (rekvizitlar) ──────────────────────── */
const STATUS = [
  [/действующ/i, "active"],
  [/утратил/i, "repealed"],
  [/не вступ|вступает/i, "pending"],
];

function parseCard(html) {
  const $ = cheerio.load(html);
  const val = (label) => {
    const td = $("td.lbl, TD.lbl")
      .filter((_, e) => clean($(e).text()).startsWith(label))
      .first();
    return td.length ? clean(td.next().text()) : "";
  };
  const organs = [];
  $("#bodyTBody tr").each((_, tr) => {
    const c = $(tr).find("td").map((__, td) => clean($(td).text())).get();
    if (c.length >= 6) organs.push({ name: c[1], post: c[2], date: c[4], number: c[5] });
  });
  const statusRaw = val("Статус акта");
  const status = (STATUS.find(([re]) => re.test(statusRaw)) || [])[1] || "";
  return {
    name: val("Наименование акта"),
    kind: val("Вид акта"),
    form: val("Форма акта"),
    organs,
    adoptedAt: organs[0]?.date || "",
    number: organs.map((o) => o.number).filter(Boolean).join(", "),
    statusRaw,
    status,
    effectiveAt: val("Дата вступления в силу"),
    endedAt: val("Дата прекращения действия"),
    source: val("Официальный источник"),
    sourceNumber: val("№ издания"),
    publishedAt: val("Дата опубликования официального источника"),
  };
}

/* ── Korrespondent (bog'liq, havola qiluvchi) hujjatlar ────────────── */
function parseCorrespondents(html) {
  const $ = cheerio.load(html);
  const out = [];
  $("tr").each((_, tr) => {
    const td = $(tr).find("td");
    if (td.length < 7) return;
    const onclick = td.eq(2).find("a").attr("onclick") || "";
    const id = (onclick.match(/'(-?\d+)'/) || [])[1] || "";
    out.push({
      active: /status_Y/.test(td.eq(1).html() || ""),
      name: clean(td.eq(2).text()),
      number: clean(td.eq(3).text()),
      adoptedAt: clean(td.eq(4).text()),
      effectiveAt: clean(td.eq(5).text()),
      refs: Number(clean(td.eq(6).text())) || 0,
      url: id ? `https://lex.uz/docs/${id}` : "",
    });
  });
  return out;
}

module.exports = { parseDocument, parseCard, parseCorrespondents, headerKind };

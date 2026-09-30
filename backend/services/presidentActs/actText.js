"use strict";
/**
 * PREZIDENT HUJJATI MATNI — hujjat ochilganda LexUZ'dan olinadi va 7 kun
 * keshlanadi (keyin qayta tekshiriladi — o'zgartirish kiritilgan bo'lishi
 * mumkin).
 *
 * Matn bloklari tartib bilan: bo'lim sarlavhasi (`h`), band/xatboshi
 * (`p`), o'zgartirish izohi (`c`), imzo (`s`), rekvizit (`r`), ilova
 * sarlavhasi (`a`). Ba'zi hujjatlarning HTML matni LexUZ'da bo'lmaydi
 * (faqat PDF) — u holda `hasText: false` va frontend PDF'ga yo'naltiradi.
 */
const cheerio = require("cheerio");
const { LegalActText } = require("../../models/legalActs");
const { parseCard } = require("../legislation/lexParse");

const TTL = 7 * 24 * 60 * 60 * 1000;
const H = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  Accept: "text/html",
};

const KIND = {
  TEXT_HEADER_DEFAULT: "h",
  ACT_TEXT: "p",
  SIGNATURE: "s",
  ACT_ESSENTIAL_ELEMENTS: "r",
  ACT_ESSENTIAL_ELEMENTS_NUM: "r",
};
// Hujjat boshidagi sarlavha qismi — nom allaqachon ro'yxatda bor
const SKIP = new Set(["ACCEPTING_BODY", "ACT_FORM", "ACT_TITLE", "BY_DEFAULT", "NEW_EDITION", "COMMENT"]);

const clean = (s = "") => String(s).replace(/\s+/g, " ").trim();

async function fetchHtml(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 60000);
  try {
    const r = await fetch(url, { headers: H, signal: ctrl.signal });
    if (!r.ok) throw new Error(`LexUZ HTTP ${r.status}`);
    return await r.text();
  } finally {
    clearTimeout(timer);
  }
}

function parseActPage(html) {
  const $ = cheerio.load(html);
  const blocks = [];
  $(".lx_elem, .CHANGES_ORIGINS").each((_, el) => {
    const $el = $(el);
    const cls = ($el.attr("class") || "").split(/\s+/)[0];
    const $t = $el.find("> div[name]").first();
    $t.find("sup").each((__, sup) => $(sup).replaceWith("-" + $(sup).text()));
    const t = clean($t.text());
    if (!t) return;
    if (cls === "CHANGES_ORIGINS") return void blocks.push({ k: "c", t });
    if (SKIP.has(cls)) return;
    let k = KIND[cls] || "p";
    if (k === "p" && /^\d*[-\s]*ilova\b|^ilova\b|^приложение/i.test(t) && t.length < 120) k = "a";
    blocks.push({ k, t });
  });
  return {
    blocks,
    effectiveAt: clean($("#lblNEffectDate").first().text()),
    hasText: blocks.some((b) => b.k === "p"),
  };
}

const pending = new Map();

/** Hujjat matni (kesh yoki LexUZ). */
async function getActText(docId) {
  const hit = await LegalActText.findOne({ docId }).lean();
  if (hit && hit.fetchedAt && Date.now() - new Date(hit.fetchedAt).getTime() < TTL) return hit;
  if (pending.has(docId)) return pending.get(docId);
  const job = (async () => {
    try {
      const page = parseActPage(await fetchHtml(`https://lex.uz/uz/docs/${docId}`));
      const meta = await fetchHtml(`https://lex.uz/uz/actinfo/card1/${docId}`)
        .then(parseCard)
        .catch(() => hit?.meta || null);
      const doc = { docId, ...page, meta, fetchedAt: new Date() };
      await LegalActText.updateOne({ docId }, { $set: doc }, { upsert: true });
      return doc;
    } catch (e) {
      if (hit) return hit; // LexUZ vaqtincha ishlamasa — eski nusxa
      throw e;
    }
  })().finally(() => pending.delete(docId));
  pending.set(docId, job);
  return job;
}

module.exports = { getActText, parseActPage };

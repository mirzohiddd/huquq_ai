"use strict";
/**
 * "OLDINGI TAHRIR" ↔ "AMALDAGI TAHRIR" SOLISHTIRUVI.
 *
 * lex.uz har bir tahrirni sana bo'yicha beradi: `/docs/<id>?ONDATE=dd.mm.yyyy`.
 * So'ralgan tahrir sahifasi BIR MARTA olinadi, moddalarga bo'linadi
 * (mavjud `parseArticles()` — o'zgartirilmagan holda CHAQIRILADI) va
 * `LawEdition` ga saqlanadi: eski tahrir hech qachon o'zgarmaydi.
 *
 * ⚠️ Faqat hujjatning RO'YXATDAGI tahrir sanalari qabul qilinadi
 * (`LawDossier.editions`) — ixtiyoriy sana bilan lex.uz'ga so'rov
 * yuborib bo'lmaydi.
 */
const { LawEdition } = require("../../models/legislation");
const { LegalChunk } = require("../../models");
const { getLaws } = require("../lawRegistry");
const { parseArticles } = require("../../scripts/ingestLaws");
const { getDossier } = require("./dossier");

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  Accept: "text/html",
};

const pending = new Map(); // bir vaqtda bir xil tahrir ikki marta olinmasin

/* ⚠️ Tahrir hujjati katta (~0,7 MB) va Atlas M0 dan to'liq o'qish
   o'nlab soniya oladi — keshlangan tahrirdan FAQAT kerakli modda
   proyeksiya bilan o'qiladi (o'lchangan: ~0,1 s). */
async function cachedArticle(code, date, num) {
  const hit = await LawEdition.findOne({ code, date }).select(`articles.${num} _id`).lean();
  return hit ? { found: true, article: hit.articles?.[num] || null } : { found: false };
}

async function loadEdition(law, date) {
  const key = `${law.code}:${date}`;
  if (pending.has(key)) return pending.get(key);
  const job = (async () => {
    const base = law.url.split("?")[0];
    const r = await fetch(`${base}?ONDATE=${date}`, { headers: HEADERS });
    if (!r.ok) throw new Error(`lex.uz HTTP ${r.status}`);
    const articles = {};
    for (const a of parseArticles(await r.text())) {
      articles[a.articleNumber] = { title: a.title, text: a.text };
    }
    if (!Object.keys(articles).length) throw new Error("Tahrir matni o'qilmadi");
    await LawEdition.updateOne(
      { code: law.code, date },
      { $set: { articles } },
      { upsert: true },
    );
    return articles;
  })().finally(() => pending.delete(key));
  pending.set(key, job);
  return job;
}

/* Xatboshilar bo'yicha oddiy farq: har bir xatboshi ikkinchi tahrirda
   AYNAN bormi. Yangi / olib tashlangan xatboshilar belgilanadi. */
function paragraphDiff(oldText = "", newText = "") {
  const split = (t) => String(t).split("\n").map((s) => s.trim()).filter(Boolean);
  const a = split(oldText);
  const b = split(newText);
  const setA = new Set(a);
  const setB = new Set(b);
  return {
    old: a.map((text) => ({ text, changed: !setB.has(text) })),
    current: b.map((text) => ({ text, changed: !setA.has(text) })),
    same: a.length === b.length && a.every((t, i) => t === b[i]),
  };
}

async function compareArticle(code, num, date) {
  const dossier = await getDossier(code);
  if (!dossier || !(dossier.editions || []).includes(date)) {
    const e = new Error("Bunday tahrir sanasi yo'q");
    e.status = 400;
    throw e;
  }
  const law = (await getLaws()).find((l) => l.code === code);
  if (!law) {
    const e = new Error("Hujjat topilmadi");
    e.status = 404;
    throw e;
  }
  const safeNum = num.replace(/[^\d-]/g, "");
  if (!safeNum) {
    const e = new Error("Modda topilmadi");
    e.status = 404;
    throw e;
  }
  const [cached, current] = await Promise.all([
    cachedArticle(code, date, safeNum),
    LegalChunk.findOne({ lawCode: code, articleNumber: num }).select("title text -_id").lean(),
  ]);
  const old = cached.found ? cached.article : (await loadEdition(law, date))[safeNum] || null;
  return {
    date,
    existedThen: Boolean(old),
    oldTitle: old?.title || "",
    currentTitle: current?.title || "",
    diff: paragraphDiff(old?.text || "", current?.text || ""),
    sourceUrl: `${law.url.split("?")[0]}?ONDATE=${date}`,
  };
}

module.exports = { compareArticle };

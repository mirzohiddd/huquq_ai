"use strict";
/**
 * Savol-javob sahifalari uchun qonun iqtiboslarini bazadan olish.
 *
 * ⚠️ MATN SAHIFAGA NUSXALANMAYDI — har safar `LegalChunk` dan jonli
 * olinadi, shuning uchun lex.uz yangilanganda javob ham yangilanadi.
 *
 * ⚠️ `embedding` maydoni ATAYLAB olinmaydi: har bir hujjatda 1024 ta
 * son bor (~19,6 KB) va uni tortish sahifani bekorga og'irlashtirardi.
 * Kesh ham shu sabab: bitta savol sahifasi 2-3 ta moddaga murojaat
 * qiladi va bu moddalar kunlar davomida o'zgarmaydi.
 */
const { LegalChunk } = require("../../models");

const CACHE_MS = 30 * 60 * 1000;
const cache = new Map(); // "CODE:NUM" -> { at, doc }

/** Iqtibos uchun qisqartirish chegarasi (to'liq matn modda sahifasida). */
const MAX_QUOTE = 700;

function trim(text) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  return t.length > MAX_QUOTE ? `${t.slice(0, MAX_QUOTE)}…` : t;
}

/**
 * `refs` ro'yxatini haqiqiy modda matni bilan to'ldiradi.
 * Topilmagan havola JIM O'TKAZIB YUBORILADI — sahifa buzilmasligi
 * kerak; havolalarning to'g'riligi `scripts/verifyQaRefs.js` bilan
 * alohida tekshiriladi.
 *
 * @returns {Array<{code,article,title,text,url}>}
 */
async function attachQuotes(refs, lang) {
  const now = Date.now();
  const need = [];
  const out = [];

  for (const r of refs) {
    const key = `${r.code}:${r.article}`;
    const hit = cache.get(key);
    if (hit && now - hit.at < CACHE_MS) out.push({ key, doc: hit.doc });
    else need.push({ key, code: r.code, article: r.article });
  }

  if (need.length) {
    const found = await LegalChunk.find({
      $or: need.map((n) => ({ lawCode: n.code, articleNumber: n.article })),
    })
      .select("lawCode articleNumber title titleRu text textRu -_id")
      .lean();

    const byKey = new Map(
      found.map((d) => [`${d.lawCode}:${d.articleNumber}`, d]),
    );
    for (const n of need) {
      const doc = byKey.get(n.key) || null;
      cache.set(n.key, { at: now, doc });
      out.push({ key: n.key, doc });
    }
  }

  // Tartib `refs` dagidek saqlanadi (kesh va baza aralashib ketmasin).
  const byKey = new Map(out.map((o) => [o.key, o.doc]));
  const ru = lang === "ru";

  return refs
    .map((r) => {
      const d = byKey.get(`${r.code}:${r.article}`);
      if (!d) return null;
      return {
        code: d.lawCode,
        article: d.articleNumber,
        title: (ru && d.titleRu) || d.title || "",
        text: trim((ru && d.textRu) || d.text),
      };
    })
    .filter(Boolean);
}

module.exports = { attachQuotes };

"use strict";
/**
 * MANBALAR VA ISHONCH TEKSHIRUVI — javobning oxirgi bosqichi (2026-11-14).
 *
 * (1) `stripUnverified` — ILDIZ SABABLARDAN BIRI shu yerda edi: model
 *     javobida tasdiqlanmagan BITTA modda raqami bo'lsa, BUTUN javob
 *     tashlab yuborilib, foydalanuvchiga "mos modda topilmadi" shabloni
 *     ko'rsatilardi (o'lchangan: "135 modda" savolida). Endi faqat
 *     tasdiqlanmagan raqamli JUMLA olib tashlanadi, javobning qolgani
 *     saqlanadi. To'qima modda foydalanuvchiga baribir yetib bormaydi.
 * (2) `attachSources` — "Manbalar" bo'limini MODEL emas, TIZIM yozadi:
 *     faqat haqiqatan topilgan va javobda tilga olingan moddalar, havolasi
 *     bilan. Model yozgan manbalar ro'yxatiga ishonilmaydi.
 */
const { citedNumbers } = require("../llm/grounded");

const NOTE = {
  uz: "_Ayrim modda raqamlarini bazadan tasdiqlab bo'lmadi — ular javobdan olib tashlandi. Aniq raqamni Lex.uz da tekshiring._",
  ru: "_Часть номеров статей не удалось подтвердить по базе — они убраны из ответа. Точный номер проверьте на Lex.uz._",
};
const HEAD = { uz: "Manbalar", ru: "Источники" };
const MIN_LEFT = 160;

/** Tasdiqlanmagan modda tilga olingan jumlalar olib tashlanadi. Javob yaroqsiz qolsa — null. */
function stripUnverified(text, bad, lang = "uz") {
  const badSet = new Set(bad);
  const hasBad = (s) => [...citedNumbers(s)].some((n) => badSet.has(n));
  const lines = String(text).split("\n").map((line) => {
    if (!hasBad(line)) return line;
    const lead = line.match(/^\s*(?:[-*•]|\d+[.)])\s+/)?.[0] || "";
    const kept = line.slice(lead.length).split(/(?<=[.!?])\s+/).filter((s) => !hasBad(s)).join(" ").trim();
    return kept.length > 20 ? lead + kept : null;
  });
  const out = lines.filter((l) => l !== null).join("\n").replace(/\n{3,}/g, "\n\n").trim();
  if (out.replace(/[*_#\s]/g, "").length < MIN_LEFT || [...citedNumbers(out)].some((n) => badSet.has(n))) return null;
  return `${out}\n\n${NOTE[lang === "ru" ? "ru" : "uz"]}`;
}

/* Model o'zi yozgan yakuniy "Manbalar/Moddalar" bo'limi olib tashlanadi —
   uning o'rniga tekshirilgan ro'yxat qo'yiladi. */
const TAIL = /\n+(?:#{1,4}\s*)?\*{0,2}(?:Manbalar|Moddalar|Источники|Статьи)\*{0,2}:?\*{0,2}\s*\n[\s\S]*$/i;

const norm = (s) => String(s || "").toLowerCase().replace(/[ʻʼ'‘’`]/g, "");

/**
 * @param {string} text — model javobi
 * @param {object[]} docs — hybridRetrieve natijasi (LLM'ga berilgan manbalar)
 * @returns {{ text: string, sources: object[] }}
 */
function attachSources(text, docs, lang = "uz") {
  const ru = lang === "ru";
  const body = String(text).replace(TAIL, "").trim();
  const cited = citedNumbers(body);
  const low = norm(body);
  const byNum = new Map();
  for (const d of docs) {
    if (!cited.has(String(d.articleNumber))) continue;
    const list = byNum.get(d.articleNumber) || [];
    list.push(d);
    byNum.set(d.articleNumber, list);
  }
  const sources = [];
  for (const list of byNum.values()) {
    // Bir xil raqam bir nechta kodeksda bo'lsa — javobda NOMI aytilgani olinadi
    const named = list.filter((d) => low.includes(norm(d.lawName).slice(0, 14)));
    for (const d of named.length ? named : list.slice(0, 1)) sources.push(d);
  }
  if (!sources.length) return { text: body, sources: [] };
  const rows = sources.slice(0, 8).map((d) => {
    const num = ru ? `статья ${d.articleNumber}` : `${d.articleNumber}-modda`;
    return `- [${d.lawName}, ${num}${d.title ? ` — ${d.title}` : ""}](${d.sourceUrl})`;
  });
  return {
    text: `${body}\n\n**${HEAD[ru ? "ru" : "uz"]}**\n${rows.join("\n")}`,
    sources: sources.map((d) => ({ id: d.id, lawName: d.lawName, articleNumber: d.articleNumber, title: d.title, url: d.sourceUrl, score: d.score })),
  };
}

module.exports = { stripUnverified, attachSources };

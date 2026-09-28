"use strict";
/**
 * LOKAL AI — HAYOTIY VAZIYAT JAVOBI (situations.js).
 *
 * Tuzilma: vaziyat mazmuni → "Nima qilish kerak" → vaziyatga bevosita
 * tegishli, bazadan tekshirilgan moddalar (`pins`).
 *
 * ⚠️ IQTIBOS QOIDASI (2026-09-28): avval moddadan "savol so'zlari eng ko'p
 * uchragan jumlalar" olinardi va bu jinoyat moddalarida buzuq natija
 * berardi — ta'rif "…jinsiy aloqa qilish, —" deb jazosiz kesilardi,
 * JK 55 dan kerakli "a" bandi o'rniga "e" bandi olinardi. Endi:
 *   • modda BOSHI doim ko'rsatiladi (ta'rif + birinchi jazo qatori);
 *   • pin'da `focus` (3-element, RegExp) bo'lsa — o'sha band va undan
 *     keyingi jazo qatori qo'shiladi;
 *   • tasodifiy qo'shimcha moddalar QO'SHILMAYDI — faqat pin'lar.
 */
const { docHead, localText } = require("./compose");

const LEAD_MIN = 120;
const LEAD_MAX = 950;
const FOCUS_MAX = 450;

const lines = (body) =>
  String(body || "")
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);

function clip(text, max) {
  return text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, "")}…` : text;
}

/* Modda boshi: birinchi TO'LIQ gap ("…qilish, —" + "…jazolanadi.").
   Ro'yxat bandlari (";" bilan) davom etadi, lekin LEAD_MAX dan oshmaydi.
   `focus` berilgan va modda ro'yxat bilan boshlansa ("Quyidagi holatlar…:")
   — faqat kirish qatori olinadi, kerakli band esa focus orqali keladi. */
function leadOf(ls, hasFocus) {
  if (hasFocus && ls[0] && /:$/.test(ls[0])) return { text: ls[0], used: 1 };
  const out = [];
  let len = 0;
  for (const l of ls) {
    if (out.length && len + l.length > LEAD_MAX) break;
    out.push(l);
    len += l.length;
    if (len >= LEAD_MIN && /[.!?»"]$/.test(l)) break;
  }
  // Modda davom etsa — o'quvchi to'liq matnni kutubxonadan ochishi uchun "…"
  const more = out.length < ls.length ? "\n…" : "";
  return { text: clip(out.join("\n"), LEAD_MAX + 300) + more, used: out.length };
}

function focusOf(ls, re, from) {
  const i = ls.findIndex((l, k) => k >= from && re.test(l));
  if (i < 0) return "";
  const out = [ls[i]];
  if (/—$/.test(ls[i])) {
    // "O'n to'rt yoshga to'lmagan shaxsning nomusiga tegish, —" → jazo qatori
    if (ls[i + 1]) out.push(ls[i + 1]);
  } else if (/;$/.test(ls[i]) && /^[a-zа-яё]\)/i.test(ls[i])) {
    // Ro'yxat bandi ("v) o'n to'rt yoshga…;") — ro'yxat oxiridagi "—" dan
    // keyingi jazo qatori (faqat jinoyat moddalarida uchraydi)
    const end = ls.findIndex((l, k) => k > i && /—$/.test(l));
    if (end > 0 && end - i <= 8 && ls[end + 1]) out.push("…", ls[end + 1]);
  }
  return clip(out.join("\n"), FOCUS_MAX);
}

function pinText(doc, lang, focus) {
  const body = lang === "ru" && doc.textRu ? doc.textRu : doc.text;
  const ls = lines(body);
  const lead = leadOf(ls, !!focus);
  const extra = focus ? focusOf(ls, focus, lead.used) : "";
  return extra ? `${lead.text.replace(/\n…$/, "")}\n…\n${extra}` : lead.text;
}

/**
 * @param {{ situation: object, pinned: {idx:number, focus?:RegExp}[],
 *           state: object, lang: string }} p
 */
function composeSituation({ situation, pinned, state, lang }) {
  const L = localText(lang);
  const pick = (v) => (lang === "ru" ? v.ru : v.uz);
  const steps = pick(situation.steps)
    .map((st, i) => `${i + 1}. ${st}`)
    .join("\n");
  const parts = [
    `**${pick(situation.title)}**\n${pick(situation.summary)}`,
    `**${L.stepsTitle}:**\n${steps}`,
  ];
  if (pinned.length) {
    parts.push(`**${L.lawTitle}:**`);
    pinned.forEach((p, i) => {
      const doc = state.docs[p.idx];
      parts.push(`${docHead(doc, i + 1, lang, L)}\n${pinText(doc, lang, p.focus)}`);
    });
  }
  parts.push(L.more, L.note);
  return { answer: parts.join("\n\n"), found: true };
}

module.exports = { composeSituation, pinText };

"use strict";
/**
 * LOKAL AI — KUNDALIK SO'Z → QONUN ATAMASI va SOHA "DARVOZALARI".
 *
 * (1) KUNDALIK SO'ZLAR (2026-10-05). Odamlar "maosh", "zarplata",
 *     "oyligim" deydi, qonunda esa faqat "ish haqi" bor. BM25 qidiruvi
 *     bunday savolda kerakli moddani topa olmasdi. `colloquial()` so'rovga
 *     qonun atamasini QO'SHADI (asl so'z o'chirilmaydi) — faqat qidiruv
 *     uchun; foydalanuvchiga ko'rsatiladigan matn o'zgarmaydi.
 *
 * (2) SOHA DARVOZALARI. Ba'zi kodekslar juda tor sohaga tegishli
 *     (mahkumlar, soliq, bojxona, saylov, havo, budjet). Ularning
 *     moddalari umumiy so'zlar orqali tasodifan chiqib qolardi:
 *     "Pensiyamni kam hisoblashgan" → Jinoyat-ijroiya kodeksi
 *     "MAHKUMLARNING pensiya ta'minoti"; "Oyligim kechikib beriladi" →
 *     Soliq kodeksi. Endi bunday kodeks faqat savolda o'z sohasiga oid
 *     so'z bo'lsa (yoki kodeks nomi/mavzusi aniq berilganda) qatnashadi.
 */
const { normalize } = require("./text");

// ⚠️ `\b` kirillni tanimaydi — chegara `(?<!\p{L})` bilan (u bayrog'i)
const COLLOQUIAL = [
  [/(?<!\p{L})(maosh\S*|zarplat\S*|oylig\S*|ойлиг\S*|маош\S*)/gu, "ish haqi"],
  [/(?<!\p{L})(militsiya\S*|mentlar\S*|милици\S*)/gu, "ichki ishlar organlari"],
  [/(?<!\p{L})(kvartirant\S*|квартирант\S*)/gu, "ijaraga oluvchi"],
  [/(?<!\p{L})(dekret\S*|декрет\S*)/gu, "homiladorlik va tugʻish taʼtili"],
  [/(?<!\p{L})(avtohalokat\S*|avariya\S*)/gu, "yoʻl-transport hodisasi"],
];

/** Savolga qonun atamalarini qo'shadi (qidiruv uchun). */
function colloquial(text = "") {
  const low = String(text).toLowerCase();
  const extra = [];
  for (const [re, term] of COLLOQUIAL) {
    re.lastIndex = 0;
    if (re.test(low)) extra.push(term);
  }
  return extra.length ? `${text} ${extra.join(" ")}` : text;
}

const GATES = {
  JIK: /mahkum|qamoq|koloniya|ozodlikdan|jazoni ijro|ijro muassasa|осужд|колони|лишени\S* свобод|заключ/,
  SK: /soliq|налог/,
  BJK: /\bboj|tamojn|таможн|пошлин/,
  SYK: /saylov|выбор|голосов/,
  HK: /havo (yol|kod|kema)|samolyot|aviat|aeroport|uchuvchi|самол[её]т|авиа|аэропорт/,
  BK: /budjet|бюджет/,
};

/** Kodeks savol sohasidan tashqarida qolsinmi? (`allowed` — aniq berilgan kodekslar) */
function gatedOut(code, query, allowed = []) {
  const gate = GATES[code];
  if (!gate || allowed.includes(code)) return false;
  return !gate.test(normalize(query));
}

module.exports = { colloquial, gatedOut };

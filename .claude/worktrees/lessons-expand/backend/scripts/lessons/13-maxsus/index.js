"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 13 — MAXSUS SOHALAR (BOJXONA VA TRANSPORT)
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Bojxona kodeksi (BJK), Havo kodeksi (HK), Fuqarolik
 * kodeksi 2-qism (FK2 — tashish va ekspeditsiya), MSK, IPK.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Bojxona qoidalari        BJK 155–169, 174
 *   02 Bojxona rasmiylashtiruvi BJK 246–256, 259, 261, 264, 265,
 *                               271, 274, 275 + MSK 4, 6
 *   03 Havo transporti          HK 98–107, 110, 113, 114, 116, 117,
 *                               119, 120, 121, 122, 124–127
 *   04 Yo'lovchi tashish        FK2 709, 710, 712–715, 717, 718,
 *                               720, 725, 999, 1006
 *   05 Yuk tashish              FK2 711, 716, 719, 721–724, 726–731
 *                               + IPK 149
 *   06 Aviatsiya xavfsizligi    HK 85–95, 92-1
 *
 * ⚠️ NOZIK CHEGARA — HAVO KODEKSI IKKI DARSGA BO'LINGAN:
 * 03-dars — SHARTNOMA va YO'LOVCHI HUQUQLARI (98–127),
 * 06-dars — XAVFSIZLIK va YO'LOVCHI MAJBURIYATLARI (85–95).
 * Ular kesishmaydi: birinchisi "menga nima berilishi kerak",
 * ikkinchisi "mendan nima talab qilinadi" degan savolga javob
 * beradi.
 *
 * ⚠️ FK2 TASHISH BO'LIMI HAM IKKIGA BO'LINGAN: yo'lovchi (04)
 * va yuk (05). 709 — umumiy modda, u 04-darsda kirish sifatida
 * beriladi.
 *
 * ⚠️ AVIATSIYA ISHLARI (HK 128–135) OLINMADI — ular
 * qishloq xo'jaligi aviatsiyasi va shu kabi maxsus faoliyatga
 * tegishli, oddiy foydalanuvchiga taalluqli emas.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 6/6 dars kengaytirilgan.
 */

const REWRITTEN = new Set([
  "bojxona-qoidalari",
  "bojxona-rasmiylashtirish",
  "havo-transporti",
  "yolovchi-tashish",
  "yuk-tashish",
  "aviatsiya-xavfsizligi",
]);

const EXPANDED = [
  require("./01-bojxona-qoidalari").LESSON,
  require("./02-bojxona-rasmiylashtirish").LESSON,
  require("./03-havo-transporti").LESSON,
  require("./04-yolovchi-tashish").LESSON,
  require("./05-yuk-tashish").LESSON,
  require("./06-aviatsiya-xavfsizligi").LESSON,
];

const rest = require("./00-qolganlar").LESSONS.filter(
  (l) => !REWRITTEN.has(l.key),
);

const LESSONS = [...EXPANDED, ...rest].sort((a, b) => a.order - b.order);

/* Takroriy kalit tekshiruvi — izoh `04-oila/index.js` da. */
const seen = new Set();
for (const l of LESSONS) {
  if (seen.has(l.key)) {
    throw new Error(
      `Maxsus modulda takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

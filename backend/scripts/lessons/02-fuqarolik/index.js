"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 2 — FUQAROLIK HUQUQI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: Fuqarolik kodeksi 1-qism (FK, 386 modda) + FK2 ning
 * zarar yetkazish bo'limi (985–1030).
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL — u yerda
 * batafsil izohlangan. Qisqacha: har darsga AYNAN O'SHA mavzuga oid
 * moddalar bo'yicha mavzu yoziladi, sun'iy raqam qo'yilmaydi va
 * modda chegaralari darslar o'rtasida takrorlanmaydi.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Fuqarolik asoslari    FK 1–15, 81–98
 *   02 Subyektlar            FK 16–18, 21, 24–26-1, 39–80
 *   03 Muomala layoqati      FK 22–23, 27–38
 *   04 Mulk huquqi           FK 164–215
 *   05 Umumiy mulk           FK 216–227
 *   06 Mulkni himoya qilish  FK 228–233
 *   07 Shaxsiy huquqlar      FK 19–20, 99–100 + FK2 1021–1022
 *   08 Vakillik/ishonchnoma  FK 129–144
 *   09 Muddatlar va da'vo    FK 145–163
 *   10 Zarar yetkazish       FK2 985–1020, 1023–1030
 *
 * ⚠️ FK 101–128 (bitimlar) va FK 234–385 (majburiyat va shartnoma)
 * BU MODULGA KIRMAYDI — ular SHARTNOMALAR moduliga (03) tegishli.
 * Chegara ataylab: bitim va shartnoma huquqi o'z moduliga ega va
 * ikki joyda takrorlanishi darslarni suvlantirardi.
 *
 * ⚠️ FK2 999 va 1006 maxsus modulda (13, yo'lovchi tashish) ham
 * uchraydi — u yerda TRANSPORT kontekstida, bu yerda esa umumiy
 * delikt qoidasi sifatida. Rakurs boshqa.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 10/10 dars kengaytirilgan.
 */

/* Hali kengaytirilmagan darslar — asl holida ishlashda davom
   etadi. Kengaytirilgan dars bu ro'yxatdan CHIQARIB tashlanadi,
   aks holda bazada ikkita bir xil `libraryKey` paydo bo'lardi. */
const REWRITTEN = new Set([
  "fuqarolik-asoslari",
  "fuqarolik-subyektlar",
  "muomala-layoqati",
  "mulk-huquqi",
  "mulk-turlari",
  "mulk-himoya",
  "shaxsiy-huquqlar",
  "vakillik-ishonchnoma",
  "muddatlar-davo",
  "zarar-qoplash",
]);

const EXPANDED = [
  require("./01-fuqarolik-asoslari").LESSON,
  require("./02-fuqarolik-subyektlar").LESSON,
  require("./03-muomala-layoqati").LESSON,
  require("./04-mulk-huquqi").LESSON,
  require("./05-mulk-turlari").LESSON,
  require("./06-mulk-himoya").LESSON,
  require("./07-shaxsiy-huquqlar").LESSON,
  require("./08-vakillik-ishonchnoma").LESSON,
  require("./09-muddatlar-davo").LESSON,
  require("./10-zarar-qoplash").LESSON,
];

const rest = require("./00-qolganlar").LESSONS.filter(
  (l) => !REWRITTEN.has(l.key),
);

/* `order` bo'yicha saralanadi — modul ichidagi o'quv ketma-ketligi
   shu maydonda saqlanadi va u kengaytirishdan keyin ham o'zgarmaydi. */
const LESSONS = [...EXPANDED, ...rest].sort((a, b) => a.order - b.order);

/* Takroriy kalit tekshiruvi — izoh `04-oila/index.js` da. */
const seen = new Set();
for (const l of LESSONS) {
  if (seen.has(l.key)) {
    throw new Error(
      `Fuqarolik modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 3 — SHARTNOMALAR HUQUQI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Fuqarolik kodeksi 1-qism (FK — bitim, majburiyat va
 * shartnomaning UMUMIY qoidalari) va 2-qism (FK2 — ALOHIDA
 * shartnoma turlari).
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL — u yerda
 * batafsil izohlangan. Qisqacha: har darsga AYNAN O'SHA mavzuga oid
 * moddalar bo'yicha mavzu yoziladi, sun'iy raqam qo'yilmaydi va
 * modda chegaralari darslar o'rtasida takrorlanmaydi.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Shartnoma huquqi      FK 353–363
 *   02 Bitim shakli          FK 101–112
 *   03 Bitim haqiqiy emasligi FK 113–128
 *   04 Shartnoma tuzish      FK 364–381
 *   05 Majburiyatni bajarish FK 234–258
 *   06 Majburiyat ta'minoti  FK 259–312, 325–327
 *   07 Shartnoma buzilishi   FK 313–324, 328–352, 382–385
 *   08 Oldi-sotdi            FK2 386–478
 *   09 Ijara                 FK2 535–599, 617–630
 *   10 Pudrat                FK2 631–702
 *   11 Qarz, kredit, bank    FK2 732–816
 *   12 Xizmat va saqlash     FK2 703–708, 875–913, 976–984
 *   13 Hadya va renta        FK2 497–534
 *   14 Topshiriq va sug'urta FK2 817–874, 914–961, 962–975
 *
 * ⚠️ FK 1–100, 129–233 (fuqarolik asoslari, subyektlar, mulk,
 * vakillik, muddatlar) BU MODULGA KIRMAYDI — ular FUQAROLIK
 * moduliga (02) tegishli.
 *
 * ⚠️ FK 325–327 (neustoyka va zarar nisbati) ATAYLAB 6-darsda:
 * neustoyka u yerda yaxlit mavzu sifatida beriladi va uni ikki
 * darsga bo'lish o'quvchini chalkashtirardi.
 *
 * ⚠️ FK2 479–496 (KO'CHMAS MULK va KORXONA sotish) hamda
 * FK2 600–616 (UY-JOYNI ijaraga berish) BU YERGA KIRMAYDI —
 * ular UY-JOY moduliga (07) tegishli. Aks holda uy-joy bitimlari
 * ikki modulda takrorlanardi.
 *
 * ⚠️ FK2 709–731 (tashish va ekspeditsiya) MAXSUS modulda (13).
 * ⚠️ FK2 985–1030 (zarar yetkazish) FUQAROLIK modulida (02).
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 14/14 dars kengaytirilgan.
 */

/* Hali kengaytirilmagan darslar — asl holida ishlashda davom
   etadi. Kengaytirilgan dars bu ro'yxatdan CHIQARIB tashlanadi,
   aks holda bazada ikkita bir xil `libraryKey` paydo bo'lardi. */
const REWRITTEN = new Set([
  "shartnoma-huquqi",
  "bitim-shakli",
  "bitim-haqiqiy-emas",
  "shartnoma-tuzish",
  "shartnoma-majburiyat",
  "shartnoma-taminot",
  "shartnoma-buzilishi",
  "oldi-sotdi",
  "ijara-shartnoma",
  "pudrat",
  "qarz-kredit",
  "xizmat-korsatish",
  "hadya-renta",
  "topshiriq-sugurta",
]);

const EXPANDED = [
  require("./01-shartnoma-huquqi").LESSON,
  require("./02-bitim-shakli").LESSON,
  require("./03-bitim-haqiqiy-emas").LESSON,
  require("./04-shartnoma-tuzish").LESSON,
  require("./05-shartnoma-majburiyat").LESSON,
  require("./06-shartnoma-taminot").LESSON,
  require("./07-shartnoma-buzilishi").LESSON,
  require("./08-oldi-sotdi").LESSON,
  require("./09-ijara-shartnoma").LESSON,
  require("./10-pudrat").LESSON,
  require("./11-qarz-kredit").LESSON,
  require("./12-xizmat-korsatish").LESSON,
  require("./13-hadya-renta").LESSON,
  require("./14-topshiriq-sugurta").LESSON,
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
      `Shartnomalar modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

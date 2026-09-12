"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 4 — OILA HUQUQI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: Oila kodeksi (OK, 220 modda).
 *
 * ── NIMA UCHUN KATALOGGA BO'LINDI ──────────────────────────────────
 * Foydalanuvchi talabi: har bir darsga QONUN KO'TARGANCHA mavzu
 * qo'shilsin va mavzular AYNAN O'SHA darsga tegishli bo'lsin
 * (boshqa darslardan yig'ib olib kelinmasin).
 *
 * Natijada darslar 2-3 bo'limdan 10-16 mavzugacha o'sdi va bitta
 * faylda saqlash ishlamay qoldi. Endi har dars alohida faylda.
 *
 * ── MAVZULAR SONI QANDAY BELGILANADI ───────────────────────────────
 * Sun'iy raqam (masalan "50 ta") QO'YILMAYDI. Har bir dars uchun
 * Oila kodeksidan AYNAN O'SHA mavzuga oid moddalar ajratiladi va
 * har bir modda (yoki mazmunan bog'liq modda guruhi) bitta mavzu
 * bo'ladi.
 *
 * Masalan "Nikoh shartnomasi" bo'yicha kodeksda atigi 6 ta modda
 * bor — undan 50 mavzu yozish bir xil narsani takrorlash bo'lardi
 * va darsni yomonlashtirardi. Shuning uchun mavzular soni darsdan
 * darsga farq qiladi.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Nikoh tuzish       OK 13–18, 51–53, 57–59, 212–217
 *   02 Ajratish           OK 37–48, 218–222
 *   03 Er-xotin mulki     OK 23–28, 34–36, 12
 *   04 Nikoh shartnomasi  OK 29–33, 34–35
 *   05 Bolalar alimenti   OK 96–107, 112, 114–116
 *   06 Oila ta'minoti     OK 108–111, 113, 117–129
 *   07 Ota-onalik huquqi  OK 71–89
 *   08 Bolaning huquqlari OK 65–70, 90–95
 *   09 Nasl-nasab/otalik  OK 60–64, 205–209, 228
 *   10 Farzandlikka olish OK 148–175, 194–200
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 10/10 dars kengaytirilgan.
 * `00-qolganlar.js` endi bo'sh qoladi (barcha darslar ko'chirilgan).
 *
 * ⚠️ CHEGARALAR ATAYLAB: bir modda IKKI darsda takrorlanmasligi
 * uchun har bir modda guruhi bitta darsga biriktirilgan. Nikoh
 * shartnomasi (29–33) 3-darsda EMAS, o'z darsida.
 */

/* Hali kengaytirilmagan darslar — asl holida ishlashda davom
   etadi. Kengaytirilgan dars bu ro'yxatdan CHIQARIB tashlanadi,
   aks holda bazada ikkita bir xil `libraryKey` paydo bo'lardi. */
const REWRITTEN = new Set([
  "nikoh-tuzish",
  "nikoh-bekor",
  "er-xotin-mulki",
  "nikoh-shartnoma",
  "aliment-bolalar",
  "aliment-oila",
  "ota-ona-huquqlari",
  "bola-himoyasi",
  "otalikni-belgilash",
  "farzandlikka-olish",
]);

const EXPANDED = [
  require("./01-nikoh-tuzish").LESSON,
  require("./02-nikoh-bekor").LESSON,
  require("./03-er-xotin-mulki").LESSON,
  require("./04-nikoh-shartnoma").LESSON,
  require("./05-aliment-bolalar").LESSON,
  require("./06-aliment-oila").LESSON,
  require("./07-ota-ona-huquqlari").LESSON,
  require("./08-bola-himoyasi").LESSON,
  require("./09-otalikni-belgilash").LESSON,
  require("./10-farzandlikka-olish").LESSON,
];

const rest = require("./00-qolganlar").LESSONS.filter(
  (l) => !REWRITTEN.has(l.key),
);

/* `order` bo'yicha saralanadi — modul ichidagi o'quv ketma-ketligi
   shu maydonda saqlanadi va u kengaytirishdan keyin ham o'zgarmaydi. */
const LESSONS = [...EXPANDED, ...rest].sort((a, b) => a.order - b.order);

/* ── HIMOYA: kalit takrorlanishi ────────────────────────────────────
   `REWRITTEN` ro'yxatiga kalit qo'shish unutilsa, bitta dars ikki
   marta (eski va yangi holatida) ro'yxatga tushardi va seed skripti
   ularni bir-birining ustiga yozardi. Buni darhol tutamiz. */
const seen = new Set();
for (const l of LESSONS) {
  if (seen.has(l.key)) {
    throw new Error(
      `Oila modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 6 — MEHNAT HUQUQI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: Mehnat kodeksi (MK, 581 modda).
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL — u yerda
 * batafsil izohlangan. Qisqacha: har darsga AYNAN O'SHA mavzuga oid
 * moddalar bo'yicha mavzu yoziladi, sun'iy raqam qo'yilmaydi va
 * modda chegaralari darslar o'rtasida takrorlanmaydi.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Mehnat shartnomasi   MK 103–117
 *   02 Ishga qabul          MK 118–132
 *   03 O'zgartirish         MK 133–154
 *   04 Bo'shatish asoslari  MK 155–169
 *   05 Bo'shatish tartibi   MK 170–174, 100, 102
 *   06 Ish vaqti            MK 181–200
 *   07 Dam olish vaqti      MK 201–212
 *   08 Mehnat ta'tili       MK 213–235
 *   09 Ijtimoiy ta'tillar   MK 236–242
 *   10 Ish haqi             MK 243–257
 *   11 Ushlab qolish        MK 258–294
 *   12 Mehnat intizomi      MK 295–315
 *   13 Moddiy javobgarlik   MK 316–350
 *   14 Mehnat muhofazasi    MK 351–366
 *   15 Mehnat nizolari      MK 534–578
 *   16 Alohida toifalar     MK 388–431
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 16/16 dars kengaytirilgan.
 *
 * ⚠️ Chegaralar OLDINDAN belgilangan — kengaytirish paytida bir
 * modda ikki darsga tushib qolmasligi uchun.
 */

const REWRITTEN = new Set([
  "mehnat-shartnomasi",
  "ishga-qabul",
  "ish-haqi",
  "ishdan-boshatish-asoslari",
  "mehnat-tatili",
  "ish-vaqti",
  "mehnat-intizomi",
  "mehnat-shartnoma-ozgartirish",
  "moddiy-javobgarlik",
  "ushlab-qolish",
  "mehnat-muhofazasi",
  "dam-olish-vaqti",
  "mehnat-nizolari",
  "ishdan-boshatish-tartibi",
  "ijtimoiy-tatil",
  "alohida-toifalar",
]);

const EXPANDED = [
  require("./01-mehnat-shartnomasi").LESSON,
  require("./02-ishga-qabul").LESSON,
  require("./10-ish-haqi").LESSON,
  require("./04-ishdan-boshatish-asoslari").LESSON,
  require("./08-mehnat-tatili").LESSON,
  require("./06-ish-vaqti").LESSON,
  require("./12-mehnat-intizomi").LESSON,
  require("./03-shartnoma-ozgartirish").LESSON,
  require("./13-moddiy-javobgarlik").LESSON,
  require("./11-ushlab-qolish").LESSON,
  require("./14-mehnat-muhofazasi").LESSON,
  require("./07-dam-olish-vaqti").LESSON,
  require("./15-mehnat-nizolari").LESSON,
  require("./05-boshatish-tartibi").LESSON,
  require("./09-ijtimoiy-tatil").LESSON,
  require("./16-alohida-toifalar").LESSON,
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
      `Mehnat modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

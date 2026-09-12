"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 9 — SOLIQ VA BUDJET HUQUQI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Soliq kodeksi (SK, 500 modda) va Budjet kodeksi
 * (BK, 179 modda).
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Soliq asoslari        SK 1–18
 *   02 To'lovchi huquqlari   SK 19–33, 56
 *   03 Soliq majburiyati     SK 85–105
 *   04 Hisob va hisobot      SK 47, 69–84, 126–134
 *   05 Soliq tekshiruvi      SK 135–155, 169–175
 *   06 Undirish/javobgarlik  SK 106–125, 156–168
 *   07 Jismoniy shaxs        SK 368–401, 418–424, 433–440
 *   08 Tadbirkorlik          SK 31–32, 402–409, 461–483
 *   09 Budjet tizimi         BK + SK 455–460
 *
 * ⚠️ SK 176–195 (transfert narxni belgilash) va 200–367 (QQS,
 * aksiz, foyda solig'i) ATAYLAB OLINMADI — ular yirik biznes va
 * professional buxgalter darajasidagi mavzular. Bu modul oddiy
 * foydalanuvchi va kichik tadbirkorga mo'ljallangan.
 *
 * Agar kelajakda ular kerak bo'lsa — alohida darslar sifatida
 * qo'shilishi kerak, mavjud darslarni suvlantirmasdan.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 9/9 dars kengaytirilgan.
 */

const REWRITTEN = new Set([
  "soliq-asoslari",
  "soliq-tolovchi-huquqlari",
  "soliq-majburiyati",
  "soliq-hisoboti",
  "soliq-tekshiruvi",
  "soliq-javobgarlik",
  "jismoniy-shaxs-soliq",
  "tadbirkorlik-boshlash",
  "budjet-tizimi",
]);

const EXPANDED = [
  require("./01-soliq-asoslari").LESSON,
  require("./02-soliq-tolovchi-huquqlari").LESSON,
  require("./03-soliq-majburiyati").LESSON,
  require("./04-soliq-hisoboti").LESSON,
  require("./05-soliq-tekshiruvi").LESSON,
  require("./06-soliq-javobgarlik").LESSON,
  require("./07-jismoniy-shaxs-soliq").LESSON,
  require("./08-tadbirkorlik-boshlash").LESSON,
  require("./09-budjet-tizimi").LESSON,
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
      `Soliq modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

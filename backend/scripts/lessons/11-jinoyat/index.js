"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 11 — JINOYAT HUQUQI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Jinoyat kodeksi (JK, 404 modda) va Jinoyat-ijroiya
 * kodeksi (JIK, 199 modda).
 *
 * ⚠️ MODULNING YO'NALISHI: bu darslar jinoyat sodir etishni emas,
 * HUQUQNI TUSHUNISHNI o'rgatadi. Jinoyat tarkiblari asosan
 * JABRLANUVCHI va HIMOYA nuqtai nazaridan bayon etilgan:
 * qanday himoyalanish, dalilni qanday qayd etish, qanday
 * murojaat qilish.
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Jinoyat tushunchasi   JK 1–16, 36
 *   02 Ayb va ishtirokchilik JK 17–34
 *   03 Istisno holatlar      JK 35, 37–41-1
 *   04 Jazo                  JK 42–63
 *   05 Ozod qilish           JK 64–80
 *   06 Voyaga yetmaganlar    JK 81–96
 *   07 Mulkka qarshi         JK 164–180
 *   08 Shaxsga qarshi        JK 97–145
 *   09 Korrupsiya            JK 205–215
 *   10 Jazoni ijro etish     JIK
 *
 * ⚠️ JK 146–163 (konstitutsiyaviy huquqlarga qarshi), 181–204
 * (iqtisodiyot sohasida), 216–404 (jamoat xavfsizligi, davlatga
 * qarshi, harbiy jinoyatlar) ATAYLAB OLINMADI — ular oddiy
 * foydalanuvchi uchun kam dolzarb yoki maxsus tayyorgarlik
 * talab qiladi.
 *
 * Kerak bo'lsa ular alohida darslar sifatida qo'shilishi kerak,
 * mavjud darslarni suvlantirmasdan.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 10/10 dars kengaytirilgan.
 */

const REWRITTEN = new Set([
  "jinoyat-tushunchasi",
  "jinoyat-tarkibi",
  "jinoiylikni-istisno",
  "jazo-turlari",
  "javobgarlikdan-ozod",
  "voyaga-etmaganlar-javobgarligi",
  "mulkka-qarshi",
  "shaxsga-qarshi",
  "korrupsiya",
  "jazoni-ijro",
]);

const EXPANDED = [
  require("./01-jinoyat-tushunchasi").LESSON,
  require("./02-jinoyat-tarkibi").LESSON,
  require("./03-jinoiylikni-istisno").LESSON,
  require("./04-jazo-turlari").LESSON,
  require("./05-javobgarlikdan-ozod").LESSON,
  require("./06-voyaga-etmaganlar-javobgarligi").LESSON,
  require("./07-mulkka-qarshi").LESSON,
  require("./08-shaxsga-qarshi").LESSON,
  require("./09-korrupsiya").LESSON,
  require("./10-jazoni-ijro").LESSON,
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
      `Jinoyat modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

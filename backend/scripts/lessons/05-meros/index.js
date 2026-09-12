"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 5 — MEROS HUQUQI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: Fuqarolik kodeksi 2-qism (FK2), vorislik bo'limi
 * (1112–1157-moddalar).
 *
 * ⚠️ MEROS FK EMAS, FK2 DA. Bu loyihada avval xato qilingan edi —
 * meros Fuqarolik kodeksining BIRINCHI qismidan qidirilardi.
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan bir xil: har
 * darsga AYNAN O'SHA mavzuga oid moddalar bo'yicha mavzu yoziladi,
 * sun'iy raqam qo'yilmaydi va modda chegaralari kesishmaydi.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Qonun bo'yicha meros  FK2 1112–1119, 1134–1140
 *   02 Vasiyatnoma           FK2 1120–1133
 *   03 Merosni qabul qilish  FK2 1145–1149, 1183
 *   04 Majburiy ulush        FK2 1141–1144
 *   05 Meros qarzlari        FK2 1155–1157, 1152
 *   06 Merosni taqsimlash    FK2 1150–1154
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 6/6 dars kengaytirilgan.
 *
 * ⚠️ 1-darsga vorislik ASOSLARI (1112–1119) ham kiritilgan: ular
 * alohida dars bo'lishga yetmaydi, lekin navbatlar mavzusini
 * tushunish uchun zarur (meros qachon/qayerda ochiladi, kim
 * merosxo'r bo'la oladi). Boshqa darslar bu moddalarni olmaydi.
 */

const REWRITTEN = new Set([
  "meros-qonun-boyicha",
  "vasiyatnoma",
  "merosni-qabul",
  "meros-majburiy-ulush",
  "meros-qarzlar",
  "meros-taqsimlash",
]);

const EXPANDED = [
  require("./01-meros-qonun-boyicha").LESSON,
  require("./02-vasiyatnoma").LESSON,
  require("./03-merosni-qabul").LESSON,
  require("./04-majburiy-ulush").LESSON,
  require("./05-meros-qarzlar").LESSON,
  require("./06-meros-taqsimlash").LESSON,
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
      `Meros modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

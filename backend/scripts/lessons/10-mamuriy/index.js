"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 10 — MA'MURIY HUQUQ
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Ma'muriy javobgarlik kodeksi (MJK, 662 modda),
 * Ma'muriy sud ishlarini yuritish kodeksi (MSK, 306) va
 * Saylov kodeksi (SYK, 116).
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Javobgarlik asoslari  MJK 1–21-2
 *   02 Ma'muriy jazo         MJK 22–39
 *   03 Ish yuritish          MJK 280–283, 294–313-9, 314–324-19
 *   04 Ta'minlash choralari  MJK 284–293
 *   05 Yo'l harakati         MJK 125–145
 *   06 Jamoat tartibi        MJK 40–46-2, 183–203-1
 *   07 Ma'muriy sud          MSK
 *   08 Murojaat va xizmatlar MJK 43–44, 193–198-9
 *   09 Saylov huquqi         SYK
 *
 * ⚠️ MJK ning MAXSUS QISMI juda katta (662 modda) va u soha
 * bo'yicha bo'lingan: soliq (170–182), bojxona (227–227-27),
 * mehnat (49–50-1), ekologiya va boshqalar.
 *
 * Bu modulga faqat ODDIY FOYDALANUVCHI kunlik hayotda duch
 * keladigan tarkiblar kiritildi (yo'l harakati, jamoat tartibi,
 * murojaat, davlat xizmatlari). Soha tarkiblari o'z modullarida
 * (soliq, mehnat, uy-joy) beriladi — aks holda ular ikki joyda
 * takrorlanardi.
 *
 * ⚠️ MJK 43–44 IKKI DARSDA uchraydi (01 va 08) — ataylab:
 * 01-darsda umumiy ro'yxat sifatida sanab o'tiladi, 08-darsda esa
 * MUROJAAT huquqi kontekstida batafsil ochib beriladi.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 9/9 dars kengaytirilgan.
 */

const REWRITTEN = new Set([
  "mamuriy-javobgarlik",
  "mamuriy-jazo-turlari",
  "mamuriy-ish-yuritish",
  "mamuriy-taminlash",
  "yol-harakati",
  "jamoat-tartibi",
  "mamuriy-sud",
  "davlat-xizmatlari",
  "saylov-huquqi",
]);

const EXPANDED = [
  require("./01-mamuriy-javobgarlik").LESSON,
  require("./02-mamuriy-jazo-turlari").LESSON,
  require("./03-mamuriy-ish-yuritish").LESSON,
  require("./04-mamuriy-taminlash").LESSON,
  require("./05-yol-harakati").LESSON,
  require("./06-jamoat-tartibi").LESSON,
  require("./07-mamuriy-sud").LESSON,
  require("./08-davlat-xizmatlari").LESSON,
  require("./09-saylov-huquqi").LESSON,
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
      `Ma'muriy modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

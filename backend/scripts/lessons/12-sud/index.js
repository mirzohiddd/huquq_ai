"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 12 — SUD VA PROTSESS
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Fuqarolik protsessual kodeksi (FPK, 508 modda),
 * Jinoyat-protsessual kodeksi (JPK, 763) va Iqtisodiy protsessual
 * kodeksi (IPK, 390).
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Sud tizimi          FPK 1–38 + IPK 1–15, 22–23
 *   02 Sud jarayoni        FPK 39–50, 105–126, 166–168, 205–250
 *   03 Da'vo arizasi       FPK 170–204 + IPK 148–155
 *   04 Sud xarajatlari     FPK 127–165
 *   05 Dalillar            FPK 51–104, 241
 *   06 Qaror va shikoyat   FPK 251–292, 372-1–372-6, 418–419-24
 *   07 Jinoyat protsessi   JPK 1–27, 45–60, 81–90, 321–324
 *   08 Ehtiyot choralari   JPK 159–170, 217–260
 *   09 Iqtisodiy sud       IPK 25–130, 185–198
 *   10 Qarorni ijro etish  FPK 355–372, 440–462
 *   11 Advokat va vakillik FPK 51–70 + JPK 49–53
 *
 * ⚠️ FPK 51–56 IKKI DARSDA uchraydi (05 va 11) — ataylab:
 * 05-darsda ular DALIL manbai sifatida (guvoh, ekspert),
 * 11-darsda esa PROTSESS ISHTIROKCHISI sifatida (prokuror,
 * organlar, ko'maklashuvchi shaxslar) beriladi. Rakurs boshqa.
 *
 * ⚠️ JPK 49–53 (himoyachi) ham ikki darsda: 07-darsda umumiy
 * kafolat sifatida, 11-darsda esa AMALIY vakillik kontekstida.
 *
 * ⚠️ JPK ning katta qismi (tergov harakatlari, sud muhokamasi,
 * apellyatsiya) ATAYLAB OLINMADI — modul oddiy foydalanuvchiga
 * mo'ljallangan va uning uchun eng muhimi kafolatlar hamda
 * ehtiyot choralari.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 11/11 dars kengaytirilgan.
 */

const REWRITTEN = new Set([
  "sud-tizimi",
  "fuqarolik-sudi",
  "davo-arizasi",
  "sud-xarajatlari",
  "dalillar",
  "sud-qarori-apellyatsiya",
  "jinoyat-protsessi",
  "ehtiyot-choralari",
  "iqtisodiy-sud",
  "sud-qarorini-ijro",
  "advokat-yuridik-yordam",
]);

const EXPANDED = [
  require("./01-sud-tizimi").LESSON,
  require("./02-fuqarolik-sudi").LESSON,
  require("./03-davo-arizasi").LESSON,
  require("./04-sud-xarajatlari").LESSON,
  require("./05-dalillar").LESSON,
  require("./06-sud-qarori-apellyatsiya").LESSON,
  require("./07-jinoyat-protsessi").LESSON,
  require("./08-ehtiyot-choralari").LESSON,
  require("./09-iqtisodiy-sud").LESSON,
  require("./10-sud-qarorini-ijro").LESSON,
  require("./11-advokat-yuridik-yordam").LESSON,
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
      `Sud modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };

"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  OILA HUQUQI — 50 MAVZULI DARSLIK
 * ═══════════════════════════════════════════════════════════════════
 *
 * NIMA UCHUN QAYTA QURILDI
 * Dars 4 ta bo'limdan iborat edi — ya'ni mavzuni sirtdan ko'rsatib
 * o'tardi, o'rgatmasdi. Foydalanuvchi talabi: dars SODDA VA
 * KETMA-KET o'rgatishi, har bir darslikda 50 ta mavzu bo'lishi.
 *
 * ── KETMA-KETLIK MANTIG'I ──────────────────────────────────────────
 * Tartib foydalanuvchi bergan namunaga aynan mos: "avval o'g'il bola
 * va qiz bola necha yoshdan turmush qurish mumkin, turmushdan keyin
 * nimalar bo'lishi kerak, oxirida ajrashish qanday bo'ladi va
 * ajrimdan so'ng nima bo'ladi".
 *
 *   1-qism  (1–8)   NIKOHGACHA      — yosh, monelik, qayd etish
 *   2-qism  (9–20)  NIKOHDA         — huquqlar, mulk, shartnoma
 *   3-qism  (21–30) BOLALAR         — nasl-nasab, huquqlar, ota-onalik
 *   4-qism  (31–40) AJRASHISH       — asoslar, FHDYo/sud, oqibatlar
 *   5-qism  (41–50) AJRIMDAN KEYIN  — bola, ko'rishish, aliment, mulk
 *
 * Har bir qism o'zidan oldingisiga tayanadi. Masalan mulkni bo'lish
 * (50-mavzu) eng oxirida turadi, chunki uni tushunish uchun umumiy
 * va shaxsiy mulk qoidalari (15–18-mavzular) allaqachon o'qilgan
 * bo'lishi kerak.
 *
 * ── FAYLLARGA BO'LINISH SABABI ─────────────────────────────────────
 * 50 ta mavzu bitta faylda ~1700 qator bo'lardi. Bunday faylda
 * kerakli mavzuni topish qiyin va har qanday tahrir butun darsni
 * xavf ostiga qo'yadi. Endi har qism alohida faylda.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI (loyiha bo'ylab amal qiladi)
 * Mavzu MATNIDA aniq yosh, muddat, foiz yoki summa YOZILMAYDI.
 * Sabab: qonun tahriri o'zgarsa dars eskirib, foydalanuvchini
 * chalg'itadi. Aniq raqam `lawRefs` orqali bazadagi JONLI qonun
 * matnidan keladi (`routes/lessons.js` → `attachLawQuotes`), ya'ni
 * lex.uz'dan yangilanish tushishi bilan darsdagi iqtibos ham
 * o'z-o'zidan yangilanadi.
 *
 * Aynan shu sababdan "Nikoh yoshi" mavzusida yosh MATNDA emas,
 * quyidagi qonun iqtibosida ko'rinadi — bu foydalanuvchining
 * savoliga javob beradi va bir vaqtda eskirmaydi.
 *
 * ⚠️ BARCHA `lawRefs` BAZADAN TEKSHIRILGAN — raqamlar taxmin
 * qilinmagan. Tekshiruv: `node scripts/verifyLessonRefs.js`
 * (0 xato bo'lishi shart, aks holda iqtibos dars sahifasida
 * JIMGINA ko'rinmay qoladi va xato sezilmasdan qolib ketadi).
 */

const { assembleLesson } = require("../assemble");

const SECTIONS = assembleLesson(
  "Oila huquqi",
  [
    "./01-nikohgacha",
    "./02-nikohda",
    "./03-bolalar",
    "./04-ajrashish",
    "./05-ajrimdan-keyin",
  ],
  require,
);

module.exports = { SECTIONS };

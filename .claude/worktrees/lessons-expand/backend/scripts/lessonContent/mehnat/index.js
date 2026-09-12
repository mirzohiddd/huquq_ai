"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MEHNAT HUQUQI — 50 MAVZULI DARSLIK
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: Mehnat kodeksi (MK, 581 modda).
 *
 * ── KETMA-KETLIK MANTIG'I ──────────────────────────────────────────
 * Tartib xodimning HAQIQIY yo'lini takrorlaydi: ishga kirishdan
 * oldin nimani bilish kerak → qanday qabul qilinadi → ishlash
 * jarayoni → haq olish → intizom va xavfsizlik → ishdan bo'shash.
 *
 *   1-qism  (1–6)   ISHGA KIRISHDAN OLDIN — erkinlik, yosh, rad etish
 *   2-qism  (7–14)  ISHGA QABUL QILISH    — shartnoma, sinov, buyruq
 *   3-qism  (15–22) ISH VAQTI VA TA'TIL   — vaqt, dam olish, ta'til
 *   4-qism  (23–34) ISH HAQI VA SHARTLAR  — haq, o'tkazish, chetlashtirish
 *   5-qism  (35–45) INTIZOM VA XAVFSIZLIK — jazo, javobgarlik, toifalar
 *   6-qism  (46–50) ISHDAN BO'SHASH       — asoslar, hisob-kitob, nizo
 *
 * Ishdan bo'shash ATAYLAB oxirida: uni tushunish uchun shartnoma,
 * ish haqi va intizom qoidalari allaqachon o'zlashtirilgan bo'lishi
 * kerak — aks holda "noqonuniy bo'shatish" nima ekani tushunarsiz.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI: matnda aniq yosh, muddat, foiz yoki
 * summa YOZILMAYDI — ular `lawRefs` orqali bazadagi JONLI qonun
 * matnidan keladi va lex.uz yangilanganda o'z-o'zidan yangilanadi.
 *
 * ⚠️ Barcha `lawRefs` bazadan tekshirilgan (raqam ham, moddaning
 * SARLAVHASI ham mavzuga mos kelishi tasdiqlangan).
 */

const { assembleLesson } = require("../assemble");

const SECTIONS = assembleLesson(
  "Mehnat huquqi",
  [
    "./01-ishga-kirishdan-oldin",
    "./02-ishga-qabul",
    "./03-ish-vaqti-tatil",
    "./04-ish-haqi",
    "./05-intizom-xavfsizlik",
    "./06-ishdan-boshash",
  ],
  require,
);

module.exports = { SECTIONS };

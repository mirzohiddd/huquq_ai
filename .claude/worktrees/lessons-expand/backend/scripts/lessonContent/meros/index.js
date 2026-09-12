"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MEROS HUQUQI — 50 MAVZULI DARSLIK
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: Fuqarolik kodeksi 2-qism (FK2), vorislik bo'limi
 * (1112–1157-moddalar).
 *
 * ⚠️ MEROS FK EMAS, FK2 DA. Bu loyihada avval xato qilingan edi:
 * meros mavzusi Fuqarolik kodeksining BIRINCHI qismidan
 * qidirilardi va natijada AI hamda darslar noto'g'ri kodeksga
 * murojaat qilardi. Vorislik normalari IKKINCHI qismda.
 *
 * ── KETMA-KETLIK MANTIG'I ──────────────────────────────────────────
 *   1-qism  (1–8)   ASOSLAR         — meros nima, qachon/qayerda ochiladi
 *   2-qism  (9–23)  VASIYATNOMA     — shakl, mazmun, ijro, legat
 *   3-qism  (24–33) QONUN BO'YICHA  — navbatlar, majburiy ulush
 *   4-qism  (34–42) QABUL QILISH    — muddat, voz kechish, taqsimot
 *   5-qism  (43–50) QARZLAR/AMALIYOT — qarz, korxona, muddat, qadamlar
 *
 * ⚠️ VASIYATNOMA ATAYLAB QONUN BO'YICHA VORISLIKDAN OLDIN turadi:
 * qonun bo'yicha vorislik faqat vasiyatnoma bo'lmaganda (yoki u
 * mol-mulkning bir qismini qamraganda) qo'llaniladi — ya'ni
 * vasiyatnoma birlamchi asos va uni oldin tushuntirish mantiqiy.
 *
 * QARZLAR mavzusi (44) esa oxirida: uni tushunish uchun merosni
 * qabul qilish va voz kechish qoidalari (34–37) allaqachon
 * o'zlashtirilgan bo'lishi kerak.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI: matnda aniq muddat, ulush miqdori
 * yoki foiz YOZILMAYDI — ular `lawRefs` orqali bazadagi JONLI
 * qonun matnidan keladi.
 *
 * ⚠️ Barcha `lawRefs` bazadan tekshirilgan.
 */

const { assembleLesson } = require("../assemble");

const SECTIONS = assembleLesson(
  "Meros huquqi",
  [
    "./01-asoslar",
    "./02-vasiyatnoma",
    "./03-qonun-boyicha",
    "./04-qabul-qilish",
    "./05-qarzlar-amaliyot",
  ],
  require,
);

module.exports = { SECTIONS };

"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  DARSLAR KUTUBXONASI — MODULLAR REYESTRI
 * ═══════════════════════════════════════════════════════════════════
 *
 * NIMA UCHUN QAYTA TASHKIL ETILDI
 * Avval barcha darslar BITTA `scripts/lessonLibrary.js` faylida edi
 * (19 dars, 2586 qator). Darslar soni 100 dan oshganda bu ishlamaydi:
 * bitta fayl o'n minglab qatorga aylanadi, unda kerakli darsni topish
 * qiyin va ikki kishi bir vaqtda tahrirlasa konflikt kafolatlangan.
 * Endi har MODUL alohida faylda va bu fayl ularni yig'adi.
 *
 * ⚠️ `libraryKey` — ENG MUHIM MAYDON. Dars bazada aynan shu kalit
 * bo'yicha topiladi (`seedLessonLibrary.js`), sarlavha bo'yicha EMAS.
 * Sabab: admin sarlavhani tahrirlashi mumkin; sarlavha bo'yicha
 * qidirilsa, skript darsni "yangi" deb hisoblab NUSXASINI yaratardi.
 * Shu sababli mavjud kalitlarni O'ZGARTIRISH TAQIQLANADI — o'zgartirsa
 * bazada yetim dublikat paydo bo'ladi.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI (butun kutubxona bo'ylab)
 * Dars MATNIDA aniq modda raqami, muddat, foiz yoki summa YOZILMAYDI.
 * Sabab: qonun tahriri o'zgarsa dars eskirib, foydalanuvchini
 * chalg'itadi — bu loyihaning asosiy qoidasiga zid. Matnda faqat
 * BARQAROR tamoyillar va JARAYON tushuntiriladi.
 *
 * Aniq modda `lawRefs: [{code, article}]` orqali beriladi va uning
 * matni so'rov vaqtida `LegalChunk` dan JONLI olinadi
 * (`routes/lessons.js` → `attachLawQuotes`). Ya'ni lex.uz'dan qonun
 * yangilanganda darsdagi iqtibos ham o'z-o'zidan yangilanadi.
 *
 * ⚠️ BARCHA `lawRefs` BAZADAN TEKSHIRILGAN — raqamlar taxmin
 * qilinmagan. Tekshiruv: `node scripts/verifyLessonRefs.js --library`
 * (0 xato bo'lishi shart, aks holda iqtibos dars sahifasida JIMGINA
 * ko'rinmay qoladi va xato sezilmasdan qolib ketadi).
 *
 * ── DARS TUZILMASI ─────────────────────────────────────────────────
 *   key            — barqaror `libraryKey`
 *   category       — modul id (MODULES dagi biri)
 *   level          — basic | mid | advanced (modul ichidagi o'quv o'rni)
 *   order          — modul ichidagi tartib (MODULE_ORDER + n)
 *   title, desc
 *   objectives[]   — "Ushbu darsdan keyin siz:" (aniq natijalar)
 *   practicalSteps[] — bilimni natijaga aylantiradigan qadamlar
 *   sections[]     — { heading, text, example, keyPoints[], warning, lawRefs[] }
 */

/* ── MODULLAR ────────────────────────────────────────────────────────
   `id` — bazada `Lesson.category` da saqlanadigan qiymat.

   ⚠️ NOM BU YERDA YO'Q — ataylab. Modul nomi frontend tarjima
   kalitidan olinadi (`lesson_mod_<id>`), chunki u ikki tilda kerak.
   Nom bazada saqlansa AI tarjimasiga tushardi: kvota sarflanardi va
   bir modul ruscha rejimda turlicha atalib qolardi. */
const MODULES = [
  { id: "constitution", order: 1000 },
  { id: "civil", order: 2000 },
  { id: "contracts", order: 3000 },
  { id: "family", order: 4000 },
  { id: "inheritance", order: 5000 },
  { id: "labor", order: 6000 },
  { id: "housing", order: 7000 },
  { id: "consumer", order: 8000 },
  { id: "tax", order: 9000 },
  { id: "administrative", order: 10000 },
  { id: "criminal", order: 11000 },
  { id: "process", order: 12000 },
  { id: "special", order: 13000 },
];

const MODULE_FILES = [
  "./01-konstitutsiya",
  "./02-fuqarolik",
  "./03-shartnomalar",
  "./04-oila",
  "./05-meros",
  "./06-mehnat",
  "./07-uy-joy",
  "./08-istemolchi",
  "./09-soliq",
  "./10-mamuriy",
  "./11-jinoyat",
  "./12-sud",
  "./13-maxsus",
];

/* Barcha modullardagi darslar bitta ro'yxatga yig'iladi. Tartib
   modul faylidagi `order` bo'yicha — modul fayli ichida darslar
   allaqachon to'g'ri ketma-ketlikda yozilgan. */
const NEW_LESSONS = MODULE_FILES.flatMap((f) => require(f).LESSONS);

/* ── HIMOYA: kalit takrorlanishi ─────────────────────────────────────
   Ikki modulda bir xil `key` bo'lsa, seed skripti ikkinchisini
   birinchisining USTIGA yozadi — ya'ni bitta dars butunlay yo'qoladi
   va buni sezish deyarli imkonsiz (xato chiqmaydi, dars shunchaki
   ro'yxatda yo'q). Shuning uchun modul yuklanishida darhol tekshiramiz. */
const seen = new Set();
const dupes = [];
for (const l of NEW_LESSONS) {
  if (seen.has(l.key)) dupes.push(l.key);
  seen.add(l.key);
}
if (dupes.length) {
  throw new Error(
    `Darslar kutubxonasida takroriy libraryKey: ${dupes.join(", ")}`,
  );
}

module.exports = { NEW_LESSONS, MODULES };

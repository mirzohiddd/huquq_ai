"use strict";
/**
 * DARSLAR KUTUBXONASINI BAZAGA YUKLASH (scripts/lessons/)
 *
 * ⚠️ MAVJUD DARSLARGA TEGILMAYDI. Skript faqat `scripts/lessons/`
 * dagi darslar bilan ishlaydi va ularni `importMeta.libraryKey`
 * bo'yicha topadi. Admin qo'lda qo'shgan yoki avvaldan mavjud 6 ta
 * dars (mehnat, oila, iste'molchi, meros, yer, jinoyat) bu skript
 * uchun ko'rinmaydi — ular `lessonContentData.js` + `upgradeLessons.js`
 * orqali boshqariladi.
 *
 * Nima uchun `title` emas, `libraryKey` bo'yicha qidiriladi: admin
 * sahifadan dars sarlavhasini tahrirlashi mumkin. Sarlavha bo'yicha
 * qidirilsa, tahrirdan keyin skript uni "yangi dars" deb hisoblab
 * NUSXASINI yaratib qo'yardi.
 *
 * Idempotent: qayta ishga tushirilsa nusxa yaratmaydi, mavjudini
 * yangilaydi.
 */
const { NEW_LESSONS } = require("./lessons");

/* ── ESKI 6 DARSNI MODULGA BIRIKTIRISH ────────────────────────────
   Bu darslarda `libraryKey` yo'q (ular boshqa skript bilan
   boshqariladi), lekin ular ham modul bo'yicha guruhlanishi kerak —
   aks holda sahifada "boshqa" bo'limida yolg'iz qolib ketardi.

   Sarlavha bo'yicha moslash ATAYLAB: bu darslarga `libraryKey`
   qo'shish ularni ikkita skript boshqaruviga tushirib qo'yardi.
   Faqat `category`/`level` yangilanadi, KONTENTGA TEGILMAYDI. */
const LEGACY_CATEGORIES = [
  { re: /mehnat/i, category: "labor", level: "basic" },
  { re: /oila/i, category: "family", level: "basic" },
  { re: /iste'?molchi/i, category: "consumer", level: "basic" },
  { re: /meros/i, category: "inheritance", level: "basic" },
  { re: /yer|ko'?chmas/i, category: "housing", level: "basic" },
  { re: /jinoiy|jinoyat/i, category: "criminal", level: "basic" },
];

function toDoc(tpl) {
  return {
    title: tpl.title,
    desc: tpl.desc,
    objectives: tpl.objectives || [],
    practicalSteps: tpl.practicalSteps || [],
    category: tpl.category || "",
    level: tpl.level || "basic",
    order: tpl.order,
    published: true,
    sourceType: "manual",
    importMeta: { libraryKey: tpl.key },
    sections: (tpl.sections || []).map((s) => ({
      heading: s.heading,
      level: 2,
      anchor: "",
      html: "",
      text: s.text,
      example: s.example || "",
      keyPoints: s.keyPoints || [],
      warning: s.warning || "",
      lawRefs: s.lawRefs || [],
    })),
  };
}

async function seedLessonLibrary() {
  const { Lesson } = require("../models");
  const report = [];

  for (const tpl of NEW_LESSONS) {
    const doc = toDoc(tpl);
    const existing = await Lesson.findOne({
      "importMeta.libraryKey": tpl.key,
    }).lean();

    if (existing) {
      await Lesson.updateOne({ _id: existing._id }, { $set: doc });
      report.push({ key: tpl.key, title: tpl.title, action: "yangilandi" });
    } else {
      await Lesson.create(doc);
      report.push({ key: tpl.key, title: tpl.title, action: "qo'shildi" });
    }
  }
  return report;
}

/**
 * Eski darslarga modul biriktiradi. Faqat `category` BO'SH bo'lgan
 * darslar yangilanadi — ya'ni admin qo'lda modul tanlagan bo'lsa,
 * uning tanlovi bosib ketilmaydi.
 */
async function categorizeLegacyLessons() {
  const { Lesson } = require("../models");
  const orphans = await Lesson.find({
    "importMeta.libraryKey": { $exists: false },
    $or: [{ category: "" }, { category: { $exists: false } }],
  })
    .select("title")
    .lean();

  const report = [];
  for (const lesson of orphans) {
    const hit = LEGACY_CATEGORIES.find((c) => c.re.test(lesson.title));
    if (!hit) continue;
    await Lesson.updateOne(
      { _id: lesson._id },
      { $set: { category: hit.category, level: hit.level } },
    );
    report.push({ title: lesson.title, category: hit.category });
  }
  return report;
}

module.exports = { seedLessonLibrary, categorizeLegacyLessons };

if (require.main === module) {
  require("dotenv").config();
  const mongoose = require("mongoose");
  (async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    const { Lesson } = require("../models");
    const before = await Lesson.countDocuments();

    const r = await seedLessonLibrary();
    const added = r.filter((x) => x.action === "qo'shildi").length;
    const updated = r.length - added;
    console.log(`  ➕ qo'shildi: ${added}\n  🔄 yangilandi: ${updated}`);

    const legacy = await categorizeLegacyLessons();
    legacy.forEach((x) => console.log(`  🏷  ${x.title} → ${x.category}`));

    const after = await Lesson.countDocuments();
    console.log(`\n  Darslar: ${before} → ${after}`);
    await mongoose.disconnect();
  })().catch((e) => {
    console.error("XATO:", e.message);
    process.exit(1);
  });
}

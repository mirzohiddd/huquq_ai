"use strict";
require("dotenv").config();
const path = require("path");
const { Lesson, Quiz } = require("../models");

/**
 * Birinchi marta ishga tushganda (kolleksiya bo'sh bo'lsa) frontend'dagi
 * mavjud statik Darslar/Testlar matnini (uz tili) bazaga ko'chiradi —
 * shunda admin panel orqali CRUD boshqaruviga o'tilganda foydalanuvchilar
 * oldin ko'rgan 6 ta dars / 4 ta test yo'qolmaydi.
 *
 * MUHIM: agar frontend manba fayli topilmasa (masalan backend alohida
 * deploy qilingan muhitda, frontend/ papkasi bo'lmasa) — xatolik
 * tashlamay, jim o'tkazib yuboriladi. Bu holatda admin panel orqali
 * darslar/testlarni qo'lda qo'shish kifoya.
 */
async function seedLessons() {
  const count = await Lesson.countDocuments();
  if (count > 0) return { skipped: true, count };

  const modPath = path.join(
    __dirname,
    "../../frontend/src/data/lessons.js",
  );
  const mod = await import(`file://${modPath}`);
  const docs = (mod.LESSONS?.uz || []).map((l, i) => ({
    title: l.title,
    desc: l.desc,
    videoUrl: "",
    sections: l.sections,
    order: i,
    published: true,
  }));
  if (!docs.length) return { seeded: 0 };
  await Lesson.insertMany(docs);
  return { seeded: docs.length };
}

async function seedTests() {
  const count = await Quiz.countDocuments();
  if (count > 0) return { skipped: true, count };

  const modPath = path.join(__dirname, "../../frontend/src/data/tests.js");
  const mod = await import(`file://${modPath}`);
  const docs = (mod.TESTS?.uz || []).map((t, i) => ({
    title: t.title,
    desc: t.desc,
    questions: t.questions,
    order: i,
    published: true,
  }));
  if (!docs.length) return { seeded: 0 };
  await Quiz.insertMany(docs);
  return { seeded: docs.length };
}

async function seedContent() {
  const result = { lessons: null, tests: null };
  try {
    result.lessons = await seedLessons();
  } catch (err) {
    console.warn(
      "Darslarni seed qilish o'tkazib yuborildi:",
      err.message,
    );
  }
  try {
    result.tests = await seedTests();
  } catch (err) {
    console.warn("Testlarni seed qilish o'tkazib yuborildi:", err.message);
  }
  return result;
}

module.exports = { seedContent };

// To'g'ridan-to'g'ri ishga tushirilsa (node scripts/seedContent.js)
if (require.main === module) {
  const mongoose = require("mongoose");
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(async () => {
      const result = await seedContent();
      console.log(JSON.stringify(result, null, 2));
      process.exit(0);
    })
    .catch((err) => {
      console.error("MongoDB ulanish xatosi:", err.message);
      process.exit(1);
    });
}

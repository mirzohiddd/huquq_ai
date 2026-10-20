"use strict";
/**
 * HAYOTIY TESTLARNI BAZAGA YOZISH (idempotent — sarlavha bo'yicha upsert).
 *
 * Ishlatish: node scripts/seedLifeTests.js
 *
 * ⚠️ Tartib (`order`) mavjud testlardan KEYIN qo'yiladi: bepul tarifda
 * birinchi N ta test ochiq (`testLimit`) — yangi testlar tepaga tushsa,
 * foydalanuvchilarning ochiq testi jimgina boshqasiga almashib qolardi.
 * Qayta ishga tushirilsa mavjud yozuvning tartibi o'zgarmaydi.
 */
require("dotenv").config();
const mongoose = require("mongoose");
const { Quiz } = require("../models");

const TESTS = [
  ...require("./lifeTests/labor-family"),
  ...require("./lifeTests/inherit-consumer"),
  ...require("./lifeTests/debt-justice"),
];

function validate(t) {
  for (const [i, q] of t.questions.entries()) {
    const at = `"${t.title}" #${i + 1}`;
    if (!q.situation || !q.q) throw new Error(`${at}: vaziyat yoki savol yo'q`);
    if (!Array.isArray(q.options) || q.options.length < 3) throw new Error(`${at}: variantlar kam`);
    if (!(q.correct >= 0 && q.correct < q.options.length)) throw new Error(`${at}: correct noto'g'ri`);
    if (!q.explain) throw new Error(`${at}: izoh yo'q`);
  }
}

async function main() {
  TESTS.forEach(validate);
  await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 20000 });
  const last = await Quiz.findOne().sort({ order: -1 }).select("order").lean();
  let order = (last?.order ?? 0) + 1;

  for (const t of TESTS) {
    const existing = await Quiz.findOne({ title: t.title }).select("order").lean();
    const doc = { ...t, kind: "life", published: true, order: existing ? existing.order : order++ };
    await Quiz.updateOne({ title: t.title }, { $set: doc }, { upsert: true, runValidators: true });
    console.log(`${existing ? "yangilandi" : "qo'shildi "}  ${t.title} (${t.questions.length} savol)`);
  }
  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});

"use strict";
/**
 * Mavjud darslarni kengaytirilgan kontent bilan yangilaydi
 * (scripts/lessonContentData.js).
 *
 * ⚠️ Faqat MOS KELGAN darslar yangilanadi (sarlavha bo'yicha). Boshqa
 * darslarga — masalan admin qo'lda qo'shgan yoki PDF'dan import
 * qilinganlarga — TEGILMAYDI.
 */
const { LESSONS } = require("./lessonContentData");

async function upgradeLessons() {
  const { Lesson } = require("../models");
  const all = await Lesson.find().lean();
  const report = [];

  for (const tpl of LESSONS) {
    const found = all.find((l) => tpl.match.test(l.title || ""));
    if (!found) {
      report.push({ match: String(tpl.match), status: "dars topilmadi" });
      continue;
    }
    const before = (found.sections || []).reduce(
      (n, s) => n + (s.html || s.text || "").length,
      0,
    );
    const after = tpl.sections.reduce(
      (n, s) =>
        n +
        s.text.length +
        (s.example || "").length +
        (s.keyPoints || []).join(" ").length +
        (s.warning || "").length,
      0,
    );

    await Lesson.updateOne(
      { _id: found._id },
      {
        $set: {
          desc: tpl.desc,
          objectives: tpl.objectives,
          practicalSteps: tpl.practicalSteps,
          order: tpl.order,
          sections: tpl.sections.map((s) => ({
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
        },
      },
    );
    report.push({
      title: found.title,
      sections: `${found.sections?.length || 0} → ${tpl.sections.length}`,
      chars: `${before} → ${after}`,
      grew: `${(after / Math.max(1, before)).toFixed(1)}×`,
    });
  }
  return report;
}

module.exports = { upgradeLessons };

if (require.main === module) {
  require("dotenv").config();
  const mongoose = require("mongoose");
  (async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    const r = await upgradeLessons();
    r.forEach((x) =>
      console.log(
        "  " +
          (x.status
            ? `⚠ ${x.match}: ${x.status}`
            : `✓ ${x.title.slice(0, 30).padEnd(32)} ${x.sections.padEnd(10)} ${x.chars.padEnd(16)} ${x.grew}`),
      ),
    );
    await mongoose.disconnect();
  })().catch((e) => {
    console.error("XATO:", e.message);
    process.exit(1);
  });
}

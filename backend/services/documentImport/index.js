"use strict";
/**
 * Hujjat import qilish tizimi uchun yagona kirish nuqtasi.
 *
 * Admin PDF (kelajakda DOCX/PPTX) yuklaganda shu funksiya chaqiriladi.
 * Original fayl HECH QACHON diskka yozilmaydi yoki foydalanuvchiga
 * qaytarilmaydi — faqat xotirada parslanadi va natija (strukturaviy
 * matn) qaytarilgach, chaqiruvchi tomonidan tashlab yuboriladi.
 */
const { resolveParser } = require("./registry");

async function importDocument({ buffer, mimetype, filename }) {
  const parser = resolveParser(mimetype, filename);
  const warnings = [];
  const result = await parser(buffer, warnings);
  return {
    title: result.title,
    sections: result.sections,
    meta: result.meta,
    warnings,
  };
}

module.exports = { importDocument };

"use strict";
const { parsePdf } = require("./parsers/pdf");

/**
 * Fayl kengaytmasi -> parser funksiyasi.
 *
 * KELAJAK UCHUN: DOCX yoki PPTX qo'llab-quvvatlashni qo'shish uchun
 * shu yerga yangi yozuv qo'shish kifoya, masalan:
 *
 *   const { parseDocx } = require("./parsers/docx");
 *   REGISTRY.docx = parseDocx;
 *
 * Har bir parser funksiyasi bir xil kontrakt bilan ishlashi kerak:
 *   async function parse(buffer, warnings) ->
 *     { title, sections: [{heading, level, anchor, html}], meta }
 * Boshqa hech qayerga (route, model, frontend) tegishga hojat yo'q.
 */
const REGISTRY = {
  pdf: parsePdf,
};

const MIME_TO_EXT = {
  "application/pdf": "pdf",
};

function resolveParser(mimetype, filename) {
  let ext = MIME_TO_EXT[mimetype];
  if (!ext) {
    const m = /\.([a-z0-9]+)$/i.exec(filename || "");
    ext = m ? m[1].toLowerCase() : null;
  }
  const parser = ext && REGISTRY[ext];
  if (!parser) {
    const supported = Object.keys(REGISTRY).join(", ");
    throw new Error(`Qo'llab-quvvatlanmaydigan fayl turi. Hozircha faqat: ${supported}`);
  }
  return parser;
}

module.exports = { resolveParser, REGISTRY };

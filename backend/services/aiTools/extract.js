"use strict";
/**
 * AI VOSITALAR — FAYLDAN MATN AJRATISH (hujjat va rasm tahlili uchun).
 *
 *   • PDF  — pdfjs-dist (allaqachon loyihada, dars importida ishlatiladi);
 *   • TXT  — to'g'ridan-to'g'ri;
 *   • Rasm — Gemini vision faqat MATNNI O'QISH (OCR) uchun ishlatiladi.
 *     Huquqiy tahlilning o'zi baribir lokal (docAnalysis.js) — model
 *     xulosa yozmaydi, shuning uchun hech narsa o'ylab topilmaydi.
 *     Kalit yoki kvota bo'lmasa — halol xato qaytadi.
 */
const MAX_PAGES = 60;
const MAX_CHARS = 60000;

async function pdfText(buffer) {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const doc = await pdfjsLib.getDocument({
    data: new Uint8Array(buffer),
    disableWorker: true,
    useSystemFonts: true,
    isEvalSupported: false,
  }).promise;
  const pages = Math.min(doc.numPages, MAX_PAGES);
  const out = [];
  for (let p = 1; p <= pages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    // Qatorlar: y koordinatasi o'zgarganda yangi qator
    let lastY = null;
    let line = "";
    for (const it of content.items) {
      const y = Math.round(it.transform?.[5] ?? 0);
      if (lastY !== null && Math.abs(y - lastY) > 2) {
        out.push(line.trim());
        line = "";
      }
      line += it.str + (it.hasEOL ? "\n" : "");
      lastY = y;
    }
    if (line.trim()) out.push(line.trim());
    out.push("");
    page.cleanup();
  }
  const total = doc.numPages;
  await doc.destroy();
  return { text: out.join("\n").replace(/\n{3,}/g, "\n\n").trim(), pages: total };
}

let gemini = null;
function geminiClient() {
  if (gemini || !process.env.GEMINI_API_KEY) return gemini;
  const { GoogleGenAI } = require("@google/genai");
  gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  return gemini;
}

const OCR_PROMPT =
  "Rasmdagi BARCHA matnni so'zma-so'z, asl tilida va asl tartibida ko'chirib yoz. " +
  "Hech qanday izoh, xulosa yoki tarjima qo'shma. Matn bo'lmasa, rasmda nima tasvirlanganini " +
  "bir-ikki gap bilan neytral tasvirla va boshiga «[MATN YO'Q]» deb yoz.";

async function imageText(buffer, mimeType) {
  const client = geminiClient();
  if (!client) {
    const e = new Error("OCR_UNAVAILABLE");
    e.code = "OCR_UNAVAILABLE";
    throw e;
  }
  const r = await client.models.generateContent({
    model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
    config: { temperature: 0, maxOutputTokens: 4000 },
    contents: [
      {
        role: "user",
        parts: [{ inlineData: { mimeType, data: buffer.toString("base64") } }, { text: OCR_PROMPT }],
      },
    ],
  });
  const text = (r.text || "").trim();
  const noText = text.startsWith("[MATN YO'Q]");
  return { text: noText ? "" : text, description: noText ? text.replace("[MATN YO'Q]", "").trim() : "" };
}

/**
 * @param {{ buffer: Buffer, mimetype: string, originalname: string }} file
 * @returns {Promise<{ text: string, pages?: number, kind: "pdf"|"text"|"image", description?: string }>}
 */
async function extractText(file) {
  const name = (file.originalname || "").toLowerCase();
  if (file.mimetype === "application/pdf" || name.endsWith(".pdf")) {
    const r = await pdfText(file.buffer);
    return { kind: "pdf", text: r.text.slice(0, MAX_CHARS), pages: r.pages };
  }
  if (file.mimetype.startsWith("text/") || name.endsWith(".txt") || name.endsWith(".md")) {
    return { kind: "text", text: file.buffer.toString("utf8").slice(0, MAX_CHARS) };
  }
  if (file.mimetype.startsWith("image/")) {
    const r = await imageText(file.buffer, file.mimetype);
    return { kind: "image", text: r.text.slice(0, MAX_CHARS), description: r.description };
  }
  const e = new Error("UNSUPPORTED");
  e.code = "UNSUPPORTED";
  throw e;
}

module.exports = { extractText };

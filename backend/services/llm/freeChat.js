"use strict";
/**
 * BEPUL LLM ZANJIRI: Gemini → Groq (2026-11-14).
 *
 * Avval zanjirda faqat Gemini bor edi: u 429/timeout bersa foydalanuvchi
 * "mos modda topilmadi" degan lokal shablonni olardi. Endi ikkinchi
 * provayder bor — biri yiqilsa ikkinchisi javob beradi. Ikkalasi ham
 * yiqilsa chaqiruvchi (freeAi.js / rag/understand.js) o'z zaxirasiga o'tadi.
 */
const { within, slice } = require("../rag/deadline");
const { geminiChat, geminiReady } = require("./gemini");
const { groqChat, groqReady } = require("./groq");

function freeAiReady() {
  return geminiReady() || groqReady();
}

/**
 * @param {{ messages: object[], maxOutputTokens?: number, tier?: string, json?: boolean,
 *           thinking?: number, temperature?: number, timeoutMs?: number, kind?: string }} opts
 * @returns {Promise<{ text: string, model: string, provider: string }>}
 */
async function freeChat(opts) {
  let lastErr = new Error("Bepul AI provayderi mavjud emas");
  const dl = opts.deadline;
  if (geminiReady()) {
    try {
      // Gemini qolgan vaqtning ko'pi bilan 65% ini oladi — Groq'qa ham vaqt qolsin
      return { ...(await within(geminiChat(opts), groqReady() ? slice(dl, 0.65) : dl, "Gemini")), provider: "gemini" };
    } catch (err) {
      lastErr = err;
    }
  }
  if (groqReady()) {
    try {
      return { ...(await within(groqChat(opts), dl, "Groq")), provider: "groq" };
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

module.exports = { freeChat, freeAiReady };

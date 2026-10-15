"use strict";
/**
 * Ovoz yaratish (TTS) — javobga audio biriktiradi.
 * Asosiy: ElevenLabs (odamga o'xshash), zaxira: Microsoft Neural (bepul),
 * tartib `services/textToSpeech.js` da. Ovoz bo'lmasa ham javob matni
 * qaytadi — foydalanuvchi baribir o'qiy oladi (`audio: null`).
 */
const { textToSpeech } = require("../textToSpeech");
const { getCached, setCached } = require("../ttsCache");

async function withVoice(result, lang = "uz") {
  const text = String(result.speech || "").slice(0, 1400);
  if (!text.trim()) return { ...result, audio: null };
  const key = `${result.emotion || "neutral"}|${text}`;
  try {
    let hit = getCached(key, lang);
    if (!hit) {
      hit = await textToSpeech(text, lang, { emotion: result.emotion });
      if (hit) setCached(key, lang, hit.buffer, hit.contentType);
    }
    if (!hit) return { ...result, audio: null };
    return { ...result, audio: Buffer.from(hit.buffer).toString("base64"), mime: hit.contentType || "audio/mpeg" };
  } catch (err) {
    console.warn("Ovozli javob TTS xatosi:", err.message);
    return { ...result, audio: null };
  }
}

module.exports = { withVoice };

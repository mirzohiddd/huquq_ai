"use strict";
/**
 * SO'ROV KONTEKSTI (AsyncLocalStorage) — "bu AI xarajati KIMGA tegishli?"
 *
 * Muammo: STT/TTS va AI chaqiruvlari chuqur servis funksiyalarida
 * (speechToText, textToSpeech, getLegalAdvice) bajariladi va ularning
 * ko'pchiligi userId ni bilmaydi. Har bir chaqiruvga yangi argument
 * qo'shish 10+ faylni o'zgartirishni talab qilardi va ishlab turgan
 * imzolarni buzardi. Kontekst esa so'rov boshida bir marta o'rnatiladi va
 * barcha `await` zanjiri bo'ylab o'zi uzatiladi.
 *
 * Kontekst bo'lmagan joyda (fon vazifalari) xarajat baribir yoziladi —
 * userId = null bilan, ya'ni hisobotdan yo'qolmaydi.
 */
const { AsyncLocalStorage } = require("async_hooks");
const jwt = require("jsonwebtoken");
const { getClientIp } = require("../../middleware/security");

const store = new AsyncLocalStorage();

/** Joriy kontekst: { userId, channel, kind } yoki bo'sh obyekt. */
function ctx() {
  return store.getStore() || {};
}

/** Telegram kabi HTTP'dan tashqari yo'llar uchun. */
function runWith(data, fn) {
  return store.run({ ...ctx(), ...data }, fn);
}

/* JWT'ni FAQAT "kim" ekanini bilish uchun o'qiydi — ruxsat berish uchun
   EMAS (bu ish guard'larda). Yaroqsiz token jim e'tiborsiz qoldiriladi. */
function userIdFrom(req) {
  const h = req.headers.authorization || "";
  if (!h.startsWith("Bearer ")) return null;
  try {
    const d = jwt.verify(h.slice(7), process.env.JWT_SECRET, { algorithms: ["HS256"] });
    return d.type === "user" ? String(d.id) : null;
  } catch {
    return null;
  }
}

/** Express middleware — server.js da route'lardan OLDIN ulanadi. */
function contextMiddleware(req, res, next) {
  const voice = req.path.startsWith("/api/voice");
  const mobile = req.headers["x-app-platform"] === "mobile" || req.path === "/api/chat/send";
  store.run(
    {
      userId: userIdFrom(req),
      kind: voice ? "voice" : "chat",
      channel: voice ? "voice" : mobile ? "mobile" : "web",
      ip: getClientIp(req), // mehmon uchun daqiqalik chegara kaliti
    },
    next,
  );
}

module.exports = { ctx, runWith, contextMiddleware };

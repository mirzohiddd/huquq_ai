"use strict";
/**
 * TTS keshi va suiiste'moldan himoya — "Eshitish" tugmasi uchun.
 *
 * NIMA UCHUN KERAK: bitta javobni ovozga aylantirish 3-5 soniya vaqt
 * va provayder kvotasini oladi. Foydalanuvchi esa bitta javobni
 * qayta-qayta tinglashi mumkin (bu tabiiy — matnni tushunmasa
 * qaytadan eshitadi). Keshsiz har bosish yangi so'rov bo'lardi.
 *
 * Kesh XOTIRADA saqlanadi (bazada emas): audio katta, umri qisqa va
 * server qayta ishga tushganda yo'qolishi muammo emas — eng yomon
 * holat qayta sintez qilinadi.
 */

const crypto = require("crypto");

// ── Kesh chegaralari ──────────────────────────────────────────
/* Render bepul tarifida 512 MB RAM bor, shuning uchun chegara
   ataylab kichik. Bitta javob ≈ 100-400 KB (Edge TTS, mp3). */
const MAX_ENTRIES = 200;
const MAX_BYTES = 30 * 1024 * 1024; // 30 MB
const TTL_MS = 6 * 60 * 60 * 1000; // 6 soat

const cache = new Map(); // key → { buffer, contentType, lang, at }
let totalBytes = 0;

function keyOf(text, lang) {
  return crypto
    .createHash("sha1")
    .update(`${lang}::${text}`)
    .digest("hex");
}

function dropOldest() {
  // Map kirish tartibini saqlaydi — birinchi kalit eng eskisi
  const first = cache.keys().next();
  if (first.done) return false;
  const entry = cache.get(first.value);
  totalBytes -= entry.buffer.length;
  cache.delete(first.value);
  return true;
}

function getCached(text, lang) {
  const key = keyOf(text, lang);
  const hit = cache.get(key);
  if (!hit) return null;

  if (Date.now() - hit.at > TTL_MS) {
    totalBytes -= hit.buffer.length;
    cache.delete(key);
    return null;
  }

  /* Qayta ishlatilgani uchun "eng yangi" holatiga ko'chiramiz —
     shunda tez-tez tinglanadigan javob kesh to'lganda o'chib
     ketmaydi (oddiy LRU). */
  cache.delete(key);
  cache.set(key, hit);
  return hit;
}

function setCached(text, lang, buffer, contentType) {
  // Juda katta audio keshni yolg'iz o'zi to'ldirib qo'ymasin
  if (buffer.length > MAX_BYTES / 4) return;

  const key = keyOf(text, lang);
  const existing = cache.get(key);
  if (existing) totalBytes -= existing.buffer.length;

  cache.set(key, { buffer, contentType, lang, at: Date.now() });
  totalBytes += buffer.length;

  while ((cache.size > MAX_ENTRIES || totalBytes > MAX_BYTES) && dropOldest());
}

// ── Suiiste'moldan himoya ─────────────────────────────────────
/**
 * ⚠️ NIMA UCHUN `voiceLimitGuard` ISHLATILMADI: u kunlik ovozli CHAT
 * limitiga tegishli va juda tor (bepul tarifda 2 ta/kun). U yerda
 * bitta so'rov = STT + AI + TTS, ya'ni qimmat. "Eshitish" esa TAYYOR
 * javobni o'qib berish — faqat TTS. Agar u kunlik ovoz limitini
 * yesa, bepul foydalanuvchi kuniga atigi 2 marta tinglay olardi va
 * funksiya amalda ishlamas edi.
 *
 * Shuning uchun bu yerda alohida, ancha kengroq soatlik chegara bor.
 * U kvotani emas, faqat SUIISTE'MOLNI to'xtatadi. Keshdan kelgan
 * javob umuman hisoblanmaydi — chunki u hech qanday resurs sarflamaydi.
 */
const RATE_LIMIT = 40; // soatiga yangi sintez
const RATE_WINDOW_MS = 60 * 60 * 1000;
const hits = new Map(); // identity → number[] (vaqt belgilari)

function takeToken(identity) {
  const now = Date.now();
  const list = (hits.get(identity) || []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  );

  if (list.length >= RATE_LIMIT) {
    hits.set(identity, list);
    return false;
  }

  list.push(now);
  hits.set(identity, list);

  /* Tashlandiq yozuvlarni tozalash — aks holda Map cheksiz o'sadi
     (har bir mehmon IP'si abadiy qolib ketardi). */
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (!v.length || now - v[v.length - 1] > RATE_WINDOW_MS) hits.delete(k);
    }
  }

  return true;
}

function cacheStats() {
  return { entries: cache.size, bytes: totalBytes };
}

module.exports = { getCached, setCached, takeToken, cacheStats, keyOf };

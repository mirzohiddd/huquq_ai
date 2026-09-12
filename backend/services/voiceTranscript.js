"use strict";
/**
 * Ovoz transkripsiyasini tuzatish (ASR repair)
 *
 * ⚠️ NIMA UCHUN KERAK (2026-08-24): Whisper o'zbek tilida ko'p xato
 * qiladi va buzilgan matn butun zanjirni ishdan chiqaradi. Haqiqiy
 * o'lchov:
 *   aytilgan  → "Ajrashsak bolam kim bilan qoladi?"
 *   Whisper   → "Ajirashsak balam kim bilam qalad."
 * Bu matnda `isLegalQuestion()` ning birorta ham naqshi mos kelmaydi
 * ("ajra…" o'rniga "ajira…", "bola" o'rniga "balam") — natijada
 * foydalanuvchi savoliga javob o'rniga "Men faqat huquqiy savollarga
 * javob beraman" degan rad javobini olardi. Buzilgan matn RAG
 * qidiruviga ham yaroqsiz: mos modda topilmaydi.
 *
 * Shu sabab matn AI ga berilishidan OLDIN tuzatiladi. Tuzatish
 * MAJBURIY emas — xato, kechikish yoki shubhali natijada ASL matn
 * qaytadi, ya'ni ovoz zanjiri hech qachon shu qadam tufayli
 * to'xtamaydi.
 */

const { askStructured, isLegalQuestion } = require("./legalAI");

const REPAIR_TIMEOUT_MS = 6000;
const MAX_LEN = 600;

const SYSTEM = {
  uz: `Sen nutqni matnga o'giruvchi tizimning XATOLARINI TUZATUVCHISAN.
Senga o'zbek tilidagi audio transkripsiyasi beriladi. Unda tanish xatolar bo'ladi:
harflar almashib ketgan, so'zlar noto'g'ri yozilgan, qo'shimchalar buzilgan.
VAZIFANG: matnni to'g'ri o'zbek tilida (lotin alifbosida) qayta yozish.

QAT'IY QOIDALAR:
1. FAQAT tuzatilgan matnni yoz. Izoh, sarlavha yoki qo'shtirnoq YOZMA.
2. SAVOLGA JAVOB BERMA — faqat savolning O'ZINI to'g'rila.
3. Yangi ma'no, yangi so'z yoki yangi jumla QO'SHMA.
4. Matn tushunarsiz bo'lsa — o'zgartirmasdan qaytar.`,
  ru: `Ты ИСПРАВЛЯЕШЬ ОШИБКИ системы распознавания речи.
Тебе дают расшифровку аудио на русском языке с типичными ошибками распознавания.
ЗАДАЧА: переписать текст правильно по-русски.

СТРОГИЕ ПРАВИЛА:
1. Выведи ТОЛЬКО исправленный текст. Без пояснений, заголовков и кавычек.
2. НЕ ОТВЕЧАЙ на вопрос — исправь САМ вопрос.
3. НЕ добавляй новый смысл, слова или предложения.
4. Если текст непонятен — верни его без изменений.`,
};

/* Yozuv mos kelmasligi — eng ishonchli "buzilgan" belgisi.
   O'zbekcha javobda kirill/arab yozuvi (yoki ruschada lotin) paydo
   bo'lsa, Whisper tilni noto'g'ri tanigan. */
function scriptMismatch(text, lang) {
  if (/[؀-ۿ԰-֏一-鿿]/.test(text)) return true;
  const cyr = (text.match(/[Ѐ-ӿ]/g) || []).length;
  const lat = (text.match(/[A-Za-z]/g) || []).length;
  return lang === "ru" ? lat > cyr : cyr > lat;
}

/* O'zbek lotin alifbosida bu harflar YO'Q. Ular chiqsa — Whisper
   o'zbekchani turk/ozarbayjon deb o'qigan ("Içtən asasiz boshat"). */
const FOREIGN_DIACRITICS = /[əƏıİçÇşŞğĞäÄöÖüÜñÑ]/;

function looksGarbled(text, lang) {
  if (scriptMismatch(text, lang)) return true;
  return lang !== "ru" && FOREIGN_DIACRITICS.test(text);
}

/* Tuzatilgan matn ISHONCHLI bo'lgandagina qabul qilinadi. Bepul
   modellar ba'zan savolga javob berib yuboradi yoki o'zidan gap
   qo'shadi — bunday natija asl matndan ham yomonroq bo'lardi. */
function isTrustworthy(original, repaired, lang) {
  if (!repaired) return false;
  if (repaired.length > MAX_LEN) return false;
  if (repaired.split("\n").filter((l) => l.trim()).length > 2) return false;
  const ratio = repaired.length / Math.max(original.length, 1);
  if (ratio < 0.5 || ratio > 2.2) return false;
  return !scriptMismatch(repaired, lang);
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms)),
  ]);
}

/**
 * @param {string} text  Whisper qaytargan matn
 * @param {string} lang  "uz" | "ru"
 * @returns {Promise<{text: string, repaired: boolean}>}
 */
async function repairTranscript(text, lang = "uz") {
  const original = String(text || "").trim();
  if (original.length < 3) return { text: original, repaired: false };

  /* TEZ YO'L: matn allaqachon toza va huquqiy savol sifatida tanilgan
     bo'lsa — AI ga umuman borilmaydi. Bu ovoz javobini bir soniyaga
     tezlashtiradi va keraksiz o'zgartirish xavfini yo'q qiladi. */
  if (!looksGarbled(original, lang) && isLegalQuestion(original)) {
    return { text: original, repaired: false };
  }

  try {
    const out = await withTimeout(
      askStructured({
        system: SYSTEM[lang] || SYSTEM.uz,
        user: original.slice(0, MAX_LEN),
      }),
      REPAIR_TIMEOUT_MS,
    );
    const cleaned = String(out || "")
      .trim()
      .replace(/^["'«»„“]+|["'«»„“]+$/g, "")
      .trim();
    if (isTrustworthy(original, cleaned, lang)) {
      return { text: cleaned, repaired: cleaned !== original };
    }
    console.warn("Transkripsiya tuzatilmadi (ishonchsiz natija)");
  } catch (err) {
    console.warn("Transkripsiya tuzatish xatosi:", err.message);
  }
  return { text: original, repaired: false };
}

module.exports = { repairTranscript, looksGarbled };

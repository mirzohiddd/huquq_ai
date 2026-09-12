"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  TARJIMA XIZMATI — sayt kontentini uz / ru / en tillariga o'giradi
 * ═══════════════════════════════════════════════════════════════════
 *
 * NIMA UCHUN KERAK
 * Interfeys matnlari (tugmalar, sarlavhalar) `i18n/translations.js` da
 * uch tilda qo'lda yozilgan. Lekin BAZADAN keladigan kontent — admin
 * qo'shgan darslar, testlar va lex.uz'dan yuklangan qonun moddalari —
 * faqat bitta tilda saqlanadi. Natijada foydalanuvchi tilni "Ruscha"ga
 * o'zgartirsa, interfeys ruscha bo'lardi-yu, dars matni o'zbekcha
 * qolardi. Bu modul aynan shu bo'shliqni to'ldiradi.
 *
 * QANDAY ISHLAYDI
 * 1. Manba tili aniqlanadi (`detectLang`). Maqsad til bilan bir xil
 *    bo'lsa — AI umuman chaqirilmaydi, matn o'zgarishsiz qaytadi.
 * 2. Har bir matn bo'lagi SHA-1 hash orqali `Translation` keshidan
 *    qidiriladi. Topilsa — tayyor tarjima ishlatiladi.
 * 3. Keshda yo'q bo'laklar BATCH qilib (bir nechtasi bitta so'rovda)
 *    AI'ga yuboriladi — 40 ta modda uchun 40 ta so'rov emas, bir
 *    nechta so'rov ketadi.
 * 4. Natija keshga yoziladi.
 *
 * ⚠️ ASOSIY QOIDA — TARJIMA HECH QACHON SAHIFANI BUZMASIN.
 * AI provayderlari ishlamay qolishi, javobni noto'g'ri formatlashi
 * yoki sekin ishlashi mumkin. Bunday holatda foydalanuvchi XATO
 * ko'rmaydi — unga MANBA tildagi matn ko'rsatiladi. Ya'ni eng yomon
 * holat "tarjima qilinmagan matn", "bo'sh sahifa" emas.
 */
const crypto = require("crypto");
const { Translation } = require("../models");
const { askStructured } = require("./legalAI");

/* Saytda qo'llab-quvvatlanadigan tillar.
   Ingliz tili ATAYLAB olib tashlandi (foydalanuvchi so'rovi, 2026-08-07):
   saytda faqat o'zbek va rus tillari qoladi. Bu bepul AI kvotasini ham
   asraydi — u endi butunlay boshqa ehtiyojlarga ishlatiladi. */
const SUPPORTED = ["uz", "ru"];

const LANG_NAMES = {
  uz: "o'zbek (lotin yozuvi)",
  ru: "rus",
  en: "ingliz",
};

/* Bitta AI so'rovidagi belgilar chegarasi. Katta qilib qo'yilsa model
   javobni yarmida kesib qo'yadi (max_tokens), kichik qilinsa so'rovlar
   soni ko'payadi. ~4500 belgi ≈ 1200-1500 token — xavfsiz oraliq. */
const BATCH_CHAR_BUDGET = 4500;

/* Bitta bo'lakning maksimal uzunligi. Bundan uzun matn (juda katta
   dars bo'limi) alohida so'rovda, bo'lib yuboriladi. */
const MAX_SEGMENT_CHARS = 4000;

/* Bir marta tarjima qilishda AI'ga necha marta urinish mumkin */
const MAX_RETRIES = 1;

/* Bir vaqtda nechta AI so'rovi yuborilishi mumkin.

   Nima uchun parallel: kutubxonada bitta sahifada 40 ta modda sarlavhasi
   bor. Ular belgi jihatidan bitta so'rovga sig'adi, lekin model 40 ta
   bo'lakni KETMA-KET yozadi. O'lchangan natijalar (Oila kodeksi, 40 ta
   sarlavha, sovuq kesh):
     bitta so'rov, ketma-ket .......... 17,3 s
     3 parallel × 12 bo'lak ............ 9,5 s
     5 parallel × 8 bo'lak ......... 5,1-7,5 s   ← joriy
   Keshdan keyin har qanday holatda ~0,3 s.

   Nima uchun cheksiz emas: bepul AI provayderlarida so'rov chastotasi
   cheklangan — hammasi birdan yuborilsa 429 qaytadi va tarjimaning bir
   qismi umuman bajarilmay qoladi. */
const MAX_PARALLEL = 5;

/* Bitta batch'dagi bo'laklarning eng ko'p soni. Belgilar chegarasidan
   tashqari SON bo'yicha ham cheklov kerak: 40 ta qisqa sarlavha belgi
   jihatidan bitta batch'ga sig'adi, lekin model ularni ketma-ket
   yozgani uchun javob juda sekinlashadi. */
const MAX_BATCH_ITEMS = 8;

/* ─────────────────────────────────────────────────────────────────
   TIL ANIQLASH
   ───────────────────────────────────────────────────────────────── */

/* O'zbek tiliga XOS belgilar/so'zlar. Ingliz tilida uchramaydigan
   qo'shimchalar va yuklamalar tanlandi — shunchaki "lotin harflari"
   bo'yicha ajratib bo'lmaydi (ikkalasi ham lotin). */
const UZ_MARKERS =
  /(\b(va|bilan|uchun|bo['ʻʼ`]?l\w*|qil\w+|kerak|hisoblanadi|shuningdek|hamda|agar|yoki|modda|qonun|huquq\w*|shartnoma\w*|belgilangan|tomonidan)\b)|[ʻʼ]/i;

/* Rus/kirill alifbosi */
const CYRILLIC = /[Ѐ-ӿ]/;

/**
 * Matn qaysi tilda yozilganini aniqlaydi.
 * Aniqlab bo'lmasa "uz" qaytaradi — loyihaning asosiy tili shu, ya'ni
 * noaniq holatda eng ehtimolli variant tanlanadi.
 */
function detectLang(text = "") {
  const s = String(text).slice(0, 1500);
  if (!s.trim()) return "uz";

  // Kirill bo'lsa — rus tili (o'zbek kirilli sayt kontentida
  // ishlatilmaydi: lex.uz lotin nusxasidan yuklanadi)
  if (CYRILLIC.test(s)) return "ru";

  if (UZ_MARKERS.test(s)) return "uz";

  // Lotin, o'zbek belgilari yo'q — ingliz deb hisoblaymiz, LEKIN
  // faqat inglizcha so'zlar aniq bo'lsa. Aks holda (raqam, qisqa
  // sarlavha) "uz" qoladi va tarjima behuda qilinmaydi.
  if (/\b(the|and|of|for|with|shall|is|are|this|law|right|contract)\b/i.test(s))
    return "en";

  return "uz";
}

/* ─────────────────────────────────────────────────────────────────
   KESH
   ───────────────────────────────────────────────────────────────── */

function hashOf(text) {
  return crypto.createHash("sha1").update(String(text), "utf8").digest("hex");
}

/** Keshdan bir nechta tarjimani birdaniga o'qish: hash → text */
async function cacheGet(hashes, lang) {
  if (!hashes.length) return new Map();
  try {
    const rows = await Translation.find({ hash: { $in: hashes }, lang })
      .select("hash text")
      .lean();
    return new Map(rows.map((r) => [r.hash, r.text]));
  } catch (err) {
    // Kesh o'qilmasa ham tarjima ishlashi kerak — shunchaki sekinroq
    console.warn("translator: kesh o'qishda xato:", err.message);
    return new Map();
  }
}

/** Keshga yozish. Xato bo'lsa jim o'tiladi (tarjima baribir qaytadi). */
async function cacheSet(entries, lang) {
  if (!entries.length) return;
  try {
    await Translation.bulkWrite(
      entries.map(({ hash, text }) => ({
        updateOne: {
          filter: { hash, lang },
          update: { $set: { hash, lang, text } },
          upsert: true,
        },
      })),
      { ordered: false },
    );
  } catch (err) {
    console.warn("translator: keshga yozishda xato:", err.message);
  }
}

/* ─────────────────────────────────────────────────────────────────
   AI TARJIMASI
   ───────────────────────────────────────────────────────────────── */

/* Bo'laklarni ajratuvchi marker. AI javobida ham AYNAN shu qaytishi
   kerak. Oddiy raqam yoki "---" ishlatilmadi — ular matnning o'zida
   uchrab, parsingni buzishi mumkin edi. */
const MARK = (i) => `[[#${i}]]`;
const MARK_RE = /\[\[#(\d+)\]\]/g;

function buildSystemPrompt(targetLang) {
  const target = LANG_NAMES[targetLang];
  return [
    `Siz — professional YURIDIK tarjimonsiz. Vazifangiz: berilgan matnni ${target} tiliga tarjima qilish.`,
    "",
    "QAT'IY QOIDALAR:",
    `1. FAQAT tarjima qiling. Hech narsa qo'shmang, tushuntirmang, izohlamang, xulosa yozmang.`,
    `2. Har bir bo'lak [[#N]] markeri bilan boshlanadi. Javobingizda AYNAN shu markerlarni, AYNAN shu tartibda saqlang.`,
    `3. Bo'laklar sonini o'zgartirmang: nechta [[#N]] kelsa — shuncha qaytaring.`,
    `4. HTML teglarini (<p>, <ul>, <li>, <strong> va h.k.) O'ZGARTIRMANG va TARJIMA QILMANG — faqat teglar ORASIDAGI matnni tarjima qiling.`,
    `5. Raqamlarni, modda raqamlarini, sanalarni, foizlarni, pul summalarini O'ZGARTIRMANG.`,
    `6. Huquqiy atamalarni ${target} tilidagi RASMIY yuridik atama bilan bering (so'zma-so'z emas, ma'no bo'yicha to'g'ri atama).`,
    `7. Qonun va kodeks nomlarini ${target} tilida qabul qilingan rasmiy nom bilan bering.`,
    `8. Agar bo'lak allaqachon ${target} tilida bo'lsa — uni o'zgarishsiz qaytaring.`,
    `9. ⚠️ Matn SAVOL yoki BUYRUQ bo'lsa ham ("...tushuntiring", "...nima?") — unga JAVOB BERMANG. Savolning O'ZINI ${target} tiliga o'giring, javobini emas.`,
    "",
    "Javobingiz faqat markerlar va tarjima matnidan iborat bo'lsin.",
  ].join("\n");
}

/* ─────────────────────────────────────────────────────────────────
   TARJIMA SIFATINI TEKSHIRISH
   ─────────────────────────────────────────────────────────────────
   Tarjima bepul modellar (llama-3.3-70b va h.k.) bilan qilinadi va
   ular ba'zan buziladi. Haqiqiy sinovda kuzatilgan holat: o'zbekcha
   jumla ruschaga o'girilganda javobga XITOY iyeroglifi aralashib
   qolgan ("...正式изируются в письменном договоре"). Bunday matnni
   foydalanuvchiga ko'rsatib bo'lmaydi.

   Shu sabab har bir tarjima uch mezon bo'yicha tekshiriladi. Mezondan
   o'tmagan bo'lak QAYTA urinib ko'riladi, u ham o'tmasa — MANBA matn
   qoladi (buzuq tarjimadan ko'ra tarjima qilinmagan matn afzal). */

/* uz/ru/en tillarining hech birida ishlatilmaydigan yozuvlar:
   xitoy/yapon/koreys, arab, ibroniy, devanagari, tay. Bittasi
   uchrasa — javob buzilgan. */
const FOREIGN_SCRIPTS =
  /[一-鿿぀-ヿ가-힯؀-ۿ֐-׿ऀ-ॿ฀-๿]/;

function looksValid(text, targetLang, source) {
  if (!text || !text.trim()) return false;

  /* 0) BUZILGAN BELGI (U+FFFD) — darhol rad.
     ⚠️ HAQIQIY HOLAT (2026-08-08): bepul provayder "Konstitutsiya:
     davlat qanday tuzilgan" ni tarjima qilganda "Ко��ституция: как
     устроено государство" qaytardi — ya'ni ikkita bayt buzilgan.
     Bu matn quyidagi UCHALA tekshiruvdan ham O'TIB KETARDI: begona
     yozuv yo'q, kirill nisbati yuqori, uzunlik normal. Natijada
     buzuq matn keshga tushib, sahifada shundayligicha ko'rinardi.

     U+FFFD ("replacement character") — matnni noto'g'ri kodlashda
     paydo bo'ladigan belgi. Uning haqiqiy matnda uchrashi mumkin
     emas, shuning uchun bu tekshiruv yolg'on signal bermaydi. */
  if (text.includes("�")) return false;

  // 1) Begona yozuv — darhol rad
  if (FOREIGN_SCRIPTS.test(text)) return false;

  // 2) Alifbo maqsad tilga mos kelishi kerak: ruscha javob asosan
  //    kirill, o'zbekcha/inglizcha javob asosan lotin bo'lishi shart.
  //    Qisqa matnlarda (raqam, qisqartma) tekshirilmaydi — u yerda
  //    harflar kam va nisbat ishonchsiz.
  const cyr = (text.match(/[Ѐ-ӿ]/g) || []).length;
  const lat = (text.match(/[A-Za-z]/g) || []).length;
  const letters = cyr + lat;
  if (letters >= 12) {
    if (targetLang === "ru" && cyr / letters < 0.5) return false;
    if (targetLang !== "ru" && cyr / letters > 0.2) return false;
  }

  // 3) Uzunlik nisbati — model matnni yarmida kesib qo'ygan yoki
  //    o'zidan izoh qo'shib yuborgan holatlarni tutadi.
  if (source.length >= 40) {
    const ratio = text.length / source.length;
    if (ratio < 0.35 || ratio > 3) return false;
  }
  return true;
}

/**
 * Bir guruh matnni bitta AI so'rovi bilan tarjima qiladi.
 * @returns {string[] | null} tartibi saqlangan tarjimalar yoki null
 *   (AI javobi kutilgan formatda bo'lmasa)
 */
/* ── UZILISH HIMOYASI (circuit breaker) ──────────────────────────
   Bepul AI provayderlarning KUNLIK kvotasi tugashi mumkin (haqiqiy
   holat: Gemini 20 so'rov/kun, Cloudflare 10 000 neuron/kun, Groq
   100 000 token/kun — uchalasi ham bir kunda tugadi). Bunday holatda
   har bir tarjima urinishi zanjirdagi HAMMA provayderni sinab ko'radi
   va hammasi 429 qaytaradi — foyda yo'q, lekin vaqt va so'rov sarflanadi
   (o'lchangan: 1610 ta behuda provayder chaqiruvi).

   Shu sabab ketma-ket xatolar sanaladi: chegaradan oshsa tarjima
   BELGILANGAN VAQTGA to'xtatiladi. Bu davrda sahifalar avvalgidek
   ishlaydi — matn manba tilida ko'rsatiladi (asosiy qoida: tarjima
   hech qachon sahifani buzmasin). Muvaffaqiyatli tarjima hisoblagichni
   nolga qaytaradi. */
const BREAKER_THRESHOLD = 6; // shuncha ketma-ket xatodan keyin
const BREAKER_COOLDOWN_MS = 15 * 60 * 1000; // shuncha vaqtga to'xtaydi
let consecutiveFailures = 0;
let breakerUntil = 0;

function breakerOpen() {
  if (Date.now() < breakerUntil) return true;
  if (breakerUntil && Date.now() >= breakerUntil) {
    // Sovish davri tugadi — qaytadan urinib ko'ramiz
    breakerUntil = 0;
    consecutiveFailures = 0;
  }
  return false;
}

function noteFailure() {
  consecutiveFailures++;
  if (consecutiveFailures >= BREAKER_THRESHOLD && !breakerUntil) {
    breakerUntil = Date.now() + BREAKER_COOLDOWN_MS;
    console.warn(
      `translator: AI provayderlari javob bermayapti (${consecutiveFailures} ta ketma-ket xato) — ` +
        `tarjima ${BREAKER_COOLDOWN_MS / 60000} daqiqaga to'xtatildi. ` +
        "Matnlar manba tilida ko'rsatiladi.",
    );
  }
}

function noteSuccess() {
  consecutiveFailures = 0;
  breakerUntil = 0;
}

async function translateChunk(texts, targetLang) {
  const user = texts.map((t, i) => `${MARK(i)}\n${t}`).join("\n\n");

  if (breakerOpen()) return null; // kvota tugagan — behuda urinmaymiz

  let raw;
  try {
    raw = await askStructured({
      system: buildSystemPrompt(targetLang),
      user,
      isPro: false, // tarjima uchun bepul provayderlar yetarli
    });
  } catch (err) {
    noteFailure();
    // Xato matni juda uzun bo'lishi mumkin (JSON javob) — qisqartiramiz
    console.warn("translator: AI xatosi:", String(err.message).slice(0, 160));
    return null;
  }
  if (!raw) {
    noteFailure();
    return null;
  }
  noteSuccess();

  // Javobni markerlar bo'yicha bo'lish
  const out = new Array(texts.length).fill(null);
  const marks = [...raw.matchAll(MARK_RE)];
  if (!marks.length) return null;

  for (let i = 0; i < marks.length; i++) {
    const idx = Number(marks[i][1]);
    if (!Number.isInteger(idx) || idx < 0 || idx >= texts.length) continue;
    const start = marks[i].index + marks[i][0].length;
    const end = i + 1 < marks.length ? marks[i + 1].index : raw.length;
    const value = raw.slice(start, end).trim();
    if (value) out[idx] = value;
  }

  // Kamida bitta bo'lak tushib qolgan bo'lsa — chaqiruvchi qaror qiladi
  return out;
}

/**
 * Matnlar ro'yxatini maqsad tilga tarjima qiladi (kesh + batch bilan).
 *
 * @param {string[]} texts
 * @param {"uz"|"ru"|"en"} targetLang
 * @returns {Promise<string[]>} har doim `texts` bilan BIR XIL uzunlikda.
 *   Tarjima qilib bo'lmagan element o'rnida MANBA matn qaytadi.
 */
async function translateMany(texts, targetLang) {
  if (!SUPPORTED.includes(targetLang)) return texts.slice();

  const result = texts.slice();

  // 1) Tarjima kerak bo'lganlarini ajratamiz (bo'sh emas, tili boshqa)
  const pending = new Map(); // hash → { text, indexes: [] }
  texts.forEach((text, i) => {
    const str = typeof text === "string" ? text : "";
    if (!str.trim()) return;
    if (detectLang(str) === targetLang) return; // allaqachon shu tilda
    const h = hashOf(str);
    if (!pending.has(h)) pending.set(h, { text: str, indexes: [] });
    pending.get(h).indexes.push(i);
  });
  if (!pending.size) return result;

  // 2) Keshdan izlaymiz
  const hashes = [...pending.keys()];
  const cached = await cacheGet(hashes, targetLang);
  for (const [h, entry] of pending) {
    const hit = cached.get(h);
    if (hit) {
      entry.indexes.forEach((i) => (result[i] = hit));
      pending.delete(h);
    }
  }
  if (!pending.size) return result;

  // 3) Qolganlarini batch'larga bo'lamiz
  const todo = [...pending.entries()].map(([hash, e]) => ({
    hash,
    text: e.text,
    indexes: e.indexes,
  }));

  const batches = [];
  let current = [];
  let size = 0;
  for (const item of todo) {
    // Juda uzun matn — o'zi alohida so'rovda ketadi
    const len = item.text.length;
    if (len > MAX_SEGMENT_CHARS) {
      batches.push([item]);
      continue;
    }
    if (
      current.length &&
      (size + len > BATCH_CHAR_BUDGET || current.length >= MAX_BATCH_ITEMS)
    ) {
      batches.push(current);
      current = [];
      size = 0;
    }
    current.push(item);
    size += len;
  }
  if (current.length) batches.push(current);

  // 4) Batch'larni bir vaqtda MAX_PARALLEL tadan yuboramiz.
  const toCache = [];
  const retry = []; // batch'da buzilgan/tushib qolgan bo'laklar

  for (let i = 0; i < batches.length; i += MAX_PARALLEL) {
    const wave = batches.slice(i, i + MAX_PARALLEL);
    const results = await Promise.all(
      wave.map((batch) =>
        translateChunk(
          batch.map((b) => b.text),
          targetLang,
        ),
      ),
    );

    wave.forEach((batch, bi) => {
      const translated = results[bi];
      batch.forEach((item, j) => {
        const value = translated?.[j];
        // Tushib qolgan yoki sifat tekshiruvidan o'tmagan bo'lak —
        // keyin YOLG'IZ qayta urinib ko'riladi. Batch ichidagi bitta
        // buzuq bo'lak butun guruhni qayta yubortirmaydi.
        if (!value || !looksValid(value, targetLang, item.text)) {
          retry.push(item);
          return;
        }
        item.indexes.forEach((idx) => (result[idx] = value));
        toCache.push({ hash: item.hash, text: value });
      });
    });
  }

  // Qayta urinish: har biri alohida so'rovda (guruh ta'siri yo'q,
  // model bitta matnga e'tiborliroq bo'ladi)
  for (const item of retry.slice(0, 20)) {
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      const out = await translateChunk([item.text], targetLang);
      const value = out?.[0];
      if (value && looksValid(value, targetLang, item.text)) {
        item.indexes.forEach((idx) => (result[idx] = value));
        toCache.push({ hash: item.hash, text: value });
        break;
      }
    }
    // Baribir o'tmasa — manba matn qoladi (result allaqachon shunday)
  }

  await cacheSet(toCache, targetLang);
  return result;
}

/* ─────────────────────────────────────────────────────────────────
   TEZ REJIM: keshdan o'qish + fonda to'ldirish
   ─────────────────────────────────────────────────────────────────
   Muammo: qonun kodeksida 800 tagacha modda bor va ularning
   sarlavhalarini bir so'rovda tarjima qilish ~2 daqiqa oladi —
   foydalanuvchi shuncha kuta olmaydi.

   Yechim: sahifa DARHOL ochiladi — keshda bori qo'llanadi, qolgani
   manba tilida qoladi va FON rejimida tarjima qilinadi. Foydalanuvchi
   sahifani qayta ochganda (yoki avtomatik yangilanganda) hammasi
   tarjima qilingan bo'ladi. Ya'ni kutish o'rniga bosqichma-bosqich
   to'lish. */

/* Bir vaqtda nechta fon tarjimasi ketishi mumkin — AI kvotasini
   tugatib qo'ymaslik uchun cheklangan. */
const MAX_BACKGROUND_JOBS = 2;
let backgroundJobs = 0;

/**
 * FAQAT keshdan tarjima qiladi — AI CHAQIRILMAYDI, ya'ni deyarli
 * bir zumda qaytadi. Keshda yo'q matnlar MANBA holida qoladi.
 *
 * @returns {{ result: string[], missing: string[] }}
 *   `missing` — tarjimasi topilmagan (noyob) matnlar; chaqiruvchi
 *   ularni `warmTranslate` ga berib, fonda tayyorlashi mumkin.
 */
async function translateManyCached(texts, targetLang) {
  const result = texts.slice();
  if (!SUPPORTED.includes(targetLang) || targetLang === "uz") {
    return { result, missing: [] };
  }

  const pending = new Map(); // hash → { text, indexes }
  texts.forEach((text, i) => {
    const str = typeof text === "string" ? text : "";
    if (!str.trim()) return;
    if (detectLang(str) === targetLang) return;
    const h = hashOf(str);
    if (!pending.has(h)) pending.set(h, { text: str, indexes: [] });
    pending.get(h).indexes.push(i);
  });
  if (!pending.size) return { result, missing: [] };

  const cached = await cacheGet([...pending.keys()], targetLang);
  const missing = [];
  for (const [h, entry] of pending) {
    const hit = cached.get(h);
    if (hit) entry.indexes.forEach((i) => (result[i] = hit));
    else missing.push(entry.text);
  }
  return { result, missing };
}

/**
 * Matnlarni FON rejimida tarjima qilib keshga yozadi.
 * Hech narsa qaytarmaydi va HECH QACHON xato tashlamaydi — chaqiruvchi
 * uni `await` qilmaydi.
 */
function warmTranslate(texts, targetLang) {
  if (!texts?.length) return;
  if (!SUPPORTED.includes(targetLang) || targetLang === "uz") return;
  if (backgroundJobs >= MAX_BACKGROUND_JOBS) return;

  if (breakerOpen()) return; // kvota tugagan — fon ishi boshlanmaydi

  backgroundJobs++;
  (async () => {
    try {
      // Katta ro'yxatlar bo'laklab ishlanadi — bitta juda uzun ish
      // o'rniga bir nechta qisqa ish (xato bo'lsa hammasi yo'qolmaydi)
      const CHUNK = 80;
      for (let i = 0; i < texts.length; i += CHUNK) {
        // Ish o'rtasida kvota tugasa — qolganini tashlab ketamiz
        if (breakerOpen()) break;
        await translateMany(texts.slice(i, i + CHUNK), targetLang);
      }
    } catch (err) {
      console.warn("warmTranslate xato:", err.message);
    } finally {
      backgroundJobs--;
    }
  })();
}

/* ─────────────────────────────────────────────────────────────────
   OBYEKT TARJIMASI (yordamchi)
   ───────────────────────────────────────────────────────────────── */

/**
 * Obyektlar ro'yxatidagi tanlangan maydonlarni tarjima qiladi.
 * Barcha maydonlar BITTA `translateMany` chaqiruviga yig'iladi, ya'ni
 * 20 ta dars × 2 maydon = 40 ta matn, lekin so'rovlar soni minimal.
 *
 * @param {object[]} docs
 * @param {string[]} fields — yuza (nested emas) maydon nomlari
 * @param {string} targetLang
 */
async function translateDocs(docs, fields, targetLang, opts = {}) {
  if (!Array.isArray(docs) || !docs.length) return docs;
  if (!SUPPORTED.includes(targetLang)) return docs;

  const texts = [];
  const slots = []; // [docIndex, field]
  docs.forEach((doc, di) => {
    fields.forEach((f) => {
      const v = doc?.[f];
      if (typeof v === "string" && v.trim()) {
        texts.push(v);
        slots.push([di, f]);
      }
    });
  });
  if (!texts.length) return docs;

  /* `cachedOnly` — AI kutilmaydi: keshdagi tarjima olinadi, qolgani
     manba tilida qoladi va fonda tayyorlanadi. Chaqiruvchi javobni
     KUTIB turadigan joylar uchun (Telegram bot). */
  let out;
  if (opts.cachedOnly) {
    const res = await translateManyCached(texts, targetLang);
    out = res.result;
    if (res.missing.length) warmTranslate(res.missing, targetLang);
  } else {
    out = await translateMany(texts, targetLang);
  }
  const copies = docs.map((d) => ({ ...d }));
  slots.forEach(([di, f], i) => {
    copies[di][f] = out[i];
  });
  return copies;
}

/** Tarjima hozir ishlayaptimi — tashxis va admin uchun */
function translationStatus() {
  return {
    available: !breakerOpen(),
    consecutiveFailures,
    pausedUntil: breakerUntil ? new Date(breakerUntil) : null,
  };
}

module.exports = {
  translationStatus,
  detectLang,
  translateMany,
  translateManyCached,
  warmTranslate,
  translateDocs,
  SUPPORTED,
};

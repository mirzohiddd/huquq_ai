"use strict";
/**
 * ANIQ MODDA BO'YICHA TO'G'RIDAN-TO'G'RI QIDIRUV
 * ═══════════════════════════════════════════════════════════════
 *
 * ⚠️ HAQIQIY XATO (2026-08-24, foydalanuvchi xabari):
 *   "Jinoyat kodeksining 168-moddasini tushuntirib ber"
 * degan savolga AI:
 *   "...berilgan matnda Jinoyat kodeksining 168-moddasi haqida
 *    ma'lumot yo'q"
 * deb javob berardi. Modda BAZADA BOR (JK 168 — "Firibgarlik"),
 * lekin RAG uni TOPMASDI. Sabab: qidiruv FAQAT ma'no (vektor) va
 * kalit so'z bo'yicha ishlardi. "168-moddani tushuntir" degan
 * savolning MA'NOSI esa firibgarlik matniga umuman yaqin emas —
 * unda mavzu yo'q, faqat RAQAM bor. O'lchangan natija (JK ichida):
 *   16, 23, 31, 163, 36 — 168 umuman yo'q.
 * Kalit so'z qidiruvi ham yordam bermasdi: u so'zlar bilan ishlaydi,
 * raqam bilan emas.
 *
 * Natijada system promptga tasodifiy moddalar "yagona ishonchli
 * manba" sifatida tushardi va model — prompt qoidasiga to'liq amal
 * qilgan holda — "bu matnda yo'q" deb javob berardi. Ya'ni model
 * xato qilmagan, unga KERAKLI matn berilmagan.
 *
 * Yechim: savolda ANIQ modda raqami aytilgan bo'lsa, o'sha modda
 * bazadan TO'G'RIDAN-TO'G'RI (aniq moslik bilan) olinadi va vektor
 * natijalaridan OLDINGA qo'yiladi.
 *
 * ⚠️ QAYSI KODEKS ekani noma'lum bo'lsa — qidiruv UMUMAN qilinmaydi.
 * Bir xil modda raqami 21 ta hujjatning har birida bor va butunlay
 * boshqa mavzuga tegishli (JK 168 — firibgarlik, MK 168 — mehnat
 * intizomi). Kodeks noma'lum holda hammasini qaytarish promptga
 * 21 ta aloqasiz matn tiqilishi va javobni yanada chalkashtirishi
 * demakdir. Kodeks ikki yo'l bilan aniqlanadi: (1) savolning O'ZIDA
 * nomi aytilgan bo'lsa, (2) aytilmasa — legalAI.js dagi kategoriya
 * aniqlanishi bergan kodeks (suhbat konteksti ham hisobga olinadi).
 */
const { LegalChunk } = require("../models");

/** Apostrof variantlari bir xillashtiriladi (loyihada qabul qilingan usul) */
function norm(text = "") {
  return String(text)
    .toLowerCase()
    .replace(/[‘’ʻʼ`´]/g, "'");
}

/* ── Modda raqami naqshlari ──
   Qo'shimcha moddalar ham qamraladi: "276-13-modda" → "276-13"
   (lex.uz da ular superscript bilan yoziladi va bazada aynan shu
   ko'rinishda saqlanadi — `scripts/ingestLaws.js` ga qarang). */
const NUM = "(\\d{1,4}(?:-\\d{1,3})?)";
const NUMBER_PATTERNS = [
  new RegExp(`${NUM}\\s*[-–—]?\\s*(?:modda|модда)`, "gi"), // 168-modda, 168 moddasini
  new RegExp(`(?:article|statya)\\s*${NUM}`, "gi"), // article 168
  new RegExp(`(?:стать[а-яё]*|ст\\.)\\s*${NUM}`, "gi"), // статья 168, ст. 168
  new RegExp(`${NUM}\\s*[-–—]?\\s*стать[а-яё]*`, "gi"), // 168 статья
];

/* ── Qonun nomi → kodeks kodi ──
   ⚠️ TARTIB MUHIM: "jinoyat-protsessual kodeksi" ichida "jinoyat"
   so'zi ham bor, shuning uchun aniqroq (uzunroq) nomlar YUQORIDA
   turishi shart — aks holda JPK haqidagi savol JK ga tushib ketardi.
   ⚠️ Bu ro'yxat `config/laws.js` dagi 21 ta hujjatni qamraydi. Admin
   panelidan YANGI hujjat qo'shilsa, uning nomi bu yerda tanilmaydi —
   u holda kategoriya bergan kodeks ishlatiladi (avvalgi xatti-harakat,
   ya'ni hech narsa buzilmaydi). */
const LAW_ALIASES = [
  { codes: ["KONS"], re: /konstitutsiya|конституц|constitution/ },
  { codes: ["JPK"], re: /jinoyat[-\s]*protsessual|уголовно[-\s]*процессуальн|criminal[-\s]*procedur/ },
  { codes: ["JIK"], re: /jinoyat[-\s]*ijroiya|уголовно[-\s]*исполнительн/ },
  { codes: ["JK"], re: /jinoyat\s*kodeks|jinoiy\s*kodeks|жиноят\s*кодекс|уголовн[а-яё]*\s*кодекс|criminal\s*code/ },
  { codes: ["FPK"], re: /fuqarolik[-\s]*protsessual|гражданск[а-яё]*[-\s]*процессуальн|civil[-\s]*procedur/ },
  { codes: ["IPK"], re: /iqtisodiy[-\s]*protsessual|экономическ[а-яё]*[-\s]*процессуальн/ },
  { codes: ["MSK"], re: /ma'muriy\s*sud|административн[а-яё]*\s*судопроизводств/ },
  { codes: ["MJK"], re: /ma'muriy\s*javobgarlik|административн[а-яё]*\s*ответственност|administrative\s*(?:liability|offence)/ },
  { codes: ["MK"], re: /mehnat\s*kodeks|мехнат\s*кодекс|трудов[а-яё]*\s*кодекс|labou?r\s*code/ },
  { codes: ["OK"], re: /oila\s*kodeks|оила\s*кодекс|семейн[а-яё]*\s*кодекс|family\s*code/ },
  // Fuqarolik kodeksining IKKINCHI qismi alohida hujjat (FK2) va
  // moddalar raqamlanishi 1-qismdan keyin davom etadi. Qism aniq
  // aytilmasa ikkalasi ham qidiriladi — modda raqami bittasida bo'ladi.
  { codes: ["FK2"], re: /fuqarolik\s*kodeks[a-z']*\s*(?:ning\s*)?(?:ikkinchi|2)|гражданск[а-яё]*\s*кодекс[а-яё]*\s*(?:втор|2)/ },
  { codes: ["FK", "FK2"], re: /fuqarolik\s*kodeks|фуқаролик\s*кодекс|фукаролик\s*кодекс|гражданск[а-яё]*\s*кодекс|civil\s*code/ },
  { codes: ["SK"], re: /soliq\s*kodeks|налогов[а-яё]*\s*кодекс|tax\s*code/ },
  { codes: ["BJK"], re: /bojxona\s*kodeks|таможенн[а-яё]*\s*кодекс|customs\s*code/ },
  { codes: ["BK"], re: /b(?:yu|u)djet\s*kodeks|бюджетн[а-яё]*\s*кодекс|budget\s*code/ },
  { codes: ["YK"], re: /yer\s*kodeks|земельн[а-яё]*\s*кодекс|land\s*code/ },
  { codes: ["UJK"], re: /uy[-\s]*joy\s*kodeks|жилищн[а-яё]*\s*кодекс|housing\s*code/ },
  { codes: ["SHK"], re: /shaharsozlik|градостроительн/ },
  { codes: ["HK"], re: /havo\s*kodeks|воздушн[а-яё]*\s*кодекс|air\s*code/ },
  { codes: ["SYK"], re: /saylov\s*kodeks|избирательн[а-яё]*\s*кодекс|election\s*code/ },
  { codes: ["IHQ"], re: /iste'molchi|потребител|consumer\s*right/ },
];

/* Qisqartma bilan yozilgan holat ("MJK 276-13-moddasi", "JK 168").
   ⚠️ FAQAT BOSH HARFDA yozilgan qisqartma qabul qilinadi va tekshiruv
   asl matnda (kichik harfga o'tkazilmagan holda) o'tkaziladi: "OK"
   kichik harfda ingliz tilidagi rozilik so'zi ("ok"), "SK"/"HK" esa
   tasodifiy harf birikmasi bo'lishi mumkin. Bu ro'yxat baribir faqat
   savolda modda RAQAMI bo'lganda ishlatiladi, ya'ni "ok, rahmat"
   kabi xabar bu yergacha yetib kelmaydi. */
const CODE_ABBR = [
  "KONS", "JPK", "JIK", "JK", "FPK", "IPK", "MSK", "MJK", "MK", "OK",
  "FK2", "FK", "SK", "BJK", "BK", "YK", "UJK", "SHK", "HK", "SYK", "IHQ",
];

/** Savolda aytilgan modda raqamlari (takrorsiz, eng ko'pi 3 ta) */
function parseArticleNumbers(text = "") {
  const low = norm(text);
  const found = [];
  for (const re of NUMBER_PATTERNS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(low)) !== null) {
      const n = m[1].replace(/^0+(?=\d)/, "");
      if (!found.includes(n)) found.push(n);
    }
  }
  return found.slice(0, 3);
}

/** Savolda nomi aytilgan kodeks kodlari (aytilmagan bo'lsa — bo'sh) */
function parseLawCodes(text = "") {
  const low = norm(text);
  for (const { codes, re } of LAW_ALIASES) {
    if (re.test(low)) return codes;
  }
  const raw = String(text);
  for (const code of CODE_ABBR) {
    if (new RegExp(`(?:^|[^A-Za-z])${code}(?![A-Za-z])`).test(raw)) {
      return code === "FK" ? ["FK", "FK2"] : [code];
    }
  }
  return [];
}

/**
 * Savolda aniq modda so'ralgan bo'lsa — o'sha moddani bazadan oladi.
 * `fallbackCodes` — legalAI.js dagi kategoriya bergan kodeks(lar);
 * savolda nom aytilmagan holatda ishlatiladi.
 * Hech qanday holatda XATO TASHLAMAYDI — qidiruv yiqilsa bo'sh ro'yxat
 * qaytadi va odatdagi vektor qidiruvi avvalgidek davom etadi.
 */
async function findArticlesByNumber(text, fallbackCodes = null) {
  const numbers = parseArticleNumbers(text);
  if (!numbers.length) return [];

  const explicit = parseLawCodes(text);
  const fallback = (Array.isArray(fallbackCodes) ? fallbackCodes : [fallbackCodes]).filter(Boolean);
  const codes = explicit.length ? explicit : fallback;
  // Kodeks noma'lum — yuqoridagi izohga qarang, qidiruv qilinmaydi.
  if (!codes.length) return [];

  try {
    const docs = await LegalChunk.find({
      lawCode: { $in: codes },
      articleNumber: { $in: numbers },
    })
      .select("lawCode lawName articleNumber title text sourceUrl")
      .limit(6)
      .lean();
    return docs.map((d) => ({ ...d, score: 1, direct: true }));
  } catch (err) {
    console.warn("findArticlesByNumber xato:", err.message);
    return [];
  }
}

module.exports = { findArticlesByNumber, parseArticleNumbers, parseLawCodes };

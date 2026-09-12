/**
 * KONSTITUTSIYA YORLIQLARINI O'QISHLI QILISH.
 *
 * lex.uz dan kelgan sarlavhalar interfeys uchun noqulay:
 *   "IKKINCHI BOʻLIM. INSON VA FUQARONING ASOSIY HUQUQLARI, ERKINLIKLARI VA BURCHLARI"
 *   "XVIII bob. Oʻzbekiston Respublikasi Oliy Majlisi"
 *
 * Muammolari: butunlay BOSH HARF (skanerlash qiyin, "qichqirayotgan"
 * matn), uzun prefiks joyni egallaydi, rim raqami (XVIII) tez
 * o'qilmaydi. Eng uzuni 80 belgi — kartaga sig'maydi.
 *
 * Bu modul ularni raqam + toza sarlavhaga ajratadi:
 *   { num: 2, title: "Inson va fuqaroning asosiy huquqlari, ..." }
 *   { num: 18, title: "Oʻzbekiston Respublikasi Oliy Majlisi" }
 *
 * ⚠️ Manba matn O'ZGARTIRILMAYDI — bu faqat KO'RSATISH uchun. Qidiruv,
 * tarjima va bazadagi qiymatlar avvalgidek to'liq nom bilan ishlaydi.
 */

/* Bo'lim raqamlari so'z bilan yoziladi ("BIRINCHI BOʻLIM").

   ⚠️ RUS VA INGLIZ VARIANTLARI HAM SHART. Konstitutsiyaning rus matni
   endi lex.uz'dan RASMIY tarjima sifatida keladi ("РАЗДЕЛ ВТОРОЙ.
   ОСНОВНЫЕ ПРИНЦИПЫ"), ingliz matni esa AI tarjimasidan. Ular
   qo'shilmasa naqsh mos kelmay, butun sarlavha "Раздел второй.
   основные принципы" ko'rinishida — prefiksi olib tashlanmagan va
   noto'g'ri kichik harfda — chiqib qolardi. */
const WORD_NUM = {
  // O'zbekcha
  birinchi: 1,
  ikkinchi: 2,
  uchinchi: 3,
  "toʻrtinchi": 4,
  "to'rtinchi": 4,
  beshinchi: 5,
  oltinchi: 6,
  yettinchi: 7,
  sakkizinchi: 8,
  "toʻqqizinchi": 9,
  "to'qqizinchi": 9,
  "oʻninchi": 10,
  "o'ninchi": 10,
  // Ruscha
  первый: 1,
  второй: 2,
  третий: 3,
  четвертый: 4,
  четвёртый: 4,
  пятый: 5,
  шестой: 6,
  седьмой: 7,
  восьмой: 8,
  девятый: 9,
  десятый: 10,
  // Inglizcha
  one: 1,
  first: 1,
  two: 2,
  second: 2,
  three: 3,
  third: 3,
  four: 4,
  fourth: 4,
  five: 5,
  fifth: 5,
  six: 6,
  sixth: 6,
  seven: 7,
  seventh: 7,
  eight: 8,
  eighth: 8,
  nine: 9,
  ninth: 9,
  ten: 10,
  tenth: 10,
};

const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100 };

/* ⚠️ KIRILL HOMOGLIFLARI.
   lex.uz rus matnida rim raqamlari aralash yoziladi: "Глава IХ" dagi
   "Х" — KIRILL harfi (U+0425), "Глава XVIII" dagi "X" esa LOTIN
   (U+0058). Ekranda ikkalasi bir xil ko'rinadi, lekin `[IVXLC]`
   faqat lotinni taniydi. Normallashtirmasa IX-bobdan keyingi barcha
   boblar "tanilmadi" holatiga tushib, sarlavhasi xunuk ko'rinardi. */
const CYRILLIC_ROMAN = { "Х": "X", "С": "C", "І": "I", "М": "M", "В": "V" };

/* ⚠️ FAQAT RAQAMGA QO'LLANADI, butun satrga EMAS.
   Butun satr normallashtirilsa sarlavha matni ham buziladi: "Олий
   Мажлис" dagi "М" ham lotin "M" ga aylanib, foydalanuvchi "Олий
   Mажлис" degan aralash yozuvni ko'rardi (sinovda aynan shu xato
   aniqlandi). Shuning uchun quyidagi naqsh rim raqamini ikkala
   alifboda ham TANIYDI, normallashtirish esa faqat ajratib olingan
   raqamga qo'llanadi — sarlavha asl holicha qoladi. */
const ROMAN_CHARS = "IVXLCХСІМВ";
const ROMAN_RE = new RegExp(`^[${ROMAN_CHARS}]+$`, "i");

function normalizeRoman(s) {
  return String(s).replace(/[ХСІМВ]/g, (c) => CYRILLIC_ROMAN[c]);
}

function romanToNumber(str) {
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    const cur = ROMAN[str[i]];
    const next = ROMAN[str[i + 1]];
    n += next && cur < next ? -cur : cur;
  }
  return n;
}

/** Butunlay bosh harfli matnni oddiy ko'rinishga keltiradi */
function sentenceCase(raw) {
  const t = String(raw || "").trim();
  if (!t) return t;
  // Faqat BUTUNLAY bosh harfli bo'lsa tegamiz — aralash matn (masalan
  // "Oʻzbekiston Respublikasi") o'z holicha to'g'ri yozilgan.
  if (t !== t.toUpperCase()) return t;
  return t.charAt(0) + t.slice(1).toLowerCase();
}

/**
 * "BIRINCHI BOʻLIM. ASOSIY PRINSIPLAR" → { num: 1, title: "Asosiy prinsiplar" }
 * @param {number} fallbackIndex — nom tanilmasa 0-asosli tartib raqami
 */
export function parseSection(raw, fallbackIndex = 0) {
  const s = String(raw || "");
  /* Uch til, uch tartib:
       uz — "IKKINCHI BOʻLIM. ..."   (raqam sarlavhadan OLDIN)
       ru — "РАЗДЕЛ ВТОРОЙ. ..."     (raqam sarlavhadan KEYIN)
       en — "SECTION TWO. ..."       (raqam sarlavhadan KEYIN) */
  const m =
    s.match(/^(\S+)\s+BO[’'ʻʼ]?LIM\.?\s*(.*)$/i) ||
    s.match(/^(?:РАЗДЕЛ|SECTION|PART)\s+(\S+?)\.?\s+(.*)$/i);
  if (!m) return { num: fallbackIndex + 1, title: sentenceCase(raw) };

  const word = m[1].replace(/\.$/, "").toLowerCase();
  const num =
    WORD_NUM[word] ??
    (/^\d+$/.test(word)
      ? Number(word)
      : ROMAN_RE.test(word)
        ? romanToNumber(normalizeRoman(word).toUpperCase())
        : fallbackIndex + 1);

  return { num, title: sentenceCase(m[2]) };
}

/**
 * "XVIII bob. Oʻzbekiston Respublikasi Oliy Majlisi"
 *   → { num: 18, title: "Oʻzbekiston Respublikasi Oliy Majlisi" }
 */
export function parseChapter(raw, fallbackIndex = 0) {
  const s = String(raw || "");
  /* uz — "XVIII bob. ..."      (raqam OLDIN)
     ru — "Глава V. ..."        (raqam KEYIN)
     en — "Chapter V. ..."      (raqam KEYIN) */
  const m =
    s.match(new RegExp(`^([${ROMAN_CHARS}]+|\\d+)\\s*[-–]?\\s*bob\\.?\\s*(.*)$`, "i")) ||
    s.match(
      new RegExp(`^(?:ГЛАВА|CHAPTER)\\s+([${ROMAN_CHARS}]+|\\d+)\\.?\\s*(.*)$`, "i"),
    );
  if (!m) return { num: fallbackIndex + 1, title: sentenceCase(raw) };
  const num = /^\d+$/.test(m[1])
    ? Number(m[1])
    // Normallashtirish faqat SHU YERDA — sarlavha (m[2]) tegilmaydi
    : romanToNumber(normalizeRoman(m[1]).toUpperCase());
  return { num, title: m[2].trim() };
}

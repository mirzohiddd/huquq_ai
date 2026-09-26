"use strict";
/**
 * LOKAL AI — MATNNI TOKENLARGA BO'LISH VA O'ZAKLASH.
 *
 * Bu yerda hech qanday tashqi xizmat yo'q: savol ham, qonun matni ham
 * bir xil qoidalar bilan tokenlarga bo'linadi, shu sabab ular bir-biriga
 * to'g'ri solishtiriladi.
 *
 * Nega oddiy `includes()` yetmaydi:
 *   • O'zbek tilida so'z qo'shimchalar bilan o'zgaradi — "shartnoma",
 *     "shartnomani", "shartnomasining". Shuning uchun so'zning BOSHI
 *     (dastlabki 5 harf) o'zak sifatida olinadi. Qo'shimchali tillar
 *     (turk, o'zbek) uchun bu usul qidiruvda oddiy o'zaklashdan qolishmaydi.
 *   • Apostrof 5 xil yoziladi (o'/oʻ/o‘/o`) — hammasi olib tashlanadi.
 *   • O'zbek kirill yozuvi lotinga o'giriladi — baza lotin yozuvida.
 */

const UZ_CYR = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "j", з: "z",
  и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
  с: "s", т: "t", у: "u", ф: "f", х: "x", ц: "ts", ч: "ch", ш: "sh",
  щ: "sh", ъ: "", ы: "i", ь: "", э: "e", ю: "yu", я: "ya", ў: "o",
  қ: "q", ғ: "g", ҳ: "h",
};

/** O'zbek kirill yozuvi (ў/қ/ғ/ҳ harflari bo'yicha tanib olinadi). */
function isUzCyrillic(text = "") {
  return /[ўқғҳЎҚҒҲ]/.test(text);
}

function uzCyrToLatin(text = "") {
  return String(text)
    .toLowerCase()
    .replace(/[Ѐ-ӿ]/g, (ch) => UZ_CYR[ch] ?? ch);
}

/** Kichik harf + apostroflarni olib tashlash + ortiqcha belgilarni tozalash. */
function normalize(text = "") {
  return String(text)
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/['‘’ʻʼ`´]/g, "")
    // "ob-havo" (weather) — "havo kodeksi" bilan adashmasligi uchun bitta so'z
    .replace(/ob[-\s]?havo/g, "obhavo")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/-/g, " ");
}

/* Ma'no bermaydigan so'zlar — bahoga ta'sir qilmasligi kerak.
   ⚠️ Umumiy huquqiy so'zlar ("qonun", "modda", "huquq") ham shu yerda:
   ular deyarli HAR BIR moddada uchraydi va qidiruvda ajratuvchi kuchi
   yo'q (xuddi shu xulosa `legalRetrievalQuery.js` da ham qayd etilgan). */
const STOP = new Set(
  (
    "va bilan uchun ham yoki lekin ammo shu bu u men menga meni mening siz " +
    "sizga sizning biz bizga eng juda yana faqat kerak haqida haqda mumkin " +
    "iltimos ayting aytib bering ber nima nimaga nega qanday qanaqa qaysi kim " +
    "qachon qayerda qayerga qancha necha bormi bor yoq emas edi ekan bolsa " +
    "boladi bolgan bolib agar hali qilib qilish qiladi kerakmi mumkinmi " +
    "tushuntir tushuntirib savol javob salom rahmat iltimos endi keyin oldin " +
    "huquq huquqi huquqiy qonun qonuni qonunda qonunchilik " +
    "modda moddasi moddasiga kodeks kodeksi kodeksiga respublikasi " +
    "ozbekiston ozbekistonda davlat bugun ertaga kecha hozir " +
    "и или но а для с со на в во по из у к о об от до за при мне меня мой " +
    "вы вас ваш мы нам это этот тут здесь там очень ещё еще только нужно " +
    "можно пожалуйста скажите подскажите про что какой какая какие как кто " +
    "когда где сколько ли не нет да есть если то же бы был была было быть " +
    "закон закона законы статья статьи статью кодекс кодекса право " +
    "республики узбекистан узбекистана"
  ).split(/\s+/),
);

/* Rus tilidagi eng ko'p uchraydigan qo'shimchalar (eng uzunlari birinchi).
   To'liq Snowball emas — qidiruv uchun o'zakni barqarorlashtirish kifoya. */
const RU_END =
  /(ениями|ениях|ением|ения|ение|ании|ание|остью|ости|ость|ского|ской|ских|ыми|ими|ого|его|ому|ему|ах|ях|ам|ям|ой|ей|ий|ый|ая|яя|ое|ее|ые|ие|ов|ев|ом|ем|ую|юю|ть|ли|ла|ло|ет|ит|ут|ют|ат|ят|а|я|о|е|ы|и|у|ю|ь)$/;

/* ── Indeks va savol uchun HAR XIL qoida ──
   Indeksga so'zning dastlabki 8 harfi yoziladi (ma'lumot yo'qolmaydi).
   Savol so'zidan esa qo'shimcha kesilib, ildizning boshi (PREFIKS)
   olinadi va u indeksdagi shu prefiks bilan BOSHLANADIGAN barcha
   so'zlarga mos keladi: "jazo" → "jazolanadi", "jazoni";
   "arizasi" → "ariza…". Qat'iy 5 harfli o'zak "o'g'irlik" (ogirl…) va
   "og'irlashtiruvchi" (ogirl…) ni bir xil qilib qo'yardi — sinovda
   o'g'rilik haqidagi savolga og'irlashtiruvchi holatlar moddasi chiqdi. */
const INDEX_LEN = 8;
const PREFIX_UZ = 6;

const UZ_SUFFIX = [
  "larimizning", "laringizning", "larining", "larning", "larini", "lariga",
  "larida", "laridan", "larga", "larda", "lardan", "lari", "lar",
  "imizning", "ingizning", "ining", "ning", "imiz", "ingiz", "idagi",
  "dagi", "idan", "dan", "ini", "iga", "ida", "yapti", "moqda", "ganda",
  "gani", "gan", "adi", "ydi", "di", "da", "ga", "ka", "qa", "ni", "si",
  "ib", "sa", "mi", "im", "i",
];

function stripUz(w) {
  for (let pass = 0; pass < 2; pass++) {
    const suf = UZ_SUFFIX.find((x) => w.endsWith(x) && w.length - x.length >= 3);
    if (!suf) break;
    w = w.slice(0, -suf.length);
  }
  return w;
}

const isNum = (w) => /^\d+$/.test(w);
const isRu = (w) => /[а-я]/.test(w);

/** Ma'noli so'zlar (to'xtatuv so'zlarsiz). */
function words(text = "") {
  return normalize(text)
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w) && (isNum(w) ? w.length <= 4 : w.length >= 3));
}

/** Indeks atamalari (takrorlar saqlanadi — chastota BM25 uchun kerak). */
function tokenize(text = "") {
  return words(text).map((w) => (isNum(w) ? w : w.slice(0, INDEX_LEN)));
}

/** Savol so'zi → indeksdagi so'zlar boshlanadigan prefiks. */
function prefixOf(w) {
  if (isNum(w)) return w;
  if (isRu(w)) {
    const root = w.length > 5 ? w.replace(RU_END, "") : w;
    return root.slice(0, root.length <= 5 ? 4 : 5);
  }
  return stripUz(w).slice(0, PREFIX_UZ);
}

/* Xalq orasida keng tarqalgan imlo variantlari → qonundagi yozilishi.
   ("o'g'irlik" deb yoziladi, kodeksda esa "o'g'rilik"). */
const SPELLING = { ogirlik: "ogrilik", ogirligi: "ogriligi", ogirlikda: "ogrilikda" };

/** Savol → takrorsiz prefikslar ro'yxati. */
function queryPrefixes(text = "") {
  return [...new Set(words(text).map((w) => prefixOf(SPELLING[w] || w)))];
}

/** Levenshtein masofasi (limit oshsa erta to'xtaydi). */
function distance(a, b, limit = 2) {
  if (Math.abs(a.length - b.length) > limit) return limit + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > limit) return limit + 1;
    prev = cur;
  }
  return prev[b.length];
}

/** Matnni jumlalarga bo'lish (qator uzilishlari ham chegara). */
function sentences(text = "") {
  return String(text)
    .split(/\n+|(?<=[.!?;])\s+(?=[A-ZА-ЯЎҚҒҲ0-9«"(])/u)
    .map((s) => s.trim())
    .filter((s) => s.length > 2);
}

module.exports = {
  normalize,
  tokenize,
  words,
  queryPrefixes,
  distance,
  sentences,
  isUzCyrillic,
  uzCyrToLatin,
};

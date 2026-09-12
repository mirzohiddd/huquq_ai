"use strict";
/**
 * RAG QIDIRUV SO'ROVINI TAYYORLASH — yordamchi modul.
 *
 * Bu yerda `legalRetrieval.js` ning "so'rovni tushunish" qismi turadi:
 * kundalik tildan rasmiy atamaga o'tkazish, kalit so'z bo'yicha zaxira
 * qidiruv va kodeks filtri. Ular asosiy fayldan AJRATILDI — fayl 200
 * qatordan oshib ketgan edi (loyiha qoidasi). Mantiq bir qator ham
 * o'zgarmagan, faqat joyi ko'chdi.
 */
const { LegalChunk } = require("../models");

/* ═══════════════ SO'ZLASHUV → HUQUQIY ATAMA ═══════════════
   Foydalanuvchi savolni kundalik tilda yozadi ("ajrim bo'lsa bola kimda
   qoladi"), qonun matni esa rasmiy atamalar bilan yozilgan ("nikohdan
   ajratish", "bolalar kim bilan yashashi"). Vektor qidiruv shu farq
   tufayli mutlaqo boshqa moddalarni qaytarishi mumkin — haqiqiy holat:
   "ajrim, bola 12 yoshda, kimda qoladi" so'roviga farzandlikka olish va
   aliment MIQDORI haqidagi moddalar chiqdi, kerakli 44-modda esa
   ("bolalari kim bilan yashashi") umuman tushmadi.

   Yechim: so'rovga rasmiy atamalar QO'SHILADI (almashtirilmaydi —
   asl matn ham qoladi), shunda embedding to'g'ri yo'nalishga suriladi. */
const TERM_HINTS = [
  { re: /ajrim|ajrash|ajral|развод/i, add: "nikohdan ajratish, nikohni bekor qilish" },
  { re: /bola.*(kimda|kim bilan|qoladi|qolad)|kimda qoladi/i, add: "bolalar kim bilan yashashi, bolaning turar joyi, sud hal qiladigan masalalar" },
  { re: /aliment|nafaqa/i, add: "taʼminot berish, aliment undirish" },
  { re: /ishdan (bo.shat|hayda|chiqar)|уволил/i, add: "mehnat shartnomasini bekor qilish, ishga tiklash" },
  { re: /ish haqi|maosh|oylik/i, add: "mehnatga haq toʻlash, ish haqini toʻlash muddati" },
  { re: /ta.til|otpusk/i, add: "mehnat taʼtili, taʼtil berish tartibi" },
  { re: /meros|наслед/i, add: "merosni qabul qilish, merosxoʻrlar navbati, vasiyatnoma" },
  { re: /uy|kvartira|ko.chmas mulk/i, add: "koʻchmas mulkka boʻlgan huquq, davlat roʻyxatidan oʻtkazish" },
  { re: /tovar|mahsulot|qaytar/i, add: "isteʼmolchi huquqlari, sifatsiz tovar, tovarni almashtirish" },
  { re: /shartnoma/i, add: "shartnoma tuzish, shartnomani bekor qilish" },
  { re: /\bur(di|ib|yapti)|kaltakla|zo.rla/i, add: "shaxsga qarshi jinoyat, jismoniy shikast yetkazish" },
];

function expandQuery(query = "") {
  const extras = TERM_HINTS.filter((h) => h.re.test(query))
    .map((h) => h.add)
    .join(", ");
  return extras ? `${query}. ${extras}` : query;
}

/* ── Kalit so'z bo'yicha zaxira qidiruv ──
   Vektor qidiruv "sirpanib ketgan" holatda ham to'g'ri modda topilishi
   uchun: savoldagi eng ma'noli so'zlar bo'yicha matn ichidan qidiramiz.
   Bu vektor natijalarini ALMASHTIRMAYDI, ularga qo'shiladi. */
const STOP_WORDS = new Set([
  "agar","bo'lsa","bolsa","hali","qanday","qilib","uchun","kerak","mumkin",
  "nima","kim","qaysi","yoki","ham","bilan","meni","mening","men","siz",
  "bu","shu","va","the","and","что","как","если",
  /* ⚠️ UMUMIY HUQUQIY SO'ZLAR — ATAYLAB chetlab o'tiladi.
     Bular deyarli HAR BIR modda matnida uchraydi, ya'ni qidiruv
     so'zi sifatida hech qanday ajratuvchi kuchga ega emas. Ular
     ro'yxatda qolganda "Davlat va huquq asoslari" kabi so'rov
     butunlay tasodifiy 4 ta moddani qaytarardi va ular system
     promptga "TEKSHIRILGAN QONUN MATNI — yagona ishonchli manbang"
     sarlavhasi bilan qo'shilib, javobni mavzudan chetga burardi.
     Mavzuni vektor qidiruv va kategoriya filtri allaqachon topadi. */
  "huquq","huquqi","huquqiy","huquqlari","qonun","qonuni","qonunchilik",
  "davlat","davlatning","modda","moddasi","kodeks","kodeksi","respublika",
  "o'zbekiston","ozbekiston","fuqaro","fuqarolar","asoslari","tartibi",
  "право","права","закон","закона","статья","статьи","кодекс","кодекса",
  "государств","республики","узбекистан",
]);

/* `lawCode` bitta satr ham, MASSIV ham bo'lishi mumkin.

   Massiv kerak bo'ldi, chunki bitta mavzu bir nechta kodeksga tegishli
   bo'lishi mumkin: fuqarolik savollari FK (umumiy qoidalar) va FK2
   (shartnoma turlari, meros) o'rtasida taqsimlangan, ko'chmas mulk esa
   YK/UJK/SHK ga. Avval faqat bitta kod berilardi va savolning yarmi
   qidiruvdan tashqarida qolardi. */
function lawCodeFilter(lawCode) {
  if (!lawCode) return null;
  const list = (Array.isArray(lawCode) ? lawCode : [lawCode]).filter(Boolean);
  if (!list.length) return null;
  return list.length === 1 ? { $eq: list[0] } : { $in: list };
}

async function keywordSearch(query, topK, lawCode) {
  const words = String(query)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 5 && !STOP_WORDS.has(w))
    .slice(0, 6);
  if (!words.length) return [];

  // O'zbek apostrof variantlari bir-biriga moslashtiriladi
  const patterns = words.map(
    (w) => new RegExp(w.replace(/['ʻʼ`]/g, "['ʻʼ`]?").slice(0, 24), "i"),
  );
  const filter = { $or: [{ title: { $in: patterns } }, { text: { $in: patterns } }] };
  const kwCodeFilter = lawCodeFilter(lawCode);
  if (kwCodeFilter) filter.lawCode = kwCodeFilter;

  return LegalChunk.find(filter)
    .select("lawCode lawName articleNumber title text sourceUrl")
    .limit(topK)
    .lean();
}

module.exports = { expandQuery, keywordSearch, lawCodeFilter };

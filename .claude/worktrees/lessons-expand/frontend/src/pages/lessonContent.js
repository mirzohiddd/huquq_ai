/**
 * Darslar sahifasi uchun YORDAMCHI ma'lumot va hosilalar.
 *
 * MUHIM PRINSIP: bu yerda hech qanday "to'qib chiqarilgan" huquqiy fakt
 * yo'q. Dars matni, bo'limlar va testlar — bazadan (admin kiritgan
 * kontent) keladi. Bu fayl faqat:
 *   1) mavjud matndan hosila ma'lumot hisoblaydi (o'qish vaqti, murakkablik,
 *      qaysi kodeksga tegishli, asosiy fikrlar),
 *   2) har bir mavzu uchun umumiy va tekshirilgan huquqiy tamoyilni
 *      ("Bilasizmi?" va ogohlantirish) beradi — bular aniq modda raqami
 *      yoki muddat kabi o'zgaruvchan tafsilotlarni O'Z ICHIGA OLMAYDI,
 *      shuning uchun qonun tahriri o'zgarsa ham eskirmaydi.
 */

/* ── Mavzuni dars sarlavhasi bo'yicha aniqlash ── */
const TOPIC_RULES = [
  { id: "labor", re: /mehnat|trud|labou?r/i },
  { id: "family", re: /oila|семь|family/i },
  { id: "inheritance", re: /meros|наслед|inherit/i },
  { id: "land", re: /yer|ko'chmas|недвиж|land|property/i },
  { id: "consumer", re: /iste'?molchi|потребит|consumer/i },
  { id: "criminal", re: /jinoiy|jinoyat|уголов|criminal/i },
];

export function detectTopic(title = "") {
  return TOPIC_RULES.find((r) => r.re.test(title))?.id || "general";
}

/* ── Mavzuga tegishli asosiy qonun (badge uchun) ── */
export const TOPIC_LAW = {
  labor: "Mehnat kodeksi",
  family: "Oila kodeksi",
  inheritance: "Fuqarolik kodeksi",
  land: "Yer kodeksi",
  consumer: "Iste'molchilar huquqlari to'g'risidagi qonun",
  criminal: "Jinoyat kodeksi",
  general: "O'zbekiston qonunchiligi",
};

/* ── Matndan kodeks nomini topish (matnda tilga olingan bo'lsa —
      shu ustun turadi, chunki bu haqiqiy manba) ── */
const LAW_IN_TEXT = [
  /Mehnat kodeksi/i,
  /Oila kodeksi/i,
  /Fuqarolik kodeksi/i,
  /Yer kodeksi/i,
  /Jinoyat-protsessual kodeksi/i,
  /Jinoyat kodeksi/i,
  /Soliq kodeksi/i,
];

export function detectLaw(text = "", topic = "general") {
  for (const re of LAW_IN_TEXT) {
    const m = text.match(re);
    if (m) return m[0];
  }
  return TOPIC_LAW[topic] || TOPIC_LAW.general;
}

/* ── HTML'ni toza matnga aylantirish ── */
export function plainText(section) {
  return String(section?.html || section?.text || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/* ── O'qish vaqti (daqiqa) — o'rtacha 180 so'z/daqiqa ── */
export function readingMinutes(text = "") {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}

/* ── Murakkablik — dars hajmiga qarab ── */
export function difficultyOf(totalChars) {
  if (totalChars < 900) return "basic";
  if (totalChars < 2200) return "mid";
  return "deep";
}

/* ── Bo'lim matnini jumlalarga ajratish ──
   Birinchi (amaliy) jumla — "Amaliy maslahat" oynasi uchun,
   qolganlari — "Asosiy fikrlar" ro'yxati uchun. Hammasi dars
   matnining O'ZIDAN olinadi, qo'shimcha matn yozilmaydi. */
export function splitInsights(text = "") {
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((x) => x.trim())
    .filter((x) => x.length > 25);

  if (!sentences.length) return { tip: "", points: [] };

  // Amaliy ko'rsatma bor jumlani afzal ko'ramiz
  const practicalIdx = sentences.findIndex((x) =>
    /\b(kerak|shart|lozim|mumkin|huquqi bor|majbur)\b/i.test(x),
  );
  const tipIdx = practicalIdx >= 0 ? practicalIdx : 0;
  const tip = sentences[tipIdx];
  const points = sentences.filter((_, i) => i !== tipIdx).slice(0, 4);
  return { tip, points };
}

/* ── "Bilasizmi?" — mavzu bo'yicha umumiy huquqiy tamoyil.
   Ataylab modda raqami va muddat yozilmagan: ular qonun tahririda
   o'zgaradi, bu tamoyillar esa barqaror. ── */
export const DID_YOU_KNOW = {
  labor:
    "Mehnat shartnomasi yozma shaklda tuzilishi shart. Og'zaki kelishuv nizo chiqqanda dalil sifatida deyarli hech qanday kuchga ega bo'lmaydi — shuning uchun ishga kirishdan oldin shartnomaning imzolangan nusxasini qo'lingizga oling.",
  family:
    "Nikoh davrida orttirilgan mulk, u kimning nomiga rasmiylashtirilganidan qat'i nazar, er-xotinning umumiy mulki hisoblanadi. Faqat sovg'a qilingan yoki meros bo'lib o'tgan mulk bundan mustasno.",
  inheritance:
    "Merosni qabul qilish uchun qonunda muddat belgilangan. Muddat o'tkazib yuborilsa, uni faqat sud — uzrli sabab bo'lganda — tiklashi mumkin. Shuning uchun notariusga murojaatni kechiktirmaslik muhim.",
  land:
    "Ko'chmas mulkka bo'lgan huquq shartnoma imzolangan payt emas, balki davlat ro'yxatidan o'tkazilgan paytdan yuzaga keladi. Ro'yxatdan o'tkazilmagan bitim uchinchi shaxslarga qarshi kuchga ega emas.",
  consumer:
    "Sifatsiz tovar uchun talab qo'yish huquqi faqat kafolat muddati bilan cheklanmaydi — kafolat berilmagan hollarda ham qonun umumiy muddat belgilaydi. Chek yo'qolgani talab qo'yishga to'sqinlik qilmaydi: to'lovni boshqa dalillar bilan ham isbotlash mumkin.",
  criminal:
    "Aybsizlik prezumpsiyasi — har bir shaxs aybdorligi qonuniy kuchga kirgan sud hukmi bilan belgilanmaguncha aybsiz hisoblanadi. Shubhalar ayblanuvchi foydasiga hal qilinadi.",
  general:
    "O'zbekiston qonunchiligida qonunni bilmaslik javobgarlikdan ozod qilmaydi — shuning uchun o'z huquqlaringizni oldindan bilish eng yaxshi himoya.",
};

/* ── Ogohlantirish — amaliy va xavfsiz (aniq raqamlarsiz) ── */
export const CAUTIONS = {
  labor:
    "Mehnat nizolari bo'yicha sudga murojaat muddati boshqa nizolarga qaraganda ancha qisqa. Ishdan bo'shatish buyrug'ini olgan kuningizdanoq harakat boshlang — kechikish huquqingizni yo'qotishga olib kelishi mumkin.",
  family:
    "Bola manfaatiga taalluqli masalalarda sud har doim bolaning manfaatini birinchi o'ringa qo'yadi. Shuning uchun kelishuvni hujjat bilan rasmiylashtirish — og'zaki va'dadan ko'ra ishonchli.",
  inheritance:
    "Meros masalasida eng ko'p uchraydigan xato — muddatni o'tkazib yuborish. Merosxo'r bo'lsangiz, dastlab notariusga murojaat qilib, ish yuritishni ochtiring.",
  land:
    "Yer va ko'chmas mulk bo'yicha har qanday bitimni davlat ro'yxatidan o'tkazing. Ro'yxatdan o'tmagan hujjat sudda mulk huquqini isbotlash uchun yetarli bo'lmasligi mumkin.",
  consumer:
    "Tovarni qaytarish yoki almashtirish talabini YOZMA shaklda, ikkinchi nusxasiga sotuvchining qabul qilgani haqidagi belgisi bilan topshiring. Og'zaki talab keyinchalik isbotlanmaydi.",
  criminal:
    "So'roq paytida advokatsiz tushuntirish bermang. Jimlik huquqi — sizning konstitutsiyaviy huquqingiz va undan foydalanish aybga iqror bo'lish deb hisoblanmaydi.",
  general:
    "Qonun moddalarining tahriri o'zgarib turadi. Muhim qaror qabul qilishdan oldin joriy tahrirni Qonunlar kutubxonasidan tekshiring yoki yuristga murojaat qiling.",
};

/* ── Mavzu ikonasi uchun kalit (Lessons.jsx da lucide ikonaga bog'lanadi) ── */
export const TOPIC_EMOJI = {
  labor: "💼",
  family: "👨‍👩‍👧",
  inheritance: "📜",
  land: "🏡",
  consumer: "🛒",
  criminal: "⚖️",
  general: "📚",
};

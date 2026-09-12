"use strict";
/**
 * SAYT DARAJASIDAGI ENTITY GRAFI (Organization + WebSite).
 *
 * ⚠️ NIMA UCHUN KERAK EDI: ochiq qonun sahifalarida (`/qonun/...`) faqat
 * `Legislation` va `BreadcrumbList` sxemasi bor edi. Aynan shu sahifalar
 * AI botlari (GPTBot, PerplexityBot, ClaudeBot) eng ko'p o'qiydigan
 * sahifalar — chunki ular login talab qilmaydi va tayyor HTML beradi.
 * Lekin ularda "Huquq AI kim, nima qiladi, kim javobgar" degan signal
 * YO'Q edi: `Organization` sxemasi faqat `index.html` da, ya'ni SPA
 * ichida turardi. Natijada bot 7 100 ta modda sahifasini o'qib, ularni
 * hech qanday manba (entity) bilan bog'lay olmasdi.
 *
 * Endi har bir ochiq sahifa yagona `@id` ga ega tashkilot va sayt
 * tugunini olib yuradi, sahifaning o'z sxemasi esa ularga `publisher`
 * va `isPartOf` orqali ULANADI. Bu — GEO/LLMO da "entity consolidation"
 * deb ataladigan asosiy signal: tarqoq sahifalar bitta manbaga yig'iladi.
 *
 * ⚠️ `@id` qiymatlari `frontend/index.html` dagilar bilan AYNAN bir xil
 * (`#organization`, `#website`). Farq qilsa qidiruv tizimi ikkita
 * ALOHIDA tashkilot bor deb hisoblardi va ishonch ikkiga bo'linardi.
 */
const { SITE_URL, SITE_NAME, LOGO, LANGS } = require("./meta");

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/** Ikkala tildagi qisqa, faktik ta'rif — AI tizimlari aynan shuni oladi. */
const DESC = {
  uz:
    "O'zbekiston qonunchiligiga asoslangan sun'iy intellekt huquqiy " +
    "maslahat va ta'lim platformasi. Har bir javob lex.uz dagi amaldagi " +
    "kodekslar va Konstitutsiya matnidan olinadi.",
  ru:
    "Платформа юридических консультаций и обучения на основе " +
    "искусственного интеллекта и законодательства Узбекистана. Каждый " +
    "ответ опирается на действующие кодексы и Конституцию с lex.uz.",
};

/** Platforma qamrab olgan huquq sohalari — entity signali (GEO/AEO). */
const KNOWS_ABOUT = [
  "Mehnat huquqi",
  "Oila huquqi",
  "Meros huquqi",
  "Yer va ko'chmas mulk huquqi",
  "Iste'molchi huquqlari",
  "Jinoyat huquqi",
  "Fuqarolik huquqi",
  "Soliq huquqi",
  "Ma'muriy huquq",
  "Uy-joy huquqi",
];

/**
 * Har bir ochiq sahifaga qo'shiladigan ikkita tugun.
 * @param {string} lang "uz" | "ru"
 */
function siteEntities(lang) {
  return [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "LegalService"],
      "@id": ORG_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: LOGO },
      description: DESC[lang] || DESC.uz,
      email: "toxirovi82@gmail.com",
      sameAs: [
        "https://t.me/mening_huquqlarim_bot",
        "https://www.instagram.com/tox1roff_18/",
      ],
      areaServed: { "@type": "Country", name: "Uzbekistan" },
      knowsLanguage: LANGS,
      knowsAbout: KNOWS_ABOUT,
      serviceType: "AI huquqiy maslahat",
      // E-E-A-T: javoblar QANDAY tayyorlanishi ochiq yozilgan sahifa.
      // YMYL (huquq) sohasida bu Google uchun majburiy signal.
      publishingPrinciples: `${SITE_URL}/metodologiya`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": SITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: LANGS,
      publisher: { "@id": ORG_ID },
    },
  ];
}

module.exports = { siteEntities, ORG_ID, SITE_ID, KNOWS_ABOUT, DESC };

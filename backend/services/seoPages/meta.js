"use strict";
/**
 * OCHIQ QONUN SAHIFALARI — umumiy konstantalar va matnlar.
 *
 * ⚠️ NIMA UCHUN BU SAHIFALAR SERVERDA CHIZILADI:
 * asosiy sayt — SPA (React). AI botlari (GPTBot, PerplexityBot,
 * ClaudeBot) va ba'zi qidiruv robotlari JavaScript'ni ishga
 * tushirmaydi, ya'ni SPA ularga BO'SH sahifa bo'lib ko'rinadi.
 * Shu sabab qonun matni server tomonda tayyor HTML sifatida beriladi.
 *
 * ⚠️ NIMA UCHUN AYNAN QONUN MATNI OCHIQ:
 * qonun matni — rasmiy va ochiq ma'lumot (lex.uz uni bepul chop etadi),
 * uni yashirishning biznes ma'nosi yo'q. Platformaning qiymati esa
 * AI maslahatchi, darslar, testlar va amaliyotda — ular avvalgidek
 * ro'yxatdan o'tishni talab qiladi va bu sahifalarda BERILMAYDI.
 */

/** Foydalanuvchi ko'radigan asosiy domen (canonical shu yerga ishora qiladi). */
const SITE_URL = (
  process.env.PUBLIC_SITE_URL || "https://huquq-ai-xi.vercel.app"
).replace(/\/$/, "");

const SITE_NAME = "Huquq AI";
const LOGO = `${SITE_URL}/logo-96.png`;
const OG_IMAGE = { uz: `${SITE_URL}/og-image.jpg`, ru: `${SITE_URL}/og-image-ru.jpg` };

const LANGS = ["uz", "ru"];
const HREFLANG = { uz: "uz-UZ", ru: "ru-UZ" };
const OG_LOCALE = { uz: "uz_UZ", ru: "ru_RU" };

/** Sahifa matnlari. Ikkala til ham QO'LDA yozilgan — AI tarjimasi emas. */
const T = {
  uz: {
    brand: "Huquq AI",
    home: "Bosh sahifa",
    laws: "Qonunlar",
    lawsTitle: "O'zbekiston qonunlari va kodekslari",
    lawsDesc:
      "O'zbekiston Respublikasining amaldagi kodekslari va qonunlari — " +
      "to'liq matn, modda bo'yicha. Manba: lex.uz, har kuni yangilanadi.",
    article: "modda",
    articles: "modda",
    articleN: (n) => `${n}-modda`,
    chapter: "bob",
    section: "bo'lim",
    source: "Rasmiy manba (lex.uz)",
    prev: "Oldingi modda",
    next: "Keyingi modda",
    allArticles: "Barcha moddalar",
    ctaTitle: "Shu modda bo'yicha savolingiz bormi?",
    ctaText:
      "Huquq AI savolingizni tahlil qilib, aynan shu kabi qonun " +
      "moddalariga tayanib javob beradi — oddiy tilda, bir necha soniyada.",
    ctaBtn: "AI'dan bepul so'rash",
    disclaimer:
      "Matn lex.uz rasmiy manbasidan olingan va avtomatik yangilanadi. " +
      "Huquqiy ahamiyatga ega qarorlar uchun rasmiy nashrga va malakali " +
      "mutaxassisga murojaat qiling.",
    updated: "Yangilangan",
    notFound: "Modda topilmadi",
    notFoundText: "Bu manzilda modda yo'q. Kodeks ro'yxatiga qayting.",
    nearby: "Shu kodeksdagi yaqin moddalar",
    lang: "Ruscha",
    otherLangHref: "?lang=ru",
    /* ── Savol-javob markazi (AEO) ── */
    qa: "Savol-javob",
    qaTitle: "Huquqiy savollar va javoblar",
    qaDesc:
      "O'zbekiston qonunchiligi bo'yicha eng ko'p beriladigan savollarga " +
      "qisqa va aniq javoblar — har biri amaldagi kodeks moddasiga tayanadi.",
    qaAnswer: "Qisqa javob",
    qaBasis: "Qonun asosi",
    qaRelated: "Shu mavzudagi boshqa savollar",
    qaAll: "Barcha savollar",
    qaAreas: "Huquq sohalari",
    qaNotFound: "Savol topilmadi",
    qaNotFoundText: "Bu manzilda savol yo'q. Savollar ro'yxatiga qayting.",
    /* ── Metodologiya (E-E-A-T) ── */
    method: "Metodologiya",
    methodTitle: "Metodologiya va tahririy siyosat",
    methodDesc:
      "Huquq AI javoblari qanday tayyorlanadi, manba qayerdan olinadi, " +
      "qanday tekshiriladi va qanday cheklovlarga ega.",
    markdown: "Matn ko'rinishi (LLM uchun)",
  },
  ru: {
    brand: "Huquq AI",
    home: "Главная",
    laws: "Законы",
    lawsTitle: "Законы и кодексы Узбекистана",
    lawsDesc:
      "Действующие кодексы и законы Республики Узбекистан — полный " +
      "текст по статьям. Источник: lex.uz, обновляется ежедневно.",
    article: "статья",
    articles: "статей",
    articleN: (n) => `Статья ${n}`,
    chapter: "глава",
    section: "раздел",
    source: "Официальный источник (lex.uz)",
    prev: "Предыдущая статья",
    next: "Следующая статья",
    allArticles: "Все статьи",
    ctaTitle: "Есть вопрос по этой статье?",
    ctaText:
      "Huquq AI разберёт ваш вопрос и ответит, опираясь именно на такие " +
      "статьи закона — простым языком, за несколько секунд.",
    ctaBtn: "Спросить AI бесплатно",
    disclaimer:
      "Текст получен из официального источника lex.uz и обновляется " +
      "автоматически. Для юридически значимых решений обращайтесь к " +
      "официальному изданию и квалифицированному специалисту.",
    updated: "Обновлено",
    notFound: "Статья не найдена",
    notFoundText: "По этому адресу статьи нет. Вернитесь к списку кодекса.",
    nearby: "Соседние статьи кодекса",
    lang: "O'zbekcha",
    otherLangHref: "?lang=uz",
    /* ── Вопросы и ответы (AEO) ── */
    qa: "Вопросы и ответы",
    qaTitle: "Юридические вопросы и ответы",
    qaDesc:
      "Короткие и точные ответы на самые частые вопросы по " +
      "законодательству Узбекистана — каждый опирается на статью " +
      "действующего кодекса.",
    qaAnswer: "Короткий ответ",
    qaBasis: "Правовое основание",
    qaRelated: "Другие вопросы по этой теме",
    qaAll: "Все вопросы",
    qaAreas: "Отрасли права",
    qaNotFound: "Вопрос не найден",
    qaNotFoundText: "По этому адресу вопроса нет. Вернитесь к списку вопросов.",
    /* ── Методология (E-E-A-T) ── */
    method: "Методология",
    methodTitle: "Методология и редакционная политика",
    methodDesc:
      "Как готовятся ответы Huquq AI, откуда берётся источник, как он " +
      "проверяется и какие есть ограничения.",
    markdown: "Текстовая версия (для LLM)",
  },
};

function langOf(req) {
  const l = String(req.query.lang || "").toLowerCase();
  return LANGS.includes(l) ? l : "uz";
}

/** Ochiq sahifa manzillari — canonical va ichki havolalar uchun yagona joy. */
const path = {
  laws: () => "/qonunlar",
  code: (code) => `/qonun/${encodeURIComponent(code)}`,
  article: (code, num) =>
    `/qonun/${encodeURIComponent(code)}/${encodeURIComponent(num)}`,
  qaIndex: () => "/savollar",
  qa: (slug) => `/savol/${encodeURIComponent(slug)}`,
  method: () => "/metodologiya",
};

module.exports = {
  SITE_URL,
  SITE_NAME,
  LOGO,
  OG_IMAGE,
  LANGS,
  HREFLANG,
  OG_LOCALE,
  T,
  langOf,
  path,
};

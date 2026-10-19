"use strict";
/**
 * PULLIK AI PROMPTLARI.
 *
 * ⚠️ Asosiy system prompt BARCHA tariflar va savollar uchun BIR XIL (o'zgarmas
 * matn) — OpenAI prompt keshi bir xil boshlanishni ~10 barobar arzon hisoblaydi.
 * Tarifga xos qism va manbalar undan KEYIN, alohida xabarlarda keladi.
 *
 * Qoidalar loyihaning asosiy talabidan: modda, muddat, summa va foiz
 * FAQAT manbalarda bo'lsa keltiriladi; manbada yo'q qonun o'ylab topilmaydi.
 */
const CORE = `Siz — HuquqTech huquqiy yordamchisisiz (O'zbekiston Respublikasi qonunchiligi).
Вы — юридический помощник HuquqTech (законодательство Республики Узбекистан).

QAT'IY QOIDALAR / СТРОГИЕ ПРАВИЛА:
1. Faqat foydalanuvchi xabaridan keyin berilgan MANBALAR (Lex.uz bazasidagi rasmiy modda matnlari) va saytning tekshirilgan javobiga tayaning. Отвечайте только на основе приведённых ИСТОЧНИКОВ.
2. Manbalarda YO'Q qonun, kodeks yoki modda raqamini HECH QACHON yozmang. Не называйте законы и статьи, которых нет в источниках.
3. Muddat, summa, foiz, jazo miqdorini faqat manba matnida aniq yozilgan bo'lsa keltiring; aks holda "aniq miqdorni Lex.uz da tekshiring" deng.
4. Manbalar savolga yetarli bo'lmasa, buni ochiq ayting va nimani aniqlashtirish kerakligini yoki qaysi organga murojaat qilishni umumiy tarzda ko'rsating. Taxmin qilmang.
5. Manbalardagi savolga aloqasi yo'q moddalarni e'tiborsiz qoldiring.
6. Modda keltirganda shaklda yozing: "Oila kodeksi, 44-modda" / "Семейный кодекс, статья 44".
7. Javob tili — foydalanuvchi tili (o'zbekcha lotin yoki rus). Отвечайте на языке пользователя.
8. Tuzilma: avval savolga TO'G'RIDAN-TO'G'RI javob; keyin "Huquqiy asos" (moddalar bilan); amaliy qadamlar faqat foydalanuvchi o'z holatini aytsa yoki "nima qilay" deb so'rasa.
9. Siz advokat emassiz: murakkab yoki sudgacha borgan ishlarda malakali yuristga murojaat qilishni bir jumla bilan eslating.
10. Fayl, havola, telefon raqami yoki manzilni o'ylab topmang. Ничего не выдумывайте: ссылки, телефоны, адреса.
11. Markdown: qisqa sarlavhalar, ro'yxatlar. Ortiqcha takror va suv yo'q.`;

const TIER_STYLE = {
  free: "Uslub: qisqa va aniq (6–10 jumla).",
  basic: "Uslub: aniq va tushunarli, oddiy tilda; zarur bo'lsa qisqa misol.",
  pro: "Uslub: professional huquqiy tahlil — normaning mazmuni, qo'llanish shartlari, istisnolar va amaliy oqibatlar. Hujjat bo'lsa, uning bandlarini manbalardagi normalar bilan solishtiring.",
  premium:
    "Uslub: chuqur professional tahlil — barcha tegishli normalar o'zaro bog'liqligi, turli talqinlar va xavflar, dalillar, muddatlar (faqat manbadagi), harakatlar ketma-ketligi. Hujjat bo'lsa, xavfli va noaniq bandlarni alohida ko'rsating.",
};

const VOICE_STYLE =
  "OVOZLI rejim: javob ovoz bilan o'qiladi — markdown, ro'yxat belgilari va jadvallarsiz, 4–7 qisqa jumla, eng muhim modda bilan.";

function buildMessages({ tier, lang, sources, localAnswer, history, msg, voice, docText, image }) {
  const sys2 = [TIER_STYLE[tier] || TIER_STYLE.basic, voice ? VOICE_STYLE : "", lang === "ru" ? "Отвечайте на русском языке." : "Javobni o'zbek tilida (lotin) yozing."]
    .filter(Boolean)
    .join("\n");

  const context = [sources];
  if (localAnswer) {
    context.push(
      (lang === "ru" ? "ПРОВЕРЕННЫЙ ОТВЕТ САЙТА (можно опираться и улучшать):\n" : "SAYTNING TEKSHIRILGAN JAVOBI (unga tayanib, yaxshilang):\n") +
        localAnswer.slice(0, 3500),
    );
  }
  if (docText) {
    context.push((lang === "ru" ? "ДОКУМЕНТ ПОЛЬЗОВАТЕЛЯ:\n" : "FOYDALANUVCHI HUJJATI:\n") + docText);
  }

  const messages = [
    { role: "system", content: CORE },
    { role: "system", content: sys2 },
    ...history,
  ];
  const userText = `${msg}\n\n---\n${context.join("\n\n---\n")}`;
  if (image) {
    messages.push({
      role: "user",
      content: [
        { type: "text", text: userText },
        { type: "image_url", image_url: { url: `data:${image.mime};base64,${image.base64}` } },
      ],
    });
  } else {
    messages.push({ role: "user", content: userText });
  }
  return messages;
}

function fixMessage(bad, lang) {
  return lang === "ru"
    ? `В ответе есть статьи, которых нет в источниках: ${bad.join(", ")}. Перепишите ответ, ссылаясь ТОЛЬКО на статьи из источников.`
    : `Javobingizda manbalarda yo'q moddalar bor: ${bad.join(", ")}. Javobni FAQAT manbalardagi moddalarga tayanib qayta yozing.`;
}

/* Budjet/limit tugaganda lokal javob oxiriga qo'shiladigan izoh */
const NOTES = {
  uz: {
    user_budget: "_Oylik kengaytirilgan AI limitingiz tugadi — javob sayt bazasidan. Limit keyingi oy yangilanadi yoki tarifni oshiring._",
    user_tokens: "_Oylik kengaytirilgan AI limitingiz tugadi — javob sayt bazasidan. Limit keyingi oy yangilanadi yoki tarifni oshiring._",
    rate: "_Juda tez so'ralmoqda — bu javob sayt bazasidan. Bir daqiqadan keyin kengaytirilgan AI qayta ishlaydi._",
  },
  ru: {
    user_budget: "_Месячный лимит расширенного ИИ исчерпан — ответ из базы сайта. Лимит обновится в следующем месяце, или повысьте тариф._",
    user_tokens: "_Месячный лимит расширенного ИИ исчерпан — ответ из базы сайта. Лимит обновится в следующем месяце, или повысьте тариф._",
    rate: "_Слишком частые запросы — ответ из базы сайта. Через минуту расширенный ИИ снова доступен._",
  },
};

const noteFor = (reason, lang) => NOTES[lang === "ru" ? "ru" : "uz"][reason] || "";

module.exports = { buildMessages, fixMessage, noteFor, CORE };

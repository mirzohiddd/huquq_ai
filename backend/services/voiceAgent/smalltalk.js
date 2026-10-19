"use strict";
/**
 * Ovozli yordamchi — ODDIY SUHBAT (2026-10-19).
 *
 * Foydalanuvchi: "qancha savol bersam ham 'savolingizni to'liq tushunmadim'
 * deydi". O'lchandi: huquqiy savollarga javob to'g'ri, lekin odam robotni
 * birinchi navbatda "Sen kimsan?", "Qalaysan?", "Nima qila olasan?",
 * "Huquqlarim haqida gapir" kabi gaplar bilan sinaydi — ularning HAMMASI
 * aniqlashtirish qolipiga tushardi, "Menga yordam bera olasanmi?" esa
 * qonun qidiruvida pudrat shartnomasiga tushardi. Bu iboralar endi
 * qidiruvdan OLDIN tanib olinadi va javob deterministik (tez, har doim
 * to'g'ri). Mavzudan tashqari savol uchun — aniq yo'naltirish.
 *
 * ⚠️ JS `\b` kirillni tanimaydi — kirill naqshlarda ishlatilmaydi.
 */

const EXAMPLES = {
  uz: "Masalan: «Ish haqim berilmayapti, nima qilay?», «Ajrashsam bola kim bilan qoladi?» yoki «Meros qanday bo'linadi?»",
  ru: "Например: «Не платят зарплату, что делать?», «С кем останется ребёнок при разводе?» или «Как делится наследство?»",
};

const RULES = [
  {
    key: "identity",
    re: /(\bsen kim|\bkimsan\b|\bisming\b|o'?zing haqingda|o'?zingni tanishtir|кто ты|ты кто|как тебя зовут|расскажи о себе)/i,
    uz: () => `Men HuquqTech ovozli yordamchisiman. O'zbekiston qonunchiligi bo'yicha savollaringizga javob beraman — mehnat, oila, meros, uy-joy, jinoyat va boshqa sohalarda. ${EXAMPLES.uz}`,
    ru: () => `Я голосовой помощник HuquqTech. Отвечаю на вопросы по законодательству Узбекистана — труд, семья, наследство, жильё, уголовное право и другое. ${EXAMPLES.ru}`,
  },
  {
    key: "howareyou",
    re: /(\bqalaysan|\bqalesan|\byaxshimisan|\bqandaysan|\bishlar qalay|\bnima gap|как дела|как ты|как поживаешь)/i,
    uz: () => "Rahmat, yaxshiman! Sizga qanday yordam bera olaman? Huquqiy savolingizni ayting.",
    ru: () => "Спасибо, всё отлично! Чем могу помочь? Задайте ваш правовой вопрос.",
  },
  {
    key: "capability",
    re: /(nima qila olasan|nimalar qila olasan|yordam bera olasan|yordam berasan|qanday yordam|nimaga yordam|^\s*yordam ber\w*\W*$|что ты умеешь|чем ты можешь|можешь помочь|^\s*помоги\W*$)/i,
    uz: () => `Albatta! Men huquqiy vaziyatingizni tushuntirib beraman: qaysi qonun nima deydi, huquqlaringiz qanday va nima qilish kerak. Shunchaki vaziyatingizni oddiy so'z bilan ayting. ${EXAMPLES.uz}`,
    ru: () => `Конечно! Я объясню вашу правовую ситуацию: что говорит закон, какие у вас права и что делать. Просто опишите ситуацию своими словами. ${EXAMPLES.ru}`,
  },
  {
    key: "general",
    re: /(^\s*(huquq|qonun)(lar)?(im)? (nima|haqida)|huquqlarim haqida|qonunlar haqida|qanday huquqlarim bor\W*$|что такое (право|закон)|о моих правах|расскажи о правах)/i,
    uz: () => `Huquq — bu qonun bilan himoyalangan imkoniyatlaringiz. Ular sohaga qarab farq qiladi: mehnat, oila, meros, uy-joy, iste'molchi va boshqalar. Qaysi soha yoki qaysi vaziyat sizni qiziqtiradi? ${EXAMPLES.uz}`,
    ru: () => `Права — это возможности, защищённые законом. Они зависят от сферы: труд, семья, наследство, жильё, права потребителя и другие. Какая сфера или ситуация вас интересует? ${EXAMPLES.ru}`,
  },
  {
    key: "bye",
    re: /(^\s*xayr|ko'?rishguncha|salomat bo'?ling|пока\W*$|до свидания|всего доброго)/i,
    uz: () => "Xayr! Savolingiz bo'lsa, istalgan payt qaytib keling.",
    ru: () => "До свидания! Если появятся вопросы — возвращайтесь.",
  },
];

/** @returns {{ key: string, text: string } | null} */
function smallTalk(text = "", lang = "uz") {
  const t = String(text).trim();
  if (!t || t.split(/\s+/).length > 10) return null;
  const rule = RULES.find((r) => r.re.test(t));
  if (!rule) return null;
  return { key: rule.key, text: (lang === "ru" ? rule.ru : rule.uz)() };
}

/** Mavzudan tashqari savol — "tushunmadim" emas, aniq yo'naltirish. */
function offTopicReply(lang = "uz") {
  return lang === "ru"
    ? `Я отвечаю только на правовые вопросы по законодательству Узбекистана. ${EXAMPLES.ru}`
    : `Men faqat O'zbekiston qonunchiligi bo'yicha huquqiy savollarga javob beraman. ${EXAMPLES.uz}`;
}

module.exports = { smallTalk, offTopicReply };

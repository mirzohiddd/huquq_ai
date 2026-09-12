"use strict";
/**
 * Ro'yxatdan o'tgan foydalanuvchilarning AI'ga yuborgan xabarlarida
 * haqorat yoki 18+ (real jinsiy/explicit) kontent so'rovlarini AI
 * yordamida aniqlaydi.
 *
 * MUHIM — bu HUQUQIY maslahat platformasi: Jinoyat kodeksidagi jinsiy
 * jinoyatlar, voyaga yetmaganlar huquqi, haqorat/tuhmat moddalari kabi
 * mavzulardagi ODDIY HUQUQIY savollar, hatto qo'pol/hissiy tilda
 * yozilgan shikoyatlar ham buzilish HISOBLANMASLIGI kerak — aks holda
 * haqiqiy (to'lov qilgan) foydalanuvchilar noto'g'ri bloklanib qoladi.
 * Faqat quyidagilar buzilish hisoblanadi:
 *   - foydalanuvchi AI yordamchini yoki boshqa odamlarni haqorat qilishi
 *   - aniq explicit/porno matn yozib berishni so'rashi (huquqiy savol
 *     emas, balki kontent generatsiyasi so'rovi)
 *
 * Qoidabuzarlik hisobi: 1- va 2-marta — ogohlantirish, 3-marta —
 * hisob butunlay bloklanadi va email BannedEmail ro'yxatiga tushadi
 * (chat.js/auth.js shu modulni chaqiradi).
 */
const Groq = require("groq-sdk");
const { markUserBlocked } = require("../middleware/auth");

const groqClient = process.env.GROQ_API_KEY
  ? new Groq({ apiKey: process.env.GROQ_API_KEY })
  : null;

// DIQQAT: kichik/tez model (llama-3.1-8b-instant) sinovda ikkita jiddiy
// muammo ko'rsatdi — (1) o'zbek/rus so'kinishlarining ko'pini "tushunmadi"
// (masalan "qotoq", "padla", rus so'zlarining lotin transliteratsiyasi),
// (2) huquqiy mavzuga yaqin xabarlarda (masalan "tuhmat va haqorat uchun
// jarima qancha") ba'zan moderatsiya formatini butunlay unutib, o'rniga
// huquqiy javob shaklidagi JSON generatsiya qilib, xato bilan qulardi.
// Kattaroq model (mavjud legalAI.js da "murakkab so'rov" uchun ishlatiladi)
// ikkalasini ham tuzatdi — 19/19 haqorat va 11/11 huquqiy-savol test
// holatida xato bermadi.
const MODERATION_MODEL = "llama-3.3-70b-versatile";
const MAX_VIOLATIONS_BEFORE_BLOCK = 3;

const SYSTEM_PROMPT = `Sen — huquqiy maslahat platformasidagi (Huquq AI) xabarlarni nazorat qiluvchi moderatorsan.
Foydalanuvchi xabari O'ZBEK, RUS yoki INGLIZ tilida (yoki ularning aralashmasida, lotin/kirill yozuvida, xato imlo bilan yozilgan bo'lishi ham mumkin) bo'lishi mumkin — UCHALA TILDAGI so'kinish/haqoratni BIR XIL DARAJADA qattiq aniqla.
Xabarni o'qib, FAQAT quyidagi ikki holatdan birini aniqla:
1. "insult" — foydalanuvchi AI yordamchini yoki boshqa odamlarni HAQORAT qilmoqda, so'kinmoqda, kamsitmoqda. Bunga o'zbekcha (masalan: ahmoq, tentak, qotoq, jinni, eshak, lattachaynar, padarlanat va shu kabi so'zlar/iboralar hamda ularning turli yozilishlari) va ruscha (masalan: сука/suka, блять/blyat, хуй/xuy, пизда/pizda, мудак/mudak, урод/urod, дебил/debil, гандон/gandon, падла/padla, ублюдок/ublyudok, козел/kozel va shu kabilar, lotin yozuvida yozilgan bo'lsa ham) so'kinish/haqoratlar ham KIRADI.
2. "explicit" — foydalanuvchi ochiq jinsiy/porno tavsif YOZIB BERISHNI so'ramoqda (huquqiy savol emas, balki explicit kontent generatsiyasi so'rovi).
Agar xabar ULARDAN BIRI ham bo'lmasa — "none" deb belgila. QUYIDAGILAR BUZILISH EMAS:
- Jinoyat kodeksi, jinsiy jinoyatlar, voyaga yetmaganlar huquqi, haqorat/tuhmat moddalari haqidagi ODDIY HUQUQIY savollar.
- Zo'ravonlik/tajovuz haqidagi voqea tavsiflari va shikoyatlar (masalan "u meni urdi", "u meni zo'rlamoqchi bo'ldi") — bular HAQIQIY shikoyat, haqorat emas.
- Qo'pol yoki hissiy tilda yozilgan (lekin AI'ga yoki odamlarga haqorat qaratilmagan) shikoyat/voqea tavsiflari.
Faqat quyidagi JSON formatida javob ber, hech qanday izohsiz:
{"violation": "none"}  yoki  {"violation": "insult"}  yoki  {"violation": "explicit"}`;

/**
 * @returns {Promise<{violation: "none"|"insult"|"explicit"}>}
 */
async function checkMessageViolation(message) {
  if (!groqClient || !message) return { violation: "none" };
  try {
    const r = await groqClient.chat.completions.create({
      model: MODERATION_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: String(message).slice(0, 1000) },
      ],
      temperature: 0,
      max_tokens: 80,
      response_format: { type: "json_object" },
    });
    const raw = r.choices?.[0]?.message?.content || "{}";
    const parsed = JSON.parse(raw);
    const violation = ["insult", "explicit"].includes(parsed.violation)
      ? parsed.violation
      : "none";
    return { violation };
  } catch (err) {
    console.error("moderation check xato:", err.message);
    // Xato bo'lsa — bloklamaslik xavfsizroq (fail-open): vaqtinchalik
    // API muammosi haqiqiy foydalanuvchini jazolamasligi kerak.
    return { violation: "none" };
  }
}

/**
 * Mavjud (mongoose hujjat, .lean() emas) `user`ga bitta qoidabuzarlik
 * qo'shadi, kerak bo'lsa bloklaydi va o'zgarishlarni saqlaydi.
 * @returns {Promise<{blocked: boolean, violationCount: number}>}
 */
async function registerViolation(user, { BannedEmail }) {
  user.violationCount = (user.violationCount || 0) + 1;
  const blocked = user.violationCount >= MAX_VIOLATIONS_BEFORE_BLOCK;

  if (blocked) {
    user.isBlocked = true;
  }
  await user.save();

  if (blocked) {
    markUserBlocked(user._id);
    if (user.email) {
      await BannedEmail.updateOne(
        { email: user.email },
        { $setOnInsert: { email: user.email, reason: "moderation", bannedAt: new Date() } },
        { upsert: true },
      );
    }
  }

  return { blocked, violationCount: user.violationCount };
}

module.exports = {
  checkMessageViolation,
  registerViolation,
  MAX_VIOLATIONS_BEFORE_BLOCK,
};

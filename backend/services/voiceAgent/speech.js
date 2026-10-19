"use strict";
/**
 * Ovozli yordamchining GAPI (2026-10-15).
 *
 * To'liq javob (moddalar iqtiboslari bilan) EKRANDA ko'rsatiladi, robot esa
 * uning QISQA mazmunini aytadi: sarlavha + asosiy fikr + birinchi qadam.
 * Sabab: 900 belgilik huquqiy matnni ovozda tinglash charchatadi, ovoz
 * yaratish ham sekinlashadi. Yangi ma'lumot qo'shilmaydi — faqat javobning
 * o'z jumlalari olinadi.
 */

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const OPENERS = {
  uz: {
    neutral: ["Yaxshi savol.", "Tushunarli.", "Hozir tushuntirib beraman.", "Keling, ko'rib chiqamiz."],
    sad: ["Bu og'ir vaziyat, sizga hamdardman.", "Afsuski shunday bo'libdi. Lekin qonun sizni himoya qiladi."],
    happy: ["Ajoyib!", "Zo'r savol!"],
  },
  ru: {
    neutral: ["Хороший вопрос.", "Понятно.", "Сейчас объясню."],
    sad: ["Это тяжёлая ситуация, сочувствую вам.", "Мне жаль, что так вышло. Но закон на вашей стороне."],
    happy: ["Отлично!", "Прекрасный вопрос!"],
  },
};

const TEXT = {
  uz: {
    more: "Batafsili ekranda.",
    firstStep: "Birinchi qadam:",
    offerQuiz: "Xohlasangiz, shu mavzuda bilimingizni sinab ko'raman.",
    insult:
      "Iltimos, hurmat bilan gaplashaylik. Men sizga yordam berish uchun shu yerdaman — huquqiy savolingizni ayting.",
    greet:
      "Salom! Men HuquqTech yordamchisiman. Huquqiy savolingizni ayting yoki «dars boshlaymiz» deng — sizni huquq bo'yicha tayyorlayman.",
    thanks: "Arzimaydi! Yana savolingiz bo'lsa, bemalol so'rang. Bilimingizni sinab ko'rishni xohlasangiz, dars rejimini yoqing.",
    unheard: "Kechirasiz, ovozingizni aniq eshitmadim. Iltimos, yana bir bor, sekinroq aytib bering.",
    unclear: "Kechirasiz, savolingizni to'liq tushunmadim.",
    unclearAsk: "Savolingizni boshqacha, batafsilroq aytib bera olasizmi? Masalan: ish haqi, ajrashish yoki meros haqida.",
    maybe: (list) => `Siz ${list} haqida so'rayapsizmi?`,
    or: " yoki ",
  },
  ru: {
    more: "Подробнее — на экране.",
    firstStep: "Первый шаг:",
    offerQuiz: "Если хотите, я задам вам вопрос по этой теме и проверю знания.",
    insult: "Давайте общаться уважительно. Я здесь, чтобы помочь — задайте ваш правовой вопрос.",
    greet: "Здравствуйте! Я помощник HuquqTech. Задайте правовой вопрос или включите режим урока — я помогу подготовиться по праву.",
    thanks: "Пожалуйста! Если появятся вопросы — спрашивайте.",
    unheard: "Простите, я плохо расслышал. Повторите, пожалуйста, чуть медленнее.",
    unclear: "Простите, я не совсем понял вопрос.",
    unclearAsk: "Можете сформулировать иначе и подробнее? Например: о зарплате, разводе или наследстве.",
    maybe: (list) => `Вы спрашиваете о ${list}?`,
    or: " или ",
  },
};

const T = (lang) => TEXT[lang] || TEXT.uz;

function plain(line) {
  return String(line)
    .replace(/\*\*|__|`|^#+\s*|^>\s*/g, "")
    .replace(/[«»]/g, "")
    .trim();
}

/** Jumlalarni uzunlik chegarasigacha yig'adi. */
function takeSentences(text, max) {
  const parts = String(text).match(/[^.!?]+[.!?]*/g) || [];
  let out = "";
  for (const p of parts) {
    if (out && (out + p).length > max) break;
    out += p;
  }
  return out.trim();
}

/**
 * To'liq javobdan ovoz uchun qisqa matn.
 * @returns {{ text: string, truncated: boolean }}
 */
function speechSummary(answer, lang = "uz") {
  const lines = String(answer || "").split("\n").map((l) => l.trim());
  const title = lines[0]?.startsWith("**") ? plain(lines[0]) : "";
  const body = [];
  let step = "";
  let inSteps = false;
  for (const l of lines.slice(title ? 1 : 0)) {
    if (!l) continue;
    if (/^\*\*/.test(l)) {
      if (body.length && !inSteps && !/nima qilish|что делать/i.test(l)) break;
      inSteps = /nima qilish|что делать/i.test(l);
      continue;
    }
    if (inSteps) {
      if (!step && /^\d+\./.test(l)) step = plain(l.replace(/^\d+\.\s*/, ""));
      continue;
    }
    if (/^(•|📖|_)/u.test(l)) continue;
    body.push(plain(l));
  }
  let main = takeSentences(body.join(" "), 210);
  /* Ro'yxat ko'rinishidagi javob ("…quyidagilar topildi:") — mazmunsiz
     qolmasin: birinchi topilgan modda sarlavhasi va matnidan bir jumla. */
  if (/:\s*$/.test(main)) {
    const i = lines.findIndex((l) => /^\*\*\d+\./.test(l));
    if (i >= 0) {
      const head = plain(lines[i]).replace(/^\d+\.\s*/, "").replace(/^[^,]+,\s*/, "");
      const next = lines.slice(i + 1).find((l) => l && !/^\*\*/.test(l));
      main = `${main} ${head}.${next ? ` ${takeSentences(plain(next), 160)}` : ""}`;
    }
  }
  const parts = [title && !main.startsWith(title) ? `${title}.` : "", main];
  if (step) parts.push(`${T(lang).firstStep} ${takeSentences(step, 120)}`);
  const text = parts.filter(Boolean).join(" ").replace(/\.\./g, ".");
  return { text, truncated: text.length + 40 < String(answer).length };
}

function opener(emotion, lang) {
  const set = (OPENERS[lang] || OPENERS.uz)[emotion];
  return set ? pick(set) : "";
}

/** "Topilmadi" javobidagi yaqin mavzular → "Siz X yoki Y haqida so'rayapsizmi?" */
function clarifyText(answer, lang, unheard) {
  const L = T(lang);
  if (unheard) return L.unheard;
  // Faqat "yaqin mavzular" ro'yxati — undan oldingi umumiy misollar emas
  const tail = String(answer || "").split(/Balki sizga|Возможно, вам/)[1] || "";
  const near = [...tail.matchAll(/«([^»]{3,60})»/g)]
    .map((m) => m[1])
    .filter((h) => !/modda|kodeksi/i.test(h))
    .slice(0, 2);
  const guess = near.length ? ` ${L.maybe(near.map((h) => `«${h}»`).join(L.or))}` : "";
  return `${L.unclear}${guess} ${L.unclearAsk}`;
}

module.exports = { speechSummary, opener, clarifyText, TEXT, T, takeSentences, plain };

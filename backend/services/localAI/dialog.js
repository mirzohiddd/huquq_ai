"use strict";
/**
 * SUHBAT QATLAMI — lokal AI ustidan (2026-10-14).
 *
 * Foydalanuvchi shikoyati: "AI savolimni yaxshi tushunmayapti — qisqa
 * javob ber desam yana avvalgi javobni tashlayapti, bir xil javoblar".
 * Ikki sabab bor edi va ikkalasi shu yerda hal qilinadi:
 *   1. Uslub buyrug'i ("qisqa", "batafsil", "oddiy tilda", "qadamma-qadam",
 *      "boshqacha") mavzusiz bo'lgani uchun oldingi savol qayta ishlanib,
 *      AYNAN o'sha javob qaytardi → endi javob so'ralgan shaklga keltiriladi.
 *   2. Boshqacha so'ralgan savol bir xil javobga tushsa, uzun matn
 *      so'zma-so'z takrorlanardi → endi qisqa xulosa va izoh beriladi.
 *
 * Asosiy qidiruv mantig'iga (index.js) TEGILMADI — u o'ralgan holda chaqiriladi.
 */
const { detectStyle, applyStyle, sameAnswer } = require("./answerStyle");
const { words } = require("./text");
const { parseExplain } = require("./lessonExplain");

const T = {
  uz: {
    which: "Qaysi savol bo'yicha javobni o'zgartiray? Savolingizni yozing — masalan: «Maosh 2 oy berilmadi, qisqa javob ber».",
    same: "_Bu savol ham yuqoridagi mavzuga tegishli — takrorlamaslik uchun qisqacha:_",
    full: "_Bazadagi eng to'liq javob yuqorida berilgan (qonun moddalari bilan). Amaliy qadamlar:_",
  },
  ru: {
    which: "К какому вопросу изменить ответ? Напишите вопрос — например: «Зарплату не платят 2 месяца, кратко».",
    same: "_Этот вопрос относится к теме выше — чтобы не повторяться, кратко:_",
    full: "_Самый полный ответ из базы дан выше (со статьями закона). Практические шаги:_",
  },
};

/** Oxirgi MAZMUNLI savol (uslub buyruqlari chetlab o'tiladi). */
function baseQuestion(userTurns, msg) {
  const turns = userTurns.filter((x) => x && x !== msg);
  for (let i = turns.length - 1; i >= 0; i--) {
    const st = detectStyle(turns[i]);
    if (!st) return { q: turns[i], before: turns[i - 1] || "" };
    if (words(st.rest).length >= 2) return { q: st.cleaned, before: turns[i - 1] || "" };
  }
  return null;
}

/* "Nima qilay?" kabi davom savoli o'sha javobga tushsa — amaliy qadamlar
   ko'rsatiladi (qisqa xulosa emas): foydalanuvchi aynan harakat so'ragan. */
// "Qaysi moddaga asoslanding?" — asos so'ralgan: moddalar ro'yxati
const BASIS = /qaysi (modda|kodeks|qonun)|asoslan|isbot|dalil|manba|qayerda yozilgan|какая статья|какой закон|основани|источник/i;
const ACTION = /nima qil(ay|ish|amiz|sam)|qayerga (murojaat|boray)|что (мне )?делать|куда обращ/i;

function withDialog(base) {
  return async function localLegalAnswer(p) {
    const { msg, userTurns = [], prevAnswer = "", hasImage } = p;
    // Darsdagi "tushuntirib ber" so'rovi uslub buyrug'i emas — o'z mavzusi bor
    const st = hasImage || parseExplain(msg) ? null : detectStyle(msg);
    const own = !!st && words(st.rest).length >= 2;
    const L = T[p.lang] || T.uz;

    // Mavzu filtri rad etgan xabar (`strict`): faqat uslub buyrug'i bo'lsa —
    // tasodifiy moddani qidirish o'rniga savolni so'raymiz
    if (st && p.strict && !own) {
      return { answer: L.which, category: p.category || "boshqa", provider: "local", found: false, scoped: true };
    }
    if (!st || p.strict) {
      const res = await base(p);
      // Boshqacha so'ralgan, lekin o'sha javobga tushgan savol — so'zma-so'z takror emas
      if (res.found && !p.variant && sameAnswer(res.answer, prevAnswer)) {
        const lang = /[а-яё]/i.test(res.answer.slice(0, 200)) ? "ru" : "uz";
        const style = BASIS.test(msg) ? "laws" : ACTION.test(msg) ? "steps" : "short";
        const note = style === "short" ? `${T[lang].same}\n\n` : "";
        return { ...res, answer: `${note}${applyStyle(res.answer, style, lang)}` };
      }
      return res;
    }

    const target = own ? { q: st.cleaned, before: p.prevUserText || "" } : baseQuestion(userTurns, msg);
    if (!target) return { answer: L.which, category: p.category || "boshqa", provider: "local", found: false };

    const q = { ...p, msg: target.q, prevUserText: target.before, variant: 0 };
    const full = await base(q);
    if (!full.found) return full;
    const lang = /[а-яё]/i.test(full.answer.slice(0, 200)) ? "ru" : "uz";

    /* "Batafsil" — to'liq javob. U allaqachon berilgan bo'lsa, buni ochiq aytamiz
       (boshqa mavzudagi "muqobil" javob chalg'itardi — sinovda "bola kim bilan
       qoladi" savoliga "bolaning xususiy mulki" chiqqan). */
    if (st.style === "detail") {
      return sameAnswer(full.answer, prevAnswer) ? { ...full, answer: `${T[lang].full}\n\n${applyStyle(full.answer, "steps", lang)}` } : full;
    }
    // "Boshqacha" — o'sha mazmun boshqa tuzilishda (sodda til + qadamlar)
    if (st.style === "other") return { ...full, answer: applyStyle(full.answer, "simple", lang) };
    const styled = applyStyle(full.answer, st.style, lang);
    // "Yana qisqaroq" — qisqa javob allaqachon berilgan bo'lsa, undan ham ixchamroq
    if (st.style === "short" && sameAnswer(styled, prevAnswer)) {
      return { ...full, answer: applyStyle(full.answer, "tiny", lang) };
    }
    return { ...full, answer: styled };
  };
}

module.exports = { withDialog };

"use strict";
/**
 * TELEGRAM — DARSLAR VA TESTLAR.
 *
 * Botga saytdagi ikkita o'quv bo'limini olib kiradi. Kontent MANBAI
 * bir xil (`Lesson` / `Quiz` kolleksiyalari), progress ham BIR XIL
 * joyda (`services/progressService.js` → `LessonProgress`), shuning
 * uchun Telegramda tugatilgan dars saytda ham tugallangan bo'lib
 * ko'rinadi va aksincha.
 *
 * ⚠️ Alohida faylda: `telegram-bot.js` allaqachon 650+ qator va u
 * AI maslahat oqimiga javob beradi. Darslar/testlar oqimi mustaqil
 * (o'z holati, o'z tugmalari) — aralashtirilsa ikkalasini ham
 * tushunish va tuzatish qiyinlashardi.
 */
const { Lesson, Quiz } = require("./models");
const progressService = require("./services/progressService");
const { translateLesson, translateQuizList } = require("./services/contentI18n");

// Dars oxiridagi mustahkamlash testi — saytdagi bilan bir xil son
const LESSON_QUIZ_SIZE = 2;
// Telegram xabarining chegarasi 4096 belgi; zaxira bilan olamiz
const TG_LIMIT = 3800;

/* Har bir foydalanuvchining joriy o'qish/test holati (xotirada).
   Bazaga faqat NATIJA yoziladi — qaysi bo'limda turgani vaqtinchalik
   ma'lumot va uni saqlash bazani behuda yuklardi. */
const learnState = new Map(); // tgUserId -> { mode, lessonId, section, quiz... }

const L = {
  uz: {
    lessons_btn: "📚 Darslar",
    tests_btn: "📝 Testlar",
    lessons_title: "📚 <b>Darslar</b>",
    lessons_sub: "Darsni tanlang. Tugatganingizda saytdagi profilingizda ham tugallangan bo'lib ko'rinadi.",
    tests_title: "📝 <b>Testlar</b>",
    tests_sub: "Testni tanlang:",
    empty: "Hozircha kontent yo'q.",
    xp_total: "⭐️ Umumiy XP",
    done: "✅",
    not_done: "📖",
    start_lesson: "▶️ Darsni boshlash",
    next: "Keyingi ▶️",
    prev: "◀️ Oldingi",
    to_quiz: "📝 Testga o'tish",
    back_list: "◀️ Ro'yxatga",
    section_of: "Bo'lim {n}/{total}",
    objectives: "🎯 <b>Ushbu darsdan keyin siz:</b>",
    example: "💡 <b>Hayotdan misol:</b>",
    keypoints: "📌 <b>Asosiy fikrlar:</b>",
    warning: "⚠️ <b>Diqqat:</b>",
    steps: "🚀 <b>Amaliy qadamlar:</b>",
    quiz_intro: "📝 <b>Mustahkamlash testi</b>\n\nDarsni tugatish uchun {n} ta savolga BEXATO javob bering.",
    q_of: "Savol {n}/{total}",
    correct: "✅ To'g'ri!",
    wrong: "❌ Noto'g'ri.",
    right_answer: "To'g'ri javob",
    lesson_done: "🎉 <b>Dars tugallandi!</b>",
    lesson_done_xp: "Sizga <b>+{xp} XP</b> berildi. Umumiy XP: <b>{total}</b>",
    lesson_done_again: "Bu darsni avval ham tugatgansiz — XP qayta berilmaydi.",
    lesson_failed: "Afsuski, bu safar bo'lmadi. Darsni qayta o'qib, testni yana topshiring.",
    retry: "🔄 Qayta urinish",
    web_synced: "🌐 Natija saytdagi hisobingizga ham saqlandi.",
    test_result: "🏆 <b>Natija:</b> {score}/{total} ({percent}%)",
    test_great: "Ajoyib natija!",
    test_ok: "Yaxshi, lekin takrorlash foydali.",
    test_low: "Darslarni qayta o'qib chiqing.",
    questions_n: "{n} ta savol",
    sections_n: "{n} ta bo'lim",
    no_questions: "Bu dars uchun test savollari topilmadi. Dars tugallangan deb belgilandi.",
    open_site: "🌐 Saytda ochish",
  },
  ru: {
    lessons_btn: "📚 Уроки",
    tests_btn: "📝 Тесты",
    lessons_title: "📚 <b>Уроки</b>",
    lessons_sub: "Выберите урок. После завершения он будет отмечен и в вашем профиле на сайте.",
    tests_title: "📝 <b>Тесты</b>",
    tests_sub: "Выберите тест:",
    empty: "Пока нет содержимого.",
    xp_total: "⭐️ Всего XP",
    done: "✅",
    not_done: "📖",
    start_lesson: "▶️ Начать урок",
    next: "Далее ▶️",
    prev: "◀️ Назад",
    to_quiz: "📝 К тесту",
    back_list: "◀️ К списку",
    section_of: "Раздел {n}/{total}",
    objectives: "🎯 <b>После этого урока вы:</b>",
    example: "💡 <b>Пример из жизни:</b>",
    keypoints: "📌 <b>Ключевые мысли:</b>",
    warning: "⚠️ <b>Внимание:</b>",
    steps: "🚀 <b>Практические шаги:</b>",
    quiz_intro: "📝 <b>Закрепляющий тест</b>\n\nЧтобы завершить урок, ответьте БЕЗ ошибок на {n} вопроса.",
    q_of: "Вопрос {n}/{total}",
    correct: "✅ Верно!",
    wrong: "❌ Неверно.",
    right_answer: "Правильный ответ",
    lesson_done: "🎉 <b>Урок завершён!</b>",
    lesson_done_xp: "Вам начислено <b>+{xp} XP</b>. Всего XP: <b>{total}</b>",
    lesson_done_again: "Вы уже проходили этот урок — XP повторно не начисляется.",
    lesson_failed: "К сожалению, не вышло. Перечитайте урок и пройдите тест снова.",
    retry: "🔄 Ещё раз",
    web_synced: "🌐 Результат также сохранён в вашем аккаунте на сайте.",
    test_result: "🏆 <b>Результат:</b> {score}/{total} ({percent}%)",
    test_great: "Отличный результат!",
    test_ok: "Хорошо, но стоит повторить.",
    test_low: "Перечитайте уроки.",
    questions_n: "{n} вопросов",
    sections_n: "{n} разделов",
    no_questions: "Вопросы для этого урока не найдены. Урок отмечен как завершённый.",
    open_site: "🌐 Открыть на сайте",
  },
};

const t = (lang) => L[lang] || L.uz;
const fill = (s, vars) =>
  Object.entries(vars).reduce((acc, [k, v]) => acc.replace(`{${k}}`, v), s);

/** Telegram HTML rejimida faqat bir nechta teg ruxsat etilgan —
    qolgan `<`/`>` belgilari xabarni butunlay yubormay qo'yadi. */
function esc(text = "") {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Uzun matnni Telegram chegarasiga bo'ladi — abzas chegarasida. */
function chunk(text, limit = TG_LIMIT) {
  if (text.length <= limit) return [text];
  const parts = [];
  let rest = text;
  while (rest.length > limit) {
    let cut = rest.lastIndexOf("\n\n", limit);
    if (cut < limit * 0.5) cut = rest.lastIndexOf("\n", limit);
    if (cut < limit * 0.5) cut = rest.lastIndexOf(" ", limit);
    if (cut <= 0) cut = limit;
    parts.push(rest.slice(0, cut));
    rest = rest.slice(cut).trimStart();
  }
  if (rest) parts.push(rest);
  return parts;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Botga darslar/testlar oqimini ulaydi.
 * @param {object} deps — `telegram-bot.js` dan beriladigan bog'liqliklar
 */
function registerLearning({ bot, safeSend, getLang, findOrLinkUser, sendNotRegistered, SITE_URL }) {
  /* ═══════════════ DARSLAR RO'YXATI ═══════════════ */
  async function showLessons(chatId, tgUserId, userId) {
    const lang = getLang(tgUserId);
    const T = t(lang);
    const [lessons, prog] = await Promise.all([
      Lesson.find({ published: true }).sort({ order: 1, createdAt: 1 }).lean(),
      progressService.getProgress(userId),
    ]);
    if (!lessons.length) return safeSend(chatId, T.empty);

    const rows = lessons.map((l) => {
      const st = prog.lessons?.[String(l._id)];
      const mark = st?.completed ? T.done : T.not_done;
      return [
        {
          text: `${mark} ${l.title}`.slice(0, 60),
          callback_data: `ln:${l._id}`,
        },
      ];
    });

    const doneCount = lessons.filter(
      (l) => prog.lessons?.[String(l._id)]?.completed,
    ).length;

    await safeSend(
      chatId,
      `${T.lessons_title}\n${T.lessons_sub}\n\n${T.xp_total}: <b>${prog.xp}</b>  ·  ${T.done} ${doneCount}/${lessons.length}`,
      { reply_markup: { inline_keyboard: rows } },
    );
  }

  /* ═══════════════ DARS KIRISHI ═══════════════ */
  async function showLessonIntro(chatId, tgUserId, lessonId) {
    const lang = getLang(tgUserId);
    const T = t(lang);
    const raw = await Lesson.findOne({ _id: lessonId, published: true }).lean();
    if (!raw) return safeSend(chatId, T.empty);
    const lesson = await translateLesson(raw, lang);

    let text = `📚 <b>${esc(lesson.title)}</b>\n\n${esc(lesson.desc || "")}`;
    if (lesson.objectives?.length) {
      text += `\n\n${T.objectives}\n` + lesson.objectives.map((o) => `• ${esc(o)}`).join("\n");
    }
    text += `\n\n<i>${fill(T.sections_n, { n: lesson.sections?.length || 0 })}</i>`;

    learnState.set(tgUserId, {
      mode: "lesson",
      lessonId: String(lessonId),
      section: 0,
    });

    await safeSend(chatId, text, {
      reply_markup: {
        inline_keyboard: [
          [{ text: T.start_lesson, callback_data: `ls:${lessonId}:0` }],
          [{ text: T.back_list, callback_data: "lnlist" }],
        ],
      },
    });
  }

  /* ═══════════════ DARS BO'LIMI ═══════════════ */
  async function showSection(chatId, tgUserId, lessonId, index, userId) {
    const lang = getLang(tgUserId);
    const T = t(lang);
    const raw = await Lesson.findOne({ _id: lessonId, published: true }).lean();
    if (!raw) return safeSend(chatId, T.empty);
    const lesson = await translateLesson(raw, lang);
    const sections = lesson.sections || [];
    const i = Math.max(0, Math.min(index, sections.length - 1));
    const sec = sections[i];
    if (!sec) return safeSend(chatId, T.empty);

    let text = `<b>${esc(sec.heading)}</b>\n<i>${fill(T.section_of, { n: i + 1, total: sections.length })}</i>\n\n${esc(sec.text || "")}`;
    if (sec.example) text += `\n\n${T.example}\n${esc(sec.example)}`;
    if (sec.keyPoints?.length)
      text += `\n\n${T.keypoints}\n` + sec.keyPoints.map((k) => `• ${esc(k)}`).join("\n");
    if (sec.warning) text += `\n\n${T.warning}\n${esc(sec.warning)}`;

    // Oxirgi bo'lim bo'lsa — amaliy qadamlarni ham qo'shamiz
    if (i === sections.length - 1 && lesson.practicalSteps?.length) {
      text += `\n\n${T.steps}\n` + lesson.practicalSteps.map((s, n) => `${n + 1}. ${esc(s)}`).join("\n");
    }

    // O'qilgan bo'lim bazaga yoziladi (sayt ham shu ko'rsatkichni ko'radi)
    progressService
      .updateLesson(userId, String(lessonId), { read: [i] })
      .catch(() => {});

    learnState.set(tgUserId, {
      mode: "lesson",
      lessonId: String(lessonId),
      section: i,
    });

    const nav = [];
    if (i > 0) nav.push({ text: T.prev, callback_data: `ls:${lessonId}:${i - 1}` });
    if (i < sections.length - 1)
      nav.push({ text: T.next, callback_data: `ls:${lessonId}:${i + 1}` });
    else nav.push({ text: T.to_quiz, callback_data: `lq:${lessonId}` });

    const parts = chunk(text);
    for (let p = 0; p < parts.length; p++) {
      const last = p === parts.length - 1;
      await safeSend(chatId, parts[p], {
        reply_markup: last
          ? { inline_keyboard: [nav, [{ text: T.back_list, callback_data: "lnlist" }]] }
          : undefined,
      });
    }
  }

  /* ═══════════════ DARS TESTI ═══════════════ */
  async function startLessonQuiz(chatId, tgUserId, lessonId, userId) {
    const lang = getLang(tgUserId);
    const T = t(lang);
    const raw = await Lesson.findOne({ _id: lessonId }).lean();

    // Savollar banki — saytdagi kabi: avval mavzuga mos test, keyin qolganlari
    const quizzes = await Quiz.find({ published: true }).lean();
    const translated = await translateQuizList(quizzes, lang);
    const title = String(raw?.title || "").toLowerCase();
    const primary = [];
    const secondary = [];
    for (const q of translated) {
      const related = title && String(q.title || "").toLowerCase().split(" ")[0]
        && title.includes(String(q.title || "").toLowerCase().split(" ")[0]);
      for (const item of q.questions || []) {
        if (!item?.q || !Array.isArray(item.options) || item.options.length < 2) continue;
        (related ? primary : secondary).push(item);
      }
    }
    const pool = [...shuffle(primary), ...shuffle(secondary)];
    const questions = pool.slice(0, LESSON_QUIZ_SIZE);

    if (!questions.length) {
      // Savol topilmasa dars "tugallanmagan" bo'lib qolib ketmasin
      const res = await progressService.completeLesson(userId, String(lessonId));
      return safeSend(
        chatId,
        `${T.no_questions}\n\n${res.alreadyDone ? T.lesson_done_again : fill(T.lesson_done_xp, { xp: res.xpAwarded, total: res.totalXp })}`,
      );
    }

    learnState.set(tgUserId, {
      mode: "lessonQuiz",
      lessonId: String(lessonId),
      questions,
      index: 0,
      correctCount: 0,
    });

    await safeSend(chatId, fill(T.quiz_intro, { n: questions.length }));
    await askQuestion(chatId, tgUserId);
  }

  /** Joriy savolni ko'rsatadi (dars testi ham, mustaqil test ham). */
  async function askQuestion(chatId, tgUserId) {
    const st = learnState.get(tgUserId);
    if (!st) return;
    const T = t(getLang(tgUserId));
    const q = st.questions[st.index];
    if (!q) return;

    const text = `<i>${fill(T.q_of, { n: st.index + 1, total: st.questions.length })}</i>\n\n<b>${esc(q.q)}</b>`;
    const rows = q.options.map((opt, i) => [
      { text: `${i + 1}. ${opt}`.slice(0, 60), callback_data: `qa:${i}` },
    ]);
    await safeSend(chatId, text, { reply_markup: { inline_keyboard: rows } });
  }

  /** Javobni qabul qiladi va keyingi bosqichga o'tadi. */
  async function handleAnswer(chatId, tgUserId, choice, userId) {
    const st = learnState.get(tgUserId);
    if (!st || !st.questions) return;
    const T = t(getLang(tgUserId));
    const q = st.questions[st.index];
    if (!q) return;

    const isRight = choice === q.correct;
    if (isRight) st.correctCount += 1;

    let fb = isRight ? T.correct : T.wrong;
    if (!isRight) fb += `\n<b>${T.right_answer}:</b> ${esc(q.options[q.correct])}`;
    if (q.explain) fb += `\n\n💬 ${esc(q.explain)}`;
    await safeSend(chatId, fb);

    st.index += 1;
    if (st.index < st.questions.length) {
      learnState.set(tgUserId, st);
      return askQuestion(chatId, tgUserId);
    }

    // ── Test tugadi ──
    if (st.mode === "lessonQuiz") {
      const perfect = st.correctCount === st.questions.length;
      learnState.delete(tgUserId);
      if (!perfect) {
        return safeSend(chatId, T.lesson_failed, {
          reply_markup: {
            inline_keyboard: [
              [{ text: T.retry, callback_data: `lq:${st.lessonId}` }],
              [{ text: T.back_list, callback_data: "lnlist" }],
            ],
          },
        });
      }
      const res = await progressService.completeLesson(userId, st.lessonId);
      const msg =
        `${T.lesson_done}\n\n` +
        (res.alreadyDone
          ? T.lesson_done_again
          : fill(T.lesson_done_xp, { xp: res.xpAwarded, total: res.totalXp })) +
        `\n\n${T.web_synced}`;
      return safeSend(chatId, msg, {
        reply_markup: {
          inline_keyboard: [
            [{ text: T.back_list, callback_data: "lnlist" }],
            [{ text: T.open_site, url: `${SITE_URL}/lessons` }],
          ],
        },
      });
    }

    // Mustaqil test
    const total = st.questions.length;
    const percent = Math.round((st.correctCount / total) * 100);
    await progressService.recordQuizResult(userId, {
      quizId: st.quizId,
      title: st.quizTitle,
      score: st.correctCount,
      total,
      source: "telegram",
    });
    learnState.delete(tgUserId);
    const verdict = percent >= 80 ? T.test_great : percent >= 50 ? T.test_ok : T.test_low;
    return safeSend(
      chatId,
      `${fill(T.test_result, { score: st.correctCount, total, percent })}\n${verdict}\n\n${T.web_synced}`,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: T.retry, callback_data: `tq:${st.quizId}` }],
            [{ text: T.back_list, callback_data: "tslist" }],
          ],
        },
      },
    );
  }

  /* ═══════════════ TESTLAR ═══════════════ */
  async function showTests(chatId, tgUserId) {
    const lang = getLang(tgUserId);
    const T = t(lang);
    const quizzes = await Quiz.find({ published: true })
      .sort({ order: 1, createdAt: 1 })
      .lean();
    if (!quizzes.length) return safeSend(chatId, T.empty);
    const translated = await translateQuizList(quizzes, lang);

    const rows = translated.map((q) => [
      {
        text: `${q.title} (${q.questions.length})`.slice(0, 60),
        callback_data: `tq:${q._id}`,
      },
    ]);
    await safeSend(chatId, `${T.tests_title}\n${T.tests_sub}`, {
      reply_markup: { inline_keyboard: rows },
    });
  }

  async function startTest(chatId, tgUserId, quizId) {
    const lang = getLang(tgUserId);
    const T = t(lang);
    const raw = await Quiz.findOne({ _id: quizId, published: true }).lean();
    if (!raw) return safeSend(chatId, T.empty);
    const [quiz] = await translateQuizList([raw], lang);

    // Saytdagi kabi: savollar ham, variantlar ham aralashtiriladi
    const questions = shuffle(quiz.questions || []).map((q) => {
      const order = shuffle(q.options.map((_, i) => i));
      return {
        q: q.q,
        options: order.map((i) => q.options[i]),
        correct: order.indexOf(q.correct),
        explain: q.explain || "",
      };
    });
    if (!questions.length) return safeSend(chatId, T.empty);

    learnState.set(tgUserId, {
      mode: "test",
      quizId: String(quizId),
      quizTitle: quiz.title,
      questions,
      index: 0,
      correctCount: 0,
    });
    await safeSend(chatId, `📝 <b>${esc(quiz.title)}</b>\n${fill(T.questions_n, { n: questions.length })}`);
    await askQuestion(chatId, tgUserId);
  }

  /* ═══════════════ TUGMA VA MATN HANDLERLARI ═══════════════
     `telegram-bot.js` bu ikki funksiyani chaqiradi. `true` qaytsa —
     xabar shu modul tomonidan ISHLANDI va AI'ga yuborilmasligi kerak. */

  async function handleCallback(query) {
    const data = String(query.data || "");
    if (!/^(ln|ls|lq|qa|tq|lnlist|tslist)/.test(data)) return false;

    const tgUserId = query.from.id;
    const chatId = query.message.chat.id;
    await bot.answerCallbackQuery(query.id).catch(() => {});

    const userId = await findOrLinkUser(tgUserId, query.from.username);
    if (!userId) {
      await sendNotRegistered(chatId, tgUserId);
      return true;
    }

    try {
      if (data === "lnlist") await showLessons(chatId, tgUserId, userId);
      else if (data === "tslist") await showTests(chatId, tgUserId);
      else if (data.startsWith("ln:")) await showLessonIntro(chatId, tgUserId, data.slice(3));
      else if (data.startsWith("ls:")) {
        const [, id, idx] = data.split(":");
        await showSection(chatId, tgUserId, id, Number(idx) || 0, userId);
      } else if (data.startsWith("lq:")) await startLessonQuiz(chatId, tgUserId, data.slice(3), userId);
      else if (data.startsWith("qa:")) await handleAnswer(chatId, tgUserId, Number(data.slice(3)), userId);
      else if (data.startsWith("tq:")) await startTest(chatId, tgUserId, data.slice(3));
    } catch (err) {
      console.error("telegram-learning callback xato:", err.message);
      await safeSend(chatId, "⚠️ Xatolik yuz berdi. Qayta urinib ko'ring.");
    }
    return true;
  }

  /** Menyu tugmasi bosilganmi? `true` bo'lsa AI chaqirilmaydi. */
  async function handleMessage(msg) {
    const text = String(msg.text || "").trim();
    if (!text) return false;
    const tgUserId = msg.from.id;
    const chatId = msg.chat.id;

    const isLessons = Object.values(L).some((x) => x.lessons_btn === text);
    const isTests = Object.values(L).some((x) => x.tests_btn === text);
    if (!isLessons && !isTests) return false;

    const userId = await findOrLinkUser(tgUserId, msg.from.username);
    if (!userId) {
      await sendNotRegistered(chatId, tgUserId);
      return true;
    }
    // Yangi bo'limga o'tilganda tugallanmagan test holati qolib ketmasin
    learnState.delete(tgUserId);
    if (isLessons) await showLessons(chatId, tgUserId, userId);
    else await showTests(chatId, tgUserId);
    return true;
  }

  /** Foydalanuvchi test yoki dars o'qish rejimidami? */
  function isBusy(tgUserId) {
    const st = learnState.get(tgUserId);
    return !!st && (st.mode === "lessonQuiz" || st.mode === "test");
  }

  return { handleCallback, handleMessage, isBusy, L };
}

module.exports = { registerLearning, LEARN_LABELS: L };

/**
 * DARSNI TUGATISH TIZIMI — holat, XP va test savollarini tanlash mantig'i.
 *
 * ASOSIY QOIDA: dars scroll qilingani uchun TUGALLANMAYDI. Tugallanish
 * uchun foydalanuvchi dars oxiridagi qisqa testni (1–2 savol) BEXATO
 * yechishi shart. O'qish faqat birinchi bosqich sifatida belgilanadi.
 *
 * Bu fayl ataylab React'dan mustaqil (toza funksiyalar) — mantiqni
 * alohida sinovdan o'tkazish mumkin.
 */

import api from "../utils/api";

const STATE_KEY = "lessonState";
const XP_KEY = "lessonXp";

export const XP_PER_LESSON = 10;
export const QUIZ_SIZE = 2; // dars oxiridagi test savollari soni

/* ══════════════════════════════════════════════════════════════
   SERVER BILAN SINXRONIZATSIYA

   ⚠️ Avval progress FAQAT `localStorage` da edi. Ikki oqibati bor edi:
   boshqa qurilmada progress yo'qolardi, va Telegram botda tugatilgan
   dars saytda "tugallanmagan" bo'lib turardi.

   Endi HAQIQIY MANBA — server (`/api/progress`). `localStorage` esa
   KESH sifatida qoladi: sahifa serverdan javob kelguncha darhol
   oxirgi ma'lum holatni ko'rsatadi va tarmoq yo'q bo'lsa ham ishlaydi.

   Yozuv har doim ikkala joyga ketadi: keshga DARHOL (interfeys
   kutmasin), serverga esa fon rejimida.
   ══════════════════════════════════════════════════════════════ */

/* ── Xotira bilan ishlash ── */
function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* xotira to'la — jim o'tkazamiz */
  }
}

/** Serverdagi holatni keshga tortadi. Login qilinmagan yoki tarmoq
    yo'q bo'lsa — jim o'tkazib yuboriladi (kesh o'z holicha ishlaydi). */
export async function pullProgress() {
  try {
    const { data } = await api.get("/progress");
    if (!data || typeof data !== "object") return null;

    // Server va keshni BIRLASHTIRAMIZ: foydalanuvchi oflayn holatda
    // o'qigan bo'limlar ham yo'qolmasin.
    const local = read(STATE_KEY, {});
    const merged = { ...local };
    for (const [id, remote] of Object.entries(data.lessons || {})) {
      const l = local[id] || {};
      merged[id] = {
        ...l,
        ...remote,
        read: [...new Set([...(l.read || []), ...(remote.read || [])])].sort(
          (a, b) => a - b,
        ),
        completed: !!(l.completed || remote.completed),
        practice: { ...(l.practice || {}), ...(remote.practice || {}) },
      };
    }
    write(STATE_KEY, merged);
    // XP — serverdagi qiymat asosiy (u yerda XP qoidalari qo'llanadi)
    if (typeof data.xp === "number") write(XP_KEY, data.xp);
    return { lessons: merged, xp: data.xp || 0 };
  } catch {
    return null; // mehmon yoki tarmoq yo'q — kesh bilan davom etamiz
  }
}

/** Serverga fon rejimida yuborish — interfeys hech qachon kutmaydi. */
function pushLesson(lessonId, patch) {
  api.patch(`/progress/lesson/${lessonId}`, patch).catch(() => {});
}

/**
 * Bitta dars holati:
 *   read      — ko'rilgan bo'limlar indekslari (faqat 1-bosqich ko'rsatkichi)
 *   completed — test bexato yechilganmi (YAGONA tugallanish mezoni)
 *   attempts  — nechta urinish bo'lgan
 *   burned    — allaqachon ishlatilgan savol kalitlari (qayta chiqmasligi uchun)
 */
export function getAllState() {
  return read(STATE_KEY, {});
}

export function getLessonState(lessonId) {
  const all = getAllState();
  return all[lessonId] || { read: [], completed: false, attempts: 0, burned: [] };
}

export function saveLessonState(lessonId, patch) {
  const all = getAllState();
  all[lessonId] = { ...getLessonState(lessonId), ...patch };
  write(STATE_KEY, all);
  // Serverga ham — shunda holat boshqa qurilmada va Telegram botda
  // ham ko'rinadi. Xato bo'lsa jim o'tadi: kesh baribir yangilangan.
  pushLesson(lessonId, patch);
  return all[lessonId];
}

export function getXp() {
  const v = read(XP_KEY, 0);
  return typeof v === "number" ? v : 0;
}

export function addXp(amount) {
  const next = getXp() + amount;
  write(XP_KEY, next);
  return next;
}

/**
 * Darsni TUGATISH — yagona nuqta.
 *
 * XP'ni SERVER hisoblaydi: u darsning avval tugatilgan-tugatilmaganini
 * biladi (Telegram orqali tugatilgan bo'lsa ham). Shu sabab XP bu yerda
 * mahalliy qo'shilmaydi — aks holda Telegramda tugatilgan dars saytda
 * qayta tugatilganda XP ikki marta berilardi.
 *
 * @returns {Promise<{xpAwarded:number,totalXp:number,alreadyDone:boolean}>}
 */
export async function completeLessonRemote(lessonId) {
  // Kesh darhol yangilanadi — foydalanuvchi natijani kutmaydi
  saveLessonStateLocalOnly(lessonId, { completed: true });
  try {
    const { data } = await api.post(`/progress/lesson/${lessonId}/complete`);
    if (typeof data?.totalXp === "number") write(XP_KEY, data.totalXp);
    return data;
  } catch {
    // Oflayn: mahalliy XP bilan davom etamiz, keyingi `pullProgress`
    // serverdagi haqiqiy qiymat bilan tenglashtiradi.
    const totalXp = addXp(XP_PER_LESSON);
    return { xpAwarded: XP_PER_LESSON, totalXp, alreadyDone: false, offline: true };
  }
}

/** Faqat keshga yozadi (serverga yubormaydi) — takroriy so'rovning
    oldini olish uchun `completeLessonRemote` ichida ishlatiladi. */
function saveLessonStateLocalOnly(lessonId, patch) {
  const all = getAllState();
  all[lessonId] = { ...getLessonState(lessonId), ...patch };
  write(STATE_KEY, all);
  return all[lessonId];
}

/* ═══════════════ AMALIYOT XP'si ═══════════════
   Har bir dars ichida har bir topshiriq TURI (yozma, savol-javob,
   modda, vaziyat) uchun XP FAQAT BIR MARTA beriladi — aks holda bitta
   topshiriqni qayta-qayta topshirib XP "yig'ib olish" mumkin bo'lardi.

   Saqlanadigan qiymat — shu tur bo'yicha OLINGAN ENG YUQORI XP.
   Shuning uchun avval "qisman to'g'ri" (+2) olgan talaba keyin to'liq
   to'g'ri javob bersa, farqini (+3) oladi; xuddi shu natijani takrorlasa
   esa 0 oladi. Bu ham adolatli, ham "XP fermasi"ning oldini oladi. */
export function getPracticeXp(lessonId, type) {
  return getLessonState(lessonId).practice?.[type] || 0;
}

/**
 * Topshiriq natijasini qayd etadi va HAQIQATDA beriladigan XP'ni
 * qaytaradi (avval olingani ayirilgan holda).
 * @returns {number} shu safar qo'shiladigan XP (0 bo'lishi mumkin)
 */
export function recordPracticeXp(lessonId, type, earnedXp) {
  const state = getLessonState(lessonId);
  const practice = { ...(state.practice || {}) };
  const before = practice[type] || 0;
  if (earnedXp <= before) return 0;

  practice[type] = earnedXp;
  saveLessonStateLocalOnly(lessonId, { practice });
  // Serverga ham — XP boshqa qurilmada va Telegramda ham hisobga
  // olinsin. Server o'z navbatida "eng yuqorisi" qoidasini qo'llaydi,
  // shuning uchun ikki marta yuborilsa ham XP takrorlanmaydi.
  api
    .post("/progress/practice", { lessonId, type, xp: earnedXp })
    .catch(() => {});
  return earnedXp - before;
}

/* ── Bosqichlar: 📖 O'qish → 📝 Test → ✅ Tugallandi ── */
export function lessonStep(state, totalSections) {
  if (state.completed) return 3;
  if (totalSections > 0 && state.read.length >= totalSections) return 2;
  return 1;
}

/* Eslatma: darslar ATAYIN qulflanmaydi — foydalanuvchi istalgan darsni
   istalgan tartibda ocha oladi. Testdan o'tish faqat "tugallandi"
   belgisini va XP'ni beradi, boshqa darslarga kirishni cheklamaydi. */

/* ═══════════════ SAVOLLAR BANKI ═══════════════ */

/** Savolning barqaror kaliti — "qaysi savollar ishlatilgan"ni kuzatish uchun */
export function questionKey(quizId, index) {
  return `${quizId}:${index}`;
}

/**
 * Barcha testlardan savollar bankini yig'adi.
 * Avval shu darsning mavzusiga mos test savollari (ular eng aloqador),
 * keyin qolgan barcha savollar — bank kichik bo'lib qolmasligi uchun.
 */
export function buildQuestionBank(quizzes, topicOf, lessonTopic) {
  const primary = [];
  const secondary = [];
  (quizzes || []).forEach((quiz) => {
    (quiz.questions || []).forEach((q, i) => {
      if (!q?.q || !Array.isArray(q.options) || q.options.length < 2) return;
      const item = {
        key: questionKey(quiz._id, i),
        q: q.q,
        options: q.options,
        correct: q.correct,
        explain: q.explain || "",
        source: quiz.title,
      };
      if (topicOf(quiz.title) === lessonTopic) primary.push(item);
      else secondary.push(item);
    });
  });
  return { primary, secondary };
}

/** Fisher–Yates — bir tekis tasodifiy aralashtirish */
export function shuffle(arr, rand = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Navbatdagi urinish uchun savollarni tanlaydi.
 *
 * Qoidalar:
 *  - har urinishda BOSHQA savollar chiqadi (`burned` ro'yxati orqali);
 *  - avval mavzuga mos savollar, yetmasa boshqa mavzudagilar;
 *  - bank tugasa, `burned` tozalanadi (lekin oxirgi urinishdagi savollar
 *    baribir chetlab o'tiladi — ketma-ket takror bo'lmasligi uchun).
 *
 * @returns {{questions: Array, burned: string[]}}
 */
export function pickQuestions({
  bank,
  burned = [],
  lastAttempt = [],
  size = QUIZ_SIZE,
  rand = Math.random,
}) {
  const all = [...bank.primary, ...bank.secondary];
  if (!all.length) return { questions: [], burned };

  const isFresh = (item) => !burned.includes(item.key);
  let pool = [
    ...shuffle(bank.primary.filter(isFresh), rand),
    ...shuffle(bank.secondary.filter(isFresh), rand),
  ];

  // Bank tugagan bo'lsa — qaytadan boshlaymiz, lekin oxirgi urinishdagi
  // savollar darhol takrorlanmasin.
  let nextBurned = burned;
  if (pool.length < size) {
    nextBurned = [];
    const notLast = (item) => !lastAttempt.includes(item.key);
    pool = [
      ...shuffle(bank.primary.filter(notLast), rand),
      ...shuffle(bank.secondary.filter(notLast), rand),
    ];
    // Baribir yetmasa (bank juda kichik) — hammasidan olamiz
    if (pool.length < size) pool = shuffle(all, rand);
  }

  const questions = pool.slice(0, Math.min(size, pool.length));
  return {
    questions,
    burned: [...nextBurned, ...questions.map((q) => q.key)],
  };
}

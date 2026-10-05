"use strict";
/**
 * AI VOSITALAR API — /api/ai-tools
 *
 *   POST /slides       { topic, grade, lang, count }            → slayd taqdimot
 *   POST /quiz         { topic, grade, lang, count, difficulty, seed } → test
 *   POST /lesson-plan  { topic, grade, lang, duration }         → dars reja
 *   POST /analyze      multipart: file (PDF/TXT/rasm), sessionId, lang
 *                      → hujjat/rasm tahlili, chat suhbatiga yoziladi
 *
 * Generatorlar lokal (tekshirilgan darslar va qonun bazasi) — ro'yxatdan
 * o'tganlar uchun. Tahlil kunlik AI limitidan 1 ta so'rov sarflaydi.
 */
const router = require("express").Router();
const multer = require("multer");
const mongoose = require("mongoose");
const { Chat } = require("../models");
const { userGuard, optionalUserGuard } = require("../middleware/auth");
const { webLimitGuard, getUsageStats, getGuestUsageStats } = require("../middleware/usageLimit");
const { getClientIp } = require("../middleware/security");
const { recordStat } = require("../services/stats");
const { buildSlides } = require("../services/aiTools/slides");
const { buildQuiz } = require("../services/aiTools/quiz");
const { buildLessonPlan } = require("../services/aiTools/lessonPlan");
const { extractText } = require("../services/aiTools/extract");
const { analyzeDocument } = require("../services/aiTools/docAnalysis");
const { topicToUz } = require("../services/aiTools/audience");

const ALLOWED = ["application/pdf", "text/plain", "text/markdown", "image/jpeg", "image/png", "image/webp"];
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (ALLOWED.includes(file.mimetype) || /\.(pdf|txt|md)$/i.test(file.originalname || "")) cb(null, true);
    else cb(new Error("UNSUPPORTED_TYPE"));
  },
});

const langOf = (v) => (v === "ru" ? "ru" : "uz");
const NOT_FOUND = {
  uz: "Bu mavzu bo'yicha saytdagi darslarda material topilmadi. Mavzuni aniqroq yozing (masalan: «Mehnat shartnomasi», «Nikoh tuzish», «Iste'molchi huquqlari»).",
  ru: "По этой теме в уроках сайта не найден материал. Уточните тему (например: «Трудовой договор», «Заключение брака», «Права потребителей»).",
};

function topicOf(req, res) {
  const topic = String(req.body?.topic || "").trim().slice(0, 160);
  if (topic.length < 3) {
    res.status(400).json({ error: langOf(req.body?.lang) === "ru" ? "Укажите тему" : "Mavzuni kiriting" });
    return null;
  }
  return topic;
}

function generator(build) {
  return async (req, res) => {
    const topic = topicOf(req, res);
    if (!topic) return;
    const lang = langOf(req.body.lang);
    try {
      const t0 = Date.now();
      const query = await topicToUz(topic);
      const out = await build({ ...req.body, topic: query, lang });
      if (out) out.title = topic; // sarlavha — foydalanuvchi yozganidek
      if (!out) return res.status(404).json({ error: NOT_FOUND[lang], notFound: true });
      return res.json({ ...out, ms: Date.now() - t0 });
    } catch (err) {
      console.error("ai-tools xatosi:", err.message);
      return res.status(500).json({ error: "Server xatosi. Qayta urinib ko'ring." });
    }
  };
}

router.post("/slides", userGuard, generator(buildSlides));
router.post("/quiz", userGuard, generator(buildQuiz));
router.post("/lesson-plan", userGuard, generator(buildLessonPlan));

const FILE_ERR = {
  UNSUPPORTED_TYPE: { uz: "Faqat PDF, TXT yoki rasm (JPG, PNG, WEBP) yuklash mumkin.", ru: "Можно загрузить только PDF, TXT или изображение (JPG, PNG, WEBP)." },
  OCR_UNAVAILABLE: { uz: "Rasmdagi matnni o'qish xizmati hozir sozlanmagan. Hujjatni PDF ko'rinishida yuklang yoki matnini nusxalab yuboring.", ru: "Сервис распознавания текста на изображениях сейчас не настроен. Загрузите PDF или вставьте текст." },
  LIMIT_FILE_SIZE: { uz: "Fayl hajmi 10 MB dan oshmasligi kerak.", ru: "Размер файла не должен превышать 10 МБ." },
  FAILED: { uz: "Faylni o'qib bo'lmadi. Boshqa fayl bilan urinib ko'ring.", ru: "Не удалось прочитать файл. Попробуйте другой файл." },
};

function uploadSingle(req, res, next) {
  upload.single("file")(req, res, (err) => {
    if (!err) return next();
    const lang = langOf(req.body?.lang);
    const key = err.code === "LIMIT_FILE_SIZE" ? "LIMIT_FILE_SIZE" : err.message === "UNSUPPORTED_TYPE" ? "UNSUPPORTED_TYPE" : "FAILED";
    return res.status(400).json({ error: FILE_ERR[key][lang] });
  });
}

router.post("/analyze", optionalUserGuard, uploadSingle, webLimitGuard, async (req, res) => {
  const lang = langOf(req.body?.lang);
  if (!req.file) return res.status(400).json({ error: FILE_ERR.FAILED[lang] });
  // multer fayl nomini latin1 deb o'qiydi — kirill/o'zbekcha nomlar buzilmasin
  const fileName = Buffer.from(req.file.originalname || "", "latin1").toString("utf8").slice(0, 120);
  try {
    let extracted;
    try {
      extracted = await extractText(req.file);
    } catch (err) {
      const key = err.code === "OCR_UNAVAILABLE" ? "OCR_UNAVAILABLE" : err.code === "UNSUPPORTED" ? "UNSUPPORTED_TYPE" : "FAILED";
      if (key === "FAILED") console.warn("Fayl matni ajratilmadi:", err.message);
      return res.status(422).json({ error: FILE_ERR[key][lang] });
    }
    const { answer, data } = await analyzeDocument({ ...extracted, lang, fileName });

    // Suhbatga yoziladi — tarix va qayta ochishda ko'rinadi
    const isGuest = !req.authUser?.id;
    const userId = isGuest ? undefined : new mongoose.Types.ObjectId(req.authUser.id);
    const sessionId = String(req.body.sessionId || `web_${isGuest ? "guest" : req.authUser.id}_${Date.now()}`);
    let chat = await Chat.findOne(isGuest ? { sessionId, userId: { $exists: false } } : { sessionId, userId });
    if (!chat) chat = new Chat({ sessionId, userId, source: "web", messages: [] });
    const label = extracted.kind === "image" ? (lang === "ru" ? "Анализ изображения" : "Rasm tahlili") : lang === "ru" ? "Анализ документа" : "Hujjat tahlili";
    chat.messages.push({ role: "user", content: `📎 ${label}: ${fileName}`, attachment: fileName });
    chat.messages.push({ role: "assistant", content: answer });
    if (chat.messages.length > 200) chat.messages = chat.messages.slice(-200);
    await chat.save();
    recordStat("web", "boshqa", extracted.kind === "image" ? "gemini" : "local").catch(() => {});

    const usage = isGuest ? await getGuestUsageStats(getClientIp(req)) : await getUsageStats(req.authUser.id);
    return res.json({ answer, sessionId: chat.sessionId, data, usage, userContent: `📎 ${label}: ${fileName}` });
  } catch (err) {
    console.error("ai-tools/analyze xatosi:", err.message);
    return res.status(500).json({ error: FILE_ERR.FAILED[lang] });
  }
});

module.exports = router;

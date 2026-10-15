"use strict";
/**
 * OVOZLI YORDAMCHI (robot) — 2026-10-15.
 *   POST /api/voice/talk          audio → matn → savol-javob YOKI dars (mode)
 *   POST /api/voice/tutor/step    { area, pos }            — dars qadami (tugma)
 *   POST /api/voice/tutor/answer  { qid, choice, streak }  — variant tugmasi
 *
 * Javob: { kind, emotion, userText, answer, speech, lesson?, question?,
 *          clarifyOf?, quizArea?, audio(base64), mime }.
 * Holat (suhbat tarixi, joriy savol) MIJOZDA saqlanadi — server stateless.
 */
const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { speechToText } = require("../services/speechToText");
const { optionalUserGuard } = require("../middleware/auth");
const { voiceLimitGuard } = require("../middleware/usageLimit");
const { getClientIp } = require("../middleware/security");
const { takeToken } = require("../services/ttsCache");
const { answerQuestion } = require("../services/voiceAgent/qa");
const { buildStep, grade, intentOf, SAY } = require("../services/voiceAgent/tutor");
const { AREAS } = require("../services/voiceAgent/tutorBank");
const { withVoice } = require("../services/voiceAgent/voice");

/* Kengaytma SAQLANADI: Safari audio/mp4 yozadi, Chrome — webm. Kengaytmasiz
   fayl STT'ga noto'g'ri MIME bilan ketardi. */
const DIR = path.join(os.tmpdir(), "huquqai-voice");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => fs.mkdir(DIR, { recursive: true }, () => cb(null, DIR)),
    filename: (req, file, cb) => {
      const ext = /mp4|m4a|aac/.test(file.mimetype) ? ".m4a" : /ogg/.test(file.mimetype) ? ".ogg" : /wav/.test(file.mimetype) ? ".wav" : ".webm";
      cb(null, `talk-${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`);
    },
  }),
  limits: { fileSize: 12 * 1024 * 1024 },
});

const START_LESSON = /(dars|savol ber|sinab ko'?r|sina|test|mashq|o'?rgat|imtihon|урок|проверь|экзамен|тест)/i;
const AREA_WORDS = [
  ["labor", /mehnat|ish haqi|ishdan|трудов/i], ["family", /oila|nikoh|ajra|aliment|семейн|брак/i],
  ["inheritance", /meros|vasiyat|наслед/i], ["criminal", /jinoy|jinoyat|уголов/i],
  ["constitution", /konstitut|конститу/i], ["consumer", /iste'?mol|потребит/i],
  ["housing", /uy-?joy|yer|ko'?chmas|жиль|земл/i], ["tax", /soliq|налог/i],
  ["administrative", /ma'?muriy|jarima|админ|штраф/i], ["civil", /fuqarolik|гражданск/i],
  ["contracts", /shartnoma|договор/i], ["process", /sud|суд/i],
];
const PROMPT_ECHO = /(huquqiy savol:|правовой вопрос:|Javob: A, B, C, D|Ответ: А, Б)/i;
const areaFromText = (t) => AREA_WORDS.find(([, re]) => re.test(t))?.[0] || "mix";
const langOf = (l) => (/^ru/i.test(String(l || "")) ? "ru" : "uz");
const parseJson = (s, d) => {
  try {
    return JSON.parse(s || "");
  } catch {
    return d;
  }
};

function identity(req) {
  return req.authUser?.id || `${getClientIp(req)}|${String(req.headers["x-device-id"] || "").slice(0, 64)}`;
}

router.post("/talk", optionalUserGuard, voiceLimitGuard, upload.single("audio"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Audio yuborilmadi" });
  const lang = langOf(req.body.lang);
  const state = parseJson(req.body.state, {});
  try {
    const { text: heard = "", language } = await speechToText(req.file.path, lang, { prompt: true });
    let userText = String(heard).trim();
    // Sukunatda Whisper yo'naltiruvchi matnni (prompt) qaytaradi — bu nutq emas
    if (PROMPT_ECHO.test(userText)) userText = "";
    const l = langOf(language || lang);
    let result;

    if (req.body.mode === "tutor" && state.tutor?.area) {
      const t = state.tutor;
      const intent = intentOf(userText);
      if (intent === "stop") {
        result = { kind: "stopped", emotion: "happy", speech: SAY.stop(t.correct || 0, t.total || 0) };
      } else if (intent === "next" || (intent === "answer" && !t.qid)) {
        result = { ...(await buildStep(t.area, (t.pos || 0) + 1)), pos: (t.pos || 0) + 1 };
      } else if (intent === "repeat") {
        result = { ...(await buildStep(t.area, t.pos || 0)), pos: t.pos || 0 };
      } else {
        result = await grade({ qid: t.qid, text: userText, streak: t.streak || 0 });
      }
    } else if (START_LESSON.test(userText) && userText.split(/\s+/).length <= 8) {
      const area = areaFromText(userText);
      result = { ...(await buildStep(area, 0)), pos: 0, area };
    } else {
      result = await answerQuestion({ text: userText, lang: l, history: state.history || [], clarifyOf: state.clarifyOf || "" });
    }

    res.json(await withVoice({ userText, ...result }, l));
  } catch (err) {
    console.error("voice talk xato:", err.message);
    res.status(500).json({ error: "Ovozni qayta ishlashda xatolik. Qayta urinib ko'ring." });
  } finally {
    fs.unlink(req.file.path, () => {});
  }
});

// Tugmalar — STT/AI yo'q, faqat ovoz sintezi: suiiste'molga qarshi daqiqalik chegara
function rateGuard(req, res, next) {
  if (takeToken(identity(req))) return next();
  res.status(429).json({ error: { uz: "Juda tez. Bir oz kuting.", ru: "Слишком часто. Подождите немного." } });
}

router.get("/tutor/areas", (req, res) => res.json({ areas: AREAS.map(({ key, uz, ru }) => ({ key, uz, ru })) }));

router.post("/tutor/step", optionalUserGuard, rateGuard, async (req, res) => {
  try {
    const area = String(req.body.area || "mix");
    const pos = Math.max(0, Number(req.body.pos) || 0);
    res.json(await withVoice({ ...(await buildStep(area, pos)), pos, area }, "uz"));
  } catch (err) {
    console.error("tutor step:", err.message);
    res.status(500).json({ error: "Dars yuklanmadi" });
  }
});

router.post("/tutor/answer", optionalUserGuard, rateGuard, async (req, res) => {
  try {
    const choice = Number(req.body.choice);
    const g = await grade({ qid: req.body.qid, choice: Number.isInteger(choice) ? choice : -1, streak: Number(req.body.streak) || 0 });
    res.json(await withVoice(g, "uz"));
  } catch (err) {
    console.error("tutor answer:", err.message);
    res.status(500).json({ error: "Baholashda xatolik" });
  }
});

module.exports = router;

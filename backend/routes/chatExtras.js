"use strict";
/**
 * CHAT QO'SHIMCHALARI — /api/chat/feedback va /api/chat/regenerate.
 *
 * Alohida fayl (chat.js 400+ qator): asosiy chat oqimiga tegilmaydi.
 * `server.js` da `/api/chat` routeridan OLDIN ulanadi — aks holda
 * chat.js dagi `/:sessionId` naqshlari bu yo'llarni tutib olardi.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const { Chat, User, isUserPro } = require("../models");
const { getLegalAdvice } = require("../services/legalAI");
const { recordStat } = require("../services/stats");
const { optionalUserGuard } = require("../middleware/auth");
const { webLimitGuard } = require("../middleware/usageLimit");

function chatQuery(req, sessionId) {
  if (!sessionId || typeof sessionId !== "string") return null;
  if (req.authUser?.id) {
    return { sessionId, userId: new mongoose.Types.ObjectId(req.authUser.id) };
  }
  // Mehmon — faqat egasiz (mehmon) suhbat
  return { sessionId, userId: { $exists: false } };
}

/* POST /api/chat/feedback  { sessionId, index, value: "like"|"dislike"|null }
   `index` — AI javobining suhbatdagi tartib raqami (0 dan, faqat assistant). */
router.post("/feedback", optionalUserGuard, async (req, res) => {
  try {
    const { sessionId, index, value = null } = req.body || {};
    if (![null, "like", "dislike"].includes(value)) {
      return res.status(400).json({ error: "Noto'g'ri qiymat" });
    }
    const q = chatQuery(req, sessionId);
    if (!q) return res.status(400).json({ error: "sessionId kerak" });
    const chat = await Chat.findOne(q);
    if (!chat) return res.status(404).json({ error: "Suhbat topilmadi" });
    const answers = chat.messages.filter((m) => m.role === "assistant");
    const msg = answers[Number(index)];
    if (!msg) return res.status(404).json({ error: "Javob topilmadi" });
    msg.feedback = value;
    chat.markModified("messages");
    await chat.save();
    return res.json({ success: true, value });
  } catch (err) {
    console.error("chat feedback error:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/chat/regenerate  { sessionId, lang }
   Oxirgi AI javobini qayta yaratadi: lokal AI boshqa yo'ldan (dars mavzusi
   yoki qonun matni qidiruvi) muqobil javob izlaydi. Muqobili topilmasa —
   `same: true` bilan avvalgi javob qaytadi (UI buni halol aytadi).
   Kunlik limitdan 1 ta savol sarflanadi (yangi javob — yangi so'rov). */
router.post("/regenerate", optionalUserGuard, webLimitGuard, async (req, res) => {
  try {
    const { sessionId, lang = "uz" } = req.body || {};
    const q = chatQuery(req, sessionId);
    if (!q) return res.status(400).json({ error: "sessionId kerak" });
    const chat = await Chat.findOne(q);
    const msgs = chat?.messages || [];
    const last = msgs[msgs.length - 1];
    const prevUser = msgs[msgs.length - 2];
    if (!chat || last?.role !== "assistant" || prevUser?.role !== "user") {
      return res.status(404).json({ error: "Qayta yaratiladigan javob topilmadi" });
    }
    if (prevUser.attachment) {
      return res.status(400).json({ error: "Fayl tahlilini qayta yaratib bo'lmaydi — faylni qayta yuklang." });
    }

    const userDoc = req.authUser?.id
      ? await User.findById(req.authUser.id).select("plan planExpiresAt").lean()
      : null;
    const history = msgs.slice(0, -2);
    const question = String(prevUser.content || "").replace(/^\[Rasm\]\s*/, "");

    // Har bir muqobil yo'l sinab ko'riladi — avvalgisidan FARQLI birinchi javob olinadi
    let result = null;
    for (const variant of [1, 2]) {
      const r = await getLegalAdvice(question, history, null, null, lang, isUserPro(userDoc), { variant });
      if (r?.answer && r.answer.trim() !== last.content.trim()) {
        result = r;
        break;
      }
    }
    if (!result) return res.json({ answer: last.content, same: true, sessionId });

    last.content = result.answer;
    last.feedback = null;
    chat.markModified("messages");
    await chat.save();
    recordStat("web", result.category, result.provider).catch(() => {});
    return res.json({ answer: result.answer, same: false, sessionId });
  } catch (err) {
    console.error("chat regenerate error:", err.message);
    return res.status(500).json({ error: "Server xatosi. Qayta urinib ko'ring." });
  }
});

module.exports = router;

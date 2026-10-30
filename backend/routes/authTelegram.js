"use strict";
/**
 * SAYTGA TELEGRAM ORQALI KIRISH / RO'YXATDAN O'TISH (`/api/auth`, 2026-10-30).
 *
 *   POST /telegram-login/start        — { token, url } (url: t.me/<bot>?start=login_<token>)
 *   GET  /telegram-login/poll?token=  — bot tasdiqlagach { token: JWT, user }, aks holda { pending }
 *
 * Bot tomoni: `telegram/siteLogin.js`. Hisob yo'q bo'lsa bot raqamni so'raydi
 * va hisobni o'zi ochadi — sayt va bot uchun BITTA hisob, parolsiz.
 * ⚠️ Token bir martalik: muvaffaqiyatli `poll` dan keyin darhol o'chiriladi.
 */
const router = require("express").Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { TgLogin } = require("../models/tgLogin");

const hash = (t) => crypto.createHash("sha256").update(String(t)).digest("hex");
const TOKEN_RE = /^[a-f0-9]{32}$/;
const BOT = () => process.env.TELEGRAM_BOT_USERNAME || "mening_huquqlarim_bot";

// routes/auth.js → signToken / userPublic bilan bir xil shakl (sayt shu javobni kutadi)
const signToken = (u) => jwt.sign({ id: u._id, username: u.username, type: "user" }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });
const userPublic = (u) => ({ id: u._id, username: u.username, fullName: u.fullName, firstName: u.firstName || "", lastName: u.lastName || "", phone: u.phone || "", email: u.email });

router.post("/telegram-login/start", async (req, res) => {
  try {
    const token = crypto.randomBytes(16).toString("hex");
    await TgLogin.create({ hash: hash(token) });
    res.json({ token, url: `https://t.me/${BOT()}?start=login_${token}`, expiresIn: 600 });
  } catch (err) {
    console.error("telegram-login start:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

router.get("/telegram-login/poll", async (req, res) => {
  try {
    const token = String(req.query.token || "");
    if (!TOKEN_RE.test(token)) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    const row = await TgLogin.findOne({ hash: hash(token) }).lean();
    if (!row) return res.status(410).json({ error: "Havola muddati tugadi. Qaytadan urinib ko'ring.", expired: true });
    if (!row.userId) return res.json({ pending: true });
    // Bir martalik: kim birinchi o'chirsa — o'sha kiradi (parallel so'rov ikki marta kira olmaydi)
    const del = await TgLogin.deleteOne({ _id: row._id, userId: row.userId });
    if (!del.deletedCount) return res.status(410).json({ error: "Havola allaqachon ishlatilgan", expired: true });
    const user = await User.findById(row.userId);
    if (!user) return res.status(404).json({ error: "Hisob topilmadi" });
    if (user.isBlocked) return res.status(403).json({ error: "Sizning hisobingiz bloklangan" });
    user.lastLogin = new Date();
    await user.save();
    res.json({ token: signToken(user), user: userPublic(user) });
  } catch (err) {
    console.error("telegram-login poll:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;

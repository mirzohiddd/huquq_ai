"use strict";
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const {
  Admin,
  Chat,
  User,
  DailyStat,
  LoginLog,
  Visitor,
  SiteContent,
  VoiceLog,
  VoiceUsageLog,
  Payment,
  PaymentStats,
  BannedEmail,
  SupportMessage,
} = require("../models");
const { getVoiceUsageStats } = require("../middleware/usageLimit");
const { PAID_TIERS } = require("../config/plans");
const { adminGuard, markUserBlocked, markUserUnblocked } = require("../middleware/auth");
const {
  bruteForceGuard,
  recordFailedLogin,
  clearLoginAttempts,
  getClientIp,
} = require("../middleware/security");

// O'chirilgan user ID larini saqlash — auth/me bu ni tekshiradi
const deletedUserIds = new Set();
module.exports.deletedUserIds = deletedUserIds;

/* POST /api/admin/login */
router.post("/login", bruteForceGuard, async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username va parol kerak" });
    }
    const ip = getClientIp(req);
    const admin = await Admin.findOne({ username: username.trim() });
    if (!admin) {
      recordFailedLogin(req);
      return res.status(401).json({ error: "Username yoki parol noto'g'ri" });
    }

    const ok = await admin.comparePassword(password);
    if (!ok) {
      const blocked = recordFailedLogin(req);
      if (blocked) {
        return res
          .status(429)
          .json({ error: "Juda ko'p noto'g'ri urinish. 15 daqiqa kuting." });
      }
      return res.status(401).json({ error: "Username yoki parol noto'g'ri" });
    }

    clearLoginAttempts(req);

    admin.lastLogin = new Date();
    await admin.save();

    const token = jwt.sign(
      { id: admin._id, username: admin.username, type: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );
    return res.json({ token, admin: { username: admin.username } });
  } catch (err) {
    console.error("admin login:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/admin/me */
router.get("/me", adminGuard, (req, res) => res.json({ admin: req.authUser }));

/* ── STATS ── */
router.get("/stats", adminGuard, async (req, res) => {
  try {
    const [totalChats, totalUsers, webCount, tgCount, mobileCount] =
      await Promise.all([
        Chat.countDocuments(),
        User.countDocuments(),
        Chat.countDocuments({ source: "web" }),
        Chat.countDocuments({ source: "telegram" }),
        Chat.countDocuments({ source: "mobile" }),
      ]);

    const msgAgg = await Chat.aggregate([
      { $project: { n: { $size: "$messages" } } },
      { $group: { _id: null, total: { $sum: "$n" } } },
    ]);

    const today = new Date().toISOString().split("T")[0];
    const todayStat = await DailyStat.findOne({ date: today }).lean();

    const dates = Array.from({ length: 14 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (13 - i));
      return d.toISOString().split("T")[0];
    });
    const weekDocs = await DailyStat.find({ date: { $in: dates } }).lean();
    const weekStats = dates.map((date) => {
      const found = weekDocs.find((d) => d.date === date);
      return {
        date,
        total: found?.totalQuestions || 0,
        web: found?.webQuestions || 0,
        telegram: found?.telegramQuestions || 0,
      };
    });

    const catAgg = await DailyStat.aggregate([
      {
        $group: {
          _id: null,
          mehnat: { $sum: "$categories.mehnat" },
          oila: { $sum: "$categories.oila" },
          meros: { $sum: "$categories.meros" },
          yer: { $sum: "$categories.yer" },
          istemolchi: { $sum: "$categories.istemolchi" },
          jinoiy: { $sum: "$categories.jinoiy" },
          boshqa: { $sum: "$categories.boshqa" },
        },
      },
    ]);

    // AI ishlatilishi — qaysi provayderdan qancha javob berilgani.
    // "claude" = pullik (Pro/Premium) so'rovlar, xarajat shu yerdan kuzatiladi.
    const providerAgg = await DailyStat.aggregate([
      {
        $group: {
          _id: null,
          claude: { $sum: "$providers.claude" },
          groq: { $sum: "$providers.groq" },
          cloudflare: { $sum: "$providers.cloudflare" },
          gemini: { $sum: "$providers.gemini" },
        },
      },
    ]);

    return res.json({
      overview: {
        totalChats,
        totalUsers,
        webChats: webCount,
        telegramChats: tgCount,
        mobileChats: mobileCount,
        totalMessages: msgAgg[0]?.total || 0,
        todayQuestions: todayStat?.totalQuestions || 0,
        todayWeb: todayStat?.webQuestions || 0,
        todayTelegram: todayStat?.telegramQuestions || 0,
        todayMobile: todayStat?.mobileQuestions || 0,
      },
      weekStats,
      categories: catAgg[0] || {},
      aiUsage: {
        total: providerAgg[0] || { claude: 0, groq: 0, cloudflare: 0, gemini: 0 },
        today: todayStat?.providers || { claude: 0, groq: 0, cloudflare: 0, gemini: 0 },
      },
    });
  } catch (err) {
    console.error("admin stats:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── CHATS LIST ── */
router.get("/chats", adminGuard, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const source = req.query.source || null;
    const category = req.query.category || null;
    const search = req.query.search || null;

    const filter = {};
    if (source) filter.source = source;
    if (category) filter.category = category;
    if (search)
      filter["messages.content"] = {
        $regex: search.slice(0, 100),
        $options: "i",
      };

    const [total, chats] = await Promise.all([
      Chat.countDocuments(filter),
      Chat.find(filter)
        .sort({ updatedAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("userId", "username fullName email")
        .select(
          "sessionId source category createdAt updatedAt telegramUsername userId messages",
        )
        .lean(),
    ]);

    const result = chats.map((c) => ({
      sessionId: c.sessionId,
      source: c.source,
      category: c.category,
      messageCount: c.messages.length,
      firstQuestion:
        c.messages.find((m) => m.role === "user")?.content?.slice(0, 100) || "",
      hasImage: c.messages.some((m) => m.imageData),
      user: c.userId
        ? {
            username: c.userId.username,
            fullName: c.userId.fullName,
            email: c.userId.email,
          }
        : null,
      telegramUsername: c.telegramUsername,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    }));

    return res.json({
      chats: result,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error("admin chats list:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── SINGLE CHAT ── */
router.get("/chats/:sessionId", adminGuard, async (req, res) => {
  try {
    const chat = await Chat.findOne({ sessionId: req.params.sessionId })
      .populate("userId", "username fullName email createdAt")
      .lean();
    if (!chat) return res.status(404).json({ error: "Chat topilmadi" });
    return res.json(chat);
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── DELETE CHAT ── */
router.delete("/chats/:sessionId", adminGuard, async (req, res) => {
  try {
    await Chat.deleteOne({ sessionId: req.params.sessionId });
    return res.json({ success: true });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── USERS LIST ── */
router.get("/users", adminGuard, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const search = req.query.search || null;

    const filter = {};
    if (search) {
      filter.$or = [
        { username: { $regex: search.slice(0, 50), $options: "i" } },
        { email: { $regex: search.slice(0, 50), $options: "i" } },
        { fullName: { $regex: search.slice(0, 50), $options: "i" } },
      ];
    }

    const [total, users] = await Promise.all([
      User.countDocuments(filter),
      User.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .select("-password -otpCode -otpExpires")
        .lean(),
    ]);

    // Chat counts per user
    const userIds = users.map((u) => u._id);
    const chatCounts = await Chat.aggregate([
      { $match: { userId: { $in: userIds } } },
      { $group: { _id: "$userId", count: { $sum: 1 } } },
    ]);
    const countMap = Object.fromEntries(
      chatCounts.map((c) => [String(c._id), c.count]),
    );

    // Last login source per user
    const lastLogins = await LoginLog.aggregate([
      { $match: { userId: { $in: userIds } } },
      { $sort: { createdAt: -1 } },
      { $group: { _id: "$userId", lastSource: { $first: "$source" } } },
    ]);
    const sourceMap = Object.fromEntries(
      lastLogins.map((l) => [String(l._id), l.lastSource]),
    );

    const result = users.map((u) => ({
      ...u,
      chatCount: countMap[String(u._id)] || 0,
      lastLoginSource: sourceMap[String(u._id)] || "web",
    }));
    return res.json({
      users: result,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error("admin users:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── USER LOGIN LOGS ── */
router.get("/users/:id/logins", adminGuard, async (req, res) => {
  try {
    const logs = await LoginLog.find({ userId: req.params.id })
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();
    return res.json({ logs });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── ALL RECENT LOGINS (last 100) ── */
router.get("/logins", adminGuard, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 30);

    const [total, logs] = await Promise.all([
      LoginLog.countDocuments(),
      LoginLog.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("userId", "username email fullName")
        .lean(),
    ]);

    return res.json({ logs, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    console.error("admin logins:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── BLOCK / UNBLOCK USER ── */
router.patch("/users/:id/block", adminGuard, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    user.isBlocked = !user.isBlocked;
    if (!user.isBlocked) {
      // Admin qo'lda blokdan chiqarsa — moderatsiya hisobi ham
      // tozalanadi: aks holda bitta yangi (hatto noto'g'ri) belgilash
      // darhol qayta bloklab qo'yardi, va email "hech qachon qayta
      // ochilmasin" cheklovi ham admin bekor qilgan holatda saqlanib
      // qolardi.
      user.violationCount = 0;
      if (user.email) await BannedEmail.deleteOne({ email: user.email });
    }
    await user.save();
    // Bloklash/blokdan chiqarish darhol kuchga kirishi uchun — token
    // muddati tugashini kutmasdan. Qarang: middleware/auth.js
    if (user.isBlocked) markUserBlocked(user._id);
    else markUserUnblocked(user._id);
    return res.json({ isBlocked: user.isBlocked });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── ADMIN: RESET USER PASSWORD ── */
router.patch("/users/:id/reset-password", adminGuard, async (req, res) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 6) {
      return res
        .status(400)
        .json({ error: "Yangi parol kamida 6 ta belgidan iborat bo'lsin" });
    }
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ error: "Foydalanuvchi topilmadi" });

    user.password = newPassword; // pre-save hook avtomatik hash qiladi
    await user.save();

    // Email yuborish (email bo'lsa)
    let emailSent = false;
    let emailError = null;
    if (user.email) {
      try {
        const { sendPasswordResetEmail } = require("../services/emailService");
        await sendPasswordResetEmail(
          user.email,
          newPassword,
          user.fullName,
          req.authUser.username,
        );
        emailSent = true;
        console.log(`Password reset email sent to ${user.email}`);
      } catch (mailErr) {
        console.error("Password reset email xatosi:", mailErr.message);
        emailError = mailErr.message;
        // Email yuborilmasa ham parol o'zgartirilgan — xatolik qaytarmaymiz
      }
    }

    return res.json({
      success: true,
      message: `@${user.username} paroli yangilandi`,
      emailSent,
      emailAddress: user.email || null,
      emailError: emailError || null,
    });
  } catch (err) {
    console.error("reset-password:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── ADMIN: EMAIL XIZMATI HOLATINI TEKSHIRISH ──
   Hech qanday email yubormaydi — Brevo akkaunti bilan aloqani tekshirib,
   nima uchun kodlar ketmayotganini aniq aytadi (kalit yo'q / IP cheklovi /
   jo'natuvchi tasdiqlanmagan) va serverning tashqi IP manzilini qaytaradi. */
router.get("/email-health", adminGuard, async (req, res) => {
  try {
    const { checkEmailHealth } = require("../services/emailService");
    return res.json(await checkEmailHealth());
  } catch (err) {
    console.error("email-health:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── ADMIN: PAROLNI TIKLASH SO'ROVINI BAJARISH ──
   Foydalanuvchi "Parolni unutdim" deb yuborgan murojaat (SupportMessage,
   type: "password_reset") ustida bir bosishda:
     1) yangi parol o'rnatiladi (admin kiritmasa — xavfsiz tasodifiy),
     2) yangi parol foydalanuvchi emailiga yuboriladi,
     3) murojaat "resolved" holatiga o'tkaziladi.
   Email ketmasa parol O'ZGARTIRILMAYDI — aks holda foydalanuvchi yangi
   parolni bilmay hisobidan butunlay ayrilib qolardi. */
function generateStrongPassword() {
  // Chalkashtiradigan belgilar (0/O, 1/l/I) ataylab ishlatilmagan —
  // parol emaildan qo'lda ko'chiriladi.
  const chars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = require("crypto").randomBytes(12);
  return Array.from(bytes, (b) => chars[b % chars.length]).join("");
}

router.patch("/support/:id/reset-password", adminGuard, async (req, res) => {
  try {
    const { newPassword } = req.body;
    if (newPassword && String(newPassword).length < 6) {
      return res
        .status(400)
        .json({ error: "Yangi parol kamida 6 ta belgidan iborat bo'lsin" });
    }

    const request = await SupportMessage.findById(req.params.id);
    if (!request) return res.status(404).json({ error: "Murojaat topilmadi" });

    const user = request.userId
      ? await User.findById(request.userId)
      : await User.findOne({ email: request.email });
    if (!user) {
      return res.status(404).json({
        error: "Bu murojaatga tegishli foydalanuvchi topilmadi (o'chirilgan?)",
      });
    }
    if (!user.email) {
      return res
        .status(400)
        .json({ error: "Foydalanuvchida email yo'q — parolni yuborib bo'lmaydi" });
    }

    const password = newPassword ? String(newPassword) : generateStrongPassword();

    // Avval emailni yuboramiz: yuborilmasa parolga umuman tegmaymiz.
    const { sendPasswordResetEmail } = require("../services/emailService");
    try {
      await sendPasswordResetEmail(
        user.email,
        password,
        user.fullName,
        req.authUser.username,
      );
    } catch (mailErr) {
      console.error("support reset-password email xatosi:", mailErr.message);
      return res.status(502).json({
        error:
          "Yangi parol emailga yuborilmadi, shuning uchun parol o'zgartirilmadi: " +
          mailErr.message,
      });
    }

    user.password = password; // pre-save hook avtomatik hash qiladi
    await user.save();

    request.status = "resolved";
    request.read = true;
    request.passwordResetAt = new Date();
    await request.save();

    return res.json({
      success: true,
      message: `@${user.username} uchun yangi parol ${user.email} manziliga yuborildi`,
      emailAddress: user.email,
      request,
    });
  } catch (err) {
    console.error("support reset-password:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── SET USER DAILY LIMIT ── */
router.patch("/users/:id/limit", adminGuard, async (req, res) => {
  try {
    const { dailyLimit } = req.body;
    const val = parseInt(dailyLimit);
    if (isNaN(val) || val < 1 || val > 10000) {
      return res.status(400).json({ error: "Limit 1 dan 10000 gacha bo'lsin" });
    }
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { dailyLimit: val },
      { new: true },
    ).select("username dailyLimit");
    if (!user)
      return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    return res.json({ dailyLimit: user.dailyLimit });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── USER USAGE TODAY ── */
router.get("/users/:id/usage", adminGuard, async (req, res) => {
  try {
    const { UsageLog } = require("../models");
    const today = new Date().toISOString().slice(0, 10);
    const [log, user] = await Promise.all([
      UsageLog.findOne({ userId: req.params.id, date: today }).lean(),
      User.findById(req.params.id).select("dailyLimit").lean(),
    ]);
    const limit = user?.dailyLimit ?? 5;
    const used = log?.count || 0;
    return res.json({
      limit,
      used,
      remaining: Math.max(0, limit - used),
      date: today,
    });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── DELETE USER ── */
router.delete("/users/:id", adminGuard, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("telegramId").lean();

    await User.findByIdAndDelete(userId);
    await Chat.deleteMany({ userId });
    await LoginLog.deleteMany({ userId });
    // Avval faqat Chat/LoginLog tozalanardi — UsageLog/VoiceLog/VoiceUsageLog
    // "egasiz" (orphaned) holda bazada qolib ketardi. Endi to'liq tozalanadi.
    const { UsageLog } = require("../models");
    await UsageLog.deleteMany({ userId });
    await VoiceLog.deleteMany({ userId });
    await VoiceUsageLog.deleteMany({ userId });

    // Telegram cache dan o'chirish
    if (user?.telegramId) {
      try {
        const telegramBot = require("../telegram-bot");
        if (telegramBot?.verifiedUsers)
          telegramBot.verifiedUsers.delete(String(user.telegramId));
      } catch {}
    }

    // Frontend /api/auth/me polling uchun — darhol logout qiladi
    deletedUserIds.add(String(userId));
    // 10 daqiqadan keyin Set dan tozalash (xotira uchun)
    setTimeout(() => deletedUserIds.delete(String(userId)), 10 * 60 * 1000);
    // Boshqa BARCHA endpointlar (faqat /auth/me emas) uchun ham darhol
    // invalidatsiya — qarang: middleware/auth.js
    markUserBlocked(userId);

    return res.json({ success: true });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── CHANGE PASSWORD ── */
router.post("/change-password", adminGuard, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: "Joriy va yangi parol kerak" });
    }
    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ error: "Yangi parol kamida 6 ta belgi bo'lsin" });
    }
    const admin = await Admin.findById(req.authUser.id);
    if (!admin) return res.status(404).json({ error: "Admin topilmadi" });

    const ok = await admin.comparePassword(currentPassword);
    if (!ok) return res.status(401).json({ error: "Joriy parol noto'g'ri" });

    admin.password = newPassword;
    await admin.save();
    return res.json({ success: true });
  } catch (err) {
    console.error("change-password:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── VISITORS LIST ── */
router.get("/visitors", adminGuard, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 30);
    const search = req.query.search || null;

    const filter = {};
    if (search) {
      filter.$or = [
        { ip: { $regex: search.slice(0, 50), $options: "i" } },
        { country: { $regex: search.slice(0, 50), $options: "i" } },
        { city: { $regex: search.slice(0, 50), $options: "i" } },
      ];
    }

    const [total, visitors] = await Promise.all([
      Visitor.countDocuments(filter),
      Visitor.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
    ]);

    return res.json({ visitors, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    console.error("admin visitors:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── VISITOR STATS ── */
router.get("/visitors/stats", adminGuard, async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const [totalVisitors, todayVisitors, uniqueIps] = await Promise.all([
      Visitor.countDocuments(),
      Visitor.countDocuments({ createdAt: { $gte: new Date(today) } }),
      Visitor.distinct("ip"),
    ]);

    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      return d.toISOString().split("T")[0];
    });
    const weekDocs = await Visitor.find({
      createdAt: { $gte: new Date(last7Days[0]) },
    }).lean();
    const weekStats = last7Days.map((date) => {
      const count = weekDocs.filter(
        (d) => d.createdAt.toISOString().split("T")[0] === date,
      ).length;
      return { date, count };
    });

    return res.json({
      totalVisitors,
      todayVisitors,
      uniqueIps: uniqueIps.length,
      weekStats,
    });
  } catch (err) {
    console.error("admin visitors stats:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── SITE CONTENT ── */
router.get("/site-content", adminGuard, async (req, res) => {
  try {
    let content = await SiteContent.findOne();
    if (!content) {
      content = await SiteContent.create({});
    }
    return res.json(content);
  } catch (err) {
    console.error("admin site content get:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

router.put("/site-content", adminGuard, async (req, res) => {
  try {
    const { stats, hero, about, contact, social } = req.body;

    let content = await SiteContent.findOne();
    if (!content) {
      content = await SiteContent.create({});
    }

    if (stats) {
      if (stats.experience !== undefined)
        content.stats.experience = stats.experience;
      if (stats.experienceLabel !== undefined)
        content.stats.experienceLabel = stats.experienceLabel;
      if (stats.cases !== undefined) content.stats.cases = stats.cases;
      if (stats.casesLabel !== undefined)
        content.stats.casesLabel = stats.casesLabel;
      if (stats.clients !== undefined) content.stats.clients = stats.clients;
      if (stats.clientsLabel !== undefined)
        content.stats.clientsLabel = stats.clientsLabel;
    }

    if (hero) {
      if (hero.title !== undefined) content.hero.title = hero.title;
      if (hero.subtitle !== undefined) content.hero.subtitle = hero.subtitle;
      if (hero.cta !== undefined) content.hero.cta = hero.cta;
    }

    if (about) {
      if (about.title !== undefined) content.about.title = about.title;
      if (about.lead !== undefined) content.about.lead = about.lead;
      if (about.text !== undefined) content.about.text = about.text;
    }

    if (contact) {
      if (contact.address !== undefined)
        content.contact.address = contact.address;
      if (contact.phone !== undefined) content.contact.phone = contact.phone;
      if (contact.email !== undefined) content.contact.email = contact.email;
      if (contact.hoursWeek !== undefined)
        content.contact.hoursWeek = contact.hoursWeek;
      if (contact.hoursSat !== undefined)
        content.contact.hoursSat = contact.hoursSat;
    }

    if (social) {
      if (social.telegram !== undefined)
        content.social.telegram = social.telegram;
      if (social.instagram !== undefined)
        content.social.instagram = social.instagram;
      if (social.facebook !== undefined)
        content.social.facebook = social.facebook;
      if (social.youtube !== undefined) content.social.youtube = social.youtube;
    }

    await content.save();
    return res.json(content);
  } catch (err) {
    console.error("admin site content update:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── VOICE LOGS ── */

/* GET /api/admin/voice-logs — barcha ovozli chatlar */
router.get("/voice-logs", adminGuard, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const userId = req.query.userId || null;

    const filter = userId ? { userId } : {};

    const [logs, total] = await Promise.all([
      VoiceLog.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("userId", "username fullName")
        .lean(),
      VoiceLog.countDocuments(filter),
    ]);

    res.json({ logs, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET /api/admin/users/:id/voice-usage — user ning ovozli chat statistikasi */
router.get("/users/:id/voice-usage", adminGuard, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("voiceDailyLimit")
      .lean();
    if (!user) return res.status(404).json({ error: "User topilmadi" });

    const stats = await getVoiceUsageStats(req.params.id);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* PATCH /api/admin/users/:id/voice-limit — user ning ovozli chat limitini o'rnatish */
router.patch("/users/:id/voice-limit", adminGuard, async (req, res) => {
  try {
    const { voiceDailyLimit } = req.body;
    const val = parseInt(voiceDailyLimit);
    if (isNaN(val) || val < 0 || val > 1000)
      return res
        .status(400)
        .json({ error: "voiceDailyLimit 0-1000 orasida bo'lishi kerak" });

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { voiceDailyLimit: val },
      { new: true },
    ).select("username voiceDailyLimit");

    if (!user) return res.status(404).json({ error: "User topilmadi" });
    return res.json({ voiceDailyLimit: user.voiceDailyLimit });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── PAYMENTS — Click/Payme orqali qilingan to'lovlar ── */

/* GET /api/admin/payments */
router.get("/payments", adminGuard, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const status = req.query.status || null;

    const filter = {};
    if (status) filter.status = status;

    const [total, payments] = await Promise.all([
      Payment.countDocuments(filter),
      Payment.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("userId", "username fullName email")
        .select("-rawEvents")
        .lean(),
    ]);

    res.json({ payments, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    console.error("admin payments:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/admin/payments/stats — to'langan summalar bo'yicha umumiy hisobot.
   MUHIM: to'lovlar ro'yxati (yuqoridagi GET /payments) faqat oxirgi
   MAX_PAYMENT_RECORDS tasini saqlaydi (routes/payment.js trimPaymentHistory),
   shu sabab bu yerda Payment kolleksiyasini jonli agregatsiya qilish
   ESKI (o'chirilgan) to'lovlarni hisobga olmay qo'yardi. Buning o'rniga
   alohida PaymentStats "singleton" hujjatidan o'qiladi — u har "paid"
   holatiga o'tishda $inc qilinadi va Payment yozuvi o'chirilsa ham
   o'zgarmaydi. */
router.get("/payments/stats", adminGuard, async (req, res) => {
  try {
    const [stats, proUsers] = await Promise.all([
      PaymentStats.findOne({ key: "global" }).lean(),
      User.countDocuments({
        plan: { $in: PAID_TIERS },
        planExpiresAt: { $gt: new Date() },
      }),
    ]);
    res.json({
      totalRevenueUzs: stats?.totalRevenueUzs || 0,
      paidCount: stats?.paidCount || 0,
      activeProUsers: proUsers,
    });
  } catch (err) {
    console.error("admin payments/stats:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* PATCH /api/admin/users/:id/plan — tarifni qo'lda o'zgartirish (support uchun istisno holat;
   normal holatda tarif faqat to'lov orqali avtomatik beriladi) */
router.patch("/users/:id/plan", adminGuard, async (req, res) => {
  try {
    const { plan, days } = req.body;
    if (!["free", "basic", "pro", "premium"].includes(plan)) {
      return res
        .status(400)
        .json({ error: "plan 'free', 'basic', 'pro' yoki 'premium' bo'lishi kerak" });
    }
    const update = { plan };
    if (plan !== "free") {
      const d = Math.min(365, Math.max(1, parseInt(days) || 30));
      update.planExpiresAt = new Date(Date.now() + d * 24 * 60 * 60 * 1000);
    } else {
      update.planExpiresAt = null;
    }
    const user = await User.findByIdAndUpdate(req.params.id, update, {
      new: true,
    }).select("username plan planExpiresAt");
    if (!user) return res.status(404).json({ error: "User topilmadi" });
    return res.json(user);
  } catch (err) {
    console.error("admin plan update:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
module.exports.deletedUserIds = deletedUserIds;

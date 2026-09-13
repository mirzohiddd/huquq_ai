"use strict";
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const { User, LoginLog, BannedEmail, SupportMessage } = require("../models");
const { validatePassword } = require("../utils/passwordPolicy");
const {
  bruteForceGuard,
  recordFailedLogin,
  clearLoginAttempts,
  getClientIp,
} = require("../middleware/security");
const { generateOTP, sendOTPEmail } = require("../services/emailService");
const parseDevice = require("../middleware/parseDevice");
const { isHosted } = require("../utils/hosting");
const otpGuard = require("../utils/otpGuard");

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Email tasdiqlash kodining amal qilish muddati (emailService dagi
// "10 daqiqa" matni bilan mos bo'lishi shart).
const OTP_TTL_MS = 10 * 60 * 1000;

// Parolni tiklash so'rovi uchun email bo'yicha sovish (cooldown) —
// bitta foydalanuvchi admin panelini bir xil so'rov bilan
// to'ldirib yubormasligi uchun.
const RESET_REQUEST_COOLDOWN_MS = 3 * 60 * 1000;
const lastResetRequestAt = new Map(); // email -> timestamp

function isResetRequestTooSoon(email) {
  const prev = lastResetRequestAt.get(email);
  return !!prev && Date.now() - prev < RESET_REQUEST_COOLDOWN_MS;
}

/**
 * Tasdiqlash kodini emailga yuborishga urinadi.
 *
 * Nega alohida funksiya: kod yuborilmaganda foydalanuvchiga NIMA deyish
 * kerakligi sababga bog'liq. Avval har qanday nosozlikda "email manzilingiz
 * to'g'ri ekaniga ishonch hosil qiling" deb yozilardi — lekin haqiqiy sabab
 * ko'pincha server tomonida bo'ladi (Brevo API kaliti, tasdiqlanmagan
 * jo'natuvchi yoki "Authorised IPs" cheklovi), ya'ni foydalanuvchi manzilini
 * yuz marta tekshirsa ham hech narsa o'zgarmasdi.
 *
 * DEV_OTP_TO_CONSOLE=true — LOKAL TEST uchun zaxira yo'l: email xizmati
 * ishlamayotgan bo'lsa ham ro'yxatdan o'tish to'xtamaydi, kod server
 * konsoliga yoziladi. Kod HTTP javobida HECH QACHON qaytarilmaydi, ya'ni
 * uni faqat serverni ishlatayotgan odam ko'ra oladi.
 *
 * DIQQAT: bu bayroq HOSTINGDA (Railway/Render) ATAYIN E'TIBORSIZ
 * QOLDIRILADI. Sababi: u yerda konsol — deploy loglari, foydalanuvchi
 * ularni ko'ra olmaydi. Bayroq yoqilgan bo'lsa, odam "kod emailingizga yuborildi"
 * degan xabarni oladi-yu, kodni hech qachon ololmay boshi berk ko'chaga
 * kirib qoladi (aniq xato o'rniga jim tugaydigan holat). Ustiga-ustak
 * bir martalik kodlar log fayllarga yozilib qolardi. Shu sababli
 * production'da har doim aniq xato qaytariladi.
 * (Hosting aniqlash: `utils/hosting.js` — platformaning O'ZI qo'yadigan
 * o'zgaruvchilariga qaraydi. Avval bu yerda `process.env.RENDER` qattiq
 * yozilgan edi; 2026-08-22 da Railway'ga ko'chishda u yerda mavjud
 * bo'lmagani uchun bayroq JIM YOQILIB qolar edi.)
 *
 * @returns {{ok: true} | {ok: false, status: number, error: string}}
 */
const OTP_CONSOLE_FALLBACK =
  process.env.DEV_OTP_TO_CONSOLE === "true" && !isHosted();

// Email xizmati butunlay ishlamay qolganda ro'yxatdan o'tishni
// to'xtatmaslik uchun (pastdagi batafsil izohga qarang).
const ALLOW_UNVERIFIED_SIGNUP =
  process.env.ALLOW_UNVERIFIED_SIGNUP === "true";

async function trySendOtp(user, otp) {
  try {
    await sendOTPEmail(user.email, otp, user.fullName || user.username);
    return { ok: true };
  } catch (mailErr) {
    console.error("OTP email xatosi:", mailErr.message);

    if (OTP_CONSOLE_FALLBACK) {
      console.warn(
        `⚠️  DEV_OTP_TO_CONSOLE yoqilgan — email yuborilmadi, lekin jarayon davom etmoqda.\n` +
          `    ${user.email} uchun tasdiqlash kodi: ${otp}`,
      );
      // `viaConsole` — chaqiruvchi kod foydalanuvchiga TO'G'RI xabar
      // ko'rsatishi uchun. Avval bu holatda ham "kod emailingizga
      // yuborildi" deyilardi, holbuki email umuman ketmagan edi —
      // foydalanuvchi pochtasini bekorga kutardi.
      return { ok: true, viaConsole: true };
    }

    // ALLOW_UNVERIFIED_SIGNUP — email provayderi TAMOMAN ishlamay
    // qolganda saytni to'liq to'xtatib qo'ymaslik uchun ochiq kalit.
    //
    // Nima uchun kerak bo'ldi: Brevo akkaunti o'z tomonidan
    // faollashtirilmagan ("SMTP account is not yet activated") va buni
    // kod orqali hal qilib bo'lmaydi. Natijada HECH KIM ro'yxatdan o'ta
    // olmay qoldi — bu email tasdiqlanmasligidan ko'ra jiddiyroq muammo.
    //
    // Kalit yoqilganda: xat ketmasa ham hisob yaratiladi va foydalanuvchi
    // kiradi (email tasdiqlash bosqichi shu holatda o'tkazib yuboriladi).
    // Faqat provayder MUAMMOSIDA ishlaydi (configIssue) — foydalanuvchi
    // noto'g'ri manzil yozgan holatda emas.
    // Email tiklangach shu o'zgaruvchini o'chirish kifoya.
    if (ALLOW_UNVERIFIED_SIGNUP && mailErr.configIssue) {
      console.warn(
        `⚠️  ALLOW_UNVERIFIED_SIGNUP: email yuborilmadi (${mailErr.message}) — ` +
          `${user.email} email TASDIQLANMASDAN ro'yxatdan o'tkazildi.`,
      );
      return { ok: false, degraded: true };
    }

    return {
      ok: false,
      status: 502,
      error: mailErr.configIssue
        ? "Tasdiqlash kodini yuborib bo'lmadi — email xizmati vaqtincha ishlamayapti. Bu sizning email manzilingiz bilan bog'liq emas; birozdan so'ng qayta urinib ko'ring yoki texnik yordamga murojaat qiling."
        : "Tasdiqlash kodini yuborib bo'lmadi. Email manzilingiz to'g'ri ekaniga ishonch hosil qiling va qayta urinib ko'ring.",
    };
  }
}

function signToken(user) {
  return jwt.sign(
    { id: user._id, username: user.username, type: "user" },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" },
  );
}

function userPublic(user) {
  return {
    id: user._id,
    username: user.username,
    fullName: user.fullName,
    email: user.email,
  };
}

async function logLogin(req, userId, source = "web") {
  try {
    const userAgent = req.headers["user-agent"] || "";
    const ip = getClientIp(req);
    const { device, os, browser } = parseDevice(userAgent);
    // Detect mobile from user agent or source header
    const isMobile =
      req.headers["x-app-platform"] === "mobile" ||
      (userAgent && /mobile|android|iphone|ipad/i.test(userAgent));
    const finalSource = isMobile ? "mobile" : source;
    await LoginLog.create({
      userId,
      ip,
      userAgent,
      device,
      os,
      browser,
      source: finalSource,
    });
  } catch (e) {
    console.error("Login log xatosi:", e.message);
  }
}

/* ─────────────────────────────────────────
   POST /api/auth/register
───────────────────────────────────────── */
router.post("/register", async (req, res) => {
  try {
    const { username, password, fullName, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: "Username, email va parol kerak" });
    }
    if (username.length < 3 || username.length > 30) {
      return res
        .status(400)
        .json({ error: "Username 3-30 belgidan iborat bo'lsin" });
    }
    /* Parol siyosati — `utils/passwordPolicy.js`.
       Avval faqat "6 belgidan uzun" tekshirilardi, ya'ni "123456" ham
       o'tardi. Endi uzunlik 8 va eng tarqalgan naqshlar rad etiladi. */
    const pwdCheck = validatePassword(password, { username, email });
    if (!pwdCheck.ok) {
      return res.status(400).json({ error: pwdCheck.error });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Email manzil noto'g'ri formatda" });
    }

    const existingUsername = await User.findOne({
      username: username.trim().toLowerCase(),
    });
    if (existingUsername)
      return res
        .status(409)
        .json({ error: "Bu username band, boshqasini tanlang" });

    const existingEmail = await User.findOne({
      email: email.trim().toLowerCase(),
    });
    if (existingEmail)
      return res
        .status(409)
        .json({ error: "Bu email allaqachon ro'yxatdan o'tgan" });

    // Moderatsiya qoidabuzarligi sabab bloklangan email — hech qachon
    // qayta ro'yxatdan o'tolmaydi (services/moderation.js).
    const banned = await BannedEmail.findOne({ email: email.trim().toLowerCase() });
    if (banned) {
      return res.status(403).json({
        error: "Bu email qoidabuzarlik sabab butunlay bloklangan va qayta ro'yxatdan o'ta olmaydi.",
      });
    }

    // Oldingi tugallanmagan (tasdiqlanmagan) urinish qolgan bo'lsa —
    // uni o'chiramiz, shunda foydalanuvchi qaytadan urinib ko'ra oladi.
    await User.deleteOne({
      email: email.trim().toLowerCase(),
      emailVerified: false,
      authProvider: "local",
    });

    // Qo'lda (Google'siz) ro'yxatdan o'tishda email HAQIQIY ekani
    // tasdiqlanishi shart: hisob "emailVerified: false" holatida
    // yaratiladi, foydalanuvchi emailiga 6 xonali kod yuboriladi va
    // faqat POST /verify-otp muvaffaqiyatli o'tgandan keyin token
    // beriladi (ya'ni tizimga kira oladi).
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + OTP_TTL_MS);

    const user = await User.create({
      username: username.trim().toLowerCase(),
      password,
      fullName: fullName?.trim() || "",
      email: email.trim().toLowerCase(),
      emailVerified: false,
      authProvider: "local",
      otpCode: otp,
      otpExpires,
    });

    const sent = await trySendOtp(user, otp);

    // Email xizmati ishlamayapti, LEKIN ALLOW_UNVERIFIED_SIGNUP yoqilgan —
    // hisobni saqlab, foydalanuvchini kiritamiz (email tasdiqlanmagan).
    if (!sent.ok && sent.degraded) {
      user.emailVerified = true;
      user.otpCode = null;
      user.otpExpires = null;
      user.lastLogin = new Date();
      await user.save();
      await logLogin(req, user._id, "web");
      const tokenD = signToken(user);
      return res.status(201).json({
        message: "Ro'yxatdan muvaffaqiyatli o'tdingiz!",
        needsVerification: false,
        token: tokenD,
        user: userPublic(user),
      });
    }

    if (!sent.ok) {
      // Kod yetib bormasa foydalanuvchi hech qachon tasdiqlay olmaydi —
      // shuning uchun yarim yaratilgan hisobni o'chirib tashlaymiz,
      // aks holda username/email "band" bo'lib qolardi.
      await User.deleteOne({ _id: user._id });
      return res.status(sent.status).json({ error: sent.error });
    }

    return res.status(201).json({
      message: sent.viaConsole
        ? "TEST REJIMI: kod server konsoliga yozildi (email yuborilmadi)"
        : "Tasdiqlash kodi emailingizga yuborildi",
      needsVerification: true,
      email: user.email,
      devCodeInConsole: !!sent.viaConsole,
    });
  } catch (err) {
    console.error("register error:", err.message);
    if (err.code === 11000) {
      if (err.keyPattern?.username)
        return res
          .status(409)
          .json({ error: "Bu username band, boshqasini tanlang" });
      if (err.keyPattern?.email)
        return res
          .status(409)
          .json({ error: "Bu email allaqachon ro'yxatdan o'tgan" });
      if (err.keyPattern?.googleId) {
        await User.updateMany({ googleId: null }, { $unset: { googleId: "" } });
        return res
          .status(500)
          .json({
            error: "Texnik xatolik tuzatildi. Qayta ro'yxatdan o'ting.",
          });
      }
    }
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ─────────────────────────────────────────
   POST /api/auth/verify-otp
───────────────────────────────────────── */
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ error: "Email va tasdiqlash kodi kerak" });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
      emailVerified: false,
      authProvider: "local",
    });

    if (!user) {
      return res
        .status(404)
        .json({
          error: "Foydalanuvchi topilmadi yoki allaqachon tasdiqlangan",
        });
    }
    if (!user.otpCode || !user.otpExpires) {
      return res
        .status(400)
        .json({ error: "Tasdiqlash kodi topilmadi. Qayta ro'yxatdan o'ting" });
    }
    if (new Date() > user.otpExpires) {
      return res
        .status(400)
        .json({
          error: "Tasdiqlash kodining muddati tugagan. Qayta ro'yxatdan o'ting",
        });
    }
    /* ⚠️ Urinishlar soni email bo'yicha cheklanadi — izoh `utils/otpGuard.js` da */
    if (!otpGuard.safeEqual(user.otpCode, String(otp).trim())) {
      if (otpGuard.recordOtpFailure(user.email)) {
        user.otpCode = null;
        user.otpExpires = null;
        await user.save();
        otpGuard.clearOtpFailures(user.email);
        return res.status(429).json({
          error:
            "Juda ko'p noto'g'ri urinish. Kod bekor qilindi — «Kodni qayta yuborish» tugmasini bosing.",
        });
      }
      return res.status(400).json({ error: "Tasdiqlash kodi noto'g'ri" });
    }
    otpGuard.clearOtpFailures(user.email);

    // Telegram bog'lash tokeni yaratish
    const cryptoV = require("crypto");
    const tgTokenV = cryptoV.randomBytes(20).toString("hex");
    const tgExpiresV = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    user.emailVerified = true;
    user.otpCode = `tglink_${tgTokenV}`;
    user.otpExpires = tgExpiresV;
    user.lastLogin = new Date();
    await user.save();

    const verifySource =
      req.headers["x-app-platform"] === "mobile" ? "mobile" : "web";
    await logLogin(req, user._id, verifySource);

    const botUsernameV =
      process.env.TELEGRAM_BOT_USERNAME || "mening_huquqlarim_bot";
    const botUrlV = `https://t.me/${botUsernameV}?start=link_${tgTokenV}`;

    const token = signToken(user);
    return res.json({
      message: "Email muvaffaqiyatli tasdiqlandi!",
      token,
      user: userPublic(user),
      botUrl: botUrlV,
    });
  } catch (err) {
    console.error("verify-otp error:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ─────────────────────────────────────────
   POST /api/auth/resend-otp
───────────────────────────────────────── */
router.post("/resend-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email kerak" });

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
      emailVerified: false,
      authProvider: "local",
    });

    if (!user) {
      return res.status(404).json({ error: "Tasdiqlanmagan hisob topilmadi" });
    }

    /* Email bombardimoniga qarshi: bitta manzilga daqiqada bitta kod */
    const wait = otpGuard.resendWaitSeconds(user.email);
    if (wait) {
      return res
        .status(429)
        .json({ error: `Yangi kodni ${wait} soniyadan keyin so'rashingiz mumkin.` });
    }

    const otp = generateOTP();
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    user.otpCode = otp;
    user.otpExpires = expires;
    await user.save();

    const sent = await trySendOtp(user, otp);
    if (!sent.ok) {
      return res.status(sent.status).json({ error: sent.error });
    }
    otpGuard.markOtpSent(user.email);
    otpGuard.clearOtpFailures(user.email);

    return res.json({
      message: sent.viaConsole
        ? "TEST REJIMI: yangi kod server konsoliga yozildi"
        : "Yangi tasdiqlash kodi yuborildi",
      devCodeInConsole: !!sent.viaConsole,
    });
  } catch (err) {
    console.error("resend-otp error:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ─────────────────────────────────────────
   POST /api/auth/forgot-password
   Parolni unutgan foydalanuvchi admindan tiklashni so'raydi.
   Bu yerda parol O'ZGARTIRILMAYDI — faqat admin paneliga
   "password_reset" turidagi murojaat tushadi. Admin bir bosishda
   yangi parol beradi va u foydalanuvchi emailiga yuboriladi
   (routes/admin.js → PATCH /support/:id/reset-password).
───────────────────────────────────────── */
router.post("/forgot-password", async (req, res) => {
  try {
    const { email, message } = req.body;
    if (!email || !String(email).trim()) {
      return res.status(400).json({ error: "Email kiritish shart" });
    }
    const normalized = String(email).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return res.status(400).json({ error: "Email manzil noto'g'ri formatda" });
    }

    const user = await User.findOne({ email: normalized });
    if (!user) {
      return res.status(404).json({
        error: "Bu email bilan ro'yxatdan o'tgan foydalanuvchi topilmadi",
      });
    }
    if (user.authProvider === "google" && !user.password) {
      return res.status(400).json({
        error:
          "Bu hisob Google orqali yaratilgan — parol kerak emas. \"Google bilan kirish\" tugmasidan foydalaning.",
      });
    }
    if (user.isBlocked) {
      return res.status(403).json({
        error: "Hisobingiz bloklangan. Texnik yordam bilan bog'laning.",
      });
    }
    if (isResetRequestTooSoon(normalized)) {
      return res.status(429).json({
        error:
          "So'rovingiz allaqachon yuborilgan. Admin javobini kuting (bir necha daqiqa).",
      });
    }

    const note = String(message || "").trim().slice(0, 500);
    const text =
      `Parolni tiklash so'rovi.\n` +
      `Foydalanuvchi: @${user.username}\n` +
      `Email: ${user.email}` +
      (note ? `\n\nQo'shimcha izoh: ${note}` : "");

    // Hali hal qilinmagan so'rov bo'lsa — yangisini yaratmaymiz,
    // mavjudini yangilaymiz (admin panelda dublikat to'planmasin).
    const existing = await SupportMessage.findOne({
      email: user.email,
      type: "password_reset",
      status: "pending",
    });
    if (existing) {
      existing.message = text;
      existing.read = false;
      existing.userId = user._id;
      await existing.save();
    } else {
      await SupportMessage.create({
        name: user.fullName || user.username,
        email: user.email,
        message: text,
        type: "password_reset",
        userId: user._id,
      });
    }

    lastResetRequestAt.set(normalized, Date.now());
    // Map cheksiz o'smasligi uchun eskirgan yozuvlarni tozalaymiz.
    if (lastResetRequestAt.size > 500) {
      const cutoff = Date.now() - RESET_REQUEST_COOLDOWN_MS;
      for (const [key, ts] of lastResetRequestAt) {
        if (ts < cutoff) lastResetRequestAt.delete(key);
      }
    }

    return res.status(201).json({
      success: true,
      message:
        "So'rovingiz adminga yuborildi. Yangi parol tez orada emailingizga keladi.",
    });
  } catch (err) {
    console.error("forgot-password error:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ─────────────────────────────────────────
   POST /api/auth/login
───────────────────────────────────────── */
router.post("/login", bruteForceGuard, async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username va parol kerak" });
    }

    const query = username.includes("@")
      ? { email: username.trim().toLowerCase() }
      : { username: username.trim().toLowerCase() };

    const ip = getClientIp(req);
    const user = await User.findOne(query);
    if (!user) {
      recordFailedLogin(req);
      return res.status(401).json({ error: "Username yoki parol noto'g'ri" });
    }
    if (user.isBlocked)
      return res
        .status(403)
        .json({
          error: "Sizning hisobingiz bloklangan. Admin bilan bog'laning.",
        });
    if (user.authProvider === "google") {
      return res
        .status(400)
        .json({
          error: "Bu hisob Google orqali yaratilgan. Google bilan kiring.",
        });
    }

    const ok = await user.comparePassword(password);
    if (!ok) {
      const blocked = recordFailedLogin(req);
      if (blocked) {
        return res
          .status(429)
          .json({ error: "Juda ko'p noto'g'ri urinish. 15 daqiqa kuting." });
      }
      return res.status(401).json({ error: "Username yoki parol noto'g'ri" });
    }

    // Muvaffaqiyatli login — urinishlarni tozalash
    clearLoginAttempts(req);

    // Parol to'g'ri, lekin email hali tasdiqlanmagan (ro'yxatdan o'tish
    // yarim yo'lda qolgan) — yangi kod yuborib, tasdiqlash ekraniga
    // qaytaramiz. Token bu bosqichda BERILMAYDI.
    if (user.authProvider === "local" && !user.emailVerified) {
      const otp = generateOTP();
      user.otpCode = otp;
      user.otpExpires = new Date(Date.now() + OTP_TTL_MS);
      await user.save();

      const sent = await trySendOtp(user, otp);

      // Email ishlamayapti-yu, kalit yoqilgan — foydalanuvchi hisobidan
      // butunlay ayrilib qolmasligi uchun kiritamiz.
      if (!sent.ok && sent.degraded) {
        user.emailVerified = true;
        user.otpCode = null;
        user.otpExpires = null;
        user.lastLogin = new Date();
        await user.save();
        await logLogin(req, user._id, "web");
        return res.json({ token: signToken(user), user: userPublic(user) });
      }

      if (!sent.ok) {
        return res.status(sent.status).json({ error: sent.error });
      }
      return res.status(403).json({
        error: sent.viaConsole
          ? "TEST REJIMI: tasdiqlash kodi server konsoliga yozildi."
          : "Emailingiz tasdiqlanmagan. Yuborilgan kodni kiriting.",
        needsVerification: true,
        email: user.email,
        devCodeInConsole: !!sent.viaConsole,
      });
    }

    user.lastLogin = new Date();
    await user.save();

    await logLogin(req, user._id, "web");

    const token = signToken(user);
    return res.json({ token, user: userPublic(user) });
  } catch (err) {
    console.error("login error:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ─────────────────────────────────────────
   POST /api/auth/google
───────────────────────────────────────── */
router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;
    if (!credential)
      return res.status(400).json({ error: "Google credential kerak" });
    if (!process.env.GOOGLE_CLIENT_ID) {
      return res
        .status(503)
        .json({ error: "Google login hozircha sozlanmagan" });
    }

    let payload;
    try {
      const ticket = await googleClient.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      payload = ticket.getPayload();
    } catch {
      return res
        .status(401)
        .json({ error: "Google token noto'g'ri yoki muddati tugagan" });
    }

    const {
      sub: googleId,
      email,
      name,
      given_name,
      email_verified: emailVerifiedByGoogle,
    } = payload;
    if (!email)
      return res.status(400).json({ error: "Google hisobida email topilmadi" });

    // XAVFSIZLIK: Google har doim ham tasdiqlangan email qaytarmaydi
    // (masalan o'z domenini boshqaradigan Workspace hisoblarida). Bunday
    // tokenga ishonib ketilsa, begona odam boshqa birovning email manzilini
    // "men" deb ko'rsatib, o'sha manzildagi mavjud hisobga kirib olishi
    // mumkin edi. Shuning uchun tasdiqlanmagan email qabul qilinmaydi.
    if (emailVerifiedByGoogle === false) {
      return res.status(403).json({
        error:
          "Google hisobingizdagi email tasdiqlanmagan. Avval uni Google'da tasdiqlang yoki email va parol bilan ro'yxatdan o'ting.",
      });
    }

    let user = await User.findOne({
      $or: [{ googleId }, { email: email.toLowerCase() }],
    });

    if (user) {
      if (user.isBlocked) {
        return res.status(403).json({ error: "Sizning hisobingiz bloklangan" });
      }
      if (!user.googleId) {
        user.googleId = googleId;
      }
      // BUG FIX: avval bu yerda authProvider har doim "google"ga
      // o'zgartirilardi. Natijada email/parol bilan ro'yxatdan o'tgan odam
      // bir marta "Google bilan kirish"ni bossa, hisobi butunlay Google'ga
      // o'tib ketardi va keyin PAROLI BILAN KIRA OLMASDI (login route
      // "Bu hisob Google orqali yaratilgan" deb rad etardi). Endi paroli
      // bor hisob "local" bo'lib qoladi — ikkala usul ham ishlaydi.
      if (!user.password) {
        user.authProvider = "google";
      }
      // Google email egaligini tasdiqlagan — shu sabab tasdiqlanmagan
      // (ro'yxatdan o'tish yarim qolgan) hisob ham shu yerda tasdiqlanadi.
      user.emailVerified = true;
    } else {
      // Moderatsiya qoidabuzarligi sabab bloklangan email — Google orqali
      // ham hech qachon yangi hisob ocholmaydi.
      const banned = await BannedEmail.findOne({ email: email.toLowerCase() });
      if (banned) {
        return res.status(403).json({
          error: "Bu email qoidabuzarlik sabab butunlay bloklangan va qayta ro'yxatdan o'ta olmaydi.",
        });
      }

      let baseUsername =
        (given_name || name || email.split("@")[0])
          .toLowerCase()
          .replace(/[^a-z0-9_]/g, "")
          .slice(0, 20) || "user";
      if (baseUsername.length < 3) baseUsername = "user" + baseUsername;

      let username = baseUsername;
      let counter = 1;
      while (await User.findOne({ username })) {
        username = `${baseUsername}${counter++}`;
      }

      const cryptoG = require("crypto");
      const tgTokenG = cryptoG.randomBytes(20).toString("hex");
      const tgExpiresG = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

      user = await User.create({
        username,
        password: "",
        fullName: name || "",
        email: email.toLowerCase(),
        emailVerified: true,
        googleId,
        authProvider: "google",
        otpCode: `tglink_${tgTokenG}`,
        otpExpires: tgExpiresG,
      });

      user._tgToken = tgTokenG; // temp, DB ga saqlanmaydi
    }

    user.lastLogin = new Date();
    await user.save();

    await logLogin(req, user._id, "google");

    const botUsernameG =
      process.env.TELEGRAM_BOT_USERNAME || "mening_huquqlarim_bot";
    const botUrlG = user.otpCode?.startsWith("tglink_")
      ? `https://t.me/${botUsernameG}?start=link_${user.otpCode.replace("tglink_", "")}`
      : null;

    const token = signToken(user);
    return res.json({ token, user: userPublic(user), botUrl: botUrlG });
  } catch (err) {
    console.error("google auth error:", err.message);
    if (err.code === 11000) {
      if (err.keyPattern?.googleId)
        return res
          .status(409)
          .json({ error: "Bu Google hisob allaqachon bog'langan" });
      if (err.keyPattern?.email)
        return res
          .status(409)
          .json({ error: "Bu email boshqa hisobda ishlatilmoqda" });
    }
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/auth/me */
router.get("/me", require("../middleware/auth").userGuard, async (req, res) => {
  try {
    const userId = String(req.authUser.id);

    // Admin bu userni o'chirganda darhol 401 qaytaramiz
    const { deletedUserIds } = require("./admin");
    if (deletedUserIds?.has(userId)) {
      return res
        .status(401)
        .json({ error: "Akkaunt o'chirildi", deleted: true });
    }

    const user = await User.findById(userId)
      .select("-password -otpCode -otpExpires")
      .lean();
    if (!user)
      return res
        .status(401)
        .json({ error: "Foydalanuvchi topilmadi", deleted: true });
    return res.json({ user });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* PUT /api/auth/profile */
router.put(
  "/profile",
  require("../middleware/auth").userGuard,
  async (req, res) => {
    try {
      const { fullName, username } = req.body;
      const user = await User.findById(req.authUser.id);
      if (!user)
        return res.status(404).json({ error: "Foydalanuvchi topilmadi" });

      if (username && username !== user.username) {
        if (username.length < 3 || username.length > 30) {
          return res
            .status(400)
            .json({ error: "Username 3-30 belgidan iborat bo'lsin" });
        }
        if (!/^[a-z0-9_]+$/.test(username.toLowerCase())) {
          return res
            .status(400)
            .json({
              error:
                "Username faqat harf, raqam va _ belgisidan iborat bo'lsin",
            });
        }
        const exists = await User.findOne({
          username: username.toLowerCase(),
          _id: { $ne: user._id },
        });
        if (exists)
          return res
            .status(409)
            .json({ error: "Bu username band, boshqasini tanlang" });
        user.username = username.toLowerCase();
      }

      if (fullName !== undefined) {
        user.fullName = fullName.trim().slice(0, 100);
      }

      await user.save();
      return res.json({
        message: "Profil muvaffaqiyatli yangilandi",
        user: {
          id: user._id,
          username: user.username,
          fullName: user.fullName,
          email: user.email,
        },
      });
    } catch (err) {
      console.error("profile update error:", err.message);
      return res.status(500).json({ error: "Server xatosi" });
    }
  },
);

/* PUT /api/auth/change-password */
router.put(
  "/change-password",
  require("../middleware/auth").userGuard,
  async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
      if (!currentPassword || !newPassword) {
        return res
          .status(400)
          .json({ error: "Joriy parol va yangi parol kerak" });
      }
      const user = await User.findById(req.authUser.id);
      if (!user)
        return res.status(404).json({ error: "Foydalanuvchi topilmadi" });

      /* Parol siyosati tekshiruvi `user` YUKLANGANDAN KEYIN turadi —
         u login/email bilan solishtirish uchun kerak. */
      const npCheck = validatePassword(newPassword, {
        username: user.username,
        email: user.email,
      });
      if (!npCheck.ok) {
        return res.status(400).json({ error: npCheck.error });
      }

      if (user.authProvider === "google" && !user.password) {
        return res
          .status(400)
          .json({
            error: "Google orqali kirgan hisobda parol o'zgartirib bo'lmaydi",
          });
      }

      const ok = await user.comparePassword(currentPassword);
      if (!ok) return res.status(401).json({ error: "Joriy parol noto'g'ri" });

      user.password = newPassword;
      await user.save();

      return res.json({ message: "Parol muvaffaqiyatli o'zgartirildi" });
    } catch (err) {
      console.error("change-password error:", err.message);
      return res.status(500).json({ error: "Server xatosi" });
    }
  },
);

module.exports = router;

/* ─────────────────────────────────────────
   POST /api/auth/telegram-link-token
   Saytda login qilgan user uchun bir martalik
   token yaratadi — bot orqali Telegram bog'lash uchun
───────────────────────────────────────── */
router.post(
  "/telegram-link-token",
  require("../middleware/auth").userGuard,
  async (req, res) => {
    try {
      const crypto = require("crypto");
      const token = crypto.randomBytes(20).toString("hex");
      const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 daqiqa

      const user = await User.findById(req.authUser.id);
      if (!user) return res.status(404).json({ error: "Topilmadi" });

      user.otpCode = `tglink_${token}`;
      user.otpExpires = expires;
      await user.save();

      const botUsername =
        process.env.TELEGRAM_BOT_USERNAME || "mening_huquqlarim_bot";
      const botUrl = `https://t.me/${botUsername}?start=link_${token}`;

      return res.json({ token, botUrl, expiresIn: 900 });
    } catch (err) {
      console.error("telegram-link-token error:", err.message);
      return res.status(500).json({ error: "Server xatosi" });
    }
  },
);

/* GET /api/auth/telegram-status */
router.get(
  "/telegram-status",
  require("../middleware/auth").userGuard,
  async (req, res) => {
    try {
      const user = await User.findById(req.authUser.id)
        .select("telegramId telegramVerified telegramUsername")
        .lean();
      if (!user) return res.status(404).json({ error: "Topilmadi" });
      return res.json({
        telegramId: user.telegramId,
        telegramVerified: user.telegramVerified,
        telegramUsername: user.telegramUsername,
      });
    } catch {
      return res.status(500).json({ error: "Server xatosi" });
    }
  },
);

"use strict";
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");


const { Admin, User, SiteContent, Payment, PaymentStats } = require("./models");
const {
  inputSanitizer,
  pathTraversalGuard,
  securityHeaders,
  payloadSizeGuard,
  botGuard,
  getDeviceKey,
} = require("./middleware/security");
const { isHosted, hostingName, selfPublicUrl } = require("./utils/hosting");

const app = express();
const PORT = process.env.PORT || 3000;

/* ───── TRUST PROXY ───── */
app.set("trust proxy", 1);

/* ───── BASIC ROUTES ───── */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API ishlayapti 🚀",
    status: "ok",
  });
});

/* ───── SECURITY HEADERS ───── */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
);

app.use(securityHeaders);

/* ───── CORS ─────
   BUG FIX (2026-08-04): bu ro'yxatda faqat ESKI, allaqachon o'chirilgan
   manzillar (huquq-ai-rose.vercel.app, huquq-ai-fpa2.onrender.com)
   turgan edi. Vercel/Render har safar yangi deploy'da yangi subdomen
   beradi, natijada jonli frontend (huquq-ai-xi.vercel.app) backendga
   murojaat qilganda brauzer HAMMA so'rovni "No Access-Control-Allow-Origin"
   deb bloklardi — sayt umuman ma'lumot ololmasdi.

   Yechim uch qatlamli:
   1) FRONTEND_URL (.env, vergul bilan bir nechta bo'lishi mumkin) —
      asosiy va eng aniq usul;
   2) VERCEL_PREVIEW_PATTERN — shu loyihaning Vercel subdomenlari
      (huquq-ai-*.vercel.app) avtomatik ruxsat oladi, shunda har yangi
      deploy'da kodga qayta tegish shart emas;
   3) selfPublicUrl() — backendning O'Z domeni. Railway uni har deploy'da
      RAILWAY_PUBLIC_DOMAIN sifatida o'zi qo'yadi, shuning uchun domen
      o'zgarsa ham ro'yxatga avtomatik tushadi (2026-08-22, Render →
      Railway ko'chishi: avval bu manzil qo'lda yozilgani uchun hosting
      almashganda ro'yxat darhol eskirgan bo'lib qolardi).

   Xavfsizlik izohi: naqsh faqat shu loyiha nomi bilan boshlanadigan
   vercel.app subdomenlariga tegishli. Autentifikatsiya JWT orqali
   Authorization sarlavhasida (cookie EMAS) ishlagani uchun begona sayt
   CORS ruxsatidan foyda ololmaydi — tokeni bo'lmaydi. Agar kelajakda
   cookie-asosidagi sessiyaga o'tilsa, bu naqshni olib tashlash kerak. */
const defaultOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "https://huquq-ai-xi.vercel.app", // joriy frontend
  "https://huquq-ai-production.up.railway.app", // backendning o'zi (Railway)
  "https://huquq-ai-admin.vercel.app", // admin paneli
];
const frontendUrl = process.env.FRONTEND_URL;

const allowedOrigins = [
  ...new Set([
    ...(frontendUrl ? frontendUrl.split(",").map((s) => s.trim()) : []),
    ...(selfPublicUrl() ? [selfPublicUrl()] : []),
    ...defaultOrigins,
  ]),
];

// Shu loyihaning Vercel deploylari: https://huquq-ai-<nimadir>.vercel.app
const VERCEL_PREVIEW_PATTERN = /^https:\/\/huquq-ai[a-z0-9-]*\.vercel\.app$/i;

function isAllowedOrigin(origin) {
  return allowedOrigins.includes(origin) || VERCEL_PREVIEW_PATTERN.test(origin);
}

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (isAllowedOrigin(origin)) return cb(null, true);
      // Xatolik tashlash o'rniga shunchaki "ruxsat yo'q" deb qaytaramiz:
      // aks holda har bir begona so'rov error handler'ga tushib, log'ni
      // stack trace bilan to'ldirardi.
      console.warn("CORS: ruxsat berilmagan origin —", origin);
      return cb(null, false);
    },
    credentials: true,
  }),
);

/* ───── BODY LIMIT ───── */
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

/* ───── HEALTH (CORS keyin — frontend ping uchun) ───── */
app.get("/health", (_, res) =>
  res.json({ status: "ok", timestamp: new Date() }),
);

/* ───── SECURITY MIDDLEWARE ───── */
app.use((req, res, next) => {
  if (req.path === "/api/admin/login") return next();
  pathTraversalGuard(req, res, next);
});

app.use((req, res, next) => {
  if (req.path === "/api/admin/login") return next();
  // Voice endpointlari audio fayl yuboradi (1-10MB) — size guard o'chiriladi
  if (req.path.startsWith("/api/voice")) return next();
  payloadSizeGuard(req, res, next);
});

app.use((req, res, next) => {
  // Eslatma: avval bu yerda /api/admin/login uchun istisno bor edi, chunki
  // eski sanitizeValue() parolda '/" belgisi bo'lsa uni buzib qo'yardi.
  // Endi sanitizeValue() satrlarni o'zgartirmaydi (faqat $-operator
  // kalitlarini tozalaydi) — shuning uchun bu yerda istisnoga hojat yo'q,
  // va admin login endi ham NoSQL-injection tekshiruvidan o'tadi.
  inputSanitizer(req, res, next);
});

app.use((req, res, next) => {
  // Click/Payme webhook'lari server-to-server keladi — o'z UA'lari bo'lishi
  // mumkin va imzo/Basic-Auth orqali allaqachon tasdiqlanadi, shuning uchun
  // bot-tekshiruvdan istisno (aks holda haqiqiy to'lovlar bloklanib qolishi
  // mumkin edi).
  if (
    req.path === "/api/admin/login" ||
    req.path === "/api/payment/click/webhook" ||
    req.path === "/api/payment/payme/webhook"
  ) {
    return next();
  }
  botGuard(req, res, next);
});

/* ───── LOGGING ───── */
app.use(
  process.env.NODE_ENV === "production" ? morgan("combined") : morgan("dev"),
);

/* ───── RATE LIMIT ───── */
// Lokal ishlab chiqish (localhost) so'rovlari limitdan ozod — aks holda
// saytni bir necha marta yangilashning o'ziyoq limitni to'ldirib, hamma
// narsa 429 bilan ishlamay qolardi.
function isLocalRequest(req) {
  const ip = req.ip || "";
  return ip === "::1" || ip === "127.0.0.1" || ip === "::ffff:127.0.0.1";
}

// Umumiy API rate limit.
// MUHIM: bitta sahifa yuklanishida ~6 ta so'rov ketadi (site/content,
// payment/plans, payment/plan, chat/usage, visitor/track). Avvalgi 100
// limit ~16 marta sahifa yangilashga yetardi, keyin butun sayt 429
// bilan ishlamay qolardi. Shuning uchun limit real foydalanishga mos
// qilib oshirildi (himoya funksiyasi saqlanib qoladi).
app.use(
  "/api/",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 600,
    standardHeaders: true,
    legacyHeaders: false,
    skip: isLocalRequest,
    message: {
      error: "Juda ko'p so'rov. 15 daqiqadan so'ng qayta urinib ko'ring.",
    },
  }),
);

// Auth endpointlari uchun limit.
// Avval 20 edi, lekin frontend har 60 soniyada /auth/me ni chaqiradi
// (sessiya tekshiruvi) — ya'ni oddiy foydalanuvchi 20 daqiqada limitga
// urilib qolardi. Parolni topishga urinishdan himoya bu limit emas,
// balki login endpointidagi alohida bruteForceGuard (5 urinish) orqali
// ta'minlanadi, shuning uchun bu yerdagi raqamni oshirish xavfsiz.
/* ⚠️ KALIT QURILMA BO'YICHA (2026-08-07).
   Avval bu limiter IP bo'yicha ishlardi va bu jiddiy muammo edi:
   frontend har 60 soniyada `/auth/me` ni chaqiradi, ya'ni umumiy
   Wi-Fi'dagi 30 ta foydalanuvchi 15 daqiqada ~450 so'rov hosil qiladi
   va BUTUN OFIS 429 xatosiga uchrardi. Endi har bir qurilma o'z
   hisobiga ega. IP bo'yicha himoya yo'qolmadi — u yuqoridagi umumiy
   `/api/` limiterida (600) va login'dagi uch qatlamli brute-force
   himoyasida saqlanib qoladi. */
app.use(
  "/api/auth/",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 150,
    standardHeaders: true,
    legacyHeaders: false,
    skip: isLocalRequest,
    keyGenerator: (req) => getDeviceKey(req),
    message: {
      error: "Juda ko'p urinish. 15 daqiqadan so'ng qayta urinib ko'ring.",
    },
  }),
);

/* Texnik yordam formasi — spam va email "razvedka"siga qarshi.
   Avval bu endpointda umuman limit yo'q edi: forma anonim ochiq va
   har bir so'rov bazaga yozuv yaratardi hamda email ro'yxatdan
   o'tgan-o'tmaganini oshkor qilardi. Soatiga 5 ta urinish — haqiqiy
   foydalanuvchi uchun yetarli, ommaviy tekshirish uchun juda kam. */
app.use(
  "/api/support",
  rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => isLocalRequest(req) || req.method === "GET",
    keyGenerator: (req) => getDeviceKey(req),
    message: {
      error:
        "Juda ko'p murojaat yuborildi. Bir soatdan so'ng qayta urinib ko'ring.",
    },
  }),
);

/* Parolni tiklash — hisob "razvedka"si va email bombardimoniga qarshi */
app.use(
  "/api/auth/forgot-password",
  rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    skip: isLocalRequest,
    keyGenerator: (req) => getDeviceKey(req),
    message: {
      error: "Juda ko'p urinish. Bir soatdan so'ng qayta urinib ko'ring.",
    },
  }),
);

/* Ovozli endpointlar — eng qimmat amal (nutq→matn + AI + ovoz).
   Kunlik limitdan tashqari qisqa oraliqli "portlash" himoyasi. */
app.use(
  "/api/voice/",
  rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    skip: isLocalRequest,
    keyGenerator: (req) => getDeviceKey(req),
    message: { error: "Juda tez yuborilmoqda. Bir oz kuting." },
  }),
);

// Chat endpointi uchun alohida limit
app.use(
  "/api/chat/",
  rateLimit({
    windowMs: 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
    skip: isLocalRequest,
    message: { error: "Juda tez yuborilmoqda. Bir oz kuting." },
  }),
);

/* ───── ROUTES ───── */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/chat", require("./routes/chat"));
app.use("/api/voice", require("./routes/voice"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/visitor", require("./routes/visitor"));
app.use("/api/site", require("./routes/site"));
app.use("/api/notifications", require("./routes/notifications"));
app.use("/api/support", require("./routes/support"));
app.use("/api/payment", require("./routes/payment"));
app.use("/api/library", require("./routes/library"));
app.use("/api/admin/laws", require("./routes/adminLaws"));
app.use("/api/lessons", require("./routes/lessons"));
app.use("/api/lesson-practice", require("./routes/lessonPractice"));
app.use("/api/tests", require("./routes/tests"));
app.use("/api/progress", require("./routes/progress"));
app.use("/api/admin/content", require("./routes/adminContent"));

/* ───── OCHIQ (INDEKSLANADIGAN) QONUN SAHIFALARI ─────
   Server tomonda chiziladigan HTML. Foydalanuvchi ularni ASOSIY
   domenda ochadi (`/qonunlar`, `/qonun/MK/109`) — Vercel rewrite
   so'rovni shu yerga uzatadi (`frontend/vercel.json`).

   Nima uchun serverda: sayt SPA, AI botlari (GPTBot, PerplexityBot,
   ClaudeBot) esa JavaScript'ni ishga tushirmaydi va React chizgan
   kontentni umuman ko'rmaydi. */
/* ⚠️ TARTIB MUHIM: Markdown marshrutlari (`.md`) HTML marshrutlaridan
   OLDIN ulanadi. Express qoidalarni tartib bo'yicha tekshiradi va
   `/qonun/:code/:article` naqshi `.md` bilan tugagan manzilni ham
   tutib olardi — natijada bot Markdown so'raganda HTML olardi. */
app.use("/public", require("./routes/publicSeoMd"));
app.use("/public", require("./routes/publicSeo"));

/* Savol-javob markazi (AEO), Metodologiya sahifasi (E-E-A-T) va
   ularning Markdown nusxalari. */
app.use("/public", require("./routes/publicQa"));

/* ⚠️ Backend domenining O'ZI (up.railway.app) indekslanmasligi kerak —
   aks holda bir xil sahifa ikki manzilda turib, "duplicate content"
   hosil bo'lardi. Sahifalardagi canonical asosiy domenga ishora
   qiladi, bu esa qo'shimcha himoya. */
app.get("/robots.txt", (req, res) => {
  res.type("text/plain").send("User-agent: *\nDisallow: /\n");
});

/* ───── 404 ───── */
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint topilmadi" });
});

/* ───── ERROR HANDLER ───── */
app.use((err, req, res, next) => {
  console.error("Error:", err);

  if (err.message?.includes("CORS")) {
    return res.status(403).json({ error: "CORS blocked" });
  }

  res.status(500).json({ error: "Server xatosi" });
});

/* ───── DB + START ───── */
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mening_huquqim",
    {
      serverSelectionTimeoutMS: 5000,
    },
  )
  .then(async () => {
    console.log("✅ MongoDB ulandi");

    await User.updateMany(
      { $or: [{ googleId: null }, { googleId: "" }] },
      { $unset: { googleId: "" } },
    );

    await User.updateMany(
      { $or: [{ telegramId: null }, { telegramId: "" }] },
      { $unset: { telegramId: "" } },
    );

    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      await Admin.create({
        username: process.env.ADMIN_USERNAME || "admin",
        password:
          process.env.ADMIN_PASSWORD ||
          (() => {
            if (process.env.NODE_ENV === "production") {
              throw new Error(
                "ADMIN_PASSWORD muhit o'zgaruvchisi o'rnatilmagan!",
              );
            }
            console.warn(
              "⚠️  Default admin password ishlatilmoqda — faqat development uchun!",
            );
            return "admin123";
          })(),
      });
      console.log("✅ Default admin yaratildi");
    }

    const contentCount = await SiteContent.countDocuments();
    if (contentCount === 0) {
      await SiteContent.create({});
      console.log("✅ Site content yaratildi");
    }

    // PaymentStats — jami tushum/soni bo'yicha doimiy hisoblagich
    // (routes/payment.js "paid" holatida $inc qiladi, Payment yozuvlari
    // ro'yxatni yig'ilib ketmasligi uchun keyinchalik o'chirilsa ham
    // bu son o'zgarmaydi). Birinchi ishga tushishda — agar hali mavjud
    // bo'lmasa — hozirgi bazadagi "paid" yozuvlardan bir martalik
    // hisoblab boshlang'ich qiymat qo'yiladi (statistika 0'dan
    // boshlanib ketmasligi uchun).
    const statsExists = await PaymentStats.exists({ key: "global" });
    if (!statsExists) {
      const agg = await Payment.aggregate([
        { $match: { status: "paid" } },
        { $group: { _id: null, total: { $sum: "$amount" }, count: { $sum: 1 } } },
      ]);
      await PaymentStats.create({
        key: "global",
        totalRevenueUzs: agg[0]?.total || 0,
        paidCount: agg[0]?.count || 0,
      });
      console.log("✅ PaymentStats boshlang'ich hisoblandi");
    }

    if (process.env.TELEGRAM_BOT_TOKEN) {
      require("./telegram-bot");
    }

    // Darslar/Testlar: birinchi ishga tushishda mavjud statik kontentni
    // bazaga ko'chiradi (bo'sh bo'lsa), shundan keyin admin panel orqali
    // to'liq boshqariladi. Bloklamaslik uchun await qilinmaydi.
    require("./scripts/seedContent")
      .seedContent()
      .then((r) => console.log("📚 Darslar/Testlar seed:", JSON.stringify(r)))
      .catch((e) => console.warn("Kontent seed xato:", e.message));

    // RAG: qonun vektor indeksini tekshirish/yaratish (bir martalik, idempotent)
    // va har 24 soatda qonunlarni qayta tekshirish (auto-update — tahrir
    // o'zgargan moddalarni topib, qayta embedding qiladi). App ishga
    // tushishini bloklamasligi uchun await qilinmaydi (background).
    const { ensureVectorIndex } = require("./services/legalRetrieval");
    const { ingestAllLaws } = require("./scripts/ingestLaws");
    const { ingestAllLawsRu } = require("./scripts/ingestLawsRu");
    const LAW_UPDATE_INTERVAL_MS = 24 * 60 * 60 * 1000;

    // Qonunlar reyestri (LawSource) bo'sh bo'lsa — config/laws.js dan
    // to'ldiriladi. Bu ingestAllLaws() dan OLDIN bo'lishi SHART: u endi
    // ro'yxatni bazadan oladi, bo'sh bazada hech narsa yuklamasdi.
    const { seedLawSources } = require("./services/lawRegistry");

    /* Qonunlarni yuklash server ISHGA TUSHGANDAN 30 SONIYA KEYIN
       boshlanadi. Sabab: bu ish lex.uz'ga so'rovlar, hash hisoblash va
       (kerak bo'lsa) embedding chaqiruvlarini o'z ichiga oladi. Uni
       darhol boshlash serverning birinchi so'rovlarga javob berishini
       sekinlashtirardi — foydalanuvchi aynan shu paytda saytga
       kirayotgan bo'ladi. Kechikish tugagach ham ish fon rejimida
       ketadi va yaqinda tekshirilgan kodekslar o'tkazib yuboriladi. */
    /* Tarjima keshini fon rejimida to'ldirish — til almashtirilganda
       kontent AI kutmasdan, keshdan bir zumda kelishi uchun. */
    require("./services/translationWarmup").startWarmup();

    seedLawSources()
      .then(() => ensureVectorIndex())
      .then(
        () =>
          new Promise((r) => setTimeout(r, 30000).unref?.()),
      )
      .then(() => ingestAllLaws())
      /* Qonunlarning RASMIY RUS matni (lex.uz'da alohida hujjat ID).
         O'zbekcha yuklashdan KEYIN ishlaydi, chunki u mavjud moddalarga
         biriktiriladi (yangi yozuv yaratmaydi). Embedding chaqirmaydi —
         RAG o'zbekcha matn bo'yicha ishlashda davom etadi. */
      .then(() => ingestAllLawsRu())
      .catch((e) => console.warn("RAG boshlang'ich sozlash xato:", e.message));

    setInterval(() => {
      console.log("🔄 Qonunlar avtomatik tekshirilmoqda (RAG yangilanish)...");
      ingestAllLaws()
        .then(() => ingestAllLawsRu())
        .catch((e) => console.error("Qonun auto-update xato:", e.message));
    }, LAW_UPDATE_INTERVAL_MS).unref();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);

      if (process.env.ALLOW_UNVERIFIED_SIGNUP === "true") {
        console.warn(
          "\n" +
            "  ⚠️  ALLOW_UNVERIFIED_SIGNUP=true\n" +
            "     Email xizmati ishlamay qolsa, foydalanuvchilar email\n" +
            "     TASDIQLANMASDAN ro'yxatdan o'ta oladi. Bu — email\n" +
            "     provayderi tiklanmaguncha ishlatiladigan vaqtinchalik\n" +
            "     chora. Email ishlagach shu o'zgaruvchini o'chiring.\n",
        );
      }

      // Email xizmati holatini bir marta tekshirib, natijani logga yozamiz.
      // Sababi: "Tasdiqlash kodini yuborib bo'lmadi" xatosining aniq sababi
      // (kalit yo'q / IP cheklovi / jo'natuvchi tasdiqlanmagan) faqat shu
      // yerda ko'rinadi. IP cheklovida serverning tashqi IP manzili ham
      // chiqadi — uni to'g'ridan-to'g'ri Brevo ruxsat ro'yxatiga qo'shish
      // mumkin. So'rov fon rejimida ketadi, serverni bloklamaydi.
      require("./services/emailService")
        .checkEmailHealth()
        .then((h) => {
          const chain = h.providers?.length
            ? ` | provayderlar: ${h.providers.join(" → ")}`
            : "";
          if (h.ok) {
            console.log(
              `✉️  Email xizmati: ISHLAYAPTI (jo'natuvchi: ${h.senderEmail}` +
                (h.serverIp ? `, server IP: ${h.serverIp}` : "") +
                ")" +
                chain,
            );
            return;
          }
          console.error(
            "\n" +
              "  ❗ EMAIL XIZMATI ISHLAMAYAPTI — ro'yxatdan o'tish uchun\n" +
              "     tasdiqlash kodi YUBORILMAYDI.\n" +
              `     Sabab      : ${h.reason}\n` +
              (h.serverIp ? `     Server IP  : ${h.serverIp}\n` : "") +
              `     Jo'natuvchi: ${h.senderEmail}\n` +
              `     Provayderlar: ${h.providers?.join(" → ") || "(hech qaysi sozlanmagan)"}\n` +
              (h.hint ? `     Yechim     : ${h.hint}\n` : ""),
          );
        })
        .catch(() => {});

      // DEV_OTP_TO_CONSOLE — faqat lokal test uchun mo'ljallangan zaxira
      // yo'l (routes/auth.js → trySendOtp). Uni yoqib qo'yib unutish
      // xavfli bo'lgani uchun har ishga tushishda ko'zga tashlanadigan
      // ogohlantirish chiqaramiz. Hostingda (Railway/Render) bayroq umuman
      // ishlamaydi — bu haqda ham aniq aytamiz, aks holda "yoqdim-ku,
      // nega ishlamayapti?" degan chalkashlik chiqadi.
      if (process.env.DEV_OTP_TO_CONSOLE === "true") {
        if (isHosted()) {
          console.warn(
            "\n" +
              "  ⛔ DEV_OTP_TO_CONSOLE=true — LEKIN E'TIBORSIZ QOLDIRILDI\n" +
              "     Bu bayroq faqat lokal ishlab chiqish uchun; hostingda\n" +
              "     u xavfli (kodlar loglarga tushadi, foydalanuvchi esa\n" +
              `     kodni ololmay boshi berk ko'chaga kiradi). ${hostingName()}\n` +
              "     dashboard → Variables bo'limidan shu o'zgaruvchini\n" +
              "     O'CHIRIB TASHLANG.\n",
          );
        } else {
          console.warn(
            "\n" +
              "  ⚠️  DIQQAT: DEV_OTP_TO_CONSOLE=true\n" +
              "     Email yuborilmasa ham ro'yxatdan o'tish davom etadi va\n" +
              "     tasdiqlash kodi shu konsolga yoziladi. Bu FAQAT lokal\n" +
              "     test uchun — production'ga deploy qilishdan oldin .env\n" +
              "     faylidan o'chiring yoki false qiling.\n",
          );
        }
      }
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  });

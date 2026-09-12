"use strict";
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { getPlanConfig } = require("../config/plans");

/* ── MESSAGE ── */
const MessageSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ["user", "assistant"], required: true },
    content: { type: String, required: true },
    // imageData DB da saqlanmaydi — memory only (production: cloud storage ishlatilsin)
    imageMimeType: { type: String, default: null },
  },
  { _id: false, timestamps: true },
);

/* ── CHAT ── */
const ChatSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    source: {
      type: String,
      enum: ["web", "telegram", "mobile"],
      default: "web",
    },
    category: { type: String, default: "boshqa" },
    telegramUserId: { type: String, default: null },
    telegramUsername: { type: String, default: null },
    messages: [MessageSchema],
  },
  { timestamps: true },
);
ChatSchema.index({ userId: 1, updatedAt: -1 });
ChatSchema.index({ sessionId: 1, userId: 1 });

/* ── USER LOGIN LOG ── */
const LoginLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    ip: { type: String, default: "" },
    userAgent: { type: String, default: "" },
    device: { type: String, default: "" },
    os: { type: String, default: "" },
    browser: { type: String, default: "" },
    source: {
      type: String,
      enum: ["web", "google", "telegram", "mobile"],
      default: "web",
    },
  },
  { timestamps: true },
);

/* ── VOICE LOG — ovozli chat logi ── */
const VoiceLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    userText: { type: String, default: "" },
    aiAnswer: { type: String, default: "" },
    language: { type: String, default: "uz" },
    category: { type: String, default: "" },
    durationMs: { type: Number, default: 0 },
    ttsOk: { type: Boolean, default: false },
  },
  { timestamps: true },
);
VoiceLogSchema.index({ userId: 1, createdAt: -1 });

/* ── USAGE LOG — kunlik limit hisoblash uchun ── */
const UsageLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    date: { type: String, required: true }, // "2025-05-22"
    count: { type: Number, default: 0 },
  },
  { timestamps: true },
);
UsageLogSchema.index({ userId: 1, date: 1 }, { unique: true });

/* ── GUEST USAGE LOG — login qilmagan (mehmon) foydalanuvchilar uchun,
   IP manzil bo'yicha kunlik limit. UsageLog dan alohida, chunki u yerda
   userId majburiy ObjectId — IP satrini saqlab bo'lmaydi, va mehmon
   trafigini haqiqiy foydalanuvchi statistikasidan aralashtirib
   yubormaslik uchun ham alohida turgani ma'qul. ── */
const GuestUsageLogSchema = new mongoose.Schema(
  {
    ip: { type: String, required: true, index: true },
    date: { type: String, required: true },
    count: { type: Number, default: 0 },
  },
  { timestamps: true },
);
GuestUsageLogSchema.index({ ip: 1, date: 1 }, { unique: true });

/* ── VOICE USAGE LOG — kunlik ovozli limit hisoblash uchun ── */
const VoiceUsageLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    date: { type: String, required: true }, // "2025-05-22"
    count: { type: Number, default: 0 },
  },
  { timestamps: true },
);
VoiceUsageLogSchema.index({ userId: 1, date: 1 }, { unique: true });

/* ── USER ── */
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    password: { type: String, default: "" },
    fullName: { type: String, trim: true, default: "" },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      sparse: true,
      unique: true,
    },
    emailVerified: { type: Boolean, default: false },
    googleId: { type: String, sparse: true, unique: true },
    authProvider: { type: String, enum: ["local", "google"], default: "local" },
    otpCode: { type: String, default: null },
    otpExpires: { type: Date, default: null },
    lastLogin: { type: Date, default: null },
    isBlocked: { type: Boolean, default: false },
    // Haqorat/18+ moderatsiya buzilishlari soni (services/moderation.js) —
    // 3-buzilishda isBlocked=true qilinadi va email BannedEmail'ga qo'shiladi.
    violationCount: { type: Number, default: 0 },
    // Limit
    dailyLimit: { type: Number, default: 5 }, // default: 5 ta savol/kun
    voiceDailyLimit: { type: Number, default: 10 }, // default: 10 ta ovozli chat/kun
    // Obuna tarifi — Click/Payme orqali to'lov qilingandan keyin faollashadi.
    // Limit/imkoniyatlar tarifga qarab config/plans.js dan AVTOMATIK olinadi —
    // foydalanuvchiga qo'lda limit belgilanmaydi.
    plan: {
      type: String,
      enum: ["free", "basic", "pro", "premium"],
      default: "free",
    },
    planExpiresAt: { type: Date, default: null },
    // Telegram
    telegramId: { type: String, sparse: true, unique: true },
    telegramVerified: { type: Boolean, default: false },
    telegramUsername: { type: String, default: null },
    pendingTelegramUsername: { type: String, default: null },
    /* Botda tanlangan til.
       ⚠️ NIMA UCHUN BAZADA: avval u faqat serverning XOTIRASIDA
       (`Map`) saqlanardi. Render har qayta ishga tushganda xotira
       tozalanadi — ya'ni ruscha tanlagan foydalanuvchi ertasiga
       botni yana o'zbekcha holatda topardi va tilni qayta
       tanlashiga to'g'ri kelardi. Endi tanlov saqlanadi.
       Bo'sh (`null`) — foydalanuvchi hali tanlamagan, bot so'raydi. */
    telegramLang: {
      type: String,
      enum: ["uz", "ru", null],
      default: null,
    },
    // Push Notifications (mobile)
    pushToken: { type: String, default: null },
    pushPlatform: {
      type: String,
      enum: ["ios", "android", "unknown", null],
      default: null,
    },
    pushTokenUpdatedAt: { type: Date, default: null },
  },
  { timestamps: true },
);
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
UserSchema.methods.comparePassword = function (plain) {
  if (!this.password) return Promise.resolve(false);
  return bcrypt.compare(plain, this.password);
};
// Foydalanuvchining HAQIQIY faol tarifini qaytaradi — obuna muddati
// o'tgan bo'lsa (planExpiresAt < hozir) avtomatik "free" hisoblanadi.
// Oddiy funksiya sifatida eksport qilinadi — .lean() natijalarida mongoose
// instance metodlari ishlamaydi, shuning uchun ikkalasi ham kerak.
function getUserTier(user) {
  if (!user || user.plan === "free" || !user.plan) return "free";
  if (!user.planExpiresAt) return user.plan; // muddatsiz (admin qo'lda bergan)
  return new Date(user.planExpiresAt).getTime() > Date.now()
    ? user.plan
    : "free";
}
// Claude (premium AI) huquqi bor-yo'qligini tekshiradi — Pro va Premium
// tariflarda true. Nomi eski chaqiruvchilar bilan moslik uchun saqlangan.
function isUserPro(user) {
  return getPlanConfig(getUserTier(user)).useClaude;
}
UserSchema.methods.isProActive = function () {
  return isUserPro(this);
};

/* ── ADMIN ── */
const AdminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    lastLogin: { type: Date, default: null },
  },
  { timestamps: true },
);
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
AdminSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};

/* ── DAILY STAT ── */
const DailyStatSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true },
  totalQuestions: { type: Number, default: 0 },
  webQuestions: { type: Number, default: 0 },
  telegramQuestions: { type: Number, default: 0 },
  mobileQuestions: { type: Number, default: 0 },
  categories: {
    mehnat: { type: Number, default: 0 },
    oila: { type: Number, default: 0 },
    meros: { type: Number, default: 0 },
    yer: { type: Number, default: 0 },
    istemolchi: { type: Number, default: 0 },
    jinoiy: { type: Number, default: 0 },
    boshqa: { type: Number, default: 0 },
  },
  // AI provider bo'yicha kunlik so'rovlar soni — "claude" pullik/Pro
  // so'rovlar, qolganlari bepul/arzon provayderlar. Xarajat/foyda
  // nazoratini ko'rish uchun (admin "AI ishlatilishi" bo'limi).
  providers: {
    claude: { type: Number, default: 0 },
    groq: { type: Number, default: 0 },
    cloudflare: { type: Number, default: 0 },
    gemini: { type: Number, default: 0 },
    // 2026-08-15 qo'shildi — mavjud provayderlar kvotasi tugaganda
    // javoblar aynan shulardan keladi; sxemada bo'lmasa Mongoose ularni
    // JIM tashlab yuborardi va statistika kamayib ko'rinardi.
    mistral: { type: Number, default: 0 },
    openai: { type: Number, default: 0 },
    cohere: { type: Number, default: 0 },
  },
});

/* ── VISITOR ── */
const VisitorSchema = new mongoose.Schema(
  {
    ip: { type: String, required: true, index: true },
    userAgent: { type: String, default: "" },
    path: { type: String, default: "/" },
    referrer: { type: String, default: "" },
    device: { type: String, default: "" },
    os: { type: String, default: "" },
    browser: { type: String, default: "" },
    country: { type: String, default: "" },
    city: { type: String, default: "" },
    visitCount: { type: Number, default: 1 },
    lastVisit: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
VisitorSchema.index({ ip: 1, createdAt: -1 });

/* ── SITE CONTENT ── */
const SiteContentSchema = new mongoose.Schema(
  {
    stats: {
      experience: { type: String, default: "10+" },
      experienceLabel: { type: String, default: "Yillik tajriba" },
      cases: { type: String, default: "500+" },
      casesLabel: { type: String, default: "Muvaffaqiyatli ishlar" },
      clients: { type: String, default: "1000+" },
      clientsLabel: { type: String, default: "Mamnun mijozlar" },
    },
    hero: {
      title: {
        type: String,
        default: "Huquqingizni biling, kelajagingizni himoya qiling",
      },
      subtitle: {
        type: String,
        default:
          "Professional huquqiy yordam — mehnat, oila, meros, yer va boshqa sohalarda. AI maslahatchi va tajribali mutaxassislar yoningizda.",
      },
      cta: { type: String, default: "Bepul konsultatsiya" },
    },
    about: {
      title: { type: String, default: "Biz haqimizda" },
      lead: {
        type: String,
        default: "Professional huquqiy yordam beruvchi jamoa",
      },
      text: {
        type: String,
        default:
          "Bizning jamoamiz O'zbekiston huquq sohasida ko'p yillik tajribaga ega bo'lgan mutaxassislardan iborat. Biz mijozlarga mehnat, oila, meros, yer, jinoyat va istemolchi huquqlari bo'yicha professional yordam beramiz.",
      },
    },
    contact: {
      address: {
        type: String,
        default: "Toshkent shahri, Chilonzor tumani, Bunyodkor ko'chasi 12-uy",
      },
      phone: { type: String, default: "+998 90 123 45 67" },
      email: { type: String, default: "info@huquq.uz" },
      hoursWeek: { type: String, default: "Dushanba — Juma: 09:00 — 18:00" },
      hoursSat: { type: String, default: "Shanba: 10:00 — 15:00" },
    },
    social: {
      telegram: { type: String, default: "https://t.me/mening_huquqlarim_bot" },
      instagram: { type: String, default: "" },
      facebook: { type: String, default: "" },
      youtube: { type: String, default: "" },
    },
  },
  { timestamps: true },
);

/* ── PAYMENT — Click / Payme orqali Pro obuna to'lovlari ── */
const PaymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    provider: { type: String, enum: ["click", "payme", "uzum"], required: true },
    // Provayderning o'z tranzaksiya ID'si (click_trans_id / Payme id)
    providerTransactionId: { type: String, default: null, index: true },
    // Bizning ichki merchant_trans_id — checkout yaratilganda generatsiya qilinadi
    merchantTransId: { type: String, required: true, unique: true, index: true },
    plan: { type: String, default: "pro_month" },
    // Summa — so'mda (UZS), butun son
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "cancelled", "failed"],
      default: "pending",
    },
    paidAt: { type: Date, default: null },
    cancelledAt: { type: Date, default: null },
    // Provayderdan kelgan xom payload — audit/debug uchun
    rawEvents: { type: [mongoose.Schema.Types.Mixed], default: [] },
  },
  { timestamps: true },
);

/* ── PAYMENT STATS — bitta "singleton" hujjat (key: "global").
   To'lovlar ro'yxati (admin panel) faqat oxirgi 30 tasini saqlaydi
   (eskilari o'chiriladi, ro'yxat yig'ilib ketmasligi uchun), lekin
   jami tushum/soni statistikasi shu alohida hujjatda YASHAYDI — Payment
   yozuvi o'chirilsa ham bu son o'zgarmaydi (routes/payment.js "paid"
   holatiga o'tgan sari $inc qiladi). */
const PaymentStatsSchema = new mongoose.Schema(
  {
    key: { type: String, default: "global", unique: true },
    totalRevenueUzs: { type: Number, default: 0 },
    paidCount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

/* ── BANNED EMAIL — moderatsiya qoidabuzarligi sabab bloklangan
   foydalanuvchining email manzili doimiy ro'yxatda saqlanadi. Hisob
   o'chirilsa ham (yoki isBlocked boshqa sabab bilan o'zgarsa ham) shu
   email bilan qayta ro'yxatdan o'tish HAR DOIM rad etiladi — admin
   buni faqat qo'lda (bu yozuvni o'chirib) bekor qila oladi. */
const BannedEmailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    reason: { type: String, default: "moderation" },
    bannedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

/* ── LEGAL CHUNK — RAG uchun qonun moddalari (vektor qidiruv bazasi) ── */
const LegalChunkSchema = new mongoose.Schema(
  {
    lawCode: { type: String, required: true, index: true }, // "MK", "OK", "JK", "FK", "YK", "IHQ"
    lawName: { type: String, required: true },
    lawDocId: { type: String, required: true }, // lex.uz hujjat ID
    articleNumber: { type: String, required: true }, // "1", "109", "61-1" va h.k.
    title: { type: String, default: "" },
    // Modda qaysi BOB/BO'LIMGA tegishli ("VII bob. Shaxsiy huquq va
    // erkinliklar"). Konstitutsiya sahifasi moddalarni shu bo'yicha
    // guruhlaydi. Barcha hujjatlarda to'ldiriladi, lekin bo'sh bo'lishi
    // ham normal (manba sahifasida boblar ajratilmagan bo'lsa).
    // Modda qaysi BO'LIMGA tegishli ("IKKINCHI BOʻLIM. INSON VA...").
    // Konstitutsiya sahifasi uch bosqichli: bo'lim → bob → modda.
    section: { type: String, default: "" },
    chapter: { type: String, default: "" },
    text: { type: String, required: true },

    /* ── RASMIY RUS TARJIMASI ──────────────────────────────────────
       ⚠️ Bu maydonlar AI tarjimasi EMAS. lex.uz har bir kodeksni
       rasmiy rus tilida ham chop etadi (alohida hujjat ID bilan) va
       aynan shu matn saqlanadi.

       NIMA UCHUN: avval rus tili AI orqali tarjima qilinardi. Ikki
       jiddiy muammo bor edi:
         1) ANIQLIK — huquqiy matnni AI tarjima qilsa modda mazmuni
            buzilishi mumkin; huquqiy mahsulot uchun bu yo'l qo'yib
            bo'lmas xato. Rasmiy tarjima esa qonun kuchiga ega.
         2) KVOTA — 28 412 ta matnni bepul AI kvotasi bilan tarjima
            qilish ~14 kun olardi (o'lchangan), shu sabab 20 ta
            kodeksdan faqat 3 tasi tarjima qilingan edi.
       Rasmiy manba ikkala muammoni ham butunlay yo'q qiladi.

       Bo'sh bo'lishi normal: manbada rus varianti bo'lmasa yoki
       modda raqami mos kelmasa, tizim AI tarjimasiga qaytadi. */
    titleRu: { type: String, default: "" },
    textRu: { type: String, default: "" },
    sectionRu: { type: String, default: "" },
    chapterRu: { type: String, default: "" },

    sourceUrl: { type: String, required: true },
    // Matn o'zgarganda qayta embedding qilish kerakligini aniqlash uchun
    contentHash: { type: String, required: true },
    embedding: { type: [Number], required: true },
    embeddingModel: { type: String, default: "mistral-embed" },
    lastCheckedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
LegalChunkSchema.index({ lawCode: 1, articleNumber: 1 }, { unique: true });

/* QOPLOVCHI (covered) INDEKS — kutubxona ro'yxati uchun.

   Muammo: har bir LegalChunk hujjati ~19,6 KB (1024 o'lchamli
   embedding shuncha joy oladi). Kutubxonada kodeks ochilganda faqat
   modda RAQAMI va SARLAVHASI kerak, lekin MongoDB ularni olish uchun
   TO'LIQ hujjatni o'qishga majbur edi — 810 moddali kodeks uchun bu
   ~16 MB disk o'qish demakdir (o'lchangan: 524 ms).

   Bu indeks so'rov uchun kerak bo'lgan UCHALA maydonni ham o'z ichiga
   oladi, shuning uchun MongoDB hujjatlarga UMUMAN murojaat qilmaydi
   (`totalDocsExamined: 0`) — o'lchangan: 1 ms. */
/* `titleRu` ham indeksga KIRITILGAN — aks holda rus tilida ro'yxat
   so'ralganda MongoDB yana to'liq hujjatlarni o'qishga majbur bo'lardi
   (har biri ~19,6 KB) va bu 524 ms sekinlashuvni qaytarib olib kelardi.
   Indeksda bo'lgani uchun so'rov qaysi tilda bo'lishidan qat'i nazar
   hujjatlarga umuman murojaat qilinmaydi. */
LegalChunkSchema.index(
  { lawCode: 1, articleNumber: 1, title: 1, titleRu: 1 },
  { name: "law_list_covered" },
);

/* ── LESSON — admin panelidan qo'shiladigan "Darslar" kontenti ──
   Ro'yxatdan o'tgan barcha foydalanuvchilarga ko'rinadi (frontend
   /lessons sahifasi). videoUrl ixtiyoriy — YouTube havolasi yoki
   to'g'ridan-to'g'ri video fayl manzili bo'lishi mumkin.

   Bo'lim kontenti PDF import tizimi (services/documentImport) orqali
   ham, admin panel qo'lda ham to'ldirilishi mumkin:
   - `html` — tayyor (escaped, xavfsiz) HTML kontent, PDF importidan
     yoki qo'lda kiritilgan matndan hosil bo'ladi; frontend buni
     to'g'ridan-to'g'ri render qiladi.
   - `text` — eski (PDF import tizimi qo'shilishidan oldingi)
     qo'lda kiritilgan darslar uchun orqaga moslik saqlash maqsadida
     qoldirilgan, yangi yozuvlarda ishlatilmaydi.
   - `anchor` — bo'limga to'g'ridan-to'g'ri havola (Table of Contents)
     uchun slug, masalan "1-mehnat-shartnomasi". */
const LessonSectionSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true, trim: true },
    level: { type: Number, default: 2 },
    anchor: { type: String, default: "" },
    html: { type: String, default: "" },
    text: { type: String, default: "" },

    /* ── PEDAGOGIK MAYDONLAR ──────────────────────────────────────
       Avval dars sahifasi "maslahat" va "asosiy fikrlar" bloklarini
       matnni JUMLALARGA BO'LIB yasardi (lessonContent.js →
       splitInsights). Matn qisqa bo'lgani uchun natija matnning
       o'zini takrorlardi — foydalanuvchi uchun foydasiz edi.

       Endi bu qismlar ALOHIDA yoziladi. Bo'sh qoldirilsa sahifa
       ularni ko'rsatmaydi (eski darslar ham buzilmaydi). */

    // Kundalik hayotdan misol — tushunishning asosiy vositasi
    example: { type: String, default: "" },
    // Bo'limdan chiqadigan 2-4 ta asosiy xulosa
    keyPoints: { type: [String], default: [] },
    // Ko'p uchraydigan xato yoki ogohlantirish
    warning: { type: String, default: "" },

    /* ── QONUNGA HAVOLA ──────────────────────────────────────────
       Bo'lim qaysi moddaga asoslanganini ko'rsatadi: [{code, article}].

       ⚠️ MATN BU YERDA SAQLANMAYDI — faqat havola. Modda matni
       so'rov vaqtida `LegalChunk` dan JONLI olinadi (routes/lessons.js).
       Sabab: qonun tahriri o'zgarsa (lex.uz'dan har 24 soatda
       yangilanadi) darsdagi iqtibos ham o'z-o'zidan yangilanadi.
       Agar matn nusxalab qo'yilsa, u eskirib qolar va foydalanuvchini
       chalg'itardi — bu loyihaning asosiy qoidasiga zid. */
    lawRefs: {
      type: [
        {
          _id: false,
          code: { type: String, default: "" },
          article: { type: String, default: "" },
        },
      ],
      default: [],
    },
  },
  { _id: false },
);
const LessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    desc: { type: String, default: "", trim: true },
    /* "Ushbu darsdan keyin siz bilasiz:" ro'yxati. Avval u bo'lim
       SARLAVHALARIDAN yasalardi — ya'ni mundarijani takrorlardi va
       o'quvchiga hech narsa qo'shmasdi. Endi aniq natijalar yoziladi. */
    objectives: { type: [String], default: [] },
    /* Dars oxiridagi amaliy qadamlar — "natijaga chiqish" qismi */
    practicalSteps: { type: [String], default: [] },

    /* ── MODUL (kategoriya) ──────────────────────────────────────
       Darslar soni 25 dan 100+ ga o'sganda YASSI ro'yxat ishlamay
       qoldi: foydalanuvchi 100 ta kartani aylanib o'tib, kerakli
       mavzuni topa olmasdi. Endi har bir dars modulga tegishli va
       sahifa modul bo'yicha guruhlanadi.

       ⚠️ BU YERDA FAQAT ID SAQLANADI ("labor", "family"...), NOM EMAS.
       Sabab: modul nomi UCH joyda kerak (dars sahifasi, filtr, izlash)
       va u ikki tilda bo'lishi shart. Nom bazada saqlansa, u AI
       tarjimasiga tushardi — ya'ni har til uchun kvota sarflanardi va
       "Mehnat huquqi" moduli ruscha rejimda turlicha atalib qolardi.
       Frontend id'ni tarjima kalitiga bog'laydi (`lesson_mod_labor`),
       shuning uchun nom har doim barqaror va bir zumda tarjimalanadi.

       Bo'sh qoldirilsa dars "boshqa" guruhiga tushadi — admin qo'lda
       qo'shgan eski darslar ham ro'yxatda ko'rinishda davom etadi. */
    category: { type: String, default: "", trim: true },

    /* O'quv darajasi — modul ichida tartiblash va foydalanuvchini
       to'g'ri darsdan boshlashga yo'naltirish uchun.

       DIQQAT: sahifadagi "Boshlang'ich / O'rta / Chuqur" nishoni
       bundan EMAS, matn HAJMIDAN hisoblanadi (`difficultyOf`).
       Ikkalasi turli narsa: hajm — o'qish og'irligi, `level` esa
       mavzuning o'quv ketma-ketligidagi o'rni. */
    level: {
      type: String,
      enum: ["basic", "mid", "advanced"],
      default: "basic",
    },

    videoUrl: { type: String, default: "", trim: true },
    sections: { type: [LessonSectionSchema], default: [] },
    // Kontent qayerdan kelgani — audit va kelajakdagi DOCX/PPTX
    // import turlarini farqlash uchun.
    sourceType: {
      type: String,
      enum: ["manual", "pdf", "docx", "pptx"],
      default: "manual",
    },
    importMeta: { type: mongoose.Schema.Types.Mixed, default: null },
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
);

/* ── QUIZ — admin panelidan qo'shiladigan "Testlar" kontenti ── */
const QuizQuestionSchema = new mongoose.Schema(
  {
    q: { type: String, required: true, trim: true },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length >= 2,
        message: "Kamida 2 ta variant kerak",
      },
    },
    correct: { type: Number, required: true, min: 0 },
    explain: { type: String, default: "", trim: true },
  },
  { _id: false },
);
const QuizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    desc: { type: String, default: "", trim: true },
    questions: { type: [QuizQuestionSchema], default: [] },
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
);

/* ══════════════════════════════════════════════════════════════
   LESSON PROGRESS — foydalanuvchining o'quv holati.

   ⚠️ NIMA UCHUN BAZADA: avval progress FAQAT brauzerning
   `localStorage` ida saqlanardi. Bu ikki muammoni keltirib
   chiqarardi: (1) boshqa qurilmada progress yo'qolardi,
   (2) Telegram botda darsni tugatgan foydalanuvchi saytda uni
   "tugallanmagan" holatda ko'rardi. Endi manba — BAZA, brauzer
   xotirasi esa faqat kesh (oflayn va tezkor ochilish uchun).

   `lessons` — Mixed: kalit = Lesson._id (satr), qiymat =
   { read: [bo'lim indekslari], completed, attempts, completedAt,
     practice: { turi: xp } }. Tuzilma web'dagi `lessonProgress.js`
   bilan ATAYLAB bir xil — ikkalasi bir-biriga to'g'ridan-to'g'ri
   mos tushadi va o'girish (mapping) kerak bo'lmaydi. */
const LessonProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    lessons: { type: mongoose.Schema.Types.Mixed, default: {} },
    xp: { type: Number, default: 0, min: 0 },
    // Testlar bo'limida topshirilgan testlar natijasi (tarix)
    quizResults: {
      type: [
        {
          quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
          title: { type: String, default: "" },
          score: { type: Number, default: 0 },
          total: { type: Number, default: 0 },
          source: { type: String, enum: ["web", "telegram"], default: "web" },
          at: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

/* ── SUPPORT MESSAGE ──
   `type` xabar turini ajratadi:
   - "general"        — oddiy texnik yordam murojaati (Aloqa formasi);
   - "password_reset" — foydalanuvchi parolini unutgan va admindan
     tiklashni so'ragan. Bunday xabarda `userId` to'ldiriladi, shunda
     admin panelda bir bosishda parol yangilanib, foydalanuvchi emailiga
     yangi parol yuboriladi (routes/admin.js → /support/:id/reset-password). */
const SupportMessageSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: "" },
    email: { type: String, trim: true, lowercase: true, default: "" },
    message: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: ["general", "password_reset"],
      default: "general",
      index: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    // Parol tiklash so'rovi bajarilgan vaqt (admin parolni yangilagan payt)
    passwordResetAt: { type: Date, default: null },
    status: { type: String, enum: ["pending", "resolved"], default: "pending" },
    read: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ── LAW SOURCE — kuzatiladigan qonun hujjatlari reyestri ────────
   Avval bu ro'yxat `config/laws.js` da QATTIQ yozilgan edi va yangi
   kodeks qo'shish uchun kodni tahrirlab, qayta deploy qilish kerak
   bo'lardi. Endi ro'yxat shu yerda — admin panelidan boshqariladi
   (`routes/adminLaws.js`), `config/laws.js` esa faqat dastlabki
   to'ldirish (seed) uchun qoladi.

   `code` — qisqartma ("MK", "JK"). LegalChunk.lawCode shunga bog'lanadi,
   shuning uchun u UNIQUE va o'zgartirilganda moddalar ham ko'chirilishi
   kerak (adminLaws.js buni hisobga oladi).

   `enabled: false` — hujjat ro'yxatda qoladi, lekin lex.uz'dan qayta
   yuklanmaydi va kutubxonada ko'rinmaydi (moddalari o'chirilmaydi). */
const LawSourceSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    nameRu: { type: String, default: "", trim: true },
    docId: { type: String, default: "", trim: true },
    url: { type: String, required: true, trim: true },
    /* lex.uz'dagi RASMIY RUS varianti (alohida hujjat ID).
       Bo'sh bo'lsa rus tili uchun AI tarjimasi ishlatiladi. */
    urlRu: { type: String, default: "", trim: true },
    enabled: { type: Boolean, default: true },
    /* Kutubxona sahifasida (`/library`) ko'rinadimi.

       `enabled` dan FARQI muhim:
       - `enabled: false` — hujjat umuman ishlatilmaydi (lex.uz'dan
         yangilanmaydi, AI qidiruvida ham qatnashmaydi);
       - `showInLibrary: false` — hujjat TO'LIQ ishlaydi (yangilanadi,
         AI uni qidiradi), lekin kutubxona ro'yxatida ko'rinmaydi.

       Konstitutsiya uchun aynan shu kerak: unga saytda ALOHIDA sahifa
       ajratilgan (/constitution), kutubxona esa faqat KODEKSLAR uchun. */
    showInLibrary: { type: Boolean, default: true },
    order: { type: Number, default: 999 },
    // Oxirgi yuklash natijasi — admin panelida ko'rsatiladi
    lastIngestAt: { type: Date, default: null },
    lastIngestStats: { type: mongoose.Schema.Types.Mixed, default: null },
    lastIngestError: { type: String, default: "" },
    /* Rus matnining oxirgi yuklanishi — ATAYLAB `lastIngestAt` dan
       AYRI maydon.

       Nima uchun bitta maydon YETMAYDI: rus yuklashi o'zbekchadan
       darhol keyin ishlaydi (`server.js`). Agar ikkalasi bir xil
       maydonni ishlatsa, rus bosqichi boshlanganda `lastIngestAt`
       o'zbekcha bosqich tomonidan hozirgina yangilangan bo'lardi —
       "yaqinda tekshirilgan" deb HAR SAFAR o'tkazib yuborilardi va
       rus matni umuman yuklanmay qolardi. */
    lastIngestRuAt: { type: Date, default: null },
  },
  { timestamps: true },
);
LawSourceSchema.index({ order: 1, code: 1 });

/* ── TRANSLATION — tarjima keshi ──────────────────────────────────
   Sayt kontenti (darslar, testlar, qonun moddalari) bazada FAQAT bitta
   tilda saqlanadi — admin uni qaysi tilda kiritgan bo'lsa, o'sha tilda.
   Boshqa tillarga tarjima AI orqali qilinadi va NATIJASI SHU YERDA
   saqlanadi, chunki:

   1) har so'rovda qayta tarjima qilish sekin ham, qimmat ham bo'lardi;
   2) tarjimani har bir modelga (Lesson/Quiz/LegalChunk) alohida maydon
      qilib qo'shish o'rniga yagona kesh ishlatilsa — bir xil matn
      (masalan takrorlanuvchi sarlavha) bir marta tarjima qilinadi va
      hamma joyda qayta ishlatiladi;
   3) kontent tahrirlansa, matn boshqa bo'ladi → boshqa `hash` → eski
      tarjima o'z-o'zidan ishlatilmay qoladi (eskirgan tarjima
      ko'rsatilib qolishi mumkin emas).

   `hash` — manba matnining SHA-1 yig'indisi. `lang` — MAQSAD til. */
const TranslationSchema = new mongoose.Schema(
  {
    hash: { type: String, required: true },
    lang: { type: String, required: true, enum: ["uz", "ru"] },
    text: { type: String, required: true },
  },
  { timestamps: true },
);
TranslationSchema.index({ hash: 1, lang: 1 }, { unique: true });

module.exports = {
  Chat: mongoose.model("Chat", ChatSchema),
  Translation: mongoose.model("Translation", TranslationSchema),
  LawSource: mongoose.model("LawSource", LawSourceSchema),
  User: mongoose.model("User", UserSchema),
  Admin: mongoose.model("Admin", AdminSchema),
  DailyStat: mongoose.model("DailyStat", DailyStatSchema),
  LoginLog: mongoose.model("LoginLog", LoginLogSchema),
  UsageLog: mongoose.model("UsageLog", UsageLogSchema),
  GuestUsageLog: mongoose.model("GuestUsageLog", GuestUsageLogSchema),
  VoiceUsageLog: mongoose.model("VoiceUsageLog", VoiceUsageLogSchema),
  VoiceLog: mongoose.model("VoiceLog", VoiceLogSchema),
  Visitor: mongoose.model("Visitor", VisitorSchema),
  SiteContent: mongoose.model("SiteContent", SiteContentSchema),
  SupportMessage: mongoose.model("SupportMessage", SupportMessageSchema),
  LegalChunk: mongoose.model("LegalChunk", LegalChunkSchema),
  Payment: mongoose.model("Payment", PaymentSchema),
  PaymentStats: mongoose.model("PaymentStats", PaymentStatsSchema),
  BannedEmail: mongoose.model("BannedEmail", BannedEmailSchema),
  Lesson: mongoose.model("Lesson", LessonSchema),
  Quiz: mongoose.model("Quiz", QuizSchema),
  LessonProgress: mongoose.model("LessonProgress", LessonProgressSchema),
  isUserPro,
  getUserTier,
};

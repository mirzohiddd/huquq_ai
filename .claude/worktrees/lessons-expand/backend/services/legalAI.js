"use strict";
/**
 * HUQUQ AI — v3 Single-File Production Pipeline
 * Barcha logika bir faylda — tashqi yangi fayllar kerak emas.
 * Mavjud fayllar: webSearch.js (saqlanadi)
 */

const Groq = require("groq-sdk");
const { GoogleGenAI } = require("@google/genai");
const Anthropic = require("@anthropic-ai/sdk");
const https = require("https");
const { searchWeb, formatSearchContext } = require("./webSearch");
const { retrieveLegalContext } = require("./legalRetrieval");

// responseFormatter mavjud bo'lsa ishlatamiz, bo'lmasa inline
let formatResponse;
try {
  formatResponse = require("./responseFormatter").formatResponse;
} catch {
  formatResponse = (text) => text;
}

// ── AI clients ────────────────────────────────────────────────
const groqClient = process.env.GROQ_API_KEY
  ? new Groq({ apiKey: process.env.GROQ_API_KEY })
  : null;

const geminiClient = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;
// .env dagi GEMINI_MODEL o'zgaruvchisi avval hech qayerda ishlatilmas edi —
// kod "gemini-2.0-flash"ni hardcode qilgan edi, uning bepul kvotasi tugagan
// (limit: 0) — shu sabab rasm tahlili doim Groq'ga fallback qilib, Groq esa
// rasmni UMUMAN ko'rmasdan javob berardi. Endi .env dagi model ishlatiladi.
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

// Claude — faqat Pro obunachilar uchun premium javob sifati.
// Bepul foydalanuvchilar arzon/tekin providerlarda qoladi (Cloudflare/Groq),
// shu orqali Pro to'lovi bilan haqiqiy AI xarajati muvozanatlanadi.
const anthropicClient = process.env.ANTHROPIC_API_KEY
  ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  : null;
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-5";

// Cloudflare Workers AI — bepul, API key shart emas (faqat CF_ACCOUNT_ID + CF_API_TOKEN)
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID || null;
const CF_API_TOKEN = process.env.CF_API_TOKEN || null;
// Cloudflare da eng kuchli bepul model
const CF_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";

// ═══════════════════════════════════════════════════════════════
// 1. TIL ANIQLASH
// ═══════════════════════════════════════════════════════════════
/* ⚠️ INGLIZ TILI OLIB TASHLANDI (foydalanuvchi so'rovi, 2026-08-07).
   Avval bu funksiya "en" ham qaytarardi va AI inglizcha savolga
   INGLIZCHA javob berardi. Endi saytda faqat o'zbek va rus tillari
   bor, shuning uchun javob ham faqat shu ikki tilda bo'ladi:
   kirill yozuvi ko'p bo'lsa — ruscha, aks holda o'zbekcha.
   Foydalanuvchi ingliz tilida yozsa savoli tushuniladi, lekin javob
   o'zbek tilida qaytadi. */
function detectLanguage(text = "") {
  const cyrillicCount = (text.match(/[а-яА-ЯёЁ]/gu) || []).length;
  return cyrillicCount > 3 ? "ru" : "uz";
}

// ═══════════════════════════════════════════════════════════════
// 2. HUQUQIY SAVOL TEKSHIRUVI
// ═══════════════════════════════════════════════════════════════

/**
 * O'zbek matnini kalit so'z bilan solishtirishga tayyorlaydi.
 *
 * MUAMMO: foydalanuvchilar apostrofni turlicha yozadi — bo'shatish (to'g'ri
 * tirnoq), boʻshatish (ʻ), bo'shatish (typografik), bo`shatish. Kodedagi
 * kalit so'zlar esa faqat bitta variantda yozilgan, shu sabab
 * `text.includes("ishdan bo'shatish")` ko'p hollarda ISHLAMASDI va savol
 * "kategoriyasiz" qolib ketardi (natijada RAG kerakli kodeksdan qidirmasdi).
 * Xuddi shu muammo Qonunlar kutubxonasi qidiruvida ham bo'lgan va o'sha
 * yerda allaqachon shu tarzda hal qilingan.
 */
function normalizeUz(text = "") {
  return String(text)
    .toLowerCase()
    .replace(/[‘’ʻʼ`´]/g, "'");
}

const NON_LEGAL_PATTERNS = [
  /^(salom|assalomu alaykum|привет|hello|hi|hey)\s*[!.,]?\s*$/i,
  /^(qalaysan|qandaysan|как дела|how are you)\s*[?!.]?\s*$/i,
  /^(dori|kasallik|врач|лечение|болезнь|рецепт|cooking|dasturlash|coding|python)\b/i,
  // Faqat minnatdorchilik/xayrlashuv (savolsiz) — suhbat ichida ham
  // iliq javob olsin, AI'ga keraksiz so'rov ketmasin.
  // "rahmat, endi ariza qanday yoziladi?" — bu naqshga TUSHMAYDI (savol bor).
  /^(rahmat|raxmat|tashakkur|spasibo|спасибо|thanks|thank you|xayr|bye|до свидания)\b[\s,.!]*(tushundim|tushunarli|ok(ay)?|zo'r|yaxshi|понятно|got it)?[\s.!]*$/i,
  // O'zi haqida savol — alohida, mazmunli javob beriladi (offTopicReply)
  /^(sen|siz|o'zing)\s*kim|^kimsan|^nima qila ol|^who are you|^what can you do|^кто ты|^что ты умеешь/i,
];

const LEGAL_SIGNALS = [
  /huquq|qonun|sud|ariza|shikoyat|jinoyat|mehnat|ish\s*haqi|maosh/i,
  /nikoh|ajralish|aliment|meros|vasiyat|yer|mulk|ijara|kadastr/i,
  /politsiya|prokuratura|advokat|jazo|jarima|hibsga|qamoq/i,
  /shartnoma|qarz|kredit|bank|soliq|biznes|kompaniya|tadbirkor/i,
  // Zo'ravonlik — barcha zamonda: urib, uryapti, urdi, urmoqchi, urdi
  /ur(ib|di|apti|yapti|yapdi|moqchi|gan|adi)|kaltakla|zo.rla|tahdid|ura(n|di)/i,
  /aldab|o.g.irla\w*|firib|qo.rqit/i,
  /erim|xotinim|rafiqam|turmush|oilada|oilaviy/i,
  /устав|договор|суд|закон|право|преступление|штраф|иск|арест|бьёт|избивает/i,
  /law|court|legal|crime|contract|police|lawsuit|rights|attorney|hitting|beating/i,
  // BUG FIX: inglizcha ro'yxat juda tor edi — "I was fired without reason"
  // kabi eng oddiy savol ham "huquqiy emas" deb rad etilardi.
  /fired|dismissed|laid\s*off|salary|wage|unpaid|overtime|employer|employee/i,
  /divorce|custody|alimony|marriage|inherit|will|estate|notary/i,
  /landlord|tenant|rent|eviction|property|land|deed/i,
  /refund|warranty|defective|consumer|scam|fraud|debt|loan|tax/i,
  /sue|claim|complaint|deadline|appeal|prosecutor|arrest|fine|penalty/i,
  // Yordam so'rash — huquqiy kontekstda
  /yordam\s*ber|nima\s*qilay|qayerga\s*(bor|murojaat)|nima\s*qilish/i,
  // Modda/kodeks/hujjat atamalari — foydalanuvchi qonun matniga
  // to'g'ridan-to'g'ri ishora qilganda (masalan "35 modda nima haqida")
  /\bmodda|kodeks\w*|\bband\b|qonunchilik|normativ|huquqiy\s*hujjat/i,
  // Notarial/bitim — ko'chmas mulk, meros va boshqa rasmiylashtirish
  /notarial|notarius|bitim|ro.yxatdan\s*o.t|reyestr|guvohnoma/i,
  // Iste'molchi huquqi — xarid, buyurtma, mahsulot bilan bog'liq nizolar
  /mahsulot|buyurtma|xarid|iste.molchi|do.kon|pulni?\s*qaytar|garantiya/i,
  // BUG FIX: quyidagi juda keng tarqalgan savollar avval "huquqiy emas"
  // deb rad etilardi, chunki ro'yxatda faqat bitta so'z shakli bor edi:
  //  - "Ajrashganda bolam kim bilan qoladi?" → "ajralish" bor edi,
  //    "ajrash..." yo'q edi (ajrashmoq — eng ko'p ishlatiladigan shakl);
  //  - "Ishdan asossiz bo'shatishdi" → "ishdan bo'shatish" butun ibora
  //    sifatida qidirilardi, orasiga bitta so'z tushsa topilmasdi.
  // Endi o'zak (stem) bo'yicha qidiriladi.
  /ajra(sh|l)\w*|farzand|bola\w*\s+(kim|qay)|nafaqa|to.y\s*qil/i,
  /(ishdan|ishimdan)\s+\w*\s*(bo.shat|hayda|chiqar)|bo.shat(ish|di|ildi|ishdi)/i,
  /shartnoma\w*|kelishuv|hujjat\w*\s*(kerak|qanday|rasmiylashtir)/i,
  /da.vo|muddat\w*\s*(ichida|qancha)|apellyatsiya|kassatsiya/i,
  /pensiya|dekret|homilador|bolalik\s*ta.til|kasallik\s*varaqa/i,
  /jarima|to.lov|kompensatsiya|zarar\w*\s*(qopla|undir)/i,
];

/**
 * @param {string} text        joriy xabar
 * @param {boolean} inDialog   suhbat allaqachon boshlanganmi (tarix bor)
 *
 * BUG FIX: avval bu funksiya faqat joriy xabarga qarardi. Natijada tabiiy
 * davom savollari — "Buning uchun menga qanday hujjatlar kerak?", "Qancha
 * turadi?", "Muddati qancha?" — o'z ichida hech qanday huquqiy so'z
 * bo'lmagani uchun "huquqiy emas" deb rad etilardi va foydalanuvchi
 * suhbat o'rtasida "Men faqat huquqiy savollarga javob beraman" degan
 * xabarni olardi. Endi suhbat boshlangan bo'lsa, savol huquqiy deb
 * hisoblanadi — faqat ANIQ boshqa mavzu (dori, dasturlash, ovqat)
 * bo'lsagina rad etiladi.
 */
function isLegalQuestion(text, inDialog = false) {
  const low = normalizeUz(text).trim();

  if (inDialog) {
    for (const p of NON_LEGAL_PATTERNS) {
      // Salomlashish suhbat ichida ham iliq javob olsin
      if (p.test(low)) return false;
    }
    return true;
  }

  // Agar zo'ravonlik, tahdid, yordam so'zlari bo'lsa — doim huquqiy
  const ALWAYS_LEGAL = [
    /ur(apti|yapti|yapdi|di|ib|moqchi|ohchi|adi|a[mn]|gan)|kaltakla|zo.rla/i,
    /tahdid|so.k(di|moqchi|yapti)|haqorat|qo.rqit/i,
    /erim|xotinim|rafiqam|oilada/i,
    /nima\s*qilay|qayerga\s*(bor|murojaat)|nima\s*qilish/i,
    /pul\s*(bermay|olmay)|ishdan\s*(hayd|bo.shat)/i,
    /бьёт|избивает|угрожает|помогите|муж|жена/i,
    /hitting|beating|threatening|help me/i,
  ];
  for (const p of ALWAYS_LEGAL) if (p.test(low)) return true;

  // Aniq huquqiy emas pattern
  for (const p of NON_LEGAL_PATTERNS) if (p.test(low)) return false;

  // Huquqiy signal
  for (const p of LEGAL_SIGNALS) if (p.test(low)) return true;

  // MUHIM: aniq huquqiy signal topilmasa — "ehtimol huquqiy" deb taxmin
  // qilib yubormaymiz. Avval uzun (5+ so'zli) xabarlar signal topilmasa
  // ham "huquqiy" deb qabul qilinardi — natijada masalan "menga dastur
  // yozib ber python'da" kabi umuman aloqasiz so'rovlar ham "huquqiy
  // savol" sifatida AI'ga yuborilib, u hatto soxta/o'ylab topilgan
  // ma'lumot (masalan mavjud bo'lmagan davlat idorasi telefon raqami)
  // bilan javob berardi. Xavfsiz tomonga xato qilish — signal yo'q bo'lsa
  // har doim off-topic hisoblanadi. Qo'shimcha tekshiruv: kategoriya
  // kalit so'zlari (detectCategoryKeyword) LEGAL_SIGNALS'dan ko'ra
  // kengroq — masalan "kvartira", "tovar" kabi so'zlarni ham qamraydi.
  if (detectCategoryKeyword(low) !== "unknown") return true;

  return false;
}

const OTHER_COUNTRY =
  /\b(rossiya qonun|russia law|ukraine law|казахстан закон|турция закон|american law|european law|turkish law)\b/i;

function offTopicReply(lang, text) {
  if (OTHER_COUNTRY.test(text.toLowerCase())) {
    return {
      uz: "Men faqat O'zbekiston qonunchiligi bo'yicha yordam bera olaman. Boshqa davlatlar qonunlari bo'yicha ma'lumot bera olmayman.",
      ru: "Я помогаю только по законодательству Узбекистана. По законам других стран не консультирую.",
    }[lang];
  }
  // Greetings — iliq, qisqa
  const isGreeting = /^(salom|assalom|привет|hello|hi|hey)\b/i.test(
    text.toLowerCase(),
  );
  if (isGreeting) {
    const name = text.match(/ismim\s+([A-Za-zo'ʻА-Яа-я]+)/i)?.[1] || "";
    // Agar greeting + huquqiy savol birga bo'lsa (masalan: "salom meni erim uryapti")
    // bu holat isLegalQuestion da ALWAYS_LEGAL pattern bilan ushlangan bo'ladi
    // Shu yerga kelsa — faqat greeting, savol yo'q
    return {
      uz: name
        ? `Salom, ${name}! Men O'zbekiston huquqi bo'yicha AI yordamchiman. Savolingiz bo'lsa — bemalol yozing.`
        : `Salom! Men O'zbekiston huquqi bo'yicha AI yordamchiman. Huquqiy savolingiz bo'lsa — yozing.`,
      ru: name
        ? `Привет, ${name}! Я AI-помощник по законодательству Узбекистана. Задайте ваш правовой вопрос.`
        : `Привет! Я AI-помощник по законодательству Узбекистана. Задайте вопрос.`,
    }[lang];
  }
  const low = normalizeUz(text).trim();

  // "Sen kimsan?" / "nima qila olasan?" — quruq rad javob o'rniga
  // o'zini tanishtirish va imkoniyatlarini aytish. Avval bunday savolga
  // ham "faqat huquqiy savollarga javob beraman" deb javob qaytarardi,
  // bu esa foydalanuvchida "bu bot hech narsa tushunmaydi" taassurotini
  // qoldirardi.
  if (
    /^(sen|siz)\s*kim|kimsan|o'zing kimsan|nima qila ol|nimalarni bilasan|who are you|what can you do|кто ты|что ты умеешь/.test(
      low,
    )
  ) {
    return {
      uz: "Men — Huquq AI, O'zbekiston qonunchiligi bo'yicha yordamchi. Mehnat, oila, meros, uy-joy, iste'molchi huquqlari va jinoyat masalalarida yordam bera olaman: huquqlaringizni tushuntiraman, qaysi qonun moddasi tegishli ekanini ko'rsataman, qayerga murojaat qilishni aytaman va ariza/shikoyat matnini tayyorlab beraman. Savolingizni oddiy so'zlar bilan yozavering.",
      ru: "Я — Huquq AI, помощник по законодательству Узбекистана. Помогу с трудовыми, семейными, наследственными, жилищными, потребительскими и уголовными вопросами: объясню ваши права, укажу нужную статью закона, подскажу, куда обращаться, и подготовлю текст заявления или жалобы. Просто опишите свою ситуацию.",
    }[lang];
  }

  // Minnatdorchilik / xayrlashuv — iliq javob
  if (
    /^(rahmat|raxmat|tashakkur|spasibo|спасибо|thanks|thank you|xayr|до свидания|bye)\b/.test(
      low,
    )
  ) {
    return {
      uz: "Arzimaydi! Yana savolingiz bo'lsa — bemalol yozing, yordam beraman.",
      ru: "Пожалуйста! Если появятся вопросы — обращайтесь, помогу.",
    }[lang];
  }

  return {
    uz: "Men faqat O'zbekiston huquqiy savollari bo'yicha yordam bera olaman. Huquqiy savolingiz bo'lsa — yozing.",
    ru: "Я отвечаю только на правовые вопросы по законодательству Узбекистана.",
  }[lang];
}

// ═══════════════════════════════════════════════════════════════
// 3. COLLOQUIAL UZBEK PARSER
// ═══════════════════════════════════════════════════════════════
const COLLOQUIAL_MAP = [
  // Shikoyat / murojaat
  { p: /ustidan\s+(yoz|shikoyat|ariza)/i, h: "shikoyat berish" },
  { p: /ariza\s+(ber|qil|yoz)/i, h: "ariza berish" },
  { p: /qayerga\s+(yoz|bor|murojaat)/i, h: "qayerga murojaat" },
  { p: /nima\s+qil/i, h: "keyingi qadam" },

  // Tahdid / zo'ravonlik — "urmohchi" = urmoqchi = tahdid
  {
    p: /ur(moqchi|ishini|ishga|gisi|aman|adi|adigan)/i,
    h: "tahdid — urmoqchi",
  },
  { p: /o[''']ldirmoqchi|o[''']ldiradi/i, h: "o'ldirish tahdidi" },
  { p: /so[''']k(di|moqchi|yapti|a(n|di))/i, h: "haqorat — so'kish" },
  { p: /haqorat\s*(qil|et)/i, h: "haqorat" },
  { p: /tahdid\s*(qil|sol|qilmoqchi)/i, h: "tahdid" },
  { p: /qo[''']rqit(moqchi|yapti|di)/i, h: "tahdid — qo'rqitish" },

  // Jismoniy zo'ravonlik (o'tgan zamonda)
  { p: /ur(ib|di|ishdi|gan)(?!moqchi)/i, h: "jismoniy tajovuz" },
  { p: /kalt(aklash|akladi|aklayapti)/i, h: "kaltaklash" },
  { p: /musht\s*(urdi|soldi|tushirdi)/i, h: "jismoniy tajovuz" },

  // Moliyaviy
  { p: /pul(im)?\s*(ni)?\s*(ber|qaytarma|olmay)/i, h: "pul nizosi" },
  { p: /aldab\s+(ket|ol)/i, h: "firibgarlik" },
  { p: /maosh(im)?\s*(ber|olmay|to.lamay)/i, h: "ish haqi to'lanmagan" },

  // Mehnat
  { p: /ish(dan)?\s+(hayd|bo.shat|quvib)/i, h: "noqonuniy ishdan bo'shatish" },

  // Oila
  { p: /ajrash(moqchi|aman)/i, h: "ajralish" },

  // Iste'molchi
  { p: /tovar(ni)?\s+(qaytarish|almashtirish)/i, h: "tovar qaytarish" },
];

function parseIntent(text) {
  const hints = COLLOQUIAL_MAP.filter((e) => e.p.test(text)).map((e) => e.h);
  const words = text.trim().split(/\s+/).length;
  const complexity =
    words <= 12 ? "simple" : words <= 50 ? "medium" : "complex";
  const victim = /\b(meni|menga|men)\b/i.test(text) ? "user" : "unspecified";
  return { hints, complexity, victim };
}

function responseFormat(complexity) {
  if (complexity === "simple") return "plain";
  if (complexity === "medium") return "brief";
  return "structured";
}

// ═══════════════════════════════════════════════════════════════
// 4. INTENT DETECTION
// ═══════════════════════════════════════════════════════════════
const KEYWORD_CATS = [
  {
    id: "criminal",
    kw: [
      "urib",
      "urdi",
      "urishdi",
      "urmohchi",
      "urmoqchi",
      "kaltakladi",
      "zo'rladi",
      "tahdid",
      "o'ldirmoqchi",
      "so'kdi",
      "haqorat",
      "qo'rqitdi",
      "o'g'irlik",
      "firib",
      "aldadi",
      "jinoyat",
      "politsiya",
      "prokuratura",
      "hibsga",
      "qamoq",
      "pora",
      "преступление",
      "убийство",
      "угроза",
      "оскорбление",
      "арест",
      "мошенничество",
      "crime",
      "assault",
      "threat",
      "theft",
      "fraud",
      "police",
      "insult",
    ],
  },
  {
    id: "labor",
    kw: [
      "ish haqi",
      "maosh",
      "mehnat",
      "ishdan bo'shatish",
      "haydadi",
      "ta'til",
      "xodim",
      "зарплата",
      "работа",
      "уволить",
    ],
  },
  {
    id: "family",
    kw: [
      "ajralish",
      "nikoh",
      "aliment",
      "turmush",
      "zags",
      "развод",
      "алименты",
      "семья",
    ],
  },
  {
    id: "inheritance",
    kw: ["meros", "vasiyat", "notarius", "vafot", "наследство", "завещание"],
  },
  {
    id: "real_estate",
    kw: [
      "yer",
      "kadastr",
      "hovli",
      "uchastka",
      "kvartira",
      "ijara",
      "mulk",
      "земля",
      "участок",
      "аренда",
    ],
  },
  {
    id: "consumer",
    kw: ["tovar", "qaytarish", "kafolat", "sifatsiz", "товар", "возврат"],
  },
  {
    id: "business",
    kw: ["biznes", "tadbirkor", "mchj", "ooo", "kompaniya", "компания", "ООО"],
  },
  { id: "tax", kw: ["soliq", "nds", "налог", "ндс"] },
];

function detectCategory(text) {
  // LLM chaqiruv o'rniga keyword — tezkor
  return detectCategoryKeyword(text);
}

function detectCategoryKeyword(text) {
  // Apostrof variantlari normallashtiriladi — aks holda "boʻshatish"
  // yozgan foydalanuvchining savoli kategoriyasiz qolardi.
  const low = normalizeUz(text);
  for (const cat of KEYWORD_CATS) {
    if (cat.kw.some((k) => low.includes(normalizeUz(k)))) return cat.id;
  }
  // Kalit so'z topilmasa — o'zak (stem) bo'yicha ikkinchi urinish.
  // Masalan "ishdan asossiz bo'shatishdi" ibora sifatida topilmaydi,
  // lekin "bo'shat" o'zagi bilan topiladi.
  for (const { id, re } of CATEGORY_STEMS) {
    if (re.test(low)) return id;
  }
  return "unknown";
}

// So'z o'zaklari — KEYWORD_CATS dagi to'liq iboralar topilmaganda
// ishlatiladi (o'zbek tilida qo'shimchalar juda ko'p o'zgaradi).
const CATEGORY_STEMS = [
  { id: "labor", re: /(ishdan|ishimdan)\s+\w*\s*(bo'shat|hayda|chiqar)|bo'shat(ib|di|il|ish)|ish\s*joyi|ish\s*beruvchi|mehnat\s*shartnoma|ta'til|maosh|oylik/ },
  { id: "family", re: /ajra(sh|l)\w*|nikoh|aliment|farzand|xotin|er-xotin|zags/ },
  { id: "inheritance", re: /meros|vasiyat|vafot\s*et|merosxo'r/ },
  { id: "real_estate", re: /uy-joy|ko'chmas\s*mulk|kadastr|ijara|hovli|kvartira/ },
  { id: "criminal", re: /jinoy\w*|sudlan\w*|jazo\s*(tayin|ber)|qamoq/ },
  { id: "consumer", re: /sifatsiz|qaytarib\s*ber|kafolat|iste'molchi/ },
  // Rus tilidagi o'zaklar — avval faqat to'liq so'zlar ("уволить") bor edi,
  // shu sabab "меня уволили" kabi eng oddiy savol ham kategoriyasiz qolib,
  // RAG kerakli kodeksdan qidirmasdi.
  { id: "labor", re: /увол|зарплат|трудов|отпуск|работодател|сократил/ },
  { id: "family", re: /развод|алимент|брак|ребёнк|ребенк|супруг|расторжени/ },
  { id: "inheritance", re: /наслед|завещан|нотариус|умер/ },
  { id: "real_estate", re: /недвижим|квартир|аренд|земельн|кадастр/ },
  { id: "criminal", re: /уголовн|преступл|суди(м|ли)|задержа|избил/ },
  { id: "consumer", re: /некачествен|верн(уть|ули)\s*деньги|гарантий|потребител/ },
  // Inglizcha o'zaklar — RAG kerakli kodeksdan qidirishi uchun
  { id: "labor", re: /fired|dismissal|dismissed|laid\s*off|salary|wage|employer|employment/ },
  { id: "family", re: /divorce|custody|alimony|marriage|child\s*support/ },
  { id: "inheritance", re: /inherit|will|estate|heir/ },
  { id: "real_estate", re: /landlord|tenant|rent|eviction|land\s*plot|property/ },
  { id: "criminal", re: /criminal|arrest|assault|theft|prosecut/ },
  { id: "consumer", re: /refund|warranty|defective|consumer\s*right/ },
];

const UZ_CAT = {
  criminal: "jinoiy",
  civil: "fuqarolik",
  labor: "mehnat",
  family: "oila",
  inheritance: "meros",
  real_estate: "uy_joy",
  consumer: "istemolchi",
  administrative: "ma_muriy",
  tax: "soliq",
  business: "tadbirkorlik",
  immigration: "immigratsiya",
  unknown: "boshqa",
};

// Kategoriya → RAG'da qidiriladigan kodeks (config/laws.js'dagi `code`).
// MUHIM: xato bo'lgan (masalan Oila kodeksi 107-moddasi Mehnat kodeksi
// 107-moddasi bilan chalkashtirilgan) holatlar sabab qo'shildi — bir xil
// modda raqami har bir kodeksda mavjud va butunlay boshqa mavzuga tegishli
// bo'lgani uchun, savol mavzusi aniq bo'lsa qidiruv shu kodeksga
// cheklanadi (legalRetrieval.js). Faqat config/laws.js'da KUZATILADIGAN
// kodekslar bilan 1:1 mos keladigan kategoriyalar ro'yxatga kiritilgan —
// qolganlari (meros, ma'muriy, soliq, tadbirkorlik, immigratsiya, boshqa)
// hech qanday tracked kodeksga aniq mos kelmaydi, shuning uchun ular
// uchun filtr qo'llanilmaydi (avvalgidek barcha kodekslar qidiriladi).
const CATEGORY_TO_LAWCODE = {
  labor: "MK",
  family: "OK",
  criminal: "JK",
  // Fuqarolik huquqi IKKI qismdan iborat: 1-qism umumiy qoidalar
  // (shaxslar, bitimlar, mulk), 2-qism esa ALOHIDA shartnoma turlari
  // (oldi-sotdi, ijara, pudrat, meros). Ko'p savol aynan 2-qismga
  // tegishli, shuning uchun qidiruv ikkalasini ham qamraydi.
  civil: ["FK", "FK2"],
  real_estate: ["YK", "UJK", "SHK"],
  consumer: "IHQ",
  // Yangi kodekslar qo'shilgach ochilgan kategoriyalar (avval bular
  // uchun filtr yo'q edi va qidiruv butun baza bo'ylab ketardi)
  tax: "SK",
  administrative: ["MJK", "MSK"],
  inheritance: "FK2",
};

// ═══════════════════════════════════════════════════════════════
// 5. XAVFSIZLIK TEKSHIRUVI
// ═══════════════════════════════════════════════════════════════
const DANGER_PATTERNS = [
  /qanday\s+(o['']ldirish|o.g.irlash|zo.rlash|qochish|yashirinish)/i,
  /qanday\s+(pora\s+berish|firib\s+berish|dalillarni\s+yo.qotish)/i,
  /izlarni\s+(yo.q\s+qilish|o.chirish)/i,
  /javobgarlikdan\s+(qochish|qutilish)/i,
  /guvohlarni\s+(tahdid|qo.rqitish)/i,
  /как\s+(убить|украсть|скрыться|избежать\s+наказания|подкупить)/i,
  /how\s+to\s+(kill|murder|steal|escape\s+police|bribe|destroy\s+evidence)/i,
  /evade\s+(taxes|police|justice)/i,
];

const CRIME_PATTERNS = [
  /o['']ldirish|o['']ldirdi|qotillik/i,
  /zo.rlash|zo.rladi|jinsiy\s+zo.ravonlik/i,
  /murder|rape|terrorism/i,
  /убийство|изнасилование|терроризм/i,
];

function checkSafety(text) {
  for (const p of DANGER_PATTERNS) {
    if (p.test(text)) return { status: "blocked" };
  }
  for (const p of CRIME_PATTERNS) {
    if (p.test(text)) return { status: "redirected" };
  }
  return { status: "safe" };
}

function blockedReply(lang) {
  return (
    {
      uz: "⚠️ Bu so'rov qayta ishlanmaydi. Men noqonuniy harakatlar qilish bo'yicha ko'rsatmalar bera olmayman. Qonuniy huquqlaringiz yoki keyingi qadamlar haqida so'rasangiz — yordam beraman.",
      ru: "⚠️ Данный запрос не может быть обработан. Я не могу предоставлять инструкции по незаконным действиям. Спросите о ваших правах или законных шагах — помогу.",
    }[lang] || "⚠️ Bu so'rov qayta ishlanmaydi."
  );
}

// ═══════════════════════════════════════════════════════════════
// 6. JAVOB VALIDATORI
// ═══════════════════════════════════════════════════════════════
const LAW_LIMITS = {
  MK: 490,
  OK: 175,
  JK: 300,
  JPK: 540,
  FK: 1300,
  YK: 100,
  SK: 400,
};

function validateAnswer(text, userMessage = "") {
  if (!text) return "";

  // Takroriy jumlalar — qat'iy filter.
  //
  // BUG FIX: avval butun matn jumlalarga bo'linib, natija BO'SH JOY bilan
  // qayta birlashtirilardi (`unique.join(" ")`). Bo'linish naqshi
  // `(?<=[.!?])\s+` yangi qator belgisini ham qamragani uchun, nuqta bilan
  // tugagan har bir ro'yxat bandidan keyingi qator uzilishi bo'sh joyga
  // aylanardi. Natijada AI chiroyli tuzilgan javob bersa ham,
  // foydalanuvchi uni bir uyum matn ko'rinishida ko'rardi:
  //   "1. Buyruqni o'qing. 2. Kompensatsiyani tekshiring. Huquqlaringiz: ..."
  // Endi matn avval qator ajratgichlari bo'yicha bo'linadi (ajratgichlar
  // SAQLANADI), takrorlar esa har bir bo'lak ichida olib tashlanadi —
  // shunday qilib ro'yxatlar, sarlavhalar va paragraflar joyida qoladi.
  const seen = new Set();
  const dedupeSentences = (chunk) => {
    const sentences = chunk
      .split(/(?<=[.!?])[ \t]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    return sentences
      .filter((s) => {
        // Juda qisqa bo'laklar (masalan "1.", "-") takror deb hisoblanmaydi
        if (s.length < 25) return true;
        const k = s.toLowerCase().replace(/\s+/g, " ").slice(0, 80);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .join(" ");
  };

  let result = text
    .split(/(\n+)/) // ajratgichlar massivda saqlanadi
    .map((part) => (/^\n+$/.test(part) ? part : dedupeSentences(part)))
    .join("");

  // Takroriy paragraflar
  const paras = result.split(/\n{2,}/);
  const seenP = new Set();
  result = paras
    .filter((p) => {
      const k = p.trim().toLowerCase().slice(0, 60);
      if (!k || seenP.has(k)) return false;
      seenP.add(k);
      return true;
    })
    .join("\n\n");

  // Shubhali modda raqamlari
  result = result.replace(/\b([A-Z]{2,3})\s+(\d+)-modda\b/g, (m, code, num) => {
    const limit = LAW_LIMITS[code];
    return limit && parseInt(num) > limit ? "[modda raqami tasdiqlanmagan]" : m;
  });

  // Foydalanuvchi aytmagan bola/voyaga yetmagan
  const userLow = userMessage.toLowerCase();
  if (!/\b(bola|farzand|o.g.il|qiz|voyaga yetmagan)\b/i.test(userLow)) {
    result = result.replace(
      /\b(minor|child victim|underage|voyaga yetmagan shaxs)\b/gi,
      "",
    );
  }

  // Inglizcha sarlavhalar — o'zbek javobida
  if (!/[a-zA-Z]{5,}/.test(userLow.slice(0, 50))) {
    result = result.replace(
      /\b(Legal Analysis|Situation|What to do|Conclusion|Steps)\s*:/g,
      "",
    );
  }

  // lex.uz, URL tilga olinmasligi
  result = result.replace(/lex\.uz(ga|dan|da)?/gi, "qonunchilikka ko'ra");
  result = result.replace(/https?:\/\/[^\s]+/g, "");

  // System prompt leak tozalash
  result = result.replace(/SEN NIMA QILMAYSAN[\s\S]*?(\n\n|$)/g, "");

  result = result.replace(/TASHQI MANBA[\s\S]*?---[\s\S]*?---/g, "");
  result = result.replace(/\[Tasdiqlangan manba\]/g, "");
  result = result.replace(/rasmiy qonunchilik bazasi/gi, "qonunchilikka ko'ra");

  // Shablonli kirish gaplarni tozalash
  result = result.replace(/^Sizning holatingizda[,.]?\s*/i, "");
  result = result.replace(
    /^O'zbekiston Respublikasining\s+\w+\s+Kodeksiga ko'ra[,.]?\s*/i,
    "",
  );

  return result.trim();
}

// ═══════════════════════════════════════════════════════════════
// 7. MODEL TANLASH
// ═══════════════════════════════════════════════════════════════
const COMPLEX_CATS = new Set(["criminal", "inheritance", "business", "tax"]);
const COMPLEX_KW = [
  "sud",
  "jinoyat",
  "qamoq",
  "shartnoma",
  "meros",
  "soliq",
  "ajralish",
  "qarz",
  "da'vo",
  "суд",
  "тюрьма",
  "договор",
  "court",
  "prison",
  "murder",
  "contract",
];

function selectModel(text, category, hasImage, isPro) {
  // Pro obunachilar — eng sifatli javob uchun to'g'ridan-to'g'ri Claude'ga
  // yo'naltiriladi (rasm bo'lsa ham, Claude vision qo'llab-quvvatlaydi).
  if (isPro && anthropicClient) {
    return { model: CLAUDE_MODEL, provider: "claude" };
  }

  if (hasImage) return { model: GEMINI_MODEL, provider: "gemini" };

  const isComplex =
    text.length > 400 ||
    COMPLEX_CATS.has(category) ||
    COMPLEX_KW.some((k) => text.toLowerCase().includes(k));

  // Cloudflare mavjud bo'lsa — primary provider sifatida ishlatamiz (100% bepul)
  if (CF_ACCOUNT_ID && CF_API_TOKEN) {
    return { model: CF_MODEL, provider: "cloudflare" };
  }

  // Groq fallback
  if (isComplex) return { model: "llama-3.3-70b-versatile", provider: "groq" };
  return { model: "llama-3.1-8b-instant", provider: "groq" };
}

// ═══════════════════════════════════════════════════════════════
// 8. CONVERSATION MEMORY
// ═══════════════════════════════════════════════════════════════
function buildHistory(history) {
  // Oldin bu yerda joriy xabar bilan so'zma-so'z mos kelmagan eski xabarlar
  // filtrlanib tashlanardi — natijada tabiiy davom savollarida ("menga qanday
  // hujjatlar kerak?" kabi, oldingi xabar bilan umumiy so'zi yo'q) AI butun
  // avvalgi kontekstni yo'qotardi. Endi oxirgi 6 ta xabar SO'ZSIZ saqlanadi —
  // narx deyarli o'zgarmaydi (allaqachon 600 belgi/xabar bilan cheklangan),
  // lekin ketma-ket savollarda kontekst ishonchli saqlanadi.
  return history.slice(-6).map((m) => ({
    role: m.role,
    content: String(m.content || "").slice(0, 600),
  }));
}

// ═══════════════════════════════════════════════════════════════
// 9. HUJJAT GENERATSIYASI
// ═══════════════════════════════════════════════════════════════
const DOC_TYPES = {
  ariza: "ariza",
  shikoyat: "shikoyat",
  shartnoma: "shartnoma",
  daavo: "da'vo arizasi",
};

function detectDocType(text) {
  if (/da['']vo|иск/i.test(text)) return DOC_TYPES.daavo;
  if (/shikoyat|жалоба/i.test(text)) return DOC_TYPES.shikoyat;
  if (/shartnoma|договор/i.test(text)) return DOC_TYPES.shartnoma;
  return DOC_TYPES.ariza;
}

function docSystemPrompt(docType) {
  return `Siz O'zbekiston huquqi bo'yicha professional huquqiy hujjat yozuvchisiz.

QOIDALAR:
1. Noma'lum ma'lumotlar uchun PLACEHOLDER ishlat: [ISM FAMILIYA], [MANZIL], [SANA], [SUMMA], [ISH RAQAMI]
2. ISH RAQAMI, SUDYA ISMI — hech qachon O'YLAB CHIQARMA
3. Rasmiy huquqiy format, aniq tuzilma
4. Foydalanuvchi bergan ma'lumotlarni ishlat

Hujjat turi: ${docType}`;
}

// ═══════════════════════════════════════════════════════════════
// 9b. RASM/HUJJAT TAHLILI UCHUN SYSTEM PROMPT
// ═══════════════════════════════════════════════════════════════
// MUHIM: buildSystemPrompt() har doim qat'iy 4-bosqichli "huquqiy maslahat"
// formatini va aloqasiz namunani (pichoqlab ketish misoli) majburlaydi —
// rasm yuborilganda bu format mos kelmaydi va AI foydalanuvchi so'ragan
// rasm tahlili o'rniga shu qolipga urinib, mavzudan chetga chiqadi. Shuning
// uchun rasm bo'lganda ALOHIDA, erkinroq prompt ishlatiladi.
function imageAnalysisSystemPrompt(lang) {
  const langMap = {
    uz: "Javobni o'zbek tilida yoz.",
    ru: "Пиши ответ на русском языке.",
  };
  return `Sen O'zbekiston huquqi bo'yicha tajribali yurist yordamchisisiz. Foydalanuvchi senga rasm (hujjat, shartnoma, xat, kvitansiya va h.k. bo'lishi mumkin) yubordi.

${langMap[lang] || langMap.uz}

VAZIFA:
- Rasmni diqqat bilan ko'rib chiq va foydalanuvchining so'roviga ANIQ va bevosita javob ber.
- Agar bu hujjat bo'lsa — hujjat turini, asosiy band/shartlarni, muhim sana va summalarni aniqla.
- Agar foydalanuvchi aniq savol bergan bo'lsa ("bu nima", "tahlil qil", "shu shartnoma qonuniymi" va h.k.) — o'sha savolga to'g'ridan-to'g'ri javob ber, boshqa mavzuga o'tma.
- Agar hujjatda huquqiy muammo yoki xavfli band ko'rinsa — buni aytib, O'zbekiston qonunchiligiga asoslangan tavsiya ber.

QOIDALAR:
- Rasmda ko'rmagan yoki aniq bo'lmagan narsani hech qachon o'ylab topma — noaniq bo'lsa shunday deb ayt.
- Javobni tabiiy, erkin matn shaklida yoz — majburiy raqamlangan "1/2/3/4" huquqiy maslahat qolipiga solishga hojat yo'q, savolga mos tarzda javob ber.
- Faqat O'zbekiston qonunchiligi asosida izoh ber.`;
}

// ═══════════════════════════════════════════════════════════════
// 10. SYSTEM PROMPT
// ═══════════════════════════════════════════════════════════════
function buildSystemPrompt({
  lang,
  category,
  webContext,
  format,
  intent,
  hasCrime,
  isPro,
  explanatory = false,
}) {
  const langMap = {
    uz: "O'zbek tilida yoz. Foydalanuvchi lotin yozsa lotin, kiril yozsa kiril ishlat.",
    ru: "Пиши только на русском языке.",
  };

  // ANIQ RAQAMLAR QOIDASI.
  // Sinov ko'rsatdi: bitta savolga ("sudga qancha muddat ichida murojaat
  // qilaman?") uchta model uchta har xil javob berdi — 1 oy, 2 oy, 3 oy.
  // Ya'ni modellar muddat/foiz/summa kabi aniq raqamlarni xotirasidan
  // TAXMIN QILADI va buni ishonch bilan aytadi. Huquqiy maslahatda bu eng
  // xavfli xato turi (odam muddatni o'tkazib yuborishi mumkin). Shuning
  // uchun aniq raqam faqat tekshirilgan qonun matnida bo'lsa keltiriladi.
  const numbersRule = webContext
    ? `\nANIQ RAQAMLAR: muddat (kun/oy/yil), foiz, summa va modda raqamini FAQAT yuqoridagi tekshirilgan matnda bo'lsa keltir. Matnda yo'q bo'lsa — raqamni o'zingdan yozma, "aniq muddatni tegishli kodeksdan yoki yuristdan tekshiring" deb ayt.`
    : `\nANIQ RAQAMLAR: bu savol bo'yicha tekshirilgan qonun matni yo'q. Shuning uchun aniq muddat (kun/oy/yil), foiz, summa yoki modda raqamini KELTIRMA — ular xotirangda noto'g'ri yoki eskirgan bo'lishi mumkin. Nima qilish kerakligini umumiy tushuntir va aniq raqamlarni qayerdan tekshirish kerakligini ayt (masalan tegishli kodeks, mehnat inspeksiyasi, notarius, advokat).`;

  const laws = webContext
    ? `TEKSHIRILGAN QONUN MATNI (rasmiy manbadan olingan, ${new Date().toISOString().slice(0, 10)} holatiga):\n${webContext}\n\nYUQORIDAGI MATN — yagona ishonchli manbang. Modda raqami, qonun nomi va tafsilotlarni FAQAT shu matndan ol va aniq keltir (masalan: "Mehnat kodeksining 109-moddasiga ko'ra..."). O'zingning xotirangdagi modda raqamlarini ISHLATMA — ular eskirgan yoki noto'g'ri bo'lishi mumkin. Berilgan matnda savolga to'g'ridan-to'g'ri javob bo'lmasa — mavjud moddani savolga zo'rlab bog'lama, buning o'rniga umumiy yo'nalish ber.`
    : "";

  const crime = hasCrime
    ? "Jimlik huquqi borligini ayt va darhol advokat olishni tavsiya qil."
    : "";

  // BUG FIX: format ko'rsatmasi VA namuna javob faqat o'zbek tilida edi.
  // Model namunadagi sarlavhalarni ko'chirib yozgani uchun rus tilidagi
  // javob "Хозир нима қилинг:" kabi aralash til bilan chiqardi (kirillda
  // yozilgan o'zbekcha sarlavha). Endi butun format bo'limi — sarlavhalar
  // ham, namuna ham — foydalanuvchi tilida beriladi.
  const FORMAT_SECTIONS = {
    uz: `JAVOB FORMATI — har doim shu tartibda:
1. Muammoni tushunganingni qisqa ayt (1 jumla)
2. "Hozir nima qiling:" — aniq qadamlar (1, 2, 3...)
3. "Huquqlaringiz:" — O'zbekiston qonuni bo'yicha
4. "Murojaat:" — aniq organ, telefon, manzil

MUHIM: "Jinoyat kodeksiga murojaat qiling" kabi umumiy gaplarni ASLO YOZMA.
Har savol uchun BOSHQACHA, KONKRET javob ber.

MISOL:
Savol: "Ko'chada pichoqlab ketishdi, nima qilaman?"
Javob:
Siz jiddiy jinoyat qurboni bo'ldingiz.

Hozir nima qiling:
1. Darhol 103 (tez yordam) ga qo'ng'iroq qiling — jarohatingizni rasmiy tarzda belgilating
2. 102 (politsiya) ga qo'ng'iroq qiling yoki eng yaqin politsiya bo'limiga boring
3. Ariza yozing — hujumchi ta'rifi, joy, vaqt, guvohlar

Huquqlaringiz:
- Jabrlanuvchi sifatida bepul yuridik yordam olasiz
- Tibbiy xarajatlar hujumchidan undirilishi mumkin
- Sud orqali moddiy va ma'naviy zarar qoplash huquqi

Murojaat: Tuman prokuraturasi yoki politsiya bo'limi.
Guvoh bo'lgan odamlar bo'lsa — ularning raqamini oling, bu juda muhim.`,

    ru: `ФОРМАТ ОТВЕТА — всегда в таком порядке (заголовки ТОЛЬКО на русском):
1. Коротко покажи, что понял ситуацию (1 предложение)
2. «Что делать сейчас:» — конкретные шаги (1, 2, 3...)
3. «Ваши права:» — по законодательству Узбекистана
4. «Куда обращаться:» — конкретный орган, телефон, адрес

ВАЖНО: не пиши общие фразы вроде «обратитесь к Уголовному кодексу».
Для каждого вопроса — свой, конкретный ответ.
Не используй узбекские слова в русском ответе.

ПРИМЕР:
Вопрос: «На улице на меня напали с ножом, что делать?»
Ответ:
Вы стали жертвой тяжкого преступления.

Что делать сейчас:
1. Немедленно позвоните 103 (скорая) — зафиксируйте травмы официально
2. Позвоните 102 (милиция) или обратитесь в ближайшее отделение
3. Напишите заявление — приметы нападавшего, место, время, свидетели

Ваши права:
- Как потерпевший вы получаете бесплатную юридическую помощь
- Медицинские расходы могут быть взысканы с нападавшего
- Право на возмещение материального и морального вреда через суд

Куда обращаться: районная прокуратура или отделение милиции.
Если были свидетели — возьмите их номера, это очень важно.`,

  };
  // Tushuntirish talab qiladigan savolda boshqa format ishlatiladi —
  // pastdagi EXPLAIN_FORMATS (avval hamma savolga harakat qolipi
  // majburlanardi va asosiy savolga javob berilmasdi).

  // Tushuntirish formati: avval SAVOLGA javob, keyin amaliyot.
  const EXPLAIN_FORMATS = {
    uz: `JAVOB FORMATI — bu ODDIY SAVOL. Foydalanuvchi o'z holatini aytmadi, faqat bilmoqchi.

1. SAVOLGA TO'G'RIDAN-TO'G'RI javob bering (1-3 jumla). Masalan "kimda qoladi?" deb so'ralsa — kimda qolishini va bu nimaga qarab hal qilinishini ayting.
2. Kerak bo'lsa qisqacha izohlang: qanday mezonlar hisobga olinadi, qanday istisnolar bor.

QAT'IY TAQIQ — bu savolda MASLAHAT BERMANG:
- "Sudga murojaat qiling", "ariza yozing", "advokatga boring" kabi tavsiyalarni YOZMANG.
- "Hozir nima qiling" ro'yxati, "Huquqlaringiz", "Murojaat" bo'limlarini YOZMANG.
- Foydalanuvchi maslahat so'ramadi — u faqat javob so'radi. Savolga javob bering va TO'XTANG.
- Javob oxirida boshida aytganingizni QAYTA TAKRORLAMANG.

Agar savolda aniq shart berilgan bo'lsa (masalan bolaning yoshi), AYNAN shu shartni hisobga oling.`,

    ru: `ФОРМАТ ОТВЕТА — это ОБЫЧНЫЙ ВОПРОС. Пользователь не описывал свою ситуацию, он просто хочет знать.

1. Ответьте на вопрос ПРЯМО (1-3 предложения).
2. При необходимости кратко поясните критерии и исключения.

СТРОГО ЗАПРЕЩЕНО давать советы:
- НЕ пишите «обратитесь в суд», «напишите заявление», «обратитесь к адвокату».
- НЕ добавляйте разделы «Что делать сейчас», «Ваши права», «Куда обращаться».
- Пользователь не просил совета — он задал вопрос. Ответьте и ОСТАНОВИТЕСЬ.
- Не повторяйте в конце то, что сказали в начале.

Если в вопросе указано конкретное условие (например возраст ребёнка) — учтите именно его.`,

  };


  const formatSection = explanatory
    ? EXPLAIN_FORMATS[lang] || EXPLAIN_FORMATS.uz
    : FORMAT_SECTIONS[lang] || FORMAT_SECTIONS.uz;

  // Promptning asosi — xarakter, shablon emas
  return `Sen O'zbekiston Respublikasi qonunchiligini yaxshi biladigan tajribali yurist yordamchisisiz.

${langMap[lang] || langMap.uz}

QOIDALAR:
1. FAQAT O'zbekiston qonunlari. Boshqa davlatlar qonuni haqida: "Men faqat O'zbekiston qonunchiligi bo'yicha yordam bera olaman" de.
2. Modda raqamini FAQAT quyida "TEKSHIRILGAN QONUN MATNI" berilgan bo'lsa, o'sha asosda aniq keltir. Bunday matn berilmagan bo'lsa — aniq modda raqamini TAXMIN QILMA, umumiy tarzda (masalan "Mehnat kodeksiga ko'ra" — raqamsiz) javob ber.
3. Yolg'on ma'lumot berma.
4. Ichki ishlash jarayoning (qidiruv, manba qidirish, tekshirish) haqida FOYDALANUVCHIGA HECH QACHON AYTMA — faqat tayyor, ishonchli javobni ber. Modda/qonun nomini javob ichida tabiiy tarzda keltirish mumkin, lekin "men qidirdim", "manbalarni tekshirdim" kabi jarayon haqida gapirma.

${formatSection}
${numbersRule}
${crime ? "\n" + crime : ""}${laws ? "\n\n" + laws : ""}${
    isPro
      ? "\n\nPRO REJIM: Bu foydalanuvchi Pro obunachi — chuqurroq va professional darajada javob ber: tegishli modda/band raqamlarini imkon qadar aniqroq keltir, muqobil huquqiy yo'llarni ham qisqacha sanab o't, va amaliy tavsiyalarni yanada konkretlashtir (kimga, qayerga, qanday hujjat bilan)."
      : ""
  }`;
}

// ═══════════════════════════════════════════════════════════════
// 11. LLM CALL
// ═══════════════════════════════════════════════════════════════

/* ═══════════════════════════════════════════════════════════════
   PROVAYDER SOG'LIG'I — "uzilish himoyasi" (circuit breaker).

   ⚠️ MUAMMO (2026-08-07 da o'lchandi): Claude `400 credit balance is
   too low`, Gemini `429 quota exceeded` qaytaradi — ikkalasi ham
   O'LIK. Lekin ular HAR BIR so'rovda qayta-qayta chaqirilardi:
   Pro foydalanuvchi uchun `selectModel` doim Claude tanlaydi, rasm
   uchun doim Gemini. Har urinish tarmoq kutishiga aylanardi, kvota
   xatosi esa hech qachon eslab qolinmasdi.

   Endi kvota/balans xatosi (401/402/403/429) olingan provayder
   COOLDOWN_MS davomida umuman chaqirilmaydi. Xuddi shu naqsh
   `translator.js` da allaqachon ishlatiladi. */
const PROVIDER_COOLDOWN_MS = 15 * 60 * 1000; // 15 daqiqa
const providerCooldown = new Map(); // provider -> qaytadan urinish vaqti

function isQuotaError(err) {
  const status = err?.status || err?.statusCode;
  const text = String(err?.message || "");
  if ([401, 402, 403, 429].includes(status)) return true;
  return /quota|credit balance|rate.?limit|too many requests|billing|exceeded/i.test(
    text,
  );
}

function providerAvailable(name) {
  const until = providerCooldown.get(name);
  if (!until) return true;
  if (Date.now() >= until) {
    providerCooldown.delete(name);
    return true;
  }
  return false;
}

function markProviderDown(name, err) {
  if (!isQuotaError(err)) return; // vaqtinchalik tarmoq xatosi — o'chirmaymiz
  providerCooldown.set(name, Date.now() + PROVIDER_COOLDOWN_MS);
  console.warn(
    `⏸️  AI provayder "${name}" ${PROVIDER_COOLDOWN_MS / 60000} daqiqaga o'chirildi: ${String(err.message).slice(0, 120)}`,
  );
}

/** Tashqi API cheksiz kutib qolmasligi uchun — aks holda foydalanuvchi
    javobni umuman ololmay, so'rov "osilib" qolardi. */
function withTimeout(promise, ms, label) {
  let timer;
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      timer = setTimeout(
        () => reject(new Error(`${label}: ${ms / 1000}s ichida javob bermadi`)),
        ms,
      );
    }),
  ]).finally(() => clearTimeout(timer));
}
const LLM_TIMEOUT_MS = 45000;

/** Holatni tashqaridan ko'rish uchun (diagnostika). */
function providerStatus() {
  const all = [
    ["claude", !!anthropicClient],
    ["gemini", !!geminiClient],
    ["cloudflare", !!(CF_ACCOUNT_ID && CF_API_TOKEN)],
    ["groq", !!groqClient],
  ];
  return all.map(([name, configured]) => ({
    name,
    configured,
    available: configured && providerAvailable(name),
    cooldownUntil: providerCooldown.get(name) || null,
  }));
}

async function callGroq(messages, model) {
  if (!groqClient) throw new Error("GROQ_API_KEY sozlanmagan");
  const r = await groqClient.chat.completions.create({
    model,
    messages,
    temperature: 0.3,
    top_p: 0.9,
    max_tokens: 4000,
  });
  return r.choices?.[0]?.message?.content?.trim() || "";
}

// ── Cloudflare Workers AI ────────────────────────────────────
async function callCloudflare(messages) {
  if (!CF_ACCOUNT_ID || !CF_API_TOKEN)
    throw new Error("CF credentials sozlanmagan");

  const body = JSON.stringify({
    messages,
    max_tokens: 4000,
    temperature: 0.7,
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.cloudflare.com",
      path: `/client/v4/accounts/${CF_ACCOUNT_ID}/ai/run/${CF_MODEL}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_API_TOKEN}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (!json.success)
            return reject(new Error(json.errors?.[0]?.message || "CF error"));
          const text = json.result?.response?.trim() || "";
          resolve(text);
        } catch (e) {
          reject(new Error("CF parse error: " + e.message));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function callClaude(sysPrompt, history, userMsg, imgBase64, imgMime) {
  if (!anthropicClient) throw new Error("ANTHROPIC_API_KEY sozlanmagan");

  const content = imgBase64
    ? [
        {
          type: "image",
          source: {
            type: "base64",
            media_type: imgMime || "image/jpeg",
            data: imgBase64,
          },
        },
        {
          type: "text",
          text: `Hujjat rasmini tahlil qil: nomlar, sanalar, summalar, imzolar, hujjat turi. Keyin javob ber: ${userMsg}`,
        },
      ]
    : userMsg;

  const r = await anthropicClient.messages.create({
    model: CLAUDE_MODEL,
    max_tokens: 2000,
    temperature: 0.4,
    system: sysPrompt,
    messages: [
      ...history.map((m) => ({ role: m.role, content: m.content })),
      { role: "user", content },
    ],
  });
  return r.content
    ?.filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("")
    .trim();
}

async function callGemini(sysPrompt, userMsg, history, imgBase64, imgMime) {
  if (!geminiClient) throw new Error("GEMINI_API_KEY sozlanmagan");
  const contents = [
    ...history.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    {
      role: "user",
      parts: imgBase64
        ? [
            {
              inlineData: {
                mimeType: imgMime || "image/jpeg",
                data: imgBase64,
              },
            },
            {
              text: `Hujjat rasmini tahlil qil: nomlar, sanalar, summalar, imzolar, hujjat turi. Keyin javob ber: ${userMsg}`,
            },
          ]
        : [{ text: userMsg }],
    },
  ];
  const r = await geminiClient.models.generateContent({
    model: GEMINI_MODEL,
    config: {
      systemInstruction: sysPrompt,
      temperature: 0.7,
      topP: 0.95,
      maxOutputTokens: 1800,
    },
    contents,
  });
  return r.text?.trim() || "";
}

// ═══════════════════════════════════════════════════════════════
// 12. ASOSIY PIPELINE
// ═══════════════════════════════════════════════════════════════
async function getLegalAdvice(
  userMessage,
  history = [],
  imageBase64 = null,
  imageMimeType = "image/jpeg",
  lang = "uz",
  isPro = false,
) {
  const msg = String(userMessage || "")
    .trim()
    .slice(0, 2000);
  if (!msg) return { answer: "Xabar bo'sh.", category: "unknown" };

  const detectedLang = lang !== "uz" ? lang : detectLanguage(msg);

  // 1. Xavfsizlik
  const safety = checkSafety(msg);
  if (safety.status === "blocked") {
    return { answer: blockedReply(detectedLang), category: "blocked" };
  }
  const hasCrime = safety.status === "redirected";

  // 2. Huquqiy savol emas?
  // Suhbat allaqachon boshlangan bo'lsa, qisqa davom savollari ("qanday
  // hujjat kerak?") rad etilmasligi uchun tarix hisobga olinadi.
  const inDialog = Array.isArray(history) && history.length > 0;
  if (!imageBase64 && !isLegalQuestion(msg, inDialog)) {
    return { answer: offTopicReply(detectedLang, msg), category: "off_topic" };
  }

  // 3. Intent & complexity
  const intent = parseIntent(msg);
  const format = responseFormat(intent.complexity);

  // 4. Kategoriya
  // Qisqa davom savolida ("muddati qancha?") mavzu joriy xabardan
  // aniqlanmaydi — shuning uchun oldingi savollar ham hisobga olinadi.
  // Aks holda mehnat nizosi haqidagi suhbatda AI Fuqarolik kodeksidan
  // javob qidirib, mavzuga aloqasiz moddalarni keltirardi.
  const prevUserText = inDialog
    ? history
        .filter((m) => m.role === "user")
        .slice(-2)
        .map((m) => String(m.content || ""))
        .join(" ")
    : "";
  const topicText =
    detectCategory(msg) === "unknown" && prevUserText
      ? `${prevUserText} ${msg}`
      : msg;
  const category = detectCategory(topicText);
  const uzCategory = UZ_CAT[category] || "boshqa";

  // 5. Hujjat modemi? MUHIM: faqat mavzu so'zi (masalan "shartnoma")
  // borligi YETARLI EMAS — aks holda "shartnomani qanday bekor qilaman"
  // kabi oddiy INFORMATSION savollar ham noto'g'ri "yangi hujjat yoz"
  // rejimiga tushib, RAG konteksti ishlatilmay qolardi. Endi hujjat turi
  // so'zi BILAN BIRGA "yoz/tayyorla/tuz/yarat" kabi yaratish fe'li ham
  // borligi talab qilinadi.
  const isDoc =
    /ariza|shikoyat|da['']vo|shartnoma|petitsiya|bildirishnoma/i.test(msg) &&
    /yoz|tayyorla|tuz|yarat/i.test(msg);
  const docType = isDoc ? detectDocType(msg) : null;

  // 6. Qonun retrieval (RAG) — LegalChunk vektor bazasidan eng mos
  // moddalarni topadi. Rasm tahlili va yangi hujjat yozishda kerak emas
  // (ular alohida promptlar bilan ishlaydi) — faqat oddiy huquqiy savolda.
  // Muvaffaqiyatsiz bo'lsa (masalan indeks hali yo'q) — jim davom etadi,
  // so'rov bloklanmaydi, AI odatdagidek javob beradi.
  // Qidiruv so'rovi: qisqa davom savolida ("qancha muddat ichida?") faqat
  // shu matn bilan qidirilsa, vektor qidiruv mavzuni topa olmaydi —
  // shuning uchun oldingi savol matni ham qo'shiladi (mavzu joriy
  // xabardan aniq bo'lsa — o'zgarishsiz qoladi).
  const ragQuery =
    topicText === msg ? msg : `${prevUserText} ${msg}`.slice(-500);
  const webContext =
    !imageBase64 && !isDoc
      ? (
          await retrieveLegalContext(
            ragQuery,
            5,
            CATEGORY_TO_LAWCODE[category] || null,
          )
        ).context
      : "";

  // 7. History
  const relHistory = buildHistory(history);

  // 8. Model
  const model = selectModel(msg, category, !!imageBase64, isPro);

  // 9. System prompt — rasm bo'lsa (hujjat generatsiyasidan ustun,
  // chunki foydalanuvchi odatda MAVJUD hujjatni tahlil qilishni so'raydi)
  // erkin tahlil prompti, aks holda hujjat yozish yoki oddiy maslahat prompti.
  const sysPrompt = imageBase64
    ? imageAnalysisSystemPrompt(detectedLang)
    : isDoc
      ? docSystemPrompt(docType)
      : buildSystemPrompt({
          lang: detectedLang,
          category,
          webContext,
          format,
          intent,
          hasCrime,
          isPro,
          explanatory: !needsAdvice(msg),
        });

  // 10. LLM
  let rawAnswer = "";
  const msgs = [
    { role: "system", content: sysPrompt },
    ...relHistory,
    { role: "user", content: msg },
  ];

  /* ⚠️ ZANJIR QAYTA YOZILDI (2026-08-07) — "Texnik muammo" xatosining
     ASOSIY SABABI shu yerda edi.

     Avvalgi kod qattiq `if/else` zanjiri edi va u ISHLAYDIGAN
     provayderni CHETLAB O'TARDI. Aniq misol (o'lchangan holat:
     Claude 400 "credit balance too low", Gemini 429 "quota exceeded",
     Cloudflare va Groq ishlaydi):
       Pro foydalanuvchi → Claude ❌ → (fallback) Groq → kvota tugagan
       bo'lsa ❌ → (oxirgi fallback) Gemini ❌ → "Texnik muammo".
     Cloudflare TIRIK bo'lsa ham UMUMAN chaqirilmasdi, chunki u faqat
     PRIMARY bo'lgandagina zanjirga kirardi.
     Rasm tahlilida holat battar edi: primary Gemini ❌ → Groq (rasmni
     KO'RMAYDI) → oxirgi shart `model.provider !== "gemini"` yolg'on
     bo'lgani uchun darhol "Texnik muammo".

     Endi — TARTIBLANGAN NOMZODLAR RO'YXATI: har bir provayder ko'pi
     bilan bir marta sinaladi, ishlamagani keyingisiga o'tadi, kvota
     xatosi bergani esa 15 daqiqaga o'chiriladi (yuqoridagi circuit
     breaker) va keyingi so'rovlarda vaqt yo'qotilmaydi. */
  const candidates = [];
  const add = (name, fn, opts = {}) => {
    if (!opts.enabled) return;
    if (candidates.some((c) => c.name === name)) return; // takror bo'lmasin
    if (!providerAvailable(name)) return; // cooldown'da
    candidates.push({ name, fn });
  };

  const cfEnabled = !!(CF_ACCOUNT_ID && CF_API_TOKEN);
  const claudeCall = () =>
    callClaude(sysPrompt, relHistory, msg, imageBase64, imageMimeType);
  const geminiCall = () =>
    callGemini(sysPrompt, msg, relHistory, imageBase64, imageMimeType);
  const cfCall = () => callCloudflare(msgs);
  const groqCall = (m) => () => callGroq(msgs, m || model.model);

  // 1) Avval `selectModel` tanlagani (Pro → Claude, rasm → Gemini, ...)
  if (model.provider === "claude") add("claude", claudeCall, { enabled: !!anthropicClient });
  else if (model.provider === "gemini") add("gemini", geminiCall, { enabled: !!geminiClient });
  else if (model.provider === "cloudflare") add("cloudflare", cfCall, { enabled: cfEnabled });
  else add("groq", groqCall(), { enabled: !!groqClient });

  if (imageBase64) {
    /* Rasm bo'lsa — faqat RASMNI KO'RA OLADIGAN provayderlar.
       Groq/Cloudflare matn modellari rasmni umuman ko'rmaydi va
       "rasmda nima bor?" degan savolga o'ylab topilgan javob berardi —
       bu noto'g'ri javobdan ko'ra yomonroq. Shuning uchun ular bu
       yerda ATAYLAB ro'yxatga qo'shilmaydi. */
    add("gemini", geminiCall, { enabled: !!geminiClient });
    add("claude", claudeCall, { enabled: !!anthropicClient });
  } else {
    // 2) Qolgan barcha matn provayderlari — bepullari oldinda
    add("cloudflare", cfCall, { enabled: cfEnabled });
    add("groq", groqCall("llama-3.3-70b-versatile"), { enabled: !!groqClient });
    add("gemini", geminiCall, { enabled: !!geminiClient });
    add("claude", claudeCall, { enabled: !!anthropicClient });
  }

  let actualProvider = model.provider;
  const failures = [];
  for (const c of candidates) {
    try {
      rawAnswer = await withTimeout(c.fn(), LLM_TIMEOUT_MS, c.name);
      if (rawAnswer && rawAnswer.trim()) {
        actualProvider = c.name;
        break;
      }
      // Bo'sh javob ham muvaffaqiyatsizlik — keyingisiga o'tamiz
      failures.push(`${c.name}: bo'sh javob`);
      rawAnswer = "";
    } catch (err) {
      failures.push(`${c.name}: ${String(err.message).slice(0, 100)}`);
      markProviderDown(c.name, err);
    }
  }

  if (!rawAnswer || !rawAnswer.trim()) {
    console.error(
      "Barcha AI provayderlar ishlamadi:",
      failures.length ? failures.join(" | ") : "sozlangan provayder yo'q",
    );
    return {
      answer:
        {
          uz: "Hozir AI xizmati vaqtincha band. Iltimos, bir necha daqiqadan so'ng qayta urinib ko'ring.",
          ru: "Сервис AI временно перегружен. Пожалуйста, повторите попытку через несколько минут.",
        }[detectedLang] || "Texnik muammo.",
      category: uzCategory,
      provider: null,
    };
  }

  // Og'ir jinoyat ogohlantirish
  if (hasCrime) {
    const w = {
      uz: "⚠️ Bu og'ir jinoyat mavzusi. Advokat bilan darhol maslahatlashing. Jimlik huquqingiz bor — advokatdan tashqari hech narsa aytmang.\n\n",
      ru: "⚠️ Это серьёзная уголовная тема. Немедленно обратитесь к адвокату. Вы имеете право молчать.\n\n",
    };
    rawAnswer = (w[detectedLang] || w.uz) + rawAnswer;
  }

  // 11. Validate
  const finalAnswer = validateAnswer(rawAnswer, msg);
  if (!finalAnswer) {
    return {
      answer:
        {
          uz: "Javob yaratishda xatolik. Qayta yozing.",
          ru: "Ошибка генерации. Переформулируйте.",
        }[detectedLang] || "Xatolik.",
      category: uzCategory,
    };
  }

  return { answer: finalAnswer, category: uzCategory, provider: actualProvider };
}

/* ═══════════════ SAVOL TURI: TUSHUNTIRISH yoki HARAKAT ═══════════════
   Ikki xil savol butunlay boshqa javobni talab qiladi:

   • HARAKAT: "erim uryapti, nima qilay?" → darhol qadamlar kerak.
   • TUSHUNTIRISH: "ajrashganda bola kimda qoladi?" → avval SAVOLGA
     javob kerak (kimda qoladi va nimaga qarab hal qilinadi), keyin
     amaliy izoh.

   Avval hamma savolga majburiy "Hozir nima qiling / Huquqlaringiz /
   Murojaat" qolipi qo'llanardi. Natijada tushuntirish talab qiladigan
   savolga foydalanuvchi "sudga ariza yozing" degan bo'sh shablon olardi
   va ASOSIY SAVOLIGA javob umuman berilmasdi (haqiqiy shikoyat). */
/* Foydalanuvchi O'Z HOLATINI aytyaptimi? ("meni ishdan bo'shatishdi",
   "erim uryapti", "menda shunday bo'ldi") — faqat shunda maslahat
   kerak. Aks holda bu oddiy savol va unga FAQAT javob berish kerak. */
const PERSONAL_PATTERNS = [
  // 1-shaxs + boshiga tushgan voqea
  /\b(meni|menga|mendan|menda|mening)\b/i,
  /\b(bizni|bizga|bizda|bizning)\b/i,
  /\berim\b|\bxotinim\b|\brafiqam\b|\bo'?g'?lim\b|\bqizim\b|otam|onam/i,
  /ish beruvchim|boshlig'?im|qo'?shnim|ijarachim/i,
  /shunday bo'?ldi|shunaqa bo'?ldi|holat yuz berdi|boshimga tushdi/i,
  /меня|мне|мой муж|моя жена|у меня/i,
  /\bmy (husband|wife|boss|employer|landlord)\b|happened to me|i was (fired|beaten|cheated)/i,
];

/* Aniq harakat so'rovi — "nima qilay?", "qayerga murojaat qilaman?" */
const ACTION_PATTERNS = [
  /nima qil(ay|aman|amiz|ish kerak|sam bo'?ladi)/i,
  /qanday qil(ay|aman|amiz)/i,
  /qayerga (bor|murojaat|yozish|yoz)/i,
  /yordam ber|help me|что делать|куда обра/i,
];

/**
 * Foydalanuvchiga MASLAHAT (qadamlar, murojaat joyi) kerakmi?
 *
 * Foydalanuvchi talabi: "men shunchaki savol bersam — savolimga javob
 * bersin, maslahat bermasin. Agar menda shunday bo'ldi desam — keyin
 * maslahat bersin."
 *
 * Shuning uchun mantiq TESKARI qurilgan: standart holat — faqat javob.
 * Maslahat faqat ikki holatda beriladi:
 *   1) foydalanuvchi o'z holatini aytgan bo'lsa (PERSONAL_PATTERNS);
 *   2) aniq "nima qilay?" deb so'ragan bo'lsa (ACTION_PATTERNS).
 * (Avval teskarisi edi — savol turi "tushuntirish" deb tanilmasa,
 * hammasiga majburiy "Hozir nima qiling / Murojaat" qolipi qo'llanardi.)
 */
function needsAdvice(text = "") {
  const low = normalizeUz(text);

  if (ACTION_PATTERNS.some((p) => p.test(low))) return true;
  if (PERSONAL_PATTERNS.some((p) => p.test(low))) return true;

  // Egasiz aytilgan voqea: "ishdan bo'shatishdi", "pulni bermayapti" —
  // o'zbek tilida bu odatda "MENGA shunday qilishdi" ma'nosini beradi.
  // Lekin savol so'zi bo'lsa ("meros qanday taqsimlanadi?") bu oddiy
  // savol — shuning uchun savol so'zi bor gaplar bundan mustasno.
  // (Avval bu yerda `\w+di` naqshi bor edi va u -di/-adi bilan tugaydigan
  // HAR QANDAY fe'lni voqea deb hisoblardi: "taqsimlanadi", "bo'linadi" —
  // natijada oddiy savolga ham maslahat berilardi.)
  const hasQuestionWord =
    /\b(nima|qanday|qancha|kim|kimda|qachon|qaysi|nechta|necha|qanaqa)\b|\bmi\?|\bmi$/.test(
      low,
    );
  const pastEvent = /\b\w+(ishdi|ishmadi|shdi|dilar|mayapti|masdi)\b/.test(low);
  return !hasQuestionWord && pastEvent;
}

/* ═══════════════════════════════════════════════════════════════
   O'QUV TOPSHIRIQLARI UCHUN UMUMIY AI CHAQIRUVI
   ═══════════════════════════════════════════════════════════════
   Darslar bo'limidagi AI vazifalari (yozma topshiriqni baholash,
   savol-javob, moddalarni yodlash, case study) uchun ishlatiladi.

   Nima uchun alohida: `getLegalAdvice()` huquqiy MASLAHAT uchun
   moslangan — u qat'iy 4 bosqichli javob formatini, xavfsizlik
   filtrini va "huquqiy savolmi?" tekshiruvini qo'llaydi. Baholash
   vazifasida bular xalaqit beradi (masalan foydalanuvchining qisqa
   javobi "huquqiy savol emas" deb rad etilishi mumkin edi).
   Shuning uchun bu yerda faqat provayder zanjiri qayta ishlatiladi —
   asosiy maslahat oqimiga TEGILMAYDI. */
async function askStructured({ system, user, isPro = false }) {
  const messages = [
    { role: "system", content: system },
    { role: "user", content: user },
  ];

  // Zanjir: Pro uchun Claude → Cloudflare → Groq → Gemini.
  // `getLegalAdvice` dagi kabi — kvota xatosi bergan provayder
  // cooldown'da bo'lsa umuman chaqirilmaydi (aks holda har bir dars
  // topshirig'ida o'lik provayderni kutishga vaqt ketardi).
  const attempts = [];
  const push = (name, enabled, fn) => {
    if (enabled && providerAvailable(name)) attempts.push({ name, fn });
  };
  push("claude", isPro && !!anthropicClient, () =>
    callClaude(system, [], user, null, null),
  );
  push("cloudflare", !!(CF_ACCOUNT_ID && CF_API_TOKEN), () =>
    callCloudflare(messages),
  );
  push("groq", !!groqClient, () =>
    callGroq(messages, "llama-3.3-70b-versatile"),
  );
  push("gemini", !!geminiClient, () =>
    callGemini(system, user, [], null, null),
  );

  let lastErr = null;
  for (const { name, fn } of attempts) {
    try {
      const out = (await withTimeout(fn(), LLM_TIMEOUT_MS, name))?.trim();
      if (out) return out;
    } catch (err) {
      lastErr = err;
      markProviderDown(name, err);
      console.warn(`askStructured (${name}) xatosi:`, err.message);
    }
  }
  throw lastErr || new Error("Hech qanday AI provayder ishlamayapti");
}

module.exports = { getLegalAdvice, askStructured, providerStatus };



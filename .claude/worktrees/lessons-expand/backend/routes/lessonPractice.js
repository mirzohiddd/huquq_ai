"use strict";
/**
 * DARS AMALIYOTI — AI baholaydigan o'quv topshiriqlari.
 *
 * To'rt turdagi vazifa (foydalanuvchi spetsifikatsiyasi bo'yicha):
 *   written — yozma topshiriq: mavzuni o'z so'zlari bilan tushuntirish
 *   qa      — AI savol beradi, javobni tekshiradi
 *   article — qonun moddasini yodlash: modda nimani tartibga soladi?
 *   case    — amaliy vaziyat (case study): huquqiy yechim yozish
 *
 * Ikki bosqichli ishlaydi:
 *   POST /task   → AI topshiriq/savol beradi (javobsiz)
 *   POST /check  → foydalanuvchi javobini baholaydi
 *
 * MUHIM: baholash HAR DOIM RAG orqali topilgan haqiqiy qonun matniga
 * tayanadi (services/legalRetrieval.js) — AI o'z xotirasidan modda
 * raqami yoki muddat "o'ylab topmasligi" uchun. Bu loyihaning asosiy
 * qoidasi (qarang: legalAI.js dagi "ANIQ RAQAMLAR" qoidasi).
 */
const router = require("express").Router();
const { userGuard } = require("../middleware/auth");
const { webLimitGuard } = require("../middleware/usageLimit");
const { askStructured } = require("../services/legalAI");
const { retrieveLegalContext } = require("../services/legalRetrieval");
const { LegalChunk, User, isUserPro } = require("../models");
const { translateMany } = require("../services/translator");

/* ── TIL ──────────────────────────────────────────────────────────
   AI bilan ishlash O'ZBEK tilida qoladi — promptlar, baholash mezoni
   va `BAHO/IZOH/TAVSIYA` formati uzoq sozlangan va aynan shu holatda
   to'g'ri ishlaydi (CLAUDE.md dagi tuzatishlar tarixiga qarang).
   Modelni boshqa tilda javob berishga majburlash baholash aniqligini
   ham, `parseVerdict` ning ishlashini ham xavf ostiga qo'yardi
   (masalan "BAHO" yorlig'i ruscha qaytsa — baho o'qilmay qolardi).

   Shuning uchun boshqa yo'l tanlandi: AI o'zbekcha ishlaydi, va faqat
   FOYDALANUVCHIGA KO'RINADIGAN matn (savol, izoh, tavsiya) chiqishda
   tarjima qilinadi. Tarjima qatlami allaqachon sifat tekshiruvi va
   keshga ega (services/translator.js). */
function langOf(req) {
  const l = String(
    req.body?.lang || req.query?.lang || req.get("X-Lang") || "",
  ).toLowerCase();
  return ["uz", "ru"].includes(l) ? l : "uz";
}

/** Bir nechta matnni foydalanuvchi tiliga o'giradi (uz bo'lsa — tegilmaydi) */
async function toUserLang(texts, lang) {
  if (lang === "uz") return texts;
  try {
    return await translateMany(texts, lang);
  } catch {
    return texts; // tarjima bo'lmasa o'zbekcha ko'rsatiladi
  }
}

const TASK_TYPES = ["written", "qa", "article", "case", "speaking"];

/* ═══════════ MAVZUGA QAT'IY BOG'LASH ═══════════
   Foydalanuvchi shikoyati: "oila huquqi darsida boshqa mavzudagi
   savollar berilyapti". Sabab — qidiruv va tasodifiy modda tanlash
   BUTUN qonun bazasi bo'yicha ishlardi. Endi har bir dars o'z
   kodeksiga qattiq bog'lanadi: qidiruv ham, zaxira modda tanlash ham
   faqat shu kodeks ichida bo'ladi. */
/* Dars mavzusi → qidiriladigan kodeks(lar).
   `code` massiv ham bo'lishi mumkin — bitta mavzu bir nechta kodeksga
   tegishli bo'lgan holatlar uchun (masalan meros Fuqarolik kodeksining
   IKKINCHI qismida, ko'chmas mulk esa Yer/Uy-joy/Shaharsozlik
   kodekslarida taqsimlangan).

   TUZATISH: avval meros va iste'molchi mavzulari "FK" ga yo'naltirilgan
   edi, lekin meros aslida FK2 da (ikkinchi qism), iste'molchi huquqlari
   esa alohida QONUNDA (IHQ) — ya'ni ikkalasi ham noto'g'ri kodeksdan
   qidirilardi. */
const TOPIC_LAW_CODE = [
  { re: /oila|nikoh|ajrash|ajral|aliment|farzand|bola/i, code: "OK" },
  { re: /mehnat|ish beruvchi|xodim|ish haqi|ta'?til/i, code: "MK" },
  { re: /meros|vasiyat|merosxo'?r/i, code: "FK2" },
  { re: /iste'?molchi|tovar|kafolat/i, code: ["IHQ", "FK2"] },
  { re: /uy-joy|kvartira|turar joy/i, code: "UJK" },
  { re: /yer|ko'?chmas mulk|kadastr/i, code: ["YK", "UJK"] },
  { re: /soliq|qqs|daromad solig/i, code: "SK" },
  { re: /ma'?muriy javobgarlik|jarima|ma'?muriy huquqbuzarlik/i, code: "MJK" },
  { re: /jinoy|jazo|sudlan/i, code: "JK" },
  { re: /shartnoma|bitim|pudrat|ijara/i, code: ["FK", "FK2"] },
];

function lawCodeFor(title = "") {
  return TOPIC_LAW_CODE.find((x) => x.re.test(title))?.code || null;
}

/**
 * Topshiriq uchun dars bo'limini tanlaydi.
 * Har safar BOSHQA bo'lim chiqishi uchun oldingi savolda ishlatilgani
 * chetlab o'tiladi (imkon bo'lsa).
 */
function pickSection(sections, fallbackTitle, exclude = "") {
  const list = (Array.isArray(sections) ? sections : [])
    .filter((x) => x && x.heading)
    .map((x) => ({ heading: String(x.heading), text: String(x.text || "") }));

  if (!list.length) {
    return { heading: String(fallbackTitle).split(/[.\n]/)[0].slice(0, 120), text: "" };
  }
  const fresh = exclude
    ? list.filter((x) => !String(exclude).includes(x.heading))
    : list;
  const pool = fresh.length ? fresh : list;
  return pool[Math.floor(Math.random() * pool.length)];
}

/* ── Umumiy qoidalar (barcha promptlar uchun) ──
   DIQQAT: dars matni (lessonContext) ASOSIY manba, qonun matni esa
   faqat QO'SHIMCHA. Avval teskarisi edi — RAG topgan tasodifiy modda
   "yagona ishonchli manba" deb berilardi va AI talabaning javobini
   savolga emas, o'sha moddaga qarab baholardi. Natijada to'g'ri javob
   "noto'g'ri" deb belgilanib, izohlar savolga umuman aloqasiz chiqardi. */
function baseRules({ lessonContext = "", lawContext = "" } = {}) {
  return `Sen O'zbekiston huquqi bo'yicha tajribali, xayrixoh o'qituvchisan. Talaba huquq asoslarini o'rganmoqda.

QAT'IY QOIDALAR:
1. Faqat O'zbekiston qonunchiligi.
2. Modda raqami, muddat, foiz yoki summani FAQAT quyida berilgan matnlarda bo'lsa keltir. Bo'lmasa — raqam yozma, umumiy tushuntir.
3. Talabani ruhlantir: xatosini ko'rsat, lekin kamsitma.
4. Qisqa va aniq yoz — ortiqcha muqaddima kerak emas.
5. MAVZUDAN CHIQMA: savol va izohlar faqat shu darsning mavzusiga oid bo'lsin. Boshqa huquq sohasiga (masalan oila darsida mehnat yoki jinoyat masalasiga) O'TMA.
${lessonContext ? `\nDARS MATNI (talaba shuni o'qidi — baholashda ASOSIY mezon shu):\n${lessonContext}` : ""}${lawContext ? `\n\nQO'SHIMCHA QONUN MATNI (faqat aniqlik uchun; talabadan bu yerdagi tafsilotlarni TALAB QILMA):\n${lawContext}` : ""}`;
}

/* ── AI javobini ajratib olish ── */
function parseVerdict(raw) {
  const text = String(raw || "");
  const grab = (label) => {
    const m = text.match(
      new RegExp(`${label}\\s*:?\\s*([\\s\\S]*?)(?=\\n\\s*[A-ZА-ЯЎҚҒҲ']{3,}\\s*:|$)`, "i"),
    );
    return m ? m[1].trim() : "";
  };

  // BAHO faqat BIRINCHI qatordan olinadi — aks holda izoh matnidagi
  // "noto'g'ri" so'zi bahoni buzib yuborardi.
  const verdictRaw = grab("BAHO").split(/\n/)[0].toLowerCase();
  let verdict = "partial";
  if (/to'?g'?ri/.test(verdictRaw) && !/noto'?g'?ri/.test(verdictRaw)) verdict = "correct";
  if (/noto'?g'?ri/.test(verdictRaw)) verdict = "wrong";
  if (/qisman/.test(verdictRaw)) verdict = "partial";

  return {
    verdict,
    feedback: grab("IZOH") || text.slice(0, 600),
    tip: grab("TAVSIYA"),
  };
}

/* ── TOPSHIRIQ SHABLONLARI — QO'LDA tarjima qilingan ────────────────
   Bu matnlar loyihaning O'Z matnlari (dars kontenti emas), shuning
   uchun ular AI tarjimasidan O'TKAZILMAYDI.

   Sabab sinovda aniqlandi: buyruq gapni ("«X» bo'yicha bilishi kerak
   bo'lgan 2 narsani yozing") tarjimaga bergan model uni topshiriq deb
   tushunib, TARJIMA o'rniga unga JAVOB yozib qaytardi ("The two most
   important things are: 1. Terms of Employment 2. ..."). Qo'lda
   yozilgan tarjima bu xavfni butunlay yo'q qiladi, ustiga tez va
   tekin. Faqat o'zgaruvchi qism — bo'lim sarlavhasi — tarjima
   qilinadi, chunki u dars kontentidan keladi. */
const WRITTEN_TEMPLATES = {
  uz: [
    (x) => `«${x}» nima ekanligini o'z so'zlaringiz bilan tushuntiring.`,
    (x) => `«${x}» mavzusi nima uchun muhim? Misol bilan tushuntiring.`,
    (x) => `Do'stingizga «${x}» nimaligini oddiy so'zlar bilan qanday tushuntirardingiz?`,
    (x) => `«${x}» bo'yicha odam bilishi kerak bo'lgan eng muhim 2 narsani yozing.`,
  ],
  ru: [
    (x) => `Объясните своими словами, что такое «${x}».`,
    (x) => `Почему тема «${x}» важна? Объясните на примере.`,
    (x) => `Как бы вы простыми словами объяснили другу, что такое «${x}»?`,
    (x) => `Напишите две самые важные вещи, которые нужно знать по теме «${x}».`,
  ],
  en: [
    (x) => `Explain in your own words what «${x}» means.`,
    (x) => `Why is the topic «${x}» important? Explain with an example.`,
    (x) => `How would you explain «${x}» to a friend in simple words?`,
    (x) => `Write the two most important things one should know about «${x}».`,
  ],
};

/* Modda savoli — xuddi shu sababdan qo'lda tarjima qilingan */
const ARTICLE_QUESTION = {
  uz: (law, num) => `${law}ning ${num}-moddasi nimani tartibga soladi?`,
  ru: (law, num) => `Что регулирует статья ${num} документа «${law}»?`,
  en: (law, num) => `What does Article ${num} of «${law}» regulate?`,
};

/* ── Mavzuga oid qonun matnini olish (jim ishlaydi) ── */
async function lawContextFor(query, limit = 3, lawCode = null) {
  try {
    const { context } = await retrieveLegalContext(query, limit, lawCode);
    return context || "";
  } catch {
    return "";
  }
}

/* ═══════════════════════════════════════════════════════════════
   POST /api/lesson-practice/task — AI topshiriq beradi
   body: { type, lessonTitle, topicText? }
═══════════════════════════════════════════════════════════════ */
router.post("/task", userGuard, webLimitGuard, async (req, res) => {
  try {
    const {
      type,
      lessonTitle = "",
      topicText = "",
      sections = [],
      exclude = "",
    } = req.body || {};
    if (!TASK_TYPES.includes(type)) {
      return res.status(400).json({ error: "Noma'lum topshiriq turi" });
    }

    const lang = langOf(req);
    const user = await User.findById(req.authUser.id).select("plan planExpiresAt").lean();
    const isPro = isUserPro(user);
    const source = `${lessonTitle} ${topicText}`.slice(0, 600);
    // Dars mavzusiga mos kodeks — qidiruv shu doirada bo'ladi
    const lawCode = lawCodeFor(lessonTitle);

    // "article" turida topshiriqni AI o'ylab topmaydi — bazadagi HAQIQIY
    // moddadan olinadi, aks holda mavjud bo'lmagan modda so'ralishi mumkin.
    if (type === "article") {
      const { chunks } = await retrieveLegalContext(source, 5, lawCode).catch(
        () => ({ chunks: [] }),
      );
      // Oldingi savolda so'ralgan moddani chetlab o'tamiz — aks holda
      // ketma-ket bir xil modda tushib qolardi.
      const usedNums = String(exclude).match(/(\d+(?:-\d+)?)-modda/g) || [];
      const fresh = (chunks || []).filter(
        (c) => !usedNums.some((n) => n.startsWith(`${c.articleNumber}-`)),
      );
      const pool = fresh.length ? fresh : chunks || [];
      let picked = pool.length
        ? pool[Math.floor(Math.random() * pool.length)]
        : null;
      if (!picked) {
        // Zaxira: faqat SHU DARSNING kodeksidan tasodifiy modda.
        // Avval butun bazadan olinardi va oila darsida jinoyat kodeksi
        // moddasi chiqib qolishi mumkin edi.
        // `lawCode` massiv bo'lishi mumkin (bitta mavzu bir nechta
        // kodeksga tegishli) — u holda Mongoose filtri `$in` bo'lishi
        // kerak, aks holda `{ lawCode: ["IHQ","FK2"] }` hech narsa
        // topmasdi va zaxira modda umuman tanlanmay qolardi.
        const filter = lawCode
          ? { lawCode: Array.isArray(lawCode) ? { $in: lawCode } : lawCode }
          : {};
        const count = await LegalChunk.countDocuments(filter);
        if (count) {
          picked = await LegalChunk.findOne(filter)
            .skip(Math.floor(Math.random() * count))
            .select("lawName articleNumber title text")
            .lean();
        }
      }
      if (!picked) {
        return res.status(503).json({ error: "Qonun bazasi hozircha bo'sh" });
      }
      // Savol shakli — tayyor tarjimadan; qonun nomi va modda
      // sarlavhasi esa kontent bo'lgani uchun tarjima qilinadi.
      const [refName, refTitle] = await toUserLang(
        [picked.lawName, picked.title || ""],
        lang,
      );
      return res.json({
        type,
        question: ARTICLE_QUESTION[lang](refName, picked.articleNumber),
        reference: {
          lawName: refName,
          articleNumber: picked.articleNumber,
          title: refTitle,
        },
      });
    }

    // Yozma topshiriq AI tomonidan O'YLAB TOPILMAYDI — darsning o'z
    // bo'limlaridan tuziladi (AI qo'shma va darsdan murakkabroq savol
    // berib qo'yishi mumkin edi). Har safar BOSHQA bo'lim va BOSHQA
    // savol shakli tanlanadi — aks holda topshiriq takrorlanib qolardi.
    if (type === "written") {
      const picked = pickSection(sections, topicText || lessonTitle, exclude);
      // Shablon TASODIFIY tanlanadi, lekin indeks bo'yicha — shunda
      // tanlangan shakl uchala tilda ham bir xil bo'ladi.
      const ti = Math.floor(Math.random() * WRITTEN_TEMPLATES.uz.length);
      // Faqat BO'LIM SARLAVHASI tarjima qilinadi (u dars kontenti),
      // savol shaklining o'zi esa tayyor tarjimadan olinadi.
      const [heading] = await toUserLang([picked.heading], lang);
      const question = WRITTEN_TEMPLATES[lang][ti](heading);
      return res.json({
        type,
        question,
        // `context` — AI uchun ichki matn, foydalanuvchiga ko'rsatilmaydi,
        // shuning uchun tarjima qilinmaydi (behuda AI so'rovi bo'lardi).
        context: picked.text.slice(0, 1200),
      });
    }

    const picked = pickSection(sections, topicText || lessonTitle, exclude);
    const lawContext = await lawContextFor(source, 3, lawCode);
    const avoid = exclude
      ? `\n\nMUHIM: quyidagi savolni TAKRORLAMA, boshqa jihatni so'ra:\n"${String(exclude).slice(0, 200)}"`
      : "";
    const prompts = {
      qa: `Talaba "${lessonTitle}" darsini endi o'qib tugatdi. Unga shu mavzu bo'yicha BITTA sodda savol ber (masalan "Xodimning asosiy huquqlaridan 3 tasini ayting").
QOIDA: faqat BITTA savol, bitta jumla, boshlang'ich daraja. Savolni "va" bilan ikkiga bo'lma. Javobini YOZMA.
Savol AYNAN quyidagi bo'lim mazmunidan bo'lsin — «${picked.heading}»:\n${picked.text.slice(0, 700)}${avoid}`,
      speaking: `Talaba "${lessonTitle}" darsini o'qidi. Endi u OG'ZAKI javob beradi (mikrofon orqali).
Unga shu mavzu bo'yicha BITTA qisqa og'zaki savol ber — javob 2-3 jumlada aytilishi mumkin bo'lsin.
QOIDA: faqat BITTA savol, bitta jumla, sodda til. Javobini YOZMA.
Savol AYNAN quyidagi bo'lim mavzusidan bo'lsin — «${picked.heading}»:\n${picked.text.slice(0, 700)}${avoid}`,
      case: `Talaba "${lessonTitle}" darsini o'qidi. Unga O'zbekiston sharoitidagi BITTA qisqa amaliy vaziyat (case study) ber — 2-3 jumla, oxirida "Bu qonuniymi?" yoki "Xodim nima qilishi kerak?" kabi savol bilan tugasin.
Faqat vaziyat matnini yoz.
Vaziyat AYNAN quyidagi bo'lim mavzusiga oid bo'lsin — «${picked.heading}»:\n${picked.text.slice(0, 700)}${avoid}`,
    };

    const question = await askStructured({
      system: baseRules({ lessonContext: picked.text.slice(0, 1200), lawContext }),
      user: prompts[type],
      isPro,
    });

    const [genQ] = await toUserLang([question.slice(0, 900)], lang);
    return res.json({
      type,
      question: genQ,
      context: picked.text.slice(0, 1200),
    });
  } catch (err) {
    console.error("lesson-practice/task xato:", err.message);
    return res.status(500).json({ error: "Topshiriq tayyorlanmadi. Qayta urinib ko'ring." });
  }
});

/* ═══════════════════════════════════════════════════════════════
   POST /api/lesson-practice/check — javobni baholaydi
   body: { type, lessonTitle, question, answer, reference? }
═══════════════════════════════════════════════════════════════ */
router.post("/check", userGuard, webLimitGuard, async (req, res) => {
  try {
    const {
      type,
      lessonTitle = "",
      question = "",
      answer = "",
      reference,
      context = "",
    } = req.body || {};
    if (!TASK_TYPES.includes(type)) {
      return res.status(400).json({ error: "Noma'lum topshiriq turi" });
    }
    if (!String(answer).trim()) {
      return res.status(400).json({ error: "Javob bo'sh" });
    }

    const user = await User.findById(req.authUser.id).select("plan planExpiresAt").lean();
    const isPro = isUserPro(user);

    // Moddani yodlashda — aynan o'sha moddaning matni manba bo'ladi
    let lawContext = "";
    if (type === "article" && reference?.articleNumber) {
      const chunk = await LegalChunk.findOne({
        articleNumber: String(reference.articleNumber),
        lawName: reference.lawName,
      })
        .select("lawName articleNumber title text")
        .lean();
      if (chunk) {
        lawContext = `${chunk.lawName} ${chunk.articleNumber}-modda. ${chunk.title}\n${chunk.text}`;
      }
    }
    if (!lawContext) {
      lawContext = await lawContextFor(
        `${lessonTitle} ${question}`.slice(0, 600),
        3,
        lawCodeFor(lessonTitle),
      );
    }

    const taskLabel = {
      written: "yozma topshiriq (mavzuni o'z so'zlari bilan tushuntirish)",
      qa: "savolga javob",
      article: "qonun moddasi mazmunini eslash",
      case: "amaliy vaziyatga huquqiy yechim",
      speaking: "og'zaki javob (mikrofon orqali aytilgan, matnga aylantirilgan)",
    }[type];

    const raw = await askStructured({
      system: baseRules({ lessonContext: String(context).slice(0, 1200), lawContext }),
      user: `Talabaning ${taskLabel} javobini baholang.

TOPSHIRIQ: ${String(question).slice(0, 800)}

TALABA JAVOBI: ${String(answer).slice(0, 1200)}

${type === "speaking" ? "DIQQAT: javob OG'ZAKI aytilgan va avtomatik matnga aylantirilgan — imlo, tinish belgilari va so'z tartibidagi kichik xatolar uchun ball tushirmang, faqat MAZMUNGA qarang.\n\n" : ""}BAHOLASH QOIDASI:
- Faqat YUQORIDAGI SAVOLGA javob berilganini tekshiring. Savolda so'ralmagan narsani talab qilmang.
- Dars matnida yo'q tafsilot (modda raqami, muddat) uchun ball tushirmang.

BAHOLASH MEZONI (talaba BOSHLANG'ICH darajada, ekspert emas):
- "to'g'ri" — asosiy fikr to'g'ri aytilgan (so'zma-so'z ta'rif shart emas);
- "qisman to'g'ri" — asosiy fikr bor, lekin muhim jihat tushib qolgan;
- "noto'g'ri" — mavzuga aloqasiz yoki xato ma'lumot.
Talabani ortiqcha qattiq baholamang: savolga mazmunan javob bergan bo'lsa, "to'g'ri" deng.

Javobingizni ANIQ shu formatda yozing (boshqa hech narsa qo'shmang):
BAHO: to'g'ri | qisman to'g'ri | noto'g'ri
IZOH: (2-4 jumla — nimasi to'g'ri, nimasi yetishmayapti; tekshirilgan matnga tayanib)
TAVSIYA: (1-2 jumla — qanday yaxshilash yoki eslab qolish usuli)`,
      isPro,
    });

    const parsed = parseVerdict(raw);
    // `verdict` — ichki kod ("correct"/"partial"/"wrong"), tarjima
    // qilinmaydi. Faqat foydalanuvchiga ko'rinadigan matnlar o'giriladi.
    const [feedback, tip] = await toUserLang(
      [parsed.feedback || "", parsed.tip || ""],
      langOf(req),
    );
    return res.json({ ...parsed, feedback, tip, type });
  } catch (err) {
    console.error("lesson-practice/check xato:", err.message);
    return res.status(500).json({ error: "Baholab bo'lmadi. Qayta urinib ko'ring." });
  }
});

module.exports = router;

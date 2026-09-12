"use strict";
/**
 * ADMIN: Darslar (Lesson) va Testlar (Quiz) uchun to'liq CRUD.
 * Faqat admin panelidan (admin/ ilovasi) chaqiriladi — adminGuard bilan
 * himoyalangan. Bu yerda yaratilgan/tahrirlangan kontent darhol
 * routes/lessons.js va routes/tests.js orqali barcha ro'yxatdan o'tgan
 * foydalanuvchilarga ko'rinadi (published:true bo'lsa).
 */
const router = require("express").Router();
const multer = require("multer");
const { Lesson, Quiz } = require("../models");
const { adminGuard } = require("../middleware/auth");
const { importDocument } = require("../services/documentImport");
const {
  translateLesson,
  translateQuiz,
} = require("../services/contentI18n");
const { detectLang } = require("../services/translator");
const { parseTestPdf } = require("../services/documentImport/parsers/pdf/testQuestions");

/* Ruxsat etilgan o'quv darajalari — `LessonSchema.level` enum'i bilan
   bir xil. Bu yerda qayta yozilgani ataylab: noto'g'ri qiymat kelsa u
   MODEL VALIDATSIYASIGA yetib bormasdan, jimgina o'tkazib yuboriladi.
   Aks holda admin formasidagi bitta xato butun saqlashni 500 bilan
   yiqitardi — holbuki daraja darsning ikkinchi darajali maydoni. */
const LESSON_LEVELS = ["basic", "mid", "advanced"];

// PDF hech qachon diskka yozilmaydi — faqat xotirada parslanadi va
// zudlik bilan tashlab yuboriladi (pastdagi /lessons/import route'i).
const pdfUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Faqat PDF fayl yuklash mumkin"));
  },
});

/**
 * OLDINDAN TARJIMA (fon rejimida).
 *
 * Admin darsni/testni qaysi tilda kiritganidan qat'i nazar, kontent
 * qolgan IKKI tilga ham tarjima qilinadi va natija `Translation`
 * keshiga tushadi. Shu sabab foydalanuvchi tilni almashtirganda
 * tarjima allaqachon tayyor bo'ladi — kutish bo'lmaydi.
 *
 * ⚠️ Ataylab `await` QILINMAYDI: tarjima bir necha o'n soniya olishi
 * mumkin, admin esa "Saqlash" bosgach javobni DARHOL olishi kerak.
 * Xato bo'lsa ham saqlash muvaffaqiyatli hisoblanadi — tarjima
 * keyinroq, foydalanuvchi kontentni ochganda talab bo'yicha bajariladi
 * (routes/lessons.js, tests.js).
 */
function pretranslate(doc, kind) {
  if (!doc) return;
  const plain = typeof doc.toObject === "function" ? doc.toObject() : doc;
  const source = detectLang(plain.title || "");
  const targets = ["uz", "ru"].filter((l) => l !== source);
  const fn = kind === "quiz" ? translateQuiz : translateLesson;

  (async () => {
    for (const lang of targets) {
      try {
        await fn(plain, lang);
      } catch (err) {
        console.warn(
          `pretranslate(${kind} → ${lang}) xatosi:`,
          err.message,
        );
      }
    }
  })().catch(() => {});
}

function validateSections(sections) {
  if (!Array.isArray(sections)) return "sections massiv bo'lishi kerak";
  for (const sec of sections) {
    if (!sec?.heading?.trim()) return "Har bir bo'lim uchun sarlavha kerak";
    if (!sec?.html?.trim() && !sec?.text?.trim()) {
      return "Har bir bo'lim matni bo'sh bo'lmasin";
    }
  }
  return null;
}

function validateQuestions(questions) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return "Kamida 1 ta savol kerak";
  }
  for (const q of questions) {
    if (!q?.q?.trim()) return "Savol matni bo'sh bo'lmasin";
    if (!Array.isArray(q.options) || q.options.length < 2) {
      return "Har bir savolda kamida 2 ta variant kerak";
    }
    if (
      typeof q.correct !== "number" ||
      q.correct < 0 ||
      q.correct >= q.options.length
    ) {
      return "To'g'ri javob indeksi variantlar doirasida bo'lishi kerak";
    }
  }
  return null;
}

/* ══════════════════ DARSLAR (Lesson) ══════════════════ */

/* GET /api/admin/content/lessons — barchasi (nashr qilinmagan ham) */
router.get("/lessons", adminGuard, async (req, res) => {
  try {
    const lessons = await Lesson.find().sort({ order: 1, createdAt: 1 }).lean();
    res.json({ lessons });
  } catch (err) {
    console.error("admin lessons list xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/admin/content/lessons/import-pdf — PDF'dan dars tuzilishini
   (sarlavha + bo'limlar) chiqarib oladi. HECH NARSA SAQLAMAYDI — admin
   natijani ko'rib chiqib, so'ng oddiy POST/PUT /lessons orqali
   saqlaydi. Original PDF javobga qo'shilmaydi va hech qayerga
   yozilmaydi — faqat xotirada parslanib, so'rov tugashi bilan
   tashlab yuboriladi. */
router.post(
  "/lessons/import-pdf",
  adminGuard,
  pdfUpload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "PDF fayl yuklanmadi" });
      const result = await importDocument({
        buffer: req.file.buffer,
        mimetype: req.file.mimetype,
        filename: req.file.originalname,
      });
      res.json(result);
    } catch (err) {
      console.error("PDF import xato:", err.message);
      res.status(422).json({ error: err.message || "PDF ni qayta ishlashda xatolik" });
    }
  },
);

/* POST /api/admin/content/lessons — yangi dars qo'shish */
router.post("/lessons", adminGuard, async (req, res) => {
  try {
    const {
      title,
      desc,
      videoUrl,
      sections,
      order,
      published,
      sourceType,
      importMeta,
      category,
      level,
    } = req.body;
    if (!title?.trim()) {
      return res.status(400).json({ error: "Sarlavha kerak" });
    }
    const sectionsErr = validateSections(sections || []);
    if (sectionsErr) return res.status(400).json({ error: sectionsErr });

    const lesson = await Lesson.create({
      title: title.trim(),
      desc: desc?.trim() || "",
      videoUrl: videoUrl?.trim() || "",
      sections: sections || [],
      sourceType: sourceType || "manual",
      importMeta: importMeta || null,
      order: Number(order) || 0,
      published: published !== false,
      // Modul ko'rsatilmasa dars "boshqa" guruhida ko'rinadi — ya'ni
      // yo'qolib qolmaydi, admin keyin tegishli modulga o'tkazadi.
      category: category?.trim() || "",
      ...(LESSON_LEVELS.includes(level) ? { level } : {}),
    });
    pretranslate(lesson, "lesson");
    res.status(201).json({ lesson });
  } catch (err) {
    console.error("admin lesson create xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* PUT /api/admin/content/lessons/:id — tahrirlash */
router.put("/lessons/:id", adminGuard, async (req, res) => {
  try {
    const {
      title,
      desc,
      videoUrl,
      sections,
      order,
      published,
      sourceType,
      importMeta,
      category,
      level,
    } = req.body;
    if (!title?.trim()) {
      return res.status(400).json({ error: "Sarlavha kerak" });
    }
    const sectionsErr = validateSections(sections || []);
    if (sectionsErr) return res.status(400).json({ error: sectionsErr });

    const update = {
      title: title.trim(),
      desc: desc?.trim() || "",
      videoUrl: videoUrl?.trim() || "",
      sections: sections || [],
      order: Number(order) || 0,
      published: published !== false,
    };
    // sourceType/importMeta faqat yuborilgan bo'lsa yangilanadi — aks
    // holda mavjud darsning oldingi manba ma'lumoti saqlanib qoladi.
    if (sourceType) update.sourceType = sourceType;
    if (importMeta) update.importMeta = importMeta;
    /* Modul/daraja ham FAQAT yuborilganda yangilanadi. Aks holda bu
       maydonlarni bilmaydigan eski admin formasi darsni saqlaganda
       uning modulini TOZALAB yuborardi — ya'ni 100+ darsdan biri
       guruhidan chiqib "boshqa" ga tushib qolardi. */
    if (typeof category === "string") update.category = category.trim();
    if (LESSON_LEVELS.includes(level)) update.level = level;

    const lesson = await Lesson.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });
    if (!lesson) return res.status(404).json({ error: "Dars topilmadi" });
    pretranslate(lesson, "lesson");
    res.json({ lesson });
  } catch (err) {
    console.error("admin lesson update xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* DELETE /api/admin/content/lessons/:id */
router.delete("/lessons/:id", adminGuard, async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("admin lesson delete xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ══════════════════ TESTLAR (Quiz) ══════════════════ */

/* GET /api/admin/content/tests — barchasi (nashr qilinmagan ham) */
router.get("/tests", adminGuard, async (req, res) => {
  try {
    const tests = await Quiz.find().sort({ order: 1, createdAt: 1 }).lean();
    res.json({ tests });
  } catch (err) {
    console.error("admin tests list xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/admin/content/tests/import-pdf — PDF'dagi savol/variant/
   javob matnini tahlil qilib, "qancha savol bo'lsa shuncha" savol
   ro'yxatini qaytaradi. HECH NARSA SAQLAMAYDI — admin natijani ko'rib
   chiqib, keyin oddiy POST/PUT /tests orqali saqlaydi (kerak bo'lsa
   qo'lda tahrirlab). Original PDF hech qayerga yozilmaydi. */
router.post(
  "/tests/import-pdf",
  adminGuard,
  pdfUpload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "PDF fayl yuklanmadi" });
      const warnings = [];
      const result = await parseTestPdf(req.file.buffer, warnings);
      res.json({ ...result, warnings });
    } catch (err) {
      console.error("test PDF import xato:", err.message);
      res.status(422).json({ error: err.message || "PDF ni qayta ishlashda xatolik" });
    }
  },
);

/* POST /api/admin/content/tests — yangi test qo'shish */
router.post("/tests", adminGuard, async (req, res) => {
  try {
    const { title, desc, questions, order, published } = req.body;
    if (!title?.trim()) {
      return res.status(400).json({ error: "Sarlavha kerak" });
    }
    const qErr = validateQuestions(questions || []);
    if (qErr) return res.status(400).json({ error: qErr });

    const test = await Quiz.create({
      title: title.trim(),
      desc: desc?.trim() || "",
      questions: questions || [],
      order: Number(order) || 0,
      published: published !== false,
    });
    pretranslate(test, "quiz");
    res.status(201).json({ test });
  } catch (err) {
    console.error("admin test create xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* PUT /api/admin/content/tests/:id — tahrirlash */
router.put("/tests/:id", adminGuard, async (req, res) => {
  try {
    const { title, desc, questions, order, published } = req.body;
    if (!title?.trim()) {
      return res.status(400).json({ error: "Sarlavha kerak" });
    }
    const qErr = validateQuestions(questions || []);
    if (qErr) return res.status(400).json({ error: qErr });

    const test = await Quiz.findByIdAndUpdate(
      req.params.id,
      {
        title: title.trim(),
        desc: desc?.trim() || "",
        questions: questions || [],
        order: Number(order) || 0,
        published: published !== false,
      },
      { new: true, runValidators: true },
    );
    if (!test) return res.status(404).json({ error: "Test topilmadi" });
    pretranslate(test, "quiz");
    res.json({ test });
  } catch (err) {
    console.error("admin test update xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* DELETE /api/admin/content/tests/:id */
router.delete("/tests/:id", adminGuard, async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("admin test delete xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;

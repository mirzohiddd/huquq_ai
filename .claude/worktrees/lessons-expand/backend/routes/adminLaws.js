"use strict";
/**
 * ADMIN — QONUN HUJJATLARI (kodekslar) boshqaruvi.
 *
 * Admin bu yerdan: kodeks qo'shadi, tahrirlaydi, o'chiradi, vaqtincha
 * o'chirib qo'yadi (`enabled`) va lex.uz'dan qayta yuklashni ishga
 * tushiradi.
 *
 * ⚠️ ASOSIY XAVFSIZLIK CHORASI — `docId`/`url` TEKSHIRILADI.
 * lex.uz manzili noto'g'ri bo'lsa (eskirgan ID, 404, boshqa sayt),
 * yuklash paytida hech narsa topilmaydi va admin sababini bilmay
 * qoladi. Shuning uchun saqlashdan OLDIN manzil ochilib, sarlavhasi
 * o'qiladi va moddalari borligi tasdiqlanadi (`POST /verify` yoki
 * saqlashda avtomatik).
 */
const router = require("express").Router();
const { LawSource, LegalChunk } = require("../models");
const { adminGuard } = require("../middleware/auth");
const { invalidateCache, syncFromConfig } = require("../services/lawRegistry");
const { parseArticles } = require("../scripts/ingestLaws");

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  "Accept-Language": "uz,ru;q=0.9,en;q=0.8",
};

/* lex.uz manzilidan hujjat ID sini ajratib oladi ("-111453").
   Admin to'liq havola ham, faqat ID ham yozishi mumkin. */
function extractDocId(input = "") {
  const m = String(input).match(/(-?\d{4,})/);
  return m ? m[1] : "";
}

function normalizeUrl(input = "") {
  const s = String(input).trim();
  if (/^https?:\/\//i.test(s)) return s;
  const id = extractDocId(s);
  return id ? `https://lex.uz/docs/${id}` : "";
}

/**
 * Manzilni HAQIQATAN tekshiradi: sahifa ochiladimi, sarlavhasi nima,
 * nechta modda topildi. Saqlashdan oldin ham, `POST /verify` uchun ham
 * ishlatiladi.
 */
async function verifySource(url) {
  const resp = await fetch(url, {
    headers: FETCH_HEADERS,
    signal: AbortSignal.timeout(30000),
  });
  if (!resp.ok) throw new Error(`Manzil ochilmadi (HTTP ${resp.status})`);

  const html = await resp.text();
  if (/Страница не найдена|404\. Страница/i.test(html)) {
    throw new Error(
      "Hujjat topilmadi (404) — lex.uz ID eskirgan yoki noto'g'ri",
    );
  }

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = (titleMatch?.[1] || "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const articles = parseArticles(html);
  if (!articles.length) {
    throw new Error(
      "Sahifada birorta modda topilmadi — bu hujjat moddalarga bo'linmagan bo'lishi mumkin",
    );
  }

  return {
    title,
    articleCount: articles.length,
    firstArticle: articles[0]?.articleNumber || "",
    lastArticle: articles[articles.length - 1]?.articleNumber || "",
  };
}

/* ── GET /api/admin/laws — ro'yxat (o'chirilganlari bilan) ── */
router.get("/", adminGuard, async (req, res) => {
  try {
    const laws = await LawSource.find().sort({ order: 1, code: 1 }).lean();

    // Har bir hujjat bo'yicha bazadagi HAQIQIY modda soni
    const counts = await LegalChunk.aggregate([
      { $group: { _id: "$lawCode", count: { $sum: 1 } } },
    ]);
    const countMap = Object.fromEntries(counts.map((c) => [c._id, c.count]));

    res.json({
      laws: laws.map((l) => ({ ...l, articleCount: countMap[l.code] || 0 })),
    });
  } catch (err) {
    console.error("admin laws list xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── POST /api/admin/laws/verify — saqlamasdan manzilni tekshirish ── */
router.post("/verify", adminGuard, async (req, res) => {
  try {
    const url = normalizeUrl(req.body?.url || req.body?.docId || "");
    if (!url) return res.status(400).json({ error: "Manzil yoki ID kerak" });
    const info = await verifySource(url);
    res.json({ ok: true, url, docId: extractDocId(url), ...info });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

/* ── POST /api/admin/laws — yangi hujjat ── */
router.post("/", adminGuard, async (req, res) => {
  try {
    const { code, name, nameRu, order, enabled, showInLibrary } =
      req.body || {};
    if (!code?.trim()) return res.status(400).json({ error: "Kod kerak" });
    if (!name?.trim()) return res.status(400).json({ error: "Nomi kerak" });

    const url = normalizeUrl(req.body?.url || req.body?.docId || "");
    if (!url) {
      return res.status(400).json({ error: "lex.uz manzili yoki ID kerak" });
    }

    const upper = code.trim().toUpperCase();
    if (await LawSource.findOne({ code: upper })) {
      return res.status(409).json({ error: `"${upper}" kodi allaqachon mavjud` });
    }

    // Saqlashdan OLDIN manzil haqiqatan ishlashini tekshiramiz —
    // aks holda bazaga yaroqsiz yozuv tushib, yuklash jim yiqilardi.
    let info;
    try {
      info = await verifySource(url);
    } catch (err) {
      return res.status(400).json({ error: `Manzil tekshiruvi: ${err.message}` });
    }

    const law = await LawSource.create({
      code: upper,
      name: name.trim(),
      nameRu: nameRu?.trim() || "",
      docId: extractDocId(url),
      url,
      /* lex.uz'dagi RASMIY rus varianti (ixtiyoriy).
         Kiritilsa, kodeksning rus tilidagi matni AI bilan tarjima
         qilinmasdan to'g'ridan-to'g'ri manbadan olinadi — bu ham
         aniqroq (rasmiy huquqiy tarjima), ham tezroq. Bo'sh
         qoldirilsa tizim AI tarjimasiga qaytadi. */
      urlRu: normalizeUrl(req.body?.urlRu || "") || "",
      enabled: enabled !== false,
      showInLibrary: showInLibrary !== false,
      order: Number(order) || 999,
    });
    invalidateCache();
    res.status(201).json({ law, verified: info });
  } catch (err) {
    console.error("admin law create xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── PUT /api/admin/laws/:id — tahrirlash ── */
router.put("/:id", adminGuard, async (req, res) => {
  try {
    const existing = await LawSource.findById(req.params.id);
    if (!existing) return res.status(404).json({ error: "Hujjat topilmadi" });

    const { code, name, nameRu, order, enabled, showInLibrary } =
      req.body || {};
    const update = {};

    if (name?.trim()) update.name = name.trim();
    if (nameRu !== undefined) update.nameRu = String(nameRu).trim();
    if (order !== undefined) update.order = Number(order) || 999;
    if (enabled !== undefined) update.enabled = enabled !== false;
    if (showInLibrary !== undefined)
      update.showInLibrary = showInLibrary !== false;

    // Rus manbasi (ixtiyoriy). Bo'sh satr yuborilsa — o'chiriladi.
    if (req.body?.urlRu !== undefined) {
      update.urlRu = normalizeUrl(String(req.body.urlRu)) || "";
    }

    // Manzil o'zgargan bo'lsa — qayta tekshiriladi
    const newUrl = normalizeUrl(req.body?.url || req.body?.docId || "");
    if (newUrl && newUrl !== existing.url) {
      try {
        await verifySource(newUrl);
      } catch (err) {
        return res
          .status(400)
          .json({ error: `Manzil tekshiruvi: ${err.message}` });
      }
      update.url = newUrl;
      update.docId = extractDocId(newUrl);
    }

    // Kod o'zgarsa — shu kodeksning BARCHA moddalari ham ko'chiriladi,
    // aks holda ular "yetim" bo'lib qolib, kutubxonada ko'rinmay
    // qolardi (LegalChunk.lawCode → LawSource.code bog'lanishi).
    let movedChunks = 0;
    const upper = code?.trim().toUpperCase();
    if (upper && upper !== existing.code) {
      if (await LawSource.findOne({ code: upper })) {
        return res
          .status(409)
          .json({ error: `"${upper}" kodi allaqachon mavjud` });
      }
      const r = await LegalChunk.updateMany(
        { lawCode: existing.code },
        { $set: { lawCode: upper } },
      );
      movedChunks = r.modifiedCount || 0;
      update.code = upper;
    }

    const law = await LawSource.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });
    invalidateCache();
    res.json({ law, movedChunks });
  } catch (err) {
    console.error("admin law update xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── DELETE /api/admin/laws/:id ──
   `?withArticles=1` — moddalarini ham o'chiradi. Standart holatda
   moddalar QOLADI: kodeksni ro'yxatdan olib tashlash bilan minglab
   modda va ularning embeddinglarini yo'q qilish boshqa-boshqa
   qarorlar, tasodifan bajarilib qolmasligi kerak. */
router.delete("/:id", adminGuard, async (req, res) => {
  try {
    const law = await LawSource.findById(req.params.id);
    if (!law) return res.status(404).json({ error: "Hujjat topilmadi" });

    let removedArticles = 0;
    if (req.query.withArticles === "1" || req.query.withArticles === "true") {
      const r = await LegalChunk.deleteMany({ lawCode: law.code });
      removedArticles = r.deletedCount || 0;
    }
    await law.deleteOne();
    invalidateCache();
    res.json({ success: true, removedArticles });
  } catch (err) {
    console.error("admin law delete xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── POST /api/admin/laws/:id/ingest — lex.uz'dan qayta yuklash ──
   Yuklash uzoq davom etadi (yuzlab modda + embedding), shuning uchun
   javob DARHOL qaytadi va ish FON rejimida davom etadi. Natija
   `lastIngestAt` / `lastIngestStats` / `lastIngestError` maydonlariga
   yoziladi va admin ro'yxatni yangilaganda ko'rinadi. */
router.post("/:id/ingest", adminGuard, async (req, res) => {
  try {
    const law = await LawSource.findById(req.params.id);
    if (!law) return res.status(404).json({ error: "Hujjat topilmadi" });

    const { ingestAllLaws } = require("../scripts/ingestLaws");
    res.json({
      started: true,
      code: law.code,
      message:
        "Yuklash fon rejimida boshlandi. Natija bir necha daqiqadan keyin ro'yxatda ko'rinadi.",
    });

    // Javob yuborilgandan KEYIN ishga tushadi
    (async () => {
      try {
        const [result] = await ingestAllLaws(law.code);
        await LawSource.findByIdAndUpdate(law._id, {
          lastIngestAt: new Date(),
          lastIngestStats: result || null,
          lastIngestError: result?.error || "",
        });
        console.log(`⚖️  ${law.code} yuklandi:`, result);
      } catch (err) {
        await LawSource.findByIdAndUpdate(law._id, {
          lastIngestAt: new Date(),
          lastIngestError: err.message,
        }).catch(() => {});
        console.error(`⚖️  ${law.code} yuklashda xato:`, err.message);
      }
    })();
  } catch (err) {
    console.error("admin law ingest xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ── POST /api/admin/laws/sync — config/laws.js dagi yangi hujjatlarni
   bazaga qo'shish. Admin O'CHIRGAN hujjatlar qaytarilmaydi (faqat
   bazada UMUMAN yo'qlari qo'shiladi). ── */
router.post("/sync", adminGuard, async (_req, res) => {
  try {
    const r = await syncFromConfig();
    res.json(r);
  } catch (err) {
    console.error("admin law sync xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;

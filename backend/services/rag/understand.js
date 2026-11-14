"use strict";
/**
 * SO'ROVNI TUSHUNISH — niyat, normallashtirish, davom savoli (2026-11-14).
 *
 * ILDIZ SABAB (foydalanuvchi shikoyati): qidiruv foydalanuvchining XOM
 * matni bo'yicha ishlardi. Odam "gap to'htatib mashinani tortib qo'ydi"
 * deb yozadi, qonunda esa "transport vositasini ushlab turish" deyilgan —
 * so'zlar mos kelmagani uchun kerakli modda topilmasdi. "135 modda" kabi
 * davom savoli esa oldingi suhbatga umuman bog'lanmasdi.
 *
 * Bu modul qidiruvdan OLDIN savolni tahlil qiladi:
 *   standalone — tarixni hisobga olgan, imlosi tuzatilgan MUSTAQIL savol;
 *   keywords   — qonun matnida uchraydigan rasmiy atamalar (qidiruv uchun);
 *   codes      — ehtimoliy kodekslar; articles — so'ralgan modda raqamlari;
 *   followUp   — oldingi suhbatning davomimi.
 * Ikki qatlam: (1) qoidalar (lexicon.js) — har doim, bepul; (2) LLM —
 * tayyor bo'lsa. LLM yiqilsa qoidalar natijasi qoladi — chat to'xtamaydi.
 *
 * ⚠️ Bu yerda HUQUQIY FAKT yaratilmaydi: natija faqat QIDIRUV so'rovi.
 * Modda raqami faqat foydalanuvchi yozganidan olinadi (LLM qo'shgani olinmaydi).
 */
const crypto = require("crypto");
const { lexNormalize } = require("./lexicon");
const { parseArticleNumbers, parseLawCodes } = require("../articleLookup");
const { freeChat, freeAiReady } = require("../llm/freeChat");

const CODES = ["KONS", "MK", "OK", "FK", "FK2", "JK", "JPK", "JIK", "MJK", "FPK", "IPK", "MSK", "SK", "BJK", "BK", "YK", "UJK", "SHK", "HK", "SYK", "IHQ"];
const TIMEOUT_MS = 7000;
const cache = new Map(); // kalit → natija (jarayon xotirasida, 300 ta)

const SYSTEM = `Sen O'zbekiston qonunchiligi bo'yicha qidiruv tizimining SO'ROV TAHLILCHISISAN. Javob yozmaysan — faqat foydalanuvchi xabarini qidiruvga tayyorlaysan.
Xabarda imlo xatosi, sheva, ruscha so'zlar bo'lishi mumkin ("gap/gai" = yo'l harakati xavfsizligi xodimi, "bayon noma" = bayonnoma, "tortib qo'ydi" = olib qo'ydi/ushlab turdi).
FAQAT JSON qaytar:
{"standalone":"suhbat tarixini hisobga olib, mustaqil tushunarli qilib QAYTA yozilgan savol (adabiy o'zbek tilida, lotin; xabar ruscha bo'lsa ham o'zbekcha)",
"event":"nima bo'lgani — 1 jumla","issue":"huquqiy masala — 1 jumla","area":"huquq sohasi",
"codes":["eng ehtimoliy 1-3 kodeks kodi"],
"keywords":["QONUN MATNIDA uchraydigan 5-10 rasmiy atama yoki ibora, o'zbek lotin"],
"articles":["faqat FOYDALANUVCHI yozgan modda raqamlari"],
"followUp":true|false,"legal":true|false}
Kodeks kodlari: KONS Konstitutsiya · MK Mehnat · OK Oila · FK, FK2 Fuqarolik (FK2: shartnomalar, meros, zarar) · JK Jinoyat · JPK Jinoyat-protsessual · JIK Jinoyat-ijroiya · MJK Ma'muriy javobgarlik (jarima, yo'l harakati, bayonnoma) · FPK Fuqarolik protsessual (da'vo, sud) · IPK Iqtisodiy protsessual · MSK Ma'muriy sud ishlari · SK Soliq · BJK Bojxona · BK Budjet · YK Yer · UJK Uy-joy · SHK Shaharsozlik · HK Havo · SYK Saylov · IHQ Iste'molchilar huquqlari.
QOIDALAR:
- Modda raqamini O'YLAB TOPMA. keywords ichida raqam bo'lmasin.
- keywords — kundalik so'z emas, qonun tili: "mashinani tortib qo'ydi" → "transport vositasini ushlab turish", "ishdan haydashdi" → "mehnat shartnomasini bekor qilish".
- Xabar qisqa bo'lsa yoki faqat modda raqami bo'lsa ("135 modda", "muddati qancha?") — bu OLDINGI mavzuning davomi: followUp=true, standalone'ga oldingi vaziyatni qo'sh, codes'ni tarixdagi mavzudan aniqla.
- Huquqqa aloqasi yo'q xabar: legal=false.`;

const clip = (t, n) => String(t || "").replace(/\s+/g, " ").trim().slice(0, n);

/** Faqat raqamdan iborat xabar ("135", "135-m") — modda so'rovi deb olinadi. */
function bareNumber(msg) {
  const m = String(msg).trim().match(/^(\d{1,4}(?:-\d{1,3})?)\s*[-–]?\s*(?:m\.?|modda\S*|ст\S*|стать\S*)?\s*[?.!]*$/i);
  return m ? [m[1].replace(/^0+(?=\d)/, "")] : [];
}

function rules({ msg, history, codes }) {
  const lex = lexNormalize(msg);
  const articles = [...new Set([...parseArticleNumbers(msg), ...bareNumber(msg)])];
  const explicit = parseLawCodes(msg);
  const prevUser = (history || []).filter((m) => m.role === "user").slice(-2).map((m) => clip(m.content, 400));
  const short = msg.trim().split(/\s+/).length < 7;
  const followUp = prevUser.length > 0 && (short || (articles.length > 0 && !explicit.length));
  const prevLex = followUp ? lexNormalize(prevUser.join(" ")) : { text: "", terms: [] };
  return {
    standalone: followUp ? `${prevLex.text} ${lex.text}`.trim() : lex.text,
    keywords: [...new Set([...lex.terms, ...prevLex.terms])],
    codes: explicit.length ? explicit : [].concat(codes || []).filter(Boolean),
    explicitCodes: explicit,
    articles,
    followUp,
    legal: true,
    event: "",
    issue: "",
    area: "",
    via: "rules",
  };
}

function parseJson(text) {
  const raw = String(text || "");
  const s = raw.indexOf("{");
  const e = raw.lastIndexOf("}");
  if (s < 0 || e <= s) return null;
  try {
    return JSON.parse(raw.slice(s, e + 1));
  } catch (_) {
    return null;
  }
}

const strList = (v, max, len) => (Array.isArray(v) ? v : []).map((x) => clip(x, len)).filter(Boolean).slice(0, max);

/**
 * @param {{ msg: string, history?: object[], lang?: string, codes?: string|string[]|null, useLlm?: boolean }} p
 * @returns {Promise<object>} — yuqoridagi tuzilma (+ via: "rules" | "llm")
 */
async function understand({ msg, history = [], lang = "uz", codes = null, useLlm = true }) {
  const base = rules({ msg, history, codes });
  // Aniq so'rov ("JPK 46-modda nima haqida?") — LLM kerak emas: modda to'g'ridan-to'g'ri olinadi
  const exact = base.articles.length > 0 && base.explicitCodes.length > 0;
  if (!useLlm || exact || !freeAiReady()) return base;

  const turns = (history || [])
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-4)
    .map((m) => `${m.role === "user" ? "FOYDALANUVCHI" : "YORDAMCHI"}: ${clip(m.content, m.role === "user" ? 400 : 500)}`);
  const user = `${turns.length ? `SUHBAT TARIXI:\n${turns.join("\n")}\n\n` : ""}XABAR: ${clip(msg, 1200)}`;
  /* Tarixsiz yalang'och "135 modda" — LLM kodeksni TAXMIN qilmasin (o'lchangan:
     o'zi MJK deb tanlardi). Qoidalar natijasi qaytadi → qaysi qonun ekani so'raladi. */
  const bare = base.articles.length && !turns.length && msg.replace(/\d+|modda\p{L}*|стать\p{L}*|\bst\b|ст\.?|[\s\-.,?!№]/giu, "").length < 4;
  if (bare) return base;
  const key = crypto.createHash("sha1").update(user).digest("hex");
  if (cache.has(key)) return cache.get(key);

  try {
    const out = await freeChat({
      messages: [{ role: "system", content: SYSTEM }, { role: "user", content: user }],
      maxOutputTokens: 500,
      thinking: 0,
      temperature: 0,
      json: true,
      timeoutMs: TIMEOUT_MS,
      deadline: Date.now() + TIMEOUT_MS + 1000,
    });
    const j = parseJson(out.text);
    if (!j || !clip(j.standalone, 10)) return base;
    const llmCodes = strList(j.codes, 3, 6).map((c) => c.toUpperCase()).filter((c) => CODES.includes(c));
    const res = {
      ...base,
      standalone: clip(j.standalone, 600),
      event: clip(j.event, 300),
      issue: clip(j.issue, 300),
      area: clip(j.area, 80),
      keywords: [...new Set([...strList(j.keywords, 10, 80).filter((k) => !/\d/.test(k)), ...base.keywords])],
      // Savolda kodeks aniq aytilgan bo'lsa — o'sha ustun; aks holda LLM taxmini + kategoriya
      codes: base.explicitCodes.length ? base.explicitCodes : [...new Set([...llmCodes, ...base.codes])],
      followUp: base.followUp || j.followUp === true,
      legal: j.legal !== false,
      via: "llm",
      model: out.model,
    };
    cache.set(key, res);
    if (cache.size > 300) cache.delete(cache.keys().next().value);
    return res;
  } catch (err) {
    console.warn(`[RAG] so'rov tahlili LLM'siz (${String(err.message).slice(0, 80)})`);
    return base;
  }
}

module.exports = { understand, CODES };

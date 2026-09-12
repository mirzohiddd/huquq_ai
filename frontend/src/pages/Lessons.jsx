import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Library as LibraryIcon,
  Clock,
  Scale,
  Check,
  Circle,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Download,
  Star,
  ListChecks,
  Trophy,
  Layers,
  Target,
  MessageCircleQuestion,
  Flag,
  RotateCcw,
  Zap,
  PartyPopper,
  XCircle,
  Search,
  Lock,
} from "lucide-react";
import { useLang } from "../context/LangContext";
import { useChatPanel } from "../context/ChatPanelContext";
import api from "../utils/api";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import LessonPractice from "./LessonPractice";
import { scrollToTop, scrollToElement } from "../utils/smoothScroll";
import s from "./Lessons.module.css";
import {
  detectTopic,
  detectLaw,
  plainText,
  readingMinutes,
  difficultyOf,
  splitInsights,
  DID_YOU_KNOW,
  CAUTIONS,
  TOPIC_EMOJI,
} from "./lessonContent";
import { groupByModule, moduleOf } from "./lessonModules";
import {
  XP_PER_LESSON,
  QUIZ_SIZE,
  getAllState,
  getLessonState,
  saveLessonState,
  getXp,
  addXp,
  pullProgress,
  completeLessonRemote,
  lessonStep,
  buildQuestionBank,
  pickQuestions,
} from "./lessonProgress";
import { scopedKey, purgeSharedKeys } from "../utils/accountScope";

/* Qulflangan dars uchun o'qish vaqti.
   `readingMinutes` SO'ZLARNI sanaydi, lekin qulflangan darsning matni
   umuman yuborilmaydi — faqat belgilar soni ma'lum. O'zbek tilida
   o'rtacha so'z ~6 belgi, o'qish tezligi ~180 so'z/daqiqa,
   ya'ni daqiqasiga ~1080 belgi. */
function minutesFromChars(chars) {
  return Math.max(1, Math.round((chars || 0) / 1080));
}

// YouTube havolasini iframe embed manzilga aylantiradi. Boshqa
// (to'g'ridan-to'g'ri video fayl) manzillar <video> tegi bilan ko'rsatiladi.
function toYoutubeEmbed(url) {
  const m = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/,
  );
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

/**
 * "Bu joyni tushuntirib ber" — bo'lim matnini AI'ga oddiy tilda
 * tushuntirish uchun tayyor savol yasaydi. Matn qisqartiriladi
 * (token/xarajat nazorati uchun), dars va bo'lim nomi kontekst sifatida
 * beriladi — shunda AI mavzudan chetga chiqmaydi.
 */
function buildExplainPrompt(lessonTitle, section) {
  const body = section.text.slice(0, 900);
  return (
    `Quyidagi dars bo'limini oddiy va tushunarli tilda, kundalik misollar bilan tushuntirib bering. ` +
    `Huquqiy atamalarni sodda so'zlar bilan izohlang.\n\n` +
    `Dars: ${lessonTitle}\nBo'lim: ${section.heading}\n\n${body}`
  );
}

/* Bir sahifadagi darslar soni. 9 ta ataylab tanlangan: grid uch
   ustunli, ya'ni to'liq 3×3 blok hosil bo'ladi va oxirgi qator
   yarim bo'sh qolmaydi. */
const LESSONS_PER_PAGE = 9;

/* ── DARS ICHIDAGI BIR QADAMDAGI MAVZULAR SONI ──
   Dars 50 ta mavzudan iborat va ularning HAMMASINI bitta sahifaga
   chiqarish mumkin emas — sahifa cheksiz uzayib ketardi. Shuning
   uchun dars 4 tadan mavzuga bo'linadi: o'quvchi 4 ta mavzuni
   o'qiydi, so'ng "Keyingisi" bilan navbatdagi to'rttasiga o'tadi. */
const TOPICS_PER_STEP = 4;

/* ⚠️ "Saqlangan darslar" ham HISOBGA bog'langan — avval umumiy kalit
   edi va bitta qurilmadagi boshqa hisob egasi begona odamning saqlagan
   darslarini ko'rardi. Batafsil: `utils/accountScope.js`. */
const SAVED_BASE = "savedLessons";
const savedKey = () => scopedKey(SAVED_BASE);
purgeSharedKeys([SAVED_BASE]);

function readSaved() {
  try {
    return JSON.parse(localStorage.getItem(savedKey()) || "{}");
  } catch {
    return {};
  }
}

/**
 * Darslar — admin panel orqali qo'shilgan mavzular bo'yicha huquq asoslari.
 *
 * TUGALLANISH TIZIMI (Duolingo uslubida):
 *   📖 Darsni o'qish → 📝 Testdan o'tish → ✅ Dars tugallandi
 * Dars SCROLL qilingani uchun tugallanmaydi — oxiridagi qisqa test
 * bexato yechilishi shart. Darslar QULFLANMAYDI: foydalanuvchi istalgan
 * darsni istalgan tartibda ocha oladi, test faqat "tugallandi" belgisi
 * va XP beradi.
 */
export default function Lessons() {
  const { t, lang } = useLang();
  const { openChat } = useChatPanel();
  const navigate = useNavigate();
  const [lessons, setLessons] = useState(null);
  // Tarif holati — nechta dars ochiq ekanini ko'rsatuvchi banner uchun
  const [planInfo, setPlanInfo] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [active, setActive] = useState(null);
  const [state, setState] = useState({ read: [], completed: false, burned: [] });
  const [allState, setAllState] = useState(() => getAllState());
  const [xp, setXp] = useState(0);
  const [saved, setSaved] = useState({});
  const sectionRefs = useRef({});

  /* ── RO'YXATNI KO'RIB CHIQISH HOLATI ──
     Darslar soni 130 dan oshgach yassi ro'yxat ishlamay qoldi:
     sahifa juda uzun bo'lib, scroll cheksiz cho'zilardi. Yechim uch
     qismli — QIDIRUV, MODUL filtri va SAHIFALASH. */
  const [query, setQuery] = useState("");
  const [activeModule, setActiveModule] = useState("all");
  const [page, setPage] = useState(1);

  /* ── DARS ICHIDAGI QADAM ──
     Dars 50 tagacha mavzudan iborat bo'lishi mumkin. Ularning
     hammasini bir sahifada ko'rsatish o'quvchini bosib ketadi va
     sahifa cheksiz scroll bo'lib qoladi. Shuning uchun dars
     `TOPICS_PER_STEP` tadan mavzuga bo'linadi.

     0 dan boshlanadi va dars almashganda nolga qaytariladi. */
  const [topicStep, setTopicStep] = useState(0);

  // `lang` — til o'zgarganda kontent qayta so'raladi. Tarjima serverda
  // bajariladi (api.js tilni har bir so'rovga avtomatik qo'shadi), shu
  // sabab bu yerda faqat qayta yuklash kifoya.
  useEffect(() => {
    api
      .get("/lessons")
      .then(({ data }) => {
        setLessons(data.lessons || []);
        setPlanInfo(data.plan || null);
      })
      .catch(() => setLessons([]));
    api
      .get("/tests")
      .then(({ data }) => setQuizzes(data.tests || data.quizzes || []))
      .catch(() => setQuizzes([]));
    setSaved(readSaved());
    setXp(getXp());

    /* Serverdagi progressni tortib olamiz — shunda BOSHQA QURILMADA
       yoki TELEGRAM BOTDA tugatilgan darslar bu yerda ham
       "tugallandi" bo'lib ko'rinadi. Mehmon yoki tarmoq yo'q bo'lsa
       `pullProgress` jim `null` qaytaradi va kesh bilan davom etamiz. */
    pullProgress().then((remote) => {
      if (!remote) return;
      setAllState(getAllState());
      setXp(getXp());
    });
  }, [lang]);

  /* ── Dars ochish ──
     Ikki bosqichli: avval ro'yxatdagi nusxa DARHOL ko'rsatiladi (sahifa
     bo'sh turmasin), so'ng to'liq tarjima qilingan nusxa so'ralib,
     o'rniga qo'yiladi.

     Nima uchun: darslar RO'YXATIDA faqat sarlavha va tavsif tarjima
     qilinadi — 20 ta darsning barcha bo'lim matnini tarjima qilish
     ro'yxat sahifasini juda sekinlashtirardi. Bo'lim matnlari aynan
     shu yerda, dars ochilganda tarjima qilinadi (`GET /lessons/:id`).
     O'zbek tilida bu so'rov ham deyarli darhol qaytadi — tarjima
     umuman bajarilmaydi (manba tili bir xil). */
  /* Qulflangan kontent bosilganda — Landing Page'dagi Pricing bo'limiga.
     Sabab: tariflar ATAYLAB Profil oynasida emas, hamma ko'radigan joyda
     turadi, shuning uchun "ochish" yo'li ham o'sha yerga olib boradi.
     Home sahifasi hash bo'yicha kerakli bo'limga o'zi scroll qiladi. */
  const goToPricing = useCallback(() => navigate("/#pricing"), [navigate]);

  /* ⚠️ Qulf tekshiruvi AYNAN shu yerda turadi (kartochkada emas):
     dars yana ikki joydan ochiladi — "keyingi dars" tugmasi va
     "aloqador darslar" ro'yxati. Tekshiruv faqat kartochkada bo'lsa,
     o'sha ikki yo'l orqali qulflangan dars ochilib ketardi (matni
     bo'sh holda — ya'ni buzuq sahifa ko'rinardi). */
  const openLesson = useCallback(
    (lesson) => {
      if (lesson?.locked) return goToPricing();
      setActive(lesson);
      setState(getLessonState(lesson._id));
      setTopicStep(0);
      sectionRefs.current = {};
      scrollToTop();
    },
    [goToPricing],
  );

  /* To'liq (tarjima qilingan) dars matnini olib kelish.
     Dars ochilganda VA til o'zgarganda ishlaydi — shuning uchun ochiq
     dars ham til almashtirilganda o'sha zahoti yangi tilga o'tadi. */
  const activeId = active?._id;
  useEffect(() => {
    if (!activeId) return;
    let cancelled = false;
    api
      .get(`/lessons/${activeId}`)
      .then(({ data }) => {
        if (cancelled || !data?.lesson) return;
        // Foydalanuvchi shu orada boshqa darsga o'tgan bo'lishi mumkin —
        // eski so'rov javobi yangi darsni almashtirib yubormasligi kerak
        setActive((cur) =>
          cur && cur._id === data.lesson._id ? data.lesson : cur,
        );
      })
      .catch(() => {
        // Tarjima kelmasa ro'yxatdagi nusxa qoladi — dars baribir ochiq
      });
    return () => {
      cancelled = true;
    };
  }, [activeId, lang]);

  const closeLesson = useCallback(() => {
    setActive(null);
    setAllState(getAllState());
    scrollToTop();
  }, []);

  /* ── Bo'lim ko'rildi (faqat 1-BOSQICH ko'rsatkichi — tugallanish EMAS) ── */
  const markRead = useCallback(
    (index) => {
      setState((prev) => {
        if (prev.read.includes(index)) return prev;
        const next = { ...prev, read: [...prev.read, index] };
        if (active) saveLessonState(active._id, { read: next.read });
        return next;
      });
    },
    [active],
  );

  useEffect(() => {
    if (!active) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.index);
            if (!Number.isNaN(idx)) markRead(idx);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" },
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
    /* `step` — qadam almashganda DOM'dagi bo'limlar butunlay
       yangilanadi. Kuzatuvchi qayta ulanmasa eski (olib tashlangan)
       elementlarni kuzatib qolardi va yangi mavzular hech qachon
       "o'qildi" deb belgilanmasdi. */
  }, [active, markRead, topicStep]);

  /* ── Dars bo'yicha hisoblangan ma'lumot ── */
  const meta = useMemo(() => {
    if (!active) return null;
    const sections = active.sections.map((sec, i) => {
      const text = plainText(sec);
      /* Dars muallifi yozgan HAQIQIY maydonlar ustun. Ular bo'lmasa
         (eski darslar, PDF importi) — avvalgidek matnni jumlalarga
         bo'lib chiqariladi.

         ⚠️ Nima uchun muhim: avval HAMMA dars uchun `splitInsights`
         ishlatilardi va matn qisqa bo'lgani sabab "asosiy fikrlar"
         matnning O'ZINI takrorlardi — o'quvchiga hech narsa
         qo'shmasdi. */
      const auto = splitInsights(text);
      const keyPoints = sec.keyPoints?.length ? sec.keyPoints : auto.points;
      return {
        ...sec,
        index: i,
        text,
        tip: sec.example || auto.tip,
        isRealExample: !!sec.example,
        points: keyPoints,
        warning: sec.warning || "",
        minutes: readingMinutes(text + (sec.example || "") + keyPoints.join(" ")),
        anchorId: sec.anchor || `bolim-${i}`,
      };
    });
    const allText = sections.map((x) => x.text).join(" ");
    const topic = detectTopic(active.title);
    return {
      sections,
      topic,
      law: detectLaw(allText, topic),
      minutes: readingMinutes(allText),
      difficulty: difficultyOf(allText.length),
      emoji: TOPIC_EMOJI[topic] || TOPIC_EMOJI.general,
      fact: DID_YOU_KNOW[topic] || DID_YOU_KNOW.general,
      caution: CAUTIONS[topic] || CAUTIONS.general,
    };
  }, [active]);

  /* ── QADAMGA BO'LISH ──
     `meta` bo'lmasa (ro'yxat ko'rinishi) hisob-kitob qilinmaydi, lekin
     qiymatlar baribir aniqlanadi — pastdagi JSX ularga murojaat
     qilishidan oldin `active` tekshiruvi bor. */
  const totalSteps = meta
    ? Math.max(1, Math.ceil(meta.sections.length / TOPICS_PER_STEP))
    : 1;
  /* Qadam raqami har doim mavjud oraliqda ushlab turiladi: til
     almashganda dars matni qayta yuklanadi va bo'limlar soni
     o'zgarishi mumkin — bunda joriy qadam ro'yxatdan tashqarida
     qolib, ekran bo'sh ko'rinardi. */
  const safeStep = Math.min(topicStep, totalSteps - 1);
  const stepStart = safeStep * TOPICS_PER_STEP;
  const stepSections = meta
    ? meta.sections.slice(stepStart, stepStart + TOPICS_PER_STEP)
    : [];
  const isLastStep = safeStep === totalSteps - 1;

  /* Qadam almashganda tepaga ko'tarilamiz — aks holda foydalanuvchi
     sahifa o'rtasida qolib, yangi mavzular tepasini ko'rmasdi. */
  const goToStep = useCallback((next) => {
    setTopicStep(next);
    scrollToTop();
  }, []);

  /* Yon paneldagi mundarija: bo'lim BOSHQA qadamda bo'lishi mumkin,
     shuning uchun avval o'sha qadamga o'tamiz, so'ng elementga
     siljiymiz. Siljish `requestAnimationFrame` da — element DOM'ga
     hali qo'yilmagan bo'lishi mumkin. */
  const jumpToSection = useCallback(
    (index, anchorId) => {
      const target = Math.floor(index / TOPICS_PER_STEP);
      setTopicStep(target);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToElement(`#${anchorId}`));
      });
    },
    [],
  );

  /* ── Savollar banki (bazadagi haqiqiy testlardan) ── */
  const bank = useMemo(() => {
    if (!active) return { primary: [], secondary: [] };
    return buildQuestionBank(quizzes, detectTopic, detectTopic(active.title));
  }, [active, quizzes]);

  const relatedLessons = useMemo(
    () => (lessons || []).filter((l) => l._id !== active?._id).slice(0, 3),
    [lessons, active],
  );

  const nextLesson = useMemo(() => {
    if (!lessons || !active) return null;
    const i = lessons.findIndex((l) => l._id === active._id);
    return i >= 0 && i + 1 < lessons.length ? lessons[i + 1] : null;
  }, [lessons, active]);

  const totalSections = meta?.sections.length || 0;
  const step = lessonStep(state, totalSections);
  // Dars 100% faqat testdan o'tgach bo'ladi; o'qish eng ko'pi 50%.
  const percent = state.completed
    ? 100
    : totalSections
      ? Math.round((state.read.length / totalSections) * 50)
      : 0;

  /* ── Test muvaffaqiyatli tugadi ── */
  /* ⚠️ XP'ni endi SERVER hisoblaydi.
     Sabab: dars Telegram botda allaqachon tugatilgan bo'lishi mumkin —
     u holda saytda XP QAYTA berilmasligi kerak. Buni faqat server
     biladi, chunki progress ikkala kanal uchun bitta joyda saqlanadi. */
  async function handlePassed() {
    const res = await completeLessonRemote(active._id);
    setState(getLessonState(active._id));
    setAllState(getAllState());
    if (typeof res?.totalXp === "number") setXp(res.totalXp);
    else setXp(getXp());
  }

  function handleBurn(burned, attempts) {
    const next = saveLessonState(active._id, { burned, attempts });
    setState(next);
  }

  function continueLearning() {
    const target = meta?.sections.find((sec) => !state.read.includes(sec.index));
    scrollToElement((target || meta?.sections[0])?.anchorId);
  }

  function downloadNotes() {
    if (!active || !meta) return;
    const body = [
      active.title,
      "=".repeat(active.title.length),
      "",
      active.desc || "",
      "",
      ...meta.sections.flatMap((sec) => [
        `${sec.index + 1}. ${sec.heading}`,
        "-".repeat(40),
        sec.text,
        "",
      ]),
      `${t.lesson_did_you_know}: ${meta.fact}`,
      "",
      `${t.lesson_warning}: ${meta.caution}`,
      "",
      "— Huquq AI",
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([body], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `${active.title.replace(/[^\wЀ-ӿ' -]+/g, "")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function toggleSave() {
    if (!active) return;
    const next = { ...saved };
    if (next[active._id]) delete next[active._id];
    else next[active._id] = true;
    setSaved(next);
    try {
      localStorage.setItem(savedKey(), JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }

  /* ── Modullar va filtrlangan ro'yxat ────────────────────────────
     `moduleGroups` — TO'LIQ ro'yxat bo'yicha hisoblanadi, chunki
     modul tugmalaridagi dars soni qidiruvga qarab o'zgarmasligi
     kerak: aks holda tugmalar yozayotganda "sakrab" turardi. */
  const moduleGroups = useMemo(
    () => groupByModule(lessons || []),
    [lessons],
  );

  const filtered = useMemo(() => {
    const list = lessons || [];
    const q = query.trim().toLowerCase();
    return list.filter((l) => {
      if (activeModule !== "all") {
        const id = moduleOf(l.category).id;
        if (id !== activeModule) return false;
      }
      if (!q) return true;
      return (
        (l.title || "").toLowerCase().includes(q) ||
        (l.desc || "").toLowerCase().includes(q)
      );
    });
  }, [lessons, query, activeModule]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / LESSONS_PER_PAGE));
  /* Sahifa raqami har doim mavjud oraliqda ushlab turiladi. Bu
     kerak: filtr o'zgarganda joriy sahifa ro'yxatdan tashqarida
     qolib, ekran bo'sh ko'rinishi mumkin edi. */
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (safePage - 1) * LESSONS_PER_PAGE,
    safePage * LESSONS_PER_PAGE,
  );

  /* Filtr yoki qidiruv o'zgarsa birinchi sahifaga qaytamiz. */
  useEffect(() => {
    setPage(1);
  }, [query, activeModule]);

  function goToPage(next) {
    setPage(next);
    /* Sahifa almashganda tepaga ko'tarilamiz — aks holda foydalanuvchi
       ro'yxat o'rtasida qolib, yangi kartalarni ko'rmasdi. */
    scrollToTop();
  }

  /* Bitta dars kartasi. Alohida funksiyaga chiqarilgan, chunki u
     endi ikki joyda kerak bo'lishi mumkin va ro'yxat mantig'i
     JSX ichida o'qilishi qiyinlashgan edi. */
  function renderCard(lesson, i) {
    /* ⚠️ Qulflangan darsda `sections` BO'SH keladi (server matnni umuman
       yubormaydi). Shuning uchun bo'lim soni va o'qish vaqti server
       bergan `sectionCount`/`contentChars` dan olinadi — aks holda
       kartochkada "0 bo'lim, 0 daqiqa" ko'rinardi. */
    const locked = !!lesson.locked;
    const text = (lesson.sections || []).map(plainText).join(" ");
    const sectionCount = locked
      ? lesson.sectionCount || 0
      : (lesson.sections || []).length;
    const charCount = locked ? lesson.contentChars || 0 : text.length;
    const topic = detectTopic(lesson.title);
    const st = allState[lesson._id] || { read: [], completed: false };
    const pct =
      locked || !sectionCount
        ? 0
        : st.completed
          ? 100
          : Math.round((st.read.length / sectionCount) * 50);
    // Qulf tekshiruvi `openLesson` ICHIDA — bu yerda takrorlanmaydi
    const open = () => openLesson(lesson);

    return (
      <Reveal
        as="article"
        key={lesson._id}
        delay={i * 0.05}
        className={`${s.card} ${st.completed ? s.cardDone : ""} ${locked ? s.cardLocked : ""}`}
        role="button"
        tabIndex={0}
        aria-disabled={locked || undefined}
        onClick={open}
        onKeyDown={(e) => e.key === "Enter" && open()}
      >
        <div className={s.cardTop}>
          <span className={s.cardEmoji} aria-hidden="true">
            {TOPIC_EMOJI[topic] || TOPIC_EMOJI.general}
          </span>
          {locked ? (
            <span className={s.lockBadge}>
              <Lock size={12} /> {t.plan_locked_badge}
            </span>
          ) : st.completed ? (
            <span className={s.doneBadge}>
              <CheckCircle2 size={13} /> {t.lesson_badge_done}
            </span>
          ) : (
            <span
              className={`${s.badge} ${s[`badge_${difficultyOf(charCount)}`]}`}
            >
              {t[`lesson_diff_${difficultyOf(charCount)}`]}
            </span>
          )}
        </div>

        <h2 className={s.cardTitle}>{lesson.title}</h2>
        <p className={s.cardDesc}>{lesson.desc}</p>

        <div className={s.cardMeta}>
          <span>
            <Layers size={13} /> {sectionCount} {t.lessons_sections}
          </span>
          <span>
            <Clock size={13} />{" "}
            {locked ? minutesFromChars(charCount) : readingMinutes(text)}{" "}
            {t.lesson_min}
          </span>
        </div>

        {pct > 0 && (
          <div className={s.cardProgress}>
            <div className={s.cardProgressBar}>
              <span style={{ width: `${pct}%` }} />
            </div>
            <em>{pct}%</em>
          </div>
        )}

        <span className={`${s.cardCta} ${locked ? s.cardCtaLocked : ""}`}>
          {locked ? (
            <>
              <Lock size={14} /> {t.plan_unlock_cta}
            </>
          ) : (
            <>
              {st.completed
                ? t.lesson_review
                : pct > 0
                  ? t.lesson_continue
                  : t.lesson_start}
              <ArrowRight size={15} />
            </>
          )}
        </span>
      </Reveal>
    );
  }

  /* ═══════════════════ RO'YXAT KO'RINISHI ═══════════════════ */
  if (!active) {
    const completedCount = (lessons || []).filter(
      (l) => allState[l._id]?.completed,
    ).length;
    const lockedCount = (lessons || []).filter((l) => l.locked).length;

    return (
      <div className={s.page}>
        <Seo title={t.seo_lessons_title} noindex />

        {/* ⚠️ Bu o'ram ATAYLAB `.wrap` EMAS: `.wrap` kenglikni 1200px ga
            cheklaydi va hero ekran chetiga yetib bormasdi. Kontent
            baribir 1200px chizig'ida qoladi (`.listHero` padding'i). */}
        <div className={s.heroOuter}>
          <header className={s.listHero}>
            {/* ⚠️ CSS bezaklari (aylanalar, uzuq chiziqlar, uchqunlar)
                bu yerda YO'Q — ular rasmning O'ZIDA chizilgan.
                Qo'shilsa ustma-ust tushib, ikki marta ko'rinardi.
                Faqat nuqtali to'r qoldirildi: u rasmda yo'q va chap
                yuqori burchakni to'ldiradi. */}
            <span className={s.heroDots} aria-hidden="true" />

            <div className={s.listHeroBody}>
              <span className={s.eyebrow}>
                <GraduationCap size={14} /> {t.feat_lessons_title}
              </span>

              {/* Sarlavha uch qismga bo'lingan: o'rtadagi so'z oltin
                  rangda ajratiladi. Bitta satr sifatida saqlansa,
                  urg'uni ajratish uchun matnni so'z bo'yicha kesishga
                  to'g'ri kelardi va bu boshqa tilda buzilardi. */}
              <h1 className={s.listTitle}>
                {t.lessons_hero_lead}{" "}
                <span className={s.titleAccent}>{t.lessons_hero_accent}</span>
                {t.lessons_hero_tail ? ` ${t.lessons_hero_tail}` : ""}
              </h1>

              <p className={s.listSub}>{t.lessons_sub}</p>

              {lessons?.length > 0 && (
                <div className={s.statsRow}>
                  <span className={s.xpPill}>
                    <span className={s.pillIcon}>
                      <Zap size={16} />
                    </span>
                    <span className={s.pillText}>
                      <strong>{xp} XP</strong>
                      <small>{t.lessons_xp_label}</small>
                    </span>
                  </span>
                  <span className={s.statPill}>
                    <span className={s.pillIcon}>
                      <Trophy size={15} />
                    </span>
                    <span className={s.pillText}>
                      <strong>
                        {completedCount} / {lessons.length}{" "}
                        {t.lesson_completed_count}
                      </strong>
                      <small>{t.lessons_progress_label}</small>
                    </span>
                  </span>
                </div>
              )}
            </div>

            {/* Illyustratsiya — foydalanuvchi bergan haqiqiy rasm.
                Testlar sahifasidagi kabi qayta ishlangan: tashqi oq
                fon shaffof qilindi (aks holda krem hero ustida oq
                to'rtburchak ko'rinardi) va 1272px → 760px, WebP+PNG:
                1180 KB → 84 KB. */}
            <div className={s.listHeroArt}>
              <picture>
                <source srcSet="/lessons-hero.webp" type="image/webp" />
                <img
                  src="/lessons-hero.png"
                  alt=""
                  width="760"
                  height="739"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </header>
        </div>

        <main className={s.wrap}>
          {lessons === null ? (
            <p className={s.stateText}>{t.library_loading}</p>
          ) : lessons.length === 0 ? (
            <p className={s.stateText}>{t.library_empty}</p>
          ) : (
            <>
              {/* ── TARIF BANNERI ──
                  Bepul tarifda nechta dars ochiq ekani RO'YXAT tepasida
                  aytiladi. Aks holda foydalanuvchi qulflangan kartani
                  bosgandagina buni bilib olardi. */}
              {lockedCount > 0 && (
                <div className={s.planBanner}>
                  <span className={s.planBannerIcon}>
                    <Lock size={16} />
                  </span>
                  <div className={s.planBannerText}>
                    <strong>{t.plan_lessons_locked_title}</strong>
                    <span>
                      {(t.plan_lessons_locked_sub || "")
                        .replace(
                          "{plan}",
                          t[`tier_${planInfo?.tier || "free"}`] || "",
                        )
                        .replace("{open}", planInfo?.lessonLimit ?? 0)
                        .replace("{locked}", lockedCount)}
                    </span>
                  </div>
                  <button
                    type="button"
                    className={s.planBannerBtn}
                    onClick={goToPricing}
                  >
                    {t.plan_unlock_cta}
                  </button>
                </div>
              )}

              {/* ── QIDIRUV VA MODUL FILTRI ──
                  130 ta dars uchun yassi ro'yxat yaramaydi: kerakli
                  mavzuni topish uchun aylanib chiqish real emas.
                  Qidiruv sarlavha va tavsif bo'yicha ishlaydi. */}
              <div className={s.browseBar}>
                <label className={s.searchBox}>
                  <Search size={16} aria-hidden="true" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t.lessons_search_ph}
                    aria-label={t.lessons_search_ph}
                  />
                  {query && (
                    <button
                      type="button"
                      className={s.searchClear}
                      onClick={() => setQuery("")}
                      aria-label={t.lessons_clear}
                    >
                      <XCircle size={15} />
                    </button>
                  )}
                </label>

                <div className={s.modTabs} role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeModule === "all"}
                    className={`${s.modTab} ${activeModule === "all" ? s.modTabOn : ""}`}
                    onClick={() => setActiveModule("all")}
                  >
                    {t.lessons_all_modules}
                    <em>{lessons.length}</em>
                  </button>
                  {moduleGroups.map(({ id, Icon, lessons: items }) => (
                    <button
                      key={id}
                      type="button"
                      role="tab"
                      aria-selected={activeModule === id}
                      className={`${s.modTab} ${activeModule === id ? s.modTabOn : ""}`}
                      onClick={() => setActiveModule(id)}
                    >
                      <Icon size={14} aria-hidden="true" />
                      {t[`lesson_mod_${id}`] || id}
                      <em>{items.length}</em>
                    </button>
                  ))}
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className={s.emptyState}>
                  <p className={s.emptyTitle}>{t.lessons_nothing_found}</p>
                  <p className={s.emptyHint}>{t.lessons_nothing_hint}</p>
                  <button
                    type="button"
                    className={s.emptyBtn}
                    onClick={() => {
                      setQuery("");
                      setActiveModule("all");
                    }}
                  >
                    {t.lessons_clear}
                  </button>
                </div>
              ) : (
                <>
                  <p className={s.resultCount}>
                    {filtered.length} {t.lessons_found}
                  </p>

                  <div className={s.grid}>{pageItems.map(renderCard)}</div>

                  {/* ── SAHIFALASH ──
                      Bir sahifada 9 ta dars (3×3 grid). Barcha
                      darslarni bir ustunga chiqarish sahifani juda
                      uzun qilib, scroll cheksiz cho'zilardi. */}
                  {totalPages > 1 && (
                    <nav className={s.pager} aria-label={t.lessons_total}>
                      <button
                        type="button"
                        className={s.pagerBtn}
                        onClick={() => goToPage(safePage - 1)}
                        disabled={safePage === 1}
                      >
                        <ArrowLeft size={15} /> {t.lesson_prev}
                      </button>

                      <span className={s.pagerInfo}>
                        <strong>{safePage}</strong> / {totalPages}
                      </span>

                      <button
                        type="button"
                        className={s.pagerBtn}
                        onClick={() => goToPage(safePage + 1)}
                        disabled={safePage === totalPages}
                      >
                        {t.lesson_next} <ArrowRight size={15} />
                      </button>
                    </nav>
                  )}
                </>
              )}
            </>
          )}
        </main>
      </div>
    );
  }

  /* ═══════════════════ DARS KO'RINISHI ═══════════════════ */
  return (
    <div className={s.page}>
      <Seo title={active.title} noindex />

      <header className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroMain}>
            <button type="button" className={s.backBtn} onClick={closeLesson}>
              <ArrowLeft size={15} /> {t.lessons_back}
            </button>
            <h1 className={s.heroTitle}>
              <span className={s.heroEmoji} aria-hidden="true">
                {meta.emoji}
              </span>
              {active.title}
            </h1>
            <p className={s.heroSub}>{active.desc}</p>
            <div className={s.heroMeta}>
              <span className={s.metaPill}>
                <Clock size={13} /> {meta.minutes} {t.lesson_min}
              </span>
              <span className={`${s.metaPill} ${s[`badge_${meta.difficulty}`]}`}>
                {t[`lesson_diff_${meta.difficulty}`]}
              </span>
              <span className={s.metaPill}>
                <Scale size={13} /> {meta.law}
              </span>
              <span className={s.xpPill}>
                <Zap size={13} /> {xp} XP
              </span>
            </div>
          </div>

          <aside className={s.progressCard}>
            <span className={s.progressLabel}>{t.lesson_progress_title}</span>
            <strong className={s.progressPct}>{percent}%</strong>
            <div className={s.progressTrack}>
              <span className={s.progressFill} style={{ width: `${percent}%` }} />
            </div>

            {/* 📖 → 📝 → ✅ bosqichlari */}
            <ol className={s.stepper}>
              {[
                { n: 1, icon: "📖", label: t.lesson_step_read },
                { n: 2, icon: "📝", label: t.lesson_step_quiz },
                { n: 3, icon: "✅", label: t.lesson_step_done },
              ].map((x) => (
                <li
                  key={x.n}
                  className={
                    step > x.n ? s.stepDone : step === x.n ? s.stepActive : ""
                  }
                >
                  <span className={s.stepIcon} aria-hidden="true">
                    {x.icon}
                  </span>
                  <span className={s.stepLabel}>{x.label}</span>
                </li>
              ))}
            </ol>

            {!state.completed && (
              <button type="button" className={s.primaryBtn} onClick={continueLearning}>
                {percent === 0 ? t.lesson_start : t.lesson_continue}
              </button>
            )}
          </aside>
        </div>
      </header>

      <div className={`${s.wrap} ${s.layout}`}>
        <main className={s.content}>
          {/* ── Dars kirish ekrani: maqsad va nimalarni o'rganasiz ── */}
          <Reveal as="section" className={s.introCard}>
            <div className={s.introHead}>
              <span className={s.introIcon}>
                <Target size={20} />
              </span>
              <div>
                <span className={s.introLabel}>{t.lesson_objective}</span>
                <h2>{active.desc || active.title}</h2>
              </div>
            </div>

            <div className={s.introFacts}>
              <span>
                <Clock size={13} /> {meta.minutes} {t.lesson_min}
              </span>
              <span>
                <Layers size={13} /> {meta.sections.length} {t.lessons_sections}
              </span>
              <span className={s[`badge_${meta.difficulty}`]}>
                {t[`lesson_diff_${meta.difficulty}`]}
              </span>
              <span className={s.lawChip}>
                <Scale size={12} /> {meta.law}
              </span>
            </div>

            <p className={s.introOutcomeTitle}>{t.lesson_outcomes}</p>
            <ul className={s.introOutcomes}>
              {meta.sections.map((sec) => (
                <li key={sec.anchorId}>
                  <CheckCircle2 size={15} />
                  <span>
                    {(t.lesson_outcome_tpl || "{topic}").replace(
                      "{topic}",
                      sec.heading,
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {active.videoUrl && (
            <div className={s.videoCard}>
              {toYoutubeEmbed(active.videoUrl) ? (
                <iframe
                  src={toYoutubeEmbed(active.videoUrl)}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={active.videoUrl} controls />
              )}
            </div>
          )}

          {/* ⚠️ Faqat JORIY QADAMdagi mavzular chiziladi (4 tadan).
              `sec.index` — mavzuning DARSDAGI haqiqiy raqami; qadam
              ichidagi o'rni EMAS. Aks holda 2-qadamda mavzular yana
              "1, 2, 3, 4" deb raqamlanardi va "o'qildi" belgisi ham
              noto'g'ri bo'limga tushardi. */}
          {stepSections.map((sec) => {
            const i = sec.index;
            const isLast = i === meta.sections.length - 1;
            return (
              <Reveal
                as="section"
                key={sec.anchorId}
                id={sec.anchorId}
                className={s.sectionCard}
                delay={0.04}
              >
                {/* Ko'rinish kuzatuvchisi uchun nishon — bo'lim ekranga
                    kirganda "o'qildi" deb belgilanadi (1-bosqich). */}
                <div
                  ref={(el) => {
                    sectionRefs.current[i] = el;
                  }}
                  data-index={i}
                  aria-hidden="true"
                />

                <div className={s.sectionHead}>
                  <span className={s.sectionNum}>{i + 1}</span>
                  <div className={s.sectionHeadText}>
                    <h2>{sec.heading}</h2>
                    <div className={s.sectionMeta}>
                      <span>
                        <Clock size={12} /> {sec.minutes} {t.lesson_min}
                      </span>
                      <span className={s.lawChip}>
                        <Scale size={12} /> {meta.law}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={s.divider} />

                {sec.html ? (
                  <div
                    className={s.body}
                    dangerouslySetInnerHTML={{ __html: sec.html }}
                  />
                ) : (
                  <p className={s.body}>{sec.text}</p>
                )}

                {/* AI yordamchi: shu bo'limni oddiy tilda tushuntiradi */}
                <button
                  type="button"
                  className={s.explainBtn}
                  onClick={() => openChat(buildExplainPrompt(active.title, sec))}
                >
                  <MessageCircleQuestion size={15} />
                  {t.lesson_explain_btn}
                </button>

                {sec.tip && (
                  <div
                    className={`${s.infoBox} ${sec.isRealExample ? s.exampleBox : ""}`}
                  >
                    <span className={s.boxIcon}>
                      <Lightbulb size={16} />
                    </span>
                    <div>
                      {/* Haqiqiy misol bo'lsa — "Hayotdan misol",
                          jumladan ajratilgan bo'lsa — "Maslahat" */}
                      <strong>
                        {sec.isRealExample ? t.lesson_example : t.lesson_tip}
                      </strong>
                      <p>{sec.tip}</p>
                    </div>
                  </div>
                )}

                {sec.points.length > 0 && (
                  <div className={s.keyPoints}>
                    <span className={s.keyTitle}>
                      <ListChecks size={15} /> {t.lesson_key_points}
                    </span>
                    <ul>
                      {sec.points.map((p, k) => (
                        <li key={k}>
                          <Check size={14} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ── QONUN NIMA DEYDI ──
                    Bo'lim qaysi moddaga asoslanganini KO'RSATADI va
                    haqiqiy matnni keltiradi. Matn dars ichida
                    saqlanmaydi — u bazadan jonli olinadi
                    (routes/lessons.js), shuning uchun qonun tahriri
                    o'zgarsa iqtibos ham o'z-o'zidan yangilanadi. */}
                {sec.lawQuotes?.length > 0 && (
                  <div className={s.lawBox}>
                    <span className={s.lawBoxTitle}>
                      <Scale size={15} /> {t.lesson_law_says}
                    </span>
                    {sec.lawQuotes.map((q) => (
                      <div key={`${q.code}-${q.articleNumber}`} className={s.lawQuote}>
                        <div className={s.lawQuoteHead}>
                          <span className={s.lawQuoteNum}>
                            {q.articleNumber}-{t.const_article}
                          </span>
                          {/* Konstitutsiya moddalarida SARLAVHA YO'Q — bu
                              normal holat (Konstitutsiyada modda nomlari
                              bo'lmaydi). Bo'sh <span> chiqarmaymiz, aks
                              holda ortiqcha bo'shliq qolardi. */}
                          {q.title && (
                            <span className={s.lawQuoteName}>{q.title}</span>
                          )}
                        </div>
                        <p className={s.lawQuoteText}>{q.text}</p>
                        {/* ⚠️ Konstitutsiya KUTUBXONADA YO'Q (LawSource'da
                            `showInLibrary: false`) — unga alohida sahifa
                            ajratilgan. Shuning uchun havola kodeksga qarab
                            yo'naltiriladi, aks holda foydalanuvchi
                            kutubxonaga borib hujjatni topa olmasdi. */}
                        <Link
                          to={q.code === "KONS" ? "/constitution" : "/library"}
                          className={s.lawQuoteLink}
                        >
                          {q.lawName} · {t.lesson_law_full} →
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bo'limga xos ogohlantirish — ko'p uchraydigan xato */}
                {sec.warning && (
                  <div className={s.warnBox}>
                    <span className={s.boxIcon}>
                      <AlertTriangle size={16} />
                    </span>
                    <div>
                      <strong>{t.lesson_warning}</strong>
                      <p>{sec.warning}</p>
                    </div>
                  </div>
                )}

                {isLast && !sec.warning && (
                  <>
                    <div className={s.warnBox}>
                      <span className={s.boxIcon}>
                        <AlertTriangle size={16} />
                      </span>
                      <div>
                        <strong>{t.lesson_warning}</strong>
                        <p>{meta.caution}</p>
                      </div>
                    </div>
                    <div className={s.factBox}>
                      <span className={s.factLabel}>{t.lesson_did_you_know}</span>
                      <p>{meta.fact}</p>
                    </div>
                  </>
                )}
              </Reveal>
            );
          })}

          {/* ── MAVZULAR ORASIDA O'TISH ──
              Dars 4 tadan mavzuga bo'lingan. Tugma faqat dars bir
              qadamdan uzun bo'lsa ko'rinadi: qisqa darslarda (4 va
              undan kam mavzu) u ortiqcha bo'lardi. */}
          {totalSteps > 1 && (
            <nav className={s.stepNav} aria-label={t.lesson_nav_title}>
              <button
                type="button"
                className={s.stepBtn}
                onClick={() => goToStep(safeStep - 1)}
                disabled={safeStep === 0}
              >
                <ArrowLeft size={15} /> {t.lesson_prev}
              </button>

              <span className={s.stepInfo}>
                <strong>{stepStart + 1}</strong>–
                {Math.min(stepStart + TOPICS_PER_STEP, meta.sections.length)}
                {" / "}
                {meta.sections.length}
              </span>

              <button
                type="button"
                className={`${s.stepBtn} ${s.stepBtnMain}`}
                onClick={() => goToStep(safeStep + 1)}
                disabled={isLastStep}
              >
                {t.lesson_next} <ArrowRight size={15} />
              </button>
            </nav>
          )}

          {/* ⚠️ AMALIYOT, TUGATISH TESTI VA XULOSA — FAQAT OXIRGI QADAMDA.
              Aks holda foydalanuvchi 50 ta mavzuning atigi 4 tasini
              o'qib turib darsni "tugallangan" deb belgilay olardi. */}
          {isLastStep && (
            <>
              {/* ── AI amaliyot: yozma / savol-javob / modda / vaziyat ── */}
              <LessonPractice
                t={t}
                lesson={active}
                sections={meta.sections}
                onXp={(amount) => setXp(addXp(amount))}
              />

              {/* ── Darsni tugatish: test orqali ── */}
              <FinishLesson
                t={t}
                bank={bank}
                state={state}
                nextLesson={nextLesson}
                onPassed={handlePassed}
                onBurn={handleBurn}
                onOpenNext={openLesson}
              />

              <Reveal as="section" className={s.summaryCard}>
                <span className={s.summaryIcon}>
                  <Trophy size={20} />
                </span>
                <h2>{t.lesson_summary_title}</h2>
                <p className={s.summarySub}>{t.lesson_summary_sub}</p>
                <ul>
                  {meta.sections.map((sec) => (
                    <li key={sec.anchorId}>
                      <CheckCircle2 size={15} />
                      <span>{sec.heading}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* ── AMALIY QADAMLAR ──
                  Darsning eng muhim qismi: o'qilgan bilimni HARAKATGA
                  aylantiradi. Foydalanuvchining "natijaga chiqishi" aynan
                  shu yerdan boshlanadi. Faqat dars muallifi yozgan bo'lsa
                  ko'rsatiladi — eski darslar buzilmaydi. */}
              {active.practicalSteps?.length > 0 && (
                <Reveal as="section" className={s.stepsCard}>
                  <div className={s.stepsHead}>
                    <span className={s.stepsIcon}>
                      <Flag size={18} />
                    </span>
                    <div>
                      <h2>{t.lesson_steps}</h2>
                      <p>{t.lesson_steps_sub}</p>
                    </div>
                  </div>
                  <ol className={s.stepsList}>
                    {/* `stepText` — yuqoridagi `topicStep` HOLATINI
                        soyalab qo'ymasligi uchun ataylab boshqa nom */}
                    {active.practicalSteps.map((stepText, i) => (
                      <li key={i}>
                        <span className={s.stepNum}>{i + 1}</span>
                        <span>{stepText}</span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              )}

              <Reveal as="section" className={s.ctaCard}>
                <h2>{t.lesson_cta_title}</h2>
                <p>{t.lesson_cta_sub}</p>
                <button type="button" className={s.ctaBtn} onClick={openChat}>
                  <Sparkles size={17} /> {t.lesson_cta_btn}
                </button>
              </Reveal>
            </>
          )}
        </main>

        <aside className={s.sidebar}>
          {/* data-scroll-lock — bu blok ustida g'ildirak burilganda
              SAHIFA qimirlamaydi: panel o'z ichida scroll bo'ladi, panel
              tugagach ham scroll sahifaga "o'tib ketmaydi"
              (utils/smoothScroll.js + CSS overscroll-behavior). */}
          <div className={s.sideInner} data-scroll-lock>
            <nav className={s.sideCard} aria-label={t.lessons_toc}>
              <span className={s.sideTitle}>{t.lesson_nav_title}</span>
              <ol className={s.navList}>
                {/* ⚠️ Havola emas, TUGMA: mavzu boshqa qadamda bo'lishi
                    mumkin va u paytda DOM'da umuman yo'q — oddiy `#`
                    havolasi hech qayerga olib bormasdi. `jumpToSection`
                    avval kerakli qadamga o'tadi, so'ng siljiydi. */}
                {meta.sections.map((sec, i) => (
                  <li key={sec.anchorId}>
                    <button
                      type="button"
                      className={`${s.navLink} ${state.read.includes(i) ? s.navDone : ""}`}
                      aria-current={
                        Math.floor(i / TOPICS_PER_STEP) === safeStep
                          ? "true"
                          : undefined
                      }
                      onClick={() => jumpToSection(i, sec.anchorId)}
                    >
                      {state.read.includes(i) ? (
                        <CheckCircle2 size={15} />
                      ) : (
                        <Circle size={15} />
                      )}
                      <span>{sec.heading}</span>
                    </button>
                  </li>
                ))}
                {/* Amaliyot va tugatish testi faqat OXIRGI qadamda
                    chiziladi, shuning uchun havola bosilganda avval
                    o'sha qadamga o'tiladi. */}
                <li>
                  <button
                    type="button"
                    className={s.navLink}
                    onClick={() =>
                      jumpToSection(meta.sections.length - 1, "ai-amaliyot")
                    }
                  >
                    <Sparkles size={15} />
                    <span>{t.practice_title}</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`${s.navLink} ${state.completed ? s.navDone : ""}`}
                    onClick={() =>
                      jumpToSection(meta.sections.length - 1, "darsni-tugatish")
                    }
                  >
                    {state.completed ? (
                      <CheckCircle2 size={15} />
                    ) : (
                      <Flag size={15} />
                    )}
                    <span>{t.lesson_finish_title}</span>
                  </button>
                </li>
              </ol>
            </nav>

            <div className={s.sideCard}>
              <span className={s.sideTitle}>{t.lesson_actions_title}</span>
              <div className={s.actions}>
                <button type="button" onClick={openChat}>
                  <Sparkles size={15} /> {t.lessons_ask_ai}
                </button>
                <Link to="/library">
                  <LibraryIcon size={15} /> {t.lessons_open_library}
                </Link>
                <button type="button" onClick={downloadNotes}>
                  <Download size={15} /> {t.lesson_action_download}
                </button>
                <button
                  type="button"
                  onClick={toggleSave}
                  className={saved[active._id] ? s.actionActive : ""}
                >
                  <Star size={15} fill={saved[active._id] ? "currentColor" : "none"} />
                  {saved[active._id] ? t.lesson_action_saved : t.lesson_action_save}
                </button>
              </div>
            </div>

            {relatedLessons.length > 0 && (
              <div className={s.sideCard}>
                <span className={s.sideTitle}>{t.lesson_related_title}</span>
                <ul className={s.relatedList}>
                  {relatedLessons.map((l) => (
                    <li key={l._id}>
                      <button type="button" onClick={() => openLesson(l)}>
                        <span className={s.relEmoji} aria-hidden="true">
                          {TOPIC_EMOJI[detectTopic(l.title)] || TOPIC_EMOJI.general}
                        </span>
                        <span className={s.relText}>
                          <strong>{l.title}</strong>
                          <em>
                            {/* Qulflangan darsda `sections` bo'sh — mavzu
                                soni `sectionCount` dan olinadi, aks holda
                                "0 mavzu" deb ko'rinardi. */}
                            {l.locked
                              ? t.plan_locked_badge
                              : allState[l._id]?.completed
                                ? t.lesson_badge_done
                                : `${l.sections.length} ${t.lessons_sections}`}
                          </em>
                        </span>
                        {l.locked ? <Lock size={14} /> : <ArrowRight size={14} />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ═══════════════════ DARSNI TUGATISH (test) ═══════════════════ */
/**
 * Bosqichlar: idle → running → passed | failed | cancelled
 *
 * Qoidalar (talab bo'yicha):
 *  - dars FAQAT barcha savollarga to'g'ri javob berilganda tugallanadi;
 *  - har urinishda savollar tasodifiy va OLDINGILARIDAN BOSHQA;
 *  - test davomida sahifadan chiqilsa / tab almashtirilsa / yangilansa —
 *    urinish bekor qilinadi va qaytganda YANGI savollar beriladi.
 *    Buning uchun savollar tanlanishi bilanoq "ishlatilgan" deb
 *    xotiraga yoziladi — sahifa yangilansa ham ular qayta chiqmaydi.
 */
function FinishLesson({ t, bank, state, nextLesson, onPassed, onBurn, onOpenNext }) {
  const [phase, setPhase] = useState(state.completed ? "passed" : "idle");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [wrongCount, setWrongCount] = useState(0);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useEffect(() => {
    setPhase(state.completed ? "passed" : "idle");
  }, [state.completed]);

  const hasBank = bank.primary.length + bank.secondary.length > 0;

  function startQuiz() {
    const picked = pickQuestions({
      bank,
      burned: state.burned || [],
      lastAttempt: questions.map((q) => q.key),
      size: QUIZ_SIZE,
    });
    if (!picked.questions.length) return;
    // Savollar tanlanishi BILANOQ "ishlatilgan" deb saqlanadi — sahifa
    // yangilansa yoki tark etilsa ham ular qayta chiqmaydi.
    onBurn(picked.burned, (state.attempts || 0) + 1);
    setQuestions(picked.questions);
    setAnswers({});
    setPhase("running");
  }

  /* ── Test davomida sahifadan chiqish → urinish bekor ── */
  useEffect(() => {
    if (phase !== "running") return undefined;
    const cancel = () => {
      if (phaseRef.current === "running") {
        setPhase("cancelled");
        setQuestions([]);
        setAnswers({});
      }
    };
    const onVisibility = () => document.hidden && cancel();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", cancel);
    window.addEventListener("blur", cancel);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", cancel);
      window.removeEventListener("blur", cancel);
    };
  }, [phase]);

  function checkAnswers() {
    const wrong = questions.filter((q, i) => answers[i] !== q.correct).length;
    setWrongCount(wrong);
    if (wrong === 0) {
      setPhase("passed");
      onPassed();
    } else {
      setPhase("failed");
    }
  }

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);

  return (
    <Reveal as="section" id="darsni-tugatish" className={s.finishCard}>
      {/* ── Tugallangan ── */}
      {phase === "passed" && (
        <div className={s.celebrate}>
          <span className={s.celebrateIcon}>
            <PartyPopper size={30} />
          </span>
          <h2>{t.lesson_pass_title}</h2>
          <p>{t.lesson_pass_sub}</p>
          <div className={s.rewardRow}>
            <span className={s.xpReward}>
              <Zap size={16} /> +{XP_PER_LESSON} XP
            </span>
            <span className={s.badgeReward}>
              <Trophy size={15} /> {t.lesson_badge_done}
            </span>
          </div>
          {/* ⚠️ Keyingi dars QULFLANGAN bo'lishi mumkin (bepul tarif).
              Unda "Keyingi dars ochildi" deyish yolg'on bo'lardi —
              matn va ikona qulf holatiga moslanadi. Tugma ATAYLAB
              qoldirilgan: dars tugagan payt tarifni ochish uchun eng
              qulay moment. */}
          {nextLesson && (
            <button
              type="button"
              className={s.primaryBtnWide}
              onClick={() => onOpenNext(nextLesson)}
            >
              {nextLesson.locked ? (
                <>
                  <Lock size={15} /> {t.plan_unlock_cta}: {nextLesson.title}
                </>
              ) : (
                <>
                  {t.lesson_next_unlocked}: {nextLesson.title}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* ── Boshlanishi ── */}
      {phase === "idle" && (
        <div className={s.finishIntro}>
          <span className={s.finishIcon}>
            <Flag size={24} />
          </span>
          <h2>{t.lesson_finish_title}</h2>
          <p>
            {hasBank
              ? (t.lesson_finish_sub || "").replace("{n}", QUIZ_SIZE)
              : t.lesson_finish_no_bank}
          </p>
          {hasBank && (
            <button type="button" className={s.primaryBtnWide} onClick={startQuiz}>
              <Flag size={16} /> {t.lesson_finish_btn}
            </button>
          )}
        </div>
      )}

      {/* ── Bekor qilingan (sahifa tark etilgan) ── */}
      {phase === "cancelled" && (
        <div className={s.finishIntro}>
          <span className={`${s.finishIcon} ${s.finishIconWarn}`}>
            <AlertTriangle size={24} />
          </span>
          <h2>{t.lesson_quiz_cancelled_title}</h2>
          <p>{t.lesson_quiz_cancelled_sub}</p>
          <button type="button" className={s.primaryBtnWide} onClick={startQuiz}>
            <RotateCcw size={16} /> {t.lesson_quiz_new_questions}
          </button>
        </div>
      )}

      {/* ── Muvaffaqiyatsiz ── */}
      {phase === "failed" && (
        <div className={s.finishIntro}>
          <span className={`${s.finishIcon} ${s.finishIconFail}`}>
            <XCircle size={24} />
          </span>
          <h2>{t.lesson_fail_title}</h2>
          <p>
            {(t.lesson_fail_sub || "").replace("{n}", wrongCount)}
          </p>
          <div className={s.failActions}>
            <button
              type="button"
              className={s.ghostBtn}
              onClick={() => scrollToElement("bolim-0")}
            >
              <BookOpen size={15} /> {t.lesson_fail_review}
            </button>
            <button type="button" className={s.primaryBtnWide} onClick={startQuiz}>
              <RotateCcw size={16} /> {t.lesson_quiz_new_questions}
            </button>
          </div>
        </div>
      )}

      {/* ── Test jarayoni ── */}
      {phase === "running" && (
        <div className={s.quizRun}>
          <div className={s.quizRunHead}>
            <span className={s.quizIcon}>
              <Flag size={18} />
            </span>
            <div>
              <h2>{t.lesson_finish_title}</h2>
              <p>{t.lesson_quiz_rule}</p>
            </div>
          </div>

          <div className={s.quizWarnStrip}>
            <AlertTriangle size={14} /> {t.lesson_quiz_focus_warning}
          </div>

          {questions.map((q, i) => (
            <div key={q.key} className={s.question}>
              <p className={s.questionText}>
                <span>{i + 1}</span>
                {q.q}
              </p>
              <div className={s.options}>
                {q.options.map((opt, oi) => (
                  <label
                    key={oi}
                    className={`${s.option} ${answers[i] === oi ? s.optSelected : ""}`}
                  >
                    <input
                      type="radio"
                      name={`fq-${i}`}
                      checked={answers[i] === oi}
                      onChange={() => setAnswers((p) => ({ ...p, [i]: oi }))}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            type="button"
            className={s.primaryBtnWide}
            disabled={!allAnswered}
            onClick={checkAnswers}
          >
            {t.lesson_quiz_check}
          </button>
        </div>
      )}
    </Reveal>
  );
}

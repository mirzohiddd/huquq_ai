/**
 * TELEGRAM MINI APP — `/tg` (2026-10-30).
 *
 * Telegram botidan ochiladi; kirish `initData` orqali (parolsiz). Bo'limlar:
 * O'rganish (dars yo'li) · Vaziyatlar · Takrorlash · Yutuqlar · Reyting ·
 * Profil. Dars va vaziyat — to'liq ekran ustki qatlam (pastki menyu yashiriladi).
 * Dizayn saytnikidek: navy + oltin, Poppins.
 */
import React, { useCallback, useEffect, useState, lazy, Suspense } from "react";
import { Map as MapIcon, Scale, RotateCcw, Trophy, ChartColumn } from "lucide-react";
import Seo from "../../components/Seo";
import { loadTelegram, setupApp, backButton } from "./tg";
import { mini, setToken, hasToken, setApiLang } from "./miniApi";
import { setUid, cachedPath, storePath, warmChunks } from "./bootCache";
import { textFor } from "./text";
import { unlock, settings } from "./sound";
import Gate, { Spinner } from "./Gate";
import PathTab from "./PathTab";
import Overlay from "./Overlay";
import MiniHeader from "./MiniHeader";
import HeartsSheet from "./HeartsSheet";
import { setHearts } from "./heartsStore";
import { LANG_KEY, COURSE_KEY, read, save, savedLang } from "./prefs";
import s from "./Mini.module.css";

const SituationsTab = lazy(() => import("./SituationsTab"));
const ReviewTab = lazy(() => import("./ReviewTab"));
const AchievementsTab = lazy(() => import("./AchievementsTab"));
const RatingTab = lazy(() => import("./RatingTab"));
const ProfileTab = lazy(() => import("./ProfileTab"));

const TABS = [
  { key: "path", Icon: MapIcon },
  { key: "sit", Icon: Scale },
  { key: "review", Icon: RotateCcw },
  { key: "wins", Icon: Trophy },
  { key: "rating", Icon: ChartColumn },
];

export default function MiniApp() {
  const [phase, setPhase] = useState("boot"); // boot | outside | register | error | ready
  const [gate, setGate] = useState(null);
  const [lang, setLang] = useState("uz");
  const [name, setName] = useState("");
  const [tab, setTab] = useState("path");
  const [overlay, setOverlay] = useState(null); // { kind: "lesson"|"course"|"situation"|"exam"|"chest"|"plans", id }
  const [course, setCourseKey] = useState(read(COURSE_KEY) || "");
  const [path, setPath] = useState(null);
  const [anim, setAnim] = useState(settings.anim);
  const t = textFor(lang);

  // Telegram WebView ovozni faqat birinchi bosishdan keyin ochadi
  useEffect(() => {
    const on = () => unlock();
    window.addEventListener("pointerdown", on, { passive: true });
    return () => window.removeEventListener("pointerdown", on);
  }, []);

  const loadPath = useCallback((c = course) => mini.path(c).then(setPath).catch(() => setPhase("error")), [course]);

  const boot = useCallback(async () => {
    setPhase("boot");
    const app = await loadTelegram();
    setupApp(app);
    const initData = app?.initData || "";
    const tgLang = savedLang() || (app?.initDataUnsafe?.user?.language_code === "ru" ? "ru" : "uz");
    setLang(tgLang);
    setApiLang(tgLang);
    if (!initData && !hasToken()) return setPhase("outside");
    setUid(app?.initDataUnsafe?.user?.id);
    const want = read(COURSE_KEY) || "";
    const cached = cachedPath();
    if (cached) {
      setPath(cached); // oxirgi yo'l darhol — yangisi fonda keladi
      setPhase("ready");
    }
    try {
      let fresh = null;
      if (initData) {
        const r = await mini.auth(initData, want);
        const l = savedLang() || r.lang || tgLang;
        setLang(l);
        setApiLang(l);
        setName(r.name || "");
        if (l === tgLang) fresh = r.path;
        setHearts(r.path?.hearts);
      }
      setPath(fresh || (await mini.path(want)));
      setPhase("ready");
    } catch (err) {
      const d = err?.response?.data;
      if (err?.response?.status === 404 && d?.needsRegister) {
        setGate(d);
        return setPhase("register");
      }
      if (err?.response?.status === 401) setToken(null);
      setPhase(initData || hasToken() ? "error" : "outside");
    }
  }, []);

  useEffect(() => {
    boot();
  }, [boot]);

  const close = useCallback(() => {
    setOverlay(null);
    loadPath();
  }, [loadPath]);

  // Telegram "Orqaga": ustki qatlam → yopish; profil → xarita
  useEffect(() => {
    if (overlay) return backButton(close);
    if (tab !== "path") return backButton(() => setTab("path"));
    return backButton(null);
  }, [overlay, tab, close]);

  useEffect(() => void window.scrollTo(0, 0), [tab, overlay]);
  useEffect(() => void (path && storePath(path)), [path]);
  useEffect(() => void (phase === "ready" && warmChunks()), [phase]);

  if (phase !== "ready") return <Gate phase={phase} gate={gate} t={t} onRetry={boot} />;

  const lessonOverlay = (id) => ({ kind: String(id).startsWith("c-") ? "course" : "lesson", id }); // "c-…" — saytdan qurilgan dars
  const ctx = {
    t,
    lang,
    path,
    course,
    reloadPath: () => loadPath(),
    openLesson: (id) => setOverlay(lessonOverlay(id)),
    openSituation: (id) => setOverlay({ kind: "situation", id }),
    openLessonNext: (id) => setOverlay(id ? lessonOverlay(id) : null),
    openExam: (unit) => setOverlay({ kind: "exam", id: unit }),
    openPlans: () => setOverlay({ kind: "plans", id: "plans" }),
    close,
    setTab,
    setAnim,
    setCourse: (c) => {
      save(COURSE_KEY, c);
      setCourseKey(c);
      loadPath(c);
      window.scrollTo(0, 0);
    },
    claimChest: (unit) => setOverlay({ kind: "chest", id: unit }), // to'liq ekran ochilish (ChestOpen)
    setLang: (l) => {
      save(LANG_KEY, l);
      setApiLang(l);
      setLang(l);
      loadPath();
    },
  };
  const initial = (name || "H").trim()[0].toUpperCase();

  return (
    <div className={`${s.app} ${anim ? "" : s.noAnim} ${overlay ? s.appFull : ""}`}>
      <Seo title="HuquqTech — Telegram ilova" noindex />
      <MiniHeader path={path} initial={initial} t={t} onProfile={() => { setOverlay(null); setTab("profile"); }} />

      <Suspense fallback={<Spinner />}>
        {overlay && <Overlay overlay={overlay} ctx={ctx} />}
        {!overlay && (
          <main className={s.main} key={lang}>
            {tab === "path" && <PathTab ctx={ctx} />}
            {tab === "sit" && <SituationsTab ctx={ctx} />}
            {tab === "review" && <ReviewTab ctx={ctx} />}
            {tab === "wins" && <AchievementsTab ctx={ctx} />}
            {tab === "rating" && <RatingTab ctx={ctx} />}
            {tab === "profile" && <ProfileTab ctx={ctx} name={name} />}
          </main>
        )}
      </Suspense>

      <HeartsSheet t={t} xp={path?.xp || 0} onBought={() => loadPath()} />

      {!overlay && (
        <nav className={s.nav} aria-label="Menu">
          {TABS.map(({ key, Icon }) => (
            <button key={key} type="button" className={`${s.navBtn} ${tab === key ? s.navOn : ""}`} onClick={() => setTab(key)} aria-current={tab === key ? "page" : undefined}>
              <span className={s.navIcon}>
                <Icon aria-hidden="true" />
                {key === "review" && path?.mistakes > 0 && <span className={s.badgeDot}>{path.mistakes}</span>}
              </span>
              {t.tabs[key]}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

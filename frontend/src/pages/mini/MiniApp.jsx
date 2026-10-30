/**
 * TELEGRAM MINI APP — `/tg` (2026-10-30).
 *
 * Telegram botidan ochiladi; kirish `initData` orqali (parolsiz). Bo'limlar:
 * O'rganish (dars yo'li) · Vaziyatlar · Takrorlash · Yutuqlar · Reyting ·
 * Profil. Dars va vaziyat — to'liq ekran ustki qatlam (pastki menyu yashiriladi).
 * Dizayn saytnikidek: navy + oltin, Poppins.
 */
import React, { useCallback, useEffect, useState, lazy, Suspense } from "react";
import { Map as MapIcon, Scale, RotateCcw, Trophy, ChartColumn, Flame, Zap } from "lucide-react";
import { BrandMark } from "../../components/brand/BrandLogo";
import Seo from "../../components/Seo";
import { loadTelegram, setupApp, backButton } from "./tg";
import { mini, setToken, hasToken } from "./miniApi";
import { textFor } from "./text";
import Gate, { Spinner } from "./Gate";
import PathTab from "./PathTab";
import s from "./Mini.module.css";

const SituationsTab = lazy(() => import("./SituationsTab"));
const ReviewTab = lazy(() => import("./ReviewTab"));
const AchievementsTab = lazy(() => import("./AchievementsTab"));
const RatingTab = lazy(() => import("./RatingTab"));
const ProfileTab = lazy(() => import("./ProfileTab"));
const LessonPlayer = lazy(() => import("./LessonPlayer"));
const SituationPlayer = lazy(() => import("./SituationPlayer"));

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
  const [overlay, setOverlay] = useState(null); // { kind: "lesson"|"situation", id }
  const [path, setPath] = useState(null);
  const t = textFor(lang);

  const loadPath = useCallback(() => mini.path().then(setPath).catch(() => setPhase("error")), []);

  const boot = useCallback(async () => {
    setPhase("boot");
    const app = await loadTelegram();
    setupApp(app);
    const initData = app?.initData || "";
    const tgLang = app?.initDataUnsafe?.user?.language_code === "ru" ? "ru" : "uz";
    setLang(tgLang);
    if (!initData && !hasToken()) return setPhase("outside");
    try {
      if (initData) {
        const r = await mini.auth(initData);
        setToken(r.token);
        setLang(r.lang || tgLang);
        setName(r.name || "");
      }
      await mini.path().then(setPath);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab, overlay]);

  if (phase !== "ready") return <Gate phase={phase} gate={gate} t={t} onRetry={boot} />;

  const ctx = {
    t,
    lang,
    path,
    reloadPath: loadPath,
    openLesson: (id) => setOverlay({ kind: "lesson", id }),
    openSituation: (id) => setOverlay({ kind: "situation", id }),
    openLessonNext: (id) => setOverlay(id ? { kind: "lesson", id } : null),
    close,
  };
  const initial = (name || "H").trim()[0].toUpperCase();

  return (
    <div className={s.app}>
      <Seo title="HuquqTech — Telegram ilova" noindex />
      <header className={s.header}>
        <div className={s.brand}>
          <BrandMark size={28} className={s.brandMark} />
          <span>Huquq<b>Tech</b></span>
        </div>
        <div className={s.headRight}>
          <span className={s.pill} title={t.streak}><Flame aria-hidden="true" />{path?.streak || 0}</span>
          <span className={s.pill}><Zap aria-hidden="true" />{path?.xp || 0} XP</span>
          <button type="button" className={s.avatar} onClick={() => { setOverlay(null); setTab("profile"); }} aria-label={t.tabs.profile}>
            {initial}
          </button>
        </div>
      </header>

      <Suspense fallback={<Spinner />}>
        {overlay?.kind === "lesson" && <LessonPlayer key={overlay.id} id={overlay.id} ctx={ctx} />}
        {overlay?.kind === "situation" && <SituationPlayer key={overlay.id} id={overlay.id} ctx={ctx} />}
        {!overlay && (
          <main className={s.main}>
            {tab === "path" && <PathTab ctx={ctx} />}
            {tab === "sit" && <SituationsTab ctx={ctx} />}
            {tab === "review" && <ReviewTab ctx={ctx} />}
            {tab === "wins" && <AchievementsTab ctx={ctx} />}
            {tab === "rating" && <RatingTab ctx={ctx} />}
            {tab === "profile" && <ProfileTab ctx={ctx} name={name} />}
          </main>
        )}
      </Suspense>

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

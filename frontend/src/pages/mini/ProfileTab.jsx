/**
 * PROFIL — avatar (bosh harflar), daraja, XP chizig'i, darslar va ketma-ket
 * kunlar, 3 ta asosiy yutuq (olti burchakli nishon) va sozlamalar
 * (Ovoz, Animatsiya, kunlik maqsad). Sozlamalar shu qurilmada saqlanadi.
 */
import React, { useEffect, useRef, useState } from "react";
import { Settings, BookOpen, Flame, ChevronRight, Footprints, Brain, Volume2, Sparkles, Target, Languages } from "lucide-react";
import { mini } from "./miniApi";
import { haptic } from "./tg";
import { settings, setSetting, sfx } from "./sound";
import { Spinner } from "./Gate";
import m from "./Mini.module.css";
import tb from "./Tabs.module.css";
import s from "./Screens.module.css";

const GOALS = [20, 40, 60];
const SHOW = [["first", Footprints], ["streak5", Flame], ["ten", Brain]];
const initials = (n) => n.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase() || "H";

function Toggle({ on, onChange, label }) {
  return <button type="button" role="switch" aria-checked={on} aria-label={label} className={`${s.toggle} ${on ? s.toggleOn : ""}`} onClick={() => onChange(!on)} />;
}

export default function ProfileTab({ ctx, name }) {
  const { t } = ctx;
  const [me, setMe] = useState(null);
  const [err, setErr] = useState(false);
  const [opts, setOpts] = useState({ sound: settings.sound, anim: settings.anim });
  const setRef = useRef(null);

  useEffect(() => {
    mini.me().then(setMe).catch(() => setErr(true));
  }, []);

  const flip = (key, on) => {
    setSetting(key, on);
    setOpts((o) => ({ ...o, [key]: on }));
    if (key === "anim") ctx.setAnim(on);
    if (key === "sound" && on) sfx("tap");
    haptic("light");
  };

  const pickGoal = async (g) => {
    haptic("light");
    setMe((x) => ({ ...x, goal: g }));
    try {
      await mini.goal(g);
      ctx.reloadPath();
    } catch {
      setErr(true);
    }
  };

  if (err) return <p className={m.screenSub}>{t.error}</p>;
  if (!me) return <Spinner />;
  const display = me.name || name || "HuquqTech";
  const lv = me.level;
  const badges = Object.fromEntries(me.badges.map((b) => [b.id, b]));

  return (
    <div className={m.fadeIn}>
      <div className={s.pHead}>
        <span className={s.avatar}>{initials(display)}</span>
        <div className={s.pName}>
          <b>{display}</b>
          <small>{t.levelN(lv.level)}</small>
        </div>
        <button type="button" className={s.gear} aria-label={t.settings} onClick={() => setRef.current?.scrollIntoView({ behavior: "smooth" })}>
          <Settings />
        </button>
      </div>

      <div className={s.xpRow}>
        <span className={s.bar}><i style={{ width: `${Math.round(lv.progress * 100)}%` }} /></span>
        <small>{lv.to ? `${me.xp} / ${lv.to} XP` : `${me.xp} XP`}</small>
      </div>

      <div className={s.duo}>
        <div className={s.box}>
          <span className={`${s.boxIcon} ${s.boxGold}`}><BookOpen aria-hidden="true" /></span>
          <div>
            <b>{me.lessons} {t.lessonUnit}</b>
            <small>{t.completed}</small>
          </div>
        </div>
        <div className={s.box}>
          <span className={`${s.boxIcon} ${s.boxGold}`}><Flame aria-hidden="true" /></span>
          <div>
            <b>{me.streak} {t.dayUnit}</b>
            <small>{t.inRow}</small>
          </div>
        </div>
      </div>

      <div className={s.secHead}>
        <h3>{t.tabs.wins}</h3>
        <button type="button" className={s.link} onClick={() => ctx.setTab("wins")}>
          {t.seeAll} <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <div className={s.hexes}>
        {SHOW.map(([id, Icon]) => {
          const b = badges[id];
          if (!b) return null;
          return (
            <div key={id} className={s.hexItem}>
              <div className={`${s.hex} ${b.earned ? "" : s.hexOff}`}><Icon aria-hidden="true" /></div>
              <b>{b.title}</b>
              <small>{b.desc}</small>
            </div>
          );
        })}
      </div>

      <div className={s.secHead} ref={setRef}>
        <h3>{t.settings}</h3>
      </div>
      <div className={s.settings}>
        <div className={s.row}>
          <Volume2 aria-hidden="true" />
          <span>{t.sound}</span>
          <Toggle on={opts.sound} label={t.sound} onChange={(v) => flip("sound", v)} />
        </div>
        <div className={s.row}>
          <Sparkles aria-hidden="true" />
          <span>{t.anim}</span>
          <Toggle on={opts.anim} label={t.anim} onChange={(v) => flip("anim", v)} />
        </div>
        <div className={s.row}>
          <Languages aria-hidden="true" />
          <span>{t.language}</span>
          <div className={s.goals} role="radiogroup" aria-label={t.language}>
            {[["uz", "O'zbekcha"], ["ru", "Русский"]].map(([k, label]) => (
              <button key={k} type="button" role="radio" aria-checked={ctx.lang === k} className={`${s.goal} ${ctx.lang === k ? s.goalOn : ""}`} onClick={() => ctx.setLang(k)}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className={s.row}>
          <Target aria-hidden="true" />
          <span>{t.goal}</span>
          <div className={s.goals} role="radiogroup" aria-label={t.setGoal}>
            {GOALS.map((g) => (
              <button key={g} type="button" role="radio" aria-checked={me.goal === g} className={`${s.goal} ${me.goal === g ? s.goalOn : ""}`} onClick={() => pickGoal(g)}>
                {g} XP
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className={tb.note}>{t.today}: {me.todayXp} XP</p>
    </div>
  );
}

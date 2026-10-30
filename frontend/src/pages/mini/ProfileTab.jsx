/**
 * PROFIL — o'rganilgan mavzular, ketma-ket kunlar va shaxsiy kunlik maqsad.
 */
import React, { useEffect, useState } from "react";
import { BookOpen, Scale, Zap, Flame } from "lucide-react";
import { mini } from "./miniApi";
import { haptic } from "./tg";
import { Spinner } from "./Gate";
import m from "./Mini.module.css";
import s from "./Tabs.module.css";

const GOALS = [20, 40, 60];

export default function ProfileTab({ ctx, name }) {
  const { t } = ctx;
  const [me, setMe] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    mini.me().then(setMe).catch(() => setErr(true));
  }, []);

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

  return (
    <div className={m.fadeIn}>
      <div className={s.profileHead}>
        <span className={s.bigAvatar}>{display.trim()[0].toUpperCase()}</span>
        <div>
          <b>{display}</b>
          <small>{t.level} {me.level.level} · {me.level.name}</small>
        </div>
      </div>

      <div className={s.stats}>
        <div className={s.stat}><small><BookOpen aria-hidden="true" />{t.stats.lessons}</small><b>{me.lessons} / {me.totalLessons}</b></div>
        <div className={s.stat}><small><Scale aria-hidden="true" />{t.stats.situations}</small><b>{me.situations} / {me.totalSituations}</b></div>
        <div className={s.stat}><small><Zap aria-hidden="true" />{t.stats.xp}</small><b>{me.xp}</b></div>
        <div className={s.stat}><small><Flame aria-hidden="true" />{t.stats.streak}</small><b>{me.streak} <span style={{ fontSize: 12, fontWeight: 500 }}>{t.streak}</span></b></div>
      </div>

      <div className={s.sectionHead}>
        <h3>{t.setGoal}</h3>
        <small>{t.today}: {me.todayXp} XP</small>
      </div>
      <div className={s.goals} role="radiogroup" aria-label={t.setGoal}>
        {GOALS.map((g) => (
          <button key={g} type="button" role="radio" aria-checked={me.goal === g} className={`${s.goal} ${me.goal === g ? s.goalOn : ""}`} onClick={() => pickGoal(g)}>
            {g} XP
          </button>
        ))}
      </div>

      <div className={s.sectionHead}>
        <h3>{t.learned}</h3>
      </div>
      <div className={`${m.card} ${s.topics}`}>
        {me.learned.length === 0 && <p className={m.screenSub} style={{ margin: 0 }}>{t.noLearned}</p>}
        {me.learned.map((u) => (
          <div key={u.title}>
            <h4>{u.title}</h4>
            <div className={s.chips}>{u.topics.map((x) => <span key={x}>{x}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

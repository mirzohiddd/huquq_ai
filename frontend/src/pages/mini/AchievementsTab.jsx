/**
 * YUTUQLAR — daraja, XP, haftalik natija, nishonlar va o'rganilgan mavzular.
 */
import React, { useEffect, useState } from "react";
import { Award, Medal, Crown, Footprints, Target, Sparkles, RotateCcw, Flame, Zap, Scale, Brain } from "lucide-react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import m from "./Mini.module.css";
import s from "./Tabs.module.css";

const BADGE_ICON = { first: Footprints, ten: Brain, streak5: Flame, unit: Medal, half: Award, all: Crown, sharp: Target, life: Scale, review: RotateCcw, streak3: Flame, streak7: Sparkles, xp500: Zap };

export default function AchievementsTab({ ctx }) {
  const { t } = ctx;
  const [me, setMe] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    mini.me().then(setMe).catch(() => setErr(true));
  }, []);

  if (err) return <p className={m.screenSub}>{t.error}</p>;
  if (!me) return <Spinner />;

  const lv = me.level;
  const max = Math.max(20, ...me.weekly.last7.map((d) => d.xp));
  const earned = me.badges.filter((b) => b.earned).length;

  return (
    <div className={m.fadeIn}>
      <h1 className={m.screenTitle}>{t.tabs.wins}</h1>

      <div className={s.levelCard}>
        <div className={s.levelNum}>{lv.level}</div>
        <div>
          <b>{lv.name}</b> · {me.xp} XP
          <div className={s.bar}><i style={{ width: `${Math.round(lv.progress * 100)}%` }} /></div>
          <small>{lv.to ? t.toNext(lv.to - me.xp) : t.maxLevel}</small>
        </div>
      </div>

      <div className={s.sectionHead}>
        <h3>{t.week}</h3>
        <small>{me.weekly.weekXp} XP · {me.weekly.activeDays} {t.activeDays}</small>
      </div>
      <div className={`${m.card} ${s.week}`}>
        {me.weekly.last7.map((d, i) => (
          <div key={d.day} className={`${s.day} ${d.xp > 0 ? s.dayOn : ""} ${i === 6 ? s.dayToday : ""}`}>
            {d.xp > 0 && <b>{d.xp}</b>}
            <i style={{ height: `${Math.max(6, (d.xp / max) * 90)}px` }} />
            <span>{t.days[d.weekday]}</span>
          </div>
        ))}
      </div>

      <div className={s.sectionHead}>
        <h3>{t.badges}</h3>
        <small>{earned} / {me.badges.length}</small>
      </div>
      <div className={s.badges}>
        {me.badges.map((b) => {
          const Icon = BADGE_ICON[b.id] || Award;
          return (
            <div key={b.id} className={`${s.badge} ${b.earned ? "" : s.badgeOff}`}>
              <Icon aria-hidden="true" />
              <b>{b.title}</b>
              <small>{b.desc}</small>
            </div>
          );
        })}
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

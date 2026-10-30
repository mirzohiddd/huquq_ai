/**
 * DARS YAKUNI: «Dars tugadi! +20 XP», qalqon bayrami (sakraydi va gapiradi),
 * asosiy xulosa va qonundan jonli iqtibos. XP xatolarga qarab — necha xato
 * bo'lgani va xatosiz bo'lsa qancha XP bo'lishi ko'rsatiladi.
 * Kunning birinchi darsi bo'lsa — avval seriya animatsiyasi (StreakScreen).
 */
import React, { useEffect, useState } from "react";
import { Zap, Flame, BookOpen, ChevronRight, CircleCheck, GraduationCap } from "lucide-react";
import Hero from "./Hero";
import StreakScreen from "./StreakScreen";
import { speak, stopVoice } from "./sound";
import f from "./Finish.module.css";
import m from "./Mini.module.css";
import st from "./Steps.module.css";

export default function FinishScreen({ result, ctx, title, sub }) {
  const { t } = ctx;
  const xp = result?.xp || 0;
  const [talking, setTalking] = useState(false);
  const [streak, setStreak] = useState(!!result?.streakUp);
  const heading = result?.unitDone ? t.unitDone(result.unitTitle) : title || t.finishTitle;

  // Fanfara tugagach qalqon tabriklaydi
  useEffect(() => {
    if (streak) return undefined;
    const line = `${heading} ${xp > 0 ? `Plyus ${xp} XP!` : ""} ${result?.takeaway || ""}`.trim();
    const id = setTimeout(() => speak(line, setTalking), result?.unitDone ? 1700 : 900);
    return () => {
      clearTimeout(id);
      stopVoice();
    };
  }, [heading, xp, result, streak]);

  if (streak) return <StreakScreen from={result.streakFrom || 0} to={result.streak || 1} week={result.week || []} t={t} onDone={() => setStreak(false)} />;

  return (
    <div className={`${f.wrap} ${m.fadeIn}`}>
      <div className={f.hero}>
        <Hero mood="cheer" size={result?.unitDone ? 180 : 150} talking={talking} />
      </div>
      <h2 className={f.title}>{heading}</h2>
      {xp > 0 ? (
        <div className={f.xp}><Zap aria-hidden="true" /> +{xp} XP</div>
      ) : (
        <p className={f.again}>{sub || t.finishAgain}</p>
      )}
      {xp > 0 && result?.maxXp > 0 && (
        <p className={`${f.again} ${result.mistakes ? "" : f.perfect}`}>{result.mistakes ? t.xp.lost(result.mistakes, result.maxXp) : t.xp.perfect}</p>
      )}
      {sub && xp > 0 && <p className={f.again}>{sub}</p>}

      <div className={f.stats}>
        <span><Zap aria-hidden="true" /> {result?.totalXp ?? 0} XP</span>
        {result?.level && <span>{t.level} {result.level.level} · {result.level.name}</span>}
        {result?.streak > 0 && <span><Flame aria-hidden="true" /> {result.streak}</span>}
      </div>

      {result?.goals?.length > 0 && (
        <div className={st.can}>
          <h4>{t.met.canNow}</h4>
          <ul>{result.goals.map((g) => <li key={g}><CircleCheck aria-hidden="true" />{g}</li>)}</ul>
        </div>
      )}

      {result?.takeaway && (
        <div className={f.takeaway}>
          <b>{t.takeaway}</b>
          <p>{result.takeaway}</p>
        </div>
      )}

      {result?.quotes?.length > 0 && (
        <div className={f.quotes}>
          <h4><BookOpen aria-hidden="true" /> {t.lawSays}</h4>
          {result.quotes.slice(0, 2).map((q) => (
            <blockquote key={`${q.code}-${q.article}`}>
              <cite>{t.lib.art(q.article)}{q.title ? ` · ${q.title}` : ""}</cite>
              <p>{q.text}</p>
            </blockquote>
          ))}
        </div>
      )}

      <div className={f.actions}>
        {result?.exam && (
          <button type="button" className={`${m.btn} ${m.btnGold}`} onClick={() => ctx.openExam(result.exam)}>
            <GraduationCap aria-hidden="true" /> {t.met.goExam}
          </button>
        )}
        {result?.next && (
          <button type="button" className={`${m.btn} ${m.btnGold}`} onClick={() => ctx.openLessonNext(result.next)}>
            {t.nextLesson} <ChevronRight aria-hidden="true" />
          </button>
        )}
        <button type="button" className={result?.next || result?.exam ? m.btnGhost : m.btn} onClick={ctx.close}>{t.toMap}</button>
      </div>
    </div>
  );
}

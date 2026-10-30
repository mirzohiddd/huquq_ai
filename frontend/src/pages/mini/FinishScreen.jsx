/**
 * DARS YAKUNI: «Dars tugadi! +20 XP», qahramon bayrami (sakrash + konfetti),
 * asosiy xulosa va qonundan jonli iqtibos.
 */
import React from "react";
import { Zap, Flame, BookOpen, ChevronRight } from "lucide-react";
import Hero from "./Hero";
import f from "./Finish.module.css";
import m from "./Mini.module.css";

export default function FinishScreen({ result, ctx, title, sub }) {
  const { t } = ctx;
  const xp = result?.xp || 0;

  return (
    <div className={`${f.wrap} ${m.fadeIn}`}>
      <div className={f.hero}>
        <Hero mood="cheer" size={150} />
      </div>
      <h2 className={f.title}>{title || t.finishTitle}</h2>
      {xp > 0 ? (
        <div className={f.xp}><Zap aria-hidden="true" /> +{xp} XP</div>
      ) : (
        <p className={f.again}>{sub || t.finishAgain}</p>
      )}
      {sub && xp > 0 && <p className={f.again}>{sub}</p>}

      <div className={f.stats}>
        <span><Zap aria-hidden="true" /> {result?.totalXp ?? 0} XP</span>
        {result?.level && <span>{t.level} {result.level.level} · {result.level.name}</span>}
        {result?.streak > 0 && <span><Flame aria-hidden="true" /> {result.streak}</span>}
      </div>

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
              <cite>{q.article}-modda{q.title ? ` · ${q.title}` : ""}</cite>
              <p>{q.text}</p>
            </blockquote>
          ))}
        </div>
      )}

      <div className={f.actions}>
        {result?.next && (
          <button type="button" className={`${m.btn} ${m.btnGold}`} onClick={() => ctx.openLessonNext(result.next)}>
            {t.nextLesson} <ChevronRight aria-hidden="true" />
          </button>
        )}
        <button type="button" className={result?.next ? m.btnGhost : m.btn} onClick={ctx.close}>{t.toMap}</button>
      </div>
    </div>
  );
}

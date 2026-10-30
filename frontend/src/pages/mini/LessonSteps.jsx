/**
 * DARS BOSQICHLARI (natijaga yo'naltirilgan metodika):
 *   Stages     — tepadagi 6 bosqich: Maqsad · Qoida · Vaziyat · Tahlil · Mashq · Amal;
 *   IntroView  — «Bu darsdan keyin siz…» maqsadlari va asosiy qoida (vaziyatdan OLDIN);
 *   ApplyView  — «Hayotda qo'llash»: aniq harakatlar ketma-ketligi;
 *   ReviewList — javobdan keyin har bir variant nega to'g'ri yoki xato.
 */
import React from "react";
import { ChevronRight, Target, BookOpen, Check, X } from "lucide-react";
import Hero from "./Hero";
import q from "./Quiz.module.css";
import s from "./Steps.module.css";

export function Stages({ t, at }) {
  return (
    <ol className={s.stages} aria-label={t.met.stages.join(" · ")}>
      {t.met.stages.map((name, i) => (
        <li key={name} className={i < at ? s.past : i === at ? s.now : ""}>
          <i />
          <span>{name}</span>
        </li>
      ))}
    </ol>
  );
}

export function IntroView({ lesson, t, onNext }) {
  return (
    <div className={q.screen}>
      <div className={q.tag}>{lesson.level} · {lesson.title}</div>
      <div className={s.heroRow}>
        <Hero mood="wave" size={96} />
        <h2 className={s.h2}>{t.met.goalTitle}</h2>
      </div>
      <ul className={s.goals}>
        {(lesson.goals || []).map((g) => (
          <li key={g}><Target aria-hidden="true" />{g}</li>
        ))}
      </ul>
      {lesson.rule && (
        <div className={s.rule}>
          <h4><BookOpen aria-hidden="true" /> {t.met.ruleTitle}</h4>
          <p>{lesson.rule}</p>
        </div>
      )}
      <div className={q.footer}>
        <button type="button" className={q.main} onClick={onNext}>
          {t.met.start} <ChevronRight className={q.chev} />
        </button>
      </div>
    </div>
  );
}

export function ApplyView({ lesson, t, onNext, busy }) {
  return (
    <div className={q.screen}>
      <div className={q.tag}>{lesson.title}</div>
      <h2 className={q.title}>{t.met.applyTitle}</h2>
      <p className={s.lead}>{t.met.applySub}</p>
      <ol className={s.steps}>
        {(lesson.steps || []).map((x, i) => (
          <li key={x}><b>{i + 1}</b><span>{x}</span></li>
        ))}
      </ol>
      <div className={q.footer}>
        <button type="button" className={q.main} disabled={busy} onClick={onNext}>
          {t.continue} <ChevronRight className={q.chev} />
        </button>
      </div>
    </div>
  );
}

export function ReviewList({ items, t }) {
  if (!items?.length) return null;
  return (
    <div className={s.review}>
      <h4>{t.met.review}</h4>
      {items.map((o) => (
        <div key={o.t} className={`${s.opt} ${o.ok ? s.optOk : ""}`}>
          <span className={s.mark}>{o.ok ? <Check /> : <X />}</span>
          <div>
            <b>{o.t}</b>
            <p>{o.why}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

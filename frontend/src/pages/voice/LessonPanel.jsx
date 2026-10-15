import React from "react";
import { Check, X, ChevronRight, RotateCcw, Square, Lightbulb, Scale } from "lucide-react";
import s from "./VoiceAssistant.module.css";

const LETTERS = ["A", "B", "C", "D", "E"];

/** Dars rejimi: mavzu tanlash → mavzu kartasi + savol variantlari → baho. */
export default function LessonPanel({ v, t, lang, areas, busy }) {
  const { turn, tutor } = v;

  if (!tutor.area) {
    return (
      <div className={s.card}>
        <h2 className={s.cardTitle}>{t.pickArea}</h2>
        <div className={s.areas}>
          {areas.map((a) => (
            <button key={a.key} type="button" className={s.area} disabled={busy} onClick={() => v.startLesson(a.key)}>
              {a[lang] || a.uz}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const lesson = turn?.lesson;
  const q = turn?.question;
  const graded = turn?.kind === "graded" ? turn : null;

  return (
    <div className={s.card}>
      {lesson && (
        <>
          <div className={s.meta}>
            <span>{lesson.areaLabel}</span>
            <span>{t.topic(lesson.index, lesson.total)}</span>
          </div>
          <h2 className={s.cardTitle}>{lesson.heading}</h2>
          <p className={s.text}>{lesson.text}</p>
          {lesson.example && (
            <p className={s.example}>
              <Lightbulb size={15} /> <b>{t.example}:</b> {lesson.example}
            </p>
          )}
          {lesson.refs?.length > 0 && (
            <ul className={s.refs}>
              {lesson.refs.map((r) => (
                <li key={`${r.code}${r.article}`}>
                  <Scale size={13} /> {r.label}
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {q && tutor.qid && (
        <div className={s.quiz}>
          <p className={s.question}>{q.q}</p>
          {q.options.map((o, i) => (
            <button key={o} type="button" className={s.option} disabled={busy} onClick={() => v.choose(i)}>
              <span className={s.letter}>{LETTERS[i]}</span> {o}
            </button>
          ))}
        </div>
      )}

      {graded && (
        <div className={`${s.verdict} ${graded.correct ? s.ok : s.bad}`}>
          <b>
            {graded.correct ? <Check size={16} /> : <X size={16} />} {graded.correct ? t.right : t.wrong}
          </b>
          {!graded.correct && <span>{graded.rightText}</span>}
          {graded.explain && <p>{graded.explain}</p>}
        </div>
      )}

      {turn?.kind === "clarify" && <p className={s.clarify}>{turn.speech}</p>}

      <div className={s.row}>
        {tutor.total > 0 && <span className={s.score}>{t.score(tutor.correct, tutor.total)}</span>}
        <button type="button" className={s.ghost} disabled={busy} onClick={() => v.step(0)}>
          <RotateCcw size={15} /> {t.repeat}
        </button>
        <button type="button" className={s.primary} disabled={busy} onClick={() => v.step(1)}>
          {t.next} <ChevronRight size={15} />
        </button>
        <button type="button" className={s.ghost} onClick={v.endLesson}>
          <Square size={13} /> {t.endLesson}
        </button>
      </div>
    </div>
  );
}

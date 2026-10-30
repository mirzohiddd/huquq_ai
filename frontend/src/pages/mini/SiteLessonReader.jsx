/**
 * SAYT DARSINI O'QISH — bo'limlar (matn, hayotiy misol, asosiy fikrlar,
 * ogohlantirish, qonundan jonli iqtibos) va «Darsni tugatdim».
 * Tugatish saytning progressiga yoziladi (sayt va bot bilan umumiy).
 */
import React, { useEffect, useState } from "react";
import { ChevronLeft, Check } from "lucide-react";
import { siteApi } from "./miniApi";
import { sfx } from "./sound";
import { haptic } from "./tg";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import m from "./Mini.module.css";
import q from "./Quiz.module.css";
import s from "./Library.module.css";

const paras = (text = "") => text.split(/\n+/).map((x) => x.trim()).filter(Boolean);

export default function SiteLessonReader({ id, ctx, done, onBack }) {
  const { t } = ctx;
  const [lesson, setLesson] = useState(null);
  const [err, setErr] = useState("");
  const [state, setState] = useState(done ? "already" : "idle"); // idle | busy | done | already

  useEffect(() => {
    siteApi
      .lesson(id)
      .then((d) => setLesson(d.lesson))
      .catch((e) => setErr(e?.response?.data?.message || e?.response?.data?.error || t.error));
  }, [id, t.error]);

  const finish = async () => {
    setState("busy");
    try {
      const r = await siteApi.completeLesson(id);
      setState(r.alreadyDone ? "already" : "done");
      sfx("lesson");
      haptic("success");
    } catch {
      setState("idle");
      setErr(t.error);
    }
  };

  const top = (
    <div className={s.top}>
      <button type="button" className={s.back} onClick={onBack} aria-label={t.lib.back}><ChevronLeft /></button>
    </div>
  );

  if (err && !lesson) return <div>{top}<p className={s.empty}>{err}</p></div>;
  if (!lesson) return <div>{top}<Spinner /></div>;

  if (state === "done") {
    return (
      <div className={`${s.result} ${m.fadeIn}`}>
        <Hero mood="cheer" size={160} />
        <h2>{t.lib.doneMsg}</h2>
        <p>{lesson.title}</p>
        <div className={q.footer}>
          <button type="button" className={q.main} onClick={onBack}>{t.lib.back}</button>
        </div>
      </div>
    );
  }

  return (
    <div className={m.fadeIn}>
      {top}
      <h1 className={s.title}>{lesson.title}</h1>
      {lesson.desc && <p className={s.desc}>{lesson.desc}</p>}

      {lesson.objectives?.length > 0 && (
        <div className={s.box}>
          <h4>{t.lib.objectives}</h4>
          <ul>{lesson.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
        </div>
      )}

      {(lesson.sections || []).map((sec, i) => (
        <section key={`${i}-${sec.heading}`} className={s.sec}>
          <h3>{sec.heading}</h3>
          {paras(sec.text).map((p, j) => <p key={j}>{p}</p>)}
          {sec.example && (
            <div className={s.example}>
              <h4>{t.lib.example}</h4>
              <p>{sec.example}</p>
            </div>
          )}
          {sec.keyPoints?.length > 0 && (
            <>
              <h4>{t.lib.keyPoints}</h4>
              <ul>{sec.keyPoints.map((k) => <li key={k}>{k}</li>)}</ul>
            </>
          )}
          {sec.warning && <div className={s.warn}><b>{t.lib.warning}:</b> {sec.warning}</div>}
          {(sec.lawQuotes || []).map((lq) => (
            <blockquote key={`${lq.code}-${lq.articleNumber}`} className={s.quote}>
              <cite>{t.lib.art(lq.articleNumber)}{lq.title ? ` · ${lq.title}` : ""}</cite>
              <p>{lq.text?.length > 500 ? `${lq.text.slice(0, 500)}…` : lq.text}</p>
            </blockquote>
          ))}
        </section>
      ))}

      {lesson.practicalSteps?.length > 0 && (
        <div className={s.box}>
          <h4>{t.lib.steps}</h4>
          <ul>{lesson.practicalSteps.map((o) => <li key={o}>{o}</li>)}</ul>
        </div>
      )}

      <div className={q.footer}>
        {state === "already" ? (
          <p className={s.note}><Check size={16} style={{ verticalAlign: "-3px" }} /> {t.lib.alreadyDone}</p>
        ) : (
          <button type="button" className={q.main} disabled={state === "busy"} onClick={finish}>
            {t.lib.markDone} <Check className={q.chev} />
          </button>
        )}
      </div>
    </div>
  );
}

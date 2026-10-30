/**
 * KURS DARSI (saytdagi darsdan) — natijaga yo'naltirilgan metodika:
 *   Maqsad → [Mavzu kartasi → Tekshiruv savoli] × 3 → Mustahkamlash
 *   (saytdagi test savollari) → Hayotda qo'llash → Yakun.
 * Xato javobda o'sha savol qayta beriladi (to'g'ri topmaguncha) — har bir
 * xato serverda sanaladi va XP kamayadi (20 / 15 / 10 / 5).
 */
import React, { useEffect, useMemo, useState } from "react";
import { X, ChevronRight, Lock } from "lucide-react";
import { mini } from "./miniApi";
import { sfx } from "./sound";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
import ExplainSheet from "./ExplainSheet";
import FinishScreen from "./FinishScreen";
import CourseCard from "./CourseCard";
import { ApplyView } from "./LessonSteps";
import m from "./Mini.module.css";
import l from "./Lesson.module.css";
import q from "./Quiz.module.css";
import st from "./Steps.module.css";
import c from "./Course.module.css";

/** Bosqichlar ro'yxati: intro, card:i, q:i, apply */
function stepsOf(lesson) {
  const out = ["intro"];
  lesson.cards.forEach((_, i) => {
    out.push(`card:${i}`);
    lesson.quiz.filter((x) => x.card === i).forEach((x) => out.push(`q:${x.i}`));
  });
  lesson.quiz.filter((x) => x.card === null).forEach((x) => out.push(`q:${x.i}`));
  if (lesson.steps?.length) out.push("apply");
  return out;
}

export default function CourseLessonPlayer({ id, ctx }) {
  const { t, lang } = ctx;
  const [lesson, setLesson] = useState(null);
  const [err, setErr] = useState(null);
  const [at, setAt] = useState(0);
  const [res, setRes] = useState(null);
  const [miss, setMiss] = useState(0);
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [sheet, setSheet] = useState(null);

  useEffect(() => {
    mini
      .courseLesson(id)
      .then((d) => setLesson(d.lesson))
      .catch((e) => setErr(e?.response?.data || { error: t.error }));
  }, [id, t.error]);
  const steps = useMemo(() => (lesson ? stepsOf(lesson) : []), [lesson]);

  if (err) {
    return (
      <div className={m.center}>
        <div className={m.centerBox}>
          {err.plan ? <Lock size={40} color="#c9953a" /> : <Hero mood="think" size={110} />}
          <p>{err.plan ? t.course.planText : err.error || t.error}</p>
          {err.plan && <button type="button" className={`${m.btn} ${m.btnGold}`} onClick={ctx.openPlans}>{t.lib.upgrade}</button>}
          <button type="button" className={m.btnGhost} onClick={ctx.close}>{t.toMap}</button>
        </div>
      </div>
    );
  }
  if (!lesson) return <Spinner />;
  if (result) return <FinishScreen result={result} ctx={ctx} />;

  const step = steps[at];
  const next = async () => {
    setRes(null);
    if (at + 1 < steps.length) return setAt(at + 1);
    setBusy(true);
    try {
      const r = await mini.courseComplete(id);
      sfx(r.unitDone ? "unit" : "lesson");
      setResult(r);
      ctx.reloadPath();
    } catch (e) {
      setErr(e?.response?.data || { error: t.error });
    } finally {
      setBusy(false);
    }
  };
  const qi = step.startsWith("q:") ? Number(step.slice(2)) : null;
  const cur = qi !== null ? lesson.quiz.find((x) => x.i === qi) : null;
  const check = async (opt) => {
    const r = await mini.courseAnswer(id, qi, opt);
    if (!r.ok) setMiss((n) => n + 1);
    setRes(r);
  };

  return (
    <div className={`${l.player} ${m.fadeIn}`} key={`${at}-${res ? 1 : 0}`}>
      <div className={l.topbar}>
        <button type="button" className={l.close} onClick={ctx.close} aria-label={t.toMap}><X /></button>
        <div className={c.bar} role="progressbar" aria-valuemin={0} aria-valuemax={steps.length} aria-valuenow={at}>
          {steps.map((x, i) => <i key={x} className={i < at ? c.on : i === at ? c.now : ""} />)}
        </div>
        {miss > 0 && <span className={c.mistakes}>−{miss}</span>}
      </div>

      {step === "intro" && (
        <div className={q.screen}>
          <div className={q.tag}>{lesson.level} · {lesson.lessonTitle}</div>
          <div className={st.heroRow}>
            <Hero mood="wave" size={96} />
            <h2 className={st.h2}>{lesson.part?.[0] === 1 ? t.met.goalTitle : t.course.learnTitle}</h2>
          </div>
          <ul className={st.goals}>{lesson.goals.map((g) => <li key={g}><ChevronRight aria-hidden="true" />{g}</li>)}</ul>
          <p className={st.lead}>{t.xp.rule}</p>
          <div className={q.footer}>
            <button type="button" className={q.main} onClick={next}>{t.met.start} <ChevronRight className={q.chev} /></button>
          </div>
        </div>
      )}

      {step.startsWith("card:") && (
        <CourseCard card={lesson.cards[Number(step.slice(5))]} i={Number(step.slice(5))} n={lesson.cards.length} t={t} onNext={next} />
      )}

      {cur && !res && (
        <QuestionView icon="Scale" title={cur.kind === "test" ? null : t.course.checkTitle} tag={cur.card === null ? t.course.fixTag : t.course.checkTag} text={cur.text} question={cur.q} options={cur.options} onCheck={check} t={t} />
      )}
      {cur && res && (
        <ResultView
          res={res}
          t={t}
          nextLabel={res.ok ? t.continue : t.tryAgain}
          onNext={res.ok ? next : () => setRes(null)}
          onSource={() => setSheet("source")}
          onExplain={() => setSheet("ai")}
        />
      )}

      {step === "apply" && <ApplyView lesson={{ title: lesson.title, steps: lesson.steps }} t={t} busy={busy} onNext={next} />}

      {sheet && cur && (
        <ExplainSheet req={{ kind: "course", id, step: cur.i }} res={res} lang={lang} t={t} sourceOnly={sheet === "source"} onClose={() => setSheet(null)} />
      )}
    </div>
  );
}

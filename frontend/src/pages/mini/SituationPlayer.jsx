/**
 * VAZIYAT: voqea bosqichma-bosqich rivojlanadi, har qadamda foydalanuvchi
 * qanday yo'l tutishni tanlaydi. Oxirida natija va +10 XP (bir marta).
 */
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import ChoiceCard from "./ChoiceCard";
import ExplainSheet from "./ExplainSheet";
import FinishScreen from "./FinishScreen";
import m from "./Mini.module.css";
import s from "./Lesson.module.css";

export default function SituationPlayer({ id, ctx }) {
  const { t, lang } = ctx;
  const [sit, setSit] = useState(null);
  const [err, setErr] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]); // har qadamdagi birinchi tanlov
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [explain, setExplain] = useState(null);

  useEffect(() => {
    mini
      .situation(id)
      .then((d) => setSit(d.situation))
      .catch((e) => setErr(e?.response?.data?.error || t.error));
  }, [id, t.error]);

  const answer = async (i) => {
    const r = await mini.step(id, step, i);
    setAnswers((a) => {
      const next = [...a];
      if (next[step] === undefined) next[step] = i;
      return next;
    });
    return r;
  };

  const next = async () => {
    if (step + 1 < sit.steps.length) return setStep(step + 1);
    setBusy(true);
    try {
      const r = await mini.finish(id, answers);
      setResult(r);
      ctx.reloadPath();
    } catch (e) {
      setErr(e?.response?.data?.error || t.error);
    } finally {
      setBusy(false);
    }
  };

  if (err) {
    return (
      <div className={m.center}>
        <div className={m.centerBox}>
          <Hero mood="think" size={110} />
          <p>{err}</p>
          <button type="button" className={m.btn} onClick={ctx.close}>{t.toMap}</button>
        </div>
      </div>
    );
  }
  if (!sit) return <Spinner />;
  if (result) {
    return <FinishScreen result={result} ctx={ctx} title={t.sitDone} sub={t.sitScore(result.score, result.total)} />;
  }

  const cur = sit.steps[step];
  const total = sit.steps.length;

  return (
    <div className={`${s.player} ${m.fadeIn}`} key={step}>
      <div className={s.topbar}>
        <button type="button" className={s.close} onClick={ctx.close} aria-label={t.toMap}><X /></button>
        <div className={s.progress} role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step}>
          <i style={{ width: `${((step + (answers[step] !== undefined ? 1 : 0.3)) / total) * 100}%` }} />
        </div>
      </div>

      <div className={s.stepTag}>{t.tabs.sit} · {step + 1} / {total}</div>
      <h2 className={s.title}>{sit.title}</h2>

      <div className={s.story}>
        <Hero mood="think" size={76} />
        <div className={s.bubble}><p>{cur.text}</p></div>
      </div>

      <ChoiceCard
        q={cur.q}
        options={cur.options}
        onAnswer={answer}
        onExplain={() => setExplain({ kind: "situation", id, step })}
        t={t}
      />

      <div className={s.footer}>
        <button type="button" className={`${m.btn} ${step + 1 === total ? m.btnGold : ""}`} disabled={answers[step] === undefined || busy} onClick={next}>
          {t.continue}
        </button>
      </div>

      {explain && <ExplainSheet req={explain} lang={lang} t={t} onClose={() => setExplain(null)} />}
    </div>
  );
}

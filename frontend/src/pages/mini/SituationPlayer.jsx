/**
 * VAZIYAT: voqea bosqichma-bosqich rivojlanadi — har qadamda savol ekrani,
 * keyin natija (qalqon gapiradi). Oxirida natija va +10 XP (bir marta).
 */
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { mini } from "./miniApi";
import { sfx } from "./sound";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
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
  const [res, setRes] = useState(null); // joriy qadam natijasi
  const [result, setResult] = useState(null);
  const [sheet, setSheet] = useState(null);

  useEffect(() => {
    mini
      .situation(id)
      .then((d) => setSit(d.situation))
      .catch((e) => setErr(e?.response?.data?.error || t.error));
  }, [id, t.error]);

  const check = async (i) => {
    const r = await mini.step(id, step, i);
    setAnswers((a) => {
      const next = [...a];
      if (next[step] === undefined) next[step] = i;
      return next;
    });
    setRes(r);
  };

  const next = async () => {
    setRes(null);
    if (step + 1 < sit.steps.length) return setStep(step + 1);
    try {
      const r = await mini.finish(id, answers);
      setResult(r);
      sfx("lesson");
      ctx.reloadPath();
    } catch (e) {
      setErr(e?.response?.data?.error || t.error);
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
  const last = step + 1 === total;

  return (
    <div className={`${s.player} ${m.fadeIn}`} key={`${step}-${res ? 1 : 0}`}>
      <div className={s.topbar}>
        <button type="button" className={s.close} onClick={ctx.close} aria-label={t.toMap}><X /></button>
        <div className={s.progress} role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step}>
          <i style={{ width: `${((step + (res ? 1 : 0.3)) / total) * 100}%` }} />
        </div>
      </div>

      {!res ? (
        <QuestionView
          icon={sit.icon}
          tag={`${sit.title} · ${step + 1} / ${total}`}
          text={cur.text}
          question={cur.q}
          options={cur.options}
          onCheck={check}
          t={t}
        />
      ) : (
        <ResultView
          res={res}
          t={t}
          nextLabel={last ? t.finishBtn : t.nextQuestion}
          onNext={next}
          onSource={() => setSheet("source")}
          onExplain={() => setSheet("ai")}
        />
      )}

      {sheet && (
        <ExplainSheet req={{ kind: "situation", id, step }} res={res} lang={lang} t={t} sourceOnly={sheet === "source"} onClose={() => setSheet(null)} />
      )}
    </div>
  );
}

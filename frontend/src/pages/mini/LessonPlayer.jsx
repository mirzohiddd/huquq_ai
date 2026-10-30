/**
 * BITTA DARS: qisqa voqea → tanlov (3 javob + izoh) → o'yin (ketma-ketlik
 * yoki hujjatdan topish) → «Dars tugadi! +20 XP» va qahramon bayrami.
 * Javoblar serverda tekshiriladi; XP faqat birinchi yakunda beriladi.
 */
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { mini } from "./miniApi";
import { haptic } from "./tg";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import ChoiceCard from "./ChoiceCard";
import OrderGame from "./OrderGame";
import SpotGame from "./SpotGame";
import ExplainSheet from "./ExplainSheet";
import FinishScreen from "./FinishScreen";
import m from "./Mini.module.css";
import s from "./Lesson.module.css";

const STEPS = ["story", "choice", "game", "finish"];

export default function LessonPlayer({ id, ctx }) {
  const { t, lang } = ctx;
  const [lesson, setLesson] = useState(null);
  const [err, setErr] = useState("");
  const [step, setStep] = useState(0);
  const [first, setFirst] = useState(null); // birinchi tanlangan variant
  const [answered, setAnswered] = useState(false);
  const [solution, setSolution] = useState(null); // o'yin yechimi (order | line)
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [explain, setExplain] = useState(null);

  useEffect(() => {
    mini
      .lesson(id)
      .then((d) => setLesson(d.lesson))
      .catch((e) => setErr(e?.response?.data?.error || t.error));
  }, [id, t.error]);

  const answer = async (i) => {
    const r = await mini.choice(id, i);
    if (first === null) setFirst(i);
    setAnswered(true);
    return r;
  };

  const finish = async () => {
    setBusy(true);
    try {
      const body = { firstOption: first, ...(lesson.game.type === "order" ? { order: solution } : { line: solution }) };
      const r = await mini.complete(id, body);
      setResult(r);
      setStep(3);
      haptic("success");
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
  if (!lesson) return <Spinner />;
  if (step === 3) return <FinishScreen result={result} ctx={ctx} />;

  const name = STEPS[step];
  const canNext = name === "story" || (name === "choice" && answered) || (name === "game" && solution !== null);
  const GameView = lesson.game.type === "order" ? OrderGame : SpotGame;
  const check = (body) => mini.game(id, body);

  return (
    <div className={`${s.player} ${m.fadeIn}`} key={step}>
      <div className={s.topbar}>
        <button type="button" className={s.close} onClick={ctx.close} aria-label={t.toMap}><X /></button>
        <div className={s.progress} role="progressbar" aria-valuemin={0} aria-valuemax={3} aria-valuenow={step}>
          <i style={{ width: `${((step + (canNext ? 1 : 0.4)) / 3) * 100}%` }} />
        </div>
      </div>

      <div className={s.stepTag}>{t[name]}</div>
      <h2 className={s.title}>{lesson.title}</h2>

      {name === "story" && (
        <div className={s.story}>
          <Hero mood="think" size={76} />
          <div className={s.bubble}><p>{lesson.story}</p></div>
        </div>
      )}

      {name === "choice" && (
        <ChoiceCard
          q={lesson.choice.q}
          options={lesson.choice.options}
          onAnswer={answer}
          onExplain={() => setExplain({ kind: "lesson", id })}
          t={t}
        />
      )}

      {name === "game" && <GameView game={lesson.game} check={check} onSolved={setSolution} t={t} />}

      <div className={s.footer}>
        <button
          type="button"
          className={`${m.btn} ${name === "game" && canNext ? m.btnGold : ""}`}
          disabled={!canNext || busy}
          onClick={() => (name === "game" ? finish() : setStep(step + 1))}
        >
          {t.continue}
        </button>
      </div>

      {explain && <ExplainSheet req={explain} lang={lang} t={t} onClose={() => setExplain(null)} />}
    </div>
  );
}

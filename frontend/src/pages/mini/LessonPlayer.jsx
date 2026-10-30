/**
 * BITTA DARS — natijaga yo'naltirilgan metodika bo'yicha 6 bosqich:
 *   1-2. Maqsad + qoida («Bu darsdan keyin siz…», vaziyatdan OLDIN)
 *   3.   Vaziyat («Siz nima qilardingiz?»)
 *   4.   Tahlil (to'g'ri javob, «Nega?», har bir variant nega to'g'ri/xato)
 *   5.   Mashq (ketma-ketlik yoki hujjatdan topish o'yini)
 *   6.   Amal («Hayotda qo'llash» — aniq qadamlar)
 * → Yakun: «Endi siz qila olasiz» + XP. Bo'lim tugasa — bo'lim imtihoniga yo'l.
 * Javoblar serverda tekshiriladi; XP faqat birinchi yakunda beriladi.
 */
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { mini } from "./miniApi";
import { sfx } from "./sound";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
import OrderGame from "./OrderGame";
import SpotGame from "./SpotGame";
import ExplainSheet from "./ExplainSheet";
import FinishScreen from "./FinishScreen";
import { Stages, IntroView, ApplyView } from "./LessonSteps";
import m from "./Mini.module.css";
import s from "./Lesson.module.css";

const STAGE = { intro: 1, question: 2, result: 3, game: 4, apply: 5 };

export default function LessonPlayer({ id, ctx }) {
  const { t, lang } = ctx;
  const [lesson, setLesson] = useState(null);
  const [err, setErr] = useState("");
  const [phase, setPhase] = useState("intro"); // intro | question | result | game | apply | finish
  const [first, setFirst] = useState(null); // birinchi tanlangan variant
  const [res, setRes] = useState(null);
  const [solution, setSolution] = useState(null);
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [sheet, setSheet] = useState(null); // "ai" | "source"

  useEffect(() => {
    mini
      .lesson(id)
      .then((d) => setLesson(d.lesson))
      .catch((e) => setErr(e?.response?.data?.error || t.error));
  }, [id, t.error]);

  const check = async (i) => {
    const r = await mini.choice(id, i);
    if (first === null) setFirst(i);
    setRes(r);
    setPhase("result");
  };

  const finish = async () => {
    setBusy(true);
    try {
      const body = { firstOption: first, ...(lesson.game.type === "order" ? { order: solution } : { line: solution }) };
      const r = await mini.complete(id, body);
      setResult(r);
      setPhase("finish");
      sfx(r.unitDone ? "unit" : "lesson");
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
  if (phase === "finish") return <FinishScreen result={result} ctx={ctx} />;

  const GameView = lesson.game.type === "order" ? OrderGame : SpotGame;

  return (
    <div className={`${s.player} ${m.fadeIn}`} key={phase}>
      <div className={s.topbar}>
        <button type="button" className={s.close} onClick={ctx.close} aria-label={t.toMap}><X /></button>
        <div style={{ flex: 1, minWidth: 0 }}><Stages t={t} at={STAGE[phase]} /></div>
      </div>

      {phase === "intro" && <IntroView lesson={lesson} t={t} onNext={() => setPhase("question")} />}

      {phase === "question" && (
        <QuestionView
          icon={lesson.icon}
          tag={lesson.title}
          text={lesson.story}
          question={lesson.choice.q}
          options={lesson.choice.options}
          onCheck={check}
          t={t}
        />
      )}

      {phase === "result" && (
        <ResultView
          res={res}
          t={t}
          nextLabel={res.ok ? t.continue : t.tryAgain}
          onNext={() => setPhase(res.ok ? "game" : "question")}
          onSource={() => setSheet("source")}
          onExplain={() => setSheet("ai")}
        />
      )}

      {phase === "game" && (
        <>
          <div className={s.stepTag}>{t.game}</div>
          <h2 className={s.title}>{lesson.title}</h2>
          <GameView game={lesson.game} check={(body) => mini.game(id, body)} onSolved={setSolution} t={t} />
          <div className={s.footer}>
            <button type="button" className={`${m.btn} ${solution !== null ? m.btnGold : ""}`} disabled={solution === null} onClick={() => setPhase("apply")}>
              {t.continue}
            </button>
          </div>
        </>
      )}

      {phase === "apply" && <ApplyView lesson={lesson} t={t} busy={busy} onNext={finish} />}

      {sheet && (
        <ExplainSheet req={{ kind: "lesson", id }} res={res} lang={lang} t={t} sourceOnly={sheet === "source"} onClose={() => setSheet(null)} />
      )}
    </div>
  );
}

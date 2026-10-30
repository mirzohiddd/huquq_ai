/**
 * BO'LIM IMTIHONI — bo'limning 5 ta darsi bo'yicha nazorat (savol → natija).
 * Kamida `pass` ta to'g'ri — bo'lim o'zlashtirildi, +XP (xatolarga qarab) va
 * keyingi bo'lim ochiladi; aks holda darslarni takrorlab qayta topshiriladi.
 * Ball serverda. Kunning birinchi XP'si bo'lsa — avval seriya animatsiyasi.
 */
import React, { useEffect, useState } from "react";
import { X, ChevronRight, GraduationCap } from "lucide-react";
import { mini } from "./miniApi";
import { sfx } from "./sound";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
import WrongView from "./WrongView";
import StreakScreen from "./StreakScreen";
import m from "./Mini.module.css";
import l from "./Lesson.module.css";
import q from "./Quiz.module.css";
import lib from "./Exam.module.css";

export default function ExamPlayer({ unit, ctx }) {
  const { t } = ctx;
  const [exam, setExam] = useState(null);
  const [err, setErr] = useState("");
  const [i, setI] = useState(-1); // -1 — kirish ekrani
  const [res, setRes] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [final, setFinal] = useState(null);
  const [streak, setStreak] = useState(false);

  const load = () =>
    mini
      .exam(unit)
      .then(setExam)
      .catch((e) => setErr(e?.response?.data?.plan ? t.course.planText : e?.response?.data?.error || t.error));
  useEffect(() => {
    load();
  }, [unit]);

  const restart = () => {
    setFinal(null);
    setAnswers([]);
    setRes(null);
    setI(0);
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
  if (!exam) return <Spinner />;
  const total = exam.items.length;

  if (final && streak) return <StreakScreen from={final.streakFrom || 0} to={final.streak || 1} week={final.week || []} t={t} onDone={() => setStreak(false)} />;
  if (final) {
    return (
      <div className={`${lib.result} ${m.fadeIn}`}>
        <Hero mood={final.passed ? "cheer" : "think"} size={160} />
        <h2>{final.passed ? t.met.examPassed : t.met.examFailed}</h2>
        <div className={lib.ring} style={{ "--p": Math.round((final.score / final.total) * 100) }}><span>{final.score}/{final.total}</span></div>
        <p>{t.met.examScore(final.score, final.total)}{final.xp > 0 ? ` · +${final.xp} XP` : ""}</p>
        {final.xp > 0 && <p>{final.mistakes ? t.xp.lost(final.mistakes, final.maxXp) : t.xp.perfect}</p>}
        <p style={{ marginTop: 8 }}>{final.passed ? t.met.nextUnit : t.met.examRetry}</p>
        <div className={q.footer} style={{ display: "grid", gap: 10 }}>
          {!final.passed && <button type="button" className={q.main} onClick={restart}>{t.met.retry}</button>}
          <button type="button" className={final.passed ? q.main : q.ghost} onClick={ctx.close}>{t.toMap}</button>
        </div>
      </div>
    );
  }

  if (i < 0) {
    return (
      <div className={`${q.screen} ${m.fadeIn}`}>
        <div className={q.tag}>{exam.unit.level} · {exam.unit.title}</div>
        <h2 className={q.title}>{t.met.exam}</h2>
        <div style={{ display: "grid", placeItems: "center", marginBottom: 12 }}><Hero mood="think" size={140} /></div>
        <p className={q.text}>{t.met.examSub(total, exam.pass)}</p>
        <div className={q.footer}>
          <button type="button" className={q.main} onClick={() => setI(0)}>
            <GraduationCap /> {t.met.examStart} <ChevronRight className={q.chev} />
          </button>
        </div>
      </div>
    );
  }

  const cur = exam.items[i];
  const check = async (opt) => {
    const r = await mini.examAnswer(unit, cur.key, opt);
    setAnswers((a) => {
      const n = [...a];
      if (n[i] === undefined) n[i] = opt;
      return n;
    });
    setRes(r);
  };
  const next = async () => {
    setRes(null);
    if (i + 1 < total) return setI(i + 1);
    try {
      const r = await mini.examFinish(unit, answers);
      setFinal(r);
      setStreak(!!r.streakUp);
      sfx(r.passed ? "unit" : "wrong");
      ctx.reloadPath();
    } catch (e) {
      setErr(e?.response?.data?.error || t.error);
    }
  };

  return (
    <div className={l.player} key={`${i}-${res ? 1 : 0}`}>
      <div className={l.topbar}>
        <button type="button" className={l.close} onClick={ctx.close} aria-label={t.toMap}><X /></button>
        <div className={l.progress} role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={i}>
          <i style={{ width: `${((i + (res ? 1 : 0.3)) / total) * 100}%` }} />
        </div>
      </div>
      {!res ? (
        <QuestionView icon={cur.icon} tag={`${t.met.exam} · ${i + 1} / ${total}`} text={cur.text} question={cur.q} options={cur.options} onCheck={check} t={t} />
      ) : res.ok ? (
        <ResultView res={res} t={t} nextLabel={i + 1 < total ? t.nextQuestion : t.finishBtn} onNext={next} />
      ) : (
        // Imtihonda to'g'ri javob ochilmaydi — keyingi savolga o'tiladi
        <WrongView t={t} hint={t.wrongs.exam} mainIcon="next" mainLabel={i + 1 < total ? t.nextQuestion : t.finishBtn} onMain={next} />
      )}
    </div>
  );
}

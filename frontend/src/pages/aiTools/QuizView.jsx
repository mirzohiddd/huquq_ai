import React, { useEffect, useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Printer, KeyRound, Shuffle, Loader2 } from "lucide-react";
import PrintPortal from "./PrintPortal";
import { useToolsText } from "./i18n";
import a from "./AiTools.module.css";

const LETTERS = "ABCD";

/** Test: sahifada yechish (tekshirish, ball, izoh) va chop etish (kalit bilan/kalitsiz). */
export default function QuizView({ quiz, onAgain, loading }) {
  const c = useToolsText();
  const [picked, setPicked] = useState({});
  const [checked, setChecked] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [printKey, setPrintKey] = useState(false);

  useEffect(() => {
    setPicked({});
    setChecked(false);
    setShowKey(false);
  }, [quiz]);

  const qs = quiz.questions;
  const score = qs.filter((q, i) => picked[i] === q.correct).length;
  const print = (withKey) => {
    setPrintKey(withKey);
    setTimeout(() => window.print(), 50);
  };

  return (
    <div className={a.doc}>
      <div className={`${a.toolbar} ${a.noPrint}`}>
        <div className={a.metaLine}>
          <b>{quiz.title}</b> · {quiz.gradeLabel} · {c.diff[quiz.difficulty]} · {qs.length}
          {quiz.ms != null && <span className={a.ms}> · {c.ms(quiz.ms)}</span>}
        </div>
        <div className={a.btnRow}>
          <button type="button" className={a.btnGhost} onClick={onAgain} disabled={loading}>
            {loading ? <Loader2 size={16} className={a.spin} /> : <Shuffle size={16} />} {c.again}
          </button>
          <button type="button" className={a.btnGhost} onClick={() => setShowKey((v) => !v)}>
            <KeyRound size={16} /> {showKey ? c.hideKey : c.showKey}
          </button>
          <button type="button" className={a.btnGhost} onClick={() => print(false)}>
            <Printer size={16} /> {c.printQuiz}
          </button>
          <button type="button" className={a.btnGhost} onClick={() => print(true)}>
            <Printer size={16} /> {c.printKey}
          </button>
        </div>
      </div>

      <ol className={a.qList}>
        {qs.map((q, i) => {
          const done = checked || showKey;
          return (
            <li key={i} className={a.qCard}>
              <p className={a.qText}>{q.question}</p>
              <div className={a.opts} role="radiogroup">
                {q.options.map((o, k) => {
                  const isPick = picked[i] === k;
                  const state = done ? (k === q.correct ? a.optRight : isPick ? a.optWrong : "") : isPick ? a.optPick : "";
                  return (
                    <button
                      key={k}
                      type="button"
                      role="radio"
                      aria-checked={isPick}
                      className={`${a.opt} ${state}`}
                      onClick={() => !checked && setPicked((p) => ({ ...p, [i]: k }))}
                    >
                      <span className={a.optL}>{LETTERS[k]}</span>
                      <span>{o}</span>
                    </button>
                  );
                })}
              </div>
              {checked && (
                <p className={picked[i] === q.correct ? a.okLine : a.badLine}>
                  {picked[i] === q.correct ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
                  {picked[i] === q.correct ? c.correct : `${picked[i] == null ? c.skipped : c.wrong}. ${c.answer}: ${LETTERS[q.correct]}`} — {q.explain}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className={`${a.quizFoot} ${a.noPrint}`}>
        {checked ? (
          <>
            <strong className={a.score}>{c.score(score, qs.length)}</strong>
            <button type="button" className={a.btnGhost} onClick={() => { setPicked({}); setChecked(false); }}>
              <RotateCcw size={16} /> {c.reset}
            </button>
          </>
        ) : (
          <button type="button" className={a.submit} onClick={() => setChecked(true)} disabled={!Object.keys(picked).length}>
            <CheckCircle2 size={18} /> {c.check}
          </button>
        )}
      </div>

      <PrintPortal>
        <h1 className={a.pTitle}>{quiz.title}</h1>
        <p className={a.pMeta}>{quiz.gradeLabel} · {c.diff[quiz.difficulty]} · HuquqTech</p>
        <ol className={a.pList}>
          {qs.map((q, i) => (
            <li key={i}>
              <p>{q.question}</p>
              {q.options.map((o, k) => (
                <p key={k} className={a.pOpt}>
                  {LETTERS[k]}) {o}
                </p>
              ))}
            </li>
          ))}
        </ol>
        {printKey && (
          <p className={a.pKey}>
            <b>{c.showKey}:</b> {qs.map((q, i) => `${i + 1}–${LETTERS[q.correct]}`).join(", ")}
          </p>
        )}
      </PrintPortal>
    </div>
  );
}

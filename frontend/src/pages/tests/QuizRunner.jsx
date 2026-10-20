import React, { useState } from "react";
import { ArrowLeft, Check, X as XIcon, Scale, Loader2 } from "lucide-react";
import api from "../../utils/api";
import s from "../Tests.module.css";
import l from "./LifeTest.module.css";
import { useTT } from "./text";

/**
 * Test jarayoni. ⚠️ To'g'ri javob brauzerda YO'Q (server uni yubormaydi):
 * variant tanlangach `POST /tests/:id/answer` dan to'g'ri variant va izoh
 * keladi. Javoblar `answers` da ASL indekslar bilan yig'iladi va oxirida
 * `onFinish(answers)` orqali serverga natija hisoblash uchun yuboriladi.
 *
 * Savollar va variantlar aralashtirilgan bo'lishi mumkin: `q.i` — savolning,
 * `q.order[k]` — k-variantning ASL indeksi.
 */
export default function QuizRunner({ test, t, onExit, onFinish, finishing }) {
  const tt = useTT();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null); // ko'rsatilgan tartibdagi indeks
  const [result, setResult] = useState(null); // { correct, correctIndex, explain }
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState({});

  const total = test.questions.length;
  const question = test.questions[index];
  const shownCorrect = result ? question.order.indexOf(result.correctIndex) : -1;

  async function choose(k) {
    if (picked !== null || busy) return;
    setBusy(true);
    setError("");
    try {
      const choice = question.order[k];
      const { data } = await api.post(`/tests/${test._id}/answer`, { i: question.i, choice });
      setPicked(k);
      setResult(data);
      setAnswers((a) => ({ ...a, [question.i]: choice }));
    } catch {
      setError(tt.checkError);
    } finally {
      setBusy(false);
    }
  }

  function next() {
    if (index + 1 >= total) return onFinish(answers);
    setIndex((v) => v + 1);
    setPicked(null);
    setResult(null);
    return undefined;
  }

  return (
    <div className={s.quiz}>
      <button type="button" className={s.backBtn} onClick={onExit}>
        <ArrowLeft size={16} /> {t.tests_back}
      </button>

      <div className={s.progressRow}>
        <span className={s.progressLabel}>{index + 1} / {total}</span>
        <div className={s.progressTrack}>
          <div className={s.progressFill} style={{ width: `${((index + (picked !== null ? 1 : 0)) / total) * 100}%` }} />
        </div>
      </div>

      {question.situation && (
        <div className={l.situation}>
          <span className={l.situationTag}><Scale size={13} /> {tt.situation(index + 1)}</span>
          <p className={l.situationText}>{question.situation}</p>
        </div>
      )}
      <h2 className={s.question}>{question.q}</h2>

      <div className={s.options}>
        {question.options.map((opt, k) => {
          let cls = s.option;
          if (result) {
            if (k === shownCorrect) cls = `${s.option} ${s.optionCorrect}`;
            else if (k === picked) cls = `${s.option} ${s.optionWrong}`;
            else cls = `${s.option} ${s.optionMuted}`;
          }
          return (
            <button key={k} type="button" className={cls} onClick={() => choose(k)} disabled={picked !== null || busy}>
              <span className={s.optionMark}>
                {result && k === shownCorrect && <Check size={15} />}
                {result && k === picked && k !== shownCorrect && <XIcon size={15} />}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {busy && <p className={l.hint}><Loader2 size={14} className={l.spin} /> {tt.checking}</p>}
      {error && <p className={l.error}>{error}</p>}

      {result && (
        <div className={s.explain}>
          <strong>{result.correct ? t.tests_correct : t.tests_wrong}</strong>
          <p>{result.explain}</p>
          <button type="button" className={s.nextBtn} onClick={next} disabled={finishing}>
            {index + 1 >= total ? t.tests_finish : t.tests_next}
          </button>
        </div>
      )}
    </div>
  );
}

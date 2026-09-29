import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListChecks, RotateCcw } from "lucide-react";
import api from "../../utils/api";
import { useLang } from "../../context/LangContext";
import { useL } from "./i18n";
import { useShelf } from "./shelf";
import s from "./Study.module.css";

/**
 * O'ZINI TEKSHIRISH — savollar backendda rasmiy matn va darslardagi
 * tekshirilgan vaziyatlardan tuziladi (AI'siz). To'g'ri javob berilgan
 * modda "o'rganildi" deb belgilanadi.
 */
export default function SelfCheck({ code }) {
  const L = useL();
  const { lang } = useLang();
  const { setFlag } = useShelf();
  const [qs, setQs] = useState(null);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);

  const load = useCallback(() => {
    setQs(null);
    setI(0);
    setPicked(null);
    setScore(0);
    api
      .get(`/legislation/doc/${code}/quiz`, { params: { seed: Date.now() % 100000 } })
      .then((r) => setQs(r.data.questions || []))
      .catch(() => setQs([]));
  }, [code]);

  useEffect(load, [load, lang]);

  if (qs === null) return <p className={s.muted}>{L.loading}</p>;
  if (!qs.length) return null;

  const done = i >= qs.length;
  const q = qs[i];

  const choose = (num) => {
    if (picked) return;
    setPicked(num);
    if (num === q.answer) {
      setScore((v) => v + 1);
      setFlag("studied", code, q.answer, true);
    }
  };

  return (
    <section className={s.card}>
      <div className={s.progressHead}>
        <h3>
          <ListChecks size={17} /> {L.selfCheck}
        </h3>
        {!done && (
          <span>
            {i + 1}/{qs.length}
          </span>
        )}
      </div>
      <p className={s.muted}>{L.selfCheckSub}</p>

      {done ? (
        <div className={s.result}>
          <b>
            {L.score}: {score}/{qs.length}
          </b>
          <div className={s.resultBtns}>
            <button type="button" className={s.startBtn} onClick={load}>
              <RotateCcw size={15} /> {L.again}
            </button>
            <Link to="/tests" className={s.ghostBtn}>
              {L.toTests}
            </Link>
            <Link to="/lessons" className={s.ghostBtn}>
              {L.toLessons}
            </Link>
          </div>
        </div>
      ) : (
        <div className={s.q}>
          <span className={s.qType}>{q.type === "case" ? L.qCase : L.qArticle}</span>
          <blockquote className={s.prompt}>{q.prompt}</blockquote>
          <div className={s.options}>
            {q.options.map((o) => {
              const state = !picked ? "" : o.num === q.answer ? s.optOk : o.num === picked ? s.optBad : s.optDim;
              return (
                <button key={o.num} type="button" className={`${s.opt} ${state}`} onClick={() => choose(o.num)}>
                  <b>
                    {L.art(o.num)}.
                  </b>{" "}
                  {o.title}
                </button>
              );
            })}
          </div>
          {picked && (
            <div className={s.feedback}>
              <span className={picked === q.answer ? s.ok : s.bad}>
                {picked === q.answer ? L.correct : `${L.wrong} ${L.art(q.answer)}`}
              </span>
              <Link to={`/legislation/${code}/${q.answer}`}>{L.readArticle}</Link>
              <button type="button" className={s.startBtn} onClick={() => (setI(i + 1), setPicked(null))}>
                {i + 1 < qs.length ? L.nextQ : L.finish}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

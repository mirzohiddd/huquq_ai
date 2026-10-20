import React from "react";
import { Link } from "react-router-dom";
import { Trophy, RotateCcw, ArrowLeft, BookOpen, Lock, ArrowRight } from "lucide-react";
import s from "../Tests.module.css";
import l from "./LifeTest.module.css";
import { useTT } from "./text";

/**
 * Natija — SERVER hisoblagan ball (`POST /tests/:id/submit`).
 * Natija o'tish chegarasidan (80%) past bo'lsa shu mavzudagi darslar
 * tavsiya qilinadi. ⚠️ Qulflangan dars havolasi baribir `/lessons?dars=…`
 * ga olib boradi: u yerda dars ochilmaydi (server ham, sahifa ham tarifni
 * tekshiradi) va foydalanuvchi tariflarga yo'naltiriladi.
 */
export default function QuizResult({ result, t, onRetry, onExit }) {
  const tt = useTT();
  const { score, total, percent, passed, passPercent, lessons = [] } = result;

  return (
    <div className={`${s.result} ${!passed ? l.resultWide : ""}`}>
      <span className={s.resultIcon}><Trophy size={30} /></span>
      <h2>{t.tests_result_title}</h2>
      <p className={s.resultScore}>{score} / {total}</p>
      <p className={s.resultPercent}>{percent}%</p>
      <p className={l.passLine}>{tt.passLine(passPercent)}</p>
      <p className={s.resultMsg}>
        {percent >= passPercent ? t.tests_msg_great : percent >= 50 ? t.tests_msg_ok : t.tests_msg_low}
      </p>

      {!passed && (
        <div className={l.rec}>
          <h3><BookOpen size={17} /> {tt.recTitle}</h3>
          <p>{tt.recSub(percent, passPercent)}</p>
          {lessons.length ? (
            <ul className={l.recList}>
              {lessons.map((ls) => (
                <li key={ls._id}>
                  <Link to={`/lessons?dars=${ls._id}`} className={`${l.recItem} ${ls.locked ? l.recLocked : ""}`}>
                    <span className={l.recIcon}>{ls.locked ? <Lock size={15} /> : <BookOpen size={15} />}</span>
                    <span className={l.recBody}>
                      <b>{ls.title}</b>
                      <small>{ls.locked ? tt.recLocked : tt.recOpen}</small>
                    </span>
                    <ArrowRight size={15} />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>{tt.recNone}</p>
          )}
          <Link to="/lessons" className={l.recAll}>{tt.recAll} <ArrowRight size={14} /></Link>
        </div>
      )}

      <div className={s.resultActions}>
        <button type="button" className={s.retryBtn} onClick={onRetry}>
          <RotateCcw size={15} /> {t.tests_retry}
        </button>
        <button type="button" className={s.backBtn} onClick={onExit}>
          <ArrowLeft size={15} /> {t.tests_back}
        </button>
      </div>
    </div>
  );
}

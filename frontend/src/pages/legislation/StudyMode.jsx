import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, CheckCircle2, Circle, Sparkles, BookOpen, ListChecks } from "lucide-react";
import { useL } from "./i18n";
import { useShelf } from "./shelf";
import SelfCheck from "./SelfCheck";
import s from "./Study.module.css";

/**
 * O'RGANISH REJIMI: muhim moddalar (darslarda eng ko'p tushuntirilgan)
 * → har birida oddiy tushuntirish va misol (modda sahifasida) →
 * o'rganilganini belgilash → o'zini tekshirish (savollar, mini-vaziyatlar).
 */
export default function StudyMode({ code, data }) {
  const L = useL();
  const { isStudied, setFlag } = useShelf();
  const [started, setStarted] = useState(false);
  const list = data.important.length ? data.important : [];
  const done = list.filter((a) => isStudied(code, a.num)).length;
  const pct = list.length ? Math.round((done / list.length) * 100) : 0;

  if (!started) {
    return (
      <section className={s.intro}>
        <span className={s.introIcon}>
          <GraduationCap size={26} />
        </span>
        <h3>{L.studyTitle}</h3>
        <p>{L.studySub}</p>
        <ul className={s.introList}>
          <li>
            <Sparkles size={15} /> {L.important}: <b>{list.length}</b>
          </li>
          <li>
            <BookOpen size={15} /> {L.plain}, {L.example.toLowerCase()}
          </li>
          <li>
            <ListChecks size={15} /> {L.selfCheck}
          </li>
        </ul>
        <button type="button" className={s.startBtn} onClick={() => setStarted(true)}>
          {L.studyStart}
        </button>
        {done > 0 && (
          <p className={s.muted}>
            {L.progress}: {done}/{list.length}
          </p>
        )}
      </section>
    );
  }

  return (
    <div className={s.wrap}>
      <section className={s.card}>
        <div className={s.progressHead}>
          <h3>{L.important}</h3>
          <span>
            {L.progress}: {done}/{list.length}
          </span>
        </div>
        <div className={s.bar} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <i style={{ width: `${pct}%` }} />
        </div>
        <ol className={s.list}>
          {list.map((a) => {
            const on = isStudied(code, a.num);
            return (
              <li key={a.num} className={on ? s.itemDone : ""}>
                <button
                  type="button"
                  className={s.check}
                  onClick={() => setFlag("studied", code, a.num, !on)}
                  aria-label={on ? L.unmark : L.markStudied}
                  title={on ? L.unmark : L.markStudied}
                >
                  {on ? <CheckCircle2 size={19} /> : <Circle size={19} />}
                </button>
                <Link to={`/legislation/${code}/${a.num}`} className={s.itemLink}>
                  <b>
                    {L.art(a.num)}.
                  </b>{" "}
                  {a.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <SelfCheck code={code} />
    </div>
  );
}

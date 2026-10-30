/**
 * TAKRORLASH — «Bilimingizni mustahkamlang»: xato qilingan savollar (bo'lmasa —
 * tugatilgan darslardan mashq), statistika va haftalik faollik. «Mashqni
 * boshlash» — savollar ketma-ket (savol → natija). To'g'ri javob +5 XP.
 */
import React, { useCallback, useEffect, useState } from "react";
import { ChevronRight, Check, X, ChartColumn } from "lucide-react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
import ExplainSheet from "./ExplainSheet";
import m from "./Mini.module.css";
import s from "./Screens.module.css";

/* "L:<dars>" → dars tanlovi, "S:<vaziyat>:<qadam>" → vaziyat qadami */
const explainReq = (key) => {
  const [kind, id, step] = key.split(":");
  return kind === "L" ? { kind: "lesson", id } : { kind: "situation", id, step: Number(step) };
};

function Runner({ items, ctx, onDone }) {
  const { t, lang } = ctx;
  const [i, setI] = useState(0);
  const [res, setRes] = useState(null);
  const [sheet, setSheet] = useState(null);
  const q = items[i];

  const check = async (opt) => {
    const r = await mini.reviewAnswer(q.key, opt);
    if (r.ok) ctx.reloadPath();
    setRes(r);
  };
  const next = () => {
    setRes(null);
    if (i + 1 < items.length) setI(i + 1);
    else onDone();
  };

  return (
    <div key={`${i}-${res ? 1 : 0}`}>
      {!res ? (
        <QuestionView icon={q.icon} tag={`${q.title} · ${i + 1} / ${items.length}`} text={q.text} question={q.q} options={q.options} onCheck={check} t={t} />
      ) : (
        <ResultView res={res} t={t} nextLabel={i + 1 < items.length ? t.nextQuestion : t.finishBtn} onNext={next} onSource={() => setSheet("source")} onExplain={() => setSheet("ai")} />
      )}
      {sheet && <ExplainSheet req={explainReq(q.key)} res={res} lang={lang} t={t} sourceOnly={sheet === "source"} onClose={() => setSheet(null)} />}
    </div>
  );
}

export default function ReviewTab({ ctx }) {
  const { t } = ctx;
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [run, setRun] = useState(false);

  const load = useCallback(() => mini.review().then(setData).catch(() => setErr(true)), []);
  useEffect(() => {
    load();
  }, [load]);

  if (err) return <p className={m.screenSub}>{t.error}</p>;
  if (!data) return <Spinner />;

  if (run && data.items.length) {
    return (
      <Runner
        items={data.items}
        ctx={ctx}
        onDone={() => {
          setRun(false);
          setData(null);
          load();
        }}
      />
    );
  }

  return (
    <div className={m.fadeIn}>
      <h1 className={s.title}>{t.tabs.review}</h1>
      <p className={s.sub}>{t.reviewSub}</p>

      <div className={s.intro}>
        <div className={s.introArt} aria-hidden="true">
          <div className={s.doc}>
            <i /><i /><i /><i />
            <span className={s.docCheck}><Check /></span>
          </div>
          <Hero mood="wave" size={104} />
        </div>
        <p>{data.items.length ? t.reviewText : t.reviewEmpty}</p>
        <button type="button" className={s.cta} disabled={!data.items.length} onClick={() => setRun(true)}>
          {t.startPractice} <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className={s.duo}>
        <div className={s.box}>
          <span className={s.boxIcon}><X aria-hidden="true" /></span>
          <div>
            <small>{t.mistakesLabel}</small>
            <b>{data.mistakes} {t.qUnit}</b>
          </div>
        </div>
        <div className={s.box}>
          <span className={`${s.boxIcon} ${s.boxGold}`}><ChartColumn aria-hidden="true" /></span>
          <div>
            <small>{t.prevLessons}</small>
            <b>{data.topics} {t.topicUnit}</b>
          </div>
        </div>
      </div>

      <div className={s.card}>
        <h3>{t.weekActivity}</h3>
        <div className={s.dots}>
          {data.week.map((d, i) => (
            <div key={d.day}>
              <span>{t.weekDays[i]}</span>
              <i className={`${d.active ? s.on : ""} ${d.today ? s.today : ""}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

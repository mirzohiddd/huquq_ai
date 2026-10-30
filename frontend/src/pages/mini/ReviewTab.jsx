/**
 * TAKRORLASH — avval xato qilingan savollar. To'g'ri javob → ro'yxatdan chiqadi, +5 XP.
 */
import React, { useEffect, useState } from "react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import ChoiceCard from "./ChoiceCard";
import ExplainSheet from "./ExplainSheet";
import m from "./Mini.module.css";
import s from "./Tabs.module.css";

/* "L:<dars>" → dars tanlovi, "S:<vaziyat>:<qadam>" → vaziyat qadami */
const explainReq = (key) => {
  const [kind, id, step] = key.split(":");
  return kind === "L" ? { kind: "lesson", id } : { kind: "situation", id, step: Number(step) };
};

export default function ReviewTab({ ctx }) {
  const { t, lang } = ctx;
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [explain, setExplain] = useState(null);

  useEffect(() => {
    mini.review().then(setData).catch(() => setErr(true));
  }, []);

  const answer = async (key, i) => {
    const r = await mini.reviewAnswer(key, i);
    if (r.ok) ctx.reloadPath();
    return r;
  };

  if (err) return <p className={m.screenSub}>{t.error}</p>;
  if (!data) return <Spinner />;

  return (
    <div className={m.fadeIn}>
      <h1 className={m.screenTitle}>{t.tabs.review}</h1>
      {data.items.length === 0 ? (
        <div className={`${m.card} ${s.empty}`}>
          <Hero mood="happy" size={110} />
          <p>{t.reviewEmpty}</p>
          {data.reviewed > 0 && <small>{t.reviewed}: <b>{data.reviewed}</b></small>}
        </div>
      ) : (
        <>
          <p className={m.screenSub}>{t.reviewIntro}</p>
          {data.items.map((q) => (
            <div key={q.key} className={`${m.card} ${s.qCard}`}>
              <div className={s.qTitle}>{q.title}</div>
              <p className={s.qText}>{q.text}</p>
              <ChoiceCard q={q.q} options={q.options} onAnswer={(i) => answer(q.key, i)} onExplain={() => setExplain(explainReq(q.key))} t={t} />
            </div>
          ))}
        </>
      )}
      {explain && <ExplainSheet req={explain} lang={lang} t={t} onClose={() => setExplain(null)} />}
    </div>
  );
}

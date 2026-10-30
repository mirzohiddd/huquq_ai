/**
 * TAKRORLASH — «Bilimingizni mustahkamlang»: xato qilingan savollar QILINGAN
 * TARTIBDA ro'yxat bo'lib turadi. Bittasini bosib yoki «Hammasini ketma-ket»
 * bilan qayta yechiladi. To'g'ri javob — xato ro'yxatdan chiqadi, +2 XP
 * (maqsad — xatoni tushunish). Xato javobda to'g'ri javob ochilmaydi.
 */
import React, { useCallback, useEffect, useState } from "react";
import { ChevronRight, Check, X, ChartColumn, ListChecks, Info } from "lucide-react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import ReviewRunner from "./ReviewRunner";
import m from "./Mini.module.css";
import s from "./Screens.module.css";
import r from "./Review.module.css";

export default function ReviewTab({ ctx }) {
  const { t } = ctx;
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [run, setRun] = useState(null); // mashq qilinayotgan savollar

  const load = useCallback(() => mini.review().then(setData).catch(() => setErr(true)), []);
  useEffect(() => {
    load();
  }, [load]);

  if (err) return <p className={m.screenSub}>{t.error}</p>;
  if (!data) return <Spinner />;

  if (run?.length) {
    return (
      <ReviewRunner
        items={run}
        ctx={ctx}
        onDone={() => {
          setRun(null);
          setData(null);
          load();
          ctx.reloadPath();
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  const items = data.items;
  return (
    <div className={m.fadeIn}>
      <h1 className={s.title}>{t.tabs.review}</h1>
      <p className={s.sub}>{t.reviewSub}</p>

      {!items.length && (
        <div className={s.intro}>
          <div className={s.introArt} aria-hidden="true">
            <div className={s.doc}>
              <i /><i /><i /><i />
              <span className={s.docCheck}><Check /></span>
            </div>
            <Hero mood="cheer" size={104} />
          </div>
          <p>{t.reviewEmpty}</p>
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className={r.head}>
            <h3>{t.wrongs.list}</h3>
            <span>{items.length}</span>
          </div>
          <p className={r.hint}>{t.wrongs.listSub}</p>
          <ol className={r.list}>
            {items.map((it, i) => (
              <li key={it.key}>
                <button type="button" className={r.item} style={{ "--i": Math.min(i, 12) }} onClick={ctx.gated(() => setRun([it]))}>
                  <span className={r.num}>{i + 1}</span>
                  <span className={r.body}>
                    <small>{it.title}</small>
                    <b>{it.q}</b>
                  </span>
                  <ChevronRight className={r.chev} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ol>
          <p className={r.noXp}><Info aria-hidden="true" />{t.wrongs.noXp}</p>
          {items.length > 1 && (
            <div className={r.dock}>
              <button type="button" className={s.cta} onClick={ctx.gated(() => setRun(items))}>
                <ListChecks aria-hidden="true" /> {t.wrongs.all} <ChevronRight aria-hidden="true" />
              </button>
            </div>
          )}
        </>
      )}

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

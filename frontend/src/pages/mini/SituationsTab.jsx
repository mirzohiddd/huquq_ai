/**
 * VAZIYATLAR — «Hayotga yaqin mavzular»: toifa kartalari (har birida 5 vaziyat,
 * oltin progress). Toifa bosilsa — uning vaziyatlari ro'yxati.
 */
import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft, CircleCheck } from "lucide-react";
import { mini } from "./miniApi";
import { iconOf } from "./icons";
import { sfx } from "./sound";
import { Spinner } from "./Gate";
import m from "./Mini.module.css";
import s from "./Screens.module.css";

export default function SituationsTab({ ctx }) {
  const { t } = ctx;
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [open, setOpen] = useState(null); // tanlangan toifa kaliti

  useEffect(() => {
    mini.situations().then(setData).catch(() => setErr(true));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [open]);

  if (err) return <p className={m.screenSub}>{t.error}</p>;
  if (!data) return <Spinner />;

  const cat = open && data.cats.find((c) => c.key === open);

  if (cat) {
    const CatIcon = iconOf(cat.icon);
    return (
      <div className={m.fadeIn}>
        <button type="button" className={s.back} onClick={() => setOpen(null)}>
          <ChevronLeft aria-hidden="true" /> {t.tabs.sit}
        </button>
        <h1 className={s.title}>{cat.title}</h1>
        <p className={s.sub}>{cat.desc}</p>
        <div className={s.list}>
          {cat.items.map((x) => {
            const Icon = x.done ? CircleCheck : iconOf(x.icon, CatIcon);
            return (
              <button key={x.id} type="button" className={s.item} onClick={() => ctx.openSituation(x.id)}>
                <span className={`${s.itemTile} ${x.done ? s.tileDone : ""}`}><Icon aria-hidden="true" /></span>
                <span className={s.itemBody}>
                  <b>{x.title}</b>
                  <small>{x.done ? `${t.solved} · ${t.sitScore(x.score ?? 0, x.steps)}` : `${x.steps} ${t.decisions} · +10 XP`}</small>
                </span>
                <ChevronRight className={s.chev} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={m.fadeIn}>
      <h1 className={s.title}>{t.tabs.sit}</h1>
      <p className={s.sub}>{t.sitSub}</p>
      <div className={s.list}>
        {data.cats.map((c) => {
          const Icon = iconOf(c.icon);
          const total = c.items.length;
          return (
            <button
              key={c.key}
              type="button"
              className={s.cat}
              onClick={() => {
                sfx("tap");
                setOpen(c.key);
              }}
            >
              <span className={s.tile}><Icon aria-hidden="true" /></span>
              <span className={s.catBody}>
                <b>{c.title}</b>
                <p>{c.desc}</p>
                <span className={s.prog}>
                  <span className={s.bar}><i style={{ width: `${total ? (c.done / total) * 100 : 0}%` }} /></span>
                  <small>{c.done} / {total}</small>
                </span>
              </span>
              <ChevronRight className={s.chev} aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

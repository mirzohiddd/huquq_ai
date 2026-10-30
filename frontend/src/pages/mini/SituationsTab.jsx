/**
 * VAZIYATLAR — hayotiy voqealar ro'yxati (bo'limlar bo'yicha).
 */
import React, { useEffect, useState } from "react";
import { Scale, CircleCheck, ChevronRight } from "lucide-react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import m from "./Mini.module.css";
import s from "./Tabs.module.css";

export default function SituationsTab({ ctx }) {
  const { t } = ctx;
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    mini.situations().then(setData).catch(() => setErr(true));
  }, []);

  if (err) return <p className={m.screenSub}>{t.error}</p>;
  if (!data) return <Spinner />;

  return (
    <div className={m.fadeIn}>
      <h1 className={m.screenTitle}>{t.tabs.sit}</h1>
      <p className={m.screenSub}>{t.sitIntro}</p>
      {data.units.map((u) => {
        const items = data.items.filter((x) => x.unit === u.key);
        if (!items.length) return null;
        return (
          <section key={u.key}>
            <div className={s.group}>{u.title}</div>
            <div className={s.list}>
              {items.map((x) => (
                <button key={x.id} type="button" className={s.item} onClick={() => ctx.openSituation(x.id)}>
                  <span className={`${s.itemIcon} ${x.done ? s.itemDone : ""}`}>
                    {x.done ? <CircleCheck aria-hidden="true" /> : <Scale aria-hidden="true" />}
                  </span>
                  <span className={s.itemBody}>
                    <b>{x.title}</b>
                    <small>{x.done ? `${t.solved} · ${t.sitScore(x.score ?? 0, x.steps)}` : `${x.steps} ${t.choice.toLowerCase()} · +10 XP`}</small>
                  </span>
                  <ChevronRight className={s.chev} aria-hidden="true" />
                </button>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

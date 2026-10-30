/**
 * SAYTDAGI BARCHA DARSLAR — mavzular (modullar) bo'yicha ro'yxat va qidiruv.
 * Ma'lumot saytning `/api/lessons` endpointidan: tarif cheklovi (yopiq
 * darslar), ruscha tarjima va progress sayt bilan umumiy.
 */
import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search, BookOpen, CircleCheck, Lock } from "lucide-react";
import { siteApi } from "./miniApi";
import { openLink } from "./tg";
import { Spinner } from "./Gate";
import SiteLessonReader from "./SiteLessonReader";
import m from "./Mini.module.css";
import sc from "./Screens.module.css";
import s from "./Library.module.css";

const PRICING = "https://www.huquqtech.uz/#pricing";
const minutesOf = (chars) => Math.max(2, Math.round((chars || 0) / 1100));

export default function SiteLessons({ ctx, startId }) {
  const { t } = ctx;
  const [list, setList] = useState(null);
  const [done, setDone] = useState({});
  const [err, setErr] = useState(false);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(startId || null);

  const load = () =>
    Promise.all([siteApi.lessons(), siteApi.progress().catch(() => ({ lessons: {} }))])
      .then(([l, p]) => {
        setList(l.lessons || []);
        setDone(Object.fromEntries(Object.entries(p.lessons || {}).filter(([, v]) => v?.completed).map(([k]) => [k, true])));
      })
      .catch(() => setErr(true));

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [open]);

  const groups = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const hit = (l) => !needle || `${l.title} ${l.desc || ""}`.toLowerCase().includes(needle);
    const map = new Map();
    (list || []).filter(hit).forEach((l) => {
      const k = t.mods[l.category] ? l.category : "other";
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(l);
    });
    return [...map.entries()];
  }, [list, q, t.mods]);

  if (open) {
    return (
      <SiteLessonReader
        id={open}
        ctx={ctx}
        done={!!done[open]}
        onBack={() => {
          setOpen(null);
          load();
        }}
      />
    );
  }

  return (
    <div className={m.fadeIn}>
      <div className={s.top}>
        <button type="button" className={s.back} onClick={ctx.close} aria-label={t.lib.back}><ChevronLeft /></button>
        <div>
          <h1 className={sc.title} style={{ margin: 0 }}>{t.lib.lessons}</h1>
        </div>
      </div>
      <p className={sc.sub}>{t.lib.lessonsSub}{list ? ` · ${list.length}` : ""}</p>
      <label className={s.search}>
        <Search aria-hidden="true" />
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.lib.search} />
      </label>

      {err && <p className={s.empty}>{t.error}</p>}
      {!list && !err && <Spinner />}
      {list && groups.length === 0 && <p className={s.empty}>{t.lib.nothing}</p>}

      {groups.map(([k, items]) => (
        <section key={k}>
          <div className={s.group}>{t.mods[k]} · {items.length}</div>
          <div className={s.list}>
            {items.map((l) => {
              const isDone = done[l._id];
              const Icon = l.locked ? Lock : isDone ? CircleCheck : BookOpen;
              return (
                <button
                  key={l._id}
                  type="button"
                  className={s.row}
                  onClick={() => (l.locked ? openLink(PRICING) : setOpen(l._id))}
                >
                  <span className={`${s.tile} ${l.locked ? s.tileLock : isDone ? s.tileDone : ""}`}><Icon aria-hidden="true" /></span>
                  <span className={s.body}>
                    <b>{l.title}</b>
                    <small>
                      {l.locked ? `${t.lib.locked} · ${t.lib.upgrade}` : `${t.lib.sections(l.sectionCount || 0)} · ${t.lib.minutes(minutesOf(l.contentChars))}${isDone ? ` · ${t.lib.done}` : ""}`}
                    </small>
                  </span>
                  <ChevronRight className={s.chev} aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

/**
 * SAYTDAGI BARCHA TESTLAR — ro'yxat. Test bosilsa — savollar mini app
 * uslubida (savol → natija) o'tadi. Ma'lumot saytning `/api/tests` dan:
 * to'g'ri javob mijozga yuborilmaydi, natija serverda hisoblanadi.
 */
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ClipboardList, Lock, Scale } from "lucide-react";
import { siteApi } from "./miniApi";
import { openLink } from "./tg";
import { Spinner } from "./Gate";
import SiteTestRunner from "./SiteTestRunner";
import m from "./Mini.module.css";
import sc from "./Screens.module.css";
import s from "./Library.module.css";

const PRICING = "https://www.huquqtech.uz/#pricing";

export default function SiteTests({ ctx }) {
  const { t } = ctx;
  const [list, setList] = useState(null);
  const [last, setLast] = useState({}); // quizId → oxirgi natija (%)
  const [err, setErr] = useState(false);
  const [open, setOpen] = useState(null);

  const load = () =>
    Promise.all([siteApi.tests(), siteApi.progress().catch(() => ({ quizResults: [] }))])
      .then(([d, p]) => {
        setList(d.tests || []);
        const map = {};
        (p.quizResults || []).forEach((r) => {
          if (r.total) map[String(r.quizId)] = Math.round((r.score / r.total) * 100);
        });
        setLast(map);
      })
      .catch(() => setErr(true));

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [open]);

  if (open) {
    return (
      <SiteTestRunner
        id={open}
        ctx={ctx}
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
        <h1 className={sc.title} style={{ margin: 0 }}>{t.lib.tests}</h1>
      </div>
      <p className={sc.sub}>{t.lib.testsSub}{list ? ` · ${list.length}` : ""}</p>

      {err && <p className={s.empty}>{t.error}</p>}
      {!list && !err && <Spinner />}

      <div className={s.list}>
        {(list || []).map((x) => {
          const Icon = x.locked ? Lock : x.kind === "life" ? Scale : ClipboardList;
          const count = x.locked ? x.questionCount : x.questions?.length || 0;
          const score = last[x._id];
          return (
            <button key={x._id} type="button" className={s.row} onClick={() => (x.locked ? openLink(PRICING) : setOpen(x._id))}>
              <span className={`${s.tile} ${x.locked ? s.tileLock : score >= 80 ? s.tileDone : ""}`}><Icon aria-hidden="true" /></span>
              <span className={s.body}>
                <b>{x.title}</b>
                <small>
                  {x.locked ? `${t.lib.locked} · ${t.lib.upgrade}` : `${t.lib.questions(count)}${score !== undefined ? ` · ${score}%` : ""}`}
                </small>
              </span>
              <ChevronRight className={s.chev} aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

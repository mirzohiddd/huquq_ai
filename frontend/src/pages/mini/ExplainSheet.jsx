/**
 * «TUSHUNTIRIB BER» — pastdan chiqadigan oyna. AI aynan shu savol bo'yicha
 * tushuntiradi (savol serverda tanlangan, foydalanuvchi matni yuborilmaydi),
 * ostida qonundan jonli iqtibos. Limit tugasa (429) — xabar ko'rsatiladi.
 */
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { X, Lightbulb, BookOpen } from "lucide-react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import s from "./Sheet.module.css";

export default function ExplainSheet({ req, lang, t, onClose }) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    mini
      .explain({ ...req, lang })
      .then((d) => alive && setData(d))
      .catch((e) => alive && setErr(e?.response?.data?.message || e?.response?.data?.error || t.error));
    return () => {
      alive = false;
    };
  }, [req, lang, t.error]);

  return (
    <div className={s.backdrop} onClick={onClose} role="presentation">
      <section className={s.sheet} role="dialog" aria-modal="true" aria-label={t.explainTitle} onClick={(e) => e.stopPropagation()}>
        <div className={s.grip} />
        <header className={s.head}>
          <span className={s.icon}><Lightbulb aria-hidden="true" /></span>
          <h3>{t.explainTitle}</h3>
          <button type="button" className={s.x} onClick={onClose} aria-label="Yopish"><X /></button>
        </header>
        <div className={s.body}>
          {!data && !err && <Spinner small label={t.explainWait} />}
          {err && <p className={s.err}>{err}</p>}
          {data && (
            <>
              <div className={s.right}>
                <b>✓ {data.right}</b>
                <p>{data.why}</p>
              </div>
              {data.answer && (
                <div className={s.md}>
                  <ReactMarkdown>{data.answer}</ReactMarkdown>
                </div>
              )}
              {data.quotes?.length > 0 && (
                <div className={s.quotes}>
                  <h4><BookOpen aria-hidden="true" /> {t.lawSays}</h4>
                  {data.quotes.map((q) => (
                    <blockquote key={`${q.code}-${q.article}`}>
                      <cite>{q.article}-modda{q.title ? ` · ${q.title}` : ""}</cite>
                      <p>{q.text}</p>
                    </blockquote>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

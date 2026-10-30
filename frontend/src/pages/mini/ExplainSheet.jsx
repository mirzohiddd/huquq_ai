/**
 * «AI BILAN TUSHUNISH» / «MANBANI KO'RISH» — pastdan chiqadigan oyna.
 * To'g'ri javob, izoh va qonun iqtibosi DARHOL ko'rinadi (javob bilan kelgan),
 * AI tushuntirishi esa ostida yuklanadi. Server 12 s ichida ulgurmasa
 * (`pending`) — AI fonda keshga yozadi, oyna 8 s dan keyin bir marta qayta so'raydi.
 * `sourceOnly` — faqat qonun iqtiboslari (AI chaqirilmaydi).
 */
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { X, Sparkles, BookOpen } from "lucide-react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import s from "./Sheet.module.css";

export default function ExplainSheet({ req, res, lang, t, onClose, sourceOnly = false }) {
  const [answer, setAnswer] = useState(null); // null — yuklanmoqda, "" — AI javobi yo'q
  const [err, setErr] = useState("");

  useEffect(() => {
    if (sourceOnly) return undefined;
    let alive = true;
    let timer = null;
    const ask = (retry) =>
      mini
        .explain({ ...req, lang })
        .then((d) => {
          if (!alive) return;
          if (d.pending && !retry) {
            timer = setTimeout(() => ask(true), 8000);
            return;
          }
          setAnswer(d.answer || "");
        })
        .catch((e) => alive && setErr(e?.response?.data?.message || e?.response?.data?.error || t.error));
    ask(false);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [req, lang, t.error, sourceOnly]);

  const quotes = res?.quotes || [];
  const title = sourceOnly ? t.source : t.aiExplain;

  return (
    <div className={s.backdrop} onClick={onClose} role="presentation">
      <section className={s.sheet} role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className={s.grip} />
        <header className={s.head}>
          <span className={s.icon}>{sourceOnly ? <BookOpen aria-hidden="true" /> : <Sparkles aria-hidden="true" />}</span>
          <h3>{title}</h3>
          <button type="button" className={s.x} onClick={onClose} aria-label="Yopish"><X /></button>
        </header>
        <div className={s.body}>
          {!sourceOnly && res && (
            <div className={s.right}>
              <b>✓ {res.rightText}</b>
              <p>{res.rightWhy}</p>
            </div>
          )}
          {!sourceOnly && answer === null && !err && <Spinner small label={t.explainWait} />}
          {err && <p className={s.err}>{err}</p>}
          {answer && (
            <div className={s.md}>
              <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
          )}
          {quotes.length > 0 ? (
            <div className={s.quotes}>
              <h4><BookOpen aria-hidden="true" /> {t.lawSays}</h4>
              {quotes.map((q) => (
                <blockquote key={`${q.code}-${q.article}`}>
                  <cite>{q.article}-modda{q.title ? ` · ${q.title}` : ""}</cite>
                  <p>{q.text}</p>
                </blockquote>
              ))}
            </div>
          ) : (
            sourceOnly && <p className={s.err}>{t.noSource}</p>
          )}
        </div>
      </section>
    </div>
  );
}

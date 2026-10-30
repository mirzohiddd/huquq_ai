/**
 * MAVZU KARTASI — saytdagi dars mavzusi mini ilovada: qisqa nazariya,
 * hayotiy misol, asosiy fikrlar, ogohlantirish va qonundan JONLI iqtibos
 * (modda matni serverdan, darsga raqam yozilmaydi).
 */
import React from "react";
import { ChevronRight, Lightbulb, TriangleAlert, BookOpen, CircleCheck } from "lucide-react";
import q from "./Quiz.module.css";
import c from "./Course.module.css";

/* "MULK SHAKLI — …" kabi qatorlar: katta harfli boshlanish qalin ko'rinadi */
function Para({ text }) {
  const m = text.match(/^([A-ZА-ЯЁʻ'’O‘G‘ \-]{4,60})(:|\s—)\s*(.*)$/su);
  if (!m) return <p>{text.replace(/^⚠️\s*/, "")}</p>;
  return (
    <p>
      <b>{m[1].trim()}</b>{m[2] === ":" ? ": " : " — "}{m[3]}
    </p>
  );
}

export default function CourseCard({ card, i, n, t, onNext }) {
  const paras = card.text.split(/\n{2,}/).map((x) => x.trim()).filter((x) => x && !/^AMALIY XULOSA/i.test(x));
  return (
    <div className={q.screen}>
      <div className={q.tag}>{t.course.card(i + 1, n)}</div>
      <h2 className={c.h2}>{card.heading}</h2>
      <div className={c.theory}>
        {paras.map((p, k) => <Para key={k} text={p} />)}
      </div>
      {card.example && (
        <div className={c.example}>
          <h4><Lightbulb aria-hidden="true" /> {t.lib.example}</h4>
          <p>{card.example}</p>
        </div>
      )}
      {card.keyPoints?.length > 0 && (
        <div className={c.points}>
          <h4>{t.lib.keyPoints}</h4>
          <ul>{card.keyPoints.map((k) => <li key={k}><CircleCheck aria-hidden="true" />{k}</li>)}</ul>
        </div>
      )}
      {card.warning && (
        <div className={c.warn}>
          <TriangleAlert aria-hidden="true" />
          <p><b>{t.lib.warning}:</b> {card.warning}</p>
        </div>
      )}
      {card.quotes?.length > 0 && (
        <details className={c.quote}>
          <summary><BookOpen aria-hidden="true" /> {t.course.lawQuote}</summary>
          {card.quotes.map((x) => (
            <blockquote key={`${x.code}-${x.article}`}>
              <cite>{t.lib.art(x.article)}{x.title ? ` · ${x.title}` : ""}</cite>
              <p>{x.text}</p>
            </blockquote>
          ))}
        </details>
      )}
      <div className={q.footer}>
        <button type="button" className={q.main} onClick={onNext}>
          {t.continue} <ChevronRight className={q.chev} />
        </button>
      </div>
    </div>
  );
}

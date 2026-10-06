import React, { memo } from "react";
import { Scale, Lightbulb, BookOpen, HelpCircle, CheckCircle2, ListOrdered } from "lucide-react";
import s from "./Slides.module.css";
import m from "./SlideMotion.module.css";

const refText = (r, ru) => (ru ? `${r.law}, ст. ${r.article}` : `${r.law}, ${r.article}-modda`);

/**
 * Bitta slayd (16:9). O'lchamlar konteyner birligida (cqw) — slayd kichik
 * eskizda ham, 4K televizorda ham AYNAN bir xil kompozitsiyada chiziladi.
 *
 * `animate` — faqat katta sahnada: elementlar navbat bilan paydo bo'ladi
 * (SlideMotion.module.css). Eskiz va PDF'da false — ular statik.
 */
function SlideCard({ slide, deck, index, total, labels, animate = false }) {
  const ru = deck.lang === "ru";
  // n — paydo bo'lish navbati; side — yon blok (o'ngdan kiradi)
  const fx = (base, n, side = false) =>
    animate
      ? { className: `${base || ""} ${side ? m.riseSide : m.rise}`.trim(), style: { "--d": n } }
      : { className: base || undefined };
  const art = (cls) => `${s.slide} ${cls}${animate ? ` ${m.drawTop}` : ""}`;
  const foot = (
    <footer className={s.foot}>
      <span>HuquqTech · {deck.gradeLabel}</span>
      <span>
        {index + 1} / {total}
      </span>
    </footer>
  );

  if (slide.type === "title") {
    return (
      <article className={art(s.titleSlide)}>
        <div {...fx(s.titleBadge, 0)}>
          <Scale /> HuquqTech
        </div>
        <h2 {...fx(s.bigTitle, 1)}>{slide.title}</h2>
        <p {...fx(s.subtitle, 2.5)}>{slide.subtitle}</p>
        <p {...fx(s.meta, 3.5)}>{deck.gradeLabel}</p>
        {foot}
      </article>
    );
  }

  const icon = { agenda: ListOrdered, law: BookOpen, summary: CheckCircle2, questions: HelpCircle }[slide.type];
  const Icon = icon || null;
  return (
    <article className={art(s[`t_${slide.type}`] || "")}>
      <header {...fx(s.head, 0)}>
        {Icon && <Icon className={s.headIcon} />}
        <h3 className={s.h}>{slide.title}</h3>
      </header>

      {slide.type === "agenda" && (
        <ol className={s.agenda}>
          {slide.items.map((it, k) => (
            <li key={it} {...fx("", 1 + k)}>
              {it}
            </li>
          ))}
        </ol>
      )}

      {slide.type === "content" && (
        <div className={s.body}>
          <div className={s.main}>
            {slide.text && <p {...fx(s.lead, 1)}>{slide.text}</p>}
            <ul className={s.bullets}>
              {slide.bullets.map((b, k) => (
                <li key={b} {...fx("", 2 + k)}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {(slide.note || slide.refs?.length > 0) && (
            <aside {...fx(s.side, 2 + slide.bullets.length, true)}>
              {slide.note && (
                <div className={s.note}>
                  <b>
                    <Lightbulb /> {labels.example}
                  </b>
                  <p>{slide.note}</p>
                </div>
              )}
              {slide.refs?.map((r) => (
                <p key={`${r.code}${r.article}`} className={s.ref}>
                  <Scale /> {refText(r, ru)}
                  {r.lawTitle ? ` — ${r.lawTitle}` : ""}
                </p>
              ))}
            </aside>
          )}
        </div>
      )}

      {slide.type === "law" && (
        <div className={s.quotes}>
          {slide.quotes.map((q, k) => (
            <blockquote key={`${q.code}${q.article}`} {...fx(s.quote, 1 + k * 1.5)}>
              <cite>
                {refText(q, ru)}
                {q.lawTitle ? ` — ${q.lawTitle}` : ""}
              </cite>
              <p>«{q.quote}»</p>
            </blockquote>
          ))}
        </div>
      )}

      {(slide.type === "summary" || slide.type === "questions") && (
        <ul className={`${s.bullets} ${s.big}`}>
          {(slide.bullets || slide.items).map((b, k) => (
            <li key={b} {...fx("", 1 + k)}>
              {b}
            </li>
          ))}
        </ul>
      )}
      {foot}
    </article>
  );
}

export default memo(SlideCard);

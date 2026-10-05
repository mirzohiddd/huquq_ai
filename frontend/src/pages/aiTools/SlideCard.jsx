import React, { memo } from "react";
import { Scale, Lightbulb, BookOpen, HelpCircle, CheckCircle2, ListOrdered } from "lucide-react";
import s from "./Slides.module.css";

const refText = (r, ru) => (ru ? `${r.law}, ст. ${r.article}` : `${r.law}, ${r.article}-modda`);

/**
 * Bitta slayd (16:9). O'lchamlar konteyner birligida (cqw) — slayd kichik
 * eskizda ham, 4K televizorda ham AYNAN bir xil kompozitsiyada chiziladi.
 */
function SlideCard({ slide, deck, index, total, labels }) {
  const ru = deck.lang === "ru";
  const foot = (
    <footer className={s.foot}>
      <span>Huquq AI · {deck.gradeLabel}</span>
      <span>
        {index + 1} / {total}
      </span>
    </footer>
  );

  if (slide.type === "title") {
    return (
      <article className={`${s.slide} ${s.titleSlide}`}>
        <div className={s.titleBadge}>
          <Scale /> Huquq AI
        </div>
        <h2 className={s.bigTitle}>{slide.title}</h2>
        <p className={s.subtitle}>{slide.subtitle}</p>
        <p className={s.meta}>{deck.gradeLabel}</p>
        {foot}
      </article>
    );
  }

  const icon = { agenda: ListOrdered, law: BookOpen, summary: CheckCircle2, questions: HelpCircle }[slide.type];
  const Icon = icon || null;
  return (
    <article className={`${s.slide} ${s[`t_${slide.type}`] || ""}`}>
      <header className={s.head}>
        {Icon && <Icon className={s.headIcon} />}
        <h3 className={s.h}>{slide.title}</h3>
      </header>

      {slide.type === "agenda" && (
        <ol className={s.agenda}>
          {slide.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ol>
      )}

      {slide.type === "content" && (
        <div className={s.body}>
          <div className={s.main}>
            {slide.text && <p className={s.lead}>{slide.text}</p>}
            <ul className={s.bullets}>
              {slide.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          {(slide.note || slide.refs?.length > 0) && (
            <aside className={s.side}>
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
          {slide.quotes.map((q) => (
            <blockquote key={`${q.code}${q.article}`} className={s.quote}>
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
          {(slide.bullets || slide.items).map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {foot}
    </article>
  );
}

export default memo(SlideCard);

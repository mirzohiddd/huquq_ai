import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";
import s from "./FAQ.module.css";

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(0);

  const items = [1, 2, 3, 4, 5].map((n) => ({
    q: t[`faq_${n}_q`],
    a: t[`faq_${n}_a`],
  }));

  // `id="faq"` — footer'dagi "Ko'p beriladigan savollar" havolasi
  // (/#faq) shu bo'limga olib keladi.
  return (
    <section id="faq" className={s.section}>
      <div className={s.container}>
        <Reveal as="div" className={s.head}>
          <h2 className={s.title}>{t.faq_title}</h2>
          <p className={s.subtitle}>{t.faq_subtitle}</p>
        </Reveal>

        <div className={s.list}>
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal as="div" key={item.q} delay={i * 0.04} className={s.item}>
                <button
                  type="button"
                  className={s.question}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`${s.chevron} ${open ? s.chevronOpen : ""}`}
                  />
                </button>
                <div className={`${s.answerWrap} ${open ? s.answerOpen : ""}`}>
                  <p className={s.answer}>{item.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

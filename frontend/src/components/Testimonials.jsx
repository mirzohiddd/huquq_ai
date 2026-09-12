import React from "react";
import { Quote } from "lucide-react";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";
import s from "./Testimonials.module.css";

export default function Testimonials() {
  const { t } = useLang();
  const items = [1, 2, 3].map((n) => ({
    name: t[`test_${n}_name`],
    role: t[`test_${n}_role`],
    text: t[`test_${n}_text`],
  }));

  return (
    <section className={s.section}>
      <div className={s.container}>
        <Reveal as="div" className={s.head}>
          <h2 className={s.title}>{t.testimonials_title}</h2>
          <p className={s.subtitle}>{t.testimonials_subtitle}</p>
        </Reveal>

        <div className={s.grid}>
          {items.map((item, i) => (
            <Reveal as="div" key={item.name} delay={i * 0.08} className={s.card}>
              <Quote size={26} className={s.quoteIcon} />
              <p className={s.text}>{item.text}</p>
              <div className={s.person}>
                <div className={s.avatar}>{item.name[0]}</div>
                <div>
                  <div className={s.name}>{item.name}</div>
                  <div className={s.role}>{item.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className={s.note}>{t.testimonials_note}</p>
      </div>
    </section>
  );
}

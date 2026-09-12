import React from "react";
import { Clock, MessageSquareText, Scale, Languages, ScanText, Zap } from "lucide-react";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";
import s from "./AICapabilities.module.css";

const ICONS = [Clock, MessageSquareText, Scale, Languages, ScanText, Zap];

export default function AICapabilities() {
  const { t } = useLang();
  const items = [1, 2, 3, 4, 5, 6].map((n) => ({
    icon: ICONS[n - 1],
    title: t[`cap_${n}_title`],
    desc: t[`cap_${n}_desc`],
  }));

  return (
    <section className={s.section}>
      <div className={s.container}>
        <Reveal as="div" className={s.head}>
          <h2 className={s.title}>{t.capabilities_title}</h2>
          <p className={s.subtitle}>{t.capabilities_subtitle}</p>
        </Reveal>

        <div className={s.grid}>
          {items.map((item, i) => (
            <Reveal as="div" key={item.title} delay={i * 0.06} className={s.card}>
              <div className={s.iconWrap}>
                <item.icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

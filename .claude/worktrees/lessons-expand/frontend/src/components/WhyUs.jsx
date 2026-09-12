import React from "react";
import { Sparkles, ShieldCheck, MessageCircleHeart, RefreshCw } from "lucide-react";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";
import s from "./WhyUs.module.css";

const ICONS = [Sparkles, ShieldCheck, MessageCircleHeart, RefreshCw];

export default function WhyUs() {
  const { t } = useLang();
  const items = [1, 2, 3, 4].map((n) => ({
    icon: ICONS[n - 1],
    title: t[`whyus_${n}_title`],
    desc: t[`whyus_${n}_desc`],
  }));

  return (
    <section className={s.section}>
      <div className={s.container}>
        <Reveal as="div" className={s.head}>
          <h2 className={s.title}>{t.whyus_title}</h2>
          <p className={s.subtitle}>{t.whyus_subtitle}</p>
        </Reveal>

        <div className={s.grid}>
          {items.map((item, i) => (
            <Reveal as="div" key={item.title} delay={i * 0.07} className={s.row}>
              <div className={s.iconWrap}>
                <item.icon size={22} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

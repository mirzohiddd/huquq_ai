import React, { useState } from "react";
import {
  AlertTriangle,
  Check,
  Target,
  Unlock,
  ShieldCheck,
  Scale,
  Users,
  GraduationCap,
  Briefcase,
  UserCog,
  ArrowRight,
  ListChecks,
} from "lucide-react";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";
import DetailModal from "./DetailModal";
import modalS from "./DetailContent.module.css";
import s from "./AboutMore.module.css";

/**
 * "Biz haqimizda" bo'limining kengaytmasi — to'rtta blok:
 *   1) Muammo → Yechim   (nima uchun bu platforma kerak)
 *   2) Raqamlarda platforma (bilim bazasi hajmi)
 *   3) Qadriyatlarimiz    (qanday tamoyillarga tayanamiz)
 *   4) Kimlar uchun       (auditoriya)
 *
 * ⚠️ ATAYLAB TAKRORLANMAGAN: mavjud bo'limlar bilan mazmun ustma-ust
 * tushmasligi uchun tekshirildi — `AICapabilities` (AI imkoniyatlari),
 * `WhyUs` (raqobatchilardan farq), `PlatformFeatures` (4 ta modul) va
 * "Qanday ishlaydi" bosqichlari bu yerda QAYTA yozilmagan.
 *
 * Ikonalar matn massivlari bilan TARTIB bo'yicha mos keladi
 * (translations.js dagi `about_values` / `about_who`), shuning uchun
 * ular tarjima qilinmaydi va kodda turadi.
 */
const VALUE_ICONS = [Target, Unlock, ShieldCheck, Scale];
const WHO_ICONS = [Users, GraduationCap, Briefcase, UserCog];

export default function AboutMore() {
  const { t } = useLang();
  const [openValue, setOpenValue] = useState(null); // ochilgan qadriyat indeksi
  const activeValue = openValue !== null ? t.about_values[openValue] : null;

  return (
    <div className={s.wrap}>
      {/* ══════════ 1. Muammo → Yechim ══════════ */}
      <Reveal as="div" className={s.head}>
        <h2 className={s.title}>{t.about_problem_title}</h2>
        <p className={s.subtitle}>{t.about_problem_sub}</p>
      </Reveal>

      <div className={s.psGrid}>
        <Reveal as="div" className={`${s.psCol} ${s.psProblem}`}>
          <h3 className={s.psLabel}>
            <AlertTriangle size={16} /> {t.about_problem_label}
          </h3>
          <ul className={s.psList}>
            {t.about_problems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" delay={0.08} className={`${s.psCol} ${s.psSolution}`}>
          <h3 className={s.psLabel}>
            <Check size={16} /> {t.about_solution_label}
          </h3>
          <ul className={s.psList}>
            {t.about_solutions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* ══════════ 2. Raqamlarda platforma ══════════ */}
      <Reveal as="div" className={s.head}>
        <h2 className={s.title}>{t.about_numbers_title}</h2>
        <p className={s.subtitle}>{t.about_numbers_sub}</p>
      </Reveal>

      <div className={s.numGrid}>
        {t.about_numbers.map((n, i) => (
          <Reveal as="div" key={n.label} delay={i * 0.05} className={s.numCard}>
            <strong>{n.value}</strong>
            <span>{n.label}</span>
          </Reveal>
        ))}
      </div>

      {/* ══════════ 3. Qadriyatlarimiz ══════════ */}
      <Reveal as="div" className={s.head}>
        <h2 className={s.title}>{t.about_values_title}</h2>
        <p className={s.subtitle}>{t.about_values_sub}</p>
      </Reveal>

      {/* Qadriyat kartasi bosilganda batafsil oyna ochiladi — har bir
          tamoyil amalda qanday ko'rinishi tushuntiriladi. */}
      <div className={s.valueGrid}>
        {t.about_values.map((v, i) => {
          const Icon = VALUE_ICONS[i] || Target;
          return (
            <Reveal
              as="div"
              key={v.title}
              delay={i * 0.06}
              className={s.valueCard}
              role="button"
              tabIndex={0}
              onClick={() => setOpenValue(i)}
              onKeyDown={(e) => e.key === "Enter" && setOpenValue(i)}
            >
              <span className={s.valueIcon}>
                <Icon size={20} />
              </span>
              <div className={s.valueBody}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
                <span className={s.valueMore}>
                  {t.service_more} <ArrowRight size={13} />
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ══════════ 4. Kimlar uchun ══════════ */}
      <Reveal as="div" className={s.head}>
        <h2 className={s.title}>{t.about_who_title}</h2>
        <p className={s.subtitle}>{t.about_who_sub}</p>
      </Reveal>

      <div className={s.whoGrid}>
        {t.about_who.map((w, i) => {
          const Icon = WHO_ICONS[i] || Users;
          return (
            <Reveal
              as="div"
              key={w.title}
              delay={i * 0.06}
              className={s.whoCard}
            >
              <span className={s.whoIcon}>
                <Icon size={20} />
              </span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </Reveal>
          );
        })}
      </div>

      {/* ── Qadriyat haqida batafsil ── */}
      {activeValue && (
        <DetailModal
          icon={VALUE_ICONS[openValue] || Target}
          eyebrow={t.about_value_eyebrow}
          title={activeValue.title}
          closeLabel={t.modal_close}
          onClose={() => setOpenValue(null)}
        >
          <p className={modalS.lead}>{activeValue.long}</p>

          <h3 className={modalS.blockTitle}>
            <ListChecks size={15} /> {t.about_value_points}
          </h3>
          <ul className={modalS.checkList}>
            {(activeValue.points || []).map((point) => (
              <li key={point}>
                <Check size={14} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </DetailModal>
      )}
    </div>
  );
}

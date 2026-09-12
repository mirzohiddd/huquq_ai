import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  GraduationCap,
  ClipboardCheck,
  Library,
  ArrowRight,
  Check,
  ListChecks,
} from "lucide-react";
import { useChatPanel } from "../context/ChatPanelContext";
import { useLang } from "../context/LangContext";
import { useAuth } from "../context/AuthContext";
import Reveal from "./Reveal";
import DetailModal from "./DetailModal";
import modalS from "./DetailContent.module.css";
import s from "./PlatformFeatures.module.css";

/**
 * Platforma imkoniyatlari — "Biz haqimizda" bo'limi ichida ko'rsatiladi.
 *
 * ⚠️ XATTI-HARAKAT O'ZGARDI (foydalanuvchi so'rovi): karta bosilganda
 * ENDI BATAFSIL OYNA ochiladi. Avval "AI Yordamchi" kartasi darhol chat
 * oynasini ochardi, qolgan uchtasi esa darhol boshqa sahifaga o'tib
 * ketardi — foydalanuvchi modul nima ekanini bilib olishga ulgurmasdi
 * va login talab qilinadigan sahifaga tushib qolardi.
 *
 * Endi: karta → ma'lumot oynasi → (xohlasa) oynadagi tugma orqali
 * o'tish. Ya'ni chat yoki sahifaga o'tish faqat ATAYLAB qilingan
 * ikkinchi bosishdan keyin sodir bo'ladi.
 */
export default function PlatformFeatures() {
  const { t } = useLang();
  const { openChat } = useChatPanel();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(null); // ochilgan kartaning indeksi

  const items = [
    {
      icon: Sparkles,
      title: t.feat_ai_title,
      desc: t.feat_ai_desc,
      long: t.feat_ai_long,
      points: t.feat_ai_points,
      cta: t.feat_open_ai,
      action: () => openChat(),
      // AI mehmonlar uchun ham ochiq (bepul cheklangan savol bilan) —
      // shuning uchun bu kartada "login kerak" eslatmasi ko'rsatilmaydi.
      needsAuth: false,
    },
    {
      icon: GraduationCap,
      title: t.feat_lessons_title,
      desc: t.feat_lessons_desc,
      long: t.feat_lessons_long,
      points: t.feat_lessons_points,
      cta: t.feat_open_lessons,
      action: () => navigate("/lessons"),
      needsAuth: true,
    },
    {
      icon: ClipboardCheck,
      title: t.feat_tests_title,
      desc: t.feat_tests_desc,
      long: t.feat_tests_long,
      points: t.feat_tests_points,
      cta: t.feat_open_tests,
      action: () => navigate("/tests"),
      needsAuth: true,
    },
    {
      icon: Library,
      title: t.feat_library_title,
      desc: t.feat_library_desc,
      long: t.feat_library_long,
      points: t.feat_library_points,
      cta: t.feat_open_library,
      action: () => navigate("/library"),
      needsAuth: true,
    },
  ];

  const active = open !== null ? items[open] : null;

  return (
    <div className={s.wrap}>
      <Reveal as="div" className={s.head}>
        <h2 className={s.title}>{t.feat_section_title}</h2>
        <p className={s.subtitle}>{t.feat_section_sub}</p>
      </Reveal>

      <div className={s.grid}>
        {items.map((item, i) => (
          <Reveal
            as="div"
            key={item.title}
            delay={i * 0.07}
            className={s.card}
            role="button"
            tabIndex={0}
            onClick={() => setOpen(i)}
            onKeyDown={(e) => e.key === "Enter" && setOpen(i)}
          >
            <span className={s.icon}>
              <item.icon size={22} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {/* Karta bosilishi mumkinligini bildiruvchi belgi */}
            <span className={s.more}>
              {t.service_more} <ArrowRight size={13} />
            </span>
          </Reveal>
        ))}
      </div>

      {active && (
        <DetailModal
          icon={active.icon}
          eyebrow={t.feat_modal_eyebrow}
          title={active.title}
          closeLabel={t.modal_close}
          onClose={() => setOpen(null)}
          footer={
            <button
              type="button"
              className={modalS.ctaBtn}
              onClick={() => {
                setOpen(null);
                active.action();
              }}
            >
              {active.cta} <ArrowRight size={15} />
            </button>
          }
        >
          <p className={modalS.lead}>{active.long}</p>

          <h3 className={modalS.blockTitle}>
            <ListChecks size={15} /> {t.service_includes}
          </h3>
          <ul className={modalS.checkList}>
            {(active.points || []).map((point) => (
              <li key={point}>
                <Check size={14} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Login talab qilinadigan bo'limlarda — faqat mehmonlarga */}
          {active.needsAuth && !user && (
            <p className={modalS.note}>{t.feat_login_note}</p>
          )}
        </DetailModal>
      )}
    </div>
  );
}

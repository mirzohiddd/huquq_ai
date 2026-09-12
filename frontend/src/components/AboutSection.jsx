import React, { useEffect, useState } from "react";
import {
  Landmark,
  Target,
  ShieldCheck,
  MessageCircleQuestion,
  BrainCircuit,
  FileText,
  BookOpen,
  Scale,
  Lock,
  Clock,
  Users,
  Briefcase,
  Smile,
  Headphones,
  Rocket,
  Cpu,
  TrendingUp,
  Trophy,
  Check,
} from "lucide-react";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";
import PlatformFeatures from "./PlatformFeatures";
import AboutMore from "./AboutMore";
import shared from "../styles/site.module.css";
import s from "./AboutSection.module.css";
import { API_BASE } from "../utils/apiBase";

/**
 * ═══════════════════════════════════════════════════════════════════
 *  BIZ HAQIMIZDA — LANDING PAGE BO'LIMI (`Home.jsx`, id="about")
 * ═══════════════════════════════════════════════════════════════════
 *
 * ⚠️ JOYLASHUV TARIXI (chalkashmaslik uchun):
 * bu blok avval Landing Page ichida edi → keyin `/about` mustaqil
 * sahifasiga chiqarildi → so'ng foydalanuvchi so'roviga ko'ra YANA
 * Landing Page'ga qaytarildi. Dizayn (berilgan namuna asosida)
 * o'zgarmadi, faqat joylashuvi o'zgardi. `/about` manzili endi
 * `/#about` ga yo'naltiradi — eski havolalar buzilmasligi uchun.
 *
 * ⚠️ DIZAYN — BERILGAN NAMUNA ASOSIDA, LEKIN RASMSIZ.
 * Namuna rasm sifatida berilgan edi va foydalanuvchi aniq aytdi:
 * sahifa ichiga rasm QO'YILMASIN, faqat ko'rinishi mos bo'lsin.
 * Shuning uchun namunadagi haykal fotosi o'rniga CSS gradienti va
 * ichki SVG bezak ishlatilgan (`.quoteCard`) — bu ham sahifani
 * yengil qoldiradi (qo'shimcha rasm yuklanmaydi).
 *
 * Ikonalar matn massivlari bilan TARTIB bo'yicha mos keladi
 * (`translations.js`), shuning uchun ular tarjima qilinmaydi va
 * kodda turadi — bu loyihadagi mavjud yondashuv (qarang:
 * `AboutMore.jsx`, `Home.jsx`).
 */
const STEP_ICONS = [MessageCircleQuestion, BrainCircuit, FileText, ShieldCheck];
const HIGHLIGHT_ICONS = [BookOpen, Scale, Lock, Clock];
const METRIC_ICONS = [Users, Briefcase, Smile, ShieldCheck, Headphones];
const TIMELINE_ICONS = [Rocket, Users, Cpu, TrendingUp, Trophy];

/* Qonunlar bazasi — matn kalitlari `translations.js` da */
const LAWS = [
  { code: "laws_labor", items: "laws_labor_items" },
  { code: "laws_family", items: "laws_family_items" },
  { code: "laws_civil", items: "laws_civil_items" },
  { code: "laws_land", items: "laws_land_items" },
  { code: "laws_criminal", items: "laws_criminal_items" },
  { code: "laws_consumer", items: "laws_consumer_items" },
];

export default function AboutSection() {
  const { t, lang } = useLang();
  const [siteContent, setSiteContent] = useState(null);

  /* Statistikaning dastlabki uchtasi admin panelidan boshqariladi
     (`/api/site/content` → `stats.experience/cases/clients`). Bu
     imkoniyat Landing'da bor edi va YO'QOTILMASLIGI kerak — aks holda
     admin tahrirlagan raqamlar bu sahifada ko'rinmay qolardi.
     So'rov muvaffaqiyatsiz bo'lsa tarjimadagi qiymatlar ishlatiladi. */
  useEffect(() => {
    let alive = true;
    /* DIQQAT: `API_BASE` allaqachon `/api` bilan tugaydi
       (`utils/apiBase.js`), shuning uchun bu yerda u qayta yozilmaydi.
       Shuningdek `api` instansiyasi emas, to'g'ridan-to'g'ri `fetch`
       ishlatiladi — ya'ni tilni avtomatik qo'shadigan interceptor bu
       so'rovga TEGMAYDI va `lang` qo'lda berilishi shart (Home.jsx va
       SiteLayout.jsx dagi bilan bir xil yondashuv). */
    fetch(`${API_BASE}/site/content?lang=${encodeURIComponent(lang)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => alive && setSiteContent(d))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [lang]);

  const metrics = (t.about_metrics || []).map((m, i) => {
    const override = [
      siteContent?.stats?.experience,
      siteContent?.stats?.cases,
      siteContent?.stats?.clients,
    ][i];
    return { ...m, value: override || m.value };
  });

  return (
    /* `id="about"` — navbar va footer'dagi `/#about` havolalari aynan
       shu bo'limga olib keladi. */
    <section id="about" className={s.page}>
      <div className={shared.container}>
          {/* ───────────── HERO ───────────── */}
          <header className={s.hero}>
            <div className={s.ornament} aria-hidden="true">
              <span className={s.ornamentLine} />
              <Scale size={20} />
              <span className={s.ornamentLine} />
            </div>
            {/* ⚠️ h1 EMAS, h2: bu endi mustaqil sahifa emas, Bosh
                sahifaning bo'limi. Bir sahifada ikkita h1 bo'lsa
                sarlavhalar ierarxiyasi buziladi (SEO va ekran
                o'quvchilari uchun muhim). */}
            <h2 className={s.title}>
              {(t.about_title || "").split(" ")[0]}{" "}
              <span className={s.titleAccent}>
                {(t.about_title || "").split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className={s.lead}>{t.about_page_lead}</p>
          </header>

          {/* ───────────── ASOSIY QISM ───────────── */}
          <div className={s.mainGrid}>
            {/* ── Chap ustun: vazifa · qanday ishlaymiz · nega biz ── */}
            <div className={s.leftCol}>
              <Reveal>
                <section className={s.block}>
                  <span className={s.blockIcon}>
                    <Landmark size={22} />
                  </span>
                  <div className={s.blockBody}>
                    <h2 className={s.blockTitle}>{t.about_mission_title}</h2>
                    <p className={s.blockText}>{t.about_mission_text}</p>
                  </div>
                </section>
              </Reveal>

              <div className={s.sep} />

              <Reveal>
                <section className={s.block}>
                  <span className={s.blockIcon}>
                    <Target size={22} />
                  </span>
                  <div className={s.blockBody}>
                    <h2 className={s.blockTitle}>{t.about_how_title}</h2>
                    <ol className={s.steps}>
                      {(t.about_how_steps || []).map((step, i) => {
                        const Icon = STEP_ICONS[i] || MessageCircleQuestion;
                        return (
                          <li key={step} className={s.step}>
                            <span className={s.stepNum}>{i + 1}</span>
                            <span className={s.stepIcon}>
                              <Icon size={24} />
                            </span>
                            <span className={s.stepLabel}>{step}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </section>
              </Reveal>

              <div className={s.sep} />

              <Reveal>
                <section className={s.block}>
                  <span className={s.blockIcon}>
                    <ShieldCheck size={22} />
                  </span>
                  <div className={s.blockBody}>
                    <h2 className={s.blockTitle}>{t.about_why_title}</h2>
                    <ul className={s.reasons}>
                      {(t.about_why_items || []).map((item) => (
                        <li key={item} className={s.reason}>
                          <span className={s.reasonMark}>
                            <Check size={11} strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </Reveal>
            </div>

            {/* ── O'ng ustun: iqtibos + 4 ta imkoniyat ── */}
            <Reveal>
              <aside className={s.quoteCard}>
                {/* Iqtibos bloki ALOHIDA o'ralgan: karta chap ustun
                    balandligiga cho'zilgani uchun ortiqcha bo'sh joy
                    qoladi — bu o'ram uni o'ziga olib, iqtibosni
                    markazga joylaydi (namunada bu joyni fotosurat
                    to'ldirgan, bizda rasm ishlatilmaydi). */}
                <div className={s.quoteTop}>
                  <span className={s.quoteMark} aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className={s.quoteText}>
                    {t.about_quote}
                  </blockquote>
                  <cite className={s.quoteAuthor}>{t.about_quote_author}</cite>
                </div>

                <div className={s.quoteSep} />

                <div className={s.highlights}>
                  {(t.about_highlights || []).map((h, i) => {
                    const Icon = HIGHLIGHT_ICONS[i] || BookOpen;
                    return (
                      <div key={h.title} className={s.highlight}>
                        <span className={s.highlightIcon}>
                          <Icon size={19} />
                        </span>
                        <div>
                          <h3 className={s.highlightTitle}>{h.title}</h3>
                          <p className={s.highlightDesc}>{h.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </aside>
            </Reveal>
          </div>

          {/* ───────────── STATISTIKA ───────────── */}
          <Reveal>
            <div className={s.metrics}>
              {metrics.map((m, i) => {
                const Icon = METRIC_ICONS[i] || Users;
                return (
                  <div key={m.label} className={s.metric}>
                    <span className={s.metricIcon}>
                      <Icon size={22} />
                    </span>
                    <div className={s.metricBody}>
                      <strong className={s.metricValue}>{m.value}</strong>
                      <span className={s.metricLabel}>{m.label}</span>
                      <span className={s.metricDesc}>{m.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* ───────────── YO'L BOSQICHLARI ───────────── */}
          <Reveal>
            <section className={s.timeline}>
              <div className={s.timelineHead}>
                <h2 className={s.timelineTitle}>{t.about_timeline_title}</h2>
                <p className={s.timelineSub}>{t.about_timeline_sub}</p>
              </div>
              <ol className={s.track}>
                {(t.about_timeline || []).map((m, i) => {
                  const Icon = TIMELINE_ICONS[i] || Rocket;
                  return (
                    <li key={`${m.year}-${m.title}`} className={s.node}>
                      <span className={s.nodeIcon}>
                        <Icon size={22} />
                      </span>
                      <span className={s.nodeYear}>{m.year}</span>
                      <h3 className={s.nodeTitle}>{m.title}</h3>
                      <p className={s.nodeDesc}>{m.desc}</p>
                    </li>
                  );
                })}
              </ol>
            </section>
          </Reveal>

          {/* ───────────── PLATFORMA IMKONIYATLARI ─────────────
              4 ta modul: AI Yordamchi · Darslar · Testlar · Kutubxona */}
          <PlatformFeatures />

          {/* ───────────── MUAMMO→YECHIM · RAQAMLAR · QADRIYATLAR · KIMLAR UCHUN ─────────────
              Ketma-ketlik ATAYLAB shunday: avval nima taklif qilinishi
              (modullar), keyin nima uchun kerakligi (muammo→yechim),
              qanchalik kattaligi (raqamlar), qanday tamoyilga tayanishi
              (qadriyatlar) va kimga mo'ljallangani. */}
          <AboutMore />

          {/* ───────────── QONUNLAR BAZASI ───────────── */}
          <Reveal>
            <section className={s.laws}>
              <header className={s.lawsHead}>
                <h3 className={s.lawsTitle}>{t.about_laws_title}</h3>
                <span className={s.lawsRule} aria-hidden="true" />
              </header>
              <div className={s.lawGrid}>
                {LAWS.map((l) => (
                  <div key={l.code} className={s.lawCard}>
                    <h4 className={s.lawTitle}>{t[l.code]}</h4>
                    <ul className={s.lawList}>
                      {(t[l.items] || []).map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className={s.warn}>{t.about_warn}</p>
            </section>
          </Reveal>
      </div>
    </section>
  );
}

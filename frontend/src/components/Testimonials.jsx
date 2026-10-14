import React, { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quote, Star, MessageSquarePlus, Clock3, PencilLine } from "lucide-react";
import { useLang } from "../context/LangContext";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import Reveal from "./Reveal";
import s from "./Testimonials.module.css";

const ReviewModal = lazy(() => import("./ReviewModal"));

/**
 * FOYDALANUVCHILAR FIKRI (2026-10-14) — namunaviy matnlar o'rniga HAQIQIY
 * sharhlar: foydalanuvchi o'zi yozadi, admin tasdiqlagandan keyingina
 * shu yerda chiqadi (`/api/reviews` faqat `approved` qaytaradi).
 * ⚠️ Bosh sahifa SSR qilinadi — ma'lumot faqat `useEffect` ichida olinadi,
 * birinchi render serverdagi bilan bir xil bo'lishi shart (hydration).
 */
const PAGE = 6;
const PENDING_KEY = "pendingReview";

function Stars({ value }) {
  return (
    <div className={s.stars} aria-label={`${value} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={15} className={n <= value ? s.starOn : s.starOff} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLang();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [mine, setMine] = useState(null);
  const [open, setOpen] = useState(false);
  const [all, setAll] = useState(false);

  useEffect(() => {
    api.get("/reviews").then((r) => setData(r.data)).catch(() => setData({ reviews: [] }));
  }, []);

  useEffect(() => {
    if (!user) return setMine(null);
    api.get("/reviews/mine").then((r) => setMine(r.data.review)).catch(() => {});
    // Mehmon "Fikr qoldirish" bosib kirgan bo'lsa — oyna avtomatik ochiladi
    if (localStorage.getItem(PENDING_KEY)) {
      localStorage.removeItem(PENDING_KEY);
      setOpen(true);
    }
  }, [user]);

  function onCta() {
    if (user) return setOpen(true);
    localStorage.setItem(PENDING_KEY, "1");
    navigate("/login");
  }

  const reviews = data?.reviews || [];
  const shown = all ? reviews : reviews.slice(0, PAGE);
  const status = mine?.status;

  return (
    <section className={s.section} id="reviews">
      <div className={s.container}>
        <Reveal as="div" className={s.head}>
          <h2 className={s.title}>{t.testimonials_title}</h2>
          <p className={s.subtitle}>{t.testimonials_subtitle}</p>
          {data?.count > 0 && (
            <div className={s.summary}>
              <Stars value={Math.round(data.average)} />
              <span>
                {String(t.reviews_avg).replace("{avg}", data.average).replace("{n}", data.count)}
              </span>
            </div>
          )}
        </Reveal>

        {data && reviews.length === 0 && (
          <Reveal as="div" className={s.empty}>
            <span className={s.emptyIcon}>
              <MessageSquarePlus size={26} />
            </span>
            <h3 className={s.emptyTitle}>{t.reviews_empty_title}</h3>
            <p className={s.emptyText}>{t.reviews_empty_text}</p>
          </Reveal>
        )}

        {shown.length > 0 && (
          <div className={s.grid}>
            {shown.map((item, i) => (
              <Reveal as="figure" key={`${item.name}-${item.createdAt}`}
                delay={(i % PAGE) * 0.06} className={s.card}>
                <div className={s.cardTop}>
                  <Stars value={item.rating} />
                  <Quote size={22} className={s.quoteIcon} />
                </div>
                <blockquote className={s.text}>{item.text}</blockquote>
                <figcaption className={s.person}>
                  <div className={s.avatar} aria-hidden="true">{item.name[0]}</div>
                  <div>
                    <div className={s.name}>{item.name}</div>
                    {item.role && <div className={s.role}>{item.role}</div>}
                  </div>
                </figcaption>
              </Reveal>
            ))}
          </div>
        )}

        <div className={s.actions}>
          {reviews.length > PAGE && !all && (
            <button type="button" className={s.ghostBtn} onClick={() => setAll(true)}>
              {t.reviews_more}
            </button>
          )}
          <button type="button" className={s.ctaBtn} onClick={onCta}>
            {mine ? <PencilLine size={16} /> : <MessageSquarePlus size={16} />}
            {mine ? t.reviews_edit : user ? t.reviews_cta : t.reviews_cta_guest}
          </button>
          {status && status !== "approved" && (
            <p className={`${s.status} ${status === "rejected" ? s.statusBad : ""}`}>
              <Clock3 size={14} />
              {status === "pending" ? t.reviews_pending : t.reviews_rejected}
            </p>
          )}
        </div>
      </div>

      {open && (
        <Suspense fallback={null}>
          <ReviewModal initial={mine} onClose={() => setOpen(false)}
            onSaved={(r) => setMine({ ...r })} />
        </Suspense>
      )}
    </section>
  );
}

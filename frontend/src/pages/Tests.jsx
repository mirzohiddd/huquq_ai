import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardCheck, Lock, Scale } from "lucide-react";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import shared from "../styles/site.module.css";
import s from "./Tests.module.css";
import { scrollToTop } from "../utils/smoothScroll";
import TestsHero from "./tests/TestsHero";
import QuizRunner from "./tests/QuizRunner";
import { shuffleTest } from "./tests/shuffle";
import QuizResult from "./tests/QuizResult";
import { useTT } from "./tests/text";
import l from "./tests/LifeTest.module.css";

/**
 * Testlar — admin panel orqali qo'shilgan bilim tekshirish savollari
 * (backend: QuizSchema). Savolga javob berilgach darhol to'g'ri/noto'g'ri
 * ko'rsatiladi va qisqa izoh beriladi; oxirida umumiy natija chiqadi.
 */
export default function Tests() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [tests, setTests] = useState(null);
  const [planInfo, setPlanInfo] = useState(null);

  // Til o'zgarsa testlar (savol va variantlari bilan) qayta so'raladi
  useEffect(() => {
    api
      .get("/tests")
      .then(({ data }) => {
        setTests(data.tests || []);
        setPlanInfo(data.plan || null);
      })
      .catch(() => setTests([]));
  }, [lang]);

  /* Qulflangan test bosilganda — Landing Page'dagi Pricing bo'limiga
     (tariflar ataylab hamma ko'radigan joyda turadi). */
  const goToPricing = () => navigate("/#pricing");
  const lockedCount = (tests || []).filter((x) => x.locked).length;

  const tt = useTT();
  const [activeTest, setActiveTest] = useState(null);
  const [result, setResult] = useState(null); // serverdan kelgan yakuniy natija
  const [finishing, setFinishing] = useState(false);
  const [finishError, setFinishError] = useState("");

  function startTest(test) {
    // Qulflangan test — savollari umuman kelmagan, boshlab bo'lmaydi
    if (test.locked) return goToPricing();
    setActiveTest(shuffleTest(test));
    setResult(null);
    setFinishError("");
    scrollToTop();
    return undefined;
  }

  function exitTest() {
    setActiveTest(null);
    setResult(null);
  }

  /* Natija SERVERDA hisoblanadi va saqlanadi (avval brauzer o'zi hisoblab
     "score" yuborardi — uni soxtalashtirish mumkin edi). */
  async function finish(answers) {
    setFinishing(true);
    setFinishError("");
    try {
      const { data } = await api.post(`/tests/${activeTest._id}/submit`, { answers });
      setResult(data);
      scrollToTop();
    } catch {
      setFinishError(tt.submitError);
    } finally {
      setFinishing(false);
    }
  }

  return (
    <>
      {/* Faqat ro'yxatdan o'tganlar uchun — indekslanmaydi */}
      <Seo title={t.seo_tests_title} noindex />
      <TestsHero t={t} />

      <section className={shared.pageSection}>
        <div className={shared.container}>
          {/* ── Testlar ro'yxati ── */}
          {!activeTest &&
            (tests === null ? (
              <p className={s.stateText}>{t.library_loading}</p>
            ) : tests.length === 0 ? (
              <p className={s.stateText}>{t.library_empty}</p>
            ) : (
              <>
                {/* Bepul tarifda nechta test ochiq ekani ro'yxat tepasida */}
                {lockedCount > 0 && (
                  <div className={s.planBanner}>
                    <span className={s.planBannerIcon}>
                      <Lock size={16} />
                    </span>
                    <div className={s.planBannerText}>
                      <strong>{t.plan_tests_locked_title}</strong>
                      <span>
                        {(t.plan_tests_locked_sub || "")
                          .replace(
                            "{plan}",
                            t[`tier_${planInfo?.tier || "free"}`] || "",
                          )
                          .replace("{open}", planInfo?.testLimit ?? 0)
                          .replace("{locked}", lockedCount)}
                      </span>
                    </div>
                    <button
                      type="button"
                      className={s.planBannerBtn}
                      onClick={goToPricing}
                    >
                      {t.plan_unlock_cta}
                    </button>
                  </div>
                )}

                <div className={s.grid}>
                  {tests.map((test, i) => (
                    <Reveal
                      as="div"
                      key={test._id}
                      delay={i * 0.06}
                      className={`${s.card} ${test.locked ? s.cardLocked : ""}`}
                      role="button"
                      tabIndex={0}
                      aria-disabled={test.locked || undefined}
                      onClick={() => startTest(test)}
                      onKeyDown={(e) => e.key === "Enter" && startTest(test)}
                    >
                      <span className={s.cardIcon}>
                        {test.locked ? (
                          <Lock size={20} />
                        ) : (
                          <ClipboardCheck size={20} />
                        )}
                      </span>
                      {test.kind === "life" && (
                        <span className={l.lifeBadge}>
                          <Scale size={12} /> {tt.lifeBadge}
                        </span>
                      )}
                      <h3>{test.title}</h3>
                      <p>{test.desc}</p>
                      {/* ⚠️ Qulflangan testda `questions` BO'SH keladi —
                          savollar soni alohida `questionCount` da. */}
                      <span className={s.cardMeta}>
                        {test.locked
                          ? test.questionCount || 0
                          : test.questions.length}{" "}
                        {t.tests_questions}
                      </span>
                      {test.locked && (
                        <span className={s.cardLockCta}>
                          <Lock size={13} /> {t.plan_unlock_cta}
                        </span>
                      )}
                    </Reveal>
                  ))}
                </div>
              </>
            ))}

          {/* ── Test jarayoni ── */}
          {activeTest && !result && (
            <>
              <QuizRunner
                key={activeTest._id + String(activeTest.questions[0]?.i)}
                test={activeTest}
                t={t}
                onExit={exitTest}
                onFinish={finish}
                finishing={finishing}
              />
              {finishError && <p className={l.error}>{finishError}</p>}
            </>
          )}

          {/* ── Natija ── */}
          {activeTest && result && (
            <QuizResult
              result={result}
              t={t}
              onRetry={() => startTest(activeTest)}
              onExit={exitTest}
            />
          )}
        </div>
      </section>
    </>
  );
}

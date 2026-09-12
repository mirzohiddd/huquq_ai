import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ClipboardCheck,
  ArrowLeft,
  Check,
  X as XIcon,
  RotateCcw,
  Trophy,
  Clock,
  TrendingUp,
  Lock,
} from "lucide-react";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import shared from "../styles/site.module.css";
import s from "./Tests.module.css";
import { scrollToTop } from "../utils/smoothScroll";
import test from "../../public/tests-hero.png"

// Fisher-Yates — massivni joyida emas, yangi nusxada aralashtiradi.
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Har safar test boshlanganda (birinchi marta yoki "Qayta urinish")
// savollar tartibi va har savolning variant tartibi qayta aralashtiriladi
// — foydalanuvchi bir xil testni qayta ochsa ham bir xil ketma-ketlikni
// yodlab olmasin. `correct` indeksi variantlar bilan birga qayta
// hisoblanadi, shuning uchun to'g'ri javob baribir aniq belgilanadi.
function shuffleTest(test) {
  return {
    ...test,
    questions: shuffle(test.questions).map((q) => {
      const order = shuffle(q.options.map((_, i) => i));
      return {
        ...q,
        options: order.map((i) => q.options[i]),
        correct: order.indexOf(q.correct),
      };
    }),
  };
}

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

  const [activeTest, setActiveTest] = useState(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // tanlangan variant indeksi
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function startTest(test) {
    // Qulflangan test — savollari umuman kelmagan, boshlab bo'lmaydi
    if (test.locked) return goToPricing();
    setActiveTest(shuffleTest(test));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    scrollToTop();
  }

  function exitTest() {
    setActiveTest(null);
    setFinished(false);
  }

  function choose(optionIndex) {
    if (selected !== null) return; // javob berilgan — o'zgartirib bo'lmaydi
    setSelected(optionIndex);
    if (optionIndex === activeTest.questions[index].correct) {
      setScore((v) => v + 1);
    }
  }

  function next() {
    if (index + 1 >= activeTest.questions.length) {
      setFinished(true);
      /* Natija serverga yoziladi — shunda u Telegram botdagi
         natijalar bilan BIR JOYDA saqlanadi va foydalanuvchining
         umumiy o'quv tarixi to'liq bo'ladi. Xato bo'lsa jim o'tadi:
         test natijasi ekranda baribir ko'rsatiladi. */
      const finalScore =
        score + (selected === activeTest.questions[index].correct ? 0 : 0);
      api
        .post("/progress/quiz", {
          quizId: activeTest._id,
          title: activeTest.title,
          score: finalScore,
          total: activeTest.questions.length,
        })
        .catch(() => {});
    } else {
      setIndex((v) => v + 1);
      setSelected(null);
    }
  }

  const question = activeTest?.questions[index];
  const total = activeTest?.questions.length || 0;
  const percent = total ? Math.round((score / total) * 100) : 0;

  return (
    <>
      {/* Faqat ro'yxatdan o'tganlar uchun — indekslanmaydi */}
      <Seo title={t.seo_tests_title} noindex />
      {/* ⚠️ `shared.container` ATAYLAB YO'Q — hero ekran boshidan
          oxirigacha bo'lishi kerak. Kontent `.hero` padding'i bilan
          1200px chizig'ida ushlab turiladi. */}
      <div className={`${s.heroOuter} animate-fade-up`}>
        <header className={s.hero}>
          {/* ⚠️ Bu yerda CSS bezaklari (nuqtali to'r, iliq dog',
              uchqunlar) YO'Q — ular rasmning O'ZIDA chizilgan.
              Qo'shilsa ustma-ust tushib, ikki marta ko'rinardi. */}
          <div className={s.heroBody}>
            <span className={s.badge}>
              <ClipboardCheck size={15} /> {t.feat_tests_title}
            </span>

            <h1 className={s.heroTitle}>{t.feat_tests_title}</h1>

            {/* Oltin bezak: chiziq — romb — chiziq */}
            <span className={s.ornament} aria-hidden="true">
              <i /> <b /> <i />
            </span>

            <p className={s.heroSub}>{t.tests_sub}</p>

            <div className={s.perks}>
              {[
                { Icon: Clock, title: t.tests_perk1_title, desc: t.tests_perk1_desc },
                { Icon: TrendingUp, title: t.tests_perk2_title, desc: t.tests_perk2_desc },
                { Icon: Trophy, title: t.tests_perk3_title, desc: t.tests_perk3_desc },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className={s.perk}>
                  <span className={s.perkIcon}>
                    <Icon size={17} />
                  </span>
                  <div>
                    <h3 className={s.perkTitle}>{title}</h3>
                    <p className={s.perkDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illyustratsiya — foydalanuvchi bergan haqiqiy rasm.
              ⚠️ Rasm QAYTA ISHLANGAN, asl holicha qo'yilmagan:
                · atrofidagi OQ fon shaffof qilindi — aks holda krem
                  rangli hero ustida oq to'rtburchak bo'lib ko'rinardi
                  (planshetdagi oq qog'oz esa saqlanib qoldi);
                · 1280px → 760px, WebP + PNG: 953 KB → 76 KB.
              Bu shart edi: loyihada bir marta 383 KB lik rasm butun
              saytni sekinlashtirgan. */}
          <div className={s.heroArt}>
            <picture>
              <source srcSet={test} type="image/webp" />
              <img
                src={test}
                alt=""
                width="760"
                height="670"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </header>
      </div>

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
          {activeTest && !finished && (
            <div className={s.quiz}>
              <button type="button" className={s.backBtn} onClick={exitTest}>
                <ArrowLeft size={16} /> {t.tests_back}
              </button>

              <div className={s.progressRow}>
                <span className={s.progressLabel}>
                  {index + 1} / {total}
                </span>
                <div className={s.progressTrack}>
                  <div
                    className={s.progressFill}
                    style={{ width: `${((index + (selected !== null ? 1 : 0)) / total) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className={s.question}>{question.q}</h2>

              <div className={s.options}>
                {question.options.map((opt, i) => {
                  const isCorrect = i === question.correct;
                  const isPicked = selected === i;
                  let cls = s.option;
                  if (selected !== null) {
                    if (isCorrect) cls = `${s.option} ${s.optionCorrect}`;
                    else if (isPicked) cls = `${s.option} ${s.optionWrong}`;
                    else cls = `${s.option} ${s.optionMuted}`;
                  }
                  return (
                    <button
                      key={i}
                      type="button"
                      className={cls}
                      onClick={() => choose(i)}
                      disabled={selected !== null}
                    >
                      <span className={s.optionMark}>
                        {selected !== null && isCorrect && <Check size={15} />}
                        {selected !== null && isPicked && !isCorrect && <XIcon size={15} />}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <div className={s.explain}>
                  <strong>
                    {selected === question.correct ? t.tests_correct : t.tests_wrong}
                  </strong>
                  <p>{question.explain}</p>
                  <button type="button" className={s.nextBtn} onClick={next}>
                    {index + 1 >= total ? t.tests_finish : t.tests_next}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── Natija ── */}
          {activeTest && finished && (
            <div className={s.result}>
              <span className={s.resultIcon}>
                <Trophy size={30} />
              </span>
              <h2>{t.tests_result_title}</h2>
              <p className={s.resultScore}>
                {score} / {total}
              </p>
              <p className={s.resultPercent}>{percent}%</p>
              <p className={s.resultMsg}>
                {percent >= 80
                  ? t.tests_msg_great
                  : percent >= 50
                    ? t.tests_msg_ok
                    : t.tests_msg_low}
              </p>
              <div className={s.resultActions}>
                <button
                  type="button"
                  className={s.retryBtn}
                  onClick={() => startTest(activeTest)}
                >
                  <RotateCcw size={15} /> {t.tests_retry}
                </button>
                <button type="button" className={s.backBtn} onClick={exitTest}>
                  <ArrowLeft size={15} /> {t.tests_back}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

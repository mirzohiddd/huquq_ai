import React, { useRef, useState } from "react";
import {
  PenLine,
  MessageSquare,
  ScrollText,
  Scale,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Lightbulb,
  Zap,
  Mic,
  Square,
  Loader2,
} from "lucide-react";
import api from "../utils/api";
import Reveal from "../components/Reveal";
import { recordPracticeXp, getPracticeXp } from "./lessonProgress";
import s from "./Lessons.module.css";

/**
 * AI AMALIYOT — dars oxiridagi to'rt turdagi topshiriq
 * (foydalanuvchi spetsifikatsiyasining 4, 5, 6, 8-bo'limlari):
 *
 *   written — mavzuni o'z so'zlari bilan tushuntirish
 *   qa      — AI savol beradi, javobni tekshiradi
 *   article — qonun moddasini yodlash (bazadagi HAQIQIY modda)
 *   case    — amaliy vaziyat (case study)
 *
 * Baholashni backend bajaradi (`/api/lesson-practice`) — u RAG orqali
 * topilgan haqiqiy qonun matniga tayanadi, shuning uchun AI modda
 * raqami yoki muddatni "o'ylab topmaydi".
 */
const TABS = [
  { id: "written", icon: PenLine, key: "practice_tab_written" },
  { id: "qa", icon: MessageSquare, key: "practice_tab_qa" },
  { id: "article", icon: ScrollText, key: "practice_tab_article" },
  { id: "case", icon: Scale, key: "practice_tab_case" },
  { id: "speaking", icon: Mic, key: "practice_tab_speaking" },
];

const VERDICT = {
  correct: { icon: CheckCircle2, cls: "verdictCorrect", key: "practice_correct", xp: 5 },
  partial: { icon: AlertTriangle, cls: "verdictPartial", key: "practice_partial", xp: 2 },
  wrong: { icon: XCircle, cls: "verdictWrong", key: "practice_wrong", xp: 0 },
};

export default function LessonPractice({ t, lesson, sections, onXp }) {
  const [tab, setTab] = useState("written");
  const [task, setTask] = useState(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // Backend shu ro'yxatdan har safar BOSHQA bo'lim tanlaydi — topshiriq
  // takrorlanmasligi uchun. `exclude` — oldingi savol.
  const sectionPayload = (sections || []).map((x) => ({
    heading: x.heading,
    text: (x.text || "").slice(0, 900),
  }));

  /* ── OG'ZAKI JAVOB ──
     Mikrofonga aytilgan javob mavjud `/api/voice/transcribe` endpointi
     orqali matnga aylantiriladi (yangi backend kodi yozilmadi), keyin
     odatdagi baholashga yuboriladi. */
  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);

  async function startRecording() {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data);
      recorder.onstop = async () => {
        stream.getTracks().forEach((tr) => tr.stop());
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        if (blob.size < 1000) {
          setError(t.practice_speak_too_short);
          return;
        }
        setTranscribing(true);
        try {
          const form = new FormData();
          form.append("audio", blob, "javob.webm");
          form.append("lang", "uz");
          const { data } = await api.post("/voice/transcribe", form, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          const text = (data.text || "").trim();
          if (!text) {
            setError(t.practice_speak_empty);
          } else {
            setAnswer(text);
          }
        } catch (err) {
          setError(err.response?.data?.error || t.practice_speak_failed);
        } finally {
          setTranscribing(false);
        }
      };
      recorder.start();
      recorderRef.current = recorder;
      setRecording(true);
    } catch {
      setError(t.practice_speak_no_mic);
    }
  }

  function stopRecording() {
    recorderRef.current?.stop();
    recorderRef.current = null;
    setRecording(false);
  }

  function reset() {
    setTask(null);
    setAnswer("");
    setResult(null);
    setError("");
  }

  function switchTab(id) {
    setTab(id);
    reset();
  }

  async function getTask() {
    setBusy(true);
    setError("");
    setResult(null);
    try {
      const { data } = await api.post("/lesson-practice/task", {
        type: tab,
        lessonTitle: lesson.title,
        sections: sectionPayload,
        exclude: task?.question || "",
      });
      setTask(data);
      setAnswer("");
    } catch (err) {
      setError(err.response?.data?.error || t.error_generic);
    } finally {
      setBusy(false);
    }
  }

  async function checkAnswer() {
    if (!answer.trim()) return;
    setBusy(true);
    setError("");
    try {
      const { data } = await api.post("/lesson-practice/check", {
        type: tab,
        lessonTitle: lesson.title,
        question: task.question,
        answer,
        reference: task.reference,
        // Dars matni — AI javobni AYNAN shu mavzu bo'yicha baholaydi
        context: task.context || "",
      });
      // XP shu dars ichida shu TUR uchun faqat bir marta beriladi.
      // Takroran topshirsa 0 qaytadi (lessonProgress.recordPracticeXp).
      const possible = VERDICT[data.verdict]?.xp || 0;
      const gained = possible ? recordPracticeXp(lesson._id, tab, possible) : 0;
      setResult({ ...data, gained, possible });
      if (gained) onXp?.(gained);
    } catch (err) {
      setError(err.response?.data?.error || t.error_generic);
    } finally {
      setBusy(false);
    }
  }

  const verdictInfo = result ? VERDICT[result.verdict] || VERDICT.partial : null;
  const VerdictIcon = verdictInfo?.icon;

  return (
    <Reveal as="section" id="ai-amaliyot" className={s.practiceCard}>
      <div className={s.practiceHead}>
        <span className={s.practiceIcon}>
          <Sparkles size={18} />
        </span>
        <div>
          <h2>{t.practice_title}</h2>
          <p>{t.practice_sub}</p>
        </div>
      </div>

      <div className={s.practiceTabs} role="tablist">
        {TABS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={tab === x.id}
            className={`${s.practiceTab} ${tab === x.id ? s.practiceTabActive : ""}`}
            onClick={() => switchTab(x.id)}
          >
            <x.icon size={15} />
            {t[x.key]}
            {getPracticeXp(lesson._id, x.id) > 0 && (
              <CheckCircle2 size={13} className={s.tabDone} />
            )}
          </button>
        ))}
      </div>

      {error && (
        <div className={s.practiceError}>
          <AlertTriangle size={15} /> {error}
        </div>
      )}

      {/* ── Topshiriq olinmagan ── */}
      {!task && (
        <div className={s.practiceIdle}>
          <p>{t[`practice_intro_${tab}`]}</p>
          <button
            type="button"
            className={s.primaryBtnWide}
            onClick={getTask}
            disabled={busy}
          >
            {busy ? t.practice_loading : t.practice_get_task}
          </button>
        </div>
      )}

      {/* ── Topshiriq berilgan ── */}
      {task && (
        <div className={s.practiceBody}>
          <div className={s.taskBox}>
            <span className={s.taskLabel}>{t.practice_task_label}</span>
            <p>{task.question}</p>
          </div>

          {tab === "speaking" && !result && (
            <div className={s.micRow}>
              {!recording ? (
                <button
                  type="button"
                  className={s.micBtn}
                  onClick={startRecording}
                  disabled={busy || transcribing}
                >
                  {transcribing ? <Loader2 size={18} /> : <Mic size={18} />}
                  {transcribing ? t.practice_speak_processing : t.practice_speak_start}
                </button>
              ) : (
                <button type="button" className={s.micBtnRec} onClick={stopRecording}>
                  <Square size={16} /> {t.practice_speak_stop}
                  <span className={s.micPulse} aria-hidden="true" />
                </button>
              )}
              <span className={s.micHint}>{t.practice_speak_hint}</span>
            </div>
          )}

          <textarea
            className={s.answerArea}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={
              tab === "speaking" ? t.practice_speak_placeholder : t.practice_answer_ph
            }
            rows={5}
            disabled={busy || !!result || recording || transcribing}
            maxLength={1500}
          />

          {!result ? (
            <div className={s.practiceActions}>
              <button
                type="button"
                className={s.primaryBtnWide}
                onClick={checkAnswer}
                disabled={busy || !answer.trim()}
              >
                {busy ? t.practice_checking : t.practice_check}
              </button>
              <button type="button" className={s.ghostBtn} onClick={getTask} disabled={busy}>
                <RotateCcw size={14} /> {t.practice_new_task}
              </button>
            </div>
          ) : (
            <>
              <div className={`${s.verdictBox} ${s[verdictInfo.cls]}`}>
                <span className={s.verdictHead}>
                  <VerdictIcon size={18} />
                  {t[verdictInfo.key]}
                  {result.gained > 0 ? (
                    <em className={s.verdictXp}>
                      <Zap size={12} /> +{result.gained} XP
                    </em>
                  ) : (
                    result.possible > 0 && (
                      <em className={s.verdictXpDone}>{t.practice_xp_already}</em>
                    )
                  )}
                </span>
                <p>{result.feedback}</p>
              </div>

              {result.tip && (
                <div className={s.infoBox}>
                  <span className={s.boxIcon}>
                    <Lightbulb size={16} />
                  </span>
                  <div>
                    <strong>{t.practice_tip}</strong>
                    <p>{result.tip}</p>
                  </div>
                </div>
              )}

              <button
                type="button"
                className={s.primaryBtnWide}
                onClick={getTask}
                disabled={busy}
              >
                <RotateCcw size={16} /> {t.practice_new_task}
              </button>
            </>
          )}
        </div>
      )}
    </Reveal>
  );
}

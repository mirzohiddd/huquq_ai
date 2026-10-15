import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mic, Square, Send, Volume2, VolumeX, GraduationCap } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useLang } from "../../context/LangContext";
import api from "../../utils/api";
import Seo from "../../components/Seo";
import RobotHead from "./RobotHead";
import LessonPanel from "./LessonPanel";
import { useVoiceTalk } from "./useVoiceTalk";
import { voiceText } from "./voiceText";
import { EMOTION_LABEL } from "./robotFace";
import s from "./VoiceAssistant.module.css";

/**
 * OVOZLI YORDAMCHI (robot) — /voice. Savol-javob va dars rejimi.
 * Mantiq: useVoiceTalk.js · yuz: RobotHead.jsx · server: routes/voiceTalk.js.
 */
export default function VoiceAssistant() {
  const { lang } = useLang();
  const t = voiceText(lang);
  const nav = useNavigate();
  const v = useVoiceTalk(lang);
  const [areas, setAreas] = useState([]);
  const busy = v.status === "thinking";

  useEffect(() => {
    api.get("/voice/tutor/areas").then((r) => setAreas(r.data.areas || [])).catch(() => {});
  }, []);

  const MicIcon = v.status === "listening" ? Send : v.status === "speaking" || busy ? Square : Mic;
  const micLabel = v.status === "listening" ? t.send : v.status === "idle" ? t.start : t.stop;
  const err = v.error && (t[v.error.text] || v.error.text || t.error);
  const turn = v.turn;

  return (
    <div className={s.page}>
      <Seo title={t.title} noindex />
      <header className={s.top}>
        <button type="button" className={s.iconBtn} onClick={() => nav(-1)} aria-label={t.back}>
          <ArrowLeft size={20} />
        </button>
        <div className={s.tabs} role="tablist">
          {[["qa", t.modeQa], ["tutor", t.modeTutor]].map(([m, label]) => (
            <button key={m} type="button" role="tab" aria-selected={v.mode === m} className={v.mode === m ? s.tabOn : s.tab} onClick={() => v.switchMode(m)}>
              {label}
            </button>
          ))}
        </div>
        <button type="button" className={s.iconBtn} onClick={v.toggleMute} aria-label={v.muted ? t.unmute : t.mute} title={v.muted ? t.unmute : t.mute}>
          {v.muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </header>

      <main className={s.main}>
        <section className={s.stage}>
          <RobotHead emotion={v.emotion} state={v.status} levelRef={v.levelRef} micRef={v.micRef} size={260} />
          <p className={s.mood}>{EMOTION_LABEL[lang]?.[v.emotion] || ""}</p>
          <p className={s.status} aria-live="polite">{t[v.status]}</p>
          <button type="button" className={`${s.mic} ${v.status !== "idle" ? s.micOn : ""}`} onClick={v.toggle} aria-label={micLabel}>
            <MicIcon size={28} />
          </button>
          <span className={s.micLabel}>{micLabel}</span>
          {err && (
            <p className={s.error} role="alert">
              {err}
              {v.error.register && <Link to="/register" className={s.errLink}>{t.register}</Link>}
            </p>
          )}
        </section>

        <section className={s.panel}>
          {v.mode === "tutor" ? (
            <LessonPanel v={v} t={t} lang={lang} areas={areas} busy={busy} />
          ) : turn ? (
            <div className={s.card}>
              {turn.userText && (
                <p className={s.you}><b>{t.you}:</b> {turn.userText}</p>
              )}
              <div className={s.answer}>
                <b className={s.who}>{t.robot}</b>
                <ReactMarkdown>{turn.answer || turn.speech || ""}</ReactMarkdown>
              </div>
              {turn.quizArea && (
                <button type="button" className={s.primary} disabled={busy} onClick={() => v.startLesson(turn.quizArea)}>
                  <GraduationCap size={16} /> {t.quizOffer}
                </button>
              )}
            </div>
          ) : (
            <div className={s.card}>
              <h1 className={s.cardTitle}>{t.title}</h1>
              <p className={s.text}>{t.sub}</p>
              <p className={s.hint}>{t.hint}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

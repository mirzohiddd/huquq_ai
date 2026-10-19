import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLang } from "../../context/LangContext";
import Seo from "../../components/Seo";
import Robot from "./Robot";
import { useVoiceTalk } from "./useVoiceTalk";
import { voiceText } from "./voiceText";
import s from "./VoiceAssistant.module.css";

/**
 * OVOZLI YORDAMCHI — /voice (2026-10-19 qayta dizayn).
 * Sahifada faqat bitta robot, markazda. Robotni bosish yoki Space:
 * kutish → tinglaydi; tinglayotganda → gapni yuboradi (jim qolsangiz
 * o'zi ham yuboradi); o'ylayotganda/gapirayotganda → to'xtaydi.
 * Mantiq: useVoiceTalk.js · server: routes/voiceTalk.js.
 */
export default function VoiceAssistant() {
  const { lang } = useLang();
  const t = voiceText(lang);
  const nav = useNavigate();
  const v = useVoiceTalk(lang);
  const { toggle } = v;

  useEffect(() => {
    const onKey = (e) => {
      if (e.code !== "Space" || e.repeat) return;
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable) return;
      e.preventDefault(); // sahifa scroll bo'lmasin, fokusdagi tugma ikki marta bosilmasin
      toggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  const err = v.error && (t[v.error.text] || v.error.text || t.error);
  const label = v.status === "listening" ? t.send : v.status === "idle" ? t.start : t.stop;

  return (
    <div className={s.page}>
      <Seo title={t.title} noindex />
      <button type="button" className={s.back} onClick={() => nav(-1)} aria-label={t.back}>
        <ArrowLeft size={20} />
      </button>

      <main className={s.stage}>
        <button
          type="button"
          className={s.robotBtn}
          onClick={toggle}
          onKeyDown={(e) => e.code === "Space" && e.preventDefault()}
          aria-label={label}
          aria-pressed={v.status !== "idle"}
        >
          <Robot state={v.status} emotion={v.emotion} levelRef={v.levelRef} micRef={v.micRef} />
        </button>

        <p className={s.status} data-state={v.status} aria-live="polite">
          <span className={s.dot} aria-hidden="true" />
          {t[v.status]}
        </p>
        {v.status === "idle" && !err && (
          <p className={s.hint}>
            {t.tapHint}
            <span className={s.keyHint}>
              {" "}{t.orKey} <kbd>Space</kbd>
            </span>
          </p>
        )}
        {err && (
          <p className={s.error} role="alert">
            {err}
            {v.error.register && <Link to="/register" className={s.errLink}>{t.register}</Link>}
          </p>
        )}
      </main>
    </div>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import api from "../../utils/api";
import { unlockAudio } from "./audioCtx";
import { useRecorder } from "./useRecorder";
import { usePlayer } from "./usePlayer";

const NEW_TUTOR = { area: "", pos: 0, qid: "", streak: 0, correct: 0, total: 0 };

/**
 * Ovozli yordamchi holati va server bilan aloqa (`/api/voice/*`).
 * Server stateless — suhbat tarixi, aniqlashtirish va dars holati shu yerda.
 * Suhbat uzluksiz: javob tugagach mikrofon o'zi yana yoqiladi; foydalanuvchi
 * jim qolsa (useRecorder → null) to'xtaydi.
 */
export function useVoiceTalk(lang) {
  const [status, setStatus] = useState("idle"); // idle | listening | thinking | speaking
  const [emotion, setEmotion] = useState("neutral");
  const [mode, setMode] = useState("qa");
  const [turn, setTurn] = useState(null); // oxirgi javob (matn, dars, savol, baho)
  const [tutor, setTutor] = useState(NEW_TUTOR);
  const [error, setError] = useState(null);
  const [muted, setMuted] = useState(false);
  const { record, stop: stopRec, micRef } = useRecorder();
  const { play, stop: stopPlay, levelRef } = usePlayer();

  const live = useRef(false);
  const hist = useRef([]);
  const clarify = useRef("");
  const tutorRef = useRef(tutor);
  tutorRef.current = tutor;
  const mutedRef = useRef(muted);
  mutedRef.current = muted;
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const listenRef = useRef(null); // apply → listen (eski yopilma qolmasin)

  useEffect(() => () => {
    live.current = false;
    stopRec();
    stopPlay();
  }, [stopRec, stopPlay]);

  const fail = useCallback((err) => {
    const data = err?.response?.data || {};
    const msg = data.error;
    setError({
      text: typeof msg === "object" ? msg[lang] || msg.uz : msg || "",
      register: !!data.registerRequired,
    });
    setEmotion("confused");
    live.current = false;
    setStatus("idle");
  }, [lang]);

  // Javobni qo'llash: holat, tarix, dars, ovoz
  const apply = useCallback(async (r, { listenAfter } = {}) => {
    setEmotion(r.emotion || "neutral");
    setTurn(r);
    if (r.userText && r.kind !== "lesson") {
      hist.current = [...hist.current, { role: "user", content: r.userText }, { role: "assistant", content: r.answer || r.speech || "" }].slice(-6);
    }
    clarify.current = r.kind === "clarify" ? r.clarifyOf || clarify.current : "";
    if (r.kind === "lesson") {
      setMode("tutor");
      setTutor((t) => ({ ...t, area: r.lesson?.area || r.area || t.area, pos: r.pos ?? t.pos, qid: r.question?.id || "" }));
    } else if (r.kind === "graded") {
      setTutor((t) => ({ ...t, qid: "", streak: r.correct ? t.streak + 1 : 0, correct: t.correct + (r.correct ? 1 : 0), total: t.total + 1 }));
    } else if (r.kind === "stopped") {
      setMode("qa");
      setTutor(NEW_TUTOR);
      live.current = false;
    }
    if (r.audio && !mutedRef.current) {
      setStatus("speaking");
      try {
        await play(r.audio);
      } catch {
        /* dekodlanmadi — matn baribir ko'rinadi */
      }
    }
    setStatus("idle");
    if (listenAfter && live.current) listenRef.current?.();
  }, [play]);

  const listen = useCallback(async () => {
    setError(null);
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setError({ text: "noSupport" });
      return;
    }
    let blob;
    try {
      setStatus("listening");
      blob = await record();
    } catch {
      live.current = false;
      setStatus("idle");
      setError({ text: "noMic" });
      return;
    }
    if (!blob || !live.current) {
      live.current = false;
      setStatus("idle");
      return;
    }
    setStatus("thinking");
    const fd = new FormData();
    fd.append("audio", blob, blob.type.includes("mp4") ? "talk.m4a" : "talk.webm");
    fd.append("lang", lang);
    fd.append("mode", modeRef.current);
    fd.append("state", JSON.stringify({ history: hist.current, clarifyOf: clarify.current, tutor: modeRef.current === "tutor" ? tutorRef.current : null }));
    try {
      const { data } = await api.post("/voice/talk", fd, { timeout: 90000 });
      await apply(data, { listenAfter: true });
    } catch (err) {
      fail(err);
    }
  }, [record, lang, apply, fail]);
  listenRef.current = listen;

  // Mikrofon tugmasi: boshlash / gapni yakunlash / to'xtatish
  const toggle = useCallback(() => {
    unlockAudio(); // iOS: ovoz faqat gesture'da ochilgan kontekstda chiqadi
    if (status === "listening") return stopRec(); // gap tugadi — yuborish
    if (status === "speaking" || live.current) {
      live.current = false;
      stopPlay();
      stopRec();
      setStatus("idle");
      return undefined;
    }
    live.current = true;
    listen();
    return undefined;
  }, [status, listen, stopRec, stopPlay]);

  // Tugmalar (STT yo'q) — dars qadami va variant tanlash
  const button = useCallback(async (url, body) => {
    unlockAudio();
    stopPlay();
    setError(null);
    setStatus("thinking");
    try {
      const { data } = await api.post(url, body);
      await apply(data);
    } catch (err) {
      fail(err);
    }
  }, [apply, fail, stopPlay]);

  const startLesson = (area) => {
    setTutor({ ...NEW_TUTOR, area });
    button("/voice/tutor/step", { area, pos: 0 });
  };
  const step = (delta) => button("/voice/tutor/step", { area: tutor.area, pos: Math.max(0, tutor.pos + delta) });
  const choose = (choice) => button("/voice/tutor/answer", { qid: tutor.qid, choice, streak: tutor.streak });
  const endLesson = () => {
    stopPlay();
    setMode("qa");
    setTutor(NEW_TUTOR);
    setTurn(null);
    setEmotion("happy");
  };
  const switchMode = (m) => {
    if (m === "qa") return endLesson();
    setMode("tutor");
    setTurn(null);
    return undefined;
  };
  const toggleMute = () => {
    if (!muted) stopPlay();
    setMuted(!muted);
  };

  return {
    status, emotion, mode, turn, tutor, error, muted, micRef, levelRef,
    toggle, startLesson, step, choose, endLesson, switchMode, toggleMute,
  };
}

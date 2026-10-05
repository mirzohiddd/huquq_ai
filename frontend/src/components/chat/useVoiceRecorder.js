import { useCallback, useEffect, useRef, useState } from "react";
import api from "../../utils/api";

/**
 * Chat uchun ovozli yozish: mikrofon → MediaRecorder → /voice/transcribe →
 * matn `onText` ga beriladi (foydalanuvchi yuborishdan oldin tahrirlay oladi).
 * Ovozli SUHBAT rejimi (/voice) alohida — bu faqat diktovka.
 *
 * state: idle | recording | transcribing
 */
const MAX_MS = 90_000; // bitta yozuv chegarasi (STT xarajati va hajm)

function pickMime() {
  const types = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"];
  return types.find((m) => window.MediaRecorder?.isTypeSupported?.(m)) || "";
}

export default function useVoiceRecorder({ lang, onText, onError }) {
  const [state, setState] = useState("idle");
  const [seconds, setSeconds] = useState(0);
  const recRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const stopTimerRef = useRef(null);

  const cleanup = useCallback(() => {
    clearInterval(timerRef.current);
    clearTimeout(stopTimerRef.current);
    recRef.current?.stream?.getTracks().forEach((tr) => tr.stop());
    recRef.current = null;
  }, []);

  useEffect(() => cleanup, [cleanup]);

  const upload = useCallback(
    async (blob, mime) => {
      setState("transcribing");
      try {
        const ext = mime.includes("mp4") ? "m4a" : mime.includes("ogg") ? "ogg" : "webm";
        const fd = new FormData();
        fd.append("audio", blob, `voice.${ext}`);
        fd.append("lang", lang);
        const { data } = await api.post("/voice/transcribe", fd, {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 60000,
        });
        const text = String(data?.text || "").trim();
        if (text) onText(text);
        else onError("stt");
      } catch (err) {
        onError(err.response?.status === 429 ? "limit" : "stt", err.response?.data?.error);
      } finally {
        setState("idle");
      }
    },
    [lang, onText, onError],
  );

  const start = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      onError("unsupported");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mime = pickMime();
      const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
      chunksRef.current = [];
      rec.ondataavailable = (e) => e.data?.size && chunksRef.current.push(e.data);
      rec.onstop = () => {
        const type = rec.mimeType || mime || "audio/webm";
        const blob = new Blob(chunksRef.current, { type });
        cleanup();
        if (blob.size > 1000) upload(blob, type);
        else setState("idle");
      };
      recRef.current = rec;
      rec.start();
      setSeconds(0);
      setState("recording");
      timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
      stopTimerRef.current = setTimeout(() => rec.state === "recording" && rec.stop(), MAX_MS);
    } catch {
      cleanup();
      setState("idle");
      onError("denied");
    }
  }, [cleanup, upload, onError]);

  const stop = useCallback(() => {
    const rec = recRef.current;
    if (rec && rec.state === "recording") rec.stop();
  }, []);

  return { state, seconds, start, stop };
}

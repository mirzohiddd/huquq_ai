import { useCallback, useRef } from "react";
import { audioCtx } from "./audioCtx";

const SILENCE_MS = 1300; // gap tugagach shuncha jimlik — avtomatik yuboriladi
const NO_SPEECH_MS = 7000; // umuman gapirmasa — bekor qilinadi
const MAX_MS = 25000;
const SPEECH_LEVEL = 0.06;

/**
 * Mikrofon yozuvi + ovoz faolligini aniqlash (VAD).
 * Foydalanuvchi gapirib bo'lgach o'zi to'xtaydi — tugma bosish shart emas,
 * shuning uchun suhbat tabiiy va tez. `micRef` — robot antennasi/og'zi uchun.
 * `record()` → Blob (gap bo'lmasa null).
 */
export function useRecorder() {
  const micRef = useRef(0);
  const stopRef = useRef(null);

  const stop = useCallback(() => stopRef.current?.(), []);

  const record = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    const ctx = audioCtx();
    const an = ctx?.createAnalyser();
    if (ctx && an) {
      an.fftSize = 1024;
      ctx.createMediaStreamSource(stream).connect(an);
    }
    const mime = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((m) => window.MediaRecorder?.isTypeSupported?.(m)) || "";
    const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
    const chunks = [];
    rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);

    return new Promise((resolve) => {
      const started = performance.now();
      let lastVoice = 0;
      let spoke = false;
      let raf = 0;
      let done = false;
      const data = new Uint8Array(1024);

      const finish = (keep) => {
        if (done) return;
        done = true;
        cancelAnimationFrame(raf);
        micRef.current = 0;
        stopRef.current = null;
        rec.onstop = () => {
          stream.getTracks().forEach((t) => t.stop());
          resolve(keep && spoke ? new Blob(chunks, { type: rec.mimeType || "audio/webm" }) : null);
        };
        if (rec.state !== "inactive") rec.stop();
        else rec.onstop();
      };
      // Qo'lda to'xtatish — gapirgan bo'lsa yuboriladi
      stopRef.current = () => {
        spoke = spoke || performance.now() - started > 700;
        finish(true);
      };

      const tick = () => {
        const now = performance.now();
        if (an) {
          an.getByteTimeDomainData(data);
          let sum = 0;
          for (let i = 0; i < data.length; i++) sum += ((data[i] - 128) / 128) ** 2;
          const lv = Math.sqrt(sum / data.length);
          micRef.current = Math.min(1, lv * 5);
          if (lv > SPEECH_LEVEL) {
            spoke = true;
            lastVoice = now;
          }
          if (spoke && now - lastVoice > SILENCE_MS) return finish(true);
          if (!spoke && now - started > NO_SPEECH_MS) return finish(false);
        }
        if (now - started > MAX_MS) return finish(true);
        raf = requestAnimationFrame(tick);
      };
      rec.start(250);
      tick();
    });
  }, []);

  return { record, stop, micRef };
}

import { useCallback, useRef } from "react";
import { audioCtx } from "./audioCtx";

/**
 * Javob ovozini ijro etadi va `levelRef` ga real vaqtdagi balandlikni
 * yozadi (0..1) — robot og'zi shundan qimirlaydi.
 * AudioBuffer orqali: <audio> elementidan farqli, iOS'da ham analizator ishlaydi.
 */
export function usePlayer() {
  const levelRef = useRef(0);
  const srcRef = useRef(null);

  const stop = useCallback(() => {
    try {
      srcRef.current?.stop();
    } catch {
      /* allaqachon to'xtagan */
    }
    srcRef.current = null;
    levelRef.current = 0;
  }, []);

  const play = useCallback(
    async (base64, onStart) => {
      stop();
      const ctx = audioCtx();
      if (!ctx || !base64) return;
      const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
      const buffer = await ctx.decodeAudioData(bytes.buffer);
      const src = ctx.createBufferSource();
      const an = ctx.createAnalyser();
      an.fftSize = 512;
      src.buffer = buffer;
      src.connect(an);
      an.connect(ctx.destination);
      srcRef.current = src;
      const data = new Uint8Array(an.fftSize);
      let raf = 0;
      const tick = () => {
        an.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) sum += ((data[i] - 128) / 128) ** 2;
        levelRef.current = Math.min(1, Math.sqrt(sum / data.length) * 4.2);
        raf = requestAnimationFrame(tick);
      };
      await new Promise((resolve) => {
        src.onended = () => {
          cancelAnimationFrame(raf);
          levelRef.current = 0;
          if (srcRef.current === src) srcRef.current = null;
          resolve();
        };
        src.start();
        onStart?.();
        tick();
      });
    },
    [stop],
  );

  return { play, stop, levelRef };
}

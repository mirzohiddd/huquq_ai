import React, { useState, useRef, useEffect } from "react";
import { Volume2, Square, Loader2 } from "lucide-react";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import s from "./SpeakButton.module.css";

/* AYNI PAYTDA IJRO ETILAYOTGAN AUDIO — modul darajasida.
   Foydalanuvchi bir javobni tinglab turib ikkinchisini bossa,
   birinchisi TO'XTASHI kerak; aks holda ikki ovoz bir vaqtda
   gapirib, ikkalasi ham tushunarsiz bo'lardi. */
let currentAudio = null;
let stopCurrent = null;

function stopPlaying() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if (stopCurrent) stopCurrent();
  currentAudio = null;
  stopCurrent = null;
}

/**
 * "Eshitish" tugmasi — AI javobini ovoz bilan o'qib beradi.
 *
 * Til SERVER tomonida matnning O'ZIDAN aniqlanadi (interfeys tilidan
 * emas): javob ruscha bo'lsa rus ovozi, o'zbekcha bo'lsa o'zbek ovozi
 * o'qiydi. Shuning uchun bu yerdan `lang` YUBORILMAYDI.
 */
export default function SpeakButton({ text }) {
  const { t } = useLang();
  const [state, setState] = useState("idle"); // idle | loading | playing | error
  const urlRef = useRef(null); // tayyor audio manzili (qayta so'ramaslik uchun)
  const audioRef = useRef(null);
  const aliveRef = useRef(true);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      // Komponent yo'q qilinganda ijroni to'xtatamiz va xotirani bo'shatamiz
      aliveRef.current = false;
      if (audioRef.current === currentAudio) stopPlaying();
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    };
  }, []);

  async function play() {
    if (state === "playing") {
      stopPlaying();
      setState("idle");
      return;
    }

    stopPlaying(); // boshqa javob ijro etilayotgan bo'lsa — to'xtatamiz

    try {
      let url = urlRef.current;

      // Birinchi bosishda audio olinadi, keyingilarida keshdan ijro etiladi
      if (!url) {
        setState("loading");
        /* ⚠️ `/api` prefiksi YOZILMAYDI — `api` instansiyasining
           `baseURL` i allaqachon `.../api` bilan tugaydi (`apiBase.js`).
           Prefiks qo'shilsa manzil `/api/api/voice/speak` bo'lib
           404 qaytaradi. */
        const { data } = await api.post(
          "/voice/speak",
          { text },
          { responseType: "blob" },
        );
        if (!aliveRef.current) return;
        url = URL.createObjectURL(data);
        urlRef.current = url;
      }

      const audio = new Audio(url);
      audioRef.current = audio;
      currentAudio = audio;
      stopCurrent = () => aliveRef.current && setState("idle");

      audio.onended = () => {
        if (aliveRef.current) setState("idle");
        currentAudio = null;
        stopCurrent = null;
      };
      audio.onerror = () => {
        if (aliveRef.current) setState("error");
        currentAudio = null;
        stopCurrent = null;
      };

      await audio.play();
      if (aliveRef.current) setState("playing");
    } catch (err) {
      if (!aliveRef.current) return;
      /* Xato bo'lsa keshni tozalaymiz — aks holda buzuq/bo'sh audio
         manzili qolib, keyingi bosishlar ham ishlamasdi. */
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
        urlRef.current = null;
      }
      console.error("Ovoz xatosi:", err);
      setState("error");
      setTimeout(() => aliveRef.current && setState("idle"), 3000);
    }
  }

  const label =
    state === "loading"
      ? t.speak_loading
      : state === "playing"
        ? t.speak_stop
        : state === "error"
          ? t.speak_error
          : t.speak_listen;

  return (
    <button
      type="button"
      className={`${s.btn} ${state === "playing" ? s.active : ""} ${
        state === "error" ? s.err : ""
      }`}
      onClick={play}
      disabled={state === "loading"}
      aria-label={label}
      title={label}
    >
      {state === "loading" ? (
        <Loader2 size={13} className={s.spin} />
      ) : state === "playing" ? (
        <Square size={12} fill="currentColor" />
      ) : (
        <Volume2 size={13} />
      )}
      <span>{label}</span>
    </button>
  );
}

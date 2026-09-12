import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { ArrowLeft, Volume2, VolumeX, RotateCcw } from "lucide-react";

import { API_BASE } from "../utils/apiBase";

const T = {
  uz: {
    title: "Huquq AI",
    back: "Orqaga",
    noMic: "Mikrofon ruxsati kerak",
    error: "Xatolik",
  },
  ru: {
    title: "Huquq AI",
    back: "Назад",
    noMic: "Нужен доступ к микрофону",
    error: "Ошибка",
  },
  en: {
    title: "Huquq AI",
    back: "Back",
    noMic: "Microphone permission needed",
    error: "Error",
  },
};

const S = {
  IDLE: "idle",
  LISTENING: "user",
  PROCESSING: "processing",
  SPEAKING: "ai",
  ERROR: "error",
};

export default function VoiceChat() {
  const nav = useNavigate();
  const { lang = "uz" } = useLang?.() || {};
  const t = T[lang] || T.uz;

  const [status, setStatus] = useState(S.IDLE);
  const [muted, setMuted] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const canvasRef = useRef(null);
  const stateRef = useRef(S.IDLE);
  const recRef = useRef(null);
  const chunksRef = useRef([]);
  const audioRef = useRef(null);
  const histRef = useRef([]);
  const analyserRef = useRef(null);
  const volRef = useRef(0);
  const animRef = useRef(null);
  const rotYRef = useRef(0);
  const hueRef = useRef(200);
  const lastRef = useRef(0);
  // [FIX] Mobil autoplay uchun — gesture paytida yaratiladi
  const audioCtxRef = useRef(null);

  // Canvas particle orb
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const size = Math.min(window.innerWidth, window.innerHeight, 500);
    canvas.width = size;
    canvas.height = size;
    const CX = size / 2,
      CY = size / 2,
      R = size * 0.35;
    const N = window.devicePixelRatio > 1.5 ? 2200 : 1800;

    const particles = Array.from({ length: N }, () => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = R * (0.12 + 0.88 * Math.cbrt(Math.random()));
      return {
        ox: Math.sin(phi) * Math.cos(theta) * r,
        oy: Math.sin(phi) * Math.sin(theta) * r,
        oz: Math.cos(phi) * r,
        nx: Math.random() * 2 - 1,
        ny: Math.random() * 2 - 1,
        nz: Math.random() * 2 - 1,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 1,
        size: 0.5 + Math.random() * 1,
      };
    });

    const lerp = (a, b, t) => a + (b - a) * t;
    let curScale = 1;

    function frame(now) {
      animRef.current = requestAnimationFrame(frame);
      const dt = Math.min((now - lastRef.current) / 1000, 0.05);
      lastRef.current = now;
      const st = stateRef.current;
      const tSec = now / 1000;

      let targetScale = 1;
      if (st === S.LISTENING) targetScale = 1.18 + volRef.current * 0.25;
      else if (st === S.SPEAKING) targetScale = 1.1 + volRef.current * 0.2;
      else if (st === S.PROCESSING) targetScale = 1.05;

      curScale += (targetScale - curScale) * Math.min(1, dt * 8);
      const Rs = R * curScale;

      const speed =
        st === S.IDLE
          ? 0.07
          : st === S.LISTENING
            ? 0.5
            : st === S.SPEAKING
              ? 0.8
              : 0.4;
      const turbulence = st === S.IDLE ? 0.01 : 0.055;
      const glowStr = st === S.IDLE ? 0.25 : 0.8;
      const hueSpeed = st === S.IDLE ? 3 : 22;
      const isActive = st !== S.IDLE && st !== S.PROCESSING;
      const volBoost = 1 + volRef.current * 0.25;

      rotYRef.current =
        (rotYRef.current + speed * dt * volBoost) % (Math.PI * 2);
      hueRef.current = (hueRef.current + hueSpeed * dt) % 360;
      const H = hueRef.current;
      const cy = Math.cos(rotYRef.current),
        sy = Math.sin(rotYRef.current);

      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = "#050b1f";
      ctx.fillRect(0, 0, size, size);

      if (!frame._stars) {
        frame._stars = Array.from({ length: 60 }, () => ({
          x: Math.random() * size,
          y: Math.random() * size,
          s: Math.random() * 1.2,
          p: Math.random() * Math.PI * 2,
        }));
      }
      for (const star of frame._stars) {
        const a = 0.2 + 0.3 * Math.sin(star.p + tSec * 0.3);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.s, 0, Math.PI * 2);
        ctx.fill();
      }

      const grd = ctx.createRadialGradient(CX, CY, Rs * 0.3, CX, CY, Rs * 1.6);
      grd.addColorStop(0, `hsla(${H},85%,65%,${glowStr * 0.1})`);
      grd.addColorStop(
        0.5,
        `hsla(${(H + 50) % 360},90%,60%,${glowStr * 0.04})`,
      );
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(CX, CY, Rs * 1.6, 0, Math.PI * 2);
      ctx.fill();

      const proj = particles.map((p) => {
        const noise =
          Math.sin(p.phase + tSec * p.speed * 2.5) * turbulence * Rs;
        const px = (p.ox + p.nx * noise) * curScale,
          py = (p.oy + p.ny * noise) * curScale,
          pz = (p.oz + p.nz * noise) * curScale;
        const rx = px * cy + pz * sy;
        const ry = py;
        const rz = -px * sy + pz * cy;
        const dist = Math.sqrt(rx * rx + ry * ry + rz * rz);
        const norm = dist / Rs;
        const edge = Math.pow(Math.max(0, Math.min(1, norm)), 0.45);
        return { sx: CX + rx, sy: CY + ry, sz: rz, edge, size: p.size };
      });
      proj.sort((a, b) => a.sz - b.sz);

      for (const p of proj) {
        const depth = Math.max(0, Math.min(1, (p.sz + Rs) / (2 * Rs)));
        const colorMix =
          (Math.sin((p.sz / Rs) * Math.PI + tSec * 0.9) + 1) * 0.5;
        const ph = lerp(H, (H + 55) % 360, colorMix);
        const ps = lerp(65, 100, p.edge);
        const pl = lerp(30, 92, p.edge);
        const pa =
          lerp(0.04, isActive ? 0.95 : 0.72, p.edge) * (0.28 + depth * 0.72);
        const sz =
          p.size * (0.45 + p.edge * 1.6) * (isActive ? 1.35 : 0.95) * volBoost;

        ctx.fillStyle = `hsla(${ph},${ps}%,${pl}%,${pa})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, sz, 0, Math.PI * 2);
        ctx.fill();

        if (p.edge > 0.85) {
          ctx.fillStyle = `hsla(${ph},50%,98%,${pa * 0.45})`;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, sz * 0.45, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const cGrd = ctx.createRadialGradient(CX, CY, 0, CX, CY, Rs * 0.5);
      cGrd.addColorStop(0, `hsla(${(H + 180) % 360},55%,98%,${glowStr * 0.2})`);
      cGrd.addColorStop(0.5, `hsla(${H},80%,70%,${glowStr * 0.07})`);
      cGrd.addColorStop(1, "transparent");
      ctx.fillStyle = cGrd;
      ctx.beginPath();
      ctx.arc(CX, CY, Rs * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    animRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const startRecording = useCallback(async () => {
    if (stateRef.current !== S.IDLE) return;
    setErrMsg("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000,
        },
      });
      try {
        const ac = new AudioContext(),
          src = ac.createMediaStreamSource(stream);
        const an = ac.createAnalyser();
        an.fftSize = 256;
        src.connect(an);
        analyserRef.current = an;
        const data = new Uint8Array(an.fftSize);
        const volTick = () => {
          if (stateRef.current !== S.LISTENING) return;
          an.getByteTimeDomainData(data);
          let s = 0;
          for (let i = 0; i < data.length; i++) s += Math.abs(data[i] - 128);
          volRef.current = Math.min(s / data.length / 12, 1);
          requestAnimationFrame(volTick);
        };
        requestAnimationFrame(volTick);
      } catch {}

      chunksRef.current = [];
      const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : "audio/webm";
      const rec = new MediaRecorder(stream, { mimeType: mime });
      rec.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = async () => {
        stream.getTracks().forEach((tr) => tr.stop());
        analyserRef.current = null;
        volRef.current = 0;
        await sendAudio(new Blob(chunksRef.current, { type: "audio/webm" }));
      };
      rec.start(200);
      recRef.current = rec;
      stateRef.current = S.LISTENING;
      setStatus(S.LISTENING);
    } catch (err) {
      setErrMsg(err.name === "NotAllowedError" ? t.noMic : t.error);
      stateRef.current = S.ERROR;
      setStatus(S.ERROR);
      setTimeout(() => {
        setErrMsg("");
        stateRef.current = S.IDLE;
        setStatus(S.IDLE);
      }, 3000);
    }
  }, [lang]);

  const stopRecording = useCallback(() => {
    if (recRef.current?.state === "recording") recRef.current.stop();
    stateRef.current = S.PROCESSING;
    setStatus(S.PROCESSING);
  }, []);

  // [FIX] handlePress — gesture paytida AudioContext yaratish/resume
  const handlePress = useCallback(() => {
    if (!audioCtxRef.current) {
      try {
        audioCtxRef.current = new (
          window.AudioContext || window.webkitAudioContext
        )();
      } catch {}
    }
    if (audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
    const st = stateRef.current;
    if (st === S.IDLE) return startRecording();
    if (st === S.LISTENING) return stopRecording();
    if (st === S.SPEAKING) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      volRef.current = 0;
      stateRef.current = S.IDLE;
      setStatus(S.IDLE);
    }
  }, [startRecording, stopRecording]);

  const sendAudio = useCallback(
    async (blob) => {
      const form = new FormData();
      form.append("audio", blob, "voice.webm");
      form.append("lang", lang);
      form.append("tts", muted ? "false" : "true");
      form.append("history", JSON.stringify(histRef.current.slice(-6)));
      try {
        const headers = {};
        const tok = localStorage.getItem("token");
        if (tok) headers["Authorization"] = `Bearer ${tok}`;
        const res = await fetch(`${API_BASE}/voice/chat`, {
          method: "POST",
          headers,
          body: form,
        });
        if (!res.ok) {
          const e = await res.json().catch(() => ({}));
          if (res.status === 429) {
            const errObj = e?.error;
            const msg =
              typeof errObj === "object"
                ? errObj[lang] || errObj.uz
                : errObj ||
                  (lang === "ru"
                    ? "Дневной лимит исчерпан. Попробуйте завтра."
                    : "Kunlik limitingiz tugadi. Ertaga foydalanishingiz mumkin.");
            setErrMsg(msg);
            stateRef.current = S.IDLE;
            setStatus(S.IDLE);
            return;
          }
          throw new Error(typeof e?.error === "string" ? e.error : t.error);
        }
        const ct = res.headers.get("Content-Type") || "";
        const uText = decodeURIComponent(res.headers.get("X-User-Text") || "");
        const aiText = decodeURIComponent(
          res.headers.get("X-Text-Answer") || "",
        );
        if (uText) histRef.current.push({ role: "user", content: uText });
        if (aiText)
          histRef.current.push({ role: "assistant", content: aiText });
        if (histRef.current.length > 12)
          histRef.current = histRef.current.slice(-12);
        if (ct.includes("audio")) {
          const buf = await res.arrayBuffer();
          if (buf.byteLength > 500 && !muted) playAudio(buf, ct);
          else {
            stateRef.current = S.IDLE;
            setStatus(S.IDLE);
          }
        } else {
          await res.json().catch(() => {});
          stateRef.current = S.IDLE;
          setStatus(S.IDLE);
        }
      } catch (err) {
        setErrMsg(err.message);
        stateRef.current = S.ERROR;
        setStatus(S.ERROR);
        setTimeout(() => {
          setErrMsg("");
          stateRef.current = S.IDLE;
          setStatus(S.IDLE);
        }, 3000);
      }
    },
    [lang, muted, t],
  );

  // [FIX] playAudio — NotAllowedError da gesture paytida yaratilgan ctx ishlatish
  const playAudio = useCallback((arrayBuffer, audioType) => {
    stateRef.current = S.SPEAKING;
    setStatus(S.SPEAKING);
    let t2 = 0;
    const pulse = () => {
      if (stateRef.current !== S.SPEAKING) return;
      t2 += 0.12;
      volRef.current = 0.35 + Math.sin(t2 * 3.5) * 0.35;
      requestAnimationFrame(pulse);
    };
    requestAnimationFrame(pulse);

    const blob = new Blob([arrayBuffer], { type: audioType || "audio/wav" });
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audioRef.current = audio;
    audio.onended = audio.onerror = () => {
      URL.revokeObjectURL(url);
      audioRef.current = null;
      volRef.current = 0;
      stateRef.current = S.IDLE;
      setStatus(S.IDLE);
    };
    audio.play().catch((err) => {
      if (err.name === "NotAllowedError") {
        const ctx = audioCtxRef.current;
        if (!ctx) {
          stateRef.current = S.IDLE;
          setStatus(S.IDLE);
          return;
        }
        const resume =
          ctx.state === "suspended" ? ctx.resume() : Promise.resolve();
        resume
          .then(() =>
            ctx.decodeAudioData(
              arrayBuffer.slice(0),
              (dec) => {
                const src = ctx.createBufferSource();
                src.buffer = dec;
                src.connect(ctx.destination);
                src.onended = () => {
                  volRef.current = 0;
                  stateRef.current = S.IDLE;
                  setStatus(S.IDLE);
                };
                src.start(0);
              },
              () => {
                volRef.current = 0;
                stateRef.current = S.IDLE;
                setStatus(S.IDLE);
              },
            ),
          )
          .catch(() => {
            stateRef.current = S.IDLE;
            setStatus(S.IDLE);
          });
      } else {
        stateRef.current = S.IDLE;
        setStatus(S.IDLE);
      }
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#050b1f",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 16px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => nav(-1)}
          style={{
            background: "#050b1f",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={18} color="#ffffff60" />
        </button>
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 14,
            letterSpacing: ".5px",
          }}
        >
          {t.title}
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => {
              histRef.current = [];
              stateRef.current = S.IDLE;
              setStatus(S.IDLE);
            }}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "none",
              borderRadius: 10,
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <RotateCcw size={15} color="#ffffff40" />
          </button>
          <button
            onClick={() => setMuted((m) => !m)}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "none",
              borderRadius: 10,
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {muted ? (
              <VolumeX size={17} color="#ef444488" />
            ) : (
              <Volume2 size={17} color="#ffffff40" />
            )}
          </button>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <canvas
          ref={canvasRef}
          onClick={handlePress}
          style={{ cursor: "pointer", borderRadius: "50%", display: "block" }}
        />
      </div>

      {errMsg && (
        <div
          onClick={() => {
            setErrMsg("");
            stateRef.current = S.IDLE;
            setStatus(S.IDLE);
          }}
          style={{
            position: "absolute",
            bottom: 60,
            left: 20,
            right: 20,
            background: "rgba(239,68,68,0.12)",
            border: "1px solid rgba(239,68,68,0.35)",
            borderRadius: 14,
            padding: "14px 18px",
            textAlign: "center",
            color: "#fca5a5",
            fontSize: 14,
            lineHeight: 1.5,
            cursor: "pointer",
            backdropFilter: "blur(8px)",
          }}
        >
          {errMsg}
          <div
            style={{
              fontSize: 11,
              color: "rgba(252,165,165,0.5)",
              marginTop: 6,
            }}
          >
            {lang === "ru" ? "Нажмите, чтобы закрыть" : "Yopish uchun bosing"}
          </div>
        </div>
      )}
    </div>
  );
}

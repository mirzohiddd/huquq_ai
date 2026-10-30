/**
 * OVOZLAR (Duolingo uslubida) — fayl yuklanmaydi, hammasi Web Audio'da
 * sintez qilinadi: to'g'ri javobga har xil quvnoq kuy, xatoga yumshoq ohang,
 * dars va bo'lim yakuniga fanfara. Qalqon esa bolacha ovozda gapiradi:
 * matn serverdagi TTS'dan (`/api/voice/speak`, keshlangan) keladi va
 * tezroq + balandroq ijro etiladi.
 *
 * ⚠️ Telegram WebView'da audio faqat foydalanuvchi bosgandan keyin ochiladi —
 * `unlock()` birinchi bosishda chaqiriladi (MiniApp.jsx).
 */
import { mini, apiLang } from "./miniApi";

/* ⚠️ TIL ARALASHMASIN (2026-10-30): rus rejimida izohning tarjimasi hali
   tayyor bo'lmasa, u o'zbekcha keladi va rus ovozi o'zbek matnini buzib
   o'qirdi. Endi faqat interfeys TILIDAGI gaplar o'qiladi (kirill/lotin
   ulushi bo'yicha), boshqa tildagi gap jim o'tkazib yuboriladi. */
const CYR = /\p{Script=Cyrillic}/gu;
const LET = /\p{L}/gu;
function sameLang(sentence, lang) {
  const all = (sentence.match(LET) || []).length;
  if (!all) return true; // raqam / tinish belgisi
  const cyr = (sentence.match(CYR) || []).length / all;
  return lang === "ru" ? cyr >= 0.8 : cyr <= 0.2;
}
export const speakable = (text, lang) =>
  String(text || "").split(/(?<=[.!?])\s+/).filter((x) => sameLang(x, lang)).join(" ").trim();
/* Tezlashtirish qalqonni «bolacha» qiladi. O'zbek erkak ovozida yoqimli,
   rus ayol ovozida esa chiyillab, xunuk eshitilardi — ruschada deyarli tabiiy. */
const RATE = { uz: 1.16, ru: 1.04 };

const KEY = { sound: "miniSound", anim: "miniAnim" };
const read = (k) => {
  try {
    return localStorage.getItem(k) !== "0";
  } catch {
    return true;
  }
};
export const settings = { sound: read(KEY.sound), anim: read(KEY.anim) };
export function setSetting(name, on) {
  settings[name] = on;
  try {
    localStorage.setItem(KEY[name], on ? "1" : "0");
  } catch {
    /* yopiq saqlash — sessiya davomida ishlaydi */
  }
  if (!on && name === "sound") stopVoice();
}

let ctx = null;
export function unlock() {
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
  } catch {
    ctx = null;
  }
}

/* Bitta nota: yumshoq hujum va so'nish (qo'ng'iroqcha tembri). */
function note(freq, at, dur = 0.18, type = "triangle", vol = 0.22) {
  const t = ctx.currentTime + at;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(ctx.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}
const N = (semi) => 523.25 * 2 ** (semi / 12); // C5 dan yarim tonlar

/* To'g'ri javob kuylari — har safar boshqasi (bir xil zerikarli emas). */
const RIGHT = [
  [[0, 0], [4, 0.08], [7, 0.16], [12, 0.24]],
  [[7, 0], [12, 0.1], [16, 0.2]],
  [[0, 0], [7, 0.07], [4, 0.14], [12, 0.22]],
  [[5, 0], [9, 0.08], [12, 0.16], [17, 0.26]],
  [[2, 0], [7, 0.09], [11, 0.18], [14, 0.27]],
];
let lastRight = -1;

export function sfx(kind) {
  if (!settings.sound || !ctx) return;
  try {
    if (kind === "right") {
      let i;
      do i = Math.floor(Math.random() * RIGHT.length);
      while (i === lastRight);
      lastRight = i;
      RIGHT[i].forEach(([s, at]) => note(N(s), at, 0.22, "triangle", 0.2));
      note(N(24), RIGHT[i].at(-1)[1] + 0.06, 0.35, "sine", 0.06); // yaltiroq uchqun
    } else if (kind === "wrong") {
      note(N(-5), 0, 0.2, "sine", 0.18);
      note(N(-9), 0.14, 0.32, "sine", 0.16);
    } else if (kind === "tap") {
      note(N(12), 0, 0.06, "sine", 0.07);
    } else if (kind === "lesson") {
      [[0, 0], [4, 0.12], [7, 0.24], [12, 0.36], [7, 0.5], [12, 0.62]].forEach(([s, at]) => note(N(s), at, 0.28, "triangle", 0.2));
      [[0, 0.36], [4, 0.36], [7, 0.36]].forEach(([s, at]) => note(N(s - 12), at, 0.7, "sine", 0.08));
    } else if (kind === "unit") {
      const run = [0, 4, 7, 12, 16, 19, 24];
      run.forEach((s, i) => note(N(s), i * 0.09, 0.3, "triangle", 0.18));
      [[0, 0.75], [4, 0.75], [7, 0.75], [12, 0.75]].forEach(([s, at]) => note(N(s), at, 1.1, "sawtooth", 0.05));
      [[12, 0.75], [16, 0.95], [19, 1.15], [24, 1.35]].forEach(([s, at]) => note(N(s), at, 0.4, "triangle", 0.18));
    }
  } catch {
    /* ovozsiz davom etadi */
  }
}

/* ── Qalqonning ovozi ── */
let current = null;
const voiceCache = new Map(); // matn → AudioBuffer (bir sessiyada)

export function stopVoice() {
  try {
    current?.stop();
  } catch {
    /* allaqachon to'xtagan */
  }
  current = null;
}

/** Matnni bolacha ovozda o'qiydi. `onState(true/false)` — gapirish animatsiyasi uchun. */
export async function speak(text, onState) {
  const lang = apiLang();
  text = speakable(text, lang);
  if (!settings.sound || !ctx || !text) return;
  stopVoice();
  try {
    let buf = voiceCache.get(text);
    if (!buf) {
      const data = await mini.speak(text);
      buf = await ctx.decodeAudioData(data);
      voiceCache.set(text, buf);
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = RATE[lang] || 1.1; // ovoz balandlashadi va yoshroq eshitiladi
    src.connect(ctx.destination);
    current = src;
    onState?.(true);
    src.onended = () => {
      if (current === src) current = null;
      onState?.(false);
    };
    src.start();
  } catch {
    onState?.(false);
  }
}

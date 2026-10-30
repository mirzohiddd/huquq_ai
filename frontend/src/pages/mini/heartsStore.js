/**
 * YURAKCHALAR holati (mijoz tomoni) — haqiqiy hisob SERVERDA
 * (`backend/services/miniApp/hearts.js`). Har javobdagi `hearts` shu yerga
 * yoziladi (miniApi interceptor), 403 `noHearts` kelsa — oyna ochiladi.
 */
import { useEffect, useState } from "react";

let state = { hearts: null, open: false, at: 0 };
const subs = new Set();
const emit = () => subs.forEach((f) => f(state));

export function setHearts(h) {
  if (!h || typeof h.hearts !== "number") return;
  state = { ...state, hearts: h, at: Date.now() };
  emit();
}
export function openHearts() {
  state = { ...state, open: true };
  emit();
}
export function closeHearts() {
  state = { ...state, open: false };
  emit();
}

/** Joriy holat (vaqt o'tishi bilan tiklanganlar hisobga olinadi). */
export function liveOf(s = state, now = Date.now()) {
  const h = s.hearts;
  if (!h) return null;
  const left = Math.max(0, h.fullIn - (now - s.at));
  const hearts = Math.max(0, h.max - Math.ceil(left / 1800000));
  const missing = h.max - hearts;
  return { ...h, hearts, missing, nextIn: missing ? left % 1800000 || 1800000 : 0, prices: { one: 10, all: Math.min(40, missing * 10) } };
}

export function useHearts(tick = false) {
  const [s, setS] = useState(state);
  const [, setNow] = useState(0);
  useEffect(() => {
    subs.add(setS);
    return () => subs.delete(setS);
  }, []);
  useEffect(() => {
    if (!tick) return undefined;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [tick]);
  return { ...s, live: liveOf(s) };
}

export const mmss = (ms) => {
  const t = Math.ceil(ms / 1000);
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
};

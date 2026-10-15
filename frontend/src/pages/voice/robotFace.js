/**
 * Robot yuzining his-tuyg'u parametrlari (2026-10-15).
 * `RobotHead` shu jadvaldan ko'z, qosh, og'iz va ranglarni oladi.
 *
 *  color   — visor nuri, antenna, quloq halqasi, LED chiziqlari
 *  eye     — "round" | "arc" (xursand ^ ^) ; lid — qovoq qiyaligi (+ jahl, − xafa)
 *  brow    — qosh burchagi (gradus): + ichki uchi pastga (jahl), − yuqoriga (xafa)
 *  smile   — og'iz egriligi (+ tabassum, − qovoq solish)
 *  blush   — yonoq qizarishi; tint — korpus rangi (jahl → qizil, xafa → siyohrang)
 */
export const EMOTIONS = {
  neutral: { color: "#4ea8ff", eye: "round", ry: 15, lid: 0, brow: 0, smile: 4, blush: 0, tint: null, tilt: 0 },
  happy: { color: "#34d399", eye: "arc", ry: 15, lid: 0, brow: -4, smile: 12, blush: 0.45, tint: null, tilt: -3 },
  sad: { color: "#a78bfa", eye: "round", ry: 12, lid: -0.55, brow: -16, smile: -9, blush: 0, tint: "#7c3aed", tilt: 5, tear: true },
  angry: { color: "#ff4d4f", eye: "round", ry: 12, lid: 0.6, brow: 22, smile: -7, blush: 0.75, tint: "#ef4444", tilt: 0, shake: true },
  confused: { color: "#fbbf24", eye: "round", ry: 14, lid: 0, brow: 0, browSkew: true, smile: -2, blush: 0, tint: null, tilt: -7 },
};

// Holatlar his-tuyg'uni vaqtincha "qoplaydi"
export const STATES = {
  listening: { color: "#4ea8ff", ry: 17, lookY: 0 },
  thinking: { color: "#60a5fa", ry: 13, lookX: 6, lookY: -6 },
};

export function faceFor(emotion, state) {
  const base = EMOTIONS[emotion] || EMOTIONS.neutral;
  const over = STATES[state];
  return over ? { ...EMOTIONS.neutral, ...over, smile: state === "thinking" ? 0 : 6 } : base;
}

/** Og'iz shakli: kenglik, tabassum egriligi va ochilish (0..1). */
export function mouthPath(smile, open, cx = 160, cy = 206, w = 46) {
  const x1 = cx - w / 2;
  const x2 = cx + w / 2;
  const curve = smile * 0.9;
  const gap = 2 + open * 26;
  // Yuqori lab: tabassumda uchlari ko'tariladi
  const top = `M ${x1} ${cy - curve * 0.25} Q ${cx} ${cy + curve} ${x2} ${cy - curve * 0.25}`;
  // Pastki lab: ochilganda pastga tushadi, egrilik bilan
  const bottom = `Q ${cx} ${cy + curve + gap * 1.4} ${x1} ${cy - curve * 0.25}`;
  return `${top} ${bottom} Z`;
}

export const EMOTION_LABEL = {
  uz: { neutral: "Xotirjam", happy: "Xursand", sad: "Hamdard", angry: "Jahli chiqqan", confused: "Tushunmadi" },
  ru: { neutral: "Спокоен", happy: "Рад", sad: "Сочувствует", angry: "Сердится", confused: "Не понял" },
};

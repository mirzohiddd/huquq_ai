/**
 * Slaydlarni PowerPoint (.pptx) fayliga eksport — pptxgenjs faqat tugma
 * bosilganda yuklanadi (alohida bo'lak, sahifani og'irlashtirmaydi).
 * Dizayn ekrandagi preview bilan bir xil: to'q ko'k + oltin urg'u.
 */
const NAVY = "0B1322";
const GOLD = "C9953A";
const INK = "1E2D4A";
const MUTED = "6A6760";
const FONT = "Calibri";

const refText = (r, ru) => (ru ? `${r.law}, ст. ${r.article}` : `${r.law}, ${r.article}-modda`) + (r.lawTitle ? ` — ${r.lawTitle}` : "");

function header(sl, title) {
  sl.addShape("rect", { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: GOLD } });
  sl.addText(title, { x: 0.6, y: 0.35, w: 12.1, h: 0.9, fontFace: FONT, fontSize: 28, bold: true, color: NAVY, fit: "shrink" });
}

function footer(sl, deck, i, n) {
  sl.addText(`HuquqTech · ${deck.gradeLabel}`, { x: 0.6, y: 7.0, w: 8, h: 0.3, fontFace: FONT, fontSize: 10, color: MUTED });
  sl.addText(`${i + 1} / ${n}`, { x: 11.2, y: 7.0, w: 1.5, h: 0.3, fontFace: FONT, fontSize: 10, color: MUTED, align: "right" });
}

const bulletRuns = (items, size) =>
  items.map((t) => ({ text: t, options: { bullet: { code: "25A0" }, fontSize: size, color: INK, paraSpaceAfter: 8, breakLine: true } }));

export async function exportPptx(deck, labels) {
  const { default: PptxGenJS } = await import("pptxgenjs");
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = deck.title;
  pptx.company = "HuquqTech";
  const ru = deck.lang === "ru";
  const n = deck.slides.length;

  deck.slides.forEach((s, i) => {
    const sl = pptx.addSlide();
    if (s.type === "title") {
      sl.background = { color: NAVY };
      sl.addShape("rect", { x: 0.6, y: 2.2, w: 1.4, h: 0.08, fill: { color: GOLD } });
      sl.addText(s.title, { x: 0.6, y: 2.45, w: 12, h: 1.6, fontFace: FONT, fontSize: 44, bold: true, color: "FFFFFF", fit: "shrink" });
      sl.addText(s.subtitle || "", { x: 0.6, y: 4.1, w: 12, h: 0.7, fontFace: FONT, fontSize: 20, color: "E0B060" });
      sl.addText(`${deck.gradeLabel} · HuquqTech`, { x: 0.6, y: 6.6, w: 12, h: 0.4, fontFace: FONT, fontSize: 14, color: "C9CED8" });
      return;
    }
    sl.background = { color: "FFFFFF" };
    header(sl, s.title);
    if (s.type === "agenda") {
      sl.addText(s.items.map((t, k) => ({ text: `${k + 1}.  ${t}`, options: { fontSize: 20, color: INK, paraSpaceAfter: 10, breakLine: true } })), { x: 0.8, y: 1.5, w: 11.8, h: 5.2, valign: "top", fontFace: FONT, fit: "shrink" });
    } else if (s.type === "content") {
      const runs = [];
      if (s.text) runs.push({ text: s.text, options: { fontSize: 17, color: MUTED, paraSpaceAfter: 12, breakLine: true } });
      runs.push(...bulletRuns(s.bullets, 18));
      sl.addText(runs, { x: 0.6, y: 1.4, w: 7.6, h: 5.4, valign: "top", fontFace: FONT, fit: "shrink" });
      const side = [];
      if (s.note) side.push({ text: `${labels.example}\n`, options: { bold: true, color: "B4690E", fontSize: 14 } }, { text: s.note, options: { fontSize: 13, color: INK, breakLine: true } });
      (s.refs || []).forEach((r) => side.push({ text: `\n⚖ ${refText(r, ru)}`, options: { fontSize: 12, color: NAVY, bold: true } }));
      if (side.length) {
        sl.addShape("roundRect", { x: 8.5, y: 1.4, w: 4.25, h: 5.4, fill: { color: "FDF5E6" }, line: { color: "EBD6AE" }, rectRadius: 0.12 });
        sl.addText(side, { x: 8.7, y: 1.55, w: 3.85, h: 5.1, valign: "top", fontFace: FONT, fit: "shrink" });
      }
    } else if (s.type === "law") {
      const runs = s.quotes.flatMap((q) => [
        { text: refText(q, ru), options: { bold: true, fontSize: 15, color: NAVY, breakLine: true } },
        { text: `«${q.quote}»`, options: { italic: true, fontSize: 15, color: INK, paraSpaceAfter: 16, breakLine: true } },
      ]);
      sl.addText(runs, { x: 0.8, y: 1.4, w: 11.8, h: 5.4, valign: "top", fontFace: FONT, fit: "shrink" });
    } else {
      sl.addText(bulletRuns(s.bullets || s.items, 22), { x: 0.8, y: 1.5, w: 11.8, h: 5.2, valign: "top", fontFace: FONT, fit: "shrink" });
    }
    footer(sl, deck, i, n);
  });

  const safe = deck.title.replace(/[\\/:*?"<>|]+/g, "").slice(0, 60) || "Huquq-AI";
  await pptx.writeFile({ fileName: `${safe}.pptx` });
}

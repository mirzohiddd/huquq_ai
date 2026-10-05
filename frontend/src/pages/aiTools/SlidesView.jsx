import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Download, Printer, Loader2, X } from "lucide-react";
import SlideCard from "./SlideCard";
import PrintPortal from "./PrintPortal";
import { useToolsText } from "./i18n";
import s from "./Slides.module.css";
import a from "./AiTools.module.css";

/**
 * Slaydlar ko'rinishi: katta preview + eskizlar tasmasi + taqdimot rejimi
 * (to'liq ekran, klaviatura ←/→/Space/Esc, sensorli surish) — sinfdagi TV
 * yoki proyektor uchun. Eksport: PowerPoint (.pptx) va PDF (chop etish).
 */
export default function SlidesView({ deck }) {
  const c = useToolsText();
  const [i, setI] = useState(0);
  const [present, setPresent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const stageRef = useRef(null);
  const touchX = useRef(null);
  const n = deck.slides.length;
  const labels = deck.labels || { example: c.example };

  useEffect(() => setI(0), [deck]);
  const go = useCallback((d) => setI((v) => Math.min(n - 1, Math.max(0, v + d))), [n]);

  useEffect(() => {
    if (!present) return undefined;
    const onKey = (e) => {
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) go(1);
      else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) go(-1);
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(n - 1);
      else if (e.key === "Escape") setPresent(false);
      else return;
      e.preventDefault();
    };
    const onFs = () => !document.fullscreenElement && setPresent(false);
    window.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFs);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFs);
      document.body.style.overflow = "";
    };
  }, [present, go, n]);

  const startPresent = async () => {
    setPresent(true);
    try {
      await stageRef.current?.requestFullscreen?.();
    } catch {
      /* To'liq ekran ruxsat etilmasa — sahifa ichidagi qoplama rejimi ishlaydi */
    }
  };
  const stopPresent = () => {
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    setPresent(false);
  };

  const toPptx = async () => {
    setBusy(true);
    setErr("");
    try {
      const { exportPptx } = await import("./exportPptx");
      await exportPptx(deck, labels);
    } catch (e) {
      console.error(e);
      setErr(c.exportFail);
    } finally {
      setBusy(false);
    }
  };

  const touch = {
    onTouchStart: (e) => (touchX.current = e.touches[0].clientX),
    onTouchEnd: (e) => {
      const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    },
  };

  return (
    <div className={s.view}>
      <div className={`${a.toolbar} ${a.noPrint}`}>
        <div className={a.metaLine}>
          <b>{deck.title}</b> · {deck.gradeLabel} · {c.basedOn}: «{deck.lesson}»
          {deck.ms != null && <span className={a.ms}> · {c.ms(deck.ms)}</span>}
        </div>
        <div className={a.btnRow}>
          <button type="button" className={a.btnGhost} onClick={startPresent}>
            <Maximize2 size={16} /> {c.present}
          </button>
          <button type="button" className={a.btnGhost} onClick={toPptx} disabled={busy}>
            {busy ? <Loader2 size={16} className={a.spin} /> : <Download size={16} />} {busy ? c.exporting : c.pptx}
          </button>
          <button type="button" className={a.btnGhost} onClick={() => window.print()}>
            <Printer size={16} /> {c.pdf}
          </button>
        </div>
      </div>
      {err && <p className={a.error}>{err}</p>}

      <div ref={stageRef} className={`${s.stage} ${present ? s.presenting : ""} ${a.noPrint}`} {...touch}>
        <div className={s.stageInner} onClick={present ? () => go(1) : undefined}>
          <SlideCard slide={deck.slides[i]} deck={deck} index={i} total={n} labels={labels} />
        </div>
        <div className={s.nav}>
          <button type="button" onClick={() => go(-1)} disabled={i === 0} aria-label={c.prev}>
            <ChevronLeft />
          </button>
          <span aria-live="polite">
            {c.slide} {i + 1} {c.of} {n}
          </span>
          <button type="button" onClick={() => go(1)} disabled={i === n - 1} aria-label={c.next}>
            <ChevronRight />
          </button>
          {present && (
            <button type="button" onClick={stopPresent} aria-label={c.exit} title={c.exit}>
              <X />
            </button>
          )}
        </div>
      </div>

      <div className={`${s.thumbs} ${a.noPrint}`} role="tablist">
        {deck.slides.map((sl, k) => (
          <button key={k} type="button" role="tab" aria-selected={k === i} className={`${s.thumb} ${k === i ? s.thumbOn : ""}`} onClick={() => setI(k)}>
            <SlideCard slide={sl} deck={deck} index={k} total={n} labels={labels} />
          </button>
        ))}
      </div>

      {/* Chop etish / PDF — har bir slayd alohida albom sahifada */}
      <PrintPortal>
        {deck.slides.map((sl, k) => (
          <div key={k} className={s.printPage}>
            <SlideCard slide={sl} deck={deck} index={k} total={n} labels={labels} />
          </div>
        ))}
      </PrintPortal>
    </div>
  );
}

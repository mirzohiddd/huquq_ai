import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Download, Printer, Loader2, X } from "lucide-react";
import SlideCard from "./SlideCard";
import PrintPortal from "./PrintPortal";
import { useToolsText } from "./i18n";
import s from "./Slides.module.css";
import a from "./AiTools.module.css";
import m from "./SlideMotion.module.css";

let deckSeq = 0; // har yangi taqdimot — kirish animatsiyasi qaytadan

/**
 * Slaydlar ko'rinishi: katta preview + eskizlar tasmasi + taqdimot rejimi
 * (to'liq ekran, klaviatura ←/→/Space/Esc, sensorli surish) — sinfdagi TV
 * yoki proyektor uchun. Eksport: PowerPoint (.pptx) va PDF (chop etish).
 */
export default function SlidesView({ deck }) {
  const c = useToolsText();
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1); // 1 — oldinga, -1 — orqaga (animatsiya yo'nalishi)
  const [present, setPresent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const stageRef = useRef(null);
  const touchX = useRef(null);
  const n = deck.slides.length;
  const labels = deck.labels || { example: c.example };

  const deckKey = useMemo(() => ++deckSeq, [deck]);
  useEffect(() => setI(0), [deck]);
  const go = useCallback(
    (d) => {
      setDir(d > 0 ? 1 : -1);
      setI((v) => Math.min(n - 1, Math.max(0, v + d)));
    },
    [n],
  );
  const iRef = useRef(0);
  iRef.current = i;
  const show = useCallback((k) => {
    setDir(k >= iRef.current ? 1 : -1);
    setI(k);
  }, []);

  useEffect(() => {
    if (!present) return undefined;
    const onKey = (e) => {
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) go(1);
      else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) go(-1);
      else if (e.key === "Home") show(0);
      else if (e.key === "End") show(n - 1);
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
  }, [present, go, show, n]);

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
    <div key={deckKey} className={`${s.view} ${m.view}`}>
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

      <div ref={stageRef} className={`${s.stage} ${m.stageIn} ${present ? s.presenting : ""} ${a.noPrint}`} {...touch}>
        <div className={s.stageInner} onClick={present ? () => go(1) : undefined}>
          {/* key={i}: har slaydda element qaytadan quriladi — animatsiya qayta boshlanadi */}
          <div key={i} className={m.enter} style={{ "--dir": dir }}>
            <SlideCard slide={deck.slides[i]} deck={deck} index={i} total={n} labels={labels} animate />
          </div>
        </div>
        <div className={`${m.progress} ${present ? m.presentingProgress : ""}`} aria-hidden="true">
          <span style={{ transform: `scaleX(${(i + 1) / n})` }} />
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
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={k === i}
            className={`${s.thumb} ${m.thumbIn} ${k === i ? s.thumbOn : ""}`}
            style={{ "--t": k }}
            onClick={() => show(k)}
          >
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

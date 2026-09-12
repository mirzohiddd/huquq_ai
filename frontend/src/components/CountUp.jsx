import React, { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";

/**
 * <CountUp value="500+" /> — ko'rinish sohasiga kirganda 0 dan raqamgacha
 * "sanab chiqadi". Raqam bo'lmagan qism (masalan "+") o'zgarishsiz saqlanadi.
 */
function zeroState(value) {
  const m = String(value).match(/^(\d+)(.*)$/);
  return m ? `0${m[2] || ""}` : value;
}

export default function CountUp({ value, duration = 1400 }) {
  const [ref, inView] = useReveal();
  const [display, setDisplay] = useState(() => zeroState(value));
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const match = String(value).match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const start = performance.now();

    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      // easeOutExpo — boshida tez, oxirida sekinlashadi
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(target * eased);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}

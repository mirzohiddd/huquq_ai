import { useEffect, useRef, useState } from "react";

/**
 * useReveal — elementni scroll orqali ko'rinish sohasiga kirganda
 * bir marta "true" qaytaradigan yengil IntersectionObserver hook.
 *
 * Ishlatilishi:
 *   const [ref, inView] = useReveal();
 *   <div ref={ref} className={inView ? "in-view" : ""} />
 */
export default function useReveal(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // IntersectionObserver mavjud bo'lmasa (juda eski brauzer) — darhol ko'rsatamiz
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -64px 0px", ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

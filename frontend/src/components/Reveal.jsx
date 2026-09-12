import React from "react";
import useReveal from "../hooks/useReveal";

/**
 * <Reveal as="section" delay={0.1} className="...">...</Reveal>
 * Bolalarini scroll orqali ko'rinish sohasiga kirganda animatsiya bilan chiqaradi.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}) {
  const [ref, inView] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? " in-view" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: "0s" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

import React from "react";

/**
 * Ijtimoiy tarmoq brend ikonalari (SMO).
 *
 * ⚠️ `lucide-react` da brend ikonalari YO'Q (loyihadagi versiyada
 * `Facebook`, `Twitter` va shunga o'xshashlar olib tashlangan — tekshirildi).
 * Shu sabab ular shu yerda inline SVG sifatida yozilgan: yangi paket
 * qo'shilmaydi va bundle o'smaydi.
 */

const base = (size) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
});

export function TelegramIcon({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M21.9 4.3 18.6 20c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.35-.1-.55-.6-.2L6.2 13.1l-4.8-1.5c-1-.3-1-1 .2-1.5l18.9-7.3c.9-.3 1.6.2 1.4 1.5z" />
    </svg>
  );
}

export function WhatsappIcon({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20zm4.5-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.9-.6 3.1a11 11 0 0 0 4.6 5c1.6.7 2.3.8 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3z" />
    </svg>
  );
}

export function FacebookIcon({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

export function XIcon({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M18.2 2H21l-6.4 7.3L22 22h-5.9l-4.6-6-5.3 6H3.4l6.9-7.8L2.4 2h6l4.2 5.5L18.2 2zm-1 18h1.6L7.9 3.7H6.1L17.2 20z" />
    </svg>
  );
}

/**
 * SSR (BUILD VAQTIDA PRERENDER) — SERVER KIRISH NUQTASI.
 *
 * Bosh sahifa build paytida HTML ga aylantiriladi (scripts/prerender.mjs),
 * brauzerda esa React uni ALMASHTIRMAYDI, balki `hydrateRoot` bilan o'sha
 * DOM'ga ulanadi (main.jsx). Nima uchun: React statik HTML'ni almashtirganda
 * brauzer yangi elementni yangi LCP nomzodi deb hisoblardi va mobil LCP
 * JS yuklanishiga bog'lanib qolardi (PageSpeed, 2026-09-28).
 *
 * `onAllReady` — lazy bo'laklar ham to'liq yuklanib bo'lguncha kutiladi,
 * ya'ni natija mehmon ko'radigan to'liq sahifa (Suspense fallback emas).
 */
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Writable } from "node:stream";
import App from "./App";

export function render(url) {
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        resolve(html);
        cb();
      },
    });
    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </React.StrictMode>,
      {
        onAllReady() {
          pipe(sink);
        },
        onShellError: reject,
        onError(err) {
          reject(err);
        },
      },
    );
  });
}

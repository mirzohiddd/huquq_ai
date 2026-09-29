import React, { useEffect, useMemo, useState } from "react";
import api from "../../utils/api";
import { useLang } from "../../context/LangContext";
import s from "./Article.module.css";

/* Lug'at har til uchun bir marta olinadi (sahifalar orasida qayta
   so'ralmaydi). */
const cache = {};
function loadGlossary(lang) {
  if (!cache[lang]) {
    cache[lang] = api
      .get("/legislation/glossary")
      .then((r) => r.data.terms || [])
      .catch(() => {
        delete cache[lang];
        return [];
      });
  }
  return cache[lang];
}

const APOS = "['’ʻʼ‘`]";
const esc = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/'/g, APOS);

/**
 * Rasmiy matn — xatboshilar bilan; lug'atdagi atamalar (har biri faqat
 * BIRINCHI uchrashida) nuqtali tagchiziq bilan ajratiladi, bosilganda
 * izoh chiqadi. Matnning o'zi o'zgarmaydi.
 */
export default function GlossaryText({ text }) {
  const { lang } = useLang();
  const [terms, setTerms] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let alive = true;
    loadGlossary(lang).then((t) => alive && setTerms(t));
    return () => {
      alive = false;
    };
  }, [lang]);

  const matcher = useMemo(() => {
    const forms = terms.flatMap((t) => t.forms.map((f) => ({ f, t }))).sort((a, b) => b.f.length - a.f.length);
    if (!forms.length) return null;
    const re = new RegExp(`(?<![\\p{L}])(${forms.map((x) => esc(x.f)).join("|")})[\\p{L}'’ʻʼ‘-]*`, "giu");
    const find = (word) => {
      const w = word.toLowerCase().replace(/[’ʻʼ‘`]/g, "'");
      return forms.find((x) => w.startsWith(x.f))?.t;
    };
    return { re, find };
  }, [terms]);

  const paragraphs = String(text || "").split("\n").filter((p) => p.trim());
  const used = new Set();

  const render = (para, pi) => {
    if (!matcher) return para;
    const out = [];
    let last = 0;
    for (const m of para.matchAll(matcher.re)) {
      const term = matcher.find(m[0]);
      if (!term || used.has(term.id)) continue;
      used.add(term.id);
      out.push(para.slice(last, m.index));
      const key = `${pi}-${m.index}`;
      out.push(
        <span key={key} className={s.termWrap}>
          <button
            type="button"
            className={s.term}
            aria-expanded={openId === key}
            onClick={() => setOpenId(openId === key ? null : key)}
          >
            {m[0]}
          </button>
          {openId === key && (
            <span role="tooltip" className={s.termPop}>
              <b>{m[0]}</b> — {term.def}
            </span>
          )}
        </span>,
      );
      last = m.index + m[0].length;
    }
    out.push(para.slice(last));
    return out;
  };

  return (
    <div className={s.officialText}>
      {paragraphs.map((p, i) => (
        <p key={i}>{render(p, i)}</p>
      ))}
    </div>
  );
}

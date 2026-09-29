import React from "react";
import { Link } from "react-router-dom";
import { BookmarkCheck, Star, PlayCircle, X } from "lucide-react";
import { useL } from "./i18n";
import { useShelf } from "./shelf";
import s from "./Catalog.module.css";

/**
 * "Mening javonim" — davom ettirish, saqlangan hujjat/moddalar va
 * sevimlilar. Bo'sh bo'lsa umuman ko'rsatilmaydi.
 */
export default function ShelfStrip({ docs }) {
  const L = useL();
  const { shelf, toggleArt, toggleFav } = useShelf();
  const names = new Map((docs || []).map((d) => [d.code, d.name]));
  const last = Object.entries(shelf.last)
    .filter(([code]) => names.has(code))
    .sort((a, b) => b[1].at - a[1].at)
    .slice(0, 4);

  if (!last.length && !shelf.docs.length && !shelf.arts.length && !shelf.fav.length) return null;

  return (
    <section className={s.shelf}>
      <h2 className={s.blockTitle}>{L.myShelf}</h2>
      <div className={s.shelfGrid}>
        {last.map(([code, v]) => (
          <Link key={code} to={`/legislation/${code}/${v.num}`} className={s.shelfItem}>
            <PlayCircle size={16} className={s.shelfIcon} />
            <span>
              <b>{L.continue}</b>
              <small>
                {names.get(code)} · {L.art(v.num)}
              </small>
            </span>
          </Link>
        ))}
        {shelf.docs.map((d) => (
          <Link key={`d-${d.code}`} to={`/legislation/${d.code}`} className={s.shelfItem}>
            <BookmarkCheck size={16} className={s.shelfIcon} />
            <span>
              <b>{names.get(d.code) || d.name}</b>
              <small>{L.savedDocs}</small>
            </span>
          </Link>
        ))}
        {shelf.arts.slice(0, 8).map((a) => (
          <div key={`a-${a.code}-${a.num}`} className={s.shelfItem}>
            <BookmarkCheck size={16} className={s.shelfIcon} />
            <Link to={`/legislation/${a.code}/${a.num}`}>
              <b>
                {L.art(a.num)}. {a.title}
              </b>
              <small>{names.get(a.code) || a.code}</small>
            </Link>
            <button type="button" className={s.shelfX} onClick={() => toggleArt(a)} aria-label={L.clear}>
              <X size={14} />
            </button>
          </div>
        ))}
        {shelf.fav.slice(0, 8).map((f) => (
          <div key={`f-${f.key}`} className={s.shelfItem}>
            <Star size={16} className={s.shelfIcon} />
            <Link to={f.to}>
              <b>{f.title}</b>
              <small>{L.favorites}</small>
            </Link>
            <button type="button" className={s.shelfX} onClick={() => toggleFav(f)} aria-label={L.clear}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

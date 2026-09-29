import React from "react";
import { Link } from "react-router-dom";
import { Users, KeyRound, ClipboardList, Gavel, Link2, BookMarked, Quote } from "lucide-react";
import { useL } from "./i18n";
import s from "./Article.module.css";

/**
 * Rasmiy matndan AJRATILGAN bloklar: kimlarga tegishli, huquqlar,
 * majburiyatlar, javobgarlik (moddaning o'z jumlalari) va bog'liq
 * moddalar/qonunlar (matndagi havolalar).
 */
export default function ArticleExtracted({ code, data }) {
  const L = useL();
  const { roles, subjects, refs, laws } = data.extracted;
  const box = (Icon, title, list) => (
    <div className={s.xBox}>
      <h4>
        <Icon size={15} /> {title}
      </h4>
      {list.length ? (
        <ul>
          {list.map((t) => (
            <li key={t}>
              <Quote size={11} /> {t}
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.muted}>{L.noneFound}</p>
      )}
    </div>
  );

  return (
    <section className={s.extracted}>
      <header className={s.blockHead}>
        <h2>{L.extracted}</h2>
        <p>{L.extractedNote}</p>
      </header>

      <div className={s.xBox}>
        <h4>
          <Users size={15} /> {L.subjects}
        </h4>
        {subjects.length ? (
          <div className={s.chips}>
            {subjects.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        ) : (
          <p className={s.muted}>{L.noneFound}</p>
        )}
      </div>

      <div className={s.xGrid}>
        {box(KeyRound, L.rights, roles.rights)}
        {box(ClipboardList, L.duties, roles.duties)}
        {box(Gavel, L.liability, roles.liability)}
      </div>

      {(refs.length > 0 || laws.length > 0) && (
        <div className={s.xGrid2}>
          {refs.length > 0 && (
            <div className={s.xBox}>
              <h4>
                <Link2 size={15} /> {L.relArticles}
              </h4>
              <ul className={s.linkList}>
                {refs.map((r) => (
                  <li key={r.num}>
                    <Link to={`/legislation/${code}/${r.num}`}>
                      <b>
                        {L.art(r.num)}.
                      </b>{" "}
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {laws.length > 0 && (
            <div className={s.xBox}>
              <h4>
                <BookMarked size={15} /> {L.relLaws}
              </h4>
              <ul className={s.linkList}>
                {laws.map((l) => (
                  <li key={l.code}>
                    <Link to={`/legislation/${l.code}`}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

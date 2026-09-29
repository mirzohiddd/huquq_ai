import React from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { useL } from "./i18n";
import s from "./Doc.module.css";

/** Rasmiy manba bloki — har bir hujjat va modda sahifasining oxirida. */
export default function SourceBlock({ urlUz, urlRu, checkedAt }) {
  const L = useL();
  return (
    <section className={s.source}>
      <h3 className={s.cardTitle}>
        <ShieldCheck size={17} /> {L.sourceTitle}
      </h3>
      <p>{L.sourceText}</p>
      <div className={s.sourceLinks}>
        {urlUz && (
          <a href={urlUz} target="_blank" rel="noreferrer">
            {L.uzText} <ExternalLink size={13} />
          </a>
        )}
        {urlRu && (
          <a href={urlRu} target="_blank" rel="noreferrer">
            {L.ruText} <ExternalLink size={13} />
          </a>
        )}
      </div>
      {checkedAt && (
        <p className={s.muted}>
          {L.checked}: {new Date(checkedAt).toLocaleString("ru-RU")}
        </p>
      )}
    </section>
  );
}

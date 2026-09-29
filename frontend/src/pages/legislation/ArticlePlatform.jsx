import React from "react";
import { Sparkles, Lightbulb, AlertTriangle, CheckCircle2, MessageCircleQuestion, Bot, GraduationCap } from "lucide-react";
import { useChatPanel } from "../../context/ChatPanelContext";
import { useL } from "./i18n";
import s from "./Article.module.css";

/**
 * PLATFORMA IZOHI — rasmiy matndan vizual jihatdan ALOHIDA blok.
 * Manba: saytdagi darslar (bazadan tekshirilgan modda havolalari bilan)
 * va savol-javob markazi. Izoh yo'q bo'lsa — halol aytiladi va AI
 * yordamchi taklif qilinadi.
 */
export default function ArticlePlatform({ data }) {
  const L = useL();
  const { openChat } = useChatPanel();
  const { platform, law, articleNumber, official } = data;
  const e = platform.explanation;

  return (
    <section className={s.platform}>
      <header className={s.blockHead}>
        <h2>
          <Sparkles size={18} /> {L.platform}
        </h2>
        <p>{L.platformNote}</p>
      </header>

      {e ? (
        <>
          <div className={s.pBlock}>
            <h3>{L.plain}</h3>
            <p className={s.fromLesson}>
              <GraduationCap size={13} /> {L.fromLesson}: {e.lesson} · {e.heading}
            </p>
            {e.text.split("\n").filter(Boolean).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {e.example && (
            <div className={`${s.pBlock} ${s.example}`}>
              <h3>
                <Lightbulb size={16} /> {L.example}
              </h3>
              <p>{e.example}</p>
            </div>
          )}
          {e.keyPoints.length > 0 && (
            <div className={s.pBlock}>
              <h3>{L.keyPoints}</h3>
              <ul className={s.points}>
                {e.keyPoints.map((k) => (
                  <li key={k}>
                    <CheckCircle2 size={15} /> {k}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {e.warning && (
            <div className={`${s.pBlock} ${s.warning}`}>
              <h3>
                <AlertTriangle size={16} /> {L.warning}
              </h3>
              <p>{e.warning}</p>
            </div>
          )}
          {platform.more.length > 0 && (
            <p className={s.muted}>
              {L.moreTopics}: {platform.more.map((m) => m.heading).join(" · ")}
            </p>
          )}
        </>
      ) : (
        <p className={s.note}>{L.noExplain}</p>
      )}

      {platform.qa.length > 0 && (
        <div className={s.pBlock}>
          <h3>
            <MessageCircleQuestion size={16} /> {L.qa}
          </h3>
          <ul className={s.qa}>
            {platform.qa.map((q) => (
              <li key={q.slug}>
                <a href={`/savol/${q.slug}`} target="_blank" rel="noreferrer">
                  {q.q}
                </a>
                <span>{q.short}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        className={s.aiBtn}
        onClick={() => openChat(L.aiPrompt(law.name, articleNumber, official.title))}
      >
        <Bot size={16} /> {L.askAi}
      </button>
    </section>
  );
}

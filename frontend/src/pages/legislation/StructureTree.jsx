import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Search, Sparkles, Check } from "lucide-react";
import { useL } from "./i18n";
import { useShelf } from "./shelf";
import s from "./Tree.module.css";

const norm = (v = "") => v.toLowerCase().replace(/[’ʻʼ‘`']/g, "");

/* Qidiruvga mos daraxt: tugun nomi mos bo'lsa — butun tugun, aks holda
   faqat mos moddalar (raqam yoki nom bo'yicha). */
function filterTree(nodes, q) {
  if (!q) return nodes;
  const num = q.replace(/[^\d-]/g, "");
  const isNum = /^\d+(-\d+)*$/.test(q.trim().replace(/-?modda$|^статья\s*/i, ""));
  return nodes
    .map((n) => {
      if (!isNum && norm(n.title).includes(q)) return n;
      const articles = n.articles.filter((a) => (isNum ? a.num === num : norm(a.title).includes(q)));
      const children = filterTree(n.children, q);
      return articles.length || children.length ? { ...n, articles, children } : null;
    })
    .filter(Boolean);
}

/** Hujjat → qism → bo'lim → bob → paragraf → modda daraxti. */
export default function StructureTree({ code, tree, explained }) {
  const L = useL();
  const { isRead } = useShelf();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState({});
  const [all, setAll] = useState(null); // null — standart, true/false — hammasi
  const expl = useMemo(() => new Set(explained || []), [explained]);
  const nq = norm(q.trim());
  const shown = useMemo(() => filterTree(tree, nq), [tree, nq]);
  const forceOpen = Boolean(nq);

  const isOpen = (n, depth) => {
    if (forceOpen) return true;
    if (open[n.id] !== undefined) return open[n.id];
    if (all !== null) return all;
    return depth === 0 && tree.length <= 3;
  };

  const renderNode = (n, depth) => {
    const opened = isOpen(n, depth);
    const hasTitle = Boolean(n.title);
    return (
      <li key={n.id} className={`${s.node} ${s[`k_${n.kind}`] || ""}`}>
        {hasTitle && (
          <button
            type="button"
            className={s.nodeHead}
            aria-expanded={opened}
            onClick={() => setOpen((o) => ({ ...o, [n.id]: !opened }))}
          >
            {opened ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span>{n.title}</span>
          </button>
        )}
        {(opened || !hasTitle) && (
          <div className={hasTitle ? s.nodeBody : ""}>
            {n.articles.length > 0 && (
              <ul className={s.arts}>
                {n.articles.map((a) => (
                  <li key={a.num}>
                    <Link to={`/legislation/${code}/${a.num}`} className={s.art}>
                      <span className={s.artNum}>
                        {L.art(a.num)}
                      </span>
                      <span className={s.artTitle}>{a.title}</span>
                      {expl.has(a.num) && (
                        <span className={s.tag} title={L.explainedMark}>
                          <Sparkles size={12} />
                        </span>
                      )}
                      {isRead(code, a.num) && (
                        <span className={`${s.tag} ${s.tagRead}`} title={L.readMark}>
                          <Check size={12} />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {n.children.length > 0 && <ul className={s.tree}>{n.children.map((c) => renderNode(c, depth + 1))}</ul>}
          </div>
        )}
      </li>
    );
  };

  return (
    <div>
      <div className={s.tools}>
        <label className={s.search}>
          <Search size={16} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={L.inDoc} />
        </label>
        <button type="button" className={s.toolBtn} onClick={() => (setOpen({}), setAll(true))}>
          {L.expandAll}
        </button>
        <button type="button" className={s.toolBtn} onClick={() => (setOpen({}), setAll(false))}>
          {L.collapseAll}
        </button>
      </div>
      <p className={s.legend}>
        <Sparkles size={12} /> {L.explainedMark} · <Check size={12} /> {L.readMark}
      </p>
      {shown.length ? <ul className={s.tree}>{shown.map((n) => renderNode(n, 0))}</ul> : <p className={s.empty}>{L.nothing}</p>}
    </div>
  );
}

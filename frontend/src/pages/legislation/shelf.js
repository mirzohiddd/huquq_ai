/**
 * "MENING JAVONIM" — saqlangan hujjat/moddalar, sevimlilar, o'qilgan va
 * o'rganilgan moddalar, "davom ettirish" joyi.
 *
 * ⚠️ Kalit HISOBGA bog'langan (`accountScope`) — bitta kompyuterda boshqa
 * hisobga kirilganda javon aralashmaydi (darslar progressidagi xato
 * takrorlanmasligi uchun).
 */
import { useCallback, useEffect, useState } from "react";
import { scopedKey } from "../../utils/accountScope";

const BASE = "legisShelf";
const EVENT = "legis-shelf";
const EMPTY = { docs: [], arts: [], fav: [], read: {}, studied: {}, last: {} };

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(scopedKey(BASE)) || "null");
    return raw && typeof raw === "object" ? { ...EMPTY, ...raw } : { ...EMPTY };
  } catch {
    return { ...EMPTY };
  }
}

function store(next) {
  try {
    localStorage.setItem(scopedKey(BASE), JSON.stringify(next));
  } catch {
    /* xotira to'la / taqiqlangan — javon faqat shu sessiyada */
  }
  window.dispatchEvent(new Event(EVENT));
}

export const artKey = (code, num) => `${code}:${num}`;

export function useShelf() {
  const [shelf, setShelf] = useState(load);

  useEffect(() => {
    const sync = () => setShelf(load());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const update = useCallback((fn) => {
    const next = fn(load());
    store(next);
    setShelf(next);
  }, []);

  /* ⚠️ Barqaror funksiya — modda sahifasi uni useEffect bog'lanishida
     ishlatadi; har renderda yangi bo'lsa cheksiz tsikl bo'lardi. */
  const remember = useCallback(
    (code, num, title) =>
      update((s) => ({ ...s, last: { ...s.last, [code]: { num, title, at: Date.now() } } })),
    [update],
  );

  const toggleIn = (list, item, same) =>
    list.some(same) ? list.filter((x) => !same(x)) : [item, ...list].slice(0, 200);

  return {
    shelf,
    isDocSaved: (code) => shelf.docs.some((d) => d.code === code),
    isArtSaved: (code, num) => shelf.arts.some((a) => a.code === code && a.num === num),
    isFav: (key) => shelf.fav.some((f) => f.key === key),
    isRead: (code, num) => Boolean(shelf.read[artKey(code, num)]),
    isStudied: (code, num) => Boolean(shelf.studied[artKey(code, num)]),
    toggleDoc: (doc) =>
      update((s) => ({ ...s, docs: toggleIn(s.docs, doc, (d) => d.code === doc.code) })),
    toggleArt: (art) =>
      update((s) => ({
        ...s,
        arts: toggleIn(s.arts, art, (a) => a.code === art.code && a.num === art.num),
      })),
    toggleFav: (item) =>
      update((s) => ({ ...s, fav: toggleIn(s.fav, item, (f) => f.key === item.key) })),
    setFlag: (field, code, num, on) =>
      update((s) => {
        const map = { ...s[field] };
        if (on) map[artKey(code, num)] = Date.now();
        else delete map[artKey(code, num)];
        return { ...s, [field]: map };
      }),
    remember,
    clearList: (field) => update((s) => ({ ...s, [field]: Array.isArray(s[field]) ? [] : {} })),
  };
}

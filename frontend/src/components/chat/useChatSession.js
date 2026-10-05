import { useCallback, useEffect, useRef, useState } from "react";
import api from "../../utils/api";
import {
  loadHistory,
  upsertSession,
  getStoredSession,
  getActiveSessionId,
  setActiveSessionId,
  deleteStoredSession,
  clearGuestData,
} from "../../utils/chatStorage";

export function newUserSessionId(userId) {
  // Mehmon (userId yo'q) uchun tasodifiy qism qo'shiladi — turli mehmon
  // seanslari bir xil ID olib qolmasligi uchun.
  if (!userId) return `web_guest_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  return `web_${userId}_${Date.now()}`;
}

/**
 * Chat sessiyasi holati: xabarlar, faol sessiya, tarix, limit.
 * ChatDrawer.jsx dan ajratildi — mantiq o'zgarmagan (mahalliy + server
 * tarixini birlashtirish, sessiyani tiklash, avtomatik saqlash).
 */
export default function useChatSession({ user, active, noTitle }) {
  const uid = user?.id || null;
  const [view, setView] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [historyList, setHistoryList] = useState([]);
  const [usage, setUsage] = useState(null);
  const initializedRef = useRef(false);
  const saveTimerRef = useRef(null);

  const refreshHistory = useCallback(async () => {
    if (!user) return;
    const local = loadHistory(uid);
    if (localStorage.getItem("token")) {
      try {
        const { data } = await api.get("/chat/sessions");
        const apiSessions = (data.sessions || []).map((sess) => ({
          sessionId: sess.sessionId,
          title: sess.firstQuestion || noTitle,
          updatedAt: new Date(sess.updatedAt).getTime(),
          messageCount: sess.messageCount,
          source: "api",
        }));
        const apiIds = new Set(apiSessions.map((a) => a.sessionId));
        const merged = [...apiSessions, ...local.filter((h) => !apiIds.has(h.sessionId))].sort(
          (a, b) => (b.updatedAt || 0) - (a.updatedAt || 0),
        );
        setHistoryList(merged.slice(0, 30));
        return;
      } catch {
        /* fallback */
      }
    }
    setHistoryList(local);
  }, [user, uid, noTitle]);

  // Mehmon uchun ham ishlaydi — backend IP bo'yicha bepul limit holatini qaytaradi.
  const refreshUsage = useCallback(async () => {
    try {
      const { data } = await api.get("/chat/usage");
      setUsage(data);
    } catch {
      /* silent */
    }
  }, []);

  const restoreSession = useCallback(
    async (sid) => {
      if (!sid || !user) return;
      setLoading(true);
      setView("chat");
      setSessionId(sid);
      setActiveSessionId(sid, uid);
      const stored = getStoredSession(sid, uid);
      if (stored?.messages?.length) {
        setMessages(stored.messages);
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get(`/chat/${sid}`);
        setMessages(data.messages || []);
        upsertSession({ sessionId: sid, messages: data.messages || [], userId: uid });
      } catch {
        setMessages([]);
      } finally {
        setLoading(false);
      }
    },
    [user, uid],
  );

  useEffect(() => {
    if (!active) {
      initializedRef.current = false;
      return;
    }
    if (user) {
      clearGuestData();
      refreshHistory();
    }
    refreshUsage();
    if (initializedRef.current) return;
    initializedRef.current = true;
    const act = getActiveSessionId(uid);
    if (act) {
      const stored = getStoredSession(act, uid);
      if (stored?.messages?.length) {
        setSessionId(act);
        setMessages(stored.messages);
        setView("chat");
      } else restoreSession(act);
    } else {
      const id = newUserSessionId(uid);
      setSessionId(id);
      setActiveSessionId(id, uid);
    }
  }, [active, user, uid, refreshHistory, refreshUsage, restoreSession]);

  useEffect(() => {
    if (!sessionId || messages.length === 0) return undefined;
    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      // Mahalliy nusxaga vaqtinchalik blob-havolalar yozilmaydi
      const clean = messages.map(({ imagePreview, ...m }) => m);
      upsertSession({ sessionId, messages: clean, userId: uid });
      setActiveSessionId(sessionId, uid);
      refreshHistory();
    }, 400);
    return () => clearTimeout(saveTimerRef.current);
  }, [messages, sessionId, uid, refreshHistory]);

  const startNew = useCallback(() => {
    setMessages([]);
    setView("chat");
    const id = newUserSessionId(uid);
    setSessionId(id);
    setActiveSessionId(id, uid);
  }, [uid]);

  const deleteHistoryItem = useCallback(
    async (e, sid) => {
      e.stopPropagation();
      deleteStoredSession(sid, uid);
      try {
        await api.delete(`/chat/${sid}`);
      } catch {
        /* silent */
      }
      if (sessionId === sid) startNew();
      refreshHistory();
    },
    [uid, sessionId, startNew, refreshHistory],
  );

  return {
    uid, view, setView, messages, setMessages, loading, setLoading, sessionId, setSessionId,
    historyList, usage, setUsage, refreshHistory, restoreSession, startNew, deleteHistoryItem,
  };
}

import { useCallback, useState } from "react";
import api from "../../utils/api";
import { setActiveSessionId } from "../../utils/chatStorage";

/**
 * Chat amallari: savol yuborish, fayl (hujjat/rasm) tahlili, javobni qayta
 * yaratish va 👍/👎 baho. Barchasi haqiqiy backend endpointlariga ulangan:
 *   POST /chat · POST /ai-tools/analyze · POST /chat/regenerate · POST /chat/feedback
 */
export default function useChatActions({ session, isGuest, lang, t, c, setShowRegister }) {
  const { messages, setMessages, loading, setLoading, sessionId, setSessionId, usage, setUsage, uid } = session;
  const [input, setInput] = useState("");
  const [attachment, setAttachment] = useState(null);

  const applyUsage = useCallback(
    (u) => {
      if (!u) return;
      setUsage(u);
      // Mehmon oxirgi bepul savolini sarfladi — javobni o'qishga ulgursin
      if (u.guest && u.remaining === 0) setTimeout(() => setShowRegister(true), 1200);
    },
    [setUsage, setShowRegister],
  );

  const fail = useCallback(
    (err) => {
      const errData = err.response?.data;
      if (errData?.limitExceeded) {
        setUsage({ guest: !!errData.guest, used: errData.used, limit: errData.limit, remaining: 0 });
      }
      if (errData?.registerRequired) setShowRegister(true);
      else setMessages((p) => [...p, { role: "assistant", content: errData?.error || t.chat_error || "Xatolik yuz berdi", isError: true }]);
    },
    [setUsage, setShowRegister, setMessages, t.chat_error],
  );

  const ask = useCallback(
    async (text, sid) => {
      const { data } = await api.post("/chat", { message: text, sessionId: sid, lang });
      setMessages((p) => [...p, { role: "assistant", content: data.answer }]);
      setSessionId(data.sessionId);
      setActiveSessionId(data.sessionId, uid);
      applyUsage(data.usage);
      return data.sessionId;
    },
    [lang, setMessages, setSessionId, uid, applyUsage],
  );

  const analyze = useCallback(
    async (att, sid) => {
      const fd = new FormData();
      fd.append("file", att.file, att.name);
      fd.append("lang", lang);
      if (sid) fd.append("sessionId", sid);
      const { data } = await api.post("/ai-tools/analyze", fd, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 90000,
      });
      setMessages((p) => [...p, { role: "assistant", content: data.answer, noRegen: true }]);
      setSessionId(data.sessionId);
      setActiveSessionId(data.sessionId, uid);
      applyUsage(data.usage);
      return data.sessionId;
    },
    [lang, setMessages, setSessionId, uid, applyUsage],
  );

  const send = useCallback(
    async (msgText) => {
      const text = String(msgText ?? input).trim();
      const att = attachment;
      if ((!text && !att) || loading) return;
      if (isGuest && usage && usage.remaining === 0) {
        setShowRegister(true);
        return;
      }
      setInput("");
      setAttachment(null);
      setLoading(true);
      let sid = sessionId || null;
      try {
        if (att) {
          const label = att.kind === "image" ? c.img : c.doc;
          setMessages((p) => [...p, { role: "user", content: `📎 ${label}: ${att.name}`, imagePreview: att.preview || undefined, fileName: att.name }]);
          sid = await analyze(att, sid);
        }
        if (text) {
          setMessages((p) => [...p, { role: "user", content: text }]);
          await ask(text, sid);
        }
      } catch (err) {
        fail(err);
      } finally {
        setLoading(false);
      }
    },
    [input, attachment, loading, isGuest, usage, sessionId, setShowRegister, setLoading, setMessages, analyze, ask, fail, c],
  );

  const regenerate = useCallback(async () => {
    if (loading || !sessionId) return;
    setLoading(true);
    try {
      const { data } = await api.post("/chat/regenerate", { sessionId, lang });
      setMessages((p) => {
        const next = p.slice();
        const last = next.length - 1;
        if (next[last]?.role === "assistant") {
          next[last] = { ...next[last], content: data.answer, feedback: null, note: data.same ? c.regenSame : "" };
        }
        return next;
      });
    } catch (err) {
      fail(err);
    } finally {
      setLoading(false);
    }
  }, [loading, sessionId, lang, setLoading, setMessages, fail, c.regenSame]);

  const feedback = useCallback(
    (i, value) => {
      // Server tartib raqami — xato xabarlarisiz AI javoblari orasida
      const index = messages.slice(0, i).filter((m) => m.role === "assistant" && !m.isError).length;
      setMessages((p) => p.map((m, k) => (k === i ? { ...m, feedback: value, note: value ? c.thanks : "" } : m)));
      api.post("/chat/feedback", { sessionId, index, value }).catch(() => {});
    },
    [messages, sessionId, setMessages, c.thanks],
  );

  return { input, setInput, attachment, setAttachment, send, regenerate, feedback };
}

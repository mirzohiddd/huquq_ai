import React, { createContext, useContext, useState, useCallback } from "react";

const ChatPanelContext = createContext(null);

export function ChatPanelProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  // Chat ochilishi bilan avtomatik yuboriladigan savol (masalan darsdagi
  // "Bu joyni tushuntirib ber" tugmasi). Bo'sh bo'lsa — oddiy ochilish.
  const [pendingMessage, setPendingMessage] = useState(null);

  /**
   * @param {string} [message] — chat ochilgach avtomatik yuboriladigan savol.
   *   DIQQAT: `onClick={openChat}` ko'rinishida ham ishlatiladi, ya'ni
   *   argument sifatida hodisa (Event) kelishi mumkin — shuning uchun
   *   faqat haqiqiy satr qabul qilinadi.
   */
  const openChat = useCallback((message) => {
    if (typeof message === "string" && message.trim()) {
      setPendingMessage(message.trim());
    }
    setIsOpen(true);
  }, []);

  const clearPending = useCallback(() => setPendingMessage(null), []);
  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <ChatPanelContext.Provider
      value={{ isOpen, openChat, closeChat, toggleChat, pendingMessage, clearPending }}
    >
      {children}
    </ChatPanelContext.Provider>
  );
}

export function useChatPanel() {
  const ctx = useContext(ChatPanelContext);
  if (!ctx) throw new Error("useChatPanel must be inside ChatPanelProvider");
  return ctx;
}

// src/contexts/ChatContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue, push } from 'firebase/database';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { user } = useAuth();
  const [roomId, setRoomId] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!roomId) return;
    const msgRef = ref(db, `rooms/${roomId}/messages`);
    const unsub  = onValue(msgRef, snap => {
      const data = snap.val() || {};
      const arr  = Object.entries(data)
        .map(([id, msg]) => ({ id, ...msg }))
        .sort((a,b)=>a.timestamp - b.timestamp);
      setMessages(arr);
    });
    return unsub;
  }, [roomId]);

  const sendMessage = text => {
    if (!user || !roomId) return;
    const msgRef = ref(db, `rooms/${roomId}/messages`);
    push(msgRef, {
      text,
      uid:       user.uid,
      sender:    user.displayName || user.email,
      timestamp: Date.now()
    });
  };

  return (
    <ChatContext.Provider value={{ roomId, setRoomId, messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}


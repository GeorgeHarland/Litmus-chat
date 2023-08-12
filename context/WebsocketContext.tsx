'use client';

import React, { createContext, useEffect, useState } from 'react';
import ChatroomWebsocket from '@/services/websocket';

const WebSocketContext = createContext<{ ws: ChatroomWebsocket | undefined }>({
  ws: undefined,
});

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ws, setWs] = useState<ChatroomWebsocket | undefined>(undefined);
  useEffect(() => {
    setWs(new ChatroomWebsocket());
    // return () => ws?.websocket?.close();
  }, []);

  return (
    <WebSocketContext.Provider value={{ ws }}>
      {children}
    </WebSocketContext.Provider>
  );
};
7;

export default WebSocketContext;

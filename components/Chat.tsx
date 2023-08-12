'use client';

import ChatMessage from './ChatMessage';
import { Messages } from '@/constants';
import ChatTextBox from './ChatTextBox';
import { useEffect, useRef, useState } from 'react';
import { MessageType } from '@/types/types';
import { getChatHistory } from '@/services/singleRequests';

const Chat = () => {
  const [messages, setMessages] = useState<MessageType[]>(Messages);
  const ScrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollTop = ScrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const tempHistory = getChatHistory();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const messageMap = () => {
    return messages.map((message, idx) => (
      <div key={idx}>
        <h2 className="px-2">{message.owner}</h2>
        <ChatMessage message={message.message} />
      </div>
    ));
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full flex-col justify-end px-4 py-2">
        <div ref={ScrollRef} className=" overflow-y-auto">
          {messageMap()}
        </div>
        <ChatTextBox messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
};

export default Chat;

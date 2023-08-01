'use client';

import Chat from '@/components/Chat';
import FriendsList from '@/components/FriendsList';
import Sidebar from '@/components/Sidebar';
import { LoginContextProvider } from '@/context/LoginContext';
import { useState } from 'react';

const WebsiteTemplate = ({ children }: { children: React.ReactNode }) => {
  const [displayFriends, setDisplayFriends] = useState<boolean>(false);
  const [displayChat, setDisplayChat] = useState<boolean>(false);

  return (
    <>
      <LoginContextProvider>
        <Sidebar
          setDisplayFriends={setDisplayFriends}
          setDisplayChat={setDisplayChat}
        />
        {displayFriends ? <FriendsList /> : null}
        {displayChat ? <Chat /> : null}
        {children}
      </LoginContextProvider>
    </>
  );
};

export default WebsiteTemplate;

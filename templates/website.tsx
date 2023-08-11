'use client';

import Chat from '@/components/Chat';
import FriendsList from '@/components/FriendsList';
import PersonInfo from '@/components/PersonInfo';
import Sidebar from '@/components/Sidebar';
import { LoginContextProvider } from '@/context/LoginContext';
import { useState } from 'react';

const WebsiteTemplate = ({ children }: { children: React.ReactNode }) => {
  const [displayFriends, setDisplayFriends] = useState<boolean>(false);
  const [displayChat, setDisplayChat] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <>
      <LoginContextProvider>
        <Sidebar
          setDisplayFriends={setDisplayFriends}
          setDisplayChat={setDisplayChat}
          setShowInfo={setShowInfo}
        />
        {showInfo ? <PersonInfo /> : null}
        {displayFriends ? <FriendsList /> : null}
        {displayChat ? <Chat /> : null}

        {children}
      </LoginContextProvider>
    </>
  );
};

export default WebsiteTemplate;

"use client";

import FriendsList from "@/components/FriendsList";
import Sidebar from "@/components/Sidebar";
import { LoginContextProvider } from "@/context/LoginContext";
import { useState } from "react";

const WebsiteTemplate = ({ children }: { children: React.ReactNode }) => {
  const [displayFriends, setDisplayFriends] = useState(false);

  return (
    <>
      <LoginContextProvider>
        <Sidebar
          displayFriends={displayFriends}
          setDisplayFriends={setDisplayFriends}
        />
        {displayFriends ? <FriendsList /> : null}
        {children}
      </LoginContextProvider>
    </>
  );
};

export default WebsiteTemplate;

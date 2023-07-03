"use client";
import { useState } from "react";
import FriendsList from "@/components/FriendsList";
import Sidebar from "@/components/Sidebar";

const WebsiteTemplate = ({children}: {children: React.ReactNode}) => {
  const [displayFriends, setDisplayFriends] = useState(false)

  return (
    <>
      <Sidebar displayFriends={displayFriends} setDisplayFriends={setDisplayFriends}/>
      {displayFriends ? <FriendsList /> : null}
      {children}
    </>
  )
}

export default WebsiteTemplate;

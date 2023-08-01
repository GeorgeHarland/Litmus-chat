"use client";

import { Friends } from "@/data/data";
import Friend from "./Friend";
import { useEffect, useState } from "react";

const FriendsList = () => {
  const [friendCount, setFriendCount] = useState<number>(0);

  const sortFriends = () => {
    return Friends.map((friend) => {
      return (
        <Friend
          key={friend.id}
          FriendName={friend.name}
          Status={friend.status}
        />
      );
    });
  };

  useEffect(() => {
    setFriendCount(Friends.length);
  }, []);

  return (
    <div className="max-h-screen min-w-fit overflow-y-auto bg-gradient-bg">
      <h2 className="pt-4 text-center text-slate-200">
        Friends ({friendCount})
      </h2>
      <div className="ml-4 max-h-full  ">
        <div>{sortFriends()}</div>
      </div>
    </div>
  );
};

export default FriendsList;

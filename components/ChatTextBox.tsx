"use client";

import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { Messages } from "@/data/data";

const ChatTextBox = () => {
  const [message, setMessage] = useState<string>("");

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message !== "")
      Messages.push({
        owner: "Me",
        message: message,
        time: new Date(),
      });
    setMessage("");
  };

  return (
    <div className="flex items-center">
      <input
        className="w-full rounded-full border border-gray-600 bg-transparent px-2 py-2 text-gray-200 outline-none"
        type="input"
        placeholder="Write a message..."
        value={message}
        onChange={(e) => handleText(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
      <RiSendPlane2Fill
        className="ml-2 cursor-pointer"
        size={20}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default ChatTextBox;

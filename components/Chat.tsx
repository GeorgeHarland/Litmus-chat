import ChatMessage from "./ChatMessage";
import { Messages } from "@/data/data";
import ChatTextBox from "./ChatTextBox";

const Chat = () => {
  const messageMap = () => {
    return Messages.map((message, idx) => (
      <div key={idx}>
        <h2 className="px-2">{message.owner}</h2>
        <ChatMessage message={message.message} />
      </div>
    ));
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full flex-col justify-end px-4 py-2">
        <div className="overflow-y-auto">{messageMap()}</div>
        <ChatTextBox />
      </div>
    </div>
  );
};

export default Chat;

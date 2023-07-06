const ChatMessage = ({ message }: { message: string }) => {
  return (
    <div className="mb-4 w-max rounded-full bg-purple-700 px-4 py-2 text-gray-200">
      {message}
    </div>
  );
};

export default ChatMessage;

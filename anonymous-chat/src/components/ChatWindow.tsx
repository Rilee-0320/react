import { useState } from "react";

interface ChatWindowProps {
  user: string;
}

const ChatWindow = ({ user }: ChatWindowProps) => {
  const [message, setMessage] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessage([...message, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>{user}님과의 채팅</h2>
      <div>
        {message.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="채팅을 입력하세요."
        />
        <button onClick={handleSendMessage}>보내기</button>
      </div>
    </div>
  );
};

export default ChatWindow;

import { useState } from "react";

interface ChatWindowProps {
  user: string;
  onClose: (user: string) => void;
}

const ChatWindow = ({ user, onClose }: ChatWindowProps) => {
  const [message, setMessage] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessage([...message, input]);
      setInput("");
    }
  };

  const handleCloseClick = () => {
    onClose(user);
  };

  return (
    <div>
      <div>
        <h2>{user}님과의 채팅</h2>
        <button onClick={handleCloseClick}>Close</button>
      </div>
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

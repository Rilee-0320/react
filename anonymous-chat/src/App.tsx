import { useState } from "react";
import NicknameModal from "./components/NicknameModal";
import UserList from "./components/UserList";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [nickname, setNickname] = useState<string | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const handleSetNickname = (nickname: string) => {
    setNickname(nickname);
  };

  const handleUserClick = (user: string) => {
    if (!selectedUsers.includes(user)) {
      setSelectedUsers((prevUsers) => [...prevUsers, user]);
    }
  };

  const handleCloseChat = (user: string) => {
    setSelectedUsers((prevUsers) => prevUsers.filter((u) => u !== user));
  };

  if (!nickname) {
    return <NicknameModal onSetNickname={handleSetNickname} />;
  }

  return (
    <div>
      <h1>안녕하세요, {nickname}님!</h1>
      <div>
        <UserList onUserClick={handleUserClick} />
        <div>
          {selectedUsers.map((user) => (
            <ChatWindow key={user} user={user} onClose={handleCloseChat} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

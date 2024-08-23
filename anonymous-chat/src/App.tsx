import { useState } from "react";
import NicknameModal from "./components/NicknameModal";
import UserList from "./components/UserList";

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
            <div>{user}님과의 채팅</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

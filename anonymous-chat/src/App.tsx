import { useState } from "react";
import NicknameModal from "./components/NickNameModal";

function App() {
  const [nickname, setNickname] = useState<string | null>(null);

  const handleSetNickname = (nickname: string) => {
    setNickname(nickname);
  };

  if (!nickname) {
    return <NicknameModal onSetNickname={handleSetNickname} />;
  }

  return (
    <div>
      <h1>안녕하세요, {nickname}님!</h1>
    </div>
  );
}

export default App;

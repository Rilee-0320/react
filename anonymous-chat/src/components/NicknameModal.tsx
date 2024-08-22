import { useState } from "react";

interface NicknameModalProps {
  onSetNickname: (nickname: string) => void;
}

const NicknameModal = ({ onSetNickname }: NicknameModalProps) => {
  const [nickname, setNickname] = useState("");

  const handleSubmit = () => {
    if (nickname.trim()) {
      onSetNickname(nickname);
    }
  };

  return (
    <div>
      <div>
        <h2>사용할 닉네임을 입력하세요.</h2>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
        />
        <button onClick={handleSubmit}>접속</button>
      </div>
    </div>
  );
};

export default NicknameModal;

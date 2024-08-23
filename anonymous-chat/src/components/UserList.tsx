interface UserListProps {
  onUserClick: (user: string) => void;
}

const UserList = ({ onUserClick }: UserListProps) => {
  const users = ["User1", "User2", "User3"];

  return (
    <div>
      <h3>접속중인 유저 목록</h3>
      <ul>
        {users.map((user) => (
          <li key={user} onClick={() => onUserClick(user)}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

import React from "react";

function UserList({ users, selectedUser, onSelectUser }) {
  if (!users) return <div>Loading users...</div>;

  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.username}
          style={{
            fontWeight: user.id === selectedUser?.id ? "bold" : "normal",
            cursor: "pointer",
          }}
          onClick={() => onSelectUser(user)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
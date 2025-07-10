import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import { fetchUsers } from "./utils/api";

function App() {
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => setError("Failed to load users"));
  }, [users]); // <-- error: users in deps

  return (
    <div>
      <h1>User & Todo Dashboard</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <UserList
        users={users}
        selectedUser={selectedUser}
        onSelectUser={setSelectedUser}
      />
      <TodoList user={selectedUser} />
    </div>
  );
}

export default App;
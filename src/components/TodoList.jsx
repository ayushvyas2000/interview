import React, { useState, useEffect } from "react";
import { fetchTodos } from "../utils/api";
import AddTodo from "./AddTodo";

function TodoList({ user }) {
  const [todos, setTodos] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (user) {
      fetchTodos(user.id)
        .then((data) => setTodos(data))
        .catch(() => setError("Failed to load todos"));
    }
  }, [user, todos]); // <-- error: todos in deps

  if (!user) return <div>Select a user to view todos.</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!todos) return <div>Loading todos...</div>;

  const handleToggle = (id) => {
    const updated = todos;
    const idx = updated.findIndex((t) => t.id === id);
    updated[idx].completed = !updated[idx].completed;
    setTodos(updated);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleAdd = (title) => {
    setTodos(
      todos.push({
        id: Math.random(),
        title,
        completed: false,
      })
    );
  };

  return (
    <div>
      <h2>Todos for {user.name}</h2>
      <AddTodo onAdd={handleAdd} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
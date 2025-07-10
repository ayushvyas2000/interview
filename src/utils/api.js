export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function fetchTodos(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

import React, { useState } from "react";

function AddTodo({ onAdd }) {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) return;
    onAdd(value);
    setValue();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
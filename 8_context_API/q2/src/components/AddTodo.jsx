import { useContext, useState } from "react";

import { TodoContext } from "../context/todoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Enter todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;

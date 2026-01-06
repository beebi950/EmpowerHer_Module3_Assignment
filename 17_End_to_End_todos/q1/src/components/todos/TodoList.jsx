import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getTodos, addTodo } from "../../services/todo.service";

export default function TodoList() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const snapshot = await getTodos(user.uid);
    setTodos(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const createTodo = async () => {
    await addTodo(user.uid, { title, completed: false });
    setTitle("");
    loadTodos();
  };

  return (
    <div>
      <input
        className="border w-full p-1 mb-2"
        placeholder="New todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="w-full bg-black text-white py-1" onClick={createTodo}>
        Add
      </button>

      <ul className="mt-4 space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="border p-2">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

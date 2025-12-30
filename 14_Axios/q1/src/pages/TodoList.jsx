import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data.slice(0, 20)); // limit for UI
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title}
            </Link>
            {" - "}
            <strong>
              {todo.completed ? "Completed" : "Pending"}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

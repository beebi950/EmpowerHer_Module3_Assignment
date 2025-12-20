import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default Todos;

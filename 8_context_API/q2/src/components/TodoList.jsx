import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;

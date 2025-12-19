import React from "react";
import { TodoProvider } from "../context/todoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  return (
    <TodoProvider>
      <div className="todo-container">
        <h2>Todo Application (Context API)</h2>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default Todos;

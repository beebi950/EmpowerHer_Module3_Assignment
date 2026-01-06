import TodoList from "../todos/TodoList";

export default function Sidebar() {
  return (
    <div className="w-64 border-r p-4">
      <TodoList />
    </div>
  );
}

import { useState } from "react"

export default function TodoApp() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="card">
      <h2>Todo List</h2>

      <input
        placeholder="New todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={() => {
        if (todo) setTodos([...todos, { text: todo, done: false }])
        setTodo("")
      }}>
        Add
      </button>

      {todos.map((t, i) => (
        <div key={i} className="todo">
          <input
            type="checkbox"
            checked={t.done}
            onChange={() => {
              const copy = [...todos]
              copy[i].done = !copy[i].done
              setTodos(copy)
            }}
          />
          <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
            {t.text}
          </span>
        </div>
      ))}
    </div>
  )
}

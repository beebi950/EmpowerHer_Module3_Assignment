const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos";
const STORAGE_KEY = "question8_todos";
const todoContainer = document.getElementById("todoContainer");

/* Fetch todos from API */
async function fetchTodos() {
    const response = await fetch(TODOS_API_URL);
    const todos = await response.json();

    const formattedTodos = todos.slice(0, 20).map(todo => ({
        id: todo.id,
        completed: todo.completed,
        title: `Task ${todo.id}: Complete assigned work`
    }));

    saveTodos(formattedTodos);
    renderTodos();
}

/* Save todos to Local Storage */
function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

/* Get todos from Local Storage */
function getTodos() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/* Render todos on UI */
function renderTodos() {
    const todos = getTodos();
    todoContainer.innerHTML = "";

    if (todos.length === 0) {
        todoContainer.innerHTML = `<p class="no-data">No Todos Available</p>`;
        return;
    }

    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo-item";

        const titleSpan = document.createElement("span");
        titleSpan.className = "todo-title";
        titleSpan.textContent = todo.title;
        if (todo.completed) titleSpan.classList.add("completed");

        const toggleButton = document.createElement("button");
        toggleButton.textContent = todo.completed ? "Undo" : "Complete";
        toggleButton.onclick = () => toggleCompletion(todo.id);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTodo(todo.id);

        todoDiv.append(titleSpan, toggleButton, deleteButton);
        todoContainer.appendChild(todoDiv);
    });
}

/* Delete todo */
function deleteTodo(todoId) {
    const updatedTodos = getTodos().filter(todo => todo.id !== todoId);
    saveTodos(updatedTodos);
    renderTodos();
}

/* Toggle completion status */
function toggleCompletion(todoId) {
    const todos = getTodos();
    todos.forEach(todo => {
        if (todo.id === todoId) {
            todo.completed = !todo.completed;
        }
    });
    saveTodos(todos);
    renderTodos();
}

/* Initialize application */
function initializeApp() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        fetchTodos();
    } else {
        renderTodos();
    }
}

initializeApp();

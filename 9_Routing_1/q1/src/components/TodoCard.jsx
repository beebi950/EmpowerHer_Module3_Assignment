const TodoCard = ({ title, completed }) => {
  return (
    <div className="todo-card">
      <h4>{title}</h4>
      <p>Status: {completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default TodoCard;

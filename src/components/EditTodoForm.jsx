import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [todoForm, setTodoForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todoForm, task.id);
    setTodoForm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="update Task"
          value={todoForm}
          onChange={(e) => setTodoForm(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;

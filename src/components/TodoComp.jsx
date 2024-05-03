import React, { useState } from "react";

const TodoComp = ({ addTodos }) => {
  const [todoForm, setTodoForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(todoForm);
    setTodoForm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="todo-head">Get Things Done!</h4>
        <input
          className="todo-input"
          type="text"
          placeholder="Enter Your Task"
          value={todoForm}
          onChange={(e) => setTodoForm(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoComp;

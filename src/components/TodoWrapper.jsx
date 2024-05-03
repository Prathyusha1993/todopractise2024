import React, { useState } from "react";
import TodoComp from "./TodoComp";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="todo-wrapper">
      <TodoComp addTodos={addTodos} />
      {todos.map((item, index) =>
        item.isEditing ? (
          <EditTodoForm editTodo={editTask} task={item} />
        ) : (
          <Todo
            task={item}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;

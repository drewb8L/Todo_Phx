import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { getTodos } from "../jobs";
import "./todo.css";

// eslint-disable-next-line react/prop-types
function TodoList({ children, list, changeState }) {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    getTodos()
      .then((todos) => setTodos(todos))
      .then(() => changeState(["todo list state"]));
  }, [state]);

  return (
    <>
      <div>
        {/* eslint-disable-next-line react/prop-types */}
        {list.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} changeState={setState} />
        ))}
        {children}
      </div>
    </>
  );
}
export default TodoList;

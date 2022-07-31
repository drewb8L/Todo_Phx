import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { getTodos } from '../jobs';
import TodoForm from './TodoForm';
import {Context} from "../App";
import './todo.css'


function TodoList({todo, listId}) {
    let {setState, state} = React.useContext(Context)
  const [todos, setTodos] = useState([]);
  // const [state, setState] = useState([]);

  useEffect(() => {
    getTodos().then(() => setTodos(todo))
    console.log("todolist")
  }, [todo]);

  return (
    <>
      <TodoForm changeState={setState} listId={listId} />
      <ul style={{ listStyleType: 'none' }}>
        {todos.map((item) => (
          <li key={item.id}>
            <Todo
                className="todo"
              todo={JSON.stringify(item)}
              complete={item.complete}
              title={item.title}
              id={item.id}
              changeState={setState}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
export default TodoList;

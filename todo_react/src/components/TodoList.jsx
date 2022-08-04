import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { getTodos } from '../jobs';
import TodoForm from './TodoForm';
import {Context} from "../App";
import './todo.css'


// eslint-disable-next-line react/prop-types
function TodoList({todo, listId}) {
    let {setState} = React.useContext(Context)
  const [todos, setTodos] = useState([]);
  // const [state, setState] = useState([]);

  useEffect(() => {
    getTodos().then(() => setTodos(todo))
  }, [todo]);

  return (
    <>
      <TodoForm changeState={setState} listId={listId} data-testid="todo-list" />
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

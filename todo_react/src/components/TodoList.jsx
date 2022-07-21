import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { getTodos } from '../jobs';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, [state]);

  return (
    <>
      <TodoForm changeState={setState} />
      <ul style={{ listStyleType: 'none' }}>
        {todos.map((item) => (
          <li key={item.id}>
            <Todo
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

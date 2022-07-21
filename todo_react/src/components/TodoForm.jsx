import React, { useState } from 'react';
import { message } from 'antd';
import { createTodo } from '../jobs';

function TodoForm(props) {
  const [todo, setTodo] = useState({ title: '', completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title === '') {
      message.error('Field can not be blank');
    } else {
      // eslint-disable-next-line react/destructuring-assignment
      createTodo(todo).then(() => props.changeState(['deleted todo']));
      setTodo({ ...todo, title: '' });
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default TodoForm;

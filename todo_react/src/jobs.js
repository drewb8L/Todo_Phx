const URL = process.env.REACT_APP_TODO_API_URL;

export const getTodos = () => {
  // eslint-disable-next-line no-console
  console.log(URL);
  return fetch(URL).then((res) => res.json());
};

// export const getTodo = (id) => fetch(`${URL}/${id}`).then((res) => res.json());

export const createTodo = (todo) => fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: todo.title,
    completed: todo.completed,
  }),
}).then((res) => res.json());

export const updateTodo = (todo) => fetch(`${URL}/${todo.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: todo.id,
    title: todo.title,
    complete: todo.complete,
  }),
}).then((res) => res.json());

export const deleteTodo = (id) => fetch(`${URL}/${id}`, {
  method: 'DELETE',
}).then((res) => res.json());

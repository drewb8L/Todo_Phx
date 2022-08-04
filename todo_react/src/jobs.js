const URL = "http://localhost:4000/api/todos";
const LISTURL = "http://localhost:4000/api/lists"


export const getTodos = () => {
  // eslint-disable-next-line no-console
  return fetch(URL).then((res) => res.json());
};


export const getLists = () => {
  return fetch(LISTURL).then((res) => res.json());
}

export const createList = (list) => fetch(LISTURL,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: list.name,
  }),
}).then((res) => res.json());

export const deleteList = (id) => fetch(`${LISTURL}/${id}`, {
  method: 'DELETE',
}).then((res) => res.json());

export const createTodo = (todo) => fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: todo.title,
    completed: todo.completed,
    list_id: todo.list_id,
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

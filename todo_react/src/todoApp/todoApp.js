const URL = `${process.env.TODO_API_URL}/todo`
//const URL = 'http://localhost:4000/api/todos'


export const getTodos = () => {
    return fetch(URL).then((res) => res.json())
}

export const getTodo = (id) =>{
    return fetch(`${URL}/${id}`).then((res) => res.json())
}

export const createTodo = (todo) => {
    return fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed
        }),
    }).then((res) => res.json())
}

export const updateTodo = (todo) => {
    return fetch(`${URL}/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }),
    }).then((res) => res.json())
}

export const deleteTodo = (id) => {
    return fetch(`${URL}/${id}`,{
        method: "DELETE",

    }).then(res => res.json())
}
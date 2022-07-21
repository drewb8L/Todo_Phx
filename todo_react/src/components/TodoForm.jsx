import {useState} from "react";
import {createTodo} from "../todoApp/todoApp";

function TodoForm() {
    const [todo, setTodo] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('todo:', todo)
        createTodo(todo).then(r => console.log(r))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Todo</label>
                <input id="title"
                       type="text"
                       onChange={
                           (event) => setTodo(event.target.value)
                       }/>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;
import React, {useEffect, useState} from 'react';
import './App.css';

import {getLists, deleteList} from "./jobs";
import {Button, Card, message} from "antd";

import TodoList from "./components/TodoList";
import ListForm from "./components/ListForm";

export let Context = React.createContext();

function App() {
    const [lists, setLists] = useState([]);
    const [state, setState] = useState('')

    useEffect(() => {
        getLists().then((data) => setLists(data));
        console.log("get list")
    }, [state])


    useEffect(() => {

        console.log("App refresh")
    }, [state, lists])

    const handleDelete = (id) => {
        deleteList(id).then(() => setState(['deleted todo']));
        message.info('list deleted');
    }
    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        margin: '4em',
        padding: '1em',
    };
    return (
        <Context.Provider value={{setState, state}}>
            <div className="App">
                <ListForm />
                <ul style={{listStyleType: 'none'}}>
                    {lists.map((list) => (

                        <li key={list.id}>
                            <Card title={list.name} style={divStyles}>
                                <Button
                                    onClick={() => handleDelete(list.id)}
                                >delete</Button>
                                <TodoList todo={list.todos} listId={list.id} />
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </Context.Provider>
    );
}

export default App;

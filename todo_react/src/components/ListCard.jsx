import React, {useEffect, useState} from 'react';
import {Context} from "../App";
import TodoList from "./TodoList";

function ListCard({title, list}) {
    let {setState, state} = React.useContext(Context)
    useEffect(() =>{
        setState('list card')
        console.log("List card")
    },[state])

    return (
        <div>
            <h1>{title}</h1>

        </div>
    );
}

export default ListCard;


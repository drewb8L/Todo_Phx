import React, { useEffect, useState } from "react";
import "./App.css";
import {ListCard} from "./components/ListCard";
import { getLists } from "./jobs";

import TodoList from "./components/TodoList";
import ListForm from "./components/ListForm";
import TodoForm from "./components/TodoForm";

function App() {
  const [lists, setLists] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    getLists()
      .then((data) => setLists(data))
      .then(() => setState("new state"));
  }, [state]);

  return (
    <>
      <div className={"App"}>
        <ListForm changeState={setState}></ListForm>
        {lists.map((list) => (
          <ListCard key={list.id} list={list} changeState={setState}>
            <TodoForm list={list} changeState={setState}></TodoForm>
            <TodoList list={list} changeState={setState}></TodoList>
          </ListCard>
        ))}
      </div>
    </>
  );
}

export default App;

import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";

import App from "./App";

import {ListCard} from "./components/ListCard"
import ListForm from "./components/ListForm";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";



window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

describe("App", () => {
  test("render App component", () => {
    render(<App />);
    expect(screen.getByText("New List")).toBeInTheDocument();
  });

  it('should prompt user to create a new list', () => {
    render(<App/>);
    const text = screen.getByText("New List");

    const inputBox = screen.getByDisplayValue("")
    expect(text).toBeInTheDocument();
    expect(inputBox).toBeInTheDocument();
  })
});


describe("ListForm", () => {
  const mockChangeState = jest.fn( () => {return 'state changed'});
  it('displays itself', () => {
    render(<ListForm changeState={mockChangeState}/>)
  });

  it('has a text input box',() => {
    render(<ListForm changeState={mockChangeState}/>)
    const inputEl = screen.getByTestId("input");
    const inputLabel = screen.getByTitle("New List")
    const input = screen.getByTestId("input")

    const hasInputValue = (e, inputValue) =>  {
      return screen.getByDisplayValue(inputValue) === e
    }

      fireEvent.change(input, {target: {value: ""}})

      expect(hasInputValue(input, "")).toBe(true)
      expect(inputEl).toBeInTheDocument();
      expect(inputLabel).toBeInTheDocument();
  });
})

describe('ListCard', () => {
  it('should render', () => {
    const mockCallBack = jest.fn();
    const mockList = [{}];
    const mockChildren = (<div> children</div>)
    render(<ListCard changeState={mockCallBack} list={mockList}> {mockChildren} </ListCard>)
  })

  it('should have a delete button', () => {
    const mockCallBack = jest.fn();
    const mockList = [{}];
    const mockChildren = (<div> children</div>)
    render(<ListCard changeState={mockCallBack} list={mockList}> {mockChildren} </ListCard>)
    const text = screen.getByText("Delete")
    expect(text).toBeInTheDocument()
  })
})

describe('TodoForm', () => {
  it('should render', () => {
    const mockList = [{}];
    const mockCallback = jest.fn();
    render(<TodoForm changeState={mockCallback} list={mockList}/>)
  })
  it('should display Create a todo', () => {
    const mockList = [{}];
    const mockCallback = jest.fn();
    render(<TodoForm changeState={mockCallback} list={mockList}/>)
    const text = screen.getByText("Create a Todo")
    expect(text).toBeInTheDocument()
  })
})

describe('TodoList', () => {
  it('should render',() => {
    const mockList = [{}];
    const mockCallback = jest.fn();
    render(<TodoList list={mockList} changeState={mockCallback}/>)
  })
})

describe('Todo', () => {
  it('should render',() => {
    const mockTodos = [{complete: false, list_id: 1, title: "list1"},{complete: false, list_id: 2, title: "list2"}]
    const mockCallback = jest.fn();
    render(<Todo todo={mockTodos} changeState={mockCallback} />)
  })
})

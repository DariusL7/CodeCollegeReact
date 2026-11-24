import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   count: 0,
// };

const todosInitialState = {
  todos: [
    { id: 1, text: "finishing writing hooks chapter" },
    { id: 2, text: "play with kids" },
    { id: 3, text: "read bible" },
  ],
};

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      const newToDo = { id: uuidv4(), text: action.payload };
      // add new todo onto array
      const addedToDos = [...state.todos, newToDo];
      // spread our state and assign todos
      return { ...state, todos: addedToDos };
    case "edit":
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id,
      );
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1),
      ];
      return { ...state, todos: updatedToDos };
    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      return { ...state, todos: filteredTodoState };
    default:
      return todosInitialState;
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return initialState;
//     default:
//       return initialState;
//   }
// }

export const TodosContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  return (
    <div>
      {/*Count: {state.count}
      <br />
      <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </Button>
      <Button variant="success" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </Button>
      const [state, dispatch] = useReducer(todosReducer,todosInitialState)
      return (*/}
      <TodosContext.Provider value={{ state, dispatch }}>
        <ToDoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;

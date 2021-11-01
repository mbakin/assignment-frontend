import React from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="header">
      <h1 className="appTitle">Welcome User!</h1>
      <h4 className="list-tasks">Your Tasks</h4>
      </div>
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
import React from "react";
import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;

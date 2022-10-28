import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Beat yo meat" },
    { id: 2, content: "Go to sleep" },
  ]);

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todos) => todos.id !== id));
  }

  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} deleter={deleteTodo} />
    </div>
  );
}

export default App;

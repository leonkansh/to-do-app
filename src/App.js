import React, { useState } from 'react';
import './App.css';
import ToDo from "./ToDo"

function App() {
  return (
    <div className="App">
      <ToDo/>
    </div>
  );
}

export default App;

function TodosComponent() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    // state as examples
    {
      todo: "bake a cake",
      isCompleted: true
    },
    {
      todo: "go for a walk",
      isCompleted: false
    },
    {
      todo: "contribute a web development tutorial on Enlight",
      isCompleted: false
    }
  ]);

  return (
    <div>
      {/* <h1>hellow from our Todo component!</h1> */}
      {todos.map((todo, index) => (
        <p>{todo.todo}</p>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
}

export default TodosComponent;
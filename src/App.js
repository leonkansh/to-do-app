import "./App.css";
import React, { useState } from "react";
// import { render } from "@testing-library/react";

function TodosComponent(){
  // store in the local storage
  myStorage = window.localStorage;
  // store the current todo is typing
  const [currentTodo, setCurrentTodo] = useState("");
  // store all the todos entered
  const [todos, setTodos] = useState([ 
    // add some sample todos to state as an example
    // we can make this an empty array later..
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
    },
  ]);

  function createNewTodo(currentTodo) {
    let todosArray = [...todos];
    // todosArray[index].isCompleted = !todosArray[index].isCompleted;
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    setTodos(todosArray);
  }

  function completeTodo(index){
    const todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }

  function deleteTodo(index){
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }
  // render() 
    return (
      <div className="App">
        <input
          className="todo-input"
          value={currentTodo}
          onChange={e => {
            setCurrentTodo(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === "Enter"){
              createNewTodo(currentTodo);
              setCurrentTodo("");
            }
          }}
          placeholder="What needs to get done?"
        />

        {todos.map((todo, index) => (
          <div key={todo} className="todo">
            <div className="checkbox" onClick={() => completeTodo(index)}>
              {todo.isCompleted && <span>&#x2714;</span>}
            </div>
            {/* delete */}
            <div className="delete" onClick={() => deleteTodo(index)}>
              &#128465;
            </div>
            <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          </div>
          // <p>{todo.todo}</p>
          ))}
        {todos.length > 0 && `${todos.length} items`}
      </div>
    );
  
}

export default TodosComponent;
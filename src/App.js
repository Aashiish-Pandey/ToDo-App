import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [userInput, setUserInput] = useState(" ");
  const[toDos,setToDos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>{userInput}Ashish Todo list</h1>
      </header>

      <Form inputText ={userInput} setUserInput={setUserInput} toDos ={toDos} setToDos={setToDos}/>
      <TodoList todos ={toDos} setToDos ={setToDos}/>
    </div>
  );
}

export default App;

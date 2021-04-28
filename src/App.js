import React ,{useState}  from "react"
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList';

function App() {

  let[userInput,setUserInput] = useState(" ")
  return (
    <div className="App">
      <header>
        <h1>{userInput}Ashish Todo list</h1>
      </header>

      <Form setUserInput ={setUserInput}/>
      <TodoList/>
      
    </div>
  );
}

export default App;

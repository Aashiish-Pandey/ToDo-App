import React from "react";

const Form = ({ setUserInput,toDos,setToDos,inputText}) => {
  const inputTextHandler = (e) => {
    setUserInput(e.target.value);
  };

  const submitToDoHandler = (e) => {

    e.preventDefault()
    setToDos([

      ...toDos,
      {text:inputText, completed:false,id:Math.random()*1000}
    ])
    setUserInput(" ")
  };

  return (
    <form>

      <input type="text" onChange={inputTextHandler} className="todo-input" />
      <button className="todo-button" type="submit" onClick ={submitToDoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

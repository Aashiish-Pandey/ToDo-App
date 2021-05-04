import React from "react";
import Todo from './Todo'

const TodoList = ({todos,setToDos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          todos.map(todo=>
          <Todo 
          key ={todo.id} 
          text ={todo.text} 
          setToDos ={setToDos}
          toDo ={todo}
          todos ={todos}
          />)
        }
      </ul>
    </div>
  );
};

export default TodoList;

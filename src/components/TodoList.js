import { useState, useEffect } from "react";

const API_BASE = "http://localhost:5000/api/todos/";

const TodoList = (props) => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    GetTodos();
    
  }, [todos]);

  const GetTodos = async () => {
    await fetch(API_BASE)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error : ", err));
  };
  
  return (
    <div>
      <div className="todos" data-testid="allTodoList">
        {todos.map((todo) => (
          <div className="todo" data-testid="newTodo" name="newTodo" key={todo._id}>
            <li id="todoItem">
            <div className="text">{todo.title}</div>
            <button className="delete-todo" >x</button>
            </li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
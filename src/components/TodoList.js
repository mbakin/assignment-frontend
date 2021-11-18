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

  const deleteTodo = async id => {
		const data = await fetch(API_BASE + id, { method: "DELETE" }).then(res => res.json());

		setTodos(todos => todos.filter(todo => todo._id !== data.result._id));
	}

  const completeTodo = async id => {
		const data = await fetch(API_BASE + id, {method: "PUT"}).then(res => res.json());

		setTodos(todos => todos.map(todo => {
			if (todo._id === data._id) {
				todo.complete = !data.complete;
			}
      return todo;
		}));
		
	}
  
  return (
    <div>
      <div className="todos" data-testid="allTodoList">
        {todos.map((todo) => (
          <div className="todo" data-testid="newTodo" name="newTodo" key={todo._id}>
            <li id="todoItem">
            <div className="updateBox" data-testid="testInput">
            <input name="Update" type="checkbox" id="updateCheckbox" className={"todo" + (todo.complete ? "is-complete": "") } onClick={() => completeTodo(todo._id)} key={todo._id}/>
            <div className="text">{todo.title}</div>
            <button className="delete-todo" name="x" onClick={() => deleteTodo(todo._id)}>x</button>
            </div>
            </li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
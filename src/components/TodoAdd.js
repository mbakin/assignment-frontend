import { useState } from "react";
const API_BASE = "http://localhost:5000/api/todos/";

const TodoAdd = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleTodo = (e) => {
    setNewTodo(e.target.value);
  };
  const handleAddTodo = async () => {
    const data = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTodo,
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);

    setNewTodo("");
  };
  return (
    <>
      <input
        type="text"
        id="todoInputId"
        data-testid="taskInput"
        className="addTodoInput"
        onChange={handleTodo}
        value={newTodo}
        placeholder="Write something.."
      />

      <button className="button" id="addTaskBtn" onClick={handleAddTodo}>
        Create Task
      </button>
    </>
  );
};

export default TodoAdd;
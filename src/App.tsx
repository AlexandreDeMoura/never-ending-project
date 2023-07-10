import React, { useState } from "react";
import RemoveIcon from "../src/assets/icon-remove.svg";
import EditIcon from "../src/assets/icon-edit.svg";
import { TodoForm } from "./components/TodoForm";

export type Todo = {
  title: string;
  id: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoToEditId, setTodoToEditId] = useState("");

  function handleTodoChange(todo: Todo) {
    if (todoToEditId) {
      editTodo(todo);
    } else {
      addTodo(todo);
    }
  }

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  function editTodo(todo: Todo) {
    const newTodos = [...todos];
    const newTodoIndex = todos.findIndex((todo) => todo.id === todoToEditId);
    newTodos[newTodoIndex] = todo;

    setTodos(newTodos);
    setTodoToEditId("");
  }

  function removeTodo(id: string) {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
      <div className="w-3/4 h-3/4 rounded-md bg-white p-4 space-y-8">
        <TodoForm
          todoToEdit={todos.find((todo) => todo.id === todoToEditId)}
          handleTodoChange={handleTodoChange}
        />
        <div className="flex space-x-8 flex-wrap">
          {todos.map((todo) => (
            <div
              key={todo.id}
              data-testid="todo"
              className="flex items-center p-2 bg-slate-50 space-x-4"
            >
              <div>{todo.title}</div>
              <img
                src={EditIcon}
                alt="edit todo"
                className="cursor-pointer w-4"
                onClick={() => setTodoToEditId(todo.id)}
              />
              <img
                src={RemoveIcon}
                alt="remove todo"
                onClick={() => removeTodo(todo.id)}
                className="cursor-pointer w-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

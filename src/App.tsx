import React, { useState } from "react";
import { TodoForm } from "./components/TodoForm";

export type Todo = {
  title: string;
  id: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(id: string) {
    console.log(id);
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
      <div className="w-3/4 h-3/4 rounded-md bg-white p-4 space-y-8">
        <TodoForm addTodo={addTodo} />
        <div className="flex space-x-8 flex-wrap">
          {todos.map((todo) => (
            <div
              key={todo.id}
              data-testid="todo"
              className="flex p-2 bg-slate-50 space-x-4"
            >
              <div>{todo.title}</div>
              <img
                alt="remove todo"
                onClick={() => removeTodo(todo.id)}
                className="cursor-pointer hover:bg-slate-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

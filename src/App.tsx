import React, { useState } from "react";
import { TodoForm } from "./components/TodoForm";

export type Todo = {
  title: "";
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
      <div className="w-3/4 h-3/4 rounded-md bg-white p-4 space-y-8">
        <TodoForm addTodo={addTodo} />
        <div className="flex space-x-8 flex-wrap">
          {todos.map((todo) => (
            <div data-testid="todo" className="p-2 bg-slate-50">
              {todo.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

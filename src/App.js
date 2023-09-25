import { TodoCounter } from "./js/TodoCounter";
import { TodoSearch } from "./js/TodoSearch";
import { TodoList } from "./js/TodoList";
import { TodoItem } from "./js/TodoItem";
import { CreateTodoBtn } from "./js/CreateTodoBtn";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Terminar curso React", completed: false },
  { text: "Chambiarle", completed: false },
  { text: "Dormir mas de 45 horas en un solo día", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log(searchValue);
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoBtn />
    </React.Fragment>
  );
}

export default App;

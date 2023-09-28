import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoBtn } from "../components/CreateTodoBtn";
import React from "react";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      {/* <> */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <p>Estamos cargando....</p>}
        {error && <p>Erroooor, correeeee</p>}
        {!loading && searchTodos.length === 0 && (
          <p>No se encontrarón resultados mi bro</p>
        )}

        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoBtn />
    </React.Fragment>
    // </>
  );
}

export { AppUI };

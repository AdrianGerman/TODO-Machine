import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoBtn } from "../components/CreateTodoBtn";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoContext } from "../context/TodoContext";

import React from "react";

function AppUI() {
  return (
    // <React.Fragment>
    <>
      <TodoCounter />
      {/* completed={completedTodos} total={totalTodos} */}
      <TodoSearch />
      {/* searchValue={searchValue} setSearchValue={setSearchValue} */}

      <TodoContext.Consumer>
        {({ loading, error, searchTodos, completeTodo, deleteTodo }) => (
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchTodos.length === 0 && <EmptyTodos />}

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
        )}
      </TodoContext.Consumer>

      <CreateTodoBtn />
      {/* </React.Fragment> */}
    </>
  );
}

export { AppUI };

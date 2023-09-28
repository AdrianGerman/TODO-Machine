import { TodoCounter } from "./js/TodoCounter";
import { TodoSearch } from "./js/TodoSearch";
import { TodoList } from "./js/TodoList";
import { TodoItem } from "./js/TodoItem";
import { CreateTodoBtn } from "./js/CreateTodoBtn";
import React from "react";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Terminar curso React", completed: false },
//   { text: "Chambiarle", completed: false },
//   { text: "Dormir mas de 45 horas en un solo día", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // console.log(searchValue);
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = (newTodos.findIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ));
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = (newTodos.findIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ));
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <React.Fragment>
      {/* <> */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
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

export default App;

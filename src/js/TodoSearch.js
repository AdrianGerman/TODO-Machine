import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);

  return (
    <input
      placeholder="Buscar tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        // console.log("Escribiste en el search");
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };

import "../styles/TodoSearch.css";

function TodoSearch() {
  return (
    <input
      placeholder="Buscar tarea"
      className="TodoSearch"
      onChange={(event) => {
        // console.log("Escribiste en el search");
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };

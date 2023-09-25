import "../styles/CreateTodoBtn.css";

function CreateTodoBtn() {
  return (
    <button
      className="CreateTodoBtn"
      onClick={(event) => {
        console.log("Le diste click");
        // console.log(event.target);
      }}
    >+</button>
  );
}

export { CreateTodoBtn };

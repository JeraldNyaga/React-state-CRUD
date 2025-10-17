import { useState } from "react";
import { myTodos, idGen } from "../todo";
import Form from "./Form";
import TodoItem from "./TodoItem";

function DisplayToDo({ toDoItems }) {
  const toDos = toDoItems.map((item) => {
    return <TodoItem key={item.id} item={item} />;
  });
  return (
    <>
      <Form />
      <h2 className="text-xl ml-1 font-semibold">My Todos</h2>
      {toDos}
    </>
  );
}


function addToDo() {
  const [todos, setTodos] = useState(myTodos);
  const [newToDoDescription, setNewToDoDescription] = useState("");

  function addToDo(e) {
    e.preventDefault();
    const newToDo = {
      id: idGen(),
      description: newToDoDescription,
      completed: false,
    };
  }
  return;
}


export default DisplayToDo;

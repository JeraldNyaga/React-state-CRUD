import { useState } from "react";
import { myTodos, idGen } from "../todo";
import Form from "./Form";
import TodoItem from "./TodoItem";

function DisplayToDo() {
  const [todos, setTodos] = useState(myTodos);
  const [newToDoDescription, setNewToDoDescription] = useState("");

  const toDos = todos.map((item) => {
    return <TodoItem key={item.id} item={item} />;
  });
  
  function addToDo(e) {
    e.preventDefault();
    const newToDo = {
      id: idGen(),
      description: newToDoDescription,
      completed: false,
    };
  }
}

return (
  <>
    <Form />
    <h2 className="text-xl ml-1 font-semibold">My Todos</h2>
    {toDos}
  </>
);

export default DisplayToDo;

import { useState } from "react";
import { myTodos, idGen } from "../todo";
import FormToDo from "./Form";
import TodoItem from "./TodoItem";

function DisplayToDo() {
  const [todos, setTodos] = useState(myTodos);
  const [newToDoDescription, setNewToDoDescription] = useState("");

  const toDos = todos.map((item) => {
    return <TodoItem key={item.id} item={item} handleDelete={deleteItem} handleUpdate={updateItem} checkedToDo={item.completed}/>;
  });

  function addToDo(e) {
    e.preventDefault();
    const newToDo = {
      id: idGen(),
      description: newToDoDescription,
      completed: false,
    };
    setTodos([...todos, newToDo]);
  }
  function deleteItem(id){
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  function updateItem(id, checkedStatus){
    const item = todos.map(todo => {
      if (todo.id === id){
        return {
          ...todo,
          completed: !checkedStatus
        }
      } else{
        return todo
      }
    })
    setTodos(item)
  }
  return (
    <>
      <FormToDo
        handleAddToDo={addToDo}
        description={newToDoDescription}
        handleDescription={(e) => setNewToDoDescription(e.target.value)}
      />
      <h2 className="text-xl ml-1 font-semibold">My Todos</h2>
      {toDos}
    </>
  );
}

export default DisplayToDo;

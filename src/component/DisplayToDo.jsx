import { useState } from "react";
import { myTodos, idGen } from "../todo";

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

function TodoItem({ item }) {
  return (
    <div className="mx-2 mb-2 grid grid-cols-3 gap-2">
      <div>
        <p className="font-semibold text-lg">
          {item.id}.{item.description}
        </p>
      </div>
      <div>
        <span className="mr-0.5">Completed?</span>
        <input
          className="cursor-pointer"
          type="checkbox"
          name=""
          id=""
          checked={item.completed}
        />
      </div>
      <div>
        <button className="border border-black px-3 rounded-sm bg-red-500 text-white cursor-pointer">
          Delete
        </button>
      </div>
    </div>
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


function Form(){
  return (
    <>
      <div className="flex">
        <form className="flex">
          <div className="flex gap-2">
            <label className="m-0.5 text-2xl" htmlFor="addToDo">
              Description:{" "}
            </label>
            <input
              className="border border-blue-500 rounded-sm p-1"
              type="text"
              name="toDoInput"
              id="toDoInput"
            />
          </div>
          <button className="border border-black rounded-sm p-1 m-1.5 bg-amber-400 text-green-600 cursor-pointer">
            Add todo
          </button>
        </form>
      </div>
    </>
  );
}

export default DisplayToDo;

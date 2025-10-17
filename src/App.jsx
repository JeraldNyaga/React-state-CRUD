import DisplayToDo from "./component/DisplayToDo";
import { myTodos } from "./todo";
import Header from "./component/header";

function App() {
  return (
    <>
      <Header />
      <DisplayToDo toDoItems={myTodos} />
    </>
  );
}

export default App;

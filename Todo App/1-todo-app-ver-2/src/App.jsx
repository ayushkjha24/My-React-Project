import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "06/02/2024"
    },
    {
      name: "Go to college",
      dueDate: "06/02/2024"
    },
    {
      name: "Don't go to college",
      dueDate: "04/02/2024"
    }
  ];
  return <center class='todo-container'>
    <AppName></AppName>
    <div className="todo-items">
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems} ></TodoItems>
    </div>
  </center>
}
export default App

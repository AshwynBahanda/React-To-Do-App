import "./App.css";
import Todolist from "./components/todolist";
import Header from "./components/header";

function App() {
  return (
    <div className='todo-app'>
      <Header />
      <Todolist />
    </div>
  );
}

export default App;

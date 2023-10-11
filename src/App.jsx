import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold m-3">TO DO </h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;

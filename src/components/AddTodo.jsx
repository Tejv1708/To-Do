import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-3 border-solid text-2xl"
      />
      <button
        className="bg-blue-400 w-40 mx-4 p-3  rounded "
        onClick={addTodoHandler}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;

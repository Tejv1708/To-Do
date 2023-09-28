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
      />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
};

export default AddTodo;

import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/TodoSlice";
import { useState } from "react";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    text: "",
  });

  const onEditToggle = (id, text) => {
    setEditing(true);
    setState({
      ...state,
      id,
      text,
    });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const { text, id } = state;

  const editInput = () => {
    dispatch(updateTodo({ text, id }));
    setEditing(false);
  };

  return (
    <>
      <div>
        {isEditing ? (
          <div className="flex h-100%">
            <h2>Update your today plan</h2>
            <input
              type="text"
              value={text}
              name="text"
              onChange={handleChange}
            />
            <button
              type="button"
              className="h-10 bg-slate-400 w-40"
              onClick={editInput}
            >
              Edit
            </button>
          </div>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <button
                  className=" w-40 mx-4 p-3 mt-3 bg-red-600"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  Delete
                </button>
                <button
                  className="w-40 mx-4 p-3 bg-slate-500"
                  onClick={() => onEditToggle(todo.id, todo.text)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Todos;

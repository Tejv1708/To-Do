import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/TodoSlice";
import { useState } from "react";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [isEditing, setEditing] = useState(false);
  const [show, setShow] = useState(true);
  const [state, setState] = useState({
    id: "",
    text: "",
    contentError: null,
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
  const { id, text } = state;
  const editInput = () => {
    dispatch(updateTodo(text, id));
    setEditing(false);
  };
  return (
    <>
      <div>
        {isEditing ? (
          <div className="form">
            <h2>Update your today plan </h2>
            <input
              type="text"
              value={text}
              name="text"
              onChange={handleChange}
            />
            <button type="button" className="button" onClick={editInput}>
              Edit
            </button>
          </div>
        ) : (
          <ul>
            Todos
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                <button onClick={() => onEditToggle(todo.id, todo.text)}>
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

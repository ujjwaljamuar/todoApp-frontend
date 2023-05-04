import { toggleTodo, updateTodo, deleteTodo } from "../../redux/actions/api";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "./Todo.css";

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing((prevState) => !prevState);

        dispatch(updateTodo(todo._id, text));
    };

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? "line-through" : "",
                color: todo.done ? "#bdc3c7" : "#34495e",
            }}
        >
            <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>

            <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
            >
                <input
                    className="edit-todo"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span
                className="icon"
                onClick={() => dispatch(deleteTodo(todo._id))}
            >
                <i className="fas fa-trash" />
            </span>

            <span
                className="icon"
                onClick={() => setEditing((prevState) => !prevState)}
            >
                <i className="fa fa-pen"></i>
            </span>
        </li>
    );
};

export default Todo;

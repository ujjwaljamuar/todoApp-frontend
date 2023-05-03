import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo, fetchTodos } from "../../redux/actions/api.js";
import Todo from "../Todo/Todo.jsx";
import "./Todos.css";
import Tabs from "../Tabs/Tabs";
import {
    ALL_TODOS,
    DONE_TODOS,
    ACTIVE_TODOS,
} from "../../redux/actions/type.js";

const Todos = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);
    const currentTab = useSelector((state) => state.currentTab);

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter((todo) => !todo.done);
        } else if (currentTab === DONE_TODOS) {
            return todos.filter((todo) => todo.done);
        }
    };

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        });
    };

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />

                {todos.some((todo) => todo.done) ? (
                    <button className="button clear" onClick={removeDoneTodos}>
                        Clear Done Todos
                    </button>
                ) : null}
            </div>
            <ul>
                {getTodos().map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ul>
        </article>
    );
};

export default Todos;

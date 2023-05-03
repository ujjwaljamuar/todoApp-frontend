import axios from "axios";

import { ADDNEW_TODO, EDIT_TODO, GETALL_TODOS, TOGGLE_TODO, DELETE_TODO, TOGGLE_TABS } from "./type.js";


export const addNewTodos = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/todos`, { data });

        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log("error while adding new todo", error.message);
    }
};

export const fetchTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/todos`);

        dispatch({ type: GETALL_TODOS, payload: res.data });
    } catch (error) {
        console.log("Error while fetchTodos API Call ", error.message);
    }
};

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while toggleTodo API Call ", error.message);
    }
};


export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/todos/${id}`, {data});

        dispatch({ type: EDIT_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while updateTodo API Call ", error.message);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTabs = (tab) => async(dispatch) => {
    dispatch({type: TOGGLE_TABS, selected: tab});
}
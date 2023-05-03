import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './TodoForm.css'
import { addNewTodos } from '../../redux/actions/api';

const TodoForm = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (ev) =>{
        ev.preventDefault();

        // dispatch using redux
        dispatch(addNewTodos(text));

        setText('');
    }

    const onInputChange = (ev) =>{
        //console.log(ev.target.value);
        setText(ev.target.value);

    }

    return(
        <form onSubmit={onFormSubmit}>
            <input
                type="text" 
                placeholder='Enter new Todo'
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;
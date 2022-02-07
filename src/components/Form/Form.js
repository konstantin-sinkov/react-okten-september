import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {addTodo} from "../../store";


const Form = () => {
    const dispatch = useDispatch();
    
    const [todo, setTodo] = useState("");
    
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    
    const onSubmitTodo = (e) => {
        e.preventDefault();
        if (!todo.length || todo.length > 40) {
            alert('Your task description should not be empty or greater 40 symbols!');
        } else {
            setTodo(todo);
            // console.log(todo);
            dispatch(addTodo({todo}));
            setTodo("");
        }
    }
    
    return (
        <form onSubmit={(e) => onSubmitTodo(e)}>
            <h2>Add your task</h2>
            <label>todo:
                <input type={"text"}
                       value={todo}
                       onChange={(e) => handleChange(e)}/>
            </label>
            <button>Add todo</button>
        </form>
    );
}

export default Form;
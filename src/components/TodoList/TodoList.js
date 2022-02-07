import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const {todoArr} = useSelector(state => state['todoReducer']);
    // console.log(todoArr);
    return (
        <div>
            <h2>Todo list</h2>
            <ul>
                {todoArr.map(el => <TodoItem key={el.id} todoItem={el} />)}
            </ul>
        </div>
    );
}

export default TodoList;
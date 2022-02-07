import React from 'react';
import {useDispatch} from "react-redux";

import {deleteTodo} from "../../store";

const TodoItem = ({todoItem: {id, todo}}) => {
    const dispatch = useDispatch();
    
    // console.log(todoItem);
    return (
        <li>
            {todo}
            <button onClick={() => dispatch(deleteTodo({id}))}>Delete Task</button>
        </li>
    );
}

//

export default TodoItem;
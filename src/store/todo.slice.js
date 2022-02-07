import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todoArr: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoArr.push({
                id: new Date().getTime(),
                ...action.payload});
            return state;
        },
        deleteTodo: (state, action) => {
            console.log(action.payload.id);
            state.todoArr = state.todoArr.filter(todo => todo.id !== action.payload.id)
        }
    }
});

const todoReducer = todoSlice.reducer;

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoReducer;
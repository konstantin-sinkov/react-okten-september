import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createCar} from "../../store";

const Form = (/*{getFormData}*/) => {
    const {register, handleSubmit, reset} = useForm();
    //useDispatch() hook - for passing data to state
    const dispatch = useDispatch();
    
    const submit = (data) => {
        // getFormData(data);
        
        //Pass data like obj. to addCar and then get it in reducer as payload
        // dispatch(addCar({data}));
    
        dispatch(createCar({data}));
        //clear the form
        reset();
    }
    
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
            <button>SAVE CAR</button>
        </form>
    );
}

export {Form};
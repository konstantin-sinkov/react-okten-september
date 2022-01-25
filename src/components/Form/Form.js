import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './Form.module.css';
import {carsService} from "../../services/cars.service";
import {carValidator} from "../../validators/car.validator";


const Form = ({update}) => {
    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"}); //pass resolver to useForm for validation data to submit
                                            // 2nd param mode - is used for displaying errorMessage out of focus
    
    //creating obj. with errors data
    const [formError, setFormError] = useState({});
    
    // const submit = (car) => {
        //1st then - we we send obj. to API usually we get respond with obj. + API
        //2nd catch - for error case
    //     carsService.createCar(car).then(value => console.log(value)).catch(error => {
    //         setFormError(error.response.data);
    //     })
    // }
    
    
    //submit f-n with async/await
    const submit = async (car) => {
        try {
            const newCar = await carsService.createCar(car);
            
            update(newCar); //newCar transfer to App.js and pass to CarList for updating
            
        } catch (error) {
            setFormError(error.response.data);
        }
    }
    
    
    //watch - f-n for watching changes in inputs
    watch(event => console.log(event))
    
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                {/*instead of onChange event in useForm {...register('model')}*/}
                <div className={css.car_input_item}>
                    <label>Model: <input type="text" {...register('model')} defaultValue={''} /></label>
                </div>
                {/*for displaying each errorMessage for each form's input*/}
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                
                <div className={css.car_input_item}>
                    <label>Price: <input type="text" {...register('price')} defaultValue={''} /></label>
                </div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                
                <div className={css.car_input_item}>
                    <label>Year: <input type="text" {...register('year')} defaultValue={''} /></label>
                </div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
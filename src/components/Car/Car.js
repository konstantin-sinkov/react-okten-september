import React from 'react';

import css from './Car.module.css';
import {carsService} from "../../services/cars.service";

const Car = ({car, update, setCarForUpdate}) => {
    const {id, model, price, year} = car;
    const deleteCar = async () => {
        await carsService.deleteCarById(id);
        //new trigger for updating carsList, when car is deleted
        update({});
    }
    
    //f-n for a lifting edited car to App.js and passing to Form for editing
    const onClickUpdateCar = () => {
        setCarForUpdate(car);
        // console.log(car);
    }
    
    return (
        <div>
            <div className={css.car_item}>
                <p>id - {id}</p>
                <p>model - {model}</p>
                <p>price - {price}</p>
                <p>year - {year}</p>
                <div>
                    <button onClick={deleteCar}>Delete car</button>
                    <button onClick={onClickUpdateCar}>Edit car</button>
                </div>
            </div>
        </div>
    );
}

export default Car;
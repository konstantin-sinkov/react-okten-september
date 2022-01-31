import React from 'react';
import {useSelector} from "react-redux";

import {Car} from "../Car/Car";


const Cars = (/*{cars, getCarId}*/) => {
    //get cars from store with useSelector hook (allow to advertise directly to the store)
    //and then get cars array from carReducer (carReducer = carSlice.reducer)
    const {cars} = useSelector(state => state['carReducer']);
    
    return (
        <div>
            {
                // cars.map(car => <Car key={car.id} car={car} getCarId={getCarId}/>)
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}

export {Cars};
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";


const Cars = (/*{cars, getCarId}*/) => {
    //get cars from store with useSelector hook (allow to advertise directly to the store)
    //and then get cars array from carReducer (carReducer = carSlice.reducer)
    const {cars, status, error} = useSelector(state => state['carReducer']);
    
    const dispatch = useDispatch();
    
    //making request to the api to get cars
    useEffect(() => {
        dispatch(getAllCars())
    }, []);
    
    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {
            // cars.map(car => <Car key={car.id} car={car} getCarId={getCarId}/>)
            cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}

export {Cars};
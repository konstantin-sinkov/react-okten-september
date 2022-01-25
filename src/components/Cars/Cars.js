import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/cars.service";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carsService.getCars().then(value => setCars([...value]))
    }, [trigger])
    
    return (
        <div>
            <h3><u>Cars list</u></h3>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
}

export default Cars;
import React, {useState} from "react";

import './App.css';
import {Cars, Form} from "./components";

function App() {
    const [cars, setCars] = useState([]);
    
    //f-n for getting data from the form
    const getFormData = (data) => {
        setCars([...cars, {id: new Date().getTime(), ...data}])
    }
    
    const getCarId = (id) => {
    // deleting car with id taken from Car.js
        setCars(cars.filter(car => car.id !== id))
    }
    
    return (
        <div className="App">
            <Form getFormData={getFormData}/>
            <Cars cars={cars} getCarId={getCarId}/>
        </div>
    );
}

export default App;

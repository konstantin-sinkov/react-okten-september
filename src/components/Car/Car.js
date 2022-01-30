import React from 'react';

const Car = ({car: {id, model, price, year}, getCarId}) => {
    return (
        <div>
            <div>
                <p>Car ID: {id} -- <b>{model}</b></p>
                <p>Manufactured -- {year}</p>
                <p>Price -- {price}$</p>
            </div>
            <button onClick={() => getCarId(id)}>Delete</button>
        </div>
    );
}

export {Car};
import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../store";

const Car = ({car: {id, model, price, year}}/*, getCarId}*/) => {
    const dispatch = useDispatch();
    
    return (
        <div>
            <div>
                <p>Car ID: {id} -- <b>{model}</b></p>
                <p>Manufactured -- {year}</p>
                <p>Price -- {price}$</p>
            </div>
            {/*<button onClick={() => getCarId(id)}>Delete</button>*/}
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
        </div>
    );
}

export {Car};
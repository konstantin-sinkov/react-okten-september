import React from 'react';

import css from './Car.module.css';

const Car = ({car: {id, model, price, year}}) => {
    return (
        <div>
            <div className={css.car_item}>
                <p>id - {id}</p>
                <p>model - {model}</p>
                <p>price - {price}</p>
                <p>year - {year}</p>
            </div>
        </div>
    );
}

export default Car;
import {configureStore} from '@reduxjs/toolkit';

import carReducer from './car.slice';

//for configuring different reducers
const store = configureStore({
    reducer: {
        carReducer
    }
})

export default store;
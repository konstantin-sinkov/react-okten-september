import {createSlice} from "@reduxjs/toolkit";

// reducers in redux-toolkit are called slices, they consists with initialState for
// components and reducers
const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state, action) => {
        //!!!obj. dispatching with redux-toolkit don't mutate, so we don't need to destructure them!!!
            state.cars.push({
                //New car object
                id: new Date().getTime(),
                ...action.payload.data //data was dispatched from Form.js
            })
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    }
});

//for export the whole carSlice
const carReducer = carSlice.reducer;

//reducers are in func. createSlice, for export we need to destructure them
export const {addCar, deleteCar} = carSlice.actions;

export default carReducer;


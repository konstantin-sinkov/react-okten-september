import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services";

//f-ns for requests to the server which work with slice

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars', //working slice name / f-n name
    
    //1st param MUST be param obj. from getAllCars, but getAllCars doesn't have any arguments, that's why there is (_ , )
    //2nd param - func for handling errors
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getCars();
            return cars
        } catch (e) {
            return rejectWithValue(e.message); //rejectWithValue put error data to the action.payload (watch [getAllCars.rejected])
        }
    }
)

//func. for creating car with dispatch and without extraReducers
export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data: newCar}, {dispatch}) => {
        try {
            debugger;
            console.log(newCar);
            const addedCar = await carService.createNewCar({newCar});
            console.log({addedCar});
            // new car is posted to server, so its no need to make another request for updated cars, just update local state
            dispatch(addCar(addedCar))
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/getAllCars',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

// reducers in redux-toolkit are called slices, they consists with initialState for
// components and reducers
const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
        //!!!obj. dispatching with redux-toolkit don't mutate, so we don't need to destructure them!!!
            //New car object
            // {id: new Date().getTime(),
            // ...action.payload.data //data was dispatched from Form.js}
            state.cars.push(action.payload.data)
            console.log(action.payload.data);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    //for working with request lifecycles
    extraReducers: {
        //after initialisation getAllCars() before getting response (for loaders etc.)
        [getAllCars.pending]: (state, action) =>  {
            state.status = 'pending';
            state.error = null
        },
        //after getting response data from server
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload //cars array (watch str. 9)
        },
        //working with errors
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

//for export the whole carSlice
const carReducer = carSlice.reducer;

//reducers are in func. createSlice, for export we need to destructure them
export const {addCar, deleteCar} = carSlice.actions;

export default carReducer;


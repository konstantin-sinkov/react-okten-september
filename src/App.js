import React, {useReducer} from "react";

import css from './App.module.css';
import PetForm from "./components/PetForm/PetForm";
import reducer from "./reducers/petsForm.reducer";

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const cat = 'Cat';
    const dog = 'Dog';
    
    return (
        <div className={css.main_wrapper}>
            <PetForm pet={cat} petsArray={state.cats}/>
            <PetForm pet={dog} petsArray={state.dogs}/>
        </div>
    );
}

export default App;

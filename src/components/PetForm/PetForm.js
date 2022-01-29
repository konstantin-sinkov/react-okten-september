import React from 'react';
import PetsList from "../PetsList/PetsList";

const PetForm = ({pet, petsArray, dispatch}) => {
    
    const savePetName = (e) => {
        let PetName;
        if (pet === 'Cat') {
            PetName = e.target.cat.value;
            console.log(e.target.cat.value);
            dispatch({type: 'ADD_CAT_NAME', id: 'cat', payload: {PetName}});
        } else {
            console.log(e.target.dog.value);
            PetName = e.target.dog.value;
            dispatch({type: 'ADD_DOG_NAME', id: 'dog', payload: {PetName}});
        }
        e.preventDefault();
    }
    
    // debugger;
    
    
    return (
        <div>
            <form onSubmit={savePetName}>
                <label><input type={'text'} name={pet === 'Cat' ? 'cat' : 'dog'} /></label>
                <button>Save {pet}'s name</button>
            </form>
            <PetsList pet={pet} petsArray={petsArray}/>
        </div>
    );
}

export default PetForm;
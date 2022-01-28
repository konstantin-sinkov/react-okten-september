import React from 'react';
import PetsList from "../PetsList/PetsList";

const PetForm = ({pet, petsArray}) => {
    const save = (e) => {
        e.preventDefault();
    }
    
    
    return (
        <div>
            <form>
                <label><input name={pet} /></label>
                <button onClick={save}>Save {pet}'s name</button>
            </form>
            <PetsList pet={pet} petsArray={petsArray}/>
        </div>
    );
}

export default PetForm;
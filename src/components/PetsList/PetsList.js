import React from 'react';

import PetItem from "../PetItem/PetItem";

const PetsList = ({pet, petsArray}) => {
    return (
        <div>
            <h3><u>{pet}s</u></h3>
            <br/>
            <ul>
                {
                    petsArray.map(pet => <PetItem pet={pet}/>)
                }
            </ul>
        </div>
    );
}

export default PetsList;
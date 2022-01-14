import React from 'react';

const User = ({user}) => {
    const {id, name, email} = user;
    
    return (
        <div>
            <p>{id} - {name} -- {email}</p>
            <button>Detail Info</button>
        </div>
    );
}

export default User;
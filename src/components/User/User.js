import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <li>
            {id} -- <b>{name}</b> -- login: {username} -- email: {email}
        </li>
    );
}

export default User;
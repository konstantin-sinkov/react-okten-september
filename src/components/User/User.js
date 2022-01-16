import React from 'react';

import './User.css';

const User = ({user, chooseUserId}) => {
    const {id, name, email} = user;
    
    const userOnclickChoose = () => {
        chooseUserId(id);
    }
    
    return (
        <div className={"user_box"}>
            <p>{id} - {name} -- {email}</p>
            <button onClick={userOnclickChoose}>Detail Info</button>
        </div>
    );
}

export default User;
import React from 'react';

const UserDetails = ({chosenUser, chooseUserId}) => {
    const {name, username, email, phone, website} = chosenUser;
    return (
        <div className={`details_wrap border ${!chosenUser ? "hidden" : ""}`}>
            <h2><u>User detail info</u></h2>
            <p>name - {name}, login - {username}</p>
            <h3>Contacts</h3>
            <ul>
                <li>{phone}</li>
                <li>{email}</li>
                <li>{website}</li>
            </ul>
            <button onClick={chooseUserId}>UserPosts</button>
        </div>
    );
}

export default UserDetails;
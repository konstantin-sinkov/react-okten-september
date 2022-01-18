import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";

const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        usersService.getUserById().then(value => setUser({...value}))
    }, [id]);
    
    console.log(user);
    return (
        <div>
            {user && (
                <div>
                    <p>name - <b>{user.name}</b></p>
                    <p>login - <b>{user.username}</b></p>
                    <h4><u>Contacts</u></h4>
                    <p>email - <b>{user.email}</b></p>
                    <p>phone - <b>{user.phone}</b></p>
                </div>
            )}
        </div>
    );
}

export default UserDetailsPage;
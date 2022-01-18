import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/users.service";
import User from "../../components/User/User";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        usersService.getUsers().then(value => setUsers([...value]))
    }, []);
    
    
    return (
        <div>
            <h1><u>Users List</u></h1>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export default UsersPage;
import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/users.service";
import {Outlet} from "react-router-dom";

import User from "../../components/User/User";
import css from './UsersPage.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        usersService.getUsers().then(value => setUsers([...value]))
    }, []);
    
    
    return (
        <div className={css.wrapper}>
            <div>
                <h1><u>Users List</u></h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

//default export doesn't work with index.js exports
export {UsersPage};
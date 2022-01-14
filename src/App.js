import React from 'react';
import {useState, useEffect} from 'react';

import {userService} from './services/users.service';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import UserPosts from './components/UserPosts/UserPosts';

const App = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        userService.getUsers()
            .then(value => setUsers(value));
    })
    // console.log(users);
    return (
        <div>
            <Users
                className={"users_wrapper"}
                users={users}
            />
            <UserDetails
                className={"details_wrapper"}
            />
            <UserPosts
                className={"usersPosts_wrapper"}
            />
        </div>
    );
}

export default App;
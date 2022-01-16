import React from 'react';
import {useState, useEffect} from 'react';

import './App.css';
import {userService} from './services/users.service';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import UserPosts from './components/UserPosts/UserPosts';

const App = () => {
    const [users, setUsers] = useState([]);
    const [chosenUserId, setChosenUserId] = useState(null);
    const [chosenUser, setChosenUser] = useState(null);
    
    //get all users
    useEffect(() => {
        userService.getUsers()
            .then(value => setUsers(value));
    }, [])
    
    // choose userId;
    const chooseUserId = (id) => {
        setChosenUserId(id);
    }
    
    //get UserDetail info with chosen id by fetch request
    useEffect(() => {
        userService.getUserById(chosenUserId)
            .then(value => setChosenUser(value));
    }, [chosenUserId]);
    
    
    return (
        <div className={"wrapper"}>
            <Users
                users={users}
                chooseUserId={chooseUserId}
            />
    
            {chosenUser &&
                <UserDetails
                    className={`details_wrap border ${!chosenUser ? "hidden" : ""}`}
                    // className={`details_wrap border`}
                    chosenUser={chosenUser}
                    chooseUserId={chooseUserId}
                />
            }
            {chosenUserId &&
                <UserPosts
                    // className={`posts_wrap border ${chosenUserPosts.length === 0 ? "hidden" : ""}`}
                    chosenUserId={chosenUserId}
                />
            }
        </div>
    );
}

export default App;
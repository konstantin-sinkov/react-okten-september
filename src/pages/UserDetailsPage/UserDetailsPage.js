import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";

const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    //get {user} from the state with useLocation 
    const {state} = useLocation();
    let navigator = useNavigate();
    
    useEffect(() => {
        //if {state} is empty make request
        if (state) {
            setUser(state)
            return
        }
        usersService.getUserById().then(value => setUser({...value}))
    }, [id]);
    
    const goToUserPosts = (id) => {
        // console.log(navigator);
        navigator('posts');
    }
    
    
    console.log(user);
    return (
        <div>
            {user && (
                <div>
                    <p>name - <b>{user.name}</b></p>
                    <p>login - <b>{user.username}</b></p>
                    <hr/>
                    <h4><u>Contacts</u></h4>
                    <p>email - <b>{user.email}</b></p>
                    <p>phone - <b>{user.phone}</b></p>
                    
                    <button onClick={goToUserPosts}>User Posts</button>
                    
                    <Outlet />
                </div>
            )}
        </div>
    );
}

export default UserDetailsPage;
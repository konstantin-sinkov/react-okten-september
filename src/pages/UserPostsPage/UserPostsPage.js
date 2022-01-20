import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";

const UserPostsPage = () => {
    const {id} = useParams();
    console.log(id);
    const [userPosts, setUserPosts] = useState([]);
    
    useEffect(() => {
        usersService.getUserPostsById(id).then(value => console.log(value))
    }, [id]);
    //setUserPosts([...userPosts])
    // console.log(userPosts);
    
    return (
        <div>
        
        </div>
    );
}

export default UserPostsPage;
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";
import UserPost from "../../components/UserPost/UserPost";

const UserPostsPage = () => {
    const {id} = useParams();
    // console.log(id);
    const [userPosts, setUserPosts] = useState([]);
    
    useEffect(() => {
        usersService.getUserPostsById(id).then(value => setUserPosts([...value]));
    }, [id]);
    
    // console.log(userPosts);
    
    return (
        <div>
            <h2><u>User posts</u></h2>
            {userPosts.length > 0 &&
                userPosts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
}

export {UserPostsPage};
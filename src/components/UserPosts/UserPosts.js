import React, {useEffect, useState} from 'react';

import getUserPosts from "../../services/posts.service";
import Post from "../Post/Post";

const UserPosts = ({chosenUserId}) => {
    const [chosenUserPosts, setChosenUserPosts] = useState([]);
    
    //get posts of chosen user
    useEffect(() => {
        getUserPosts(chosenUserId)
            .then(value => setChosenUserPosts(value))
    }, [chosenUserId]);
    
    return (
        <div className={`posts_wrap border ${chosenUserPosts.length === 0 ? "hidden" : ""}`}>
            <h2><u>User detail info</u></h2>
            {chosenUserPosts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export default UserPosts;
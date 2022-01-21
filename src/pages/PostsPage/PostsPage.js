import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        postsService.getPosts().then(value => setPosts([...value]))
    }, [])
    
    return (
        <div>
            <h1><u>Posts list</u></h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export {PostsPage};

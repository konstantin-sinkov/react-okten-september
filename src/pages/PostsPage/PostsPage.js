import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Post from "../../components/Post/Post";
import css from './PostsPage.module.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        postsService.getPosts().then(value => setPosts([...value]))
    }, [])
    
    return (
        <div className={css.wrapper}>
            <div>
                <h1><u>Posts list</u></h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export {PostsPage};

import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {postsService} from "../../services/posts.service";

const PostDetailsPage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [post, setPost] = useState(null);
    const navigator = useNavigate();
    
    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }
        postsService.getPostById().then(value => setPost({...value}))
    }, [id]);
    
    const goToCommentsPage = () => {
        navigator('comments');
    }
    
    return (
        <div>
            {post && (
                <div>
                    <p><b>postId -- {post.id}</b></p>
                    <p><u>{post.title}</u></p>
                    <p>{post.body}</p>
                    <hr/>
                    
                    <button onClick={goToCommentsPage}>Show thread</button>
                    
                    <Outlet/>
                </div>
            )}
        </div>
    );
}

export {PostDetailsPage};
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services/posts.service";
import UserPost from "../../components/UserPost/UserPost";
import Comment from "../../components/Comment/Comment";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        postsService.getCommentsById(id).then(value => setComments([...value]))
    }, [id]);
    
    return (
        <div>
            <h2><u>Post's thread</u></h2>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}

export {PostCommentsPage};
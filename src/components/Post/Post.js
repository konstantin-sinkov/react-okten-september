import React from 'react';

const Post = ({post}) => {
    const {title, body, userId} = post;
    
    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
}

export default Post;
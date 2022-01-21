import React from 'react';

const UserPost = ({post: {id, title, body}}) => {
    return (
        <div>
            <p>{id} -- <i>{title}</i></p>
            <p>{body}</p>
        </div>
    );
}

export default UserPost;
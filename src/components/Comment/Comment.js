import React from 'react';

const Comment = ({comment: {id, name, email, body}}) => {
    return (
        <div>
            <h5>{id} -- {name}</h5>
            <hr/>
            <p><u>from - {email}</u></p>
            <hr/>
            <p>{body}</p>
        </div>
    );
}

export default Comment;
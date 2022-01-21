import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post, post: {id, title}}) => {
    return (
        <div>
            <Link to={id.toString()} state={post}>
                {id} -- {title}
            </Link>
        </div>
    );
}

export default Post;
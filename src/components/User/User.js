import React from 'react';
import {Link} from "react-router-dom";

const User = ({user, user: {id, name}}) => {
    return (
        <div>
            <Link to={id.toString()} state={user}>
                {id} -- {name}
            </Link>
        </div>
    );
}

export default User;
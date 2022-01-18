import React from 'react';
import {Link} from "react-router-dom";

const User = ({user: {id, name}}) => {
    return (
        <div>
            <Link to={id.toString()}>
                {id} -- {name}
            </Link>
        </div>
    );
}

export default User;
import React from 'react';
import User from "../User/User";

const Users = ({users}) => {
    
    return (
        <div>
            <h2>Users list</h2>
            <ul>
                {users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                    />
                )}
            </ul>
        </div>
    );
}

export default Users;
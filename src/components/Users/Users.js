import React from 'react';
import User from "../User/User";

const Users = () => {
    const [users, setUsers] =
    
    return (
        <div>
            <h2>Users list</h2>
            {users.map(user =>
                <User
                    key={user.id}
                    user={user}
                />
            )}
        </div>
    );
}

export default Users;
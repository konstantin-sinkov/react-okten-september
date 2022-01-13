import React from 'react';

import User from '../User/User';
import './Users.css';


const Users = ({users}) => {
   console.log(users);
   return (
   <div className="users_block border">
       <h2>Users</h2>
       <ul>
           {users.map(el => <User key={el.id} user={el} />)}
       </ul>
   </div>
  );
 }

export default Users;
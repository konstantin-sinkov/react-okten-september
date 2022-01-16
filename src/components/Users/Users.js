import React, {useState} from 'react';

import User from '../User/User';

const Users = ({users, chooseUserId}) => {
  return (
   <div className={"users_wrap border"}>
       <h2>Users</h2>
       {users.map(value =>
           <User
               key={value.id}
               user={value}
               chooseUserId={chooseUserId}
           />)}
   </div>
  );
 }

export default Users;
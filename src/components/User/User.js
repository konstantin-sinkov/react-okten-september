import React from 'react';

const User = ({user}) => {
  const {id, name, username} = user;
  return (
   <>
       <li><b>{id} -- {name}</b> -- login - <u>{username}</u></li>
   </>
  );
 }

export default User;
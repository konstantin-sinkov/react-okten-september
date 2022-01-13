import React from 'react';

const Comment = ({comment}) => {
  const {id, postId, name} = comment;

  return (
   <div>
       <li>{id} -- comment to post# {postId} -- {name}</li>
   </div>
  );
 }

export default Comment;
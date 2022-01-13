import React from 'react';

const Post = ({post}) => {
  const {userId, title} = post;

  return (
   <div>
       <li>{userId} -- {title}</li>
   </div>
  );
 }

export default Post;
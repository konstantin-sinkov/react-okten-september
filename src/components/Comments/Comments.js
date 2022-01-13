import React from 'react';

import Comment from '../Comment/Comment';
import './Comments.css';

const Comments = ({comments}) => {
  // console.log(comments);
  return (
   <div className="comments_block border">
        <ul>
            <h2>Comments</h2>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </ul>
   </div>
  );
 }

export default Comments;
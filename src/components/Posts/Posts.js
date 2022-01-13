import React from 'react';

import Post from '../Post/Post'
import './Posts.css';

const Posts = ({posts}) => {
  // console.log(posts);
  return (
   <div className="posts_block border">
        <ul>
            <h2>Posts</h2>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </ul>
   </div>
  );
 }

export default Posts;
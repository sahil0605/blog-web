// src/components/Post.js
import React from 'react';
import './PostDesign.css'

const Post = ({ post }) => {
  return (
    <div>
    <div className='box1'>
      <h3>Title : {post.title}</h3>
      <h3>Posted By : {post.createdBy}</h3>
      <p>{post.createdAt}</p>
      </div>
      <p>{post.description}</p>
    </div>
  );
};

export default Post;

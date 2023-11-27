// src/components/Post.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostDesign.css'
import {FaYoutube,} from 'react-icons/fa'
import { useCookies } from 'react-cookie';
import axios from 'axios';


const Post = ({ post }) => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["access_token"]);
 
  const user = JSON.parse(window.localStorage.getItem('user'))
  const deleteHandler = async()=>{
           try{
            await axios.delete(`http://localhost:7000/api/user/deletePost/${post._id}`, {
              headers: { authorization: cookies.access_token },
              
            })
           alert("deleted")
           navigate('/')
           }catch(err){
              alert("error")
           }
  }
  // const updateHandler = async()=>{
  // }
  return (
    <div className='box'>
    <div className='box1'>
      <h3>Title : {post.title}</h3>
      <h3>Posted By : {post.createdBy}</h3>
      <p>{post.createdAt}</p>
      {user && post.createdBy === user.name && (
          <div className='btn-container'>
            <button className='button-dlt' onClick={deleteHandler}>
              Delete
            </button>
            {/* <button className='button-upd' onClick={updateHandler}>
              Update
            </button> */}
          </div>
        )}
      </div>
      <div className='desc'>
      <p>{post.description}</p>
      </div>
    </div>
  );
};

export default Post;

import React from 'react';
import '../pagecss/Home.css';
import Post from '../post/PostDesign';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';


const Home = () => {
  const [posts, setPosts] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/user/getAllPost');
        console.log(response.data.posts);
        setPosts(response.data.posts); // Assuming the response data is an array of posts
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    // Call the fetchData function
    fetchData();
  }, []); 
  return (
    
    <div className="homepage-container">
      <h1>Welcome to My Blog</h1>
      {Array.isArray(posts) && posts.map(post => (
  <div key={post._id} className="post-container">
    <Post post={post} />
  </div>
))}
    </div>
    
  );
};

export default Home;
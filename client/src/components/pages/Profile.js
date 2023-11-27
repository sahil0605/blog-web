import React, { useState, useEffect } from "react";
import "../pagecss/Profile.css";
import Post from '../post/PostDesign';
import axios from "axios";
import { useCookies } from "react-cookie";

function Profile() {
  const [cookies] = useCookies(["access_token"]);
  const user = JSON.parse(window.localStorage.getItem("user"));
  console.log(user);
  const [posts, setPosts] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/user/myPost",
          {
            headers: { authorization: cookies.access_token },
          }
        );
        console.log(response.data.posts);
        setPosts(response.data.posts); // Assuming the response data is an array of posts
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div className="profile">
      <div>
        <h1>Name: {user.name}</h1>
        <h1>Email: {user.email}</h1>
      </div>
      <div className="homepage-container">
        <h1>My Posts </h1>
        {Array.isArray(posts) &&
          posts.map((post) => (
            <div key={post._id} className="post-container">
              <Post post={post} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Profile;

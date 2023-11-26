import React, { useState } from "react";
import "../pagecss/Navbar.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies, setCookie] = useCookies(["access_token"]);

  const handleLogOut = () => {
    setCookie("access_token", JSON.stringify(""));
    window.localStorage.removeItem("user");
  };

  return (
    <div className="navbar">
      <div className="logo">BLOG WEB</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {cookies.access_token?.length > 0 ? (
          <>
            <li>
              <Link to="/createPost">CreatePost</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li onClick={handleLogOut}>
              <Link to="/">Log Out</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;

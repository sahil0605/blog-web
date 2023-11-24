// App.js
import React from 'react';
import './App.css'
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/pages/Navbar';
import Home from '../src/components/pages/Home';
import MyPost from './components/pages/MyPost';
import CreatePost from './components/pages/CreatePost';
import Profile from './components/pages/Profile';

const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost/>} />
          <Route path="/myPost" element={<MyPost/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;

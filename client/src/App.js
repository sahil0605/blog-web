// App.js
import React from 'react';
import './App.css'
import { Route,Routes, BrowserRouter } from 'react-router-dom';

import Home from '../src/components/pages/Home';

import CreatePost from './components/pages/CreatePost';
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Navbar from './components/pages/Navbar';

const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar/>
      
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Front from './components/main/Front';
import Login from './components/main/Login';
import Register from './components/main/Register';
import MenuItem from './components/home/MenuItem';
import Menuu from './components/home/Menuu';
// Import Footer component

const App = () => {
  return (
    <Router>
      <div style={{ paddingBottom: '50px' }}> {/* Add padding to accommodate footer */}
        <Routes>
          <Route exact path="/" element={<Front />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<MenuItem />} />
          <Route path="/menuu" element={<Menuu />} />
        </Routes>
      </div>
       {/* Add the Footer component */}
    </Router>
  );
};

export default App;

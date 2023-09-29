import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = ()=> {
 
    return (
      <nav className="navbar">
        <div className="logo">NewsMonkey</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/Business">Business</Link></li>
          <li><Link to="/Entertainment"> Entertainment</Link></li>
          <li><Link href="/General">General</Link></li>
          <li><Link to="/Health">  Health</Link></li>
           <li><Link to="/Technology">Technology</Link></li>
    
        </ul>
      </nav>
    );
  
}

export default Navbar;

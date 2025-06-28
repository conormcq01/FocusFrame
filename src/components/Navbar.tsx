import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">🏠 Home</NavLink>
      <NavLink to="/todo" className="nav-link">📝 To-Do</NavLink>
      <NavLink to="/timer" className="nav-link">⏱ Timer</NavLink>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import {NavLink} from 'react-router-dom';
import apple from  './Images/apple.png';
import apple2 from  './Images/apple2.png';

const Navbar = (props) => (
  <nav>
    <ul className="nav-menu">
    <li><NavLink className="nav-menu__link" to="/"><img alt="apple" src={apple2} className="apple-icon"/></NavLink></li>
      <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink> </li>
      <li><NavLink className="nav-menu__link" to="/info">Contact Info</NavLink> </li>
    </ul>
  </nav>
);

export default Navbar;

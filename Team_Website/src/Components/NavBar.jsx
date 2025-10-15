// import React from 'react'
import "./NavBar.css";
import logo from "../assets/img/wayne-logo2.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={logo} className="logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => (isActive? "active-link" : "")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => (isActive? "active-link" : "")}>About</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({isActive}) => (isActive? "active-link" : "")}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => (isActive? "active-link" : "")}>Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <form action="serch.php" id="search-bar">
          <input type="text" placeholder="serach..." />
        </form>
      </div>
      <div className="offset-navbar"></div>
    </div>
  );
};

export default NavBar;

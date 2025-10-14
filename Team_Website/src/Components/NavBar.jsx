// import React from 'react'
import "./NavBar.css";
import logo from "../assets/img/wayne-logo2.png";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={logo} className="logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <form action="serch.php" id="search-bar">
          <input type="text" placeholder="serach..." />
        </form>
      </div>
    </div>
  )
}

export default NavBar

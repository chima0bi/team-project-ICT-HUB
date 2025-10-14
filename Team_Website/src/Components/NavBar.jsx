// import React from 'react'
import "./NavBar.css";
import logo from "../assets/img/wayne-logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={logo} className="logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
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

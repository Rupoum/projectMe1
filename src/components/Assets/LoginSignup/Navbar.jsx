import React from "react";
import "./LoginSignup.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="header">
        <Link className="logo" to="/">
          Logo
        </Link>

        <nav className="navbar">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>My Orders</NavLink>
        </nav>
        <NavLink className="btnLogin-popup" to="/login">
          Login
        </NavLink>
      </header>
    </div>
  );
};
export default Navbar;

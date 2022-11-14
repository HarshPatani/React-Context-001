import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Context";

const Navbar = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`navbar ${isLight ? "navbar-light" : "navbar-dark"}`}>
      <h1>React-Redux</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/service">Services</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
};

export default Navbar;

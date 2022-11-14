import React from "react";
import Navbar from "./Navbar";
import ThemeContext from "../Context";
import { useContext } from "react";
const Service = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div
        className={`container ${
          isLight ? "container-light" : "container-dark"
        }`}
      >
        <h1>Our Services Page</h1>
        <p>Our Services are currently unavailable</p>
        <button className="btn-light" onClick={changeTheme}>
          Toggle theme to {isLight ? "Dark" : "Light"}
        </button>
      </div>
    </>
  );
};

export default Service;

import React from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import ThemeContext from "../Context";

const About = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div
        className={`container ${
          isLight ? "container-light" : "container-dark"
        }`}
      >
        <h1>About Us</h1>
        <p>This is About Us Page</p>
        <button className="btn-light" onClick={changeTheme}>
          Toggle theme to {isLight ? "Dark" : "Light"}
        </button>
      </div>
    </>
  );
};

export default About;

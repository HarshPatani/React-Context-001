import React from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import ThemeContext from "../Context";

const Home = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div
        className={`container ${
          isLight ? "container-light" : "container-dark"
        }`}
      >
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod qui
          fuga nobis ab veritatis laboriosam facere, nisi optio dolorem ex quis
          modi ea placeat earum similique? Optio expedita molestias soluta?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolor
          laboriosam perferendis ipsa saepe molestiae iusto soluta ducimus
          omnis, dolorem corrupti officia, nam veritatis laudantium explicabo
          consectetur temporibus dolore itaque?Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Cumque consequuntur accusamus, quibusdam
          commodi provident ipsa laboriosam voluptates adipisci consequatur,
          omnis ut quos sed molestiae quasi earum, iste error? Laborum,
          mollitia!
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          nam impedit illo ad dignissimos nisi facere dolorem rem maxime vitae
          rerum voluptate, aspernatur asperiores. Ullam quis temporibus ratione
          sequi distinctio.
        </p>
        <button className="btn-light" onClick={changeTheme}>
          Toggle theme to {isLight ? "Dark" : "Light"}
        </button>
      </div>
    </>
  );
};

export default Home;

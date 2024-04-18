import React from "react";
import "../scss/hader.scss";
import { Link } from "react-router-dom";
import home from "../img/home.png";
import stack from "../img/stack.png";
import projects from "../img/projects.png";
import contact from "../img/contact.png";
import "animate.css";

const Header = () => {
  return (
    <>
      <div className="resume__header__div flex items-center">
        <Link to="/">
          <img className="resume__header__img" src={home} alt="home" />
        </Link>
        <Link to="/stack">
          <img className="resume__header__img" src={stack} alt="stack" />
        </Link>
        <Link to="/projeck">
          <img className="resume__header__img" src={projects} alt="projects" />
        </Link>
        <Link to="/contact">
          <img className="resume__header__img" src={contact} alt="projects" />
        </Link>
      </div>
      <div className="resume__header flex justify-between items-center">
        <Link to="/">
          <h1 className="animate__animated animate__bounce   resume__header__name ">
            Frotent Developer
          </h1>
        </Link>
        <ul className=" resum__ul">
          <Link to="/">
            <li className="resume__link">Home</li>
          </Link>
          <Link to="/stack">
            <li className="resume__link">Tech Stack</li>
          </Link>
          <Link to="/projeck">
            <li className="resume__link">Projects</li>
          </Link>
          <Link to="/contact">
            <li className="resume__link">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;

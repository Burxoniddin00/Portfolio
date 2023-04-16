import React from "react";
import "../scss/hader.scss";
import { Link } from "react-router-dom";
import home from "../img/home.png";
import stack from "../img/stack.png";
import projects from "../img/projects.png";
import contact from "../img/contact.png";

const Header = () => {
  return (
    <>
      <div className="resume__header__div flex items-center">
        <img className="resume__header__img" src={home} alt="home" />
        <img className="resume__header__img" src={stack} alt="stack" />
        <img className="resume__header__img" src={projects} alt="projects" />
        <img className="resume__header__img" src={contact} alt="projects" />
      </div>
      <div className="resume__header flex justify-between items-center">
        <Link to="/">
          <h1 className="resume__header__name"> Frotent Developer</h1>
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

import React from "react";
import "../scss/hader.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="resume__header flex justify-between items-center">
      <Link to="/">
        <h1 className="resume__header__name"> Frotent Developer</h1>
      </Link>
      <ul className="flex gap-10 justify-end mr-40 ">
        <Link to="/">
          <li className="resume__link">Home</li>
        </Link>
        <Link to="/stack">
          <li className="resume__link">Tech Stack</li>
        </Link>
        <Link to="/projeck">
          <li className="resume__link">Projects</li>
        </Link>
        <li className="resume__link">Contact</li>
      </ul>
    </div>
  );
};

export default Header;

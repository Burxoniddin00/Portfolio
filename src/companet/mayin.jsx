import React from "react";
import man from "../img/ozim1.jpg";
import '../scss/mani.scss'

export const ComMayin = () => {
  return (
    <div className=" resume">
      <div className="resume__container">
        <h1 className="resume__name">
          Hello, my name is Burhoniddin, I am Frotent Developer
        </h1>
        <button className="resum__dawlont">
          <p> Download Resume</p>
        </button>
      </div>
      <div>
        <img src={man} alt="man" className="resume__img" />
      </div>
    </div>
  );
};

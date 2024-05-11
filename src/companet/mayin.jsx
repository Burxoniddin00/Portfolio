import React from "react";
import man from "../img/img.jpg";
import "../scss/mani.scss";
import download from "../img/Resume.pdf";

export const ComMayin = () => {
  return (
    <div className="resume">
      <div className="resume__container">
        <h1 className="resume__name">
          Hello, my name is Burhoniddin, I am Frontend Developer
        </h1>
        <div className="resum__dawlont">
          <a href={download} download>
            Download resume
          </a>
        </div>
      </div>
      <div>
        <img src={man} alt="man" className="resume__img" />
      </div>
    </div>
  );
};

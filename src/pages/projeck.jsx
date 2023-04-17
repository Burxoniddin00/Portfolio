import React from "react";
import github from "../img/github.png";
import link from "../img/ink.png";
import Rectangle from "../img/photo.jpg";
import photo2 from "../img/photo3.jpg";
import photo3 from "../img/photo2.jpg";
import photo4 from "../img/photo4.jpg";
import photo5 from "../img/photo5.jpg";
import photo6 from "../img/photo6.jpg";
import "../scss/projeck.scss";

export const Projeck = () => {
  return (
    <div className="projeck">
      <div>
        <h2 className="projeck__name">Projects</h2>
        <p className="projeck__text">Things I’ve built so far</p>
      </div>
      <ul className="projeck__inner">
        <li className="projeck__item">
          <img className="projeck__imgen" src={Rectangle} alt="Rectangle" />
          <div className="projeck__container">
            <h3 className="projeck_item__name">Project Twitter</h3>
            <p className="projeck_item__text">
              Tech stack : JavaScript, SASS, React, Tailwind
            </p>
            <div className="flex justify-between">
              <a
                className="projeck__link"
                href="https://fabulous-sunshine-d4731a.netlify.app/"
              >
                <img src={link} alt="link" />
                Live Preview
              </a>
              <a
                className="projeck__link"
                href="https://github.com/Burxoniddin000/twister-.git"
              >
                <img src={github} alt="github" />
                View Code
              </a>
            </div>
          </div>
        </li>
        <li className="projeck__item">
          <img className="projeck__imgen" src={photo2} alt="Rectangle" />
          <div className="projeck__container">
            <h3 className="projeck_item__name">Project Boocks</h3>
            <p className="projeck_item__text">
              Tech stack : Html, JavaScript, Css, SASS
            </p>
            <div className="flex justify-between">
              <a
                className="projeck__link"
                href="https://classy-moonbeam-6af94a.netlify.app/login.html"
              >
                <img src={link} alt="link" />
                Live Preview
              </a>
              <a
                className="projeck__link"
                href="https://github.com/Burxoniddin000/onlayn_magazin.git"
              >
                <img src={github} alt="github" />
                View Code
              </a>
            </div>
          </div>
        </li>
        <li className="projeck__item">
          <img className="projeck__imgen" src={photo3} alt="Rectangle" />
          <div className="projeck__container">
            <h3 className="projeck_item__name">Project country</h3>
            <p className="projeck_item__text">
              Tech stack : JavaScript, SASS, React, Tailwind
            </p>
            <div className="flex justify-between">
              <a
                className="projeck__link"
                href="https://cerulean-semifreddo-f1b6ba.netlify.app/"
              >
                <img src={link} alt="link" />
                Live Preview
              </a>
              <a
                className="projeck__link"
                href="https://github.com/Burxoniddin000/amalidars.git"
              >
                <img src={github} alt="github" />
                View Code
              </a>
            </div>
          </div>
        </li>
        <li className="projeck__item">
          <img className="projeck__imgen" src={photo4} alt="Rectangle" />
          <div className="projeck__container">
            <h3 className="projeck_item__name">Project onlayn shop</h3>
            <p className="projeck_item__text">
              Tech stack : JavaScript, SASS, React, Tailwind
            </p>
            <div className="flex justify-between">
              <a
                className="projeck__link"
                href="https://incomparable-tapioca-844474.netlify.app/"
              >
                <img src={link} alt="link" />
                Live Preview
              </a>
              <a
                className="projeck__link"
                href="https://github.com/Burxoniddin000/onlayn_magazin"
              >
                <img src={github} alt="github" />
                View Code
              </a>
            </div>
          </div>
        </li>
        <li className="projeck__item">
          <img className="projeck__imgen" src={photo5} alt="Rectangle" />
          <div className="projeck__container">
            <h3 className="projeck_item__name">Project Films</h3>
            <p className="projeck_item__text">
              Tech stack : JavaScript, SASS, React, Tailwind
            </p>
            <div className="flex justify-between">
              <a
                className="projeck__link"
                href="https://remarkable-entremet-a77ddc.netlify.app/"
              >
                <img src={link} alt="link" />
                Live Preview
              </a>
              <a
                className="projeck__link"
                href="https://github.com/Burxoniddin000/imtixon.git"
              >
                <img src={github} alt="github" />
                View Code
              </a>
            </div>
          </div>
        </li>
        <li className="projeck__item">
          <img className="projeck__imgen" src={photo6} alt="Rectangle" />
          <div className="projeck__container">
            <h3 className="projeck_item__name">Project CoffeeRoasters</h3>
            <p className="projeck_item__text">Tech stack : Html, Css, SASS,</p>
            <div className="flex justify-between">
              <a
                className="projeck__link"
                href="https://timely-pasca-ba69c6.netlify.app/"
              >
                <img src={link} alt="link" />
                Live Preview
              </a>
              <a
                className="projeck__link"
                href="https://github.com/Burxoniddin000/datrs7"
              >
                <img src={github} alt="github" />
                View Code
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

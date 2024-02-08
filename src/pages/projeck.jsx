import React from "react";
import Rectangle from "../img/photo.jpg";
import photo2 from "../img/photo2.png";
import photo3 from "../img/photo3.png";
import "../scss/projeck.scss";
import { FaGithub } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";

export const Projeck = () => {
  let arr = [
    {
      id: 1,
      imgLink: photo3,
      name: "Project Kitob o'qi",
      projeckTech: " Tech stack :Next Js, Tailwind, Scss, Zustand, React-icons",
      projeckLink: "https://kitob-mutolaa.uz/",
      projeckGithubLink: "https://github.com/Burxoniddin00/kitob-oq.git",
    },
    {
      id: 2,
      imgLink: photo2,
      name: "Project Netflix",
      projeckTech: " Tech stack :Next Js, Tailwind, Scss, Swiper",
      projeckLink: "https://rococo-panda-4af575.netlify.app/",
      projeckGithubLink: "https://github.com/Burxoniddin00/kitob-oq.git",
    },
  ];
  return (
    <div className="projeck">
      <div>
        <h2 className="projeck__name">Projects</h2>
        <p className="projeck__text">Things I’ve built so far</p>
      </div>
      <ul className="projeck__inner">
        {arr.map((e) => (
          <li key={e.id}>
            <div className="relative group">
              <img
                className="w-[200px] h-[125px] object-cover md:h-[250px]  md:w-[400px] rounded-2xl"
                src={e.imgLink}
                alt="Rectangle"
              />
              <div className="absolute overflow-y-scroll p-3 text-[#fff] top-0 left-0 w-full h-full rounded-2xl flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="">{e.name}</h3>
                <p className="mt-2">{e.projeckTech}</p>
                <div className="flex justify-between gap-3 mt-5">
                  <a
                    className="projeck__link"
                    target="_blank"
                    href={e.projeckLink}
                  >
                    <CiLink size={20} />
                    Live Preview
                  </a>
                  <a
                    target="_blank"
                    className="projeck__link mr-2"
                    href={e.projeckGithubLink}
                  >
                    <FaGithub size={20} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
        {/* 
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
            <h3 className="projeck_item__name"></h3>
            <p className="projeck_item__text">
              
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
            <h3 className="projeck_item__name">Project Country</h3>
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
            <h3 className="projeck_item__name">Project calculator</h3>
            <p className="projeck_item__text">
              Tech stack : JavaScript, SASS, React, Tailwind
            </p>
            <div className="flex justify-between">
              <a
                className="projeck__link"
                href="https://funny-croquembouche-05a6ef.netlify.app/"
              >
                <img src={link} alt="link" />
                Live Preview
              </a>
              <a
                className="projeck__link"
                href="https://github.com/Burxoniddin000/conclotor.git"
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
              Tech stack : Html, Css, JavaScript, SASS,
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
        </li> */}
      </ul>
    </div>
  );
};

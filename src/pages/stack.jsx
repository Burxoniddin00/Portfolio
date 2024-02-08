import React from "react";
import "../scss/stack.scss";
import html from "../img/html.svg";
import bootstrap from "../img/bootstrap.svg";
import css from "../img/css.svg";
import js from "../img/js.svg";
import react from "../img/react.svg";
import next from "../img/next-js.svg";
import scss from "../img/sass.svg";
import tailwind from "../img/tailwind.svg";
import node from "../img/node.svg";
import exp from "../img/exp.svg";
import jwt from "../img/jwt.svg";
import { SiRedux } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMongodb } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export const Stack = () => {
  return (
    <div>
      <div className="stack">
        <div>
          <h1 className="stack__name">My Tech Stack</h1>
          <p className="stack__text">
            Technologies I’ve been working with recently
          </p>
        </div>
        <div className="flex stach__inner pb-10 justify-center">
          <div>
            <img src={html} alt="html" className="stack__img" />
            <p className="text-white text-xl">Html</p>
          </div>
          <div>
            <img src={css} alt="css" className="stack__img" />
            <p className="text-white text-xl">CSS</p>
          </div>
          <div>
            <img src={js} alt="js" className="stack__img" />
            <p className="text-white text-xl">JS</p>
          </div>
          <div>
            <img src={react} alt="react" className="stack__img" />
            <p className="text-white text-xl">React JS</p>
          </div>
          <div>
            <img src={next} alt="next" className="stack__img" />
            <p className="text-white text-xl">Next JS</p>
          </div>
          <div>
            <img src={scss} alt="SCSS" className="stack__img" />
            <p className="text-white text-xl">SCSS</p>
          </div>
          <div>
            <img src={tailwind} alt="Tailwind" className="stack__img" />
            <p className="text-white text-xl">Tailwind</p>
          </div>
          <div>
            <img src={bootstrap} alt="bootstrap" className="stack__img" />
            <p className="text-white text-xl">Bootstrap</p>
          </div>
          <div>
            <SiRedux className="stack__img" color="#9706da" />
            <p className="text-white text-xl">Redux</p>
          </div>
          <div>
            <img src={node} alt="node" className="stack__img" />
            <p className="text-white text-xl">Node js</p>
          </div>
          <div>
            <img src={exp} alt="Express" className="stack__img" />
            <p className="text-white text-xl">Express JS</p>
          </div>
          <div>
            <img src={jwt} alt="Jsonwebtoken" className="stack__img" />
            <p className="text-white text-xl">Jsonwebtoken</p>
          </div>
          <div>
            <SiSequelize className="stack__img" color="#0b7cec" />
            <p className="text-white text-xl">Sequelize</p>
          </div>
          <div>
            <SiSwagger className="stack__img" color="#135f0f" />
            <p className="text-white text-xl">Swagger </p>
          </div>
          <div>
            <BiLogoPostgresql color="#0b7cec" className="stack__img" />
            <p className="text-white text-xl">Postgresql</p>
          </div>
          <div>
            <TbBrandMongodb className="stack__img" color="#135f0f" />
            <p className="text-white text-xl">Mongodb </p>
          </div>
          <div>
            <FaRobot className="stack__img" color="#345974" />
            <p className="text-white text-xl">Telegram Bot </p>
          </div>
          <div>
            <SiGithub className="stack__img" color="#fff" />
            <p className="text-white text-xl">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

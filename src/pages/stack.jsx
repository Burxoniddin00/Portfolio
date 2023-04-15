import React from "react";
import '../scss/stack.scss'
import html from '../img/html.svg'
import bootstrap from '../img/bootstrap.svg'
import css from '../img/css.svg'
import js from '../img/js.svg'
import react from '../img/react.svg'
import next from '../img/next-js.svg'
import scss from '../img/sass.svg'
import tailwind from '../img/tailwind.svg'

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
        <div className="flex stach__inner">
          <img src={html} alt="html" className="stack__img" />
          <img src={css} alt="css" className="stack__img" />
          <img src={js} alt="js" className="stack__img" />
          <img src={react} alt="react" className="stack__img" />
          <img src={next} alt="next" className="stack__img" />
          <img src={scss} alt="bootstrap" className="stack__img" />
          <img src={tailwind} alt="bootstrap" className="stack__img" />
          <img src={bootstrap} alt="bootstrap" className="stack__img" />
        </div>
      </div>
    </div>
  );
};

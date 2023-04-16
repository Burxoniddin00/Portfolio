import React from "react";
import "../scss/footer.scss";
import linkidin from "../img/linkedin.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import telegram from "../img/telegram.png";
import icons from "../img/icons.png";
import github from "../img/github2.png";

export const Contact = () => {
  return (
    <>
      <div>
        <div className="project__inner">
          <h1 className="project__name">My Contact</h1>
          <p className="projeck__text">Link to contact me</p>
        </div>
        <div className="contact__img">
          <a href="https://www.linkedin.com/in/burxoniddin-sotvoldiyev-5a955b272">
            <img src={linkidin} alt="linkidin" />
          </a>
          <a href="https://www.facebook.com/BurxoniddinSotvoldiyev">
            <img src={facebook} alt="linkidin" />
          </a>
          <a href="https://www.instagram.com/burxon1d1n/">
            <img src={instagram} alt="linkidin" />
          </a>
          <a href="https://t.me/Burhon1dd1n">
            <img src={telegram} alt="linkidin" />
          </a>
          <a type="tel" href="tel:+998933532717">
            <img src={icons} alt="linkidin" />
          </a>
          <a href="https://github.com/Burxoniddin000">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </>
  );
};

import React from "react";
import photo2 from "../img/photo2.png";
import photo3 from "../img/photo3.png";
import photo4 from "../img/photo4.png";
import photo5 from "../img/photo5.png";
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
    {
      id: 3,
      imgLink: photo4,
      name: "Project Google Books",
      projeckTech: " Tech stack :Next Js, Tailwind, Scss, Swiper ReactIcons",
      projeckLink: "https://stupendous-piroshki-3ac393.netlify.app/",
      projeckGithubLink: "https://github.com/Burxoniddin00/GoogleBooks.git",
    },
    {
      id: 4,
      imgLink: photo5,
      name: "Project Countries",
      projeckTech: " Tech stack :Html , Css ,Js",
      projeckLink: "https://deft-kitsune-9ac7a4.netlify.app/",
      projeckGithubLink: "https://github.com/Burxoniddin00/countries.git",
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
                <h3 className="max-md:pt-12 max-md:text-base">{e.name}</h3>
                <p className="mt-2 max-md:text-xs">{e.projeckTech}</p>
                <div className="flex justify-between gap-3 mt-5">
                  <a
                    className="projeck__link max-md:text-sm"
                    
                    href={e.projeckLink}
                  >
                    <CiLink size={20} />
                    Live Preview
                  </a>
                  <a
                    
                    className="projeck__link mr-2 max-md:text-sm"
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
      </ul>
    </div>
  );
};

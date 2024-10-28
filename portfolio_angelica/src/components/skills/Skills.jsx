import React from "react";
import JS from "../../assets/JS.png";
import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import REACT from "../../assets/react.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="relative flex flex-col overflow-hidden text-white body-font"
    >
      <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mb-10 border-b border-pink-400 md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 pd-10"
        >
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="mb-2 text-2xl font-medium text-white sm:text-4xl title-font "
          >
            Habilidades
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="text-base leading-relaxed"
          >
            Analista y Desarrolladora Web especializada en desarrollo frontend,
            con sólidos conocimientos en HTML, CSS, JavaScript, java, python
            React y Redux, entre otras tecnologías. HTML, CSS, JavaScript,
            React,Tailwind
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex flex-col md:w-1/2 md:pl-12"
        >
          <nav className="flex flex-wrap -mb-1 list-none">
            <li className="w-1/2 mb-4 lg:w-1/3">
              <img
                src={JS}
                alt=""
                className="object-cover w-24 h-24 rounded-full"
              />
            </li>
            <li className="w-1/2 mb-4 lg:w-1/3">
              <img
                src={HTML}
                alt=""
                className="object-cover w-24 h-24 rounded-full"
              />
            </li>
            <li className="w-1/2 mb-4 lg:w-1/3">
              <img
                src={CSS}
                alt=""
                className="object-cover w-24 h-24 rounded-full"
              />
            </li>
            <li className="w-1/2 mb-4 lg:w-1/3">
              <img
                src={REACT}
                alt=""
                className="object-cover w-24 h-24 rounded-full"
              />
            </li>
            <li className="w-1/2 mb-4 lg:w-1/3">
              <img
                src={python}
                alt=""
                className="object-cover w-24 h-24 rounded-full"
              />
            </li>
            <li className="w-1/2 mb-4 lg:w-1/3">
              <img
                src={java}
                alt=""
                className="object-cover w-24 h-24 rounded-full"
              />
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}

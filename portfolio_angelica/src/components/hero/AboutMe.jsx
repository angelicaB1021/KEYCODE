import React from "react";
import Navbar from "../navbar/Navbar";
import Me from "../../assets/Me.png";
import CV from "./CV.angelica.pdf";
import Hello from "../../assets/Hello.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      <div className="md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 182, 193, 0.7)]"></div>
      <Navbar />
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="z-10 text-white body-font"
      >
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="relative flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <img
              src={Hello}
              data-aos="fade-up"
              data-aos-delay="400"
              className="absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform
                    -translate-x-1/2 -translate-y-1/2 w-20 h-20"
            />
            <h1 className="mb-4 text-4xl font-bold text-white title-font sm:text-4xl">
              ¡Hola soy Angélica!
            </h1>
            <p className="mb-8 leading-relaxed">
              Me destaco por mi pasión a el aprendizaje continuo y mi capacidad
              para adaptarme rápidamente a nuevos desafíos, aportando soluciones
              creativas y eficientes en cada proyecto. Mi enfoque se centra en
              la creación de experiencias de usuario intuitivas y optimizadas,
              con un fuerte compromiso hacia la mejora constante y la
              innovación.
            </p>
            <div className="flex justify-center">
              <a href={CV} download>
                <button
                  className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-green-600 hover:shadow-hover:shadow-[0_0_40px_rgb(128,0,128,0.7)]
                        rounded-full text-lg"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              src={Me}
              alt="hero"
              className="object-cover object-center rounded-full w-80 h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

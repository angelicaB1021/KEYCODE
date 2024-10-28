import React from "react";

export default function Language() {
  const language = [
    { code: "En", name: "Ingles", level: "Basico" },
    { code: "It", name: "Italiano", level: "Basico" },
    { code: "Sp", name: "Español", level: "Nativo" },
  ];
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-20 h-[300px] text-neutral-950 mt-11 "
    >
      <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
        <h1 className="mb-4 text-4xl font-bold text-center text-pink-300 title-font sm:text-4xl">
          Lenguajes
        </h1>
        {language.map((language, index) => (
          <div key={index} className="flex flex-col items-center achievement">
            <div className="relative flex items-center justify-center w-20 h-20 mb-6 text-lg font-bold bg-white rounded-full shadow-lg circle md:w-16 md:h-16 md:text-xl md:mb-8">
              <span className="z-10">{language.code}</span>
              <div className="absolute top-[-6px] left-[-6px] right-[-6px] bottom-[-6px] md:top-[-8px] md:left-[-8px] md:right-[-8px] md:bottom-[-8px] rounded-full bg-gradient-to-b from-[#fb6f92] to-[#a9def9] shadow-[0_0_20px_rgba(255,165,0,0.7)] z-0"></div>
            </div>
            <span className="text-xl text-white md:text-xl">
              {language.name}
            </span>
            <span className="text-[#a3e635] text-lg md:text-xl font-bold">
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

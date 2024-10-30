import React from "react";

export default function Footer() {
  const listNavbar = [
    { name: "Acerca de Mí", link: "#AboutMe" },
    { name: "Habilidades", link: "#Skills" },
    { name: "Estudios", link: "#Studys" },
    { name: "Lenguajes", link: "#Language" },
  ];
  return (
    <footer className="bg-[#020607] rounded-lg shadow">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-pink-400 text-ms sm:text-center">
          2024{" "}
          <a href="#" className="hover:underline">
            Portafolio de Angélica.
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-cyan-300 sm:mt-0">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-lime-400 me-4 md:me-6"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
}

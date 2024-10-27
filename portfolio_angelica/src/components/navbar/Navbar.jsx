import React from "react";

export default function Navbar() {
  const listNavbar = [
    { name: "Acerca de Mí", link: "#home" },
    { name: "Habilidades", link: "#Skills" },
    { name: "Estudios", link: "#Study" },
    { name: "Lenguajes", link: "#Language" },
  ];
  return (
    <header data-aos='fade-up' className='z-10 text-gray-600 body-font'>
    <div className='container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row'>
        <a className='flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0'>
            <span className='ml-3 text-3xl font-bold text-white '>Portafolio</span>
        </a>
        <nav className='flex flex-wrap items-center justify-center text-base text-white md:ml-auto md:mr-auto'>
          {
            listNavbar.map((item, index) =>(
              <a key={index} href={item.link} className="mr-5 hover:text-pink-400">
                {item.name}
                
              </a>
            ))
          }
        </nav>
        <button className='inline-flex items-center py-1 mt-4 text-base text-white border border-white px-7 focus:outline-none md:mt-0 hover:border-rose-400 hover:text-gray-900'>
          <a href="#Contac">Contácteme</a>
        </button>
      </div>
    </header>
  );
}

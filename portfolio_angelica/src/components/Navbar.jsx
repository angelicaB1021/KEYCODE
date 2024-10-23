import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 bg-dark-700 text-pastel-100">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl">Portafolio Angélica Beltrán</div>
        <div className="hidden space-x-6 md:flex">
          <a href="#about" className="hover:text-pastel-300">About Me</a>
          <a href="#skills" className="hover:text-pastel-300">Skills</a>
          <a href="#study" className="hover:text-pastel-300">Study</a>
          <a href="#projects" className="hover:text-pastel-300">Projects</a>
        </div>
        <button className="md:hidden text-pastel-100">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
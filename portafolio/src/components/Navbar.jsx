import React, { useState } from "react";
import { abLogo, cross, menuBurger } from "../assets";
import { navLinks } from "../Constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle =() => {
    setToggle(!toggle);
  }
  return (
    <header className="bg-white">
      <div className={toggle?'transitio-[height] ease-in-out delay-150 h-[100vh]' :'transitio-[height] ease-in-out delay-150 h-[92px]'}>
        <nav className="container mx-auto px-4 py-4 md:px-0 md:flex">
          <div className="flex justify-between items-center">
            <a href="/">
              <img src={abLogo} alt="logo" width={60} height={60} /></a>
            <div className="w-6 h-6 z-50 md:hidden" onClick={handleToggle}>
              {toggle? <img src={cross} alt="Cross" width={24} height={24} />:<img src={menuBurger} alt="Menu Burger" width={24} height={24} />}
            </div>
          </div>
          <ul className={toggle? 'flex flex-col justify-center items-center h-full absolute top-0 bottom-0 left-0 right-0':'hidden md:flex-auto md:flex md:justify-end md:items-center md:gap-16'}>
            {navLinks.map((item) => (
              <li key={item.label} className="py-4"><a href={item.href} className="text-violet-900 hover:text-black">{item.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

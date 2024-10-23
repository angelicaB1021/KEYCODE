import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark-900 text-pastel-100">
      <div className="container mx-auto text-center">
        <p> 2024 Portfolio Angélica Beltrán.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-pastel-300">LinkedIn</a> | 
          <a href="#" className="hover:text-pastel-300"> GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
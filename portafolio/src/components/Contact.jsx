import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-pastelPink p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
      <div className="flex justify-center mt-4 space-x-6">
        <a href="https://github.com/angelicaB1021" target="_blank" rel="noreferrer">
          <FaGithub size={40} className="text-gray-800 hover:text-gray-600" />
        </a>
        <a href="https://www.facebook.com/share/cN4toLxfcDupRCbV/" target="_blank" rel="noreferrer">
          <FaFacebook size={40} className="text-gray-800 hover:text-gray-600" />
        </a>
        <a href="https://www.linkedin.com/in/angelica-beltran-15748a17b/" target="_blank" rel="noreferrer">
          <FaLinkedin size={40} className="text-gray-800 hover:text-gray-600" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
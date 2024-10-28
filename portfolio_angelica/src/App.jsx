import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "./components/hero/AboutMe";
import Skills from "./components/skills/Skills";
import Studys from "./components/study/Studys";
import Language from "./components/Language/Languages";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <main className="bg-[#020607]">
      <AboutMe />
      <Skills />
      <Studys />
      <Language />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;

import React from 'react';
import Navbar from './components/Navbar';   // Importa el componente Navbar
import AboutMe from './components/AboutMe'; // Importa el componente AboutMe
import Skill from './components/Skill';     // Importa el componente Skill
import Study from './components/Study';     // Importa el componente Study
import Project from './components/Project'; // Importa el componente Project
import Footer from './components/Footer';   // Importa el componente Footer

function App() {
  return (
    
    <div className="min-h-screen bg-dark-900 text-pastel-200">
     
     <Navbar />

     {/* About Me Section */}
     <main className="space-y-20">
       <section id="about">
         <AboutMe />
       </section>

       {/* Skills Section */}
       <section id="skills">
         <Skill />
       </section>

       {/* Study Section */}
       <section id="study">
         <Study />
       </section>

       {/* Projects Section */}
       <section id="projects">
         <Project />
       </section>
     </main>

     {/* Footer */}
     <Footer />
     </div>
  );
}

export default App;
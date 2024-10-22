// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Study from './components/study';
import Skill from './components/Skill';
import Title from './components/Title';

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Title />
      <AboutMe />
      <Study />
      <Skill />
    </div>
  );
}

export default App;



import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'




const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
  },[]);
  return (
    <main className='bg-[#020607]'>
      <Hero/>
      <Skills/>
    </main>
  )
}

export default App

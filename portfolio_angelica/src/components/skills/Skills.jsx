import React from 'react'
import JS from '../../assets/JS.png'
import HTML from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import REACT from '../../assets/REACT.png'

const Skills = () => {
  return (
    <section id='skills' className='relative flex flex-col overflow-hidden text-white body-font'>
<div className='container flex-wrap items-center px-5 py-24 mx-auto'>
    <div data-aos='fade-up' data-aos-delay='200' className='mb-10 border-b border-green-400 md:w-1/2 md:pr-12 md:py-8 md:border-p md:border-b-0 md:mb-0 pd-10'> 
    <h1 data-aos='fade-right' data-aos-delay='400' className='mb-2 text-2xl font-medium text-white sm:text-4xl title-font'>Habilidades</h1>
    <p data-aos='fade-right' data-aos-delay='500' className='text-base leading-relaxedo'>
    Analista y Desarrolladora Web especializada en desarrollo
              frontend, con sólidos conocimientos en HTML, CSS, JavaScript,
              React y Redux, entre otras tecnologías.
        HTML, CSS, JavaScript, React, Tailwind</p>
    </div>
    <div ata-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
        <nav className='flex flex-wrap -mb-1 list-none'>
            <li className='w-1/2 mb-4 lg:w-1/3'>
            <img src={JS} alt="" className= 'object-cover w-24 h-24 rounded-full'/>
            </li>
            <li className='w-1/2 mb-4 lg:w-1/3'>
            <img src={HTML} alt="" className= 'object-cover w-24 h-24 rounded-full'/>
            </li>
            <li className='w-1/2 mb-4 lg:w-1/3'>
            <img src={CSS} alt="" className= 'object-cover w-24 h-24 rounded-full'/>
            </li>
            <li className='w-1/2 mb-4 lg:w-1/3'>
            <img src={REACT} alt="" className= 'object-cover w-24 h-24 rounded-full'/>
            </li>
        </nav>
    </div>
</div>
    </section>
  )
}

export default Skills

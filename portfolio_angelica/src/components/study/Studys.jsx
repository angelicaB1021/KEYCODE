import React from 'react'
import estudios from '../../assets/estudios.png'

export default function Experience() {
  return (

    <section id='Studys' className='relative flex flex-col overflow-hidden text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#e879f9] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#e879f9] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container flex flex-col items-center px-5 py-24 mx-auto md:flex-row'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative w-5/6 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0'>
             <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-fuchsia-600 via-rose-300 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src={estudios} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 md:items-start md:text-left '>
            <h1 className='mb-4 text-3xl font-medium text-teal-500 title-font sm:text-4xl '>Estudios</h1>
            <h2 className='font-bold text-white title-font sm:text-2xl '>05/09/2022 - 04/12/2024:</h2>
            <p className='mb-8 leading-relaxed text-white '>TECNÓLOGO EN ANALISIS Y DESARROLLO DE SOFTWARE</p>
            <h2 className='font-bold text-white title-font sm:text-2xl '>13/08/2024 - 08/11/2024:</h2>
            <p className='mb-8 leading-relaxed text-white '>DESARROLLADORA WEB FRON-END REACT & REDUX</p>
        </div>
        </div>
    </section>

  )
}

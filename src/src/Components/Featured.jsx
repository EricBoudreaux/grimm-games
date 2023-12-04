import React from 'react'

import 'animate.css';


import dreamPoster from '../Assets/dream_reign_poster.png'
import edgePoster from '../Assets/edge_poster.png'
import mortalPoster from '../Assets/mortal_poster.png'

const Featured = () => {
  return (
    <div className='mt-16 w-full animate__animated animate__slideInUp'>
      <h2 className='text-white text-center font-semibold'>Featured Games</h2>

    <div className='flex flex-col md:flex-row justify-center mt-12 gap-12'>
        <div className='relative group mx-auto md:mx-0 group rounded-lg cursor-pointer hover:scale-105 duration-300 ease-in-out animate-pulse hover:animate-none'>
          <img className='duration-300 rounded-lg h-[600px]' src={dreamPoster} alt="/" />
          <h3 className='absolute top-[-2%] group-hover:top-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100  right-0 p-4 text-white font-semibold bg-gray-600/60 rounded-bl-lg rounded-tr-lg'>Coming Soon!</h3>
          <div className='absolute top-0 h-full w-full bg-black/20 opacity-100 group-hover:opacity-0 duration-300'/>
        </div>
        <div className='relative group mx-auto md:mx-0 group rounded-lg cursor-pointer hover:scale-105 duration-300 ease-in-out animate-pulse hover:animate-none'>
          <img className='duration-300 rounded-lg h-[600px]' src={edgePoster} alt="/" />
          <h3 className='absolute top-[-2%] group-hover:top-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100  right-0 p-4 text-white font-semibold bg-gray-600/60 rounded-bl-lg rounded-tr-lg'>New Release!</h3>
          <div className='absolute top-0 h-full w-full bg-black/20 opacity-100 group-hover:opacity-0 duration-300'/>
        </div>
        <div className='relative group mx-auto md:mx-0 group rounded-lg cursor-pointer hover:scale-105 duration-300 ease-in-out animate-pulse hover:animate-none'>
          <img className='duration-300 rounded-lg h-[600px]' src={mortalPoster} alt="/" />
          <h3 className='absolute top-[-2%] group-hover:top-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100  right-0 p-4 text-white font-semibold bg-gray-600/60 rounded-bl-lg rounded-tr-lg'>Coming Next Year!</h3>
          <div className='absolute top-0 h-full w-full bg-black/20 opacity-100 group-hover:opacity-0 duration-300'/>
        </div>

    </div>
    

    </div>
  )
}

export default Featured

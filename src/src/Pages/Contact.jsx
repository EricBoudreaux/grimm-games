import React from 'react'

import { BsChevronRight } from 'react-icons/bs'

import 'animate.css';

import Socials from '../Components/Socials'



const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto animate__animated animate__slideInUp'>

<div className='flex justify-center px-4'>

      <div className=''>
        <h1 className='text-white text-[32px] text-center mb-12'>Questions?</h1>
        <div className=''>
          <form className='flex flex-col' action="">
            <div className='flex justify-center gap-2 my-1'>
              
                <input className='basis-1/2 p-2 w-60 outline-none' type='text' placeholder='First Name'></input>
              
                <input className='basis-1/2 p-2 w-60 outline-none' type='text' placeholder='Last Name'></input>
            </div>
            <div className='flex justify-center my-1'>
              <input className='p-2 w-full outline-none' type='email' placeholder='Email'></input>
            </div>
            <div className='flex justify-center my-1'>
              <textarea className='w-full p-2' rows={4} resize='false' placeholder='Whatsup?' />
            </div>
            <button className='bg-white h-10 w-full flex justify-center my-1'>
        <BsChevronRight size={35}/>
      </button>
          </form>
        </div>
      </div>
      </div>
      <div className='flex justify-center mb-12'>
      <Socials />
    </div>
    </div>
  )
}

export default Contact

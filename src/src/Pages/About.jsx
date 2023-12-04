import React from 'react'

import aboutPic from '../Assets/about_pic.png'

import { BsGithub, BsDiscord, BsTwitch } from 'react-icons/bs'
import { FaItchIo } from 'react-icons/fa'

import 'animate.css';
import Socials from '../Components/Socials';



const About = () => {
  return (
    <div className='px-12 animate__animated animate__backInUp'>
      <div className='flex  justify-around items-end md:items-start'>
        <div className='text-left basis-2/3 md:ps-10 lg:ps-36'>
          <h2 className='text-white  font-semibold'>Hi! I'm Ez</h2>
          <p className='text-[16px] md:mb-4'>I like video games, and coding, and movies, andd music, and playing music and reading and learning new things..</p>
          <div className=' mt-12 hidden md:inline'>
            <p className='text-[22px] my-4 text-white'>But more than anything, I like stories. </p>
            <p className='text-[16px]'>That's what led me to crafting my own game company, Grimm Games! It's a beautiful mixture of story and games, of technology and lore. I've been writing some of the stories I plan to tell since I was a boy, and I've finally gained the skills needed to bring them to life through an interactive and exciting medium. I really hope you appreciate my story telling as much as I appreciate you listening. :) </p>
            <Socials />
            <p className='mt-12 text-lg'>Man cannot discover new oceans unless he has the courage to lose sight of the shore.
</p>
            <small className='ms-2 text-[#777777]'>-Andre Gide</small>

          </div>

        </div>
        <div className='align-bottom basis-1/3'>
          <img className='' src={aboutPic} alt="/" />

        </div>
        
      </div>
      <div className=' mt-6 md:hidden'>
      <p className='text-[22px] my-4 text-white'>But more than anything, I like stories. </p>
      <p className='text-[16px]'>That's what led me to crafting my own game company, Grimm Games! It's a beautiful mixture of story and games, of technology and lore. I've been writing some of the stories I plan to tell since I was a boy, and I've finally gained the skills needed to bring them to life through an interactive and exciting medium. I really hope you appreciate my story telling as much as I appreciate you listening. :) </p>
      <Socials />

            <p className='mt-12 md:hidden text-[#777777] flex text-lg'>Man cannot discover new oceans unless he has the courage to lose sight of the shore.
            </p>
            <small className='ms-2 pb-12 text-[#777777]'>-Andre Gide</small>
            </div>
    </div>
  )
}

export default About

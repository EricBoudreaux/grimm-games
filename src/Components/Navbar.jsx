import React from 'react'

import { Link } from 'react-router-dom'

import 'animate.css';


// import { BsDiscord } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='pt-24 px-20 pb-4 animate__animated animate__slideInDown' >
        <div className='md:flex items-end'>
 
                <div className='leading-[45px] pb-2 basis-1/3 flex flex-col items-center'>
                <Link to={'/'}>
                    <h1 className='text-[54px]'>GRIMM</h1>
                    <h1 className='text-[54px]'>GAMES</h1>
            </Link>

                </div>
            <div className='text-white basis-2/3'>

                <ul className='flex justify-center gap-2'>
                    <li className='text-[18px] lg:text-[24px] p-4 border-2 border-[var(--black)] hover:border-[var(--red)] duration-300 hover:text-[var(--red)] cursor-pointer'>
                        <Link to={'/about'} >
                            <a  href="/">ABOUT</a>
                        </Link>
                    </li>
      
                    <li className='text-[18px] lg:text-[24px] p-4 border-2 border-[var(--black)] hover:border-[var(--red)] duration-300 hover:text-[var(--red)] cursor-pointer'>
                        <Link to={'/games'} >
                            <a href="/">GAMES</a>
                        </Link>
                    </li>
                    <li className='text-[18px] lg:text-[24px] p-4 border-2 border-[var(--black)] hover:border-[var(--red)] duration-300 hover:text-[var(--red)] cursor-pointer'>
                        <Link to={'/blog'} >
                            <a href="/">BLOG</a>
                        </Link>
                    </li>
                    <li className='text-[18px] lg:text-[24px] p-4 border-2 border-[var(--black)] hover:border-[var(--red)] duration-300 hover:text-[var(--red)] cursor-pointer'>
                        <Link to={'/contact'} >
                            <a href="/">CONTACT</a>
                        </Link>
                        
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}
// https://discord.gg/Ut2fEXUgV3
export default Navbar

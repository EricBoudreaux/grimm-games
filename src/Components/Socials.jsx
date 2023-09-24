import React from 'react'

import { BsGithub, BsDiscord, BsTwitch } from 'react-icons/bs'
import { FaItchIo } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='text-white flex gap-4 mt-12'>
        <a target='_blank' href="https://github.com/EricBoudreaux" >
            <BsGithub className='hover:text-[var(--red)] hover:scale-110 duration-300 ease-in-out' size={30}/>
        </a>
        <a target='_blank' href="https://www.twitch.tv/lmfaoateric" >
            <BsTwitch className='hover:text-[var(--red)] hover:scale-110 duration-300 ease-in-out' size={30}/>
        </a>
        <a target='_blank' href="https://discord.gg/Ut2fEXUgV3" >
            <BsDiscord className='hover:text-[var(--red)] hover:scale-110 duration-300 ease-in-out' size={30}/>
        </a>
        <a target='_blank' href="https://ericyboudreaux.itch.io/" >
            <FaItchIo className='hover:text-[var(--red)] hover:scale-110 duration-300 ease-in-out' size={30}/>
        </a>
    </div>
  )
}

export default Socials

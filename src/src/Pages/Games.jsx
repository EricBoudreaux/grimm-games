import React from 'react'

import EdgeVid from '../Assets/Edge 60.mp4'
import DreamVid from '../Assets/Dream 30.mp4'


const Games = () => {
  return (
    <div>
      <h2 className='text-white text-center font-semibold mb-8'>Games</h2>
      <div className='mx-20 md:mx-40'>

        <div className='flex flex-col-reverse lg:flex-row gap-12'>
          <div className='basis-1/2'>
          <h3 className='text-white border-b-4 flex justify-end pb-4 text-3xl font-semibold text-end'>Edge of Reality</h3>

          <p className='text-end text-[16px] lg:text-[18px] mt-12 my-4'>
          James enters an elaborate virtual reality machine to rescue its creator. He must navigate a fantasy game universe, uncover hidden secrets, and rally unlikely allies to save worlds both <strong>virtual</strong> and <strong>real</strong>.
          </p>
          <p className='text-end my-4'>
            <h3 className='text-white'>Two Chapters Available!</h3>
          </p>

          <div className='flex justify-end mt-12'>
            <button className='me-2 text-[14px] uppercase lg:text-[20px] p-4 border-2 border-white text-white hover:border-[var(--red)] duration-300 hover:text-[var(--red)] cursor-pointer'>
              <a  href="/">More Info</a>
            </button>
            <button className='ms-2 text-[14px] uppercase lg:text-[20px] p-4 border-2 border-white text-white hover:border-[var(--red)] duration-300 hover:text-[var(--red)] cursor-pointer'>
              <a  href="/">Download</a>
            </button>
          </div>

          </div>
          <div className='basis-1/2'>
            <video src={EdgeVid} loop autoPlay height='500'  type="video/mp4" />
          </div>
        </div>


        <div className='flex flex-col-reverse lg:flex-row-reverse gap-12 mt-24'>
          <div className='basis-1/2'>
          <h3 className='text-white border-b-4 flex justify-end pb-4 text-3xl font-semibold text-end'>Dream Reign</h3>

          <p className='text-end text-[16px] lg:text-[18px] mt-12 my-4'>
          Adventure into young Harvey's dreams as he has to fight against the evil being known Emperor Nightmarion, and save the dream world from becoming apart of the Nightmarion Empire.
          </p>
          <p className='text-end my-4'>
            <h3 className='text-white'>Coming Soon!</h3>
          </p>

          <div className='flex justify-end mt-12'>
            <button className='me-2 text-[14px] uppercase lg:text-[20px] p-4 border-2 border-white text-white hover:border-[var(--red)] duration-300 hover:text-[var(--red)] cursor-pointer'>
              <a  href="/">More Info</a>
            </button>
            <button className='ms-2 text-[14px] uppercase lg:text-[20px] p-4 border-2 border-white text-white hover:border-[var(--red)] duration-300 hover:text-[var(--red)] cursor-pointer'>
              <a  href="/">Download</a>
            </button>
          </div>

          </div>
          <div className='basis-1/2'>
            <video src={DreamVid} loop autoPlay height='500'  type="video/mp4" />
          </div>
        </div>

      </div>
  

    </div>
  )
}

export default Games

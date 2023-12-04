import React from 'react'

import Featured from "../Components/Featured";
import EmailInput from "../Components/EmailInput";
import Socials from '../Components/Socials';



const Home = () => {
  return (
    <div className="bg-[var(--black)]">

    <Featured />
    <div className="flex justify-center">
      <EmailInput />
    </div>
    <div className='flex justify-center mb-12'>
      <Socials />
    </div>

  </div>
  )
}

export default Home

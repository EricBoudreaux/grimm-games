import React from 'react'

import { BsChevronRight } from 'react-icons/bs'

const EmailInput = () => {
  return (
    <div className='my-12 flex'>
      <input className='p-2 w-60 outline-none' type='email' placeholder='Enter email for updates '></input>
      <button className='bg-white h-10 w-8 ms-1'>
        <BsChevronRight size={35}/>
      </button>
    </div>
  )
}

export default EmailInput

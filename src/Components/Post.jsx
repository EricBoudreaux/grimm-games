import React from 'react'

import blogPic from '../Assets/blog-1.png'

import { FaCrown } from 'react-icons/fa'

import { AiOutlineHeart } from 'react-icons/ai'

import 'animate.css';


const Post = () => {
  return (
    <div className='w-full border-2 border-gray-500 animate__animated animate__backInLeft'>
      <div className=' text-white'>
        <img className='w-full h-60 object-cover' src={blogPic} alt="" />
        <div className='flex gap-2 mt-4 mx-6'>
            <small>Ez</small>
            <FaCrown size={15} className='text-yellow-300'/>
        </div>
        <small className='mx-6'>Sep 23, 2023</small>
   
      </div>
      <div className='text-white pe-24 my-12 border-b mx-6'>
        <h2>Dev Diary #1 - First!</h2>
        <p className='pb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum aliquid nobis voluptates natus ipsum eius soluta dolores. Vel, minus.</p>
      </div>
      <div className='text-white mx-6 mb-4 flex justify-between'>
        <small>27 views 0 Comments</small>
        <AiOutlineHeart />
      </div>
    </div>
  )
}

export default Post

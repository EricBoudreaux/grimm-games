import React from 'react'
import Post from '../Components/Post'
import Socials from '../Components/Socials'

import { Link } from 'react-router-dom'


const Blog = () => {
  return (
    <div>
      <h2 className='text-white text-center font-semibold mb-8'>Blog</h2>

      <div className='flex justify-center '>
        <div className='grid lg:grid-cols-2 px-12 md:px-24 gap-4 '>
          <Link to={'/blogpost1'}>
            <Post />
          </Link>

        </div>

      </div>
      <div className='flex justify-center mb-12'>
      <Socials />
    </div>
    </div>
  )
}

export default Blog




'use client'

import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Textboxes from '@/app/components/Textboxes'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className='h-screen w-screen bg-black text-white flex items-center justify-center'>
      <div className='flex flex-col items-center text-center'>
        <p className='text-[#e63946] text-xl sm:text-2xl mb-2'>
          Hello World!, I'm
        </p>
        <h1 className='text-5xl sm:text-7xl font-bold mb-6'>
          Oscar Cárdenas
        </h1>

        <Textboxes fit center variant='default' size='lg' className='mb-7'>
          Robotics & AI Software Engineer
        </Textboxes>

        <Textboxes fit center variant='default' size='lg' className='mt-8'>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-[#00008B] hover:border-[#00008B]'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-9' />
              </span>
            </button>
          </Link>
        </Textboxes>
      </div>
    </div>
  )
}

export default Home

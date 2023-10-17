import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-2 border-red-400 py-14 px-10'>

      <div className='flex justify-between flex-wrap w-full md:w-[80%] mx-auto'>

        <div className='md:w-[40%] w-full flex gap-20'>
          <ul className='text-purple-500 leading-10'>
            <li>About me</li>
            <li>My tech stack</li>
            <li>My projects</li>
          </ul>

          <ul className='text-purple-500 leading-10'>
            <li>About me</li>
            <li>My tech stack</li>
            <li>My projects</li>
          </ul>

        </div>

        <div className='md:w-[50%] w-full'>
          <h3 className='font-bold mb-4'>Join My NewsLetter</h3>
          <p className='mb-4'>
            Join my newsletter, and get a bi-montly update(beginning from June 2023) of awesome 
            software development trends, news, tutorials, and more - to help you grow your career in 
            full-stack web development, technical writing, and blockchain development.
          </p>
          <div className='flex w-full border-2 border-red-400'>
            <input type="email" placeholder='Enter Email' className='px-5 border-b-2 w-[80%]'/>
            <button className='bg-purple-500 text-white py-2 px-8 font-semibold'>Join In</button>
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer
import React from 'react'

const Hero = () => {
  return (
    <div className='h-full w-full my-10 flex flex-col items-center'>

      <div className='rounded-full h-[50%] w-[70%] md:w-[15%] shadow-md border-2 border-purple-500'>
        <img src="./assets/avatar.jfif" className='rounded-full h-[80%] w-full object-cover' alt="" />
      </div>

      <div className='text-center flex flex-col items-center h-full'>
        <h1 className='font-bold text-xl md:text-2xl py-5 px-5'>I'm Adewale Tosin Samuel</h1>
        <p className='px-5 text-lg'>I am a full-stack developer, a blockchain developer, and a technical writer.</p>
        <div className='mt-4 flex items-center gap-5'>
          <a href="https://www.twitter.com/tosmel2" target='_blank' className='rounded-full py-2 px-2.5 bg-slate-300'><i class="fa-brands fa-x-twitter fa-lg"></i></a>
          <a href="https://www.github.com/tosmel2" target='_blank' className='rounded-full py-2 px-2.5 bg-slate-300'><i class="fa-brands fa-github fa-lg"></i></a>
          <a href="https://www.linkedin.com/in/tosmel2" target='_blank' className='rounded-full py-2 px-2.5 bg-slate-300'><i class="fa-brands fa-linkedin fa-lg"></i></a>
        </div>
      </div>

    </div>
  )
}

export default Hero
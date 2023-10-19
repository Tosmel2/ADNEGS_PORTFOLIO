import React from 'react'
import ProjectSection from './utils/ProjectSection'

const Project = () => {
  return (
    <div>
      <h1 className='text-center font-extrabold text-3xl'>Projects</h1>
      <p className='text-center py-5 text-xl'>A selection of some of my projects</p>
      <div className='flex justify-center w-full mb-5'>
        <div className='text-center rounded-t-lg w-[30%] bg-gray-200 py-3 px-5'>
          <a href="#" className='py-3 px-5 bg-blue-500 rounded-s-md font-semibold text-white'>Frontend Projects</a>
          <a href="#" className='py-3 px-5 rounded-e-md bg-red-500 font-semibold text-white'>FullStack Projects</a>
        </div>
      </div>
      

      <ProjectSection 
        img='/assets/deeco-banner.webp'
        title='Deeco.'
        contents='Deeco is a blockchain e-commerce platform. It powers e-commerce experiences but with cryptocurrency based payments. It is a solo-project that I built as my hackathon submission for the Polygon Africa web3/blockchain bootcamp of 2022. Deeco was among the winning-projects in my category of the hackathon. To fully explore the live project, please use a PC.'
      />
      <ProjectSection 
        img='/assets/journie-banner.webp'
        title='Journie.'
        contents="Journie is a productivity app for note taking, scheduling and task management, and journaling. It is a fullstack app built with the MERN stack and so much more. It's a project I am excited about especially considering the awesome features that I hope to roll into subsequent versions of the app.
        The project is live currently with a good number of sign ups."
      />
      <ProjectSection 
        img='/assets/deeco-banner.webp'
        title='Chabod_x.'
        contents="Chabod_x is a massive fullstack blog-folio web-app. It is an opensource project that I am building to give professionals the portfolio management tool that I never got until now. The project is a packed solution. It consist of a portfolio website, a custom blog, a blog manager, a newsletter manager, and other admin functionalities. Chabod_x is what powers this(my) portfolio website that you're currently on."
      />
    </div>
  )
}

export default Project
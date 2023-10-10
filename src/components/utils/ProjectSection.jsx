import React from 'react'

const ProjectSection = (props) => {
  const {img, title, contents} = props
  return (
    <div className='w-full py-8'>
      <div className='flex flex-wrap justify-between w-[90%] md:w-[80%] mx-auto mt-5 md:mt-0'>
        <div className='left-card w-full md:w-[48%] shadow-lg mb-5 md:mb-0'>
          <img src={img} alt="deeco banner" />
        </div>

        <div className='right-card w-full md:w-[48%] text-center md:text-start'>
          <h1 className='font-extrabold text-2xl'>{title}</h1>
          <p>{contents}</p>
          <button className='bg-purple-500 text-white p-2 my-5'>NextJs/ReactJs</button>
          <div className='mt-5'>
            <a href="" className='rounded-full p-3 mr-4 bg-slate-300'><i class="fa-brands fa-github fa-lg"></i></a>
            <a href="" className='rounded-full p-3 bg-slate-300'><i class="fa-solid fa-link fa-lg"></i></a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProjectSection

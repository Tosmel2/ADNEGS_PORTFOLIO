import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center py-10 md:py-20 h-full'>
      <h1 className='text-center font-extrabold text-2xl md:text-3xl'>Let{"'"}s Connect</h1>

      <div className='md:flex md:justify-between items-center h-full w-full md:w-[50%] py-10'>

        <div className='text-center mb-8 md:mb-0'>
        <i class="fa-solid fa-mobile-screen fa-lg"></i>
          <p className='py-3'>08068957966</p>
          <p>08068957966</p>
        </div>

        <div className='text-center'>
          <div>
            <i class="fa-regular fa-envelope fa-lg"></i>
          </div>

          <div className='py-3'>
            <a href="mailto:example@example.com" className='text-purple-700'>adewaletosin0808@gmail.com</a>
          </div>

          <div className='flex gap-3 justify-center'>
            <a href="" className='rounded-full py-1 px-2 bg-slate-300'><i class="fa-brands fa-github"></i></a>
            <a href="" className='rounded-full py-1 px-2 bg-slate-300'><i class="fa-solid fa-link"></i></a>
          </div>
        </div>

      </div>

      <div className='w-[80%] md:w-[35%]'>
      <h1 className='text-center font-extrabold md:text-2xl text-xl py-5'>Drop a Message</h1>

        <form action="/submit_form" method="post">

          <div className='text-center mb-3'>
            <label for="name">Name</label>
            <div className='my-2'>
              <input type="text" id="name" name="name" className='w-full border border-gray-200 p-3 outline-purple-300' required /><br /><br />
            </div>
          </div>
          
          <div className="text-center mb-3">
            <label for="email">Email</label>
            <div className=' my-2'>
              <input type="email" id="email" name="email" className='border border-gray-200 p-3 w-full outline-purple-300' required /><br /><br />
            </div>
          </div>

          <div className="text-center">
            <label for="message">Message</label><br />
            <textarea id="message" name="message" className='my-2 border border-gray-200 resize-none w-full outline-purple-300' rows="6" cols="60" required></textarea><br /><br />
          </div>
          
          
          <div className='bg-purple-600 p-3 text-center text-white font-medium rounded cursor-pointer'>
            <input type="submit" value="Submit Message" className='cursor-pointer' />
          </div>
      </form>       
      </div>

    </div>
  )
}

export default Contact
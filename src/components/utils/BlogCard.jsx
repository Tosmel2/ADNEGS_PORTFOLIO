import React from 'react'

const BlogCard = (props) => {
  return (
    <div className='lg:w-[48%] w-full h-full md:min-h-64 py-3 px-4 border border-gray-200 my-3 flex flex-col justify-center rounded-md shadow'>
      {/* <div className='border border-gray-700 p-3'> */}
        <h3 className='text-xl font-semibold'>{props.heading}</h3>
        <p className='text-center py-2'>{props.para}</p>
        <a href="/" className='text-purple-700 font-bold pb-3'>{props.link}</a>
      {/* </div> */}
    </div>
  )
}

export default BlogCard
import React from 'react'

const ReuseButton = (props) => {
  const {text, className} = props
  return (
    <>
      <button className={className}>{text}</button>
      {/* <button className='bg-purple-500 text-white p-2 my-5'>{text}</button> */}
    </>
  )
}

export default ReuseButton
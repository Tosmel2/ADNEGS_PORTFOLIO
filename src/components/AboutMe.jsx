import React from 'react'
import ReuseButton from './utils/ReuseButton'

const AboutMe = () => {
  return (
    <div className='w-full py-16'>
      <div className='w-[90%] md:w-[80%] mx-auto md:px-10 px-2'>
        <h1 className='text-center font-bold text-2xl md:text-3xl pb-5'>About Me</h1>
        <div className='leading-10 text-center'>
        <p>I am a highly gifted and intelligent Nigerian, who is passionate about building ground-breaking inventions with code.</p>
        <p>I am currently a fullstack Javascript/Typescript developer(ReactJs/NextJs + NodeJs), a blockchain(Solidity) developer, and a technical writer.
            I am also currently getting a hand on devOps and cloud-computing.
        </p>
        <p>In recent times, I am becoming highly interested in tech enterpreneurship and tech mentorship. I am currently building my first startup - Jobjo, along side <span className='underline'>Zoe collectives</span> - mother company to a fleet of sub-startups.</p>
        <p>I love God a lot, and people do mean a lot to me as well.</p>
        <p>Below,<span className='underline italic'> are some key technologies</span> that I am familiar with:</p>

        <ReuseButton
          text="HTML"
          className="bg-purple-700 text-sm text-white py-1 px-3 mr-3"
        />
        <ReuseButton
          text="CSS"
          className="bg-purple-700 text-sm text-white py-1 px-3"
        />

        <p>And more...</p>

        <p>I am currently open and available for front-end development, back-end development, full-stack development, blockchain development, or any technical writing roles.</p>

        <p>I will definitely be a strong addition to any team for any of the above mentioned roles. 
          I will be very glad to contribute my experience towards the success of the team. Projects
        </p>

      </div>

      </div>
    </div>
  )
}

export default AboutMe
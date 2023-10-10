import React from 'react'
import BlogCard from '../components/utils/BlogCard'

const Blog = () => {
  return (
    <div className='border-2 border-emerald-400 w-full'>
        <h1 className='text-3xl font-extrabold text-center'>Read My Blog</h1>
      <div className='mx-auto md:w-[80%] w-[90%] text-center flex flex-wrap justify-between items-center'>
        <BlogCard
          heading="Reflecting on my best dev year yet. (Dev Retro 2022)"
          para ="2022 was an awesome year for me - I truly won't be wrong to call it my best dev year ever. I welcome you to this interesting read where I'll take you through how awesome 2022 was for me."
          link="Read post"
        />

        <BlogCard
          heading="Finish Celebrating Hacktoberfest 2022 by contributing to Reactify."
          para ="earning to fix bugs and handle problems, are special arts that every developer/software engineer must master. While some might argue that bug handling and problem-solving cannot be mastered, I beg to differ somehow."
          link="Read post"
        />

        <BlogCard
          heading="7 Bug Handling And Problem-solving Tips For Developers."
          para ="2022 was an awesome year for me - I truly won't be wrong to call it my best dev year ever. I welcome you to this interesting read where I'll take you through how awesome 2022 was for me."
          link="Read post"
        />

        <BlogCard
          heading="How to build a full-stack blog with NextJS(React JS) and contentful CMS."
          para ="In this two-article series, I will walk you through the process of building a complete/full-stack blog with one of such CMS platforms – Contentful. This is the first Article in the series."
          link="Read post"
        />

        <BlogCard
          heading="How to build a full-stack blog with NextJS(React JS) and contentful CMS(Part 2)."
          para ="CMS platforms are powerful options that help front-end developers build amazing products and services without even a single line of backend code. This article is the second part of a 2-part build-article series that involves building an amazing blog using one of such awesome CMS platforms called Contentful ."
          link="Read post"
        />

        <BlogCard
          heading="How to build a complete/full-stack E-commerce with HTML/CSS and Django."
          para ="In this article series, I will work you through how to build a fully funtional e-commerce website with vanilla CSS and a python framework Django ."
          link="Read post"
        />
      </div>
    </div>
  )
}

export default Blog
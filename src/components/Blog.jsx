import React from 'react'
import {Blogs} from '../constants'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div id='blogs' className='bg-gradient-to-b from-[#383838] to-[#616161] flex flex-col justify-start gap-[70px] items-center pt-[10px] pb-[50px]'>
      <h1 className='text-[white] blogs text-center text-[70px] font-[700]'>Blogs</h1>
      <div className='flex justify-center flex-wrap gap-[70px]'>
      {
        Blogs.map((pj,index)=>(
          <div key={index}>
            <BlogCard blogimage={pj.image} blogname={pj.name} blogdes={pj.description} bloglink={pj.link}/>
          </div>
        ))
      }
      </div>
    </div>

    
  )
}

export default Blog
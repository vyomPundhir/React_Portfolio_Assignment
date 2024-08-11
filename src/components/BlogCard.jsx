import React from 'react'
import Tilt from 'react-parallax-tilt'
// import {Blogs} from '../constants'
import clip from "../assets/clip.svg"

const BlogCard = ({blogimage, blogdes, blogname, bloglink}) => {
  return (
    <Tilt>
      <div 
      // style={boxShadowStyle}
      className='card w-[320px] bg-[#181818] pb-4 border-[2px] border-[white] shadow-[0px_0px_17px_1px_#c2c2c2] hover:shadow-[0px_0px_30px_10px_#c2c2c2] transition ease-in-out duration-500'>
        <figure className="px-5 pt-10 pb-1">
          <img src={blogimage} alt="tech" className="rounded-xl w-[300px] h-[200px]" />
        </figure>

        <div className='flex absolute z-10 mt-5 ml-[30px] left-3/4'>
        <a href={bloglink} target="_blank" className='bg-[black] border-2 px-[3px] py-[3px] rounded-full'>
        <img src={clip} alt="clip" className=' w-[25px] rounded-full bg-[black]  cursor-pointer '/>
        </a>
        </div>

        <div className="flex justify-center">
          <h2 className="text-[20px] font-[700] pt-[20px] pb-[10px] w-[300px] text-center">{blogname}</h2>
        </div>
        <div className="items-center text-center">
          <div className="text-[17px] font-[500] text-[#a9aaaa] pb-5">{blogdes}</div>
        </div>
      </div>
    </Tilt>
  )
}

export default BlogCard
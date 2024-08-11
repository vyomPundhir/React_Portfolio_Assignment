import React from 'react'
import Tilt from 'react-parallax-tilt';
import github from "../assets/github.svg"
import clip from "../assets/clip.svg"

const Card = ({title, des, tags, git, link, image}) => {
  return (
  <Tilt>
    <div className="card w-[330px] border-[2px] border-[white] shadow-[0px_0px_17px_1px_#c2c2c2] hover:shadow-[0px_0px_30px_10px_#c2c2c2] transition ease-in-out duration-500 bg-[#181818]">
      <figure className="px-10 pt-10">
        <div>
          <img src={image} alt="img" className="rounded-xl" />
        </div>
      </figure>

      <div className='flex flex-row items-center gap-2 absolute z-10 mt-5 left-3/4'>
        <a href={git} target="_blank">
          <img src={github} alt="github" className='w-[38px] rounded-full border-2 cursor-pointer'/>
        </a>
      
        <a href={link} target="_blank" className='bg-[black] border-2 px-[3px] py-[3px] rounded-full'>
          <img src={clip} alt="clip" className=' w-[25px] rounded-full bg-[black]  cursor-pointer '/>
        </a>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-[20px]">{title}</h2>
        <p className='text-[17px] text-[#afaeaf]'>{des}</p>
        <div className="card-actions">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[15px] font-[700]`}
            style={{ color: tag.color }}
            >
              {`#${tag.name}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Tilt>  )
}

export default Card
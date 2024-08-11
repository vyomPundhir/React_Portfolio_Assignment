import React from 'react'
import Tilt from 'react-parallax-tilt';
// import {techStackNames} from '../constants';

const CardTech = ({techimage, techcontent, techcolor}) => {
  
    const boxShadowStyle = {
      boxShadow: `0px 0px 30px 3px ${techcolor}`,
    }

  return (
    <Tilt>
      <div 
      style={boxShadowStyle}
      className='card w-50 bg-[#212121] pb-4 s'>
        <figure className="px-5 pt-3 pb-1">
          <img src={techimage} alt="tech" className="rounded-xl w-[150px] h-[150px]" />
        </figure>
        <div className="items-center text-center">
          <h2 className="text-[25px] font-[700]">{techcontent}</h2>
        </div>
      </div>
    </Tilt>
  )
}

export default CardTech
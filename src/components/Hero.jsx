import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Hello from "../assets/Hello.gif"
import Cube from './Cube'

const Hero = () => {
  return (
    <div className='text-white justify-center items-center flex flex-col bg-gradient-to-b from-[#383838] to-[#9f9f9f] hero pt-[100px] pb-[40px]'>

      <section className='text-[white] w-full flex flex-col md:flex-row justify-between md:pl-[110px]'>

        <div className='left md:basis-3/5 flex flex-col justify-center items-center gap-[40px] h-auto'>

          <img src={Hello} alt="" className='hello w-[150px] h-[80px] rounded-3xl hidden'/>

          <h1 className='text-[28px] md:text-[53px] font-[800] text-[#212121] vyom'>Hi, I'm Vyom...</h1>

          

          <section className='flex items-center gap-4 md:gap-[20px]'>

            <div className='text-[22px] font-[500] md:text-[26px] text-center md:text-left'>
              I develop <span className='text-[#212121] font-[700]'>User Interfaces, APIs & Web Applications.</span><br/>
              <div className='mt-[20px] md:mt-[40px] py-[10px] px-[10px] text-[15px] border-[1px] rounded-md border-[black] bg-gradient-to-br from-[#121212] to-[#2f2f2f]'>I am a skilled developer with experience in JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I am quick learner and collaborate closely with clientsto create efficient, scalable, and user-friendly solutions that solve real-world problems.</div>
            </div>

          </section>

          <button className='hover:border-[2px] hover:border-[#c2c2c2] shadow-[0px_0px_30px_0px_#a3a3a3] font-[700] md:w-[120px] md:h-[40px] w-[100px] h-[30px] text-[white] bg-[#212121] rounded-[5px] outline-none cursor-[pointer] hover:shadow-[0px_0px_30px_5px_white] transition ease-in-out duration-500'><a href='https://github.com/vyomPundhir' target="_blank">Learn more</a></button>

          

        </div>

        <div className='right md:basis-2/5 w-full md:w-auto mt-10 md:mt-0'>

          <Canvas camera={{fov:25, position: [5,5,5]}}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]}/>
            <Cube/>
          </Canvas>

        </div>

      </section>

    </div>
  )
}

export default Hero
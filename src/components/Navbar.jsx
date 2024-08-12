import React from 'react'
import upArrow from "../assets/upArrow.png"
import burger from "../assets/burger.png"

const Navbar = () => {
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div id='navbar' className='px-[20px] py-[15px] bg-[black] flex flex-row justify-center items-center w-full'>

      <div className='flex flex-row justify-between items-center w-full'>

        <section className='flex flex-row justify-center items-center gap-[40px]'>

          <a href="/" className='font-[500] text-[25px] vyom text-[#212121]'>VYOM</a>

          <section className='flex flex-row justify-center items-center gap-[20px] cursor-pointer text-[#d3d1d1] font-[500] menu'>

            <button 
            onClick={()=>scrollToSection('about')}
            className=' hover:text-[black] hover:bg-[#c2c2c2] hover:font-[500] hover:shadow-[0px_0px_30px_0px_#a3a3a3] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>About</button>

            <button 
            onClick={()=> scrollToSection('techstack')}
            className=' hover:text-[black] hover:bg-[#c2c2c2] hover:font-[500] hover:shadow-[0px_0px_30px_0px_#a3a3a3] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Tech Stack</button>

            <button 
            onClick={()=>scrollToSection('projects')}
            className=' hover:text-[black] hover:bg-[#c2c2c2] hover:font-[500] hover:shadow-[0px_0px_30px_0px_#a3a3a3] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Projects</button>

            <button 
            onClick={()=>scrollToSection('blogs')}
            className=' hover:text-[black] hover:bg-[#c2c2c2] hover:font-[500] hover:shadow-[0px_0px_30px_0px_#a3a3a3] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Blogs</button>

            <button 
            onClick={()=>scrollToSection('contactus')}
            className='hover:text-[black] hover:bg-[#c2c2c2] hover:font-[500] hover:shadow-[0px_0px_30px_0px_#a3a3a3] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Contact Us</button>

          </section>

        </section>
          
        <button className='btn shadow-[0px_0px_30px_0px_#5b5c5b] mt-[-5px] font-[700] px-[10px] text-md text-[black] bg-[#c2c2c2] hover:bg-[#c2c2c2] rounded-[5px] outline-none cursor-[pointer] hover:shadow-[0px_0px_30px_5px_#a3a3a3] transition ease-in-out duration-500'>
          <a href="https://drive.google.com/file/d/1E1z1tfGPIfg7twVfCAvFXFrFlso8fYWt/view?usp=drive_link" target="_blank">Download Resume</a>
        </button>
      </div>

      <img src={burger} alt="" className='w-[40px] burger pr-[5px] hidden'/>
      <button
          onClick={()=> scrollToSection('navbar')}
          className='nav-arrow w-16 h-16 fixed z-10 bottom-12 right-12'>
            <img src={upArrow} alt="up arrow" />
      </button>
    </div>
  )
}

export default Navbar
import React from 'react'
import profile from '../assets/profile.gif'

const Who = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='about' className='pt-[10px] pb-[50px] box-border h-auto text-white flex justify-center bg-gradient-to-t from-[#383838] to-[#9f9f9f]'>
      <section className='text-[white] min-h-screen  flex flex-row justify-center items-center gap-[50px]'>

        <div className='left-who flex-1 flex justify-center items-center mt-[80px]'>
          <img src={profile} alt="profile" className='w-[400px] h-[400px] rounded-full mt-[30px]'/>
        </div>

        <div className='px-[30px] right-who flex-1 flex flex-col justify-center
        gap-[40px] items-center'>
          <h1 className='about text-center text-[74px] font-[700] text-[#000000]'>About Me</h1>
          <div className='text-[20px] text-[#e8eaea] flex flex-col items-center gap-[30px]'>
            <img src={profile} alt="profile" className='employee w-[280px] h-[280px] rounded-full mt-[30px] hidden'/>
            <div className='border-[1px] font-[500] border-[#0a0a0a] bg-gradient-to-br from-[#121212] to-[#2f2f2f] text-[white] px-8 py-4 rounded-[10px]'>I specialize in front-end web development, proficient in HTML5, CSS3, and TailwindCSS for crafting responsive and captivating interfaces.
            </div>

            <div className='border-[1px] font-[500] border-[#0a0a0a] bg-gradient-to-br from-[#121212] to-[#2f2f2f] text-[white] px-8 py-4 rounded-[10px]'>My JavaScript expertise enables me to create dynamic user experiences, coupled with mastery in ReactJS for building complex UIs.
            </div>

            <div className='border-[1px] font-[500] border-[#0a0a0a] bg-gradient-to-br from-[#121212] to-[#2f2f2f] text-[white] px-8 py-4 rounded-[10px]'>Currently, I'm learning backend development, using NodeJS, ExpressJS, and MongoDB to build robust server-side applications.
            </div>
          </div>
          <button 
          onClick={()=>scrollToSection('projects')}
          className='shadow-[0px_0px_30px_0px_#a3a3a3] hover:border-[2px] hover:border-[#c2c2c2] font-[700] w-[130px] h-[30px] text-[white] bg-[#212121] rounded-[5px] outline-none cursor-[pointer] hover:shadow-[0px_0px_30px_5px_white] transition ease-in-out duration-500'>See my work</button>
        </div>
      </section>
    </div>
  )
}

export default Who
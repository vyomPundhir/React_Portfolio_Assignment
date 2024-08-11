import React from 'react'
import {categoryNames, htmlCssProjects, tailwindProjects, reactjsProjects} from '../constants';
import { useState } from 'react';
import Card from './Card';

const Works = () => {

  const [project, setProject] = useState(htmlCssProjects)

  const handleClick = (projectType) => {
    if(projectType === 'HTML & CSS'){
      setProject(htmlCssProjects)
    }
    if(projectType === 'Tailwind CSS'){
      setProject(tailwindProjects)
    }
    if(projectType === 'React'){
      setProject(reactjsProjects)
    }
  }

  return (
    <div id='projects' className='bg-gradient-to-t from-[#383838] to-[#2e2d2d] w-full m-0  pb-[80px] box-border text-white snap-center'>

      <section className='flex flex-col gap-[70px] justify-center items-center'>

        <div className='projects text-[white] text-center text-[70px] font-[700]'>Projects</div>

        <div className="tech-btn flex justify-center items-center flex-wrap gap-[100px] pb-[18px]">

            {
              categoryNames.map((item)=>(
                <button 
                key={item.id} 
                onClick={()=> handleClick(item.title)}
                className='w-[300px] item py-3 text-[30px] text-center font-[700] cursor-pointer bg-[#181818] text-[#212121] relative hover:shadow-[0px_0px_30px_5px_#c2c2c2] focus:shadow-[0px_0px_30px_5px_#c2c2c2] rounded-2xl'>
                  {item.title}
                </button>
              ))
            }

        </div>

        <div className='flex flex-row justify-center items-center flex-wrap gap-20 '>
          {project.map((pj,index) => (
            <div key={index} >
              <Card title={pj.name} des={pj.description} git={pj.source_code_link} link={pj.live_link} image={pj.image} tags={pj.tags}/>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  )
}

export default Works
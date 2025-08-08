import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'


const projects=[
    {
        name:'Project 1',
        year:'March 2025',
        align:'right',
        image:'images/website-img-1.jpg',
        link:'#'
    },
    {
        name:'Project 2',
        year:'April 2025',
        align:'left',
        image:'images/website-img-2.jpg',
        link:'#'
    },
    {
        name:'Project 3',
        year:'June 2025',
        align:'right',
        image:'images/website-img-3.jpg',
        link:'#'
    },
    {
        name:'Project 4',
        year:'july 2025',
        align:'left',
        image:'images/website-img-4.jpg',
        link:'#'
    },
]

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <ProjectText/>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((proj,index)=>{
               return <SingleProject key={index} name={proj.name} year={proj.year} align={proj.align} image={proj.image} />

            })}
        </div>
    </div>
  )
}

export default ProjectMain
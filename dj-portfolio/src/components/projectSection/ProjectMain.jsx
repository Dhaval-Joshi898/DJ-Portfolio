import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'


const projects=[
    {
        name:'Green Cart',
        align:'right',
        image:'images/proj1-image.jpg',
        link:'https://github.com/Dhaval-Joshi898/greenCart'
    },
    {
        name:'DevTinder',
        align:'left',
        image:'images/website-img-2.jpg',
        link:'https://github.com/Dhaval-Joshi898/devTinder'
    },
    {
        name:'Netflix GPT',
        align:'right',
        image:'images/website-img-3.jpg',
        link:'#'
    },
    // {
    //     name:'Project 4',
    //     align:'left',
    //     image:'images/website-img-4.jpg',
    //     link:'#'
    // },
]

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <ProjectText/>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((proj,index)=>{
               return <SingleProject key={index} name={proj.name} year={proj.year} align={proj.align} image={proj.image} link={proj.link} />

            })}
        </div>
    </div>
  )
}

export default ProjectMain
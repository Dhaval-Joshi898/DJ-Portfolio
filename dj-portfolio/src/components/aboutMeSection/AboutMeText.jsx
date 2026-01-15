import React from 'react'
import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white text-lg text-justify'>I’m a Full-Stack Developer with a strong foundation in the MERN stack (MongoDB, Express, React, Node.js). I enjoy building end-to-end web applications with secure authentication, clean APIs, and responsive user interfaces.
            I’ve worked on multiple real-world projects including a developer networking platform, an online grocery store  and a Netflix-style application with AI-powered recommendations. Through these projects, I’ve gained hands-on experience with Redux Toolkit, JWT authentication, REST APIs, and database design.
            <br></br>
            I’m passionate about learning, writing clean code, and building products that solve real problems. Currently, I’m focused on improving my system design skills and growing as a full-stack engineer.</p>
        <Link to="projects" smooth={true} duration={500}spy={true} offset={-130}>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white '>My Projects</button>
        </Link>
    </div>
  )
}

export default AboutMeText
import React from 'react'
import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis esse, placeat cupiditate ipsum ratione saepe nemo cumque itaque numquam, quae earum at odit eius minus ipsam ullam odio voluptate quas nostrum doloremque modi eveniet inventore deleniti. Consequuntur quos deleniti alias mollitia doloribus distinctio nesciunt odit harum recusandae autem ipsa, quidem dignissimos voluptatibus voluptas ipsam perferendis saepe, facilis impedit soluta ducimus repellat ut suscipit enim. Doloribus debitis, quod animi saepe numquam tempore veritatis tempora perferendis excepturi? Hic iste, veritatis quos, dolores quae fugiat voluptate illum vel tempora, ad libero incidunt perspiciatis! Dolore impedit voluptates recusandae quibusdam ratione aliquid voluptate nemo?</p>
        <Link to="projects" smooth={true} duration={500}spy={true} offset={-130}>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white '>My Projects</button>
        </Link>
    </div>
  )
}

export default AboutMeText
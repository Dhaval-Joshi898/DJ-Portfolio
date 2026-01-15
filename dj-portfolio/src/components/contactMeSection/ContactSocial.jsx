import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link="http://github.com/Dhaval-Joshi898" Icon={FaGithub}/>
        <SingleContactSocial link="https://www.linkedin.com/in/dhaval-joshi-389a0a264" Icon={FaLinkedin}/>
        {/* <SingleContactSocial link="#" Icon={SiLeetcode}/>  */}

    </div>
  )
}

export default ContactSocial
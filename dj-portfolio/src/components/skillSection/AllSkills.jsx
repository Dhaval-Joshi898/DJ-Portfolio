import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "TailWindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "MongoDb",
    icon: DiMongodb,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
];

const AllSkills = () => {
  return <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
    {skills.map((items,index)=>{
       return <SingleSkill key={index} imgSvg={<items.icon/>} text={items.skill}/>
    })}
  </div>;
};
  
export default AllSkills;

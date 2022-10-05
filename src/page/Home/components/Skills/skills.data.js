import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandPython, TbBrandGithub } from "react-icons/tb";

export const skillsData = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={50} />,
    stars: 3,
  },
  {
    name: "React JS",
    icon: <FaReact size={50} />,
    stars: 2,
  },
  {
    name: "TypeScript",
    stars: 2,
    icon: <SiTypescript size={50} />,
  },
  {
    name: "Redux",
    stars: 2,
    icon: <SiRedux size={50} />,
  },
  {
    name: "Styled-Components",
    stars: 3,
    icon: <SiStyledcomponents size={60} />,
  },
  {
    name: "HTML",
    stars: 3,
    icon: <IoLogoHtml5 size={50} />,
  },
  {
    name: "CSS",
    stars: 3,
    icon: <IoLogoCss3 size={50} />,
  },
  {
    name: "Python",
    stars: 2,
    icon: <TbBrandPython size={50} />,
  },
  {
    name: "Git",
    stars: 3,
    icon: <TbBrandGithub size={50} />,
  },
  {
    name: "Firebase",
    stars: 3,
    icon: <SiFirebase size={50} />,
  },
  {
    name: "Figma",
    stars: 3,
    icon: <SiFigma size={50} />,
  },
];

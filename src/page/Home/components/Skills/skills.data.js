import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaStar } from "react-icons/fa";
import { TbBrandPython, TbBrandGithub } from "react-icons/tb";

export const skillsData = [
  {
    name: "Python",
    icon: <TbBrandPython />,
    description: [<FaStar />, <FaStar />],
  },
  {
    name: "HTML",
    icon: <IoLogoHtml5 />,
    description: [<FaStar />, <FaStar />, <FaStar />],
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 />,
    description: [<FaStar />, <FaStar />, <FaStar />],
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    description: [<FaStar />, <FaStar />, <FaStar />],
  },
  {
    name: "React JS",
    icon: <FaReact />,
    description: [<FaStar />, <FaStar />],
  },
  {
    name: "Git",
    icon: <TbBrandGithub />,
    description: [<FaStar />, <FaStar />, <FaStar />],
  },
];

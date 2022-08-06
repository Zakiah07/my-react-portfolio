import image1 from "../../images/marketing.png";
import image2 from "../../images/moviedatabase.png";
import image3 from "../../images/todoList.png";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const projectsData = [
  {
    title: "Marketing Platform",
    description:
      "This project is focusing on styling the components for a marketing agency.",
    languages: [<IoLogoHtml5 />, <IoLogoCss3 />, <SiJavascript />, <FaReact />],
    img: image1,
    alt: "Image",
    link: "https://marketingplatform.netlify.app/",
  },
  {
    title: "Movie App",
    description:
      "This project enables user to search a movie based on the data fetched using API from Axios.",
    languages: [<IoLogoHtml5 />, <IoLogoCss3 />, <SiJavascript />, <FaReact />],
    img: image2,
    alt: "Image",
    link: "https://moviedatabasez.netlify.app/",
  },
  {
    title: "Todo Note",
    description:
      "A simple Todo List where user can marked and edit their Todo inputs.",
    languages: [<IoLogoHtml5 />, <IoLogoCss3 />, <SiJavascript />, <FaReact />],
    img: image3,
    alt: "Image",
    link: "https://todolistzz.netlify.app/",
  },
];

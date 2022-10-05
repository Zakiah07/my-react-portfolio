import image1 from "../../../../images/marketing.png";
import image2 from "../../../../images/moviedatabase.png";
import image3 from "../../../../images/todoList.png";
import image4 from "../../../../images/tourmonkey.PNG";
import image5 from "../../../../images/reservation.PNG";
import image6 from "../../../../images/cryptoverse.PNG";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

export const projectsData = [
  {
    title: "Cryptoverse",
    description:
      "A crptocurrency website where data are fetched using API and Redux Toolkit.",
    languages: [
      <IoLogoHtml5 />,
      <IoLogoCss3 />,
      <SiJavascript />,
      <FaReact />,
      <SiRedux />,
    ],
    img: image6,
    alt: "Image",
    link: "https://all-about-cryptoverse.netlify.app/",
  },
  {
    title: "Restaurant Reservation App",
    description:
      "Users can sumbit their name and the food that they want to order for their reservations.",
    languages: [
      <IoLogoHtml5 />,
      <IoLogoCss3 />,
      <SiJavascript />,
      <FaReact />,
      <SiRedux />,
    ],
    img: image5,
    alt: "Image",
    link: "https://restaurantreservation.netlify.app/",
  },
  {
    title: "Tour Monkey",
    description:
      "A basic React JS based travel package where the interface is adpoted from MUI library.",
    languages: [<IoLogoHtml5 />, <IoLogoCss3 />, <SiJavascript />, <FaReact />],
    img: image4,
    alt: "Image",
    link: "https://tourmonkey.netlify.app/",
  },
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
      "A simple Todo List where user can mark, delete and edit their Todo inputs.",
    languages: [<IoLogoHtml5 />, <IoLogoCss3 />, <SiJavascript />, <FaReact />],
    img: image3,
    alt: "Image",
    link: "https://todolistzz.netlify.app/",
  },
];

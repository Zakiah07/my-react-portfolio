import React from "react";
import { introData as data } from "./intro.data";

const Intro = () => {
  return (
    <div>
      <p>{data.nameintro}</p>
      <p> {data.description}</p>
      <p> {data.motto}</p>
      <img height={400} width={400} src={data.img} alt={"alt"} />
    </div>
  );
};
export default Intro;

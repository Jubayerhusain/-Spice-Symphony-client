import React from "react";
import Bannar from "./Bannar/Bannar";
import Title from "../../Components/Shared/Title/Title";
import DisplayFood from "./DisplayFood/DisplayFood";
import SpiceBannar from "./SpiceBannar/SpiceBannar";
import Manu from "./Menu/Manu";
import RecommentFood from "./RecommentFood/RecommentFood";
import ParalaxMenu from "./ParalaxMenu/ParalaxMenu";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Bannar></Bannar>
      <Title
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></Title>
      <DisplayFood></DisplayFood>
      <SpiceBannar></SpiceBannar>
      <Manu></Manu>
      <RecommentFood></RecommentFood>
      <ParalaxMenu></ParalaxMenu>
      <Testimonial></Testimonial>
    </div>
  );
}

export default Home;

import React from "react";
import Bannar from "./Bannar/Bannar";
import Title from "../../Components/Shared/Title/Title";
import DisplayFood from "./DisplayFood/DisplayFood";

function Home() {
  return (
    <div>
      <Bannar></Bannar>
      <Title
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></Title>
      <DisplayFood></DisplayFood>
    </div>
  );
}

export default Home;

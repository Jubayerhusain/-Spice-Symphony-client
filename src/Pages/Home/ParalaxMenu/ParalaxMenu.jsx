import React from "react";
import Title from "./../../../Components/Shared/Title/Title";
import foodImage from "./../../../assets/home/featured.jpg";
function ParalaxMenu() {
  return (
    <div>
      <div className="py-10 bg-fixed text-white" style={
        {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${foodImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }
      }>
        <Title subHeading={"Check it out"} heading={"FROM OUR MENU"}></Title>
        <div className="hero text-white" >
          <div className="flex justify-evenly items-center flex-col lg:flex-row p-8 md:p-20">
            <img src={foodImage} className="rounded-lg lg:w-4/12 shadow-2xl" />
            <div className=" lg:w-4/12">
              <h1 className="text-3xl font-bold">Feb 24 2025</h1>
              <h1 className="text-3xl font-bold">WHIRE CAN I GET SOME?</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn border-b-4 border-gray-900 px-10">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParalaxMenu;

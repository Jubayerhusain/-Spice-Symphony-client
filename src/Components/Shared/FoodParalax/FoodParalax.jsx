import React from "react";
function FoodParalax({ foodImage, heading, content }) {
  return (
    <div className="my-11">
      <div
        className="py-12 bg-fixed text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${foodImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero text-white">
          <div className="flex justify-evenly items-center flex-col lg:flex-row p-8 md:p-20">
            {/* <img src={foodImage} className="rounded-lg lg:w-4/12 shadow-2xl" /> */}
            <div className=" lg:w-4/12">
              <h1 className="text-3xl font-bold">{heading}</h1>
              <p className="py-6">
               {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodParalax;

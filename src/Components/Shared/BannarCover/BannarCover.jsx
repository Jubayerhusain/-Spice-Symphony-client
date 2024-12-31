import React from "react";

function BannarCover({
  heading = "Default Heading",
  subHeading = "Default Subheading",
  bgImage,
}) {
  const defaultBg = "https://via.placeholder.com/150";
  return (
    <div
      className="h-[600px] pt-52"
      style={{
        backgroundImage: `url(${bgImage || defaultBg})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div className="w-11/12 lg:w-8/12 mx-auto p-20 text-center bg-gray-900/50">
        <h1 className="text-5xl uppercase text-white font-bold">{heading}</h1>
        <p className="text-md font-semibold text-white/80">{subHeading}</p>
      </div>
    </div>
  );
}

export default BannarCover;

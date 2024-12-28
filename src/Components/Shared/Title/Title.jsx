import React from "react";

function Title({ heading, subHeading }) {
  return (
    <div className="md:w-3/12 mx-auto my-8 text-center space-y-3">
      <h3 className="text-yellow-500 text-md italic">--- {subHeading} ---</h3>
      <h1 className="border-y-4 py-5 text-2xl font-semibold">{heading}</h1>
    </div>
  );
}

export default Title;

import React from "react";
import BannarCover from "../../Components/Shared/BannarCover/BannarCover";
import shopbg from "../../assets/shop/banner2.jpg";
import TabCategory from "./TabCategory/TabCategory";
function OurShop() {
  return (
    <div>
      <BannarCover
        bgImage={shopbg}
        heading="Our Shop"
        subHeading="Would you like to try a dish?"
      ></BannarCover>
      {/* tab section */}
      <section className="my-10">
        <TabCategory></TabCategory>
      </section>
    </div>
  );
}

export default OurShop;

import React from "react";
import BannarCover from "../../Components/Shared/BannarCover/BannarCover";
import imageMenu from "../../assets/menu/banner3.jpg";
import Title from "./../../Components/Shared/Title/Title";
import useMenu from "../../hooks/dynamicData/useMenu";
import ManuTemplate from "./../../Components/Shared/ManuTemplate/ManuTemplate";

function OurMenu() {
  const [menus] = useMenu();
  const offerFood = menus.filter(item => item.category === 'offered')

  return (
    <div>
      {/* bannar section  */}
      <section>
        <BannarCover
          heading={"Our Menu"}
          subHeading={"Would you like to try a dish?"}
          bgImage={imageMenu}
        ></BannarCover>
      </section>
      <div>
        <Title heading={"TODAY'S OFFER"} subHeading={"Dont Miss"}></Title>
      </div>
      <section>
        <ManuTemplate menus={offerFood}></ManuTemplate>
      </section>
    </div>
  );
}

export default OurMenu;

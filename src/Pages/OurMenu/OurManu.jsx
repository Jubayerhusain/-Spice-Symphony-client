import React from "react";
import BannarCover from "../../Components/Shared/BannarCover/BannarCover";
import imageMenu from "../../assets/menu/banner3.jpg";
import Title from "./../../Components/Shared/Title/Title";
import useMenu from "../../hooks/dynamicData/useMenu";
import ManuTemplate from "./../../Components/Shared/ManuTemplate/ManuTemplate";
import FoodParalax from "./../../Components/Shared/FoodParalax/FoodParalax";
import chefService from "../../assets/home/chef-service.jpg";

function OurMenu() {
  const [menus] = useMenu();
  const offerFood = menus.filter((item) => item.category === "offered");
  const dessertFood = menus.filter((item) => item.category === "dessert");

  const dessertContent =
    "Indulge in a variety of mouth-watering desserts! From creamy cheesecakes and gooey brownies to fluffy cupcakes and refreshing fruit parfaits, our dessert collection is a haven for every sweet lover. Celebrate your moments with sweetness!";

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
      {/* offered section  */}
      <div>
        <Title heading={"TODAY'S OFFER"} subHeading={"Dont Miss"}></Title>
      </div>
      <section>
        <ManuTemplate menus={offerFood}></ManuTemplate>
      </section>

      {/* dessert Section  */}
      <section>
        <FoodParalax
          foodImage={chefService}
          heading={"DESSERTS"}
          content={dessertContent}
        ></FoodParalax>
      </section>
      <section>
        <ManuTemplate menus={dessertFood}></ManuTemplate>
      </section>
    </div>
  );
}

export default OurMenu;

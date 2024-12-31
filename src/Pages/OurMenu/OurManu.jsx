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
  const pizzatFood = menus.filter((item) => item.category === "pizza");
  const saladtFood = menus.filter((item) => item.category === "salad");
  const soupFood = menus.filter((item) => item.category === "soup");

  const dessertContent =
    "Indulge in a variety of mouth-watering desserts! From creamy cheesecakes and gooey brownies to fluffy cupcakes and refreshing fruit parfaits, our dessert collection is a haven for every sweet lover. Celebrate your moments with sweetness!";
  const pizzaContent =
    "Savor the cheesy, crispy delight of our freshly baked pizzas. Topped with the finest ingredients and bursting with flavor, each bite is a taste of perfection!";

  const saladContent =
    "Enjoy a refreshing bowl of health and flavor! Our salads are crafted with fresh greens, vibrant veggies, and delicious dressings to satisfy your taste buds.";

  const soupContent =
    "Warm up with our comforting soups. From creamy classics to hearty broths, every spoonful brings you a rich, homemade feel";
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
      {/* Pizzas Section  */}
      <section>
        <FoodParalax
          foodImage={chefService}
          heading={"Pizzas"}
          content={pizzaContent}
        ></FoodParalax>
      </section>
      <section>
        <ManuTemplate menus={pizzatFood}></ManuTemplate>
      </section>
      {/* Salad Section  */}
      <section>
        <FoodParalax
          foodImage={chefService}
          heading={"Salads"}
          content={saladContent}
        ></FoodParalax>
      </section>
      <section>
        <ManuTemplate menus={saladtFood}></ManuTemplate>
      </section>
      {/* Soupe Section  */}
      <section>
        <FoodParalax
          foodImage={chefService}
          heading={"Soups"}
          content={soupContent}
        ></FoodParalax>
      </section>
      <section>
        <ManuTemplate menus={soupFood}></ManuTemplate>
      </section>
    </div>
  );
}

export default OurMenu;

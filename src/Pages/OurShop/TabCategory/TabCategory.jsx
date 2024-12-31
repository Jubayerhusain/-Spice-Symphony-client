import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/dynamicData/useMenu";
import FoodCard from "./../../../Components/Shared/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

function TabCategory() {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = useMenu();
  const drinksFood = menus.filter((item) => item.category === "drinks");
  const dessertFood = menus.filter((item) => item.category === "dessert");
  const pizzatFood = menus.filter((item) => item.category === "pizza");
  const saladtFood = menus.filter((item) => item.category === "salad");
  const soupFood = menus.filter((item) => item.category === "soup");

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALADS</Tab>
          <Tab>PIZZAS</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <FoodCard items={saladtFood}></FoodCard>
        </TabPanel>
        <TabPanel>
          <FoodCard items={pizzatFood}></FoodCard>
        </TabPanel>
        <TabPanel>
          <FoodCard items={soupFood}></FoodCard>
        </TabPanel>
        <TabPanel>
          <FoodCard items={dessertFood}></FoodCard>
        </TabPanel>
        <TabPanel>
          <FoodCard items={drinksFood}></FoodCard>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabCategory;

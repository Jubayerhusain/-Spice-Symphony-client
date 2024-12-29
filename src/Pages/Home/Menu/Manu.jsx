import React, { useEffect } from "react";
import Title from "./../../../Components/Shared/Title/Title";
import { useState } from "react";

function Manu() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerItems = data.filter((item) => item.category === "popular");
        setMenus(populerItems);
      });
  }, []);
  return (
    <menusection className="py-8">
      <Title subHeading={"Check it out"} heading={"FROM OUR MENU"}></Title>
      <div className="grid px-5 lg:grid-cols-2 grid-cols-1 gap-10">
        {menus.map((item) => (
          <div key={item._id}>
            <div className="flex hover:shadow-xl hover:bg-gray-200 p-5 space-x-3">
              <img
                className="h-[104px] w-[118px] rounded-tr-full rounded-b-full "
                src={item.image}
                alt=""
              />
              <div className="flex flex-col">
                <h2>{item.name}</h2>
                <p>{item.recipe}</p>
              </div>
              <p className="text-yellow-500">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <button className="btn px-14 border-b-4 border-b-gray-900">View All Menu</button>
      </div>
      <div className="bg-gray-900 space-y-2 text-white py-14 text-center my-7">
        <h1 className="text-3xl">Call US: +08814252875</h1>
        <p>jubayerhusain360@gmail.com</p>
      </div>
    </menusection>
  );
}

export default Manu;

import React from "react";

function ManuTemplate({menus}) {
  return (
    <div>
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
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>{item.recipe}</p>
              </div>
              <p className="text-yellow-500">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManuTemplate;

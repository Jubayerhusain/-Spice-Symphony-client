import React from "react";

function FoodCard({ items}) {
  return (
    <div>
      <div className=" my-10 px-5  grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10">
        {items.map((food) => (
          <div key={food._id}>
            <div className="card bg-base-100 h-[500px] shadow-xl">
              <figure>
                <img className="h-[250px] w-full hover:scale-[1.15] transition-all"
                  src={food.image}
                  alt={food.name}
                />
              </figure>
              <div className="card-body space-y-2 text-center">
                <h2 className="text-center text-xl font-bold ">
                 {food.name}
                </h2>
                <p>{food.recipe}</p>
                <div className="card-actions justify-center">
                  <button className="btn border-b-4 border-yellow-400 text-yellow-500">ADD TO CARD</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodCard;

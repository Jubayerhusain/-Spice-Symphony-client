import React from "react";
import banner from "./../../../assets/home/banner.jpg";

function SpiceBannar() {
  return (
    <div>
      <div
        className="hero my-16 bg-opacity-10 py-20"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <div className="card bg-white/80 w-full py-16 rounded-none px-10 max-w-screen-2xl shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center my-5">Bistro Boss</h1>
            <p className="text-center">
              Your ultimate destination for premium, handpicked spices. We bring
              you the finest and freshest blends to elevate your dishes, turning
              every meal into a culinary masterpiece. Our commitment to quality
              ensures bold and authentic flavors that tantalize your taste buds
              and unlock the magic of global cuisines. From exotic herbs to
              everyday essentials, Spice Project promises to enhance your
              cooking journey with vibrant aromas and unmatched taste.
              Experience the joy of flavorful creations with our curated
              collection of spices designed to add a touch of perfection to
              every recipe. Spice up your world today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpiceBannar;

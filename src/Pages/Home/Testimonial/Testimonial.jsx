import React, { useEffect, useState } from "react";
import Title from "./../../../Components/Shared/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonial() {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <div className="py-14 lg:w-8/12 mx-auto">
        <Title
          subHeading={"What Our Clients Say"}
          heading={"TESTIMONIALS"}
        ></Title>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div>
                {/* rating  */}
                <div className="flex justify-center mb-5">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <div className="flex justify-center">
                  <p className="text-5xl py-5">
                    <FaQuoteLeft></FaQuoteLeft>
                  </p>
                </div>
                <div className="text-center space-y-2 px-5 lg:px-16">
                  <p className="text-md w-11/12 mx-auto">{review.details}</p>
                  <h2 className="text-xl text-yellow-500">{review.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;

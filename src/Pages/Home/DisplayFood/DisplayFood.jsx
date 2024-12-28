import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

function DisplayFood() {
  return (
    <section>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-white"
      >
        <SwiperSlide>
          <img className="relative w-9/12 mx-auto" src={slider1} alt="" />
          <h1 className="uppercase md:left-44 md:text-xl text-sm absolute bottom-8">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative w-9/12 mx-auto" src={slider2} alt="" />
          <h1 className="uppercase md:left-44 md:text-xl text-sm absolute bottom-8">pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative w-9/12 mx-auto" src={slider3} alt="" />
          <h1 className="uppercase md:left-44 md:text-xl text-sm absolute bottom-8">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative w-9/12 mx-auto" src={slider4} alt="" />
          <h1 className="uppercase md:left-44 md:text-xl text-sm absolute bottom-8">desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative w-9/12 mx-auto" src={slider5} alt="" />
          <h1 className="uppercase md:left-44 md:text-xl text-sm absolute bottom-8">Salads</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default DisplayFood;

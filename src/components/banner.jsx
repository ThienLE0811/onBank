import React from "react";
import config from "../js/config";

import { Swiper, SwiperSlide } from "framework7-react";

const Banner = () => {
  return (
    <Swiper
      pagination
      autoplay={{ delay: 3000 }}
      style={{ marginTop: "30px", height: "auto" }}
    >
      {config.banners.map((banner, index) => (
        <SwiperSlide key={index} style={{ width: "394px" }}>
          <img
            // src={`../../public/images/banner/${banner}`}
            src={`/images/banner/${banner}.png`}
            key={index}
            style={{ width: "100%" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Banner;

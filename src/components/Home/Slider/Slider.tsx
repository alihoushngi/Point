"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../../app/globals.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="relative">
      <div className="w-[250px] h-[250px] bg-secondary absolute -left-[5%] top-[10%]"></div>
      <div className="w-[250px] h-[250px] bg-secondary absolute -right-[5%] top-[30%]"></div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            alt=""
            width={300}
            height={300}
            src="/images/AsmaGhanbari.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            width={300}
            height={300}
            src="/images/SalarGhanbari.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            width={300}
            height={300}
            src="/images/MonaShishehgaran.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            width={300}
            height={300}
            src="/images/SepidehHadadian.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            width={300}
            height={300}
            src="/images/AliHoushangi.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            width={300}
            height={300}
            src="/images/MohammadRezaFoj.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

// Arrow for navigation
import { MdArrowCircleRight } from "react-icons/md";
import { MdArrowCircleLeft } from "react-icons/md";

// Import required modules
import { Pagination, Navigation, Zoom } from "swiper/modules";
import images from "../../../data";

export default function GallerySwiper() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div id="gallery" className="flex flex-col justify-center px-6 h-full w-screen py-12 lg:py-14">
      <h1 className="text-4xl px-2 lg:text-6xl text-[#3B3B3B]">GALLERY</h1>
      <Swiper
        zoom={true}
        effect="fade" // Slide effect "fade", "cube", "coverflow", "flip"
        speed={800}
        onSwiper={(swiper) => swiper.update()}
        loop={Infinity} // Update swiper on initialization
        slidesPerView={4}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={20}
        initialSlide={5}
        modules={[Pagination, Navigation, Zoom]}
        className="mySwiper"
        style={{ padding: "0 10px" }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((data, index) => (
          <SwiperSlide key={index} className="overflow-hidden">
            <div className="swiper-zoom-container hover:scale-110 hover:opacity-70 transition-transform duration-1000 h-[600px]">
              <img
                src={data.image1}
                className="w-full object-fit overflow-hidden"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div>
            <MdArrowCircleLeft className="swiper-button-prev w-16 text-black hover:text-gray-700 opacity-65" />
          </div>
          <div>
            <MdArrowCircleRight className="swiper-button-next w-16 text-black hover:text-gray-700 opacity-65" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

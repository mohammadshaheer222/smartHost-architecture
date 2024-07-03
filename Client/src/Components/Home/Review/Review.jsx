import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { review } from "../../../data";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Review = () => {
  return (
    <div className="md:flex md:justify-start md:items-center pt-24 pb-12 overflow-hidden">
      <div className="md:flex-col md:justify-center md:items-center px-8 md:w-screen img">
        <div className="flex-col justify-center items-center">
          <h1 className="text-4xl text-[#3B3B3B] font-medium tracking-wide uppercase lg:text-6xl">
            What Clients Say
          </h1>
          {/* <div className="w-[150px] h-[2px] items-center justify-center m-2 bg-black"></div> */}
        </div>

        {/* Install swiper npm i swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {review.map((item, index) => (
            <SwiperSlide key={index} className="pb-10">
              <div className="bg-[#F5F5DC] shadow-lg p-4 h-full flex flex-col justify-between">
                <RiDoubleQuotesL className="text-2xl" />
                <div className="flex-grow">
                  <h1 className="text-2xl pt-2 text-[#3B3B3B]">{item.name}</h1>
                  <h1 className="pb-5 text-[#3B3B3B]">{item.items}</h1>
                  <p className="text-sm lg:text-base">{item.reviewData}</p>
                </div>
                <div className="flex justify-end pr-10">
                  <RiDoubleQuotesR className="text-2xl" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;

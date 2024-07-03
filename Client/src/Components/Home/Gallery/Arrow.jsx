import React from 'react'
//arrow for navigation
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
function Arrow() {
  return (
        <div className='slider-controler'>
                <p className='w-20 h-20 bg-black swiper-button-prev'>
                <FaLongArrowAltLeft className=" text-center w-16 slider-arrow hover:text-gray-600 text-[#7962FA] opacity-65" />
                </p>
        {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
      </div>
  )
}

export default Arrow
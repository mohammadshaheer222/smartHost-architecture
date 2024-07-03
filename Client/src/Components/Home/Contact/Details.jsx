import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Icons_images } from "../../../data";
import { GoThumbsup } from "react-icons/go";

function Details() {
  const email = "smarthostproperty@gmail.com";
  const phoneNumber = "07405560822";
  const locationUrl =
    "https://www.google.com/maps/place/PO10+7NR+Bosmere+Gardens,+Emsworth";
  return (
    <div className="flex font-thin flex-col gap-8 justify-center md:justify-start items-start">
      <div className="flex flex-row gap-4 md:gap-14 items-center">
        <div className="flex justify-center items-center">
          <SlLocationPin
            size={25}
            className="text-3xl text-[#3B3B3B] md:text-3xl font-extralight"
          />
        </div>
        <div>
          <a
            href={locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline opacity-70"
          >
            PO10 7NR Bosmere Gardens, Emsworth
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-4 md:gap-14 items-center">
        <div className="flex justify-center items-center">
          <LuPhone
            size={25}
            className="text-3xl text-[#3B3B3B] md:text-3xl font-extralight"
          />
        </div>
        <div>
          <a className="opacity-70 hover:underline" href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-4 md:gap-14 items-center">
        <div className="flex justify-center items-center ">
          <MdOutlineMail
            size={25}
            className="text-3xl md:text-3xl text-[#3B3B3B] font-extralight"
          />
        </div>
        <div>
          <a
            href={`mailto:${email}`}
            className="opacity-70 hover:underline"
            aria-label="Send an email to smarthostproperty@gmail.com"
          >
            smarthostproperty@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-4 md:gap-14 items-center">
        <div className="flex justify-center items-center">
          <GoThumbsup
            size={25}
            className="text-3xl text-[#3B3B3B] md:text-3xl font-thin"
          />
        </div>
        <div className="flex flex-row gap-4">
          {Icons_images.map((data, index) => (
            <a href={data.href} key={index}>
              <img
                src={data.image2}
                alt=""
                className="w-6 h-6 cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;

import React from "react";
import Map from "./Map";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#3B3B3B] px-7 py-6 overflow-hidden">
      <Map />
      <div className=" flex flex-col justify-center  gap-5 text-white sm:flex-row sm:justify-around ">
        <div className="sm:pt-5">
          <a href="" className="font-semibold text-2xl md:text-3xl">
            SMART <span className="text-[#d8a31c]">HOST</span>
          </a>
          <p className="text-xs text-gray-300 md:text-base">Property Network</p>
        </div>
        <div className="flex space-x-28 sm:space-x-40">
          <div>
            <ul className=" text-sm md:text-base space-y-2">
              <li className="opacity-55 font-medium">Useful Links</li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="about-us"
                  className="cursor-pointer scroll-smooth"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="services"
                  className="cursor-pointer scroll-smooth"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="gallery"
                  className="cursor-pointer scroll-smooth"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="contact"
                  className="cursor-pointer scroll-smooth"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-sm md:text-base space-y-2">
              <li className="opacity-55 font-medium">Other Resources</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-6 border-gray-500" />
      <div className="pt-3">
        <p className="text-xs text-center text-gray-200">
          &copy; {currentYear} SmartHouse Property Network Ltd. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

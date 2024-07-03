import React from "react";
import { Card } from "../../../data";

const NewService = () => {
  return (
    <div id="services" className=" px-7 py-12 overflow-hidden">
      <div className="space-y-2">
        <h1 className="text-4xl text-[#3B3B3B] font-medium tracking-wider uppercase lg:text-6xl">
          Services
        </h1>
        <p>
          Discover the exceptional services we offer to make your property
          management experience seamless and rewarding.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-12 gap-6 mt-8 ">
        {Card.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="p-8 rounded-lg shadow-lg text-center flex flex-col items-center space-y-6 bg-[#F5F5DC] hover:scale-105 transition-all duration-300  cursor-pointer"
            >
              <div className="bg-[#3B3B3B] p-1 rounded-full text-3xl text-black ">
                <IconComponent className="text-[#F5F5DC]"/>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#3B3B3B]">{item.heading}</h3>
              <p className="font-light opacity-70">{item.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewService;

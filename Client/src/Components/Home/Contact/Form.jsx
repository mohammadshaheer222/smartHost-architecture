import React from "react";
import ContactUS from "./ContactUS";
import Details from "./Details";

function Form() {
  return (
    <div id="contact" className="mb-8 flex flex-col gap-0 px-8 py-12 overflow-hidden">
 
      <h1 className="text-4xl pb-6 md:px-8 md:text-6xl text-[#3B3B3B]">CONTACT</h1>
      <div
        id="contact"
        className=" flex flex-col justify-between  md:items-start md:gap-14 md:flex-row space-y-12 md:space-y-0"
      >
        {/* <h1 className="m-0 font-main relative text-4xl p-5 font-extrabold">
            Let’s talk business
            </h1> */}
        <div className="flex flex-col md:px-8  h-full lg:w-[25%]">
          <Details />
        </div>
        <div className="flex flex-row md:w-1/2">
          <ContactUS />
        </div>
      </div>

    </div>
  );
}

export default Form;


// text-[#b09e80] 
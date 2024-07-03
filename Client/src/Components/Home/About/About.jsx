import { useEffect, useState } from "react";
import { about } from "../../../data";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === about.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about-us"
      className="flex flex-col justify-center overflow-hidden py-12 px-8 gap-y-4 lg:px-4 lg:flex-row lg:items-center lg:w-screen
    "
    >
      <h1  className="font-medium text-4xl tracking-wider block leading-5 lg:hidden text-[#3B3B3B]">
        SMART HOST <br />{" "}
        <span className="text-sm uppercase">Property Network</span>
      </h1>
      <img
        className="h-96 object-cover object-center lg:pt-10 lg:w-[50%] lg:h-screen lg:order-2"
        src={about[currentIndex]}
        alt="jwt estate lmt"
      />
      <div className="lg:px-4 lg:space-y-2 lg:w-[50%]">
        <div className="hidden lg:block">
          <h1 className="text-6xl font-medium tracking-wider custom-vertical-stretch leading-7 text-[#3B3B3B]">
            SMART HOST <br />
            <span className=" uppercase text-xl">Property Network</span>
          </h1>
        </div>

        <p className="lg:order-1 lg:text-sm lg:text-balance">
          At SmartHouse Property Network Ltd., we pride ourselves on being the
          go-to experts for all your property management requirements.
          Recognized as a top property management company in the UK, we focus on
          delivering superior services that keep your investments safe,
          efficiently managed, and highly profitable. With our exclusive
          guaranteed rent program, you can rest assured that your property
          income is secure and consistent, allowing you to enjoy the benefits of
          stress-free property ownership.
        </p>
      </div>
    </div>
  );
};

export default About;

//<div className="space-y-6">
//   <div className="space-y-2 py-10 bg-[#B09E80]">
//     <h1 className="text-center uppercase text-xl font-medium">About</h1>
//     <p className="text-justify px-8">
//       At JMK Estates Ltd, we take pride in being your trusted partner for
//       all your property management needs.As a premier property management
//       company in the UK, we are committed to delivering top-notch sevices
//       that guaratee your property investments are sevure, well-managed, and
//       profitable, including our exclusive guaranteed rent offering.
//     </p>
//   </div>

//   <div className="flex justify-center flex-wrap relative">
//     <div className="bg-gray-500 w-24 h-24 absolute left-10 z-30 rounded-lg"></div>
//     <div className="bg-[#B09E80] w-14 h-16 absolute right-20 top-6 z-30 rounded-lg"></div>
//     <div className="bg-[#192537] border border-[#B09E80] w-28 h-28 absolute top-14 z-20 rounded-lg"></div>
//     <div className="bg-[#192537] border border-[#B09E80] w-28 h-28 absolute top-40 left-8 rounded-lg"></div>
//     <div className="bg-gray-500 w-32 h-32 absolute top-36 right-8 rounded-lg"></div>
//   </div>
// </div>

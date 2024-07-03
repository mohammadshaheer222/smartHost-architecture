import { Link } from "react-scroll";
import furniture from "/src/assets/furniture.mp4";
const Hero = () => {
  return (
    <div id="home" className="w-full h-screen relative overflow-hidden">
      <video
        className="w-full h-full object-cover blur-sm"
        src={furniture}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 space-y-3 ">
        <h1 className="text-4xl text-[#fff3d6] font-medium lg:text-6xl ">
          Find your ideal <br /> home team
        </h1>
        <h5 className="text-balance text-sm opacity-75">
          Discover the best real estate opportunities <br />
          and register now to explore a wide range of <br />
          properties and exclusive offers
        </h5>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="scroll-smooth"
        >
          <button className="bg-[#fff3d6] active:scale-95 active:shadow-lg duration-100 px-8 py-2 border-left uppercase tracking-widest rounded-md text-black">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

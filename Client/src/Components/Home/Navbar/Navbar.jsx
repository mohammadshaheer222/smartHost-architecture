import React from "react";
import Sidebar from "./Sidebar/SideBar";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about-us" },
    { name: "Services", href: "services" },
    { name: "Gallery", href: "gallery" },
    { name: "Contact", href: "contact" },
  ];

  const variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.nav className="bg-[#3B3B3B] text-white px-4 py-3 fixed w-full z-10 uppercase tracking-widest overflow-hidden">
      <Sidebar navLinks={navLinks} />
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="mx-auto max-w-6xl flex justify-between lg:justify-normal items-center"
      >
        <motion.div
          variants={variants}
          className="flex flex-col gap-2 leading-[10px] items-center "
        >
          <a
            href="/"
            className="flex items-center font-bold text-2xl leading-[10px]"
          >
            SMART
            <span className="ms-2 text-[#d8a31c]">HOST</span>
          </a>
          <p className="text-xs">property network</p>
        </motion.div>
        <motion.div
          variants={variants}
          className="hidden lg:flex gap-4  w-full justify-evenly font-medium"
        >
          {navLinks.map((link, index) => (
            <motion.h1
              key={index}
              className=" text-md  hover:text-[#d8a31c]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
            <ScrollLink
                to={link.href}
                smooth={true}
                duration={500}
                className="cursor-pointer"
                // Adjust based on your navbar height
              >
                {link.name}
              </ScrollLink>
            </motion.h1>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import ToggleButton from "./ToggleButton/ToggleButton";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const SideBar = ({ navLinks }) => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 90% 50px)", // Changed coordinates
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(0px at 90% 50px)", // Changed coordinates
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 70,
      },
    },
  };

  const variant = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="lg:hidden flex flex-col items-center justify-center uppercase"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed -top-5 right-0 bottom-0 w-[200px]"
        variants={variants}
      >
        <motion.div
          className="absolute w-full h-full flex flex-col items-center justify-center gap-5 bg-[#3B3B3B]"
          variants={variant}
        >
          {navLinks.map((item, index) => (
            <motion.h1
              className="font-medium text-lg hover:text-[#d8a31c]"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to={item.href}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            </motion.h1>
          ))}
        </motion.div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;

import React from "react";
import { motion } from "framer-motion";
import { companies } from "../../../data";
import company1 from "/src/assets/company1.webp"
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Companies = () => {
  return (
    <div className=" py-12 px-6 md:px-0 lg:pt-16 overflow-hidden">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-around items-center flex-wrap  gap-10 md:gap-20 lg:gap-32 "
      >
        
        {companies.map((data, index) => (
          <motion.div
          key={index}
            variants={iconVariants(0)}
            initial="initial"
            animate="animate"
            className="gap-4 rounded"
          >
            <img src={data.image} className="rounded-lg h-12 md:h-16 mt-2" alt="" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Companies;

import React from "react";
import { sectionImage } from "../../../data";
import { motion } from "framer-motion";
const MidSection = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <section className="lg:w-screen px-5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container(0.25)}
            className="mt-12 md:mt-0"
          >
            <img
              src={sectionImage}
              alt="About Us Image"
              className="object-cover shadow-md"
            />
          </motion.div>
          <div className="max-w-lg">
            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-2xl font-medium  sm:text-4xl text-[#3B3B3B]"
            >
              Landlords! Make Your Life Easier with Let-to-Let Property
              Management
            </motion.h2>
            <motion.p
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              className="mt-4"
            >
              Free up your time and reduce stress by letting us manage your
              rental property. We handle everything from finding tenants to
              maintenance and repairs, allowing you to enjoy the benefits of
              being a landlord without the hassle.
            </motion.p>
            <div className="mt-8">
              <div className=" font-medium">
                <div>
                  <motion.strong
                    variants={container(1.5)}
                    initial="hidden"
                    whileInView="visible"
                    className="text-[#3B3B3B]"
                  >
                    Contact us today for a free consultation!
                  </motion.strong>{" "}
                  <br />
                  <motion.a
                    variants={container(1.75)}
                    initial="hidden"
                    whileInView="visible"
                    href="tel:+123456789"
                  >
                    Phone: 07405560822
                  </motion.a>
                  <motion.p
                    variants={container(2)}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {" "}
                    visit our website :
                    <a href="http://www.Smarthost.org.uk"> Smarthost.org.uk</a>.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidSection;
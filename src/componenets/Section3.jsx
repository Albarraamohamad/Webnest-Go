import React from "react";
import img1 from "/src/assets/unsplash_o4LMLXLI4_c.png";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden px-4 sm:px-10 py-16 sm:py-20">
      {/* Top Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="flex gap-3">
          <h1>DESCRIPTION</h1>
          <h1 className="text-gray-400">[EXPERIENCE]</h1>
        </div>
        <div>
          <h1 className="logo text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight mt-2 lg:mt-0">
            IMAGINE THERE IS <span className="text-gray-400 h2">one-stop</span> SOLUTION <br />
            TO YOUR ENTIRE ONLINE PRESENCE
          </h1>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-16 lg:mt-20 gap-10 lg:gap-20">
        {/* Left - Services List */}
        <div className="flex flex-col gap-2 lg:w-1/2">
          {[
            { title: "BRAND WEBSITES", number: "[1]" },
            { title: "PORTFOLIOS", number: "[2]" },
            { title: "UI&UX DESIGN", number: "[3]" },
            { title: "LANDING PAGES", number: "[4]" },
            { title: "MAINTENANCE&SUPPORT", number: "[5]" },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="h-[0.1px] bg-gray-600 w-full"></div>
              <div className="flex justify-between">
                <h1 className="mt-2">{service.title}</h1>
                <p className="text-gray-400">{service.number}</p>
              </div>
            </motion.div>
          ))}
          <div className="h-[0.1px] bg-gray-600 w-full"></div>
        </div>

        {/* Right - Image with Infinite Animation */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={img1}
            alt="Web development showcase"
            className="w-full max-w-md lg:max-w-full"
            animate={{
              y: [0, -15, 0], // moves up and down
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Section3;

import React from "react";
import img from "/src/assets/test.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="bg-black text-white pt-32 px-4 sm:px-10 overflow-y-hidden overflow-x-hidden">
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // <-- animate every time
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Left Text */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
          }}
        >
          <h1 className="">DESCRIPTION</h1>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
          }}
        >
          <img src={img} alt="" className="" />
        </motion.div>

        {/* Right Text */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
          }}
        >
          <h1 className="text-gray-500 ">[ Testimonials ]</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;

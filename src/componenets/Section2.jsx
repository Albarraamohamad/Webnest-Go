import React from "react";
import { motion } from "framer-motion";
import img from "/src/assets/work-thumbnail.png";

const Section2 = () => {
  return (
    <div className="overflow-x-hidden overflow-y-visible bg-black relative">
      <div className="px-5 sm:px-10 py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={img}
            alt="Web Development Showcase"
            className="shadow-2xl w-full sm:w-[85%] object-cover max-w-full"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Crafting Modern Web Experiences
          </motion.h2>
          <motion.p
            className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            At <span className="text-white font-semibold">WEBNEST-Go™</span>, we
            are a <span className="text-white">creative web development agency</span>{" "}
            passionate about bringing ideas to life through clean code and modern design.
            Our mission is to help startups and businesses build strong digital
            identities that <span className="text-white">stand out</span> in today's
            competitive market.
          </motion.p>
          <motion.p
            className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            From sleek portfolio websites to fully customized business platforms,
            we combine creativity and technology to deliver seamless, responsive,
            and performance-driven digital experiences.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;

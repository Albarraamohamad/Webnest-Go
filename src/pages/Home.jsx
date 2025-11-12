import React from "react";
import Navbar from "../componenets/Navbar";
import { FaStarOfLife } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";
import { motion } from "framer-motion";
const Home = () => {
  const stats = [
    { target: 50, label: "PROJECTS", suffix: "+" },
    { target: 3, label: "EXPERIENCE", suffix: "Y" },
    { target: 0, label: "FAILED PROJECTS", suffix: "%" },
  ];
  const scrollToDescription = () => {
    const section = document.getElementById("description");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[url('/src/assets/background@2x.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full overflow-x-hidden overflow-y-hidden box-border">
      {" "}
      {/* Navbar */} <Navbar /> {/* Hero Section */}{" "}
      <div className="text-white mt-48 sm:mt-48 px-4 sm:px-10">
        {" "}
        {/* Title */}{" "}
        <motion.div
          className="flex flex-wrap items-center justify-start text-center sm:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {" "}
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold mr-2"
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.5 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 1.5, ease: "easeOut" },
              },
            }}
          >
            {" "}
            HIGH-END{" "}
          </motion.h1>{" "}
          <motion.h1
            className="text-4xl xs:text-5xl h2 sm:text-7xl md:text-8xl text-gray-300 font-normal"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            {" "}
            Websites{" "}
          </motion.h1>{" "}
        </motion.div>{" "}
        {/* Description */}{" "}
        <motion.div
          className="mt-8 sm:mt-10 flex flex-col lg:flex-row lg:justify-between lg:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {" "}
          <motion.p
            className="text-gray-200 text-sm xs:text-base leading-7 lg:w-[60%]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            {" "}
            We are a creative web development agency dedicated to helping
            startups and businesses build a strong online presence. Our team
            specializes in crafting modern, responsive websites, building
            personal and business portfolios, and creating unique digital
            branding experiences.{" "}
          </motion.p>{" "}
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-bold mt-6 lg:mt-0"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            {" "}
            FORSTARTUPS{" "}
          </motion.h1>{" "}
        </motion.div>{" "}
      </div>{" "}
      {/* Stats Section */}{" "}
      <motion.div
        className="mt-20 px-3 sm:px-10 flex flex-row justify-between items-center text-white w-full flex-wrap gap-3 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {" "}
        {/* Rating */}{" "}
        <motion.div
          className="flex items-center gap-1 font-bold justify-center sm:justify-start min-w-[100px] text-sm sm:text-base flex-wrap"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          {" "}
          <p className="flex items-center gap-2 flex-wrap">
            {" "}
            [{" "}
            <FaStarOfLife className="text-amber-300 mt-2 text-xs sm:text-base" />{" "}
            <FaStarOfLife className="text-amber-300 mt-2 text-xs sm:text-base" />{" "}
            <FaStarOfLife className="text-amber-300 mt-2 text-xs sm:text-base" />{" "}
            <FaStarOfLife className="text-amber-300 mt-2 text-xs sm:text-base" />{" "}
            <FaStarOfLife className="text-amber-300 mt-2 text-xs sm:text-base" />{" "}
            ]{" "}
          </p>{" "}
          <p className="text-xs sm:text-sm">5/5 (12)</p>{" "}
        </motion.div>{" "}
        {/* Stats */}{" "}
        <motion.div
          className="flex justify-between items-center gap-4 sm:gap-8 text-xs sm:text-base flex-wrap"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          {" "}
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-1 sm:gap-2">
              {" "}
              <h1 className="font-bold text-lg sm:text-2xl">
                {" "}
                {stat.target}
                {stat.suffix}{" "}
              </h1>{" "}
              <p className="text-gray-300">[ {stat.label} ]</p>{" "}
            </div>
          ))}{" "}
        </motion.div>{" "}
        {/* See Work */}{" "}
        <motion.div
          className="flex justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {" "}
          <p
            className="flex items-center gap-1 sm:gap-2 font-bold text-xs sm:text-base cursor-pointer"
            onClick={scrollToDescription}
          >
            {" "}
            <CiCircleChevDown className="text-lg sm:text-2xl" /> SEE WORK{" "}
          </p>{" "}
        </motion.div>{" "}
      </motion.div>{" "}
    </div>
  );
};
export default Home;

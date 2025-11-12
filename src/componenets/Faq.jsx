// src/pages/FAQ.jsx
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Example FAQs
const faqsLeft = [
  { 
    question: "What services do you offer?", 
    answer: "We offer web development, UI/UX design, SEO optimization, and full-stack solutions tailored to your business needs."
  },
  { 
    question: "How long does a typical project take?", 
    answer: "Most projects take between 4-12 weeks depending on complexity and requirements."
  },
  { 
    question: "Do you provide post-launch support?", 
    answer: "Yes! We provide maintenance and support packages to ensure your website runs smoothly after launch."
  },
];

const faqsRight = [
  { 
    question: "Can you work with our existing team?", 
    answer: "Absolutely! We can collaborate with your in-house team or external contractors seamlessly."
  },
  { 
    question: "Do you offer custom designs?", 
    answer: "Yes, all our designs are 100% custom and tailored to reflect your brand identity."
  },
  { 
    question: "What is your pricing model?", 
    answer: "We offer both fixed-price projects and hourly contracts depending on your project needs."
  },
];

const FAQ = () => {
  const [openIndexLeft, setOpenIndexLeft] = useState(null);
  const [openIndexRight, setOpenIndexRight] = useState(null);

  // Animation variants for scroll
  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6 max-w-7xl mx-auto">
      {/* Top Tabs */}
      <div className="flex gap-6 mb-10 items-center justify-center text-xs uppercase">
        <span className="font-bold cursor-default select-none">Description</span>
        <span className="text-gray-600 cursor-default select-none">[ FAQ ]</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl md:text-6xl logo  mb-16">
        QUESTIONS? ANSWERS!
      </h1>

      {/* FAQ Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-10 border-t border-gray-700 pt-6">
        {/* Left Column */}
        <div>
          {faqsLeft.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-700 py-4"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Animates every time
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setOpenIndexLeft(openIndexLeft === index ? null : index)
                }
              >
                <p className="text-sm font-semibold">{item.question}</p>
                <button
                  aria-label="Expand FAQ"
                  className="text-white text-lg rounded-full border border-white w-6 h-6 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <FiPlus
                    className={`${openIndexLeft === index ? "rotate-45" : "rotate-0"} transition-transform duration-300`}
                  />
                </button>
              </div>
              <AnimatePresence>
                {openIndexLeft === index && (
                  <motion.p
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-400 text-sm"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {faqsRight.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-700 py-4"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Animates every time
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setOpenIndexRight(openIndexRight === index ? null : index)
                }
              >
                <p className="text-sm font-semibold">{item.question}</p>
                <button
                  aria-label="Expand FAQ"
                  className="text-white text-lg rounded-full border border-white w-6 h-6 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <FiPlus
                    className={`${openIndexRight === index ? "rotate-45" : "rotate-0"} transition-transform duration-300`}
                  />
                </button>
              </div>
              <AnimatePresence>
                {openIndexRight === index && (
                  <motion.p
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-400 text-sm"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-16 text-center text-gray-400 text-sm">
        Still got questions?{" "}
        <a href="#" className="underline hover:text-white transition">
          Contact me.
        </a>
      </p>
    </div>
  );
};

export default FAQ;

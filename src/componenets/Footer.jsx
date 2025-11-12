import React from 'react';
import { FaArrowTurnUp } from 'react-icons/fa6';
import { GoPlus } from 'react-icons/go';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-black text-white overflow-hidden' id='footer'>
      {/* Cinematic First Section */}
      <div className='flex justify-center items-center text-center min-h-[60vh] px-4 sm:px-10'>
        <motion.div
          className='space-y-6'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Animated Text */}
          <motion.h1
            className='logo text-5xl sm:text-6xl md:text-7xl lg:text-9xl  leading-tight'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            LET&apos;S BUILD IT
          </motion.h1>

          {/* Animated Button */}
          <motion.button
            className='bg-[#F05B3D] py-5 px-5 sm:py-5 sm:px-5 rounded-full text-2xl sm:text-3xl flex items-center justify-center mx-auto'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0, ease: "backOut" }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #F05B3D" }}
          >
            <GoPlus />
          </motion.button>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className='flex flex-col sm:flex-row justify-between items-center py-6 sm:py-10 px-6 sm:px-10 border-t border-gray-800'>
        <h1 className='text-sm sm:text-base mb-4 sm:mb-0'>Copyright @ 2025</h1>
        <button 
          onClick={scrollToTop} 
          className='bg-[#F05B3D] py-3 px-4 sm:py-5 sm:px-5 rounded-full text-xl sm:text-2xl'
        >
          <FaArrowTurnUp />
        </button>
      </div>
    </div>
  )
}

export default Footer;

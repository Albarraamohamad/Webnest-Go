import React, { useState } from 'react';
import '../App.css';
import svg from '/src/assets/union-1.svg';
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // make sure this is installed
import { GoNorthStar } from 'react-icons/go';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: 'Description', path: '#description' },
    { name: 'Experience', path: '#experience' },
    { name: 'Services', path: '#services' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'FAQ', path: '#faq' },
  ];

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="text-white pt-5 px-6 sm:px-10 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="logo text-white flex items-center gap-1 text-xl font-bold">
          <GoNorthStar className="text-amber-300" /> WEBNEST-Go™
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 items-center">
          <button
            className="flex items-center gap-2 hover:opacity-80"
            onClick={scrollToFooter}
          >
            <img src={svg} alt="logo" className="w-5" />
            NEW PROJECT
          </button>
          <button
            className="flex items-center gap-2 hover:opacity-80 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdMenu />
            <p className='text-[17px]'>MENUE</p>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Sliding Menu for Mobile & Large Screens */}
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed top-0 right-0 h-full w-64 sm:w-1/3 lg:w-1/4 bg-[#111] shadow-lg flex flex-col p-6 gap-6 z-50"
        >
          <button
            className="text-2xl self-end mb-4"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>

          <button
            className="flex items-center gap-2 hover:opacity-80"
            onClick={scrollToFooter}
          >
            <img src={svg} alt="logo" className="w-5" />
            New Project
          </button>

          {menuLinks.map((link) => (
            <button
              key={link.name}
              className="hover:opacity-80 text-white text-base text-left"
              onClick={() => scrollToSection(link.path)}
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

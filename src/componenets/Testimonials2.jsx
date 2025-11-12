// src/pages/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import img1 from "/src/assets/man1.jpeg";
import img2 from "/src/assets/man2.jpg";
import img3 from "/src/assets/man3.jpg";
import img4 from "/src/assets/man4.jpeg";
import img5 from "/src/assets/man5.jpg";
import { GoNorthStar } from "react-icons/go";

const Testimonials = () => {
  // Define the cards array for reusability
  const cards = [
    {
      img: img1,
      alt: "Client 1",
      name: "Alex Fares",
      text: "They built our company’s website exactly as we envisioned <br /> modern, fast, and responsive. The attention to detail was outstanding!",
    },
    {
      img: img2,
      alt: "Client 2",
      name: "Mohamed Ahmed",
      text: "Excellent experience overall. Communication was smooth, and the final result <br /> was very professional. Just needed a bit faster delivery.",
    },
    {
      img: img3,
      alt: "Client 3",
      name: "Maria Alex",
      text: "Our startup’s online presence skyrocketed thanks to their web design. <br /> The team delivered beyond expectations and always on time!",
    },
    {
      img: img4,
      alt: "Client 4",
      name: "John Mohamed",
      text: "They turned our idea into a functional, beautiful website <br /> that impressed our customers. Truly skilled developers!",
    },
    {
      img: img5,
      alt: "Client 5",
      name: "David Mars",
      text: "The best web development team we’ve worked with <br /> creative, reliable, and always willing to go the extra mile.",
    },
  ];

  // Function to render a single card
  const renderCard = (card, index) => (
    <motion.div
      key={index}
      className="min-w-[400px] cursor-pointer sm:min-w-[400px] md:min-w-[390px] bg-transparent p-2 shadow-lg text-center backdrop-blur-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex gap-1 mb-2 items-center">
        [
        {Array.from({ length: 5 }, (_, i) => (
          <GoNorthStar key={i} className="text-amber-400 mt-1 opacity-100" />
        ))}]
      </div>
      <p
        className="text-white text-sm sm:text-base mt-4 overflow-hidden text-ellipsis"
        dangerouslySetInnerHTML={{ __html: card.text }}
      />
      <div className="flex items-center mb-4 gap-3 mt-5">
        <img src={card.img} alt={card.alt} className="w-10 h-10 rounded-full object-cover" />
        <h1>{card.name}</h1>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-black text-white py-20">
      {/* Infinite Scroll Section */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-100%"] }} // Moves entire row once smoothly
          transition={{
            duration: 25, // control scroll speed
            repeat: Infinity, // repeat naturally
            repeatType: "loop", // restart smoothly
            ease: "linear",
          }}
        >
          {/* Render cards twice for seamless infinite loop */}
          {[...Array(2)].map((_, setIndex) =>
            cards.map((card, cardIndex) => renderCard(card, `${setIndex}-${cardIndex}`))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

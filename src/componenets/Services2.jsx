import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate service items
      gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse", // play on scroll down & up
          },
        }
      );

      // Animate dividers
      gsap.fromTo(
        ".divider",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white px-3 sm:px-2 md:px-10 py-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="divider h-[0.1px] bg-gray-600 w-full"></div>
        <div className="service-item flex justify-between items-center flex-row py-5 gap-2">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl logo text-gray-400 hover:text-white transition duration-300 cursor-pointer leading-tight">
            STARTUP BRANDING SPRINT
          </h1>
          <p className="text-gray-400 text-xs sm:text-base whitespace-nowrap">
            [ 50% DEPOSIT ]
          </p>
        </div>

        {/* Row 2 */}
        <div className="divider h-[0.1px] bg-gray-600 w-full"></div>
        <div className="service-item flex justify-between items-center flex-row py-5 gap-2">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl logo text-gray-400 hover:text-white transition duration-300 cursor-pointer leading-tight">
            STARTUP WEBSITE SPRINT
          </h1>
          <p className="text-gray-400 text-xs sm:text-base whitespace-nowrap">
            [ 50% DEPOSIT ]
          </p>
        </div>

        {/* Row 3 */}
        <div className="divider h-[0.1px] bg-gray-600 w-full"></div>
        <div className="service-item flex justify-between items-center flex-row py-5 gap-2">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl logo text-gray-400 hover:text-white transition duration-300 cursor-pointer leading-tight">
            DESIGN & DEV ON DEMAND
          </h1>
          <p className="text-gray-400 text-xs sm:text-base whitespace-nowrap">
            [ MONTHLY PLAN ]
          </p>
        </div>

        {/* Row 4 */}
        <div className="divider h-[0.1px] bg-gray-600 w-full"></div>
        <div className="service-item flex justify-between items-center flex-row py-5 gap-2">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl logo text-gray-400 hover:text-white transition duration-300 cursor-pointer leading-tight">
            TEMPLATE SUPPORT
          </h1>
          <p className="text-gray-400 text-xs sm:text-base whitespace-nowrap">
            [ ONE-TIME FEE ]
          </p>
        </div>

        <div className="divider h-[0.1px] bg-gray-600 w-full"></div>
      </div>
    </div>
  );
};

export default Services2;

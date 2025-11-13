import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Service item animation (once)
      gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true, // ✅ play once only
          },
        }
      );

      // Divider animation (once)
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
            once: true, // ✅ play once only
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white px-3 sm:px-5 md:px-10 py-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {[
          { title: "STARTUP BRANDING SPRINT", plan: "[ 50% DEPOSIT ]" },
          { title: "STARTUP WEBSITE SPRINT", plan: "[ 50% DEPOSIT ]" },
          { title: "DESIGN & DEV ON DEMAND", plan: "[ MONTHLY PLAN ]" },
          { title: "TEMPLATE SUPPORT", plan: "[ ONE-TIME FEE ]" },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div className="divider h-[0.1px] bg-gray-600 w-full"></div>
            <div className="service-item flex justify-between items-center flex-wrap py-5 gap-3">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 hover:text-white transition duration-300 cursor-pointer leading-tight">
                {item.title}
              </h1>
              <p className="text-gray-400 text-xs sm:text-base whitespace-nowrap">
                {item.plan}
              </p>
            </div>
          </React.Fragment>
        ))}
        <div className="divider h-[0.1px] bg-gray-600 w-full"></div>
      </div>
    </div>
  );
};

export default Services2;

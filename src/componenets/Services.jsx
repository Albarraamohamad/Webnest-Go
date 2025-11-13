import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true, // ✅ play once only
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true, // ✅ play once only
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white flex justify-center text-center pt-10 pb-10 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-full">
        <div className="flex flex-row sm:flex-row gap-2 mb-5 justify-center items-center">
          <div className="flex items-center gap-5">
            <h1 ref={titleRef} className="logo">
              DESCRIPTION
            </h1>
            <h1 className="text-gray-400 text-base sm:text-lg md:text-xl">
              [ SERVICES ]
            </h1>
          </div>
        </div>

        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug">
          <h1 ref={subtitleRef}>
            IMAGINE YOU WORK WITH ONE{" "}
            <br className="hidden sm:block" /> FREELANCER THAT HAS{" "}
            <span className="text-gray-500 h2">oversight</span>{" "}
            <br className="hidden sm:block" /> OVER YOUR ENTIRE BUSINESS.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;

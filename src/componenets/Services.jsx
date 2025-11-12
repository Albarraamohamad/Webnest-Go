import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Create GSAP animation that triggers on scroll both ways
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
            start: "top 80%",
            toggleActions: "play reverse play reverse", // <-- triggers every scroll down/up
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse", // <-- triggers every scroll down/up
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white flex justify-center text-center pt-10 pb-10 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-full">
        {/* Header */}
        <div className="flex flex-row sm:flex-row gap-2 mb-5 justify-center items-center">
          <div className="flex items-center gap-5">
            <h1 ref={titleRef} className="logo">
              DESCRIPTION
            </h1>
            <h1 className="text-gray-400">[ SERVICES ]</h1>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
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

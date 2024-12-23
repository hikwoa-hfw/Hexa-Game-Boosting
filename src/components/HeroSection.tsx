"use client";
import Image from "next/image";
import React from "react";

import { useEffect, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const revealPosition = window.innerHeight;
      const elementTop = document
        .querySelector("#fade-in-section")
        ?.getBoundingClientRect().top;

      if (elementTop && elementTop < revealPosition) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="fade-in-section"
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};


const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[680px] mx-auto container">
      <FadeInSection>
        <div className="bg-[#28292a] relative h-[580px] rounded-[48px] p-8 w-[1280px] flex items-center space-x-8 overflow-hidden">
          <div className="text-white max-w-[620px] flex-1 overflow-hidden mx-8 bg-[#28292a]">
            <h1 className="text-6xl font-bold bg-transparent">
              Your{" "}
              <span className="text-[#8e4beb] bg-transparent">
                Ultimate Game{" "}
              </span>
              Progression
              <span className="text-[#8e4beb] bg-transparent"> Booster</span>
            </h1>
            <p className="mt-4 text-lg bg-transparent">
              Elevate your gaming potential. Effortlessly climb ranks, conquer
              challenges, and achieve greatness with our professional
              game-boosting services.
            </p>
            <div className="mt-6 flex space-x-4 bg-transparent">
              <button className="px-6 py-3 bg-[#8e4beb] text-white font-semibold rounded-xl hover:bg-purple-700 transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          <Image
            src="/purple circle.avif"
            width={120}
            height={120}
            className="object-cover absolute w-[620px] h-[620px] -bottom-36 -right-40 bg-transparent overflow-visible"
            alt="bunderan"
          />
        </div>
      </FadeInSection>
    </div>
  );
};

export default HeroSection;

"use client";
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
      className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};
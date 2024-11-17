import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // Kecepatan pergerakan
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 10 }) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="whitespace-nowrap animate-marquee-left"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;

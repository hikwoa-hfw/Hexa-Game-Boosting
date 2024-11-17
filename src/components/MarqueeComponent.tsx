import React from 'react';
import Marquee from './ui/marquee';
import Image from 'next/image';

const MarqueeComponent = () => {
  return (
    <div className='container mx-auto w-[1280px] flex'>
      <Marquee speed={20}>
        <div className="flex gap-10 items-center">
          <div className="flex items-center justify-center h-40">
            <Image src="/Site-logo.webp" alt="Logo 1" width={200} height={100} className='gap-10' />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/dota22.png" alt="Dota 2" width={200} height={250} className='gap-4'/>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/apex.png" alt="Logo 3" width={200} height={20} className='gap-4'/>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/ML logo1.png" alt="Logo 4" width={180} height={100} className='gap-4'/>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/valologo.png" alt="Logo 5" width={200} height={1} className='gap-4'/>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/genshin-min.png" alt="Logo 5" width={200} height={100} className='gap-4'/>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;

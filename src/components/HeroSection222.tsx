import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-black text-white">
      <div className="inset-0">

        <Image 
          src="/purple circle.avif" 
          alt="Purple Circle" 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30" 
          fill
        />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 overflow-hidden">
          Your AI-Powered <span className="text-purple-500 z-10">Design Assistant</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
            More Templates
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

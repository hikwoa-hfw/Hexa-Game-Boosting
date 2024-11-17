import React from "react";
import Image from "next/image";

const FeatureCard = ({
  title,
  span,
  description,
}: {
  span: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="items-center justify-center">
      <div className="text-white rounded-lg items-center justify-center shadow-lg">
        <h3 className="text-5xl font-semibold mb-4">
          <span className="text-[#8e4beb]">{span} </span>
          {title}
        </h3>
        <p className="text-lg mb-4">{description}</p>
      </div>
    </div>
  );
};

const CompanyOverview = () => {
  return (
    <div className="container mx-auto">
      <div className=" text-white py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-[1280px] mx-auto">
          <div className="py-32 w-[540px]">
            <FeatureCard
              span="Achieve"
              title="Top-Tier Rankings"
              description="Achieve the highest levels of performance in your game, with results tailored to your specific objectives. Our expert boosters ensure your gaming statistics are finely tuned and consistently improve across all platforms."
            />
          </div>

          <div className="relative items-center mx-auto w-[400px] h-[400px]">
            <Image
              src="/3.avif"
              alt="Feature image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className=" text-white py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-[1280px] mx-auto">
          <div className="relative mx-auto w-[400px] h-[400px]">
            <Image
              src="/2.avif"
              alt="Feature image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl "
            />
          </div>
          <div className="py-32 w-[540px]">
            <FeatureCard
              span="Expert Boosters"
              title="at Your Service"
              description="Our professional boosters work in real-time to enhance your gameplay. They apply customized strategies and provide ongoing improvements, ensuring that you achieve your desired results with precision and expertise."
            />
          </div>
        </div>
      </div>
      <div className=" text-white py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-[1280px] mx-auto">
          <div className="py-32 w-[540px]">
            <FeatureCard
              span="Fast and Efficient"
              title="Boosting Sessions"
              description="Maximize the speed of your game boosting experience with our optimized scheduling tools. Our efficient process ensures that you reach your goals faster, with quick turnaround times for every session, without compromising quality."
            />
          </div>

          <div className="relative items-center mx-auto w-[400px] h-[400px]">
            <Image
              src="/1.avif"
              alt="Feature image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;

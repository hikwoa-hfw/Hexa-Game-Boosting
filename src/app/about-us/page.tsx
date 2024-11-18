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
      <div className="text-white  rounded-lg items-center justify-center shadow-lg">
        <h3 className="text-5xl font-semibold mb-4">
          <span>{span} </span>
          <span className="text-[#8e4beb]">{title}</span>
        </h3>
        <p className="text-lg mb-4">{description}</p>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="container mx-auto">
      <div className="p-8 w-[1280px] mx-24">
        <h2 className="text-6xl font-bold mb-10 text-white max-w-[934px]">
          About <span className="text-[#8e4beb]">Us</span>
        </h2>
      </div>
      <div className=" text-white pb-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-[1280px] mx-auto">
          <div className="py-32 w-[540px]">
            <FeatureCard
              span="Who"
              title="We Are"
              description="Hexa Kumpeni is a professional service dedicated to helping gamers achieve their goals effortlessly. From rank boosts to in-game achievements, we offer tailored solutions to enhance your gaming experience."
            />
          </div>

          <div className="relative items-center mx-auto w-[400px] h-[400px]">
            <Image
              src="/about1.png"
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
              src="/about2.jpg"
              alt="Feature image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl "
            />
          </div>
          <div className="py-32 w-[540px]">
            <FeatureCard
              span="Our"
              title="History"
              description="Founded with a passion for gaming, Hexa Game Boosting started as a small team of dedicated players who understood the challenges of competitive gaming. Over the years, we have grown into a trusted platform, empowering players worldwide to reach their full potential."
            />
          </div>
        </div>
      </div>
      <div className=" text-white py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-[1280px] mx-auto">
          <div className="py-32 w-[540px]">
            <FeatureCard
              span="Our"
              title="Team"
              description="Our team consists of experienced gamers and experts in various genres, from FPS to RPG. Each member is committed to delivering results while ensuring the safety and satisfaction of every client."
            />
          </div>

          <div className="relative items-center mx-auto w-[400px] h-[400px]">
            <Image
              src="/about3.jpg"
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
              src="/about4.jpg"
              alt="Feature image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl "
            />
          </div>
          <div className="py-32 w-[540px]">
            <FeatureCard
              span="Our"
              title="Values"
              description="Our professional boosters work in real-time to enhance your gameplay. They apply customized strategies and provide ongoing improvements, ensuring that you achieve your desired results with precision and expertise."
            />
          </div>
        </div>
      </div>
      <div className=" text-white py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-[1280px] mx-auto">
          <div className="py-32 w-[540px]">
            <FeatureCard
              span="What Makes Us"
              title="Unique"
              description="What sets us apart is our team of expert boosters, each with verified skills and extensive experience in competitive gaming. Our proven track record of success, combined with personalized services tailored to individual needs, ensures every client achieves their desired goals. With round-the-clock customer support, we provide a seamless experience that guarantees both quality and security.
"
            />
          </div>

          <div className="relative items-center mx-auto w-[400px] h-[400px]">
            <Image
              src="/about5.jpg"
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

export default page;

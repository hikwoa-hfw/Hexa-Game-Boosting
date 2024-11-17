import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Hexa Kumpeni's Valorant boosting service exceeded my expectations. Professional, fast, and reliable. My rank improved significantly, and the whole process was smooth. I highly recommend their services for serious gamers!",
    imageUrl: "/avatar1.png",
  },
  {
    name: "Jane Smith",
    feedback:
      "I used Hexa Kumpeni for Mobile Legends boosting, and the experience was amazing! Fast rank-up, skilled boosters, and clear communication. I reached my goal quickly and learned valuable gameplay tips along the way!",
    imageUrl: "/avatar2.png",
  },
  {
    name: "Mark Williams",
    feedback:
      "I trusted Hexa Kumpeni with my Dota 2 rank and was blown away. Fast, efficient service from a pro booster. I reached my goal effortlessly and highly recommend their boosting services!",
    imageUrl: "/avatar3.png",
  },
];

const Testimonials = () => {
  return (
    <div className="container flex-row pt-32 h-screen mx-auto">
      <div className="w-[1280px] mx-auto">
        <h2 className="text-5xl font-bold text-justify text-white mb-4 max-w-[934px]">
          Customer <span className="text-[#8e4beb]">Success </span>
          Stories
        </h2>
        <p className="text-lg text-justify max-w-[934px]">
          Discover how our professional boosting services have helped players
          achieve their in-game goals with ease. Hear directly from our clients
          about their success and satisfaction with our fast and reliable
          boosters.
        </p>
      </div>
      <div className="py-10 text-center w-[1280px] mx-auto">
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl  w-[405.5px] mx-auto  bg-[#28292a] p-6 text-white"
              >
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  width={100}
                  height={20}
                  className="mx-auto mb-4 rounded-full object-cover"
                />
                <p className="my-4 text-xl font-bold bg-[#28292a]">
                  {testimonial.name}
                </p>
                <p className="text-md bg-[#28292a] text-white md:text-lg">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

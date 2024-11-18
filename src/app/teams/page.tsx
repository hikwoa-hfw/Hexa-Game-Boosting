"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const customDescriptions = [
    "Head of CSGO Division",
    "Head of Mobile Legends Division",
    "Head of Valorant Division",
    "Head of Apex Legends Division",
    "Head of Wuthering Waves Division",
    "Head of Genshin Impact Division",
  ];
  const customDescriptions2 = [
    "Head of Apex Legends Division",
    "Head of Wuthering Waves Division",
    "Head of Genshin Impact Division",
  ];

  return (
    <>
      <section>
        <div className="teams-page mx-5 my-6 md:mx-auto min-h-screen max-w-7xl">
          <h2 className="text-6xl mt-10 font-bold text-justify text-white max-w-[934px]">
            Our Expert{" "}
            <span className="text-[#8e4beb]">Team</span>
          </h2>
          <div className="team-grid md:mt-16 grid grid-cols-3 gap-6 text-white">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="team-member rounded-3xl bg-[#28292a] p-4"
              >
                <Image
                  className="mx-auto mb-4 rounded-full filter grayscale"
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={128}
                  height={128}
                  objectFit="cover"
                />
                <h2 className="text-xl font-semibold text-center bg-transparent">{`${member.name.first} ${member.name.last}`}</h2>
                <p className="bg-transparent text-center">{customDescriptions[index]}</p>
              </div>
            ))}
          </div>
          <div className="team-grid mt-8 grid grid-cols-3 gap-6 text-white">
            {teamMembers.slice(3, 6).map((member, index) => (
              <div
                key={index}
                className="team-member rounded-3xl bg-[#28292a] p-4"
              >
                <Image
                  className="mx-auto mb-4 rounded-full text-white filter grayscale"
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={128}
                  height={128}
                  objectFit="cover"
                />
                <h2 className="text-xl text-center bg-transparent font-semibold">{`${member.name.first} ${member.name.last}`}</h2>
                <p className="bg-transparent text-center">{customDescriptions2[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

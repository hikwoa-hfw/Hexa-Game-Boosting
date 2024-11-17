import { cn } from "@/lib/utils";

const Service = () => {
  return (
    <div className="container mx-auto w-[1280px]">
      <div>
        <div className="items-center">
          <h3 className="text-5xl font-bold text-white mb-4 max-w-[934px]">
            Transforming Gameplay into{" "}
            <span className="text-[#8e4beb] text-6xl">Victory</span>
          </h3>
          <p className="text-lg text-justify mb-16 max-w-[934px]">
            Unlock the full potential of your gaming experience with our
            professional boosting services. From rapid progress to strategic
            rank improvements, witness how our expert boosters turn your
            gameplay into stunning achievements.
          </p>
        </div>
        <div className="grid grid-rows-3">
          <div className="container relative flex mx-auto h-[340px] w-[1280px] my-3">
            <div className="flex gap-6">
              <div className="w-[500px] bg-[#28292a] rounded-3xl">
                <div className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      " cursor-pointer overflow-hidden relative card h-[340px] w-[500px] rounded-3xl bg-center shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
                      "bg-[url(/apeximage.jpg)] bg-cover"
                    )}
                  >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="text content bg-transparent">
                      <h1 className="font-bold text-xl bg-transparent mt-[212px] mx-4 md:text-2xl text-gray-50 relative z-10">
                        Apex Legends
                      </h1>
                      <p className="font-normal mx-4 bg-transparent text-lg text-gray-50 relative z-10 my-4">
                        Respawn Entertainment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[756px] bg-[#28292a] rounded-3xl">
                <div className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      " cursor-pointer overflow-hidden relative card h-[340px] w-[756px] rounded-3xl bg-center shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
                      "bg-[url(/valoimage.jpg)] bg-cover"
                    )}
                  >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="text content bg-transparent">
                      <h1 className="font-bold mx-4 text-xl mt-[212px] bg-transparent md:text-2xl  text-gray-50 relative z-10">
                        Valorant
                      </h1>
                      <p className="font-normal mx-4 bg-transparent text-lg text-gray-50 relative z-10 my-4">
                        Riot Games
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container relative my-3 flex mx-auto h-[340px] w-[1280px]">
            <div className="flex gap-6">
              <div className="w-[756px] bg-[#28292a] rounded-3xl">
                <div className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      " cursor-pointer overflow-hidden relative card h-[340px] w-[756px] rounded-3xl bg-center shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
                      "bg-[url(/wuwaimage.png)] bg-cover"
                    )}
                  >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="text content bg-transparent">
                      <h1 className="font-bold text-xl bg-transparent mt-[212px] mx-4 md:text-2xl text-gray-50 relative z-10">
                        Wuthering Waves
                      </h1>
                      <p className="font-normal mx-4 bg-transparent text-lg text-gray-50 relative z-10 my-4">
                        Kuro Game
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[500px] bg-[#28292a] rounded-3xl">
                <div className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      " cursor-pointer overflow-hidden relative card h-[340px] w-[500px] rounded-3xl bg-center shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
                      "bg-[url(/genshinimage.jpg)] bg-cover"
                    )}
                  >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-70"></div>
                    <div className="text content bg-transparent">
                      <h1 className="font-bold text-xl bg-transparent mt-[212px] mx-4 md:text-2xl text-gray-50 relative z-10">
                        Genshin Impact
                      </h1>
                      <p className="font-normal mx-4 bg-transparent text-lg text-gray-50 relative z-10 my-4">
                        miHoYo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container relative my-3 h-[340px] flex mx-auto w-[1280px]">
            <div className="flex gap-6">
              <div className="w-[500px] bg-[#28292a] rounded-3xl">
                <div className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      " cursor-pointer overflow-hidden relative card h-[340px] w-[500px] rounded-3xl bg-center shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
                      "bg-[url(/dota2image.jpg)] bg-cover"
                    )}
                  >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="text content bg-transparent">
                      <h1 className="font-bold text-xl bg-transparent mt-[212px] mx-4 md:text-2xl text-gray-50 relative z-10">
                        Dota 2
                      </h1>
                      <p className="font-normal mx-4 bg-transparent text-lg text-gray-50 relative z-10 my-4">
                        Valve Corporation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[756px] bg-[#28292a] rounded-3xl">
                <div className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      " cursor-pointer overflow-hidden relative card h-[340px] w-[756px] rounded-3xl bg-center shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
                      "bg-[url(/mlimage.jpg)] bg-cover"
                    )}
                  >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="text content bg-transparent">
                      <h1 className="font-bold text-xl bg-transparent mt-[212px] mx-4 md:text-2xl text-gray-50 relative z-10">
                        Mobile Legends
                      </h1>
                      <p className="font-normal mx-4 bg-transparent text-lg text-gray-50 relative z-10 my-4">
                        Moontod
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

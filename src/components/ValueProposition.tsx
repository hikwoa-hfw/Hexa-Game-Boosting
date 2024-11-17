import { FaUpload, FaTrophy} from "react-icons/fa6";
import { GiBattleGear } from "react-icons/gi";

const ValueProposition = () => {
  return (
    <div className="container flex-row pt-48 mx-auto h-screen">
      <div className="p-8 w-[1280px] mx-auto">
        <h2 className="text-6xl font-bold text-justify text-white mb-4 max-w-[934px]">
          Maximize Your{" "}
          <span className="text-[#8e4beb]">Gaming Excellence</span>
        </h2>
        <p className="text-lg text-justify mb-16 max-w-[934px]">
          Experience how our Game Boosting Solutions elevate your gameplay to
          new heights. Through a seamless process, we help you achieve your
          desired ranks and unlock your full potential in competitive gaming.
        </p>

        <div className="flex justify-center gap-6">
          <div className="bg-[#28292a] rounded-3xl p-8 shadow-lg w-[400px] h-[240px]">
            <div className="mb-4 bg-transparent text-4xl text-[#8e4beb]">
              <FaUpload className="fas fa-upload bg-transparent"/>
            </div>
            <h3 className="text-3xl font-semibold bg-transparent mb-2">
              Upload Game Details
            </h3>
            <p className="text-md bg-transparent">
              Provide your account information and let our expert boosters
              enhance your gameplay.
            </p>  
          </div>

          <div className="bg-[#28292a] rounded-3xl p-8 shadow-lg w-[400px] h-[240px]">
            <div className="mb-4 text-4xl bg-transparent text-[#8e4beb]">
              <FaTrophy className="fas fa-trophy bg-transparent"/>
            </div>
            <h3 className="text-3xl font-semibold bg-transparent mb-2">
              Boost Your Rankings
            </h3>
            <p className="text-md bg-transparent">
              Watch as our professional team works to elevate your gaming stats
              and rank.
            </p>
          </div>

          <div className="bg-[#28292a] rounded-3xl p-8 shadow-lg w-[400px] h-[240px]">
            <div className="mb-4 text-4xl bg-transparent text-[#8e4beb]">
              <GiBattleGear className="fa-solid fa-chess bg-transparent"/>
            </div>
            <h3 className="text-3xl font-semibold bg-transparent mb-2">
              Refine Your Skills
            </h3>
            <p className="text-md bg-transparent">
              Perfect your gameplay with personalized tips and tricks from our
              expert boosters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;

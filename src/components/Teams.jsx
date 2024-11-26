import { useState } from "react";
import TeamCard from "./TeamCard";
import profile1 from "../assets/Profile1.png";
import profile2 from "../assets/Profile2.png";
import profile3 from "../assets/Profile3.png";
import profile4 from "../assets/Profile4.png";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Team = () => {
  const profiles = [
    { image: profile1, name: "Jamila Smail", portfolio: "Co-Founder" },
    { image: profile2, name: "Farouk Dari", portfolio: "Full Stack Developer" },
    { image: profile3, name: "Aksel Juba", portfolio: "Graphic Designer" },
    { image: profile4, name: "Dihia Numida", portfolio: "UI/UX Designer" },
  ];

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handlePrev = () => {
    setCurrentProfileIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : profiles.length - 1
    );
  };

  const handleNext = () => {
    setCurrentProfileIndex((prevIndex) =>
      prevIndex < profiles.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="p-4 mt-12 mx-4 sm:mx-6 lg:mx-auto max-w-7xl leading-snug">
        <p className="text-tt-primary text-left font-bold text-xl sm:text-2xl leading-snug">
          The Team behind TechTariq
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-56">
          <div className="lg:w-1/2 leading-snug">
            <h2 className="text-tt-black text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              A team of creatives who are excited to help you with your ideas
            </h2>
            <p className="text-tt-grey text-lg sm:text-xl leading-snug">
              Our team of digital product creators and tech enthusiasts will
              take your idea to the next level and help you bring your product
              to life.
            </p>
          </div>

          <div className="relative flex flex-col items-center lg:w-1/2">
            
            <div className="lg:w-72 lg:h-72 sm:w-96 sm:h-96 bg-gray-100 border rounded-lg overflow-hidden mx-auto mt-9">
              <img
                src={profiles[currentProfileIndex].image}
                alt={profiles[currentProfileIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">
                {profiles[currentProfileIndex].name}
              </h3>
              <p className="text-sm text-gray-600">
                {profiles[currentProfileIndex].portfolio}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-6 mt-8 mb-8">
        <button
          onClick={handlePrev}
          className="text-tt-primary hover:text-tt-black"
          aria-label="Previous Profile"
        >
          <BsArrowLeftCircle size={28} />
        </button>
        <button
          onClick={handleNext}
          className="text-tt-primary hover:text-tt-black"
          aria-label="Next Profile"
        >
          <BsArrowRightCircle size={28} />
        </button>
      </div>
    </>
  );
};

export default Team;

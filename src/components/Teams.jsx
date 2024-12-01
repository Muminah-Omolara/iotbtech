import { useState } from "react";
import profile1 from "../assets/Profile1.png";
import profile2 from "../assets/Profile2.png";
import profile3 from "../assets/Profile3.png";
import profile4 from "../assets/Profile4.png";
import Titik from "../assets/icons/Titik.svg";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Teams = () => {
  const profiles = [
    { image: profile1, name: "Jamila Smail", portfolio: "Co-Founder" },
    { image: profile2, name: "Farouk Dari", portfolio: "Full Stack Developer" },
    { image: profile3, name: "Aksel Juba", portfolio: "Graphic Designer" },
    { image: profile4, name: "Dihia Numida", portfolio: "UI/UX Designer" },
  ];

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handlePrev = () => {
    setCurrentProfileIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : profiles.length - 1,
    );
  };

  const handleNext = () => {
    setCurrentProfileIndex((prevIndex) =>
      prevIndex < profiles.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-10 mx-auto max-w-screen-xl">
        <h3 className="text-tt-primary text-left text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-3">
          The Team behind TechTariq
        </h3>
        <div className="grid lg:grid-cols-2 gap-8 justify-between">
          <div className=" leading-snug">
            <h2 className="text-tt-black text-2xl sm:text-3xl font-bold mb-4 lg:mt-8 leading-snug max-w-md">
              A team of creatives who are excited to help you with your ideas
            </h2>
            <p className="text-tt-grey text-lg sm:text-xl leading-snug max-w-md">
              Our team of digital product creators and tech enthusiasts will
              take your idea to the next level and help you bring your product
              to life.
            </p>
          </div>

          <div className="relative flex flex-col items-left">
            <div>
              <img
                src={Titik}
                alt="tiktik pattern"
                className="object-cover absolute left-24 -top-7 -z-10 hidden lg:block sm:items-left mx-8 lg:mt-10 "
              />
              <div className="lg:w-72 lg:h-72 sm:w-96 sm:h-96 bg-gray-100 border rounded-lg overflow-hidden z-10  mt-9">
                <img
                  src={profiles[currentProfileIndex].image}
                  alt={profiles[currentProfileIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-left mt-4">
              <h3 className="text-lg font-semibold">
                {profiles[currentProfileIndex].name}
              </h3>
              <p className="text-sm text-gray-600">
                {profiles[currentProfileIndex].portfolio}
              </p>
              <div className="justify-center items-center flex flex-row gap-8">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;

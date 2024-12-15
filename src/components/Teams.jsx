import { useState } from "react";
import profiles from "../data/team";
import Titik from "../assets/icons/Titik.svg";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Team = () => {
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
            <div className="relative flex lg:justify-center lg:items-center sm:items-center lg:w-1/2 mt-2">
              <img
                src={Titik}
                alt=""
                className=" left-10 absolute inset-0 w-[250px] h-[200px] object-cover z-10 hidden sm:block sm:items-left mx-16 lg:mt-2 "
              />
              <div className="lg:w-72 lg:h-72 sm:w-96 sm:h-96 bg-gray-100 border rounded-lg overflow-hidden z-10  mt-9">
                <img
                  src={profiles[currentProfileIndex].image}
                  alt={profiles[currentProfileIndex].name}
                  className="w-72 h-72 object-cover sm:w-fit"
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
              <div className="justify-center items-center flex gap-8 mt-4">
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

export default Team;

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroBg from "../assets/Xtra/HeroBgImg3.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        {/* Content overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-2xl md:text-6xl font-bold text-center leading-snug">
            <Typewriter
              words={["Revolutionize", "Transform"]}
              loop={0} // Set to `0` for infinite looping
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />{" "}
            your <br />
            future
            <br /> with IOTB TECH
          </h1>

          {/* Typewriter effect */}
          <p className="text-white text-lg md:text-2xl mt-8 font-medium text-center">
            We are on a mission to{" "}
            <span className="text-blue-400 font-bold">
              <Typewriter
                words={["liberate lives", "make you world-class"]}
                loop={0} // Set to `0` for infinite looping
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;

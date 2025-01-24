import React, { useEffect, useRef, useState } from "react";
import Img from "../assets/Xtra/Group.png";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null); // Reference to the section
  const isInView = useInView(sectionRef, { once: true }); // Check if section is in view
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  useEffect(() => {
    if (isInView) {
      setIsVisible(true); // Set the flag to show Typewriter only after the section has came up
    }
  }, [isInView]);

  return (
    <section
      className="bg-white py-12 mt-16 px-4 md:px-12 lg:px-20"
      ref={sectionRef} // Attach ref to the section
    >
      <motion.div
        className="flex flex-col md:flex-col lg:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <div className="flex-shrink-0 mr-4 md:w-full lg:w-1/2">
          <img
            src={Img}
            alt="IOTB-TECH"
            className="w-full max-w-sm md:max-w-full lg:max-w-full rounded-lg"
          />
        </div>

        {/* About Text Section */}
        <div className="lg:max-w-xl md:w-xl lg:ml-16 md:w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            About{" "}
            <span className="text-blue-500">
              {isVisible && ( // This will show Typewriter only when section is in viee
                <Typewriter
                  words={["IOTB-TECH"]}
                  cursor={false}
                  typeSpeed={50}
                  deleteSpeed={30}
                  loop={1}
                />
              )}
            </span>
          </h2>

          <div className="text-gray-600 mt-6 text-lg md:text-xl leading-relaxed">
            <Typewriter
              words={[
                `Established in 2020, IOTB-TECH, a global leader in Skills and Talent Development, offers multi-disciplinary learning management and training delivery solutions to students and graduates in Nigeria. While working hard to expand our horizon beyond these courses, IOTB-TECH currently offers training in four main sections of Tech across Nigeria - Software Engineering, Cloud Computing, Graphics Designing, and Product Design.`,
              ]}
              loop={1}
              typeSpeed={8}
              cursor={false}
            />
          </div>

          <div>
            <button className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-md hover:bg-blue-600 transition-all duration-300">
              Find out more
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

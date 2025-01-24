import React from "react";
import SE from "../assets/Xtra/frontend.webp";
import Graphics from "../assets/Xtra/Graphics.png";
import Cloud from "../assets/Xtra/Devops.png";
import Product from "../assets/Xtra/productDesign.avif";
import { IoPersonOutline } from "react-icons/io5";
import { MdStarOutline } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animations only once when the section is in view

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gray-50 py-12" ref={ref}>
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Discover Our Courses
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-gray-800 font-bold">
            <Typewriter
              words={["Expand your skills", "Become Future-ready"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </span>{" "}
          with our top-notch training programs.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-12 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Software Engineering */}
        <motion.div
          className="bg-white w-96 lg:w-96 lg:ml-24 md:w-80 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-95 hover:shadow-2xl"
          variants={cardVariants}
        >
          <img
            src={SE}
            alt="Software Engineering"
            className="w-96 h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Website Development
            </h3>
            <p className="text-gray-600 mt-2 mb-4">
              Master the art of building scalable software solutions.
            </p>
            <div className="flex items-center space-x-4">
              <p className="flex items-center">
                <IoPersonOutline className="mr-2" /> 50 Students
              </p>
              <p className="flex items-center">
                <MdStarOutline className="mr-2" /> 4.9 rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* Graphics Designing */}
        <motion.div
          className="bg-white w-96 lg:w-96 lg:ml-16 md:w-80 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-95 hover:shadow-2xl"
          variants={cardVariants}
        >
          <img
            src={Graphics}
            alt="Graphics Designing"
            className="w-96 h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Graphics Designing
            </h3>
            <p className="text-gray-600 mt-2 mb-4">
              Create designs that captivate: Learn the principles of effective
              visual communication.
            </p>
            <div className="flex items-center space-x-4">
              <p className="flex items-center">
                <IoPersonOutline className="mr-2" /> 60 Students
              </p>
              <p className="flex items-center">
                <MdStarOutline className="mr-2" /> 4.8 rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cloud Computing */}
        <motion.div
          className="bg-white w-96 lg:w-96 lg:ml-24 md:w-80 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-95 hover:shadow-2xl"
          variants={cardVariants}
        >
          <img
            src={Cloud}
            alt="Cloud Computing"
            className="w-96 h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">Cloud Computing</h3>
            <p className="text-gray-600 mt-2 mb-4">
              Build cloud-native applications: Master the principles of agile
              cloud development.
            </p>
            <div className="flex items-center space-x-4">
              <p className="flex items-center">
                <IoPersonOutline className="mr-2" /> 35 Students
              </p>
              <p className="flex items-center">
                <MdStarOutline className="mr-2" /> 4.9 rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* Product Designing */}
        <motion.div
          className="bg-white w-96 lg:w-96 lg:ml-16 md:w-80 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-95 hover:shadow-2xl"
          variants={cardVariants}
        >
          <img
            src={Product}
            alt="Product Designing"
            className="w-96 h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Product Designing
            </h3>
            <p className="text-gray-600 mt-2 mb-4">
              Create products that delight: Discover the secrets of
              user-centered design.
            </p>
            <div className="flex items-center space-x-4">
              <p className="flex items-center">
                <IoPersonOutline className="mr-2" /> 30 Students
              </p>
              <p className="flex items-center">
                <MdStarOutline className="mr-2" /> 4.7 rating
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Courses;

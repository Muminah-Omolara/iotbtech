import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion"; // Import framer-motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Moscow from "../assets/Xtra/abdulkareem-mustafa.jpg";
import Kishky from "../assets/Xtra/kishky.png";
import Almajiri from "../assets/Xtra/Almajiri.jpg";
import MD from "../assets/Xtra/Akeem_MD.jpg";
import Slytech from "../assets/Xtra/Slytech.jpg";
import rarebreed from "../assets/Xtra/rarebreed.jpg";
import MS from "../assets/Xtra/Oyedeji_MS.jpg";
import Rofiat from "../assets/Xtra/RofiatAdebakin.jpg";
import Rokeeb from "../assets/Xtra/Rokeeb_Abdul.jpg";
import Aishah from "../assets/Xtra/salahudeen-aisha.jpg";
import Abdullah from "../assets/Xtra/Odewole_Abdullahi.jpg";
import Hassan from "../assets/Xtra/Hassan_Yaya.jpeg";
import SM from "../assets/Xtra/ibraheem-semiat.jpg";

const Team = () => {
  const sectionRef = React.useRef(null); // Reference to the section
  const isInView = useInView(sectionRef, { once: true }); // Check if section is in view

  const slideInAnimation = {
    initial: { opacity: 0, y: 50 }, // Start below the viewport
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const teamMembers = [
    { name: "Ibn Abur-Rahman", image: Kishky, position: "Software Engineer" },
    {
      name: "Awwal Adewuyi",
      image: Almajiri,
      position: "Senior Software Engineer",
    },
    { name: "Rofiat Adebakin", image: Rofiat, position: "UI/UX Designer" },
    { name: "Hassan Yahyah", image: Hassan, position: "Product Manager" },
    { name: "Ibraheem Semiat", image: SM, position: "Backend Developer" },
    {
      name: "Abdullah Odewole",
      image: Abdullah,
      position: "Frontend Developer",
    },
    { name: "Sulaiman Olusokun", image: Slytech, position: "DevOps Engineer" },
    { name: "Salahudeen Aishah", image: Aishah, position: "Content Creator" },
    { name: "Oyedeji MS", image: MS, position: "AI Specialist" },
    { name: "Abdur-Rokeeb", image: Rokeeb, position: "Cybersecurity Analyst" },
    { name: "Rare Breed", image: rarebreed, position: "Blockchain Developer" },
    { name: "Akeem Muhideen", image: MD, position: "Project Coordinator" },
    {
      name: "Abdulkareem Mustopha",
      image: Moscow,
      position: "Marketing Strategist",
    },
  ];

  return (
    <motion.section
      className="mt-24 bg-gray-50 py-12 px-6 md:px-12 lg:px-20 mb-24"
      ref={sectionRef} // Attach ref to the section
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={slideInAnimation}
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet the Amazing Team Behind Our Organization
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Check out the names that help IOTB-TECH be a reference in Technology
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              <h3 className="text-lg font-medium text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 mb-8 lg:mb-24">
                {member.position}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Team;

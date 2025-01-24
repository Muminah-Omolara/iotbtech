// import "./swiper.css";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";

import Omolara from "../assets/Xtra/muminah_omolara.jpg";
import Latiifah from "../assets/Xtra/Aderolu_Latifah.jpg";
import Yunusa from "../assets/Xtra/yunusa_usman.jpg";
import Waliyah from "../assets/Xtra/Balogun_Waliyah.jpg";
import Aishah from "../assets/Xtra/Hammed_Aishah.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Muminah Omolara",
      image: Omolara,
      role: "Website Developer",
      message:
        "IOTB-TECH Web Development Training provided me with a valuable body of knowledge. I am ready to solve people's problems through Software Development!",
    },
    {
      name: "Yunusa Usman",
      image: Yunusa,
      role: "Frontend Developer",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatem quae cum nemo veniam quas.",
    },
    {
      name: "Aderolu Latiifah",
      image: Latiifah,
      role: "Backend Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt officiis? Est hic dignissimos dolorem?",
    },
    {
      name: "Balogun Waliyah",
      image: Waliyah,
      role: "Fullstack Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam saepe ut accusantium nemo maxime.",
    },
    {
      name: "Hammed Aishah",
      image: Aishah,
      role: "Frontend Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus libero corrupti soluta itaque perferendis. Itaque?",
    },
  ];

  const TestimonialHeading = () => {
    const [triggerTypewriter, setTriggerTypewriter] = useState(false);
    const headingRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTriggerTypewriter(true);
            observer.disconnect(); // Stop observing after triggering once
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );

      if (headingRef.current) {
        observer.observe(headingRef.current);
      }

      return () => {
        if (headingRef.current) {
          observer.unobserve(headingRef.current);
        }
      };
    }, []);

    return (
      <div ref={headingRef} className="text-center mb-12 -mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {triggerTypewriter && (
            <Typewriter
              words={["Hear what some of our graduates are saying..."]}
              cursor={false}
              typeSpeed={50}
              deleteSpeed={30}
              loop={1}
            />
          )}
        </h2>
      </div>
    );
  };

  return (
    <section>
      <TestimonialHeading />
      <div className="mt-8 bg-blue-50 py-12 px-6 mb-24">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mx-auto max-w-4xl space-y-6 md:space-y-0 md:space-x-8 py-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <p className="text-gray-800 text-lg font-light leading-relaxed md:mb-4">
                    "{testimonial.message}"
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-800 mb-4">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

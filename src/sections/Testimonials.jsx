import { useState, useEffect } from "react";
import profile1 from "../assets/Profile1.png";
import profile2 from "../assets/Profile2.png";
import profile3 from "../assets/Profile3.png";
import profile4 from "../assets/Profile4.png";
import TestimonialCard from "../components/TestimonialCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Testimonials = () => {
  const profiles = [
    {
      testimonial:
        "Our team of digital product creators and Tech Bring Skilled will take your idea to the next level and help you with your product",
      image: profile1,
      name: "Jamila Smail",
      portfolio: "Co-Founder",
    },
    {
      testimonial:
        "Our team of digital product creators and Tech Bring Skilled will take your idea to the next level and help you with your product",
      image: profile2,
      name: "Farouk Dari",
      portfolio: "Full Stack Developer",
    },
    {
      testimonial:
        "Our team of digital product creators and Tech Bring Skilled will take your idea to the next level and help you with your product",
      image: profile3,
      name: "Aksel Juba",
      portfolio: "Graphic Designer",
    },
    {
      testimonial:
        "Our team of digital product creators and Tech Bring Skilled will take your idea to the next level and help you with your product",
      image: profile4,
      name: "Dihia Numida",
      portfolio: "UI/UX Designer",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const profilesPerPage = isMobile ? 1 : 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProfiles = profiles.slice(
    startIndex,
    startIndex + profilesPerPage,
  );
  const totalPages = Math.ceil(profiles.length / profilesPerPage);

  const handleNext = () => {
    if (startIndex + profilesPerPage < profiles.length) {
      setStartIndex(startIndex + profilesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - profilesPerPage >= 0) {
      setStartIndex(startIndex - profilesPerPage);
    }
  };

  return (
    <div className="bg-[#A0A4AB1A]  mx-auto pb-6 pt-6 md:pb-custom-pb md:pt-custom-pt">
      <div className="mx-auto custom-container items-center w-auto max-w-5xl px-4 py-4 lg:px-0 lg:py-0 ">
        <div className="w-full max-w-5xl">
          <p className="text-2xl font-bold mb-4 text-tt-primary">Testimonial</p>
          <h2 className="text-3xl font-bold leading-snug text-left">
            You still hesitate about working with us?{" "}
            <br className="hidden md:block" /> Check what they say about us
          </h2>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className={`flex flex-row gap-6 ${isMobile ? "flex-col" : ""}`}>
            {visibleProfiles.map((profile, index) => (
              <TestimonialCard
                key={index}
                testimonial={profile.testimonial}
                image={profile.image}
                name={profile.name}
                portfolio={profile.portfolio}
              />
            ))}
          </div>
          <div className="flex justify-center items-center gap-6 pt-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="disabled:opacity-50 text-tt-primary"
            >
              <BsArrowLeftCircle size={28} />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + profilesPerPage >= profiles.length}
              className="disabled:opacity-50 text-tt-primary"
            >
              <BsArrowRightCircle size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

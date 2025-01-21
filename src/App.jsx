import React, { useRef, useState, useEffect } from "react";
import About from "./Components/About";
import Benefits from "./Components/Benefits";
import Card from "./Components/Card";
import ComingSoon from "./Components/ComingSoon";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Newsletter from "./Components/Newsletter";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Upcoming from "./Components/upcoming";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const coursesRef = useRef(null);
  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const teamRef = useRef(null);
  const scrollToTeam = () => {
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const testimonialRef = useRef(null);
  const scrollToTestimonial = () => {
    testimonialRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Nav
        scrollToCourses={scrollToCourses}
        scrollToAbout={scrollToAbout}
        scrollToTeam={scrollToTeam}
        scrollToContact={scrollToContact}
        scrollToTestimonial={scrollToTestimonial}
      />
      <Hero />
      <Card />

      <section ref={coursesRef}>
        <Courses />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <Benefits />

      <section ref={contactRef}>
        <Newsletter />
      </section>

      <ComingSoon />

      <section ref={teamRef}>
        <Team />
      </section>

      <section ref={testimonialRef}>
        <Testimonial />
      </section>

      <Upcoming />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default App;

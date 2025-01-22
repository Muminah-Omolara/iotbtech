import React, { useRef, useState, useEffect } from "react";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Card from "./components/Card";
import ComingSoon from "./components/ComingSoon";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Upcoming from "./components/upcoming";
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
    <div className="max-w-full overflow-x-hidden">
      <Nav
        scrollToCourses={scrollToCourses}
        scrollToAbout={scrollToAbout}
        scrollToTeam={scrollToTeam}
        scrollToContact={scrollToContact}
        scrollToTestimonial={scrollToTestimonial}
      />
      <Hero />
      <div className="font-Montserrat">
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
      </div>

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
    </div>
  );
}

export default App;

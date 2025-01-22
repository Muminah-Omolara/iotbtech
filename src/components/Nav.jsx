import React, { useState } from "react";
import Logo from "../assets/icons/iotbtech.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Nav = ({
  scrollToCourses,
  scrollToAbout,
  scrollToTeam,
  scrollToContact,
  scrollToTestimonial,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 shadow-md bg-white relative z-[1000] h-16">
      {/* Logo */}
      <div>
        <img
          src={Logo}
          alt="IOTB Tech Logo"
          className="w-28 h-28 md:w-32 md:h-32"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-16 md:space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
            HOME
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer transition-all duration-300"
            onClick={scrollToCourses}
          >
            COURSES
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer transition-all duration-300"
            onClick={scrollToAbout}
          >
            ABOUT
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer transition-all duration-300"
            onClick={scrollToTeam}
          >
            TEAM
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer transition-all duration-300"
            onClick={scrollToContact}
          >
            CONTACT
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer transition-all duration-300"
            onClick={scrollToTestimonial}
          >
            TESTIMONIAL
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        {isMenuOpen ? (
          <IoMdClose
            className="w-8 h-8 text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <HiMenuAlt3
            className="w-8 h-8 text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-10 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <li
              className="hover:text-blue-500 cursor-pointer transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </li>
            <li
              className="hover:text-blue-500 cursor-pointer transition-all duration-300"
              onClick={scrollToCourses}
            >
              COURSES
            </li>
            <li
              className="hover:text-blue-500 cursor-pointer transition-all duration-300"
              onClick={scrollToAbout}
            >
              ABOUT
            </li>
            <li
              className="hover:text-blue-500 cursor-pointer transition-all duration-300"
              onClick={scrollToTeam}
            >
              TEAM
            </li>
            <li
              className="hover:text-blue-500 cursor-pointer transition-all duration-300"
              onClick={scrollToContact}
            >
              CONTACT
            </li>
            <li
              className="hover:text-blue-500 cursor-pointer transition-all duration-300"
              onClick={scrollToTestimonial}
            >
              TESTIMONIAL
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

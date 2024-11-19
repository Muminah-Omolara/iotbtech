import Hamburger from "../assets/images/Vector.png";
import Logo from "../assets/icons/tektariq.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="mx-auto flex justify-between items-center w-full max-w-5xl px-8 py-4 lg:px-0 lg:py-0 ">
      <div className="w-[120px] ">
        <img src={Logo} alt="tektariq-logo" />
      </div>
      <div>
        <ul className="hidden md:flex text-xl p-5 ">
          <li
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-tt-black mr-3 border-b-2 border-tt-primary hover:text-tt-primary"
                  : "text-tt-grey-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-tt-grey mr-3  transition-colors hover:text-tt-primary text-md font-medium leading-6"
            >
              Who we are ?
            </NavLink>
            <NavLink
              to="/services"
              className="text-tt-grey mr-3 text-md transition-colors hover:text-tt-primary font-medium leading-6"
            >
              Our services
            </NavLink>
            <NavLink
              to="/portfolio"
              className="text-tt-grey mr-3 text-md transition-colors hover:text-tt-primary font-medium leading-6"
            >
              Our projects
            </NavLink>
            <NavLink
              to="/contact"
              className="text-tt-grey mr-3 text-md transition-colors hover:text-tt-primary font-medium leading-6"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden xl:flex md:flex">
        <Button text="Get Started" />
      </div>
      <div
        onClick={toggleMenu}
        className="xl:hidden block items-center focus:outline-none cursor-pointer"
      >
        <span className="text-4xl font-extrabold">
          <img src={Hamburger} alt="hamburger" />
        </span>
      </div>
      <div
        className={`fixed top-0 right-0 w-1/3 h-[350px] bg-tt-primary shadow-lg transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-5xl text-white">
            <IoIosClose />
          </button>
        </div>
        <ul
          className={`absolute xl:hidden top-20 left-0 w-full text-white flex flex-col
          items-start px-6 gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li
            className="flex flex-col cursor-pointer text-white transition-all"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            <NavLink to="/" className="mb-5">
              Home
            </NavLink>
            <NavLink to="/about" className="mb-5">
              Who we are ?
            </NavLink>
            <NavLink to="/services" className="mb-5">
              Our services
            </NavLink>
            <NavLink to="/portfolio" className="mb-5">
              Our projects
            </NavLink>
            <NavLink to="/contact" className="mb-5">
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

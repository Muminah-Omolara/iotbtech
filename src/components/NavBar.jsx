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
    <header className="mx-auto flex justify-between items-center w-full max-w-5xl px-8 py-4 lg:px-0 lg:py-0">

      <div className="w-[120px]">
        <img src={Logo} alt="tektariq-logo" />
      </div>
      <div>
      <ul className="hidden md:flex text-[16px] gap-9 p-5">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `mr-3 relative inline-block ${
          isActive
            ? "text-tt-black after:content-[''] after:absolute after:left-1  after:w-[30px] after:h-[3px] after:bg-tt-primary after:bottom-0"
            : "text-tt-grey"
        } transition-colors hover:text-tt-primary`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `mr-3 relative inline-block ${
          isActive
            ? "text-tt-black after:content-[''] after:absolute after:left-1 after:w-[30px] after:h-[3px] after:bg-tt-primary after:bottom-0"
            : "text-tt-grey"
        } transition-colors hover:text-tt-primary`
      }
    >
      Who we are?
    </NavLink>
    <NavLink
      to="/services"
      className={({ isActive }) =>
        `mr-3 relative inline-block ${
          isActive
            ? "text-tt-black after:content-[''] after:absolute after:left-1 after:w-[30px] after:h-[3px] after:bg-tt-primary after:bottom-0"
            : "text-tt-grey"
        } transition-colors hover:text-tt-primary`
      }
    >
      Our services
    </NavLink>
    <NavLink
      to="/portfolio"
      className={({ isActive }) =>
        `mr-3 relative inline-block ${
          isActive
            ? "text-tt-black after:content-[''] after:absolute after:left-1 after:w-[30px] after:h-[3px] after:bg-tt-primary after:bottom-0"
            : "text-tt-grey"
        } transition-colors hover:text-tt-primary`
      }
    >
      Our projects
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `mr-3 relative inline-block ${
          isActive
            ? "text-tt-black after:content-[''] after:absolute after:left-1  after:w-[30px] after:h-[3px] after:bg-tt-primary after:bottom-0"
            : "text-tt-grey"
        } transition-colors hover:text-tt-primary`
      }
    >
      Contact us
    </NavLink>
  </li>
</ul>

      </div>

      {/* Button Section */}
      <div className="hidden xl:flex md:flex">
        <Button text="Get Started" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        onClick={toggleMenu}
        className="xl:hidden flex items-center focus:outline-none cursor-pointer"
      >
        <span className="text-4xl font-extrabold">
          <img src={Hamburger} alt="hamburger" />
        </span>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-[350px] bg-tt-primary shadow-lg transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-5xl text-white">
            <IoIosClose />
          </button>
        </div>
        <ul className="flex flex-col justify-center items-start px-6 gap-4 font-semibold text-lg text-white mt-6">
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block pb-2 ${
                  isActive
                    ? "border-b-4 border-white"
                    : "text-gray-200 hover:text-gray-50"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block pb-2 ${
                  isActive
                    ? "border-b-4 border-white"
                    : "text-gray-200 hover:text-gray-50"
                }`
              }
            >
              Who we are?
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block pb-2 ${
                  isActive
                    ? "border-b-4 border-white"
                    : "text-gray-200 hover:text-gray-50"
                }`
              }
            >
              Our services
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `block pb-2 ${
                  isActive
                    ? "border-b-4 border-white"
                    : "text-gray-200 hover:text-gray-50"
                }`
              }
            >
              Our projects
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block pb-2 ${
                  isActive
                    ? "border-b-4 border-white"
                    : "text-gray-200 hover:text-gray-50"
                }`
              }
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

import Hamburger from "../assets/images/Vector.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import { IoCloseSharp } from "react-icons/io5";
import TheLogo from "./Logo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Our Services", path: "/services" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <NavLink to="/">
            <TheLogo />
          </NavLink>

          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoCloseSharp />
              ) : (
                <img src={Hamburger} alt="open menu" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-tt-black flex flex-col">
                  <NavLink
                    to={item.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "text-tt-primary relative before:content-[''] before:block before:absolute before:-bottom-1 before:left-0 before:w-6 before:h-1 before:border-b-2 before:border-tt-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-10"
                        : "hover:text-tt-primary transition-all duration-300"
                    }
                  >
                    <span className="">{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <NavLink to="/fellows/registration">
            <Button text="Get Started" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

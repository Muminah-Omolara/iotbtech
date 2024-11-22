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
  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Who we are?", path: "/about" },
    { title: "Our Services", path: "/services" },
    { title: "Our Projects", path: "/portfolio" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <NavLink to="/">
            <img src={Logo} alt="tektariq-logo" className="max-w-24" />
          </NavLink>

          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoIosClose />
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
                <li
                  key={idx}
                  className="text-tt-black hover:text-tt-primary flex flex-col"
                >
                  <NavLink to={item.path} ><span className="">{item.title}</span></NavLink>
                  {/* <span className="w-8 border-tt-primary border-b-2"></span> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <NavLink to="/contact">
            <Button text="Get Started" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

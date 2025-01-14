import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt, FaCog, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TheLogo from "./Logo";

const Sidebar = ({ isOpen, onToggle }) => {
  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: <FaBars size={20} /> },
    { path: "/profile", name: "Profile", icon: <FaUserAlt size={20} /> },
    { path: "/settings", name: "Settings", icon: <FaCog size={20} /> },
  ];

  return (
    <aside
      className={`bg-tt-white border-r-2 h-screen flex flex-col transition-all duration-300 relative
        ${isOpen ? "w-64" : "w-28"}`}
    >
    
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1.5 
          hover:bg-gray-50 transition-colors duration-200"
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isOpen ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
      </button>

      
      <div className="p-4 mb-2">
        <div className={`transition-all duration-300 ${isOpen ? "w-full" : "w-14"}`}>
          <TheLogo />
        </div>
      </div>

   
      <div className="mx-4 mb-6">
  <div className="bg-tt-primary text-white p-4 rounded-xl">
    <div className="flex items-center gap-4">
      <div className="bg-black min-w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shrink-0">
        M
      </div>
      <div className={`flex-1 transition-all duration-300 ${
        !isOpen 
          ? 'w-0 opacity-0 hidden' 
          : 'w-auto opacity-100'
      }`}>
        <h1 className="text-xl font-bold leading-tight truncate">MAJOR</h1>
        <p className="text-base opacity-90 truncate">Admitted</p>
      </div>
    </div>
  </div>
</div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? "bg-tt-primary text-white" 
                    : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <div className="min-w-[24px] flex items-center justify-center">
                  {item.icon}
                </div>
                <span
                  className={`text-sm font-medium whitespace-nowrap transition-opacity duration-200
                    ${!isOpen ? "opacity-0 w-0" : "opacity-100"}`}
                >
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 mt-auto border-t border-gray-200">
        <div className={`flex items-center gap-3 ${!isOpen && "justify-center"}`}>
          <div className="min-w-[24px] flex items-center justify-center">
            <FaUserAlt size={20} className="text-gray-600" />
          </div>
          <span
            className={`text-sm font-medium text-gray-600 transition-opacity duration-200
              ${!isOpen ? "opacity-0 w-0" : "opacity-100"}`}
          >
            Major
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
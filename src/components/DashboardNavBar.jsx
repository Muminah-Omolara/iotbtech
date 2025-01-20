import React, { useState } from "react";
import { FaBars, FaBell, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DashboardNavBar({ toggleSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile')
  }
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-tt-white border-b-2">
      <div className="mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Sidebar toggle and title */}
          <div className="flex items-center gap-4">
            <FaBars
              className="text-tt-primary text-2xl cursor-pointer hover:opacity-80 transition-opacity"
              onClick={toggleSidebar}
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-tt-black">
              Dashboard
            </h1>
          </div>

          {/* Notification and user icon */}
          <div className="flex items-center gap-4 relative">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <FaBell className="text-xl" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative">
              <button
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                onClick={toggleDropdown}
              >
                <FaUserAlt className="text-xl" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <ul>
                    <li onClick={handleProfileClick} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Settings
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavBar;

import React from "react";
import { FaBars, FaBell, FaUserAlt } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";

function DashboardNavBar({ toggleSidebar }) {
  return (
    <nav className="bg-tt-white border-b-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
         
          <div className="flex items-center gap-4">
            <FaBars
              className="text-tt-primary text-2xl cursor-pointer hover:opacity-80 transition-opacity"
              onClick={toggleSidebar}
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-tt-black">
              Dashboard
            </h1>
          </div>

          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <FaBell className="text-xl" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <FaUserAlt className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavBar;
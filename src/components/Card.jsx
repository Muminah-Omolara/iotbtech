import React from "react";
import { GrCertificate } from "react-icons/gr";
import { RiBook2Fill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div className="py-16 -mt-28 z-999 relative">
        <div className="container mx-auto flex justify-center space-x-4 px-4">
          {/* Certificate Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-52 h-48 p-4 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <GrCertificate className="text-blue-500 w-12 h-12 mb-4 hover:bg-blue-100 p-2 transition-colors" />
            <p className="text-gray-700 text-center text-lg font-bold">
              Recognized Certificates
            </p>
          </div>
          {/* Book Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-52 h-48 p-4 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <RiBook2Fill className="text-blue-500 w-12 h-12 mb-4 hover:bg-blue-100 p-2 transition-colors" />
            <p className="text-gray-700 text-center text-lg font-bold">
              In-demand Courses
            </p>
          </div>
          {/* Teacher Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-52 h-48 p-4 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <GiTeacher className="text-blue-500 w-12 h-12 mb-4 hover:bg-blue-100 p-2 transition-colors" />
            <p className="text-gray-700 text-center text-lg font-bold">
              Qualified Teachers
            </p>
          </div>
          {/* Free Learning Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-52 h-48 p-4 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <FaChalkboardTeacher className="text-blue-500 w-12 h-12 mb-4 hover:bg-blue-100 p-2 transition-colors" />
            <p className="text-gray-700 text-center text-lg font-bold">
              Free Learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

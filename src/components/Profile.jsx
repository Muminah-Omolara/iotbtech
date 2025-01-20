import React, { useState } from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaCalendarAlt, FaUser } from 'react-icons/fa';
import Sidebar from "../components/Sidebar";
import DashboardNavBar from "../components/DashboardNavBar";

const ProfilePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('./assets/images/bg.jpg')] bg-cover bg-center"
        style={{
          opacity: '0.3'
        }}
      />

      <div className="relative z-10 flex w-full">
        <div
          className={`fixed md:relative ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          transition-transform duration-300 ease-in-out h-full z-30 md:z-auto`}
        >
          <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div className="flex-1 flex flex-col min-h-screen w-full bg-opacity-50">


          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="rounded-2xl p-6 sm:p-8 md:p-9 bg-tt-primary shadow-lg mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-white">Fellow Profile</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <FaUserCircle className="w-16 h-16 text-tt-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Salihu Mubarak</h2>
                  <p className="text-gray-500">IOTB/2025/APP/0001</p>
                 
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm lg:col-span-2">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-semibold">Personal Information</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                        <FaUser className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Nickname</p>
                          <p className="text-gray-900">Major</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <FaEnvelope className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="text-gray-900">majorohinoyi@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <FaPhone className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-gray-900">+234 8133509187</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">State</p>
                          <p className="text-gray-900">Kogi State</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <FaBuilding className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Stack</p>
                          <p className="text-gray-900">Web Development</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <FaCalendarAlt className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Employment Status</p>
                          <p className="text-gray-900">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm lg:col-span-3">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-semibold">Application Status</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Current Stage</h3>
                        <p className="text-gray-500">Assessment Phase</p>
                      </div>
                      <span className="px-4 py-2 bg-emerald-100 text-tt-primary rounded-full text-sm">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

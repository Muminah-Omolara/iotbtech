import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavBar from "../components/DashboardNavBar";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        <div className={`
          fixed md:relative
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          transition-transform duration-300 ease-in-out
          h-full
          z-30 md:z-auto
        `}>
          <Sidebar isOpen={isSidebarOpen} onToggle={()=> setIsSidebarOpen(!isSidebarOpen)} />
        </div>

        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div className="flex-1 flex flex-col min-h-screen w-full bg-opacity-50">
          <DashboardNavBar toggleSidebar={toggleSidebar} />
          

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="rounded-2xl p-6 sm:p-8 md:p-9 bg-gradient-to-r from-emerald-500 from-20% via-green-500 via-30% to-emerald-500 to-90% shadow-lg">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-tt-white">
                Hello, Major. <br />
                <span className="font-bold block mt-2">
                  Welcome to your IOTBTECH Dashboard
                </span>
              </h1>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Fellow ID</h2>
                <p className="text-2xl font-extrabold">IOTB/2025/FEL/0001</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Take Assessment</h2>
              </div>
             
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
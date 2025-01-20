import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavBar from "../components/DashboardNavBar";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // {new chages}
  const videos = [
    { id: 1, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 2, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 3, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 4, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 5, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 6, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 7, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 8, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 9, title: "Introduction", videoId: "EMWNZtCYg5s" },
    { id: 10, title: "Introduction", videoId: "EMWNZtCYg5s" }
  ];

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
          <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
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
                <h2 className="text-lg font-semibold text-gray-800">Application ID</h2>
                <p className="text-2xl font-extrabold">IOTB/2025/APP/0001</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Take Assessment</h2>
              </div>
             
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
              </div>
            </div>

            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-gray-800">Pre-Admission Courses</h2>

              =
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {videos.map((video) => (
                  <div key={video.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <h3 className="text-md font-semibold text-gray-700">{video.title}</h3>
                    <div className="relative" style={{ paddingTop: '56.25%' }}>
                      <iframe 
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

        
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-700">Click the link below to access the PDF formats of the courses</h3>
              <a href="../assets/images/webdev.pdf" target="_blank" className="text-blue-500 hover:text-blue-700">
                Download PDFs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

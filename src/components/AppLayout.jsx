import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-24">
        {/* NavBar */}
        <div>
          <NavBar />
        </div>

        {/* Main Content */}
        <main className="flex-grow px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppLayout;

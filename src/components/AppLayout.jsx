import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../sections/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-24 font-montserrat">
        {/* NavBar */}
        <div>
          <NavBar />
        </div>

        {/* Main Content */}
        <main className="flex-grow">
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

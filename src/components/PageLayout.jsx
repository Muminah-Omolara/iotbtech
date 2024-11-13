import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PageLayout = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;

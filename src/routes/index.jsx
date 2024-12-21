import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import About from "../pages/About";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import SetPassword from "../pages/auth/SetPassword";
import PostDetails from "../pages/blog/PostDetails";
import PostListing from "../pages/blog/PostListing";
import ComponentTest from "../pages/ComponentTest";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Authentication pages */}
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
      </>

      {/* Website pages */}
      <Route path="/" element={<AppLayout />} errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/component-test" element={<ComponentTest />} />
      </Route>

      {/* Blog pages */}
      <>
        <Route path="/blogs" element={PostListing} />
        <Route path="/blogs/:id" element={PostDetails} />
      </>
    </>,
  ),
);

export default router;

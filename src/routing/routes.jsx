import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PageLayout from "../components/PageLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import TeamCard from "../components/TeamCard"; 
import TestimonialCard from "../components/TestimonialCard";
import Login from "../pages/Authentication/Login";
import ComponentTest from "../pages/ComponentTest";
import Register from "../pages/Authentication/Register";
import Forgot_Password from "../pages/Authentication/ForgotPassword";
import SetPassword from "../pages/Authentication/SetPassword";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PageLayout />} errorElement={<NotFound/>  }>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<TeamCard />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forget-password" element={<Forgot_Password/>} />
        <Route path="/set-password" element={<SetPassword/>} />
        <Route path="/testimonial" element={<TestimonialCard />} />
        <Route path="/component-test" element={<ComponentTest />} />
      </Route>
    </>,
  ),
);

export default router;

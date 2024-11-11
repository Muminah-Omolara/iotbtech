import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import TeamCard from "../components/TeamCard"; 
import TestimonialCard from "../components/TestimonialCard";
import Login from "../pages/Authentication/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<TeamCard />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/testimonial" element={<TestimonialCard />} />
      
    </>
  )
);

export default router;

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<TeamCard />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/testimonial" element={<TestimonialCard />} />
      <Route path="/component-test" element={<ComponentTest />} />
    </Route>,
  ),
);

export default router;

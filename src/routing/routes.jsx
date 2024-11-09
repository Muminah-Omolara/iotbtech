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
import ServiceCard from "../components/ServiceCard";
import Input from "../components/Input";
import Project from "../components/Project";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />


      <Route path="/serviceCard" element={<ServiceCard/>} />
      <Route path="/Input" element={<Input/>} />
      <Route path="/Project" element={<Project/>} />
    </>,
  ),
);

export default router;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import TeamCard from "../components/TeamCard";
import TestimonialCard from "../components/TestimonialCard";
import About from "../pages/About";
import Forgot_Password from "../pages/Authentication/ForgotPassword";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import SetPassword from "../pages/Authentication/SetPassword";
import ComponentTest from "../pages/ComponentTest";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />} errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<TeamCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgot_Password />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/testimonial" element={<TestimonialCard />} />
        <Route path="/component-test" element={<ComponentTest />} />
        <Route path="/blog" element={<p>Coming soon</p>} />
      </Route>
    </>,
  ),
);

export default router;

import AboutUs from "../sections/AboutUs";
import ServicesList from "../sections/ServicesList.jsx";
import Testimonials from "../sections/Testimonials";
import ServiceTeamCard from "../components/ServiceTeamCard"

const About = () => {
  return (
    <div>
      <AboutUs/>
      <ServicesList />
      <ServiceTeamCard />
      <Testimonials />
    </div>
  );
};

export default About;

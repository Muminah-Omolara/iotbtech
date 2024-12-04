import AboutUs from "../sections/AboutUs";
import ServiceWithImage from "../sections/ServiceWithImage";
import Testimonials from "../sections/Testimonials";
import ServiceTeamCard from "../components/ServiceTeamCard"


const About = () => {
  return (
    <div className="">
      <AboutUs/>
      <ServiceWithImage />
      <ServiceTeamCard />
      <Testimonials />
    </div>
  );
};

export default About;

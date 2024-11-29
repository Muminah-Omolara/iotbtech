import Aboutus from "../sections/Aboutus";
import ServiceWithImage from "../sections/ServiceWithImage";
import Testimonials from "../sections/Testimonials";
import ServiceTeamCard from "../components/ServiceTeamCard"


const About = () => {
  return (
    <div className="">
      <Aboutus/>
      <ServiceWithImage />
      <ServiceTeamCard />
      <Testimonials />
    </div>
  );
};

export default About;

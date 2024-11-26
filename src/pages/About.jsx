import Team from "../components/Teams";
import Aboutus from "../sections/Aboutus";
import ServiceWithImage from "../sections/ServiceWithImage";
import Testimonials from "../sections/Testimonials";


const About = () => {
  return (
    <div className="">
      <Aboutus/>
      <ServiceWithImage />
      <Team />
      <Testimonials />
    </div>
  );
};

export default About;

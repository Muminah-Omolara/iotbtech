import Clients from "../sections/Clients";
import HomeHero from "../sections/HomeHero";
import ServicesOffer from "../sections/HomeServicesOffer";
import WorkRealised from "../sections/WorkRealised";
import Testimonials from "../sections/Testimonials";
import ServiceWithImage from "../sections/ServiceWithImage";


const Home = () => {
  return (
    <div>
      <HomeHero />
      <Clients />
      <ServicesOffer />
      <ServiceWithImage />
      <WorkRealised />
      <Testimonials />
    </div>
  );
};

export default Home;

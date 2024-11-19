import Clients from "../sections/Clients";
import HomeHero from "../sections/HomeHero";
import ServicesOffer from "../sections/ServicesOffer";
import WorkRealised from "../sections/WorkRealised";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Clients />
      <ServicesOffer />
      <WorkRealised />
      <Testimonials />
    </div>
  );
};

export default Home;

import Clients from "../sections/Clients";
import HomeHero from "../sections/HomeHero";
import ServicesOffer from "../sections/ServicesOffer";
import WorkRealised from "../sections/WorkRealised";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Clients />
      <ServicesOffer />
      <WorkRealised />
      <TestimonialCard />
      
    </div>
  );
};

export default Home;

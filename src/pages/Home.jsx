import Clients from "../sections/Clients";
import HomeHero from "../sections/HomeHero";
import ServicesOffer from "../sections/ServicesOffer";
import WorkRealised from "../sections/WorkRealised";
import Testimonials from "../sections/Testimonials";
// import Project from "../components/Project"

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Clients />
      <ServicesOffer />
      {/* <Project /> */}
      <WorkRealised />
      <Testimonials />
    </div>
  );
};

export default Home;

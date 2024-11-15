import TeamCard from "../components/TeamCard";
import Login from "./Authentication/Login";
import Clients from "../sections/Clients";
import HomeHero from "../sections/HomeHero";
import ServicesOffer from "../sections/ServicesOffer";
import WorkRealised from "../sections/WorkRealised";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Clients />
      <ServicesOffer />
      <WorkRealised />
    </div>
  );
};

export default Home;

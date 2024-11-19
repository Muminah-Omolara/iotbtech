import ProjectPortfolioCard from "../components/ProjectPortfolioCard"
import ProjectPortfolioHero from "../components/ProjectPortfolioHero"
import ProjectStats from "../sections/ProjectStats"
import TestimonialCard from "../components/TestimonialCard"

const Portfolio = () => {
  return (
    <div>
      <ProjectPortfolioHero />
      <ProjectStats />
      <ProjectPortfolioCard />
      <TestimonialCard />
    </div>
  )
}

export default Portfolio
import ProjectPortfolioCard from "../components/ProjectPortfolioCard"
import ProjectPortfolioHero from "../components/ProjectPortfolioHero"
import ProjectStats from "../sections/ProjectStats"

const Portfolio = () => {
  return (
    <div>
      <ProjectPortfolioHero />
      <ProjectStats />
      <ProjectPortfolioCard />
    </div>
  )
}

export default Portfolio
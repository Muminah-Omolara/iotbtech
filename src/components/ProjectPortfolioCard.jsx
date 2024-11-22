import Button from "../components/Button";
import ProjectWithImageCard from "../components/ProjectWithImageCard";
import { MdOutlineNavigateNext } from "react-icons/md";
import services from "../data/services";
import { useState } from "react";

const ProjectPortfolioCard = () => {
  const [showAll, setShowAll] = useState(false);

  const handleExploreButton = () => {
    console.log("Button is Clicked");
    setShowAll(true);
  };
  return (
    <div>
      <div className="block gap-5 mt-20">
        {services.slice(0, 3).map((service, index) => (
          <ProjectWithImageCard
            key={service.title}
            title={service.title}
            description={service.description}
            body={service.body}
            img={service.image}
            inverseOrder={index % 2 === 1}
          />
        ))}

        {showAll &&
          services
            .slice(3)
            .map((service, index) => (
              <ProjectWithImageCard
                key={service.title}
                title={service.title}
                description={service.description}
                body={service.body}
                img={service.image}
                inverseOrder={(index + 3) % 2 === 1}
              />
            ))}
      </div>
      {!showAll && (
        <div
          className="flex items-center justify-center mt-12 mb-10 px-8"
          onClick={handleExploreButton}
        >
          <Button
            type="outline"
            text="Explore More Projects"
            icon={<MdOutlineNavigateNext />}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectPortfolioCard;

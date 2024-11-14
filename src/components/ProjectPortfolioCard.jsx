import Button from "../components/Button"
import ServiceWithImageCard from "../components/ServiceWithImageCard"
import { MdOutlineNavigateNext } from "react-icons/md";
import services from "../data/services";
import { useState } from "react";

const ProjectPortfolioCard = () => {
    const [showAll, setShowAll] = useState(false)

    const handleExploreButton = () => {
        console.log("Button is Clicked")
        setShowAll(true)
    }
    return (
        <div>
            <div className="block gap-5 mt-20">
                {services.slice(0, 3).map((service) => (
                    <ServiceWithImageCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        body={service.body}
                        img={service.image}
                    />
                ))}

                {showAll && services.slice(3).map((service) => (
                    <ServiceWithImageCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        body={service.body}
                        img={service.image}
                    />
                ))}
            </div>
            {!showAll && (
                <div className="flex items-center justify-center mt-12 mb-10">
                    <Button
                        type="outline"
                        text="Explore More Projects"
                        icon={<MdOutlineNavigateNext />}
                        onClick={handleExploreButton}
                    />
                </div>
            )}
        </div>
    )
}

export default ProjectPortfolioCard

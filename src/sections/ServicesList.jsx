import { useState } from "react";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import OurServiceWithImage from "../components/OurServiceWithImage";
import {Stacks} from "../data/Stacks";


const ServicesList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Stacks.length - 1
      
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Stacks.length - 1 ? prevIndex + 1 : 0
    );
  };

    return (
        <div className="px-4 sm:px-6 lg:px-8 ">
            <div className="lg:max-w-7xl mx-auto ">
                <div className="">
                    <OurServiceWithImage
                        key={currentIndex}
                        title={Stacks[currentIndex].title}
                        description={Stacks[currentIndex].description}
                        img={Stacks[currentIndex].image}
                    />
                </div>
                 <div className="flex lg:justify-end justify-center gap-6 pt-8 pr-24">
                    <button onClick={handlePrevious} aria-label="Previous Service" className="text-tt-primary ">
                        <BsArrowLeftCircle size={28}/> 
                    </button>
                    <button onClick={handleNext} aria-label="Next Service" className="text-tt-primary ">
                        <BsArrowRightCircle size={28}/> 
                    </button>
                </div>

                
            </div>
        </div>
    );
};
export default ServicesList;

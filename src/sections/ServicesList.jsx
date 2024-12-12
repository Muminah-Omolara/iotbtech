import { useState } from "react";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import OurServiceWithImage from "../components/OurServiceWithImage";
import {Stacks} from "../data/Stacks";

console.log("Stacks data:", Stacks);
// import Rectangle from "../assets/icons/Rectangle.svg";

const ServicesList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>{
      const newIndex = prevIndex > 0 ? prevIndex - 1 : Stacks.length - 1;
      console.log("Previous button clicked. New Index:", newIndex);
      return newIndex;
    }
      
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>{
      const newIndex = prevIndex < Stacks.length - 1 ? prevIndex + 1 : 0;
      console.log("Next button clicked. New Index:", newIndex);
      return newIndex;
    }
      
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
                 <div className="flex justify-end gap-6 pt-8 pr-12">
                    <button onClick={handlePrevious} className="text-tt-primary ">
                        <BsArrowLeftCircle size={28}/> 
                    </button>
                    <button onClick={handleNext} className="text-tt-primary ">
                        <BsArrowRightCircle size={28}/> 
                    </button>
                </div>

                
            </div>
        </div>
    );
};
export default ServicesList;

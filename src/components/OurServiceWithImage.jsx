import { useState } from "react";
import {titik} from "../assets/icons";
import { Stacks } from "../data/Stacks";



const OurServiceWithImage = ({title, description, img}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // // Handlers for navigation
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
        <div className=" my-20">
            <div className=" space-y-6">
                <h2 className="text-tt-primary lg:text-left text-left text-xl md:text-2xl lg:text-3xl font-bold">
                    Our Services
                </h2>
                </div>
      {/* Card Display */}
      <div className="flex flex-row mt-8 gap-64">
      <div className="flex flex-col w-1/2">
        <h2 className="text-xl font-bold">{Stacks[currentIndex].title}</h2>
        <p className="text-gray-600 mt-2">{Stacks[currentIndex].description}</p>
      </div>

      <div>
        <div className="relative">
        <img
          src={Stacks[currentIndex].image}
          alt={Stacks[currentIndex].title}
          className="  object-cover w-56 h-56"
          
        />
        <img
          src={titik}
          alt="pattern"
          className="absolute hidden sm:block -top-6 left-28 -z-10"
        />
      </div>
      </div>
      </div>
     
           
        </div>
    );
};

export default OurServiceWithImage;

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import OurServiceWithImage from "../components/OurServiceWithImage";
import { stacks } from "../data/Stacks";
import useCarousel from "../hooks/useCarousel";

const ServicesList = () => {
  const { currentIndex, visibleItems, handleNext, handlePrev } = useCarousel(
    stacks,
    { lg: 1, sm: 1 },
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="lg:max-w-7xl mx-auto ">
        <div className="">
          {visibleItems.map((item, idx) => (
            <OurServiceWithImage
              key={idx}
              title={item.title}
              description={item.description}
              img={item.image}
            />
          ))}
        </div>
        <div className="flex lg:justify-end justify-center gap-6 pt-8 lg:pr-24">
          <button
            onClick={handlePrev}
            aria-label="Previous Service"
            className="text-tt-primary "
          >
            <BsArrowLeftCircle size={28} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Service"
            className="text-tt-primary "
          >
            <BsArrowRightCircle size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ServicesList;

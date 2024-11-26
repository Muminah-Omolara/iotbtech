import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import OurServiceWithImage from "../components/OurServiceWithImage";

const ServiceWithImage = () => {
  return (
    <>
      <div className="flex flex-row justify-start lg:my-10 mb-24 mx-4 lg:justify-between lg:items-center ">
        <div className="flex flex-col lg:flex-row lg:mx-24 items-left">
          <OurServiceWithImage
            title="Ui /Ux , Web Design"
            description="With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users"
          />
        </div>
      </div>
      <div className="flex lg:justify-end lg:items-end gap-6 mr-56 flex-row lg:mb-24">
        <button className="text-tt-primary hidden sm:block">
          <BsArrowLeftCircle size={28} />
        </button>
        <button className="text-tt-primary hidden sm:block">
          <BsArrowRightCircle size={28} />
        </button>
      </div>
    </>
  );
};
export default ServiceWithImage;

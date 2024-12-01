import { titik } from "../assets/icons";
import Rectangle from "../assets/icons/Rectangle.svg";

const OurServiceWithImage = ({ title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-left justify-left lg:justify-center lg:items-center px-4 sans lg:gap-10 mt-20 lg:max-w-7xl ">
      <div className="flex flex-col lg:mt-20 ">
        <h2 className="text-tt-primary lg:text-left text-left text-xl md:text-2xl lg:text-3xl font-bold">
          Our Services
        </h2>
        <div className="flex flex-col lg:flex-col lg:mt-4 mt-4 lg:w-2/3">
          <h1 className="text-tt-black font-bold text-4xl">{title}</h1>
          <p className="text-tt-grey text-lg mt-4 ">{description}</p>
        </div>
      </div>
      <div className="relative flex lg:justify-center lg:items-center lg:mr-32 lg:mb-6">
        <img
          src={titik}
          alt=""
          className=" left-24  absolute inset-0 object-cover z-10 hidden sm:block sm:items-left mx-4 lg:mt-10 "
        />
        <img src={Rectangle} alt="" className="relative  z-10 top-12" />
      </div>
    </div>
  );
};

export default OurServiceWithImage;

import Rectangle from "../assets/icons/Rectangle.svg";
import { titik } from "../assets/icons";

const OurServiceWithImage = ({title, description}) => {
  return (
    <div className=" mt-2 lg:mt-20 flex flex-col lg:flex-row lg:justify-between lg:gap-48 sm:text-left mx-4 ">
      <div className="flex flex-col lg:mt-20">
          <h1 className="text-tt-primary lg:text-left text-left font-bold sans">Our Services</h1>
        <div className="flex flex-col lg:flex-col lg:mt-4 mt-4">
          <h1 className="text-tt-black font-bold text-4xl">{title}</h1>
          <p className="text-tt-grey text-lg mt-4">{description}</p>
        </div>
        </div>
        <div className="relative flex lg:justify-center lg:items-center lg:w-1/2 lg:mr-24">
            <img
              src={titik}
              alt=""
              className=" left-20  absolute inset-0 object-cover z-10 hidden sm:block sm:items-left mx-4 lg:mt-10 "
            />
            <img
              src={Rectangle}
              alt=""
              className="relative  z-10 top-6"
            />
          </div>
    </div>
  )
}

export default OurServiceWithImage
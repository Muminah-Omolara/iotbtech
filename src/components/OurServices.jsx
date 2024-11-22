import { MdOutlineNavigateNext } from "react-icons/md";
import Button from "../components/Button";
import { FaRegMessage } from "react-icons/fa6";

const OurServices = ({ title, description, desc, icon }) => {
  return (
    <div className="w-auto flex flex-col lg:flex-col sm:text-left">
      <div className="w-auto lg:justify-center sm:items-left lg:items-center flex flex-col lg:flex-col gap-4 lg:px-96">
        <h1 className="text-tt-black flex text-2xl text-left lg:text-center font-bold mt-3">
          {title}
        </h1>
        <p className="text-tt-grey flex text-left lg:text-center text-md mt-2">
          {description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-left lg:justify-center pt-6">
        <Button type="solid" text="Let's Talk" icon={<FaRegMessage />} />
        <Button
          type="outline"
          text="Check Our Projects"
          icon={<MdOutlineNavigateNext />}
        />
      </div>
    </div>
  );
};

export default OurServices;

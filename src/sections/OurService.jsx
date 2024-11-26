import Button from "../components/Button";
import OurServices from "../components/OurServices";
import { BsChatLeft } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <>
    <div className="text-left px-4 ">
      <h2 className="text-tt-primary lg:text-center text-left font-bold ">
        Our Services
      </h2>
      <div>
        <OurServices
          title="Services we Offer"
          description="With Our Awesome team we offres a variaty of services from UI/UX design to Video Productions,Our Goal is to help you on your Road to Create your product"
          desc="Check Our Projects"
        />
      </div>
  
       <div className="flex flex-col lg:flex-row mx-auto justify-center lg:justify-center mt-9 mb-8 gap-5 -z-50">
            <Link to="/contact">
              <Button
                text="Lets Talk"
                type="solid"
                icon={<BsChatLeft />}
              />
            </Link>
            <Link to="/portfolio">
              <Button text="Check our Services" type="outline" icon={<MdOutlineNavigateNext />} />
            </Link>
          </div>
    </div>
    </>
  );
};

export default OurService;

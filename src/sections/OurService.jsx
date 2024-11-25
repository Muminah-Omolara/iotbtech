import Button from "../components/Button";
import OurServices from "../components/OurServices";
import { BsChatLeft } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";

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
       <div className="justify-center items-center flex flex-row gap-8">
        <Button text="Let's Talk" icon={<BsChatLeft />}  type="solid"/>
        <div>
       <Button text="Check Our Projects" type="outline"  icon={<MdOutlineNavigateNext />} />
       
       </div>
      </div>
    </div>
    </>
  );
};

export default OurService;

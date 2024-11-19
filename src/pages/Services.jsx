import OurService from "../sections/OurService";
import OurProcess from "../sections/OurProcess";
import ServiceWithImage from "../sections/ServiceWithImage";

const Services = () => {
  return (
    <div className=" justify-center items-center w-auto">
      <OurService />
      <OurProcess />
      <ServiceWithImage />
    </div>
  );
};

export default Services;

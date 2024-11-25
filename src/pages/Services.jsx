import OurService from "../sections/OurService";
import OurProcess from "../sections/OurProcess";
import ServiceWithImage from "../sections/ServiceWithImage";
import Testimonials from "../sections/Testimonials";

const Services = () => {
  return (
    <div className=" justify-center items-center w-auto">
      <OurService />
      <OurProcess />
      <ServiceWithImage />
      <Testimonials />
    </div>
  );
};

export default Services;

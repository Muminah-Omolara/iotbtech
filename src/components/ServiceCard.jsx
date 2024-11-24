import Button from "../components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description }) => {
  return (
    <div className="shadow-sm rounded-lg p-2 w-full flex flex-col justify-between items-start px-5">
      <h2 className="text-2xl font-semibold text-tt-primary mb-4">{title}</h2>
      <p className="text-tt-grey mb-4">{description}</p>
      <Button
        type="outline"
        text="Learn More"
        icon={<MdOutlineNavigateNext />}
      />
    </div>
  );
};

export default ServiceCard;


import { nextIcon } from "../assets/icons";
import Button from "../components/Button";
import ImagesComponent from "./ImagesComponent";
import { MdOutlineNavigateNext } from "react-icons/md";

const ServiceCard = ({ title, description, showButton = true }) => {
  return (
    <div className="shadow-sm rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold text-tt-primary mb-4">{title}</h2>
      <p className="text-tt-black mb-4">{description}</p>
      <Button
        type="outline"
        text="Learn More"
        icon={<MdOutlineNavigateNext />}
      />
    </div>
  );
};

export default ServiceCard;

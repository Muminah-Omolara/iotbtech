import { Link } from "react-router-dom";
import Button from "./Button";
import { MdOutlineNavigateNext } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="shadow-sm rounded-lg py-2 w-full min-h-full flex flex-col justify-between items-start">
      <img src={img} alt={title} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-2xl font-semibold text-tt-primary mb-4">{title}</h2>
      <p className="text-tt-grey mb-4">{description}</p>
      <Link to="/portfolio" onClick={() => { window.scrollTo(0, 0); }}>
        <Button
          type="outline"
          text="Learn More"
          icon={<MdOutlineNavigateNext />}
        />
      </Link>
    </div>
  );
};

export default ServiceCard;

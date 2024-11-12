import Button from "./Button";
import { MdOutlineNavigateNext } from "react-icons/md";

const ServiceWithImageCard = ({ title, description, body, linkTo, img }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <div className="flex-1 pr-6">
        <p className="text-tt-primary font-semibold mb-4">{title}</p>
        <h2 className="text-2xl font-semibold text-tt-black mb-2">
          {description}
        </h2>
        <p className="text-tt-black mb-4">{body}</p>
        <a href={linkTo}>
          <Button
            type="outline"
            text="Learn More"
            icon={<MdOutlineNavigateNext />}
          />
        </a>
      </div>

      <div className="flex-shrink-0">
        <img
          src={img}
          alt={title}
          className="rounded-lg w-full h-auto max-w-sm object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceWithImageCard;

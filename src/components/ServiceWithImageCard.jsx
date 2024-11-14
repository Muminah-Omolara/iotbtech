import Button from "./Button";
import { MdOutlineNavigateNext } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const ServiceWithImageCard = ({ title, description, body, linkTo, img }) => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
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
          className="rounded-lg w-full h-auto max-w-sm object-cover mt-5 lg:mt-0"
        />
      </div>
    </div>
  );
};

export default ServiceWithImageCard;

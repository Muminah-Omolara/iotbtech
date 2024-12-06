const TestimonialCard = ({ testimonial, image, name, portfolio }) => {
  return (
    <div className=" text-left rounded-lg flex flex-col mx-auto">
      <div className="w-[28rem] animate-none translate-x-1">
      <p className="font-normal text-base text-tt-grey pb-5">{testimonial}</p>
      <div className="text-justify flex flex-row gap-3">
        <div>
          <img
            src={image}
            alt={`${name}'s profile`}
            className="w-12 h-12 rounded-full  mb-4 object-cover"
          />
        </div>
        <div className="text-justify">
          <h3 className="text-lg font-semibold  text-tt-black ">{name}</h3>
          <p className="text-base font-medium text-tt-grey">{portfolio}</p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default TestimonialCard;

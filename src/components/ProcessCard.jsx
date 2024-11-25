const ProcessCard = ({ title, description, index }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center p-4 lg:gap-24 sans lg:mt-12 ">
      <div className=" flex flex-col sm:w-48 lg:w-56 ">
        <div className="text-3xl font-bold text-tt-primary flex flex-row gap-4">
          {index}
          <h1 className="text-tt-black  text-xl pt-1 ">{title}</h1>
        </div>
        <p className="text-tt-grey text-sm py-4">{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;

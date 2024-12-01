const OurServices = ({ title, description, desc, icon }) => {
  return (
    <div className="w-full flex flex-col lg:flex-col sm:text-left">
      <div className="w-auto lg:justify-center sm:items-left lg:items-center flex flex-col lg:flex-col gap-4 ">
        <h1 className="text-tt-black text-2xl text-left lg:text-2xl font-bold mt-3">{title}</h1>
        <p className="text-tt-grey text-left lg:text-lg text-md mt-2 max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default OurServices;



const OurServiceWithImage = ({title, description}) => {
  return (
    <div className=" mt-2 lg:mt-20 flex flex-col lg:flex-row lg:gap-48 lg:justify-between sm:text-left mx-4 items-left lg:items-start">
      <div className="flex flex-col lg:w-1/2">
          <h1 className="text-tt-primary lg:text-left text-left font-bold sans">Our Services</h1>
        <div className="flex flex-col lg:flex-col lg:mt-4 lg:w-[550px]">
          <h1 className="text-tt-black font-bold text-[34px]">{title}</h1>
          <p className="text-tt-grey text-[22px]">{description}</p>
        </div>
        </div>
    </div>
  )
}

export default OurServiceWithImage